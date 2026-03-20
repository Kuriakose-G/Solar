"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
// postprocessing for gentle bloom/glow
// @ts-expect-error: example imports don't ship types in this project setup
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// @ts-expect-error missing types in examples import
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// @ts-expect-error missing types in examples import
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

export function SolarHero3D({ background }: { background?: boolean } = {}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup — transparent canvas to allow CSS gradient background
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Composer (bloom) setup
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.7,
      0.8,
      0.2
    );
    composer.addPass(bloomPass);

    // Golden particle system (lower count for perf, warm tones)
    const particleCount = 900;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const seeds = new Float32Array(particleCount);

    const color1 = new THREE.Color(0xffd27f); // warm gold
    const color2 = new THREE.Color(0xff9f3b); // amber

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // distribute in an ellipsoid above the panel area
      positions[i3] = (Math.random() - 0.5) * 6;
      positions[i3 + 1] = Math.random() * 3 - 0.5; // biased upwards
      positions[i3 + 2] = (Math.random() - 0.5) * 4;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      seeds[i] = Math.random() * Math.PI * 2;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Lighting — simulate sun + warm ambient
    const ambient = new THREE.AmbientLight(0xfff1db, 0.45); // soft warm ambient
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffe89a, 1.2);
    sun.position.set(5, 6, 2);
    sun.castShadow = false;
    scene.add(sun);

    // Simple warm rim light to emphasize edges
    const rim = new THREE.DirectionalLight(0xffd7a6, 0.35);
    rim.position.set(-4, 2, -2);
    scene.add(rim);

    // Simple solar panel group (subtle, low-poly to represent generation)
    const panelGroup = new THREE.Group();
    const panelRows = 2;
    const panelCols = 4;
    const panelGeo = new THREE.PlaneGeometry(1.0, 0.6, 1, 1);
    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b2b3a,
      metalness: 0.6,
      roughness: 0.25,
      emissive: 0x000000,
      emissiveIntensity: 0,
    });

    const panels: THREE.Mesh[] = [];
    for (let r = 0; r < panelRows; r++) {
      for (let c = 0; c < panelCols; c++) {
        const mesh = new THREE.Mesh(panelGeo, panelMaterial.clone());
        mesh.rotation.x = -Math.PI / 6; // tilt towards sun
        mesh.position.x = (c - (panelCols - 1) / 2) * 1.05;
        mesh.position.y = r * -0.55 - 0.6;
        mesh.position.z = 0;
        mesh.receiveShadow = false;
        mesh.castShadow = false;
        panels.push(mesh);
        panelGroup.add(mesh);
      }
    }
    panelGroup.position.y = -0.2;
    panelGroup.scale.setScalar(1.0);
    scene.add(panelGroup);

    // moving highlight across panels (a thin plane with additive material)
    const highlightGeo = new THREE.PlaneGeometry(panelCols * 1.05, 0.25);
    const highlightMat = new THREE.MeshBasicMaterial({
      color: 0xfff1c8,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const highlight = new THREE.Mesh(highlightGeo, highlightMat);
    highlight.rotation.x = -Math.PI / 6 + 0.001;
    highlight.position.y = -0.55;
    highlight.position.z = 0.01;
    scene.add(highlight);

    // Animation state
    let mouseX = 0;
    let mouseY = 0;
    let hover = false;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };
    document.addEventListener("mousemove", onMouseMove);

    const onPointerEnter = () => (hover = true);
    const onPointerLeave = () => (hover = false);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    // gentle per-vertex animation variables
    const basePositions = new Float32Array(positions);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // subtle flowing motion by moving points along a sine field (optimized)
      const posAttr = particles.attributes.position as THREE.BufferAttribute;
      const pArray = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const seed = seeds[i];
        pArray[i3] = basePositions[i3] + Math.sin(time + seed) * 0.03;
        pArray[i3 + 1] = basePositions[i3 + 1] + Math.cos(time * 0.8 + seed) * 0.035;
      }
      posAttr.needsUpdate = true;

      // gentle rotation for depth
      particleSystem.rotation.x += 0.00035;
      particleSystem.rotation.y += 0.0005;

      // Panel emissive pulsing to represent energy flow
      panels.forEach((pl, idx) => {
        const m = pl.material as THREE.MeshStandardMaterial;
        const base = 0.05 + Math.abs(Math.sin(time * 1.2 + idx * 0.5)) * 0.25;
        m.emissive = new THREE.Color(0xffd27f).multiplyScalar(base * (hover ? 1.8 : 1.0));
        m.emissiveIntensity = base * (hover ? 1.6 : 1.0);
      });

      // moving highlight sweep across panels
      highlight.position.x = Math.sin(time * 0.9) * 1.2;
      highlightMat.opacity = 0.25 + Math.max(0, Math.sin(time * 2.0)) * 0.4 * (hover ? 1.4 : 1.0);

      // Camera animation based on mouse (smooth follow, lerp)
      const targetX = mouseX * 0.00006;
      const targetY = -mouseY * 0.00006;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // render with composer for bloom
      composer.setSize(container.clientWidth, container.clientHeight);
      composer.render();
    };

    animate();

    // Handle resize
    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      composer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      if (container && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }

      // dispose Three objects
      try {
        composer.dispose();
      } catch {
        /* ignore */
      }
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      // dispose panel materials/geometries
      panels.forEach((p) => {
        (p.material as THREE.Material).dispose();
        p.geometry.dispose();
      });
      highlightMat.dispose();
      highlightGeo.dispose();
      panelGeo.dispose();
    };
  }, []);

  // When used as a background, avoid extra borders/rounded corners and let parent control layout
  const wrapperClass = background
    ? "absolute inset-0 w-full h-full -z-20"
    : "h-full w-full rounded-2xl overflow-hidden border border-green-500/20 shadow-xl bg-gradient-to-b from-amber-50 via-yellow-50 to-sky-50";

  return (
    <div className={wrapperClass} aria-hidden={background ? true : undefined}>
      <div ref={mountRef} className="h-full w-full" />
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUpNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section className="py-16 bg-background" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all">
            <p className="text-5xl font-bold text-green-400">
              {isVisible && <CountUpNumber end={1200000} duration={2500} />}
              {!isVisible && "0"}
            </p>
            <p className="text-muted-foreground mt-2">Tonnes of CO₂ Saved</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all">
            <p className="text-5xl font-bold text-green-400">
              {isVisible && <CountUpNumber end={500} duration={2500} />}
              {!isVisible && "0"}
              <span className="text-3xl">MW</span>
            </p>
            <p className="text-muted-foreground mt-2">of Solar Power Installed</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all">
            <p className="text-5xl font-bold text-green-400">
              {isVisible && <CountUpNumber end={20000} duration={2500} />}
              {!isVisible && "0"}
              <span className="text-3xl">+</span>
            </p>
            <p className="text-muted-foreground mt-2">Homes Powered by Solar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-green-500/20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white">
            Join Our Green Community
          </h3>
          <p>
            Get the latest on renewable energy, special offers, and tips.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border border-green-500/30 rounded-md px-4 py-2 w-full text-white focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-500 text-black font-semibold px-6 py-2 rounded-md transition-all duration-300 hover:bg-green-400"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Company</h3>
          <nav className="flex flex-col gap-3 mt-4">
            <Link href="/about" className="nav-link transition-colors">About Us</Link>
            <Link href="/blog" className="nav-link transition-colors">Blog</Link>
            <Link href="/contact" className="nav-link transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Products</h3>
          <nav className="flex flex-col gap-3 mt-4">
            <Link href="/products" className="nav-link transition-colors">Solar Panels</Link>
            <Link href="/products" className="nav-link transition-colors">Inverters</Link>
            <Link href="/products" className="nav-link transition-colors">Batteries</Link>
          </nav>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Legal</h3>
          <nav className="flex flex-col gap-3 mt-4">
            <Link href="/terms" className="nav-link transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="nav-link transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-green-500/20 pt-8">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Solar Inc. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" aria-label="Facebook"><FaFacebook className="h-6 w-6 transition-colors hover:text-[hsl(var(--primary))] transform hover:-translate-y-0.5" /></Link>
          <Link href="#" aria-label="Twitter"><FaTwitter className="h-6 w-6 transition-colors hover:text-[hsl(var(--primary))] transform hover:-translate-y-0.5" /></Link>
          <Link href="#" aria-label="Instagram"><FaInstagram className="h-6 w-6 transition-colors hover:text-[hsl(var(--primary))] transform hover:-translate-y-0.5" /></Link>
          <Link href="#" aria-label="LinkedIn"><FaLinkedin className="h-6 w-6 transition-colors hover:text-[hsl(var(--primary))] transform hover:-translate-y-0.5" /></Link>
        </div>
      </div>
    </footer>
  );
}

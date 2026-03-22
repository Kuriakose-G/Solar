import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-green-500/20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white">
            Join Our Green Community
          </h3>
          <p className="text-gray-400">
            Get the latest on renewable energy, special offers, and tips.
          </p>
          <form className="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border border-green-500/30 rounded-md px-4 py-2 w-full text-white focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-green-500 text-black font-semibold px-6 py-2 rounded-md shadow-md shadow-green-500/30 transition-all duration-300 hover:bg-green-400 hover:shadow-green-400/50"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Company</h3>
          <nav className="flex flex-col gap-3 mt-4">
            <Link href="/about" className="text-gray-400 nav-link hover:text-green-400 transition-colors">About Us</Link>
            <Link href="/blog" className="text-gray-400 nav-link hover:text-green-400 transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-400 nav-link hover:text-green-400 transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Products</h3>
          <nav className="flex flex-col gap-3 mt-4">
            <Link href="/products" className="text-gray-400 nav-link hover:text-green-400 transition-colors">Solar Panels</Link>
            <Link href="/products" className="text-gray-400 nav-link hover:text-green-400 transition-colors">Inverters</Link>
            <Link href="/products" className="text-gray-400 nav-link hover:text-green-400 transition-colors">Batteries</Link>
          </nav>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Legal</h3>
          <nav className="flex flex-col gap-3 mt-4">
            <Link href="/terms" className="text-gray-400 nav-link hover:text-green-400 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-400 nav-link hover:text-green-400 transition-colors">Privacy Policy</Link>
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

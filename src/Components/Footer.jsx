import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">NeoMart</h2>
          <p className="text-gray-400">
            NeoMart is your one-stop online shop for jewelry, gaming gear,
            electronics, and trendy clothing for men and women.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Categories</h3>
          <ul className="space-y-2 text-gray-400">
            <li>All Products</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
            <li>Jewelery</li>
            <li>Electronics</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" size={20} />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" size={20} />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" size={20} />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" size={20} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NeoMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

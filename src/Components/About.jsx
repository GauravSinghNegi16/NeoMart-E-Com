import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// About component for NeoMart (E-commerce Website)
export default function About() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Top-left back button */}
      <button
        aria-label="Go back"
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 inline-flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FiArrowLeft className="h-5 w-5" />
      </button>

      <div className="mx-auto max-w-7xl px-8 py-12 md:py-20">
        <div className="rounded-2xl bg-white p-10 shadow-lg">
          <header className="mb-6">
            <h1 className="text-4xl font-semibold leading-tight">About NeoMart</h1>
            <p className="mt-2 text-base text-gray-500">
              Your trusted destination for smart and seamless online shopping.
            </p>
          </header>

          <section className="mb-12 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-medium">Who We Are</h2>
              <p className="mt-4 text-lg text-gray-600">
                NeoMart is a modern e-commerce platform built to provide customers with a fast,
                secure, and enjoyable shopping experience. From trending gadgets to everyday
                essentials, we bring the best products to your fingertips.
              </p>

              <h3 className="mt-8 text-xl font-medium">Why Choose NeoMart?</h3>
              <ul className="mt-4 list-inside list-disc text-lg text-gray-600">
                <li>Wide range of categories and top-quality products</li>
                <li>Affordable pricing with exciting deals & offers</li>
                <li>Secure checkout and reliable delivery</li>
              </ul>
            </div>

            <div className="flex items-center rounded-lg border border-dashed border-gray-200 p-8">
              <div>
                <h3 className="text-xl font-medium">Built for Shoppers</h3>
                <p className="mt-4 text-lg text-gray-600">
                  NeoMart ensures a smooth journey from product discovery to checkout. With our
                  responsive design, you can shop anywhere, anytime — on desktop, tablet, or
                  mobile.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium">Our Features</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-gray-50 p-6">
                <h4 className="text-lg font-medium">Vast Product Range</h4>
                <p className="mt-3 text-gray-600">From electronics to lifestyle — all in one place.</p>
              </div>

              <div className="rounded-lg border bg-gray-50 p-6">
                <h4 className="text-lg font-medium">Fast Delivery</h4>
                <p className="mt-3 text-gray-600">Quick shipping with real-time order tracking.</p>
              </div>

              <div className="rounded-lg border bg-gray-50 p-6">
                <h4 className="text-lg font-medium">Secure Payments</h4>
                <p className="mt-3 text-gray-600">Trusted gateways to protect your transactions.</p>
              </div>

              <div className="rounded-lg border bg-gray-50 p-6">
                <h4 className="text-lg font-medium">Customer Support</h4>
                <p className="mt-3 text-gray-600">24/7 assistance for all your shopping needs.</p>
              </div>

              <div className="rounded-lg border bg-gray-50 p-6">
                <h4 className="text-lg font-medium">Exclusive Deals</h4>
                <p className="mt-3 text-gray-600">Special offers and discounts for our shoppers.</p>
              </div>

              <div className="rounded-lg border bg-gray-50 p-6">
                <h4 className="text-lg font-medium">Easy Returns</h4>
                <p className="mt-3 text-gray-600">Hassle-free returns and refund policies.</p>
              </div>
            </div>
          </section>

          <section className="mt-8 flex flex-col items-start gap-6">
            <p className="text-lg text-gray-700">
              At NeoMart, shopping is not just about products — it’s about experience. We are
              committed to making online shopping simple, trustworthy, and enjoyable for everyone.
            </p>

            <div className="mt-6 w-full rounded-md bg-indigo-600 px-6 py-4 text-lg font-medium text-white">
              <strong>Shop Smart, Shop NeoMart —</strong> the future of e-commerce is here.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
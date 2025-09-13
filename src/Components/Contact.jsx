import React from "react";
import { FiArrowLeft, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Back button */}
      <button
        aria-label="Go back"
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 inline-flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FiArrowLeft className="h-5 w-5" />
      </button>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-lg">
          {/* Header */}
          <header className="mb-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Contact Us
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Have a question or need support? We’d love to hear from you.
            </p>
          </header>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <FiMail className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                <span className="text-sm sm:text-base text-gray-700">
                  support@neomart.com
                </span>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <FiPhone className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                <span className="text-sm sm:text-base text-gray-700">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <FiMapPin className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                <span className="text-sm sm:text-base text-gray-700">
                  NeoMart HQ, New Delhi, India
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-600">
                Our team is here to assist you with orders, returns, or any general queries.
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Type your message"
                  rows="4"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

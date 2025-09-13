import React, { useState } from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="w-full h-[12vw] md:h-[10vw] lg:h-[5.5vw] flex items-center justify-between px-[3%] absolute z-50">
            <div className="w-full h-[80%] px-4 flex items-center justify-between bg-zinc-100 rounded-4xl">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <AiFillAliwangwang className="text-3xl font-semibold md:text-5xl lg:text-4xl" />
                    <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">NeoMart</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-7">
                    <Link to="/">
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">Home</li>
                    </Link>
                    <Link to="/products">
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">Products</li>
                    </Link>
                    <Link to="/about">
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">About us</li>
                    </Link>
                    <Link to="/contact">
                        <li className="font-semibold hover:text-blue-600 cursor-pointer">Contact</li>
                    </Link>
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-2">
                    <Link to="/login">
                        <button className="py-1 px-4 bg-black text-white rounded-3xl">
                            Log in
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="py-1 px-4 bg-black text-white rounded-3xl">
                            Sign in
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? <HiOutlineX className="text-2xl md:text-3xl" /> : <HiOutlineMenu className="text-2xl md:text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-zinc-100 flex flex-col px-15 gap-4 py-6 lg:hidden shadow-lg rounded-b-xl text-lg md:text-xl">
                    <Link to="/" onClick={toggleMenu}>
                        <li className="font-semibold cursor-pointer list-none">Home</li>
                    </Link>
                    <Link to="/products" onClick={toggleMenu}>
                        <li className="font-semibold cursor-pointer list-none">Products</li>
                    </Link>
                    <Link to="/about" onClick={toggleMenu}>
                        <li className="font-semibold cursor-pointer list-none">About us</li>
                    </Link>
                    <Link to="/contact" onClick={toggleMenu}>
                        <li className="font-semibold cursor-pointer list-none">Contact</li>
                    </Link>
                    <div className="flex gap-4 mt-4">
                        <Link to="/login" onClick={toggleMenu}>
                            <button className="py-1 px-6 bg-black text-white rounded-3xl">
                                Log in
                            </button>
                        </Link>
                        <Link to="/signin" onClick={toggleMenu}>
                            <button className="py-1 px-6 bg-black text-white rounded-3xl">
                                Sign in
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;

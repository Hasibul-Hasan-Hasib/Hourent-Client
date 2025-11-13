import React from "react";

const Footer = () => {
    return (
        <footer className="bg-base-200 pt-16 pb-10 px-6 md:px-12 border-t border-base-300 relative bottom-0 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Hourent</h2>
                    <p className="text-gray-500">
                        Discover elegant, high-quality homes built on trust and sophistication.
                        Experience seamless property buying, selling, and renting with Arvane.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li><a href="#" className="hover:text-primary">Home</a></li>
                        <li><a href="#" className="hover:text-primary">Buy</a></li>
                        <li><a href="#" className="hover:text-primary">Rent</a></li>
                        <li><a href="#" className="hover:text-primary">Sell</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li><a href="#" className="hover:text-primary">FAQs</a></li>
                        <li><a href="#" className="hover:text-primary">Blog</a></li>
                        <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p className="text-gray-500 mb-2">Email: support@arvane.com</p>
                    <p className="text-gray-500 mb-2">Phone: +1 (555) 123-4567</p>
                    <div className="flex gap-2">
                        <input type="text" className="input" placeholder="Email"/>
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-primary">
                            <i className="fa-brands fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-primary">
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-primary">
                            <i className="fa-brands fa-linkedin text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 text-center text-gray-400 text-sm border-t border-base-300 pt-6">
                © {new Date().getFullYear()} Hourent. All rights reserved worldwide.
            </div>
        </footer>
    );
};

export default Footer;

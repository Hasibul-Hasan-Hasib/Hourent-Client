import { MapPinIcon } from "lucide-react";
import React from "react";

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col justify-center items-center pt-20">
            {/* Text Section */}
            <div className="max-w-4xl text-center mb-10">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                    Discover your homes <br /> built on trust and elegance.
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                    Arvane is a premium real estate brand that blends modern design with seamless
                    experiences. We help you discover elegant, high-quality homes built on trust and sophistication.
                </p>
            </div>

            {/* Image + Search Section */}
            <div className="container w-full rounded-3xl overflow-hidden shadow-xl">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                        alt="Modern Homes"
                        className="w-full h-128 object-cover"
                    />

                    {/* Search Bar */}
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                            <label className="input">
                                <MapPinIcon className="text-gray-500"></MapPinIcon>
                                <input type="search" className="grow" placeholder="Enter Location,city or Zip Code" />
                            </label>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Property type</option>
                                <option>Sell</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                            </select>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Price</option>
                                <option>$100k - $300k</option>
                                <option>$300k - $700k</option>
                                <option>$700k - $1M</option>
                            </select>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Select bedrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                            </select>
                            <button className="btn btn-primary w-full">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

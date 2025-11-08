import React from 'react';
import { Globe, Coins, LineChart, Shield } from 'lucide-react';

// Component for a single feature item in the 2x2 grid
// eslint-disable-next-line no-unused-vars
const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className=" p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start">
        <div className="mb-4">
            {/* Icon styled similar to the reference design: simple outline on white background */}
            <Icon className="w-8 h-8 text-gray-500" strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">
            {description}
        </p>
    </div>
);

// Main App component containing the feature section
const WhyChooseUs = () => {
    const featureData = [
        {
            icon: Globe,
            title: "Global Reach",
            description: "Connect your listings with buyers and renters worldwide, maximizing exposure and opportunity.",
        },
        {
            icon: Coins,
            title: "Maximized Value",
            description: "Our expert valuation tools ensure you get the highest possible price for your property, whether selling or renting.",
        },
        {
            icon: LineChart,
            title: "Data-Driven Insights",
            description: "Access real-time, neighborhood-specific market analytics to make smart, informed decisions quickly.",
        },
        {
            icon: Shield,
            title: "Verified Transactions",
            description: "All payments and contracts are secured and verified through trusted escrow services for complete peace of mind.",
        },
    ];

    return (
        <div className="mt-20 flex items-center justify-center p-4 sm:p-12 font-sans">
            <div className="max-w-7xl mx-auto w-full py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Headline and Description */}
                    <div className="lg:sticky lg:top-8 self-start">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-widest border border-gray-300 rounded-full mb-6">
                            OUR COMMITMENT
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-700 mb-6 leading-tight">
                            Your Trusted Property Partner
                        </h1>
                        <p className="text-lg text-gray-500 max-w-md">
                            Streamlining the complex process of renting and selling. We connect owners, buyers, and renters through a modern, secure, and expert-driven platform.
                        </p>
                    </div>

                    {/* Right Column: 2x2 Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {featureData.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
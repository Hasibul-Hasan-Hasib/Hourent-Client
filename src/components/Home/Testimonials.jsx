import React from 'react';

// Component for a single 5-star rating element
const StarRating = () => (
    <div className="flex text-green-500 mb-3">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
        ))}
    </div>
);

// Component for a single testimonial card
const TestimonialCard = ({ review, name, handle, avatarUrl }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between">
        <StarRating />

        <p className="text-gray-700 text-base mb-6 italic">
            "{review}"
        </p>

        <div className="flex items-center">
            {/* Placeholder Avatar - Using placeholder image URL for the design */}
            <img
                src={avatarUrl}
                alt={`${name}'s avatar`}
                className="w-10 h-10 rounded-full mr-3 object-cover"
                onError={(e) => {
                    // Fallback to a plain placeholder if the URL fails
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/40x40/f1f1f1/999999?text=A';
                }}
            />
            <div>
                <div className="font-semibold text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{handle}</div>
            </div>
        </div>
    </div>
);

// Main App component containing the feature section
const Testimonials = () => {
    // Real estate focused testimonial data
    const testimonials = [
        {
            review: "The platform's listing accuracy is outstanding. We found our dream rental in less than a week, and the contract process was seamless and fully digital.",
            name: "Olivia Chen",
            handle: "happy_homeowner_88",
            avatarUrl: "https://placehold.co/40x40/d1d9e6/000000?text=OC",
        },
        {
            review: "Selling our property was effortless. The agent connection and expert guidance maximized our sale price. The support team was highly responsive and knowledgeable.",
            name: "Marcus Reynolds",
            handle: "quick_sale_pro",
            avatarUrl: "https://placehold.co/40x40/e6d1d9/000000?text=MR",
        },
        {
            review: "The 'Verified Listings' feature gave us immense confidence. No time wasted on questionable properties. This is the most trusted real estate site we've used.",
            name: "Aisha Khan",
            handle: "verified_buyer_21",
            avatarUrl: "https://placehold.co/40x40/d9e6d1/000000?text=AK",
        },
        {
            review: "Moving across the country was stressful, but using this service for finding a home made it simple. The virtual tours are accurate and the agents are superb.",
            name: "Javier Muñoz",
            handle: "cross_country_mover",
            avatarUrl: "https://placehold.co/40x40/e6c9d1/000000?text=JM",
        },
        {
            review: "Excellent investment opportunity discovery tool! The market insights provided helped us purchase our second rental property with high projected ROI.",
            name: "Valeria Rossi",
            handle: "smart_investor_x",
            avatarUrl: "https://placehold.co/40x40/c9d1e6/000000?text=VR",
        },
        {
            review: "I rented out my condo using the platform. Their tenant screening process is rigorous and highly effective. I feel much more secure with my new renters.",
            name: "David Lee",
            handle: "secure_landlord_7",
            avatarUrl: "https://placehold.co/40x40/d1c9e6/000000?text=DL",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-12 font-sans">
            <div className="max-w-7xl mx-auto w-full py-16">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 text-xs font-medium text-white bg-green-500 rounded-full mb-3 shadow-md">
                        Testimonials
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                        Our trusted clients
                    </h2>
                </div>

                {/* Testimonial Grid (3 columns, 2 rows) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            review={testimonial.review}
                            name={testimonial.name}
                            handle={testimonial.handle}
                            avatarUrl={testimonial.avatarUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
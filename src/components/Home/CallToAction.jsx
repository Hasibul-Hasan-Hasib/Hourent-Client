import React from "react";

const CallToAction = () => {
    return (
        <section className="bg-base-100 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-base-100 shadow-lg rounded-xl p-10 md:p-16">

                {/* Text Section */}
                <div className="md:w-2/3">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Become a trusted seller with Arvane.
                    </h2>
                    <p className="text-gray-500 text-lg mb-6">
                        Join our network of verified homeowners and agents.
                        List your properties with confidence and reach thousands of serious renters and buyers looking for elegant, high-quality homes.
                    </p>
                    <button className="btn btn-primary btn-lg rounded-xl">
                        Request to Become a Seller
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/3 w-full">
                    <img
                        src="https://i.pinimg.com/736x/fb/ed/9f/fbed9f05a4e2f526e58854050a40daf1.jpg"
                        alt="Become a seller"
                        className="rounded-xl  object-cover w-full h-64 md:h-96"
                    />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

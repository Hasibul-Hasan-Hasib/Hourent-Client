import { Home, DollarSign, Users, Play } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-base-100 text-base-content container mx-auto">


            {/* Intro Section */}
            <section className="py-20 px-6 md:px-20">
                <div className="text-center mb-12">
                    <span className="badge badge-primary mb-4 px-4 py-2">ABOUT US</span>
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-primary">Introduction</span> To The Best
                        Rental & Selling Experience!
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg opacity-80">
                        At <b>Hourent</b>, we simplify the journey of finding your dream
                        home. Whether you’re looking to rent, buy, or list — our platform
                        makes the process smooth, transparent, and enjoyable.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    <div className="card bg-base-200 py-20 shadow-md hover:shadow-xl transition">
                        <div className="card-body items-center text-center">
                            <DollarSign className="text-primary" size={40} />
                            <h3 className="text-xl font-semibold mt-4">Best Price Guaranteed</h3>
                            <p className="opacity-70">
                                Get the most competitive rates for homes and apartments in your
                                preferred area.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-200 py-20 shadow-md hover:shadow-xl transition">
                        <div className="card-body items-center text-center">
                            <Home className="text-primary" size={40} />
                            <h3 className="text-xl font-semibold mt-4">Verified Listings</h3>
                            <p className="opacity-70">
                                Every property is verified and listed by trusted homeowners and
                                agents.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-200 py-20 shadow-md hover:shadow-xl transition">
                        <div className="card-body items-center text-center">
                            <Users className="text-primary" size={40} />
                            <h3 className="text-xl font-semibold mt-4">Professional Support</h3>
                            <p className="opacity-70">
                                Our expert support team is available 24/7 to guide you through
                                every step.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Image + Video Section */}
            <section className="py-20 px-6 md:px-20 bg-base-100 text-base-content">
                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
                    <div>
                        <p className="text-primary font-semibold mb-2">About Us</p>
                        <h2 className="text-4xl font-bold mb-4">
                            Making Home Renting Simple and Hassle-Free
                        </h2>
                        <p className="text-lg opacity-80 mb-6">
                            At <b>HouseEase</b>, we make finding your dream home effortless.
                            Our mission is to help renters and property owners connect easily,
                            ensuring comfort, trust, and convenience in every step.
                        </p>
                        <button className="btn btn-primary rounded-full px-6">
                            Get Started
                        </button>
                    </div>

                    <div>
                        <p className="opacity-80">
                            With a growing list of verified properties and a dedicated support
                            team, we’re reshaping the way people rent homes. Explore, compare,
                            and connect — all in one trusted platform designed to make renting
                            smarter and simpler.
                        </p>
                    </div>
                </div>

                {/* Story / Mission / Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Image Card */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://i.pinimg.com/736x/5c/0c/21/5c0c217891f72d38fa60fd155c7401e2.jpg"
                            alt="Our Story"
                            className="w-full h-full object-cover aspect-square"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6">
                            <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                            <p className="text-sm opacity-90">
                                What started as a small idea to make renting easier has grown into
                                a platform trusted by thousands of homeowners and tenants across
                                the city.
                            </p>
                        </div>
                    </div>

                    {/* Right Mission & Vision Cards */}
                    <div className="grid gap-6">
                        <div className="p-8 rounded-2xl bg-primary/10">
                            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                            <p className="opacity-80">
                                To simplify home renting by combining technology with trust — so
                                every tenant and landlord can connect safely and confidently.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-primary text-white">
                            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                            <p className="opacity-90">
                                To become the most reliable home rental platform, helping people
                                find places they love while empowering owners to rent with ease.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 md:px-20 text-center">
                <span className="badge badge-primary mb-4 px-4 py-2">OUR TEAM</span>
                <h2 className="text-4xl font-bold mb-4 text-primary">Team Members</h2>
                <p className="max-w-2xl mx-auto mb-10 opacity-80">
                    Meet the passionate people behind Hourent. Our dedicated team works
                    tirelessly to make your home search effortless.
                </p>

                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Ariana Gomez",
                            role: "CEO & Founder",
                            img: "https://randomuser.me/api/portraits/women/44.jpg",
                        },
                        {
                            name: "Mark Lee",
                            role: "Head of Marketing",
                            img: "https://randomuser.me/api/portraits/men/46.jpg",
                        },
                        {
                            name: "Lisa Wong",
                            role: "Product Manager",
                            img: "https://randomuser.me/api/portraits/women/47.jpg",
                        },
                        {
                            name: "Daniel Smith",
                            role: "Customer Support",
                            img: "https://randomuser.me/api/portraits/men/49.jpg",
                        },
                    ].map((member) => (
                        <div
                            key={member.name}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition"
                        >
                            <figure className="px-10 pt-10">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="rounded-xl w-40 h-40 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-primary font-semibold">{member.role}</p>
                                <div className="flex gap-3 mt-3">
                                    <a className="btn btn-circle btn-ghost btn-sm">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-circle btn-ghost btn-sm">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-circle btn-ghost btn-sm">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}

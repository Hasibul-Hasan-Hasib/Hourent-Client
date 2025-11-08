import { Bath, Bed, Heart, MapPin, Ruler } from "lucide-react";


export default function Card() {
    return (
        <div className="min-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">

            {/* Image + Top Badges */}
            <div className="relative">
                <img
                    src="https://i.pinimg.com/736x/5c/0c/21/5c0c217891f72d38fa60fd155c7401e2.jpg"
                    alt="Property"
                    className="w-full h-90 aspect-square object-cover"
                />

                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <span className="badge bg-[#00a884] text-white border-none">For Sale</span>
                    <span className="badge bg-[#0057d9] text-white border-none">Featured</span>
                </div>

                {/* Favorite */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition">
                    <Heart className="text-[#0095a9]" size={20} />
                </button>
            </div>

            {/* Body */}
            <div className="p-4 pt-8">
                <h3 className="text-lg font-semibold text-[#0095a9] mb-1">$1,250,000</h3>

                <p className="text-gray-800 font-medium text-[15px]">
                    Contemporary Villa with Ocean View
                </p>

                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin size={18} className="mr-1" />
                    Malibu, CA
                </div>

                <div className="divider"></div>

                {/* Stats */}
                <div className="flex justify-start align-middle mt-4 text-gray-500 text-sm gap-6">
                    <div className="flex items-center gap-1">
                        <Bed size={16}/> 5
                    </div>

                    <div className="flex items-center gap-1">
                        <Bath size={16}/> 4
                    </div>

                    <div className="flex items-center gap-1">
                        <Ruler size={16}/> 4500 sqft
                    </div>
                </div>
            </div>
        </div>
    );
}

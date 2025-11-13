import { Bath, Bed, Heart, MapPin, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Card({ data }) {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!data) {
        return null;
    }

    // Map API data structure to component needs
    const propertyId = data._id || data.post_id || data.id;
    const images = [
        data.img1,
        data.img2,
        data.img3
    ].filter(img => img && img.trim()); // Filter out empty images
    
    const image = images.length > 0 ? images[0] : "https://i.pinimg.com/736x/5c/0c/21/5c0c217891f72d38fa60fd155c7401e2.jpg";
    const price = data.price ? `৳${data.price.toLocaleString()}` : "$1,250,000";
    const location = data.post_loc ? data.post_loc.trim() : (data.location || "Location not specified");
    const beds = data.bed_rooms || data.beds || 0;
    const baths = data.bath_rooms || data.baths || 0;
    const area = data.square_areas ? `${data.square_areas} sqft` : (data.area || "N/A");
    const postType = data.post_type === 0 ? "For Rent" : "For Sale";
    const isAvailable = data.available === 1;
    const title = data.title || `Property ${data.post_id || propertyId}`;

    const nextImage = (e) => {
        e.stopPropagation();
        if (images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (images.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="min-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">

            {/* Image Carousel + Top Badges */}
            <div className="relative">
                <div className="carousel w-full h-90 aspect-square relative">
                    {images.length > 0 ? (
                        images.map((img, index) => (
                            <div
                                key={index}
                                id={`card-slide-${propertyId}-${index}`}
                                className={`carousel-item relative w-full ${index === currentImageIndex ? 'block' : 'hidden'}`}
                            >
                                <img
                                    onClick={() => navigate(`/property/${propertyId}`)}
                                    src={img.trim()}
                                    alt={`${title} - Image ${index + 1}`}
                                    className="w-full h-full object-cover cursor-pointer"
                                />
                                
                                {/* Navigation Arrows - Only show if multiple images */}
                                {images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-white/80 hover:bg-white border-none shadow-md"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-white/80 hover:bg-white border-none shadow-md"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                    </>
                                )}

                                {/* Image Indicators */}
                                {images.length > 1 && (
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(idx);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    idx === currentImageIndex 
                                                        ? 'bg-white w-6' 
                                                        : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <img
                            onClick={() => navigate(`/property/${propertyId}`)}
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                    )}
                </div>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                    <span className="badge bg-[#00a884] text-white border-none">{postType}</span>
                    {isAvailable && (
                        <span className="badge bg-[#0057d9] text-white border-none">Available</span>
                    )}
                </div>

                {/* Favorite */}
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        // TODO: Add favorite functionality
                    }}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition z-10"
                >
                    <Heart className="text-[#0095a9]" size={20} />
                </button>
            </div>

            {/* Body */}
            <div onClick={() => navigate(`/property/${propertyId}`)} className="p-4 pt-8 cursor-pointer">
                <h3 className="text-lg font-semibold text-[#0095a9] mb-1">{price}</h3>

                <p className="text-gray-800 font-medium text-[15px]">
                    {title}
                </p>

                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin size={18} className="mr-1" />
                    {location}
                </div>

                <div className="divider"></div>

                {/* Stats */}
                <div className="flex justify-start align-middle mt-4 text-gray-500 text-sm gap-6">
                    <div className="flex items-center gap-1">
                        <Bed size={16} /> {beds}
                    </div>

                    <div className="flex items-center gap-1">
                        <Bath size={16} /> {baths}
                    </div>

                    <div className="flex items-center gap-1">
                        <Ruler size={16} /> {area}
                    </div>
                </div>
            </div>
        </div>
    );
}

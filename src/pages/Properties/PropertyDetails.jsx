import { ArrowLeft, ArrowRight, Calendar, Heart, Phone } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useProperty } from "@/hooks/useProperties";
import Loader from "@/components/Loader/Loader";

export default function PropertyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: property, isLoading, error } = useProperty(id);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-25">
          <Loader />
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-25">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Error Loading Property</h2>
            <p className="text-red-500 mb-4">
              {error.message || "Failed to load property details."}
            </p>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-primary"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Handle no property found
  if (!property) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-25">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Property Not Found</h2>
            <p className="text-gray-500 mb-4">The property you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-primary"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Map API data to display format
  const propertyId = property._id || property.post_id || property.id;
  const images = [
    property.img1,
    property.img2,
    property.img3
  ].filter(img => img && img.trim()); // Filter out empty images
  
  const title = property.title || `Property ${property.post_id || propertyId}`;
  const location = property.post_loc ? property.post_loc.trim() : (property.location || "Location not specified");
  const price = property.price ? `৳${property.price.toLocaleString()}` : "Price not available";
  const beds = property.bed_rooms || property.beds || 0;
  const baths = property.bath_rooms || property.baths || 0;
  const area = property.square_areas ? `${property.square_areas} sqft` : (property.area || "N/A");
  const postType = property.post_type === 0 ? "For Rent" : "For Sale";
  const yearBuilt = property.construction_year || property.yearBuilt || "N/A";
  const status = property.available === 1 ? "Available" : "Not Available";
  
  // Generate amenities from property features
  const amenities = [];
  if (property.pools === 1) amenities.push("Swimming Pool");
  if (property.garages === 1) amenities.push("Garage");
  if (property.Insurance === 1) amenities.push("Insurance");
  if (property.parking === 1) amenities.push("Parking");
  if (amenities.length === 0) {
    amenities.push("Standard Features");
  }


  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-25">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm mb-6"
        >
          <ArrowLeft size={18} />
          Back to Listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2">

            {/* DaisyUI Carousel */}
            {images.length > 0 ? (
              <>
                <div className="carousel w-full rounded-xl shadow-lg mb-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      id={`slide${index + 1}`}
                      className="carousel-item relative w-full"
                    >
                      <img
                        src={img.trim()}
                        alt={`${title} - Image ${index + 1}`}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          href={`#slide${index === 0 ? images.length : index}`}
                          className="btn btn-circle"
                          onClick={(e) => {
                            e.preventDefault();
                            const targetId = e.currentTarget.getAttribute('href');
                            const target = document.querySelector(targetId);
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                            }
                          }}
                        >
                          <ArrowLeft></ArrowLeft>
                        </a>
                        <a
                          href={`#slide${index + 2 > images.length ? 1 : index + 2}`}
                          className="btn btn-circle"
                          onClick={(e) => {
                            e.preventDefault();
                            const targetId = e.currentTarget.getAttribute('href');
                            const target = document.querySelector(targetId);
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                            }
                          }}
                        >
                          <ArrowRight></ArrowRight>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-2 justify-center mb-6">
                    {images.map((img, index) => (
                      <a
                        key={index}
                        href={`#slide${index + 1}`}
                        className="w-24 h-20 border-2 border-transparent hover:border-primary rounded-xl overflow-hidden"
                        onClick={(e) => {
                          e.preventDefault();
                          const targetId = e.currentTarget.getAttribute('href');
                          const target = document.querySelector(targetId);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                          }
                        }}
                      >
                        <img
                          src={img.trim()}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full rounded-xl shadow-lg mb-4 bg-gray-200 aspect-video flex items-center justify-center">
                <p className="text-gray-500">No images available</p>
              </div>
            )}

            {/* Property Info */}
            <div className="bg-base-100 rounded-xl shadow p-5 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-info">{postType}</span>
                    {status === "Available" && (
                      <span className="badge badge-success">{status}</span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="text-sm text-gray-500">{location}</p>
                </div>
                <p className="text-xl font-semibold text-primary">
                  {price}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-4">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{beds}</p>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{baths}</p>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{area}</p>
                  <p className="text-sm text-gray-500">Area</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{property.living_rooms || property.livingRooms || "N/A"}</p>
                  <p className="text-sm text-gray-500">Living Rooms</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-base-100 rounded-xl shadow p-5 mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description || `Beautiful property located in ${location}. This ${postType.toLowerCase()} property features ${beds} bedrooms, ${baths} bathrooms, and ${area} of living space. Built in ${yearBuilt}, this property offers modern amenities and is perfect for your needs.`}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-base-100 rounded-xl shadow p-5 mb-6">
              <h3 className="text-lg font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenities.map((item, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-base-100 rounded-xl shadow p-5 mb-6">
              <h3 className="text-lg font-semibold mb-4">Property Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 text-sm">
                <div>
                  <p className="text-gray-500">Property Type</p>
                  <p className="font-medium">{postType}</p>
                </div>
                <div>
                  <p className="text-gray-500">Year Built</p>
                  <p className="font-medium">{yearBuilt}</p>
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  <p className={`font-medium ${status === "Available" ? "text-green-600" : "text-red-600"}`}>
                    {status}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Property ID</p>
                  <p className="font-medium">#{property.post_id || propertyId}</p>
                </div>
                {property.total_floor && (
                  <div>
                    <p className="text-gray-500">Total Floors</p>
                    <p className="font-medium">{property.total_floor}</p>
                  </div>
                )}
                {property.kitchens && (
                  <div>
                    <p className="text-gray-500">Kitchens</p>
                    <p className="font-medium">{property.kitchens}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <div>
            <div className="bg-base-100 rounded-xl shadow p-6 sticky top-20">

              {/* USER INFO */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-base-300">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl">Alex Smith</h3>
                  <p className="text-sm text-base-content/70">Property Owner</p>
                </div>
              </div>



              {/* FORM */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="input w-full"
                />
                <textarea
                  placeholder="Message"
                  className="textarea w-full"
                ></textarea>

                <button className="btn bg-primary text-white">
                  Send Message
                </button>
                <button className="btn flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft, Calendar, Heart, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PropertyDetails() {
  const navigate = useNavigate();

  const property = {
    id: 1,
    title: "Modern Family Home with Pool",
    location: "Beverly Hills, CA",
    price: "$850,000",
    beds: 4,
    baths: 3,
    area: "3200 sqft",
    type: "House",
    yearBuilt: 2020,
    status: "Active",
    images: [
      "https://i.pinimg.com/736x/5c/0c/21/5c0c217891f72d38fa60fd155c7401e2.jpg",
      "https://i.pinimg.com/736x/00/6e/0a/006e0a2571936df0ba24020a94d90453.jpg",
      "https://i.pinimg.com/736x/5c/0c/21/5c0c217891f72d38fa60fd155c7401e2.jpg",
    ],
    description:
      "Stunning modern home with contemporary design and luxurious finishes throughout. Features an open floor plan, gourmet kitchen, and resort-style backyard with pool.",
    amenities: [
      "Swimming Pool",
      "Security System",
      "Garage",
      "Smart Home",
      "Garden",
      "Central AC",
    ],
  };

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
            <div className="carousel w-full rounded-xl shadow-lg mb-4">
              {property.images.map((img, index) => (
                <div
                  key={index}
                  id={`slide${index + 1}`}
                  className="carousel-item relative w-full"
                >
                  <img
                    src={img}
                    alt={`Property ${index + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${index === 0 ? property.images.length : index
                        }`}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${index + 2 > property.images.length ? 1 : index + 2
                        }`}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 justify-center mb-6">
              {property.images.map((img, index) => (
                <a
                  key={index}
                  href={`#slide${index + 1}`}
                  className="w-24 h-20 border-2 border-transparent hover:border-primary rounded-xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>

            {/* Property Info */}
            <div className="bg-base-100 rounded-xl shadow p-5 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-info">For Sale</span>
                    <span className="badge badge-success">Featured</span>
                  </div>
                  <h2 className="text-xl font-semibold">{property.title}</h2>
                  <p className="text-sm text-gray-500">{property.location}</p>
                </div>
                <p className="text-xl font-semibold text-primary">
                  {property.price}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-4">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{property.beds}</p>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{property.baths}</p>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{property.area}</p>
                  <p className="text-sm text-gray-500">Area</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">{property.type}</p>
                  <p className="text-sm text-gray-500">Type</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-base-100 rounded-xl shadow p-5 mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-base-100 rounded-xl shadow p-5 mb-6">
              <h3 className="text-lg font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((item, i) => (
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
                  <p className="font-medium">{property.type}</p>
                </div>
                <div>
                  <p className="text-gray-500">Year Built</p>
                  <p className="font-medium">{property.yearBuilt}</p>
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  <p className="font-medium text-green-600">{property.status}</p>
                </div>
                <div>
                  <p className="text-gray-500">Property ID</p>
                  <p className="font-medium">#{property.id}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-base-100 rounded-xl shadow p-6 sticky top-20">
              <h3 className="text-lg font-semibold mb-4">
                Contact Property Owner
              </h3>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                />
                <textarea
                  placeholder="Message"
                  className="textarea textarea-bordered"
                ></textarea>

                <button className="btn bg-primary text-white">Send Message</button>
                <button className="btn btn-outline flex items-center gap-2">
                  <Calendar /> Schedule Tour
                </button>
                <button className="btn btn-outline flex items-center gap-2">
                  <Phone /> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

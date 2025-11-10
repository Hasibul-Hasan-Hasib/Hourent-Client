import { useState } from "react";
import { MapPin, Filter } from "lucide-react";

export default function ListingFilter({ onFilter }) {
    const [filters, setFilters] = useState({
        location: "",
        purpose: "",
        category: "",
        priceMin: "",
        priceMax: "",
        bedrooms: "",
        bathrooms: "",
        sort: "newest",
    });

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        onFilter(filters);
    };

    return (
        <div className="bg-base-100 border rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-2 mb-5 text-lg font-semibold">
                <Filter size={18} />
                Filters
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">

                {/* Location */}
                <label className="input flex items-center gap-2 col-span-2 lg:col-span-2">
                    <MapPin size={16} className="text-gray-500" />
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleChange}
                        className="grow"
                        placeholder="City, Location, Zip Code"
                    />
                </label>

                {/* Purpose */}
                <select
                    name="purpose"
                    className="select select-bordered w-full"
                    value={filters.purpose}
                    onChange={handleChange}
                >
                    <option value="">Purpose</option>
                    <option value="sell">For Sale</option>
                    <option value="rent">For Rent</option>
                </select>

                {/* Category */}
                <select
                    name="category"
                    className="select select-bordered w-full"
                    value={filters.category}
                    onChange={handleChange}
                >
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                </select>

                {/* Price Min */}
                <input
                    type="number"
                    name="priceMin"
                    value={filters.priceMin}
                    onChange={handleChange}
                    placeholder="Min Price"
                    className="input input-bordered w-full"
                />

                {/* Price Max */}
                <input
                    type="number"
                    name="priceMax"
                    value={filters.priceMax}
                    onChange={handleChange}
                    placeholder="Max Price"
                    className="input input-bordered w-full"
                />

                {/* Bedrooms */}
                <select
                    name="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                >
                    <option value="">Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                </select>

                {/* Bathrooms */}
                <select
                    name="bathrooms"
                    value={filters.bathrooms}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                >
                    <option value="">Bathrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                </select>

                {/* Sorting */}
                <select
                    name="sort"
                    value={filters.sort}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                </select>

                {/* Search Button */}
                <button
                    onClick={handleSubmit}
                    className="btn btn-primary w-full col-span-2 md:col-span-3 lg:col-span-1"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

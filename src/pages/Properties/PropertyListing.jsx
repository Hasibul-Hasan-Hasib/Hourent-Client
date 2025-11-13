import ListingFilter from "@/components/Filter/ListingFilter";
import Card from "@/components/ui/Card";
import { Filter } from "lucide-react";


const properties = [
  1, 2, 3, 5, 6, 7, 7, 8, 9, 10, 11, 12
];

export default function PropertyListing() {

  return (
    <div className="container mx-auto py-30">
      <div className="flex justify-between">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Available Properties</h2>
          <p className="text-sm text-gray-500">Showing {properties.length} results</p>
        </div>
        {/* Top Filter Bar */}
        <details >
          <summary className="btn btn-primary mb-2 smooth-transition">
            <Filter size={16}></Filter>
            Filter
          </summary>
          <ListingFilter></ListingFilter>
        </details>

      </div>

      {/* Property List */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {properties.map((property) => (
          <div key={property.id}>
            {/* Replace with your existing card component */}
            <Card data={property} />
          </div>
        ))}
      </div>
    </div>
  );
}


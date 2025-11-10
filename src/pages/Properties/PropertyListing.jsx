import ListingFilter from "@/components/Filter/ListingFilter";
import Card from "@/components/ui/Card";


const properties = [
  1, 2, 3,5,6,7,7,8,9,10,11,12
];

export default function PropertyListing() {

  return (
    <div className="container mx-auto py-30">
      {/* Top Filter Bar */}
      <ListingFilter></ListingFilter>

      {/* Page Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Available Properties</h2>
        <p className="text-sm text-gray-500">Showing {properties.length} results</p>
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


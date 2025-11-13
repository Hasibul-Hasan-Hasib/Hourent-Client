import ListingFilter from "@/components/Filter/ListingFilter";
import Card from "@/components/ui/Card";
import { useProperties } from "@/hooks/useProperties";
import { Filter } from "lucide-react";
import Loader from "@/components/Loader/Loader";


export default function PropertyListing() {
  const { data: properties, isLoading, error } = useProperties();
  
  // Handle loading state
  if (isLoading) {
    return (
      <div className="container mx-auto py-30">
        <Loader />
      </div>
    );
  }

  // Handle error state
  if (error) {
    console.error("Error fetching properties:", error);
    return (
      <div className="container mx-auto py-30">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Error Loading Properties</h2>
          <p className="text-red-500 mb-4">
            {error.message || "Failed to load properties. Please check if the server is running."}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Server URL: {import.meta.env.VITE_ServerUrl || "Not configured"}
          </p>
          <p className="text-sm text-gray-500">
            {error.response?.status && `Status: ${error.response.status}`}
          </p>
        </div>
      </div>
    );
  }

  // Handle empty data
  if (!properties || properties.length === 0) {
    return (
      <div className="container mx-auto py-30">
        <div className="flex justify-between">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Available Properties</h2>
            <p className="text-sm text-gray-500">No properties found</p>
          </div>
          <details>
            <summary className="btn btn-primary mb-2 smooth-transition">
              <Filter size={16}></Filter>
              Filter
            </summary>
            <ListingFilter></ListingFilter>
          </details>
        </div>
        <div className="text-center py-10">
          <p className="text-gray-500">No properties available at the moment.</p>
        </div>
      </div>
    );
  }

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
          <div key={property._id || property.post_id || property.id}>
            <Card data={property} />
          </div>
        ))}
      </div>
    </div>
  );
}


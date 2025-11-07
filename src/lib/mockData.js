export interface Property {
  id: number;
  image: string;
  images?: string[];
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "sale" | "rent";
  featured?: boolean;
  description?: string;
  amenities?: string[];
  yearBuilt?: number;
  propertyType?: string;
  status?: 'active' | 'pending' | 'sold';
  views?: number;
  leads?: number;
  sellerId?: number;
}

export const mockProperties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjMwMjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjMwMjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMzIwNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    price: "$850,000",
    title: "Modern Family Home with Pool",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "sale",
    featured: true,
    description: "Stunning modern home with contemporary design and luxurious finishes throughout. Features an open floor plan, gourmet kitchen, and resort-style backyard with pool.",
    amenities: ["Swimming Pool", "Garage", "Garden", "Security System", "Smart Home", "Central AC"],
    yearBuilt: 2020,
    propertyType: "House",
    status: 'active',
    views: 1250,
    leads: 42,
    sellerId: 1
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIzODQ5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIzODQ5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    price: "$3,200",
    title: "Luxury Downtown Apartment",
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    sqft: 1450,
    type: "rent",
    featured: false,
    description: "Elegant apartment in the heart of Manhattan with breathtaking city views. Features high-end appliances and premium finishes.",
    amenities: ["Gym", "Doorman", "Elevator", "Laundry", "Pet Friendly"],
    yearBuilt: 2018,
    propertyType: "Apartment",
    status: 'active',
    views: 890,
    leads: 28,
    sellerId: 1
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1758936381746-59a4624f5117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYyMzU4NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1758936381746-59a4624f5117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYyMzU4NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    price: "$425,000",
    title: "Charming Suburban House",
    location: "Austin, TX",
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: "sale",
    featured: false,
    description: "Beautiful suburban home perfect for families. Features spacious living areas and a large backyard.",
    amenities: ["Backyard", "Garage", "Fireplace", "Updated Kitchen"],
    yearBuilt: 2015,
    propertyType: "House",
    status: 'active',
    views: 654,
    leads: 19,
    sellerId: 2
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB2aWxsYXxlbnwxfHx8fDE3NjIyNzE3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB2aWxsYXxlbnwxfHx8fDE3NjIyNzE3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    price: "$1,250,000",
    title: "Contemporary Villa with Ocean View",
    location: "Malibu, CA",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "sale",
    featured: true,
    description: "Luxurious oceanfront villa with panoramic views. Features premium finishes, infinity pool, and direct beach access.",
    amenities: ["Ocean View", "Pool", "Beach Access", "Wine Cellar", "Home Theater", "Smart Home"],
    yearBuilt: 2021,
    propertyType: "Villa",
    status: 'active',
    views: 2150,
    leads: 67,
    sellerId: 2
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1736007917095-88dd6bc641e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjM4OTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1736007917095-88dd6bc641e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjM4OTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    price: "$2,100",
    title: "Stylish Urban Loft",
    location: "Brooklyn, NY",
    beds: 1,
    baths: 1,
    sqft: 850,
    type: "rent",
    featured: false,
    description: "Modern loft in trendy Brooklyn neighborhood. High ceilings and industrial charm.",
    amenities: ["Exposed Brick", "High Ceilings", "Pet Friendly", "Rooftop Access"],
    yearBuilt: 2010,
    propertyType: "Loft",
    status: 'active',
    views: 445,
    leads: 15,
    sellerId: 1
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1714000782139-e3ab31611a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwdG93bmhvdXNlfGVufDF8fHx8MTc2MjM5MDQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1714000782139-e3ab31611a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwdG93bmhvdXNlfGVufDF8fHx8MTc2MjM5MDQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    price: "$565,000",
    title: "Cozy Townhouse in Historic District",
    location: "Boston, MA",
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "sale",
    featured: false,
    description: "Charming townhouse with historic character and modern updates. Walking distance to downtown.",
    amenities: ["Historic District", "Updated Kitchen", "Hardwood Floors", "Patio"],
    yearBuilt: 1920,
    propertyType: "Townhouse",
    status: 'active',
    views: 520,
    leads: 22,
    sellerId: 2
  }
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1758523671893-0ba21cf4260f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhvbWVvd25lciUyMGZhbWlseXxlbnwxfHx8fDE3NjIzOTEyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Found my dream home within weeks! The platform made it so easy to filter and find exactly what I was looking for.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1652878530627-cc6f063e3947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzA2NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Sold my property in record time. The seller dashboard made managing inquiries incredibly simple.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Renter",
    image: "https://images.unsplash.com/photo-1758523671893-0ba21cf4260f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhvbWVvd25lciUyMGZhbWlseXxlbnwxfHx8fDE3NjIzOTEyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "The best rental platform I've used. Clean interface and responsive property owners.",
    rating: 5
  }
];

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  status: 'active' | 'pending' | 'suspended';
  joinedDate: string;
  properties?: number;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "seller",
    status: "active",
    joinedDate: "2024-01-15",
    properties: 3
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "seller",
    status: "active",
    joinedDate: "2024-02-20",
    properties: 2
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "buyer",
    status: "active",
    joinedDate: "2024-03-10"
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "seller",
    status: "pending",
    joinedDate: "2024-11-01",
    properties: 0
  }
];

export interface Review {
  id: number;
  propertyId: number;
  userId: number;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockReviews: Review[] = [
  {
    id: 1,
    propertyId: 1,
    userId: 3,
    userName: "Bob Wilson",
    rating: 5,
    comment: "Absolutely stunning property! The modern design and amenities exceeded our expectations. The seller was very professional and responsive.",
    date: "2024-10-15"
  },
  {
    id: 2,
    propertyId: 1,
    userId: 4,
    userName: "Alice Brown",
    rating: 4,
    comment: "Great home with excellent location. The pool area is fantastic. Only minor issue was some paint touch-ups needed.",
    date: "2024-10-20"
  },
  {
    id: 3,
    propertyId: 2,
    userId: 3,
    userName: "Bob Wilson",
    rating: 5,
    comment: "Perfect apartment for city living. The views are breathtaking and the building amenities are top-notch.",
    date: "2024-10-25"
  },
  {
    id: 4,
    propertyId: 4,
    userId: 1,
    userName: "John Doe",
    rating: 5,
    comment: "Dream villa with incredible ocean views. Everything about this property is premium quality.",
    date: "2024-11-01"
  }
];

// mock blogs

export type TBlog = {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  slug: string;
  featured: boolean;
  views: number;
};

export const blogCategories = [
  'All',
  'Car Reviews',
  'Travel Tips',
  'Maintenance',
  'Dubai Guide',
  'Lifestyle',
  'Technology',
  'News',
] as const;

export const blogs: TBlog[] = [
  {
    id: 1,
    title: 'Ultimate Guide to Renting a Car in Dubai: Everything You Need to Know',
    excerpt:
      'Planning to rent a car in Dubai? This comprehensive guide covers everything from documentation requirements to the best routes and hidden gems in the city.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80',
    author: { name: 'Sarah Johnson' },
    category: 'Dubai Guide',
    tags: ['Dubai', 'Car Rental', 'Travel Tips'],
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    slug: 'ultimate-guide-renting-car-dubai',
    featured: true,
    views: 15420,
  },
  {
    id: 2,
    title: '2024 BMW 5 Series Review: The Perfect Blend of Luxury and Performance',
    excerpt:
      'We take an in-depth look at the new 2024 BMW 5 Series, exploring its cutting-edge technology, luxurious interior, and impressive driving dynamics.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
    author: { name: 'Michael Chen' },
    category: 'Car Reviews',
    tags: ['BMW', 'Luxury Cars', 'Reviews'],
    publishedAt: '2024-01-12',
    readTime: '12 min read',
    slug: '2024-bmw-5-series-review',
    featured: true,
    views: 12350,
  },
  {
    id: 3,
    title: 'Top 10 Scenic Drives Around Dubai: Road Trip Guide',
    excerpt:
      'Discover the most breathtaking routes around Dubai and the UAE. From mountain roads to coastal highways, these drives offer unforgettable experiences.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    author: { name: 'Ahmed Al Mansoori' },
    category: 'Travel Tips',
    tags: ['Road Trips', 'Dubai', 'Travel'],
    publishedAt: '2024-01-10',
    readTime: '10 min read',
    slug: 'top-10-scenic-drives-dubai',
    featured: true,
    views: 9870,
  },
  {
    id: 4,
    title: "Electric vs Hybrid: Which is Right for Dubai's Climate?",
    excerpt:
      "With the rise of eco-friendly vehicles, we compare electric and hybrid cars to help you choose the best option for Dubai's unique climate and infrastructure.",
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80',
    author: { name: 'Lisa Anderson' },
    category: 'Technology',
    tags: ['Electric Cars', 'Hybrid', 'Environment'],
    publishedAt: '2024-01-08',
    readTime: '7 min read',
    slug: 'electric-vs-hybrid-dubai',
    featured: false,
    views: 7650,
  },
  {
    id: 5,
    title: 'Essential Car Maintenance Tips for Desert Driving',
    excerpt:
      'Learn how to keep your vehicle in top condition when driving in extreme desert conditions. Expert advice on maintenance schedules and best practices.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
    author: { name: 'Omar Al Zaabi' },
    category: 'Maintenance',
    tags: ['Maintenance', 'Tips', 'Desert Driving'],
    publishedAt: '2024-01-05',
    readTime: '6 min read',
    slug: 'essential-car-maintenance-desert-driving',
    featured: false,
    views: 6540,
  },
  {
    id: 6,
    title: 'Mercedes-Benz S-Class 2024: The Pinnacle of Automotive Luxury',
    excerpt:
      'Experience the epitome of luxury with the 2024 Mercedes-Benz S-Class. We explore its innovative features, unmatched comfort, and cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
    author: { name: 'David Martinez' },
    category: 'Car Reviews',
    tags: ['Mercedes', 'Luxury Cars', 'Reviews'],
    publishedAt: '2024-01-03',
    readTime: '11 min read',
    slug: 'mercedes-s-class-2024-review',
    featured: false,
    views: 8920,
  },
  {
    id: 7,
    title: 'Weekend Getaways from Dubai: Best Road Trip Destinations',
    excerpt:
      'Looking to escape the city for the weekend? Here are the best road trip destinations within driving distance from Dubai, perfect for a quick getaway.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    author: { name: 'Fatima Al Nuaimi' },
    category: 'Travel Tips',
    tags: ['Travel', 'Weekend', 'Road Trips'],
    publishedAt: '2024-01-01',
    readTime: '9 min read',
    slug: 'weekend-getaways-dubai',
    featured: false,
    views: 5430,
  },
  {
    id: 8,
    title: 'Understanding UAE Traffic Laws: A Complete Guide for Drivers',
    excerpt:
      "Stay safe and avoid fines by understanding UAE's traffic laws. This guide covers everything from speed limits to parking regulations.",
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80',
    author: { name: 'Mohammed Al Hashimi' },
    category: 'Dubai Guide',
    tags: ['Traffic Laws', 'Safety', 'Dubai'],
    publishedAt: '2023-12-28',
    readTime: '8 min read',
    slug: 'uae-traffic-laws-guide',
    featured: false,
    views: 11250,
  },
  {
    id: 9,
    title: 'Porsche 911 Carrera: Driving Perfection on Dubai Roads',
    excerpt:
      "The iconic Porsche 911 Carrera continues to set the standard for sports cars. We test drive this masterpiece on Dubai's highways and scenic routes.",
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80',
    author: { name: 'James Wilson' },
    category: 'Car Reviews',
    tags: ['Porsche', 'Sports Cars', 'Performance'],
    publishedAt: '2023-12-25',
    readTime: '10 min read',
    slug: 'porsche-911-carrera-review',
    featured: false,
    views: 9340,
  },
  {
    id: 10,
    title: 'How to Choose the Perfect Car for Your Dubai Lifestyle',
    excerpt:
      "From sedans to SUVs, learn how to select the ideal vehicle that matches your lifestyle, budget, and needs in Dubai's diverse automotive market.",
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
    author: { name: 'Elena Rodriguez' },
    category: 'Lifestyle',
    tags: ['Car Selection', 'Lifestyle', 'Guide'],
    publishedAt: '2023-12-22',
    readTime: '7 min read',
    slug: 'choose-perfect-car-dubai',
    featured: false,
    views: 4560,
  },
  {
    id: 11,
    title: 'The Rise of Autonomous Vehicles in the UAE',
    excerpt:
      'Explore how Dubai is leading the way in autonomous vehicle technology and what the future holds for self-driving cars in the region.',
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80',
    author: { name: 'Dr. Khalid Al Maktoum' },
    category: 'Technology',
    tags: ['Autonomous', 'Technology', 'Future'],
    publishedAt: '2023-12-20',
    readTime: '9 min read',
    slug: 'autonomous-vehicles-uae',
    featured: false,
    views: 6780,
  },
  {
    id: 12,
    title: 'SUV vs Sedan: Which is Better for Dubai Families?',
    excerpt:
      "Choosing between an SUV and a sedan for your family? We compare both options considering Dubai's roads, climate, and family needs.",
    image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=1200&q=80',
    author: { name: 'Aisha Al Zaabi' },
    category: 'Lifestyle',
    tags: ['SUV', 'Sedan', 'Family Cars'],
    publishedAt: '2023-12-18',
    readTime: '6 min read',
    slug: 'suv-vs-sedan-dubai-families',
    featured: false,
    views: 5670,
  },
];

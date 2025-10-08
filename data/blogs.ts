// mock blogs

export type TBlog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  slug: string;
};

export const blogs: TBlog[] = [];

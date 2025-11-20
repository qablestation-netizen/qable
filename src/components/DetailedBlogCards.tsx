import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface DetailedBlogCardsProps {
  posts: BlogPost[];
}

const DetailedBlogCards = ({ posts }: DetailedBlogCardsProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <div
          key={index}
          className={`bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-smooth hover:-translate-y-2 animate-fade-in ${
            post.featured ? "md:col-span-2 lg:col-span-1" : ""
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            <Button variant="ghost" className="gap-2 p-0 h-auto hover:gap-3">
              Read More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedBlogCards;

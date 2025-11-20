import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

interface BlogCardsProps {
  posts: BlogPost[];
}

const BlogCards = ({ posts }: BlogCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <article
          key={index}
          className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-smooth hover:-translate-y-2 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-smooth hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
              {post.category}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Button variant="ghost" className="w-full">
              Read More
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogCards;

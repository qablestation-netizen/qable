import Hero from "@/components/Hero";
import BlogCards from "@/components/BlogCards";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Fiber Internet Technology",
      excerpt: "Discover how fiber-optic technology is revolutionizing internet connectivity and what it means for your home or business. Learn about the latest advancements and why fiber is the gold standard.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      category: "Technology",
    },
    {
      title: "Top 5 Tips to Optimize Your Home WiFi",
      excerpt: "Learn simple tricks to boost your WiFi signal and eliminate dead zones throughout your home for seamless connectivity. From router placement to mesh networks, we cover it all.",
      date: "Jan 12, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80",
      category: "Tips & Tricks",
    },
    {
      title: "Why Businesses Need Reliable Internet",
      excerpt: "Explore how a stable, high-speed internet connection can dramatically improve productivity and your bottom line. Real-world examples from successful businesses.",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Business",
    },
    {
      title: "Understanding Internet Speed: Mbps vs Gbps",
      excerpt: "Confused about internet speeds? We break down what Mbps and Gbps mean, how they affect your online activities, and how to choose the right speed for your needs.",
      date: "Jan 8, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      category: "Education",
    },
    {
      title: "How to Secure Your Home Network",
      excerpt: "Protect your family and devices with these essential network security tips. From strong passwords to encryption, learn how to keep hackers out.",
      date: "Jan 5, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      category: "Security",
    },
    {
      title: "The Benefits of Mesh WiFi Systems",
      excerpt: "Say goodbye to WiFi dead zones! Learn how mesh WiFi systems work and why they're becoming the standard for modern homes. Complete buying guide included.",
      date: "Jan 3, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      category: "Technology",
    },
  ];

  const categories = ["All", "Technology", "Tips & Tricks", "Business", "Education", "Security"];

  return (
    <div className="min-h-screen">
      <Hero
        title="USA Best Cable Blog & Resources"
        subtitle="Stay informed with the latest tips, news, and insights about internet technology, connectivity, and digital life."
        ctaText="Subscribe"
        showSecondary={false}
      />

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${
                  index === 0
                    ? "bg-primary text-white shadow-card"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogCards posts={blogPosts} />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-card rounded-3xl p-12 shadow-soft text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Never Miss an Update
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest tips, news, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-smooth"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-soft transition-smooth hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

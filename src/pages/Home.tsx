import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import TestimonialCards from "@/components/TestimonialCards";
import FAQAccordion from "@/components/FAQAccordion";
import PriceCards from "@/components/PriceCards";
import BlogCards from "@/components/BlogCards";
import PromoCard from "@/components/PromoCard";
import EnhancedTestimonials from "@/components/EnhancedTestimonials";
import ComparisonTable from "@/components/ComparisonTable";
import DetailedBlogCards from "@/components/DetailedBlogCards";
import WaveDivider from "@/components/WaveDivider";
import CTASection from "@/components/CTASection";
import HeroStyleCTA from "@/components/HeroStyleCTA";
import { 
  Zap, Shield, Headphones, TrendingUp, Wifi, Tv, Briefcase, 
  Rocket, Lock, Clock, DollarSign, Signal, Globe, Sparkles,
  Award, Users, Star, CheckCircle, Radio
} from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Lightning Fast",
      description: "Experience internet speeds up to 1 Gbps with our fiber-optic network. Stream, game, and work without buffering.",
      icon: <Zap className="w-16 h-16 text-foreground stroke-[1.5]" />,
      color: "yellow",
    },
    {
      title: "Reliable Connection",
      description: "99.9% uptime guarantee ensures you're always connected when it matters most. No more dropped calls or lost connections.",
      icon: <Signal className="w-16 h-16 text-foreground stroke-[1.5]" />,
      color: "blue",
    },
    {
      title: "Premium TV",
      description: "Access 300+ channels including sports, movies, and entertainment. Stream in 4K quality on all your devices.",
      icon: <Tv className="w-16 h-16 text-foreground stroke-[1.5]" />,
      color: "mint",
    },
    {
      title: "Business Solutions",
      description: "Scalable broadband for businesses of all sizes. Dedicated support and custom packages to fit your needs.",
      icon: <Briefcase className="w-16 h-16 text-foreground stroke-[1.5]" />,
      color: "lavender",
    },
  ];

  const whyChooseUs = [
    {
      title: "Blazing Speeds",
      description: "Up to 1000 Mbps download speeds",
      icon: <Rocket className="w-12 h-12 text-foreground stroke-[1.5]" />,
      color: "yellow",
    },
    {
      title: "Secure Network",
      description: "Advanced encryption & security features",
      icon: <Lock className="w-12 h-12 text-foreground stroke-[1.5]" />,
      color: "blue",
    },
    {
      title: "24/7 Support",
      description: "Always here when you need us",
      icon: <Clock className="w-12 h-12 text-foreground stroke-[1.5]" />,
      color: "coral",
    },
    {
      title: "Best Value",
      description: "Competitive pricing with no hidden fees",
      icon: <Award className="w-12 h-12 text-foreground stroke-[1.5]" />,
      color: "mint",
    },
  ];

  const enhancedTestimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner in Austin, TX",
      content: "The installation was seamless and the speeds are incredible. My whole family can stream, game, and work without any lag. Best decision we made!",
      gradient: "bg-gradient-to-br from-pastel-coral via-pastel-pink to-pastel-lavender",
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content: "USA Best Cable's business plan has transformed our operations. The reliability and support are unmatched. Our productivity has increased by 40%!",
      gradient: "bg-gradient-to-br from-pastel-sky via-pastel-mint to-primary",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content: "Upload speeds are a game-changer for my workflow. I can now upload 4K videos in minutes instead of hours. The customer service is exceptional!",
      gradient: "bg-gradient-to-br from-pastel-yellow via-accent to-pastel-coral",
    },
  ];

  const detailedBlogPosts = [
    {
      title: "5 Ways Fiber Internet Transforms Remote Work",
      excerpt: "Discover how fiber-optic technology eliminates common remote work challenges and boosts productivity for home offices and distributed teams.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      category: "Productivity",
      featured: true,
    },
    {
      title: "Smart Home Setup: Internet Speed Requirements",
      excerpt: "Learn exactly what internet speeds you need for your smart home devices, from security cameras to voice assistants.",
      date: "Jan 12, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      category: "Smart Home",
    },
    {
      title: "Understanding WiFi 6E: The Ultimate Guide",
      excerpt: "Everything you need to know about the latest WiFi standard and how it delivers faster speeds and better coverage.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80",
      category: "Technology",
    },
  ];

  const faqs = [
    {
      question: "What internet speeds do you offer?",
      answer: "We offer a range of speeds from 100 Mbps to 1000 Mbps (1 Gbps), depending on your plan and location. All our plans use fiber-optic technology for the fastest and most reliable connection.",
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "We offer both contract and no-contract options. Our month-to-month plans give you flexibility with no cancellation fees, while our annual contracts come with discounted rates.",
    },
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-3 hours. Our professional technicians will schedule a convenient time and ensure everything is set up perfectly before they leave.",
    },
    {
      question: "Do you offer bundle packages?",
      answer: "Yes! We offer great savings when you bundle internet with TV and phone services. Check our Plans page for current bundle offers.",
    },
    {
      question: "What if I experience technical issues?",
      answer: "Our 24/7 support team is always available to help. You can reach us by phone, email, or live chat. Most issues can be resolved remotely within minutes.",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "month",
      features: [
        "100 Mbps Download",
        "20 Mbps Upload",
        "Unlimited Data",
        "Free Router",
        "24/7 Support",
      ],
    },
    {
      name: "Pro",
      price: "$79",
      period: "month",
      popular: true,
      features: [
        "500 Mbps Download",
        "100 Mbps Upload",
        "Unlimited Data",
        "Free WiFi 6 Router",
        "Priority Support",
        "Free Installation",
      ],
    },
    {
      name: "Ultra",
      price: "$99",
      period: "month",
      features: [
        "1000 Mbps Download",
        "500 Mbps Upload",
        "Unlimited Data",
        "Premium WiFi 6E Router",
        "VIP Support",
        "Free Installation",
        "Security Suite",
      ],
    },
  ];

  const blogPosts = [
    {
      title: "The Future of Fiber Internet Technology",
      excerpt: "Discover how fiber-optic technology is revolutionizing internet connectivity and what it means for your home or business.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      category: "Technology",
    },
    {
      title: "Top 5 Tips to Optimize Your Home WiFi",
      excerpt: "Learn simple tricks to boost your WiFi signal and eliminate dead zones throughout your home for seamless connectivity.",
      date: "Jan 12, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80",
      category: "Tips & Tricks",
    },
    {
      title: "Why Businesses Need Reliable Internet",
      excerpt: "Explore how a stable, high-speed internet connection can dramatically improve productivity and your bottom line.",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Business",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Your Smart Internet Companion"
        subtitle="Experience lightning-fast fiber internet with unmatched reliability. Connect your home and business to the future of connectivity."
      />

      {/* Features Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-block mb-4 animate-bounce-in">
              <Sparkles className="w-12 h-12 text-primary mx-auto animate-pulse-slow" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Smartest All-in-One Internet Solution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for seamless connectivity, backed by award-winning customer service
            </p>
          </div>
          <FeatureCards features={features} />
        </div>
      </section>

      {/* Promo Card Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-scale-in">
          <PromoCard />
        </div>
      </section>

      {/* Single Combined CTA - Installation & Bundles */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Installation Card */}
            <div className="relative group animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-lavender/30 to-pastel-sky/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-smooth hover-lift border-2 border-transparent group-hover:border-primary/20">
                <div className="text-6xl mb-6 animate-wiggle">🔧</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Installation Made Simple & Fast
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional installation in just 2-3 hours. Our expert technicians handle everything.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Free professional installation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Device configuration included</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Same-day appointments available</span>
                  </li>
                </ul>
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-full transition-all hover:scale-105">
                  Schedule Now →
                </button>
              </div>
            </div>

            {/* Bundle Savings Card */}
            <div className="relative group animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-coral/30 to-pastel-yellow/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-smooth hover-lift border-2 border-transparent group-hover:border-accent/20">
                <div className="text-6xl mb-6 animate-wiggle" style={{ animationDelay: "0.3s" }}>💰</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  Bundle & Save Big
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Internet + TV packages starting at just $99/month. Save up to $50!
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>1000 Mbps fiber internet</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>500+ premium TV channels</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>No contracts or hidden fees</span>
                  </li>
                </ul>
                <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 rounded-full transition-all hover:scale-105">
                  View Bundles →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split Design */}
      <section className="py-20 gradient-section overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce-in">
                <Star className="w-5 h-5 text-foreground animate-pulse-slow" />
                <span className="text-sm font-medium text-foreground">Trusted by 500K+ Customers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Customers Love USA Best Cable
              </h2>
              
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Join thousands of satisfied customers who made the switch to faster, more reliable internet. Experience the difference that quality service makes.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover-scale cursor-pointer animate-scale-in">
                  <div className="text-3xl font-bold text-foreground mb-1">4.9/5</div>
                  <div className="text-sm text-foreground/70">Customer Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover-scale cursor-pointer animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <div className="text-3xl font-bold text-foreground mb-1">500K+</div>
                  <div className="text-sm text-foreground/70">Happy Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover-scale cursor-pointer animate-scale-in" style={{ animationDelay: "0.2s" }}>
                  <div className="text-3xl font-bold text-foreground mb-1">99.9%</div>
                  <div className="text-sm text-foreground/70">Network Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover-scale cursor-pointer animate-scale-in" style={{ animationDelay: "0.3s" }}>
                  <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                  <div className="text-sm text-foreground/70">Expert Support</div>
                </div>
              </div>
            </div>

            {/* Right Features Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 hover:bg-white/30 transition-smooth hover-lift group cursor-pointer animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-background relative overflow-hidden">
        <WaveDivider className="absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block mb-4 animate-bounce-in">
              <Users className="w-12 h-12 text-primary mx-auto animate-heartbeat" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Families Choose USA Best Cable
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real customers across America
            </p>
          </div>
          <EnhancedTestimonials testimonials={enhancedTestimonials} />
        </div>
      </section>

      {/* Comparison Table Section - Bento Grid Style */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-block mb-4 animate-scale-in">
              <CheckCircle className="w-12 h-12 text-primary mx-auto animate-pulse-slow" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why USA Best Cable Stands Out
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we compare to other internet providers
            </p>
          </div>
          <div className="animate-slide-in-up">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* Plans Preview - Interactive Design */}
      <section className="py-20 bg-background overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-block mb-4 animate-bounce-in">
              <DollarSign className="w-12 h-12 text-primary mx-auto animate-wiggle" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Transparent pricing with no hidden fees or surprises
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-pulse-slow">
              <Sparkles className="w-4 h-4" />
              <span>Special offer: First month 50% off!</span>
            </div>
          </div>
          <div className="animate-scale-in">
            <PriceCards plans={plans} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block mb-4 animate-rotate-in">
              <Radio className="w-12 h-12 text-primary mx-auto animate-pulse-slow" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* What's New - Detailed Blog Section */}
            {/* What's New - Detailed Blog Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <WaveDivider className="absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-block mb-4 animate-scale-in">
              <Globe className="w-12 h-12 text-primary mx-auto animate-pulse-slow" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What's New with USA Best Cable?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert tips, guides, and news to help you get the most from your internet
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <DetailedBlogCards posts={detailedBlogPosts} />
          </div>
        </div>
      </section>

      {/* Hero Style CTA Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-scale-in">
          <HeroStyleCTA 
            title="Because that slow internet shouldn't keep you offline at night"
            highlightWord="you"
            ctaText="Get Started"
            ctaLink="/plans"
            decorativeEmoji="😄"
          />
        </div>
      </section>

      
    </div>
  );
};

export default Home;

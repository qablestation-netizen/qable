import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Phone, MessageCircle, Headphones, Zap, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us Anytime",
      description: "Speak with our team directly",
      details: "1-800-USA-CABLE",
      color: "from-primary/20 to-primary/5",
      delay: "0s"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat Support",
      description: "Get instant answers online",
      details: "Available 24/7",
      color: "from-secondary/20 to-secondary/5",
      delay: "0.1s"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description: "Expert help when you need it",
      details: "Round-the-clock service",
      color: "from-accent/20 to-accent/5",
      delay: "0.2s"
    },
  ];

  const benefits = [
    "24/7 customer support",
    "Response within 24 hours",
    "Expert technical assistance",
    "Free consultation available"
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Let's Connect"
        subtitle="We're here to answer your questions and help you get the perfect internet solution for your needs."
        showSecondary={false}
        ctaText="Call Us Now"
      />

      {/* Unique Split Layout Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${method.color} rounded-3xl p-8 text-center transform hover:scale-105 transition-smooth animate-fade-in hover:shadow-lg`}
                style={{ animationDelay: method.delay }}
              >
                <div className="w-20 h-20 rounded-2xl bg-white shadow-soft flex items-center justify-center mx-auto mb-4 text-primary animate-bounce-in" style={{ animationDelay: method.delay }}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                <p className="text-primary font-semibold">{method.details}</p>
              </div>
            ))}
          </div>

          {/* Main Content - Asymmetric Split */}
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
            {/* Left Side - Info Card (2 columns) */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-left">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow" />
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-white/10 rounded-full animate-float" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 animate-scale-in">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <p className="text-white/90 mb-6 text-sm leading-relaxed">
                    Experience unmatched service quality with our dedicated support team. We're committed to providing you with the fastest response times and most reliable solutions.
                  </p>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 animate-fade-in-left"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="soft" className="mt-6 w-full bg-white text-primary hover:bg-white/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 1-800-USA-CABLE
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
                <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="text-3xl font-bold text-secondary mb-1">&lt;1hr</div>
                  <div className="text-sm text-muted-foreground">Avg Response</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (3 columns) */}
            <div className="lg:col-span-3 animate-fade-in-right">
              <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-rotate-in">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">Send a Message</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="John" className="h-12" />
                      </div>
                      <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Doe" className="h-12" />
                      </div>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="john@example.com" className="h-12" />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" className="h-12" />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        What can we help you with? *
                      </label>
                      <Input placeholder="e.g., New service inquiry, Technical support..." className="h-12" />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us more about your needs..."
                        className="min-h-[150px] resize-none"
                      />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <Button variant="hero" size="lg" className="w-full group">
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                      <p className="text-xs text-muted-foreground mt-3 text-center">
                        We respect your privacy and never share your information
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Check out our FAQ section for instant answers to common questions about our services, plans, and more.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import Hero from "@/components/Hero";
import { Wifi, Tv, Building2, Zap, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import fiberIcon from "@/assets/fiber-icon.jpg";
import wifiIcon from "@/assets/wifi-icon.jpg";
import tvIcon from "@/assets/tv-icon.jpg";
import businessIcon from "@/assets/business-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Fiber Internet",
      description: "Ultra-fast fiber-optic internet with speeds up to 1 Gbps. Perfect for streaming, gaming, and working from home without any lag or buffering.",
      features: [
        "Up to 1000 Mbps download speeds",
        "Unlimited data usage",
        "99.9% uptime reliability",
        "Free professional installation",
      ],
      image: fiberIcon,
      color: "yellow",
    },
    {
      title: "Home WiFi",
      description: "Whole-home WiFi coverage with our advanced WiFi 6 routers. Eliminate dead zones and connect all your devices seamlessly.",
      features: [
        "WiFi 6 & 6E technology",
        "Mesh network support",
        "Parental controls included",
        "Smart device management",
      ],
      image: wifiIcon,
      color: "blue",
    },
    {
      title: "Cable TV",
      description: "Access 300+ premium channels including sports, movies, news, and entertainment. Watch on any device, anytime, anywhere.",
      features: [
        "300+ live channels",
        "4K streaming quality",
        "Cloud DVR included",
        "Multi-device streaming",
      ],
      image: tvIcon,
      color: "mint",
    },
    {
      title: "Business Broadband",
      description: "Enterprise-grade internet solutions tailored for businesses. Scalable bandwidth with dedicated support and guaranteed uptime.",
      features: [
        "Dedicated business support",
        "Custom bandwidth options",
        "Static IP addresses",
        "SLA-backed reliability",
      ],
      image: businessIcon,
      color: "lavender",
    },
  ];

  const additionalServices = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Speed Boost",
      description: "Upgrade your speed anytime with our flexible plans",
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Security Suite",
      description: "Advanced protection against cyber threats and malware",
    },
    {
      icon: <Headphones className="w-8 h-8 text-accent" />,
      title: "Premium Support",
      description: "Priority 24/7 technical support when you need it",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Services Built for Modern Life"
        subtitle="From lightning-fast internet to premium entertainment, we offer comprehensive connectivity solutions for homes and businesses."
        ctaText="View Plans"
        ctaLink="/plans"
      />

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card hover:shadow-soft transition-smooth">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-pastel-lavender rounded-3xl p-8 shadow-card flex items-center justify-center min-h-[400px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-w-full h-auto rounded-2xl shadow-soft max-h-80 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your experience with our premium add-ons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-smooth hover:-translate-y-2 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white shadow-soft animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied customers and experience the Qable station difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="soft" size="lg">
                View Plans
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

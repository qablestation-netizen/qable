import Hero from "@/components/Hero";
import { Users, Target, Award, Heart, Lightbulb, TrendingUp, Shield, Smile } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Smile className="w-14 h-14 text-foreground stroke-[1.5]" />,
      title: "Customer First",
      description: "Every decision we make starts with our customers. Your satisfaction is our success.",
    },
    {
      icon: <Lightbulb className="w-14 h-14 text-foreground stroke-[1.5]" />,
      title: "Innovation",
      description: "We continuously invest in cutting-edge technology to deliver the best service possible.",
    },
    {
      icon: <Award className="w-14 h-14 text-foreground stroke-[1.5]" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from installation to customer support.",
    },
    {
      icon: <Heart className="w-14 h-14 text-foreground stroke-[1.5]" />,
      title: "Community",
      description: "We're committed to giving back and building stronger, more connected communities.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Connecting Communities Since 2010"
        subtitle="We're more than just an internet provider. We're your neighbors, committed to bringing fast, reliable connectivity to every home and business."
        ctaText="Join Our Team"
        secondaryText="Contact Us"
      />

      {/* Mission Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-block mb-6 animate-bounce-in">
                <Target className="w-16 h-16 text-primary mx-auto animate-pulse-slow" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At USA Best Cable, we believe that fast, reliable internet is not a luxury—it's a necessity. 
                Our mission is to bridge the digital divide and ensure that everyone has access to 
                world-class connectivity that empowers them to learn, work, and connect with the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-smooth hover-lift animate-fade-in-left">
                <div className="mb-4">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative internet service provider, 
                  connecting millions of homes and businesses with technology that 
                  transforms lives and drives progress.
                </p>
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-smooth hover-lift animate-fade-in-right">
                <div className="mb-4">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2010 by a team of tech enthusiasts, USA Best Cable started with 
                  a simple goal: to bring fiber-optic internet to underserved communities. 
                  Today, we proudly serve over 500,000 customers nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-section overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-block mb-6 animate-rotate-in">
              <Heart className="w-16 h-16 text-primary mx-auto animate-heartbeat" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-smooth hover-lift group cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "500K+", label: "Happy Customers" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "1 Gbps", label: "Max Speed" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in hover-scale cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-pulse-slow">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-block mb-6 animate-bounce-in">
              <Users className="w-16 h-16 text-primary mx-auto animate-pulse-slow" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate team driving USA Best Cable forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Alex Morgan", role: "CEO & Founder", initial: "A" },
              { name: "Jamie Lee", role: "CTO", initial: "J" },
              { name: "Taylor Smith", role: "Head of Customer Success", initial: "T" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 text-center shadow-card hover:shadow-soft transition-smooth hover-lift group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

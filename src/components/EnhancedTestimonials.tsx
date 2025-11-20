import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  gradient: string;
}

interface EnhancedTestimonialsProps {
  testimonials: Testimonial[];
}

const EnhancedTestimonials = ({ testimonials }: EnhancedTestimonialsProps) => {
  return (
    <div className="relative">
      {/* Main testimonial - Large featured */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div
          className="lg:col-span-2 bg-gradient-to-br from-pastel-lavender via-pastel-sky to-pastel-mint p-12 rounded-[3rem] shadow-2xl text-foreground relative overflow-hidden animate-scale-in group hover-lift"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6 animate-bounce-in">
              <Quote className="w-16 h-16 text-foreground/30 transform rotate-180" />
            </div>
            
            <div className="flex gap-1 justify-center mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-foreground text-foreground" />
              ))}
            </div>
            
            <p className="text-2xl md:text-3xl font-medium text-center leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              "{testimonials[0].content}"
            </p>
            
            <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-2xl font-bold border-2 border-white/50">
                {testimonials[0].name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-bold text-xl">{testimonials[0].name}</p>
                <p className="text-foreground/70">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary testimonials - Side by side cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.slice(1).map((testimonial, index) => (
          <div
            key={index}
            className="bg-card p-8 rounded-3xl shadow-card hover:shadow-soft transition-smooth hover-lift group cursor-pointer animate-fade-in-up border-2 border-transparent hover:border-primary/20"
            style={{ animationDelay: `${(index + 1) * 0.15}s` }}
          >
            <div className="relative space-y-6">
              {/* Quote icon */}
              <div className="flex justify-between items-start">
                <Quote className="w-12 h-12 text-primary/20 transform rotate-180 group-hover:text-primary/40 transition-colors" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <p className="text-foreground leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pastel-lavender to-pastel-sky flex items-center justify-center text-xl font-bold text-foreground group-hover:scale-110 transition-transform">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedTestimonials;

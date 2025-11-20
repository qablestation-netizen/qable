import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  imageUrl?: string;
  emoji?: string;
  reversed?: boolean;
}

const CTASection = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink = "/contact",
  imageUrl,
  emoji = "😊",
  reversed = false 
}: CTASectionProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      {/* Content Side */}
      <div className={`space-y-6 ${reversed ? 'md:order-2' : ''}`}>
        <div className="inline-block">
          <div className="text-6xl mb-4">{emoji}</div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
        <div className="pt-4">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            asChild
          >
            <Link to={ctaLink}>
              {ctaText}
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Image/Visual Side */}
      <div className={`relative ${reversed ? 'md:order-1' : ''}`}>
        {imageUrl ? (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (
          <div className="relative bg-gradient-to-br from-pastel-coral/30 via-pastel-pink/30 to-pastel-lavender/30 rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl">{emoji}</div>
                <p className="text-2xl font-bold text-foreground">Your Journey Starts Here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CTASection;

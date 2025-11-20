import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showSecondary?: boolean;
  secondaryText?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  ctaText = "Get Started", 
  ctaLink = "/plans",
  showSecondary = true,
  secondaryText = "Learn More" 
}: HeroProps) => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-pastel-lavender/20 via-background to-pastel-sky/20">
      {/* Diagonal Background Split */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 right-0 w-[60%] h-full origin-top-right"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Accent Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-lavender/30 backdrop-blur-sm border border-pastel-lavender/50">
              <span className="w-2 h-2 rounded-full bg-pastel-lavender animate-pulse" />
              <span className="text-sm font-medium">Ultra-Fast Fiber Internet</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {title.split(' ').map((word, idx) => (
                <span key={idx} className="inline-block">
                  {idx === Math.floor(title.split(' ').length / 2) ? (
                    <span className="bg-gradient-to-r from-pastel-lavender to-pastel-sky bg-clip-text text-transparent">
                      {word}{' '}
                    </span>
                  ) : (
                    <>{word} </>
                  )}
                </span>
              ))}
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to={ctaLink}>
                  {ctaText}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </Button>
              {showSecondary && (
                <Button variant="outline" size="lg" className="backdrop-blur-sm" asChild>
                  <Link to="/about">{secondaryText}</Link>
                </Button>
              )}
            </div>

            {/* Stats or Features */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-pastel-lavender">1000+</div>
                <div className="text-sm text-muted-foreground">Mbps Speed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pastel-sky">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pastel-yellow">500+</div>
                <div className="text-sm text-muted-foreground">TV Channels</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative lg:block hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Fiber Speed Card */}
                <div className="bg-gradient-to-br from-pastel-lavender/40 to-pastel-sky/40 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl">
                  <div className="text-4xl mb-3">⚡</div>
                  <div className="text-2xl font-bold text-foreground mb-1">1000</div>
                  <div className="text-xs text-muted-foreground">Mbps Speed</div>
                </div>

                {/* TV Channels Card */}
                <div className="bg-gradient-to-br from-pastel-coral/40 to-pastel-pink/40 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl">
                  <div className="text-4xl mb-3">📺</div>
                  <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-xs text-muted-foreground">Channels</div>
                </div>

                {/* Uptime Card */}
                <div className="bg-gradient-to-br from-pastel-yellow/40 to-accent/40 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl">
                  <div className="text-4xl mb-3">🛡️</div>
                  <div className="text-2xl font-bold text-foreground mb-1">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>

                {/* Support Card */}
                <div className="bg-gradient-to-br from-pastel-mint/40 to-pastel-sky/40 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl">
                  <div className="text-4xl mb-3">🎧</div>
                  <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;

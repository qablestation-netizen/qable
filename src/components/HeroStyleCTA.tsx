import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroStyleCTAProps {
  title: string;
  subtitle?: string;
  highlightWord?: string;
  ctaText: string;
  ctaLink?: string;
  mockupImage?: string;
  decorativeEmoji?: string;
}

const HeroStyleCTA = ({ 
  title, 
  subtitle,
  highlightWord = "you",
  ctaText, 
  ctaLink = "/plans",
  mockupImage,
  decorativeEmoji = "😊"
}: HeroStyleCTAProps) => {
  // Split title to highlight specific word
  const renderTitle = () => {
    const words = title.split(' ');
    return words.map((word, idx) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, '');
      if (cleanWord === highlightWord.toLowerCase()) {
        return (
          <span key={idx}>
            <span className="italic font-light">{word}</span>{' '}
          </span>
        );
      }
      return <span key={idx}>{word} </span>;
    });
  };

  return (
    <section className="relative overflow-hidden rounded-3xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pastel-coral via-pastel-pink to-pastel-yellow" />
      
      <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {renderTitle()}
            </h2>
            
            {subtitle && (
              <p className="text-lg text-foreground/80 max-w-md">
                {subtitle}
              </p>
            )}
            
            <div>
              <Button 
                size="lg"
                className="bg-pastel-lavender hover:bg-pastel-lavender/90 text-foreground font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <Link to={ctaLink}>
                  {ctaText}
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Mockup/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            {mockupImage ? (
              <div className="relative">
                <img 
                  src={mockupImage} 
                  alt="App mockup"
                  className="w-full max-w-sm lg:max-w-md drop-shadow-2xl"
                />
              </div>
            ) : (
              <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-3xl border-8 border-foreground shadow-2xl overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl" />
                
                {/* Screen Content */}
                <div className="p-6 pt-12 space-y-4">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-pastel-coral rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">📡</span>
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Connect Instantly</h3>
                    <p className="text-sm text-foreground/70">Your perfect plan awaits</p>
                  </div>
                  
                  {/* Feature Cards */}
                  <div className="space-y-3 pt-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-pastel-lavender rounded-xl flex items-center justify-center">
                        <span className="text-lg">⚡</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">Lightning Fast</div>
                        <div className="text-xs text-foreground/60">1000 Mbps speed</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-pastel-mint rounded-xl flex items-center justify-center">
                        <span className="text-lg">📺</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">Premium TV</div>
                        <div className="text-xs text-foreground/60">500+ channels</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-pastel-sky rounded-xl flex items-center justify-center">
                        <span className="text-lg">🎧</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">24/7 Support</div>
                        <div className="text-xs text-foreground/60">Always here for you</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Input Simulation */}
                  <div className="pt-4">
                    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-3">
                      <div className="text-xs text-foreground/70 mb-2">Ready to get started?</div>
                      <div className="bg-white/40 rounded-xl px-3 py-2 text-sm text-foreground/60">
                        Enter your zip code...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStyleCTA;

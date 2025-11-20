import { Button } from "@/components/ui/button";
import { Gift, Users, Sparkles } from "lucide-react";

const PromoCard = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
      
      <div className="relative bg-gradient-to-br from-pastel-lavender via-pastel-pink to-pastel-coral rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-foreground animate-bounce-in">
              <Sparkles className="w-4 h-4" />
              <span>Limited Time Offer</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Know someone moving to a new home?
            </h3>
            
            <p className="text-foreground/80 text-lg leading-relaxed">
              Gift them the best internet experience! When you refer a friend or family member, 
              you both get rewarded with special discounts and premium service upgrades.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-foreground font-medium">$50 credit for both of you</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📦</span>
                </div>
                <span className="text-foreground font-medium">Free premium router upgrade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">⭐</span>
                </div>
                <span className="text-foreground font-medium">Priority installation</span>
              </div>
            </div>
            
            <Button variant="default" size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Gift className="w-5 h-5" />
              Refer & Earn Now
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white/40 to-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce-in shadow-lg">
                  <Users className="w-12 h-12 text-foreground" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-foreground animate-pulse-slow">$50</div>
                  <div className="text-foreground/80 font-medium">Referral Bonus</div>
                </div>
                
                <div className="pt-4 border-t border-white/30 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70">You earn:</span>
                    <span className="font-bold text-foreground">$50 credit</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70">They earn:</span>
                    <span className="font-bold text-foreground">$50 credit</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70">Bonus:</span>
                    <span className="font-bold text-foreground">Free Router</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;

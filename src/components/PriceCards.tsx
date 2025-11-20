import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color?: string;
}

interface PriceCardsProps {
  plans: Plan[];
}

const PriceCards = ({ plans }: PriceCardsProps) => {
  const animations = ['animate-fade-in-left', 'animate-scale-in', 'animate-fade-in-right'];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`bg-card rounded-3xl p-8 shadow-card hover:shadow-2xl transition-all duration-300 hover-lift group cursor-pointer relative overflow-hidden ${animations[index]} ${
            plan.popular ? "ring-2 ring-primary scale-105 md:scale-110" : ""
          }`}
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {/* Background Gradient Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${
            plan.popular 
              ? "from-primary/10 via-accent/5 to-transparent" 
              : "from-transparent to-transparent group-hover:from-primary/5"
          } transition-all duration-300`} />
          
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-in">
              ⭐ Most Popular
            </div>
          )}
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {plan.name}
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-lg">/{plan.period}</span>
              </div>
              {plan.popular && (
                <div className="text-xs text-primary font-medium animate-pulse-slow">
                  Save 20% annually
                </div>
              )}
            </div>

            <ul className="space-y-4 mb-8 min-h-[280px]">
              {plan.features.map((feature, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${(i * 0.05) + (index * 0.15)}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? "hero" : "outline"}
              className={`w-full group-hover:scale-105 transition-transform ${
                !plan.popular && "group-hover:bg-primary group-hover:text-primary-foreground"
              }`}
              size="lg"
            >
              {plan.popular ? "Get Started →" : "Choose Plan"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceCards;

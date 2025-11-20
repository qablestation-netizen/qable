import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

interface FeatureCardsProps {
  features: Feature[];
}

const FeatureCards = ({ features }: FeatureCardsProps) => {
  const colorClasses: Record<string, string> = {
    yellow: "bg-pastel-yellow",
    blue: "bg-pastel-sky",
    mint: "bg-pastel-mint",
    lavender: "bg-pastel-lavender",
    coral: "bg-pastel-coral",
    pink: "bg-pastel-pink",
  };

  const animations = ['animate-fade-in-up', 'animate-fade-in-down', 'animate-scale-in', 'animate-bounce-in'];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${colorClasses[feature.color] || colorClasses.lavender} rounded-3xl p-8 shadow-card hover:shadow-soft transition-smooth hover:-translate-y-2 hover-lift group cursor-pointer ${animations[index % animations.length]}`}
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

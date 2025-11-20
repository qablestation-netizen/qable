import Hero from "@/components/Hero";
import PriceCards from "@/components/PriceCards";
import { Check, X } from "lucide-react";

const Plans = () => {
  const residentialPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "month",
      features: [
        "100 Mbps Download Speed",
        "20 Mbps Upload Speed",
        "Unlimited Data",
        "Free Standard Router",
        "24/7 Customer Support",
        "Free Self-Installation Kit",
      ],
    },
    {
      name: "Pro",
      price: "$79",
      period: "month",
      popular: true,
      features: [
        "500 Mbps Download Speed",
        "100 Mbps Upload Speed",
        "Unlimited Data",
        "Free WiFi 6 Router",
        "Priority Support",
        "Free Professional Installation",
        "Parental Controls",
        "Security Suite Basic",
      ],
    },
    {
      name: "Ultra",
      price: "$99",
      period: "month",
      features: [
        "1000 Mbps Download Speed",
        "500 Mbps Upload Speed",
        "Unlimited Data",
        "Premium WiFi 6E Router",
        "VIP 24/7 Support",
        "Free Professional Installation",
        "Advanced Parental Controls",
        "Security Suite Premium",
        "Cloud Storage 100GB",
      ],
    },
  ];

  const businessPlans = [
    {
      name: "Business Starter",
      price: "$129",
      period: "month",
      features: [
        "500 Mbps Dedicated",
        "Static IP Address",
        "Business-grade Router",
        "99.9% Uptime SLA",
        "Priority Business Support",
        "Free Installation",
      ],
    },
    {
      name: "Business Pro",
      price: "$249",
      period: "month",
      popular: true,
      features: [
        "1000 Mbps Dedicated",
        "5 Static IP Addresses",
        "Enterprise Router & Firewall",
        "99.99% Uptime SLA",
        "Dedicated Account Manager",
        "Free Installation & Training",
        "Advanced Security",
        "Cloud Backup 500GB",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      features: [
        "Custom Bandwidth",
        "Multiple Static IPs",
        "Enterprise Infrastructure",
        "99.99% Uptime SLA",
        "24/7 Dedicated Support",
        "On-site Installation",
        "Enterprise Security",
        "Unlimited Cloud Backup",
        "Custom Solutions",
      ],
    },
  ];

  const comparisonFeatures = [
    { feature: "Download Speed", basic: "100 Mbps", pro: "500 Mbps", ultra: "1000 Mbps" },
    { feature: "Upload Speed", basic: "20 Mbps", pro: "100 Mbps", ultra: "500 Mbps" },
    { feature: "Data Cap", basic: "Unlimited", pro: "Unlimited", ultra: "Unlimited" },
    { feature: "Router Included", basic: "Standard", pro: "WiFi 6", ultra: "WiFi 6E" },
    { feature: "Installation", basic: "Self-Install", pro: "Professional", ultra: "Professional" },
    { feature: "Support", basic: "Standard", pro: "Priority", ultra: "VIP 24/7" },
    { feature: "Security Suite", basic: false, pro: "Basic", ultra: "Premium" },
    { feature: "Cloud Storage", basic: false, pro: false, ultra: "100GB" },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your home or business. No hidden fees, no surprises—just fast, reliable internet at a fair price."
        ctaText="Get Started"
        secondaryText="Contact Sales"
      />

      {/* Residential Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Residential Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perfect for homes, families, and remote workers
            </p>
          </div>
          <PriceCards plans={residentialPlans} />
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Business Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scalable solutions for businesses of all sizes
            </p>
          </div>
          <PriceCards plans={businessPlans} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Plan Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare features across our residential plans
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-card rounded-3xl shadow-card overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-foreground font-semibold">Feature</th>
                  <th className="text-center p-6 text-foreground font-semibold">Basic</th>
                  <th className="text-center p-6 text-foreground font-semibold bg-primary/5">Pro</th>
                  <th className="text-center p-6 text-foreground font-semibold">Ultra</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-6 text-foreground">{row.feature}</td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        row.basic
                      )}
                    </td>
                    <td className="p-6 text-center text-muted-foreground bg-primary/5">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof row.ultra === 'boolean' ? (
                        row.ultra ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        row.ultra
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bundle Promo */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-12 shadow-soft text-center animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Special Offer
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Save Big with Bundles
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Combine Internet + TV + Phone and save up to 30% on your monthly bill. 
              Plus, get free installation and premium equipment upgrades!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-soft transition-smooth hover:scale-105">
                View Bundle Deals
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;

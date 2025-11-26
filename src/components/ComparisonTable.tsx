import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    { feature: "Fiber-Optic Network", us: true, others: false },
    { feature: "99.9% Uptime Guarantee", us: true, others: false },
    { feature: "No Data Caps", us: true, others: false },
    { feature: "Free WiFi 6E Router", us: true, others: false },
    { feature: "24/7 US-Based Support", us: true, others: false },
    { feature: "Free Installation", us: true, others: true },
    { feature: "Price Lock Guarantee", us: true, others: false },
    { feature: "Contract Required", us: false, others: true },
  ];

  return (
    <div className="bg-gradient-to-br from-primary via-accent to-secondary p-2 rounded-3xl shadow-soft">
      <div className="bg-background rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-primary/10 to-accent/10">
              <th className="text-left p-6 text-foreground font-bold">Feature</th>
              <th className="text-center p-6 text-foreground font-bold">Qable station</th>
              <th className="text-center p-6 text-muted-foreground font-bold">Others</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-border/50 ${
                  index % 2 === 0 ? "bg-muted/20" : ""
                }`}
              >
                <td className="p-4 text-foreground">{item.feature}</td>
                <td className="p-4 text-center">
                  {item.us ? (
                    <Check className="w-6 h-6 text-primary mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-muted-foreground/50 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {item.others ? (
                    <Check className="w-6 h-6 text-muted-foreground/50 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-destructive/50 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;

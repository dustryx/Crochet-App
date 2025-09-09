import { Card, CardContent } from "@/components/ui/card";
import { Search, Gavel, Trophy, Shield } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Discover",
    description: "Explore our curated collection of rare and valuable items across multiple categories."
  },
  {
    icon: Gavel,
    title: "Place Your Bid",
    description: "Bid confidently with our secure platform and real-time auction updates."
  },
  {
    icon: Trophy,
    title: "Win & Celebrate",
    description: "Outbid competitors and claim your prize with our seamless winning process."
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Complete your purchase with our trusted payment system and authenticity guarantee."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="bg-hero-gradient bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your bidding journey in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent-gradient rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm shadow-accent">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
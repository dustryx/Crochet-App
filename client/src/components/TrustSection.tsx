import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, Users, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Art Collector",
    content: "BidStore helped me find the perfect addition to my collection. The authentication process is thorough and the bidding experience is seamless.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Watch Enthusiast",
    content: "I've purchased three vintage watches through BidStore. Every piece was exactly as described and arrived in perfect condition.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    role: "Jewelry Designer",
    content: "The platform's transparency and secure payment system make it my go-to choice for sourcing rare gemstones and vintage pieces.",
    rating: 5
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Verified Authenticity</h3>
            <p className="text-sm text-muted-foreground">Every item is authenticated by experts</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Trusted Community</h3>
            <p className="text-sm text-muted-foreground">Join 50,000+ verified bidders</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Award Winning</h3>
            <p className="text-sm text-muted-foreground">Best Auction Platform 2024</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">4.9/5 Rating</h3>
            <p className="text-sm text-muted-foreground">Based on 10,000+ reviews</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-hero-gradient bg-clip-text text-transparent">Bidders Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
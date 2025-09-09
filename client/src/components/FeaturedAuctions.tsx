import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Heart, Users } from "lucide-react";
import watchImage from "@/assets/watch-auction.jpg";
import jewelryImage from "@/assets/jewelry-auction.jpg";
import artImage from "@/assets/art-auction.jpg";

const auctions = [
  {
    id: 1,
    title: "Vintage Patek Philippe 1940s",
    image: watchImage,
    currentBid: "$45,000",
    timeLeft: "2h 15m",
    bidders: 23,
    category: "Watches"
  },
  {
    id: 2,
    title: "Diamond Necklace Collection",
    image: jewelryImage,
    currentBid: "$78,500",
    timeLeft: "1d 8h",
    bidders: 45,
    category: "Jewelry"
  },
  {
    id: 3,
    title: "Renaissance Oil Painting",
    image: artImage,
    currentBid: "$125,000",
    timeLeft: "3d 12h",
    bidders: 67,
    category: "Art"
  }
];

const FeaturedAuctions = () => {
  return (
    <section id="auctions" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Auctions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional items from our curated collection of premium auctions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {auctions.map((auction) => (
            <Card key={auction.id} className="group hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={auction.image} 
                  alt={auction.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {auction.category}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {auction.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Bid</span>
                    <span className="text-2xl font-bold text-primary">{auction.currentBid}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {auction.timeLeft}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {auction.bidders} bidders
                    </div>
                  </div>
                </div>
                
                <Button variant="warm" className="w-full">
                  Place Bid
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Auctions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;
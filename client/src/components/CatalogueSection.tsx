import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shirt, ShoppingBag, Home, Baby, Gift, Crown } from "lucide-react";

const categories = [
  {
    icon: Shirt,
    title: "Clothing",
    description: "Sweaters, cardigans, tops & dresses",
    itemCount: "25+ items",
    color: "bg-primary/10 text-primary",
    featured: "Winter Collection"
  },
  {
    icon: ShoppingBag,
    title: "Bags & Accessories",
    description: "Tote bags, purses, scarves & hats",
    itemCount: "30+ items",
    color: "bg-accent/10 text-accent",
    featured: "Daily Essentials"
  },
  {
    icon: Home,
    title: "Home Decor",
    description: "Blankets, cushions & table runners",
    itemCount: "20+ items",
    color: "bg-primary/10 text-primary",
    featured: "Cozy Living"
  },
  {
    icon: Baby,
    title: "Baby Items",
    description: "Blankets, booties, toys & hats",
    itemCount: "15+ items",
    color: "bg-accent/10 text-accent",
    featured: "Little Ones"
  },
  {
    icon: Gift,
    title: "Gift Sets",
    description: "Curated bundles for special occasions",
    itemCount: "10+ sets",
    color: "bg-primary/10 text-primary",
    featured: "Perfect Gifts"
  },
  {
    icon: Crown,
    title: "Custom Orders",
    description: "Personalized pieces made just for you",
    itemCount: "Unlimited",
    color: "bg-accent/10 text-accent",
    featured: "Your Vision"
  }
];

const CatalogueSection = () => {
  return (
    <section id="catalogue" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-hero-gradient bg-clip-text text-transparent">Catalogue</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of handcrafted crochet items across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {category.featured}
                  </Badge>
                </div>
                
                <CardTitle className="group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {category.itemCount}
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                    Browse →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-surface-gradient rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let us create something special just for you! Share your vision and we'll bring it to life with our custom crochet service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Custom Order
            </Button>
            <Button variant="warm" size="lg">
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogueSection;
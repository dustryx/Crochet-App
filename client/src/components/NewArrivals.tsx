import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";
import bagImage from "@/assets/crochet-bag.jpg";
import sweaterImage from "@/assets/crochet-sweater.jpg";
import blanketImage from "@/assets/crochet-blanket.jpg";

const products = [
  {
    id: 1,
    title: "Handwoven Tote Bag",
    image: bagImage,
    price: "KSh 2,500",
    originalPrice: "KSh 3,000",
    category: "Bags",
    rating: 5,
    isNew: true,
    description: "Perfect for daily use with sturdy handles"
  },
  {
    id: 2,
    title: "Coral Pink Sweater",
    image: sweaterImage,
    price: "KSh 4,200",
    category: "Clothing",
    rating: 5,
    isBestSeller: true,
    description: "Cozy fit with intricate stitch patterns"
  },
  {
    id: 3,
    title: "Baby Comfort Blanket",
    image: blanketImage,
    price: "KSh 1,800",
    category: "Home Decor",
    rating: 5,
    description: "Soft and safe for little ones"
  }
];

const NewArrivals = () => {
  return (
    <section id="new-arrivals" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What's <span className="bg-hero-gradient bg-clip-text text-transparent">New</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh off the hook! Check out our latest handcrafted pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {product.category}
                  </Badge>
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground">
                      New
                    </Badge>
                  )}
                  {product.isBestSeller && (
                    <Badge className="bg-accent text-accent-foreground">
                      Best Seller
                    </Badge>
                  )}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm hover:bg-card text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="warm" size="sm">
                    Quick Order
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
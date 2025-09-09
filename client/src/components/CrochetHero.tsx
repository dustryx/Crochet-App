import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart } from "lucide-react";
import heroImage from "@/assets/crochet-hero.jpg";

const CrochetHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-medium">Handmade with Love</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Beautiful
              <span className="block bg-hero-gradient bg-clip-text text-transparent">
                Crochet
              </span>
              Creations
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              From cozy sweaters to stylish bags, discover handcrafted crochet pieces 
              made with premium yarn and endless love. Custom orders welcome!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Shop New Arrivals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-4">
              Custom Order
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Items Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Handmade</div>
            </div>
          </div>
        </div>
        
        {/* Featured Product Card */}
        <div className="relative">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-accent font-medium">Featured Item</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="aspect-square bg-secondary rounded-xl mb-4 flex items-center justify-center">
              <span className="text-6xl">🧶</span>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">Cozy Winter Sweater</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Handcrafted with soft merino wool
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">From KSh 3,500</span>
              <Button variant="accent" size="sm">
                Order Now
              </Button>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default CrochetHero;
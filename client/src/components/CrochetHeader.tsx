import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";

const CrochetHeader = () => {
  return (
    <header className="bg-surface-gradient border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">🧶</span>
          </div>
          <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            CozyStitches
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#new-arrivals" className="text-foreground hover:text-primary transition-colors">
            New Arrivals
          </a>
          <a href="#catalogue" className="text-foreground hover:text-primary transition-colors">
            Catalogue
          </a>
          <a href="#custom-orders" className="text-foreground hover:text-primary transition-colors">
            Custom Orders
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="hero">Book Order</Button>
        </div>
      </div>
    </header>
  );
};

export default CrochetHeader;
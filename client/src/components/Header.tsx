import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-surface-gradient border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Gavel className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            BidStore
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#auctions" className="text-foreground hover:text-primary transition-colors">
            Live Auctions
          </a>
          <a href="#categories" className="text-foreground hover:text-primary transition-colors">
            Categories
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="hero">Start Bidding</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
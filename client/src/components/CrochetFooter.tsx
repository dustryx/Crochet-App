import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const CrochetFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🧶</span>
              </div>
              <span className="text-2xl font-bold">CozyStitches</span>
            </div>
            <p className="text-primary-foreground/80">
              Handcrafted with love in Nairobi, Kenya. Creating beautiful crochet pieces that bring warmth and joy to your life.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#new-arrivals" className="hover:text-accent transition-colors">New Arrivals</a></li>
              <li><a href="#clothing" className="hover:text-accent transition-colors">Clothing</a></li>
              <li><a href="#bags" className="hover:text-accent transition-colors">Bags & Accessories</a></li>
              <li><a href="#home-decor" className="hover:text-accent transition-colors">Home Decor</a></li>
              <li><a href="#baby-items" className="hover:text-accent transition-colors">Baby Items</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#custom-orders" className="hover:text-accent transition-colors">Custom Orders</a></li>
              <li><a href="#care-guide" className="hover:text-accent transition-colors">Care Guide</a></li>
              <li><a href="#sizing" className="hover:text-accent transition-colors">Sizing Help</a></li>
              <li><a href="#shipping" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#returns" className="hover:text-accent transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            
            <div className="space-y-3 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@cozystitches.co.ke</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-primary-foreground/80 text-sm">
                Get updates on new arrivals and special offers
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="accent" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 CozyStitches. Made with 🧶 and ❤️ in Kenya.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-accent transition-colors">Care Instructions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CrochetFooter;
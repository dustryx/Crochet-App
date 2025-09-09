import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, Clock, CheckCircle } from "lucide-react";

const BookingForm = () => {
  return (
    <section id="custom-orders" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="bg-hero-gradient bg-clip-text text-transparent">Custom Order</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something special? Fill out our booking form and we'll bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+254 700 000 000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="itemType">Item Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sweater">Sweater/Cardigan</SelectItem>
                    <SelectItem value="bag">Bag/Purse</SelectItem>
                    <SelectItem value="blanket">Blanket/Throw</SelectItem>
                    <SelectItem value="hat">Hat/Scarf</SelectItem>
                    <SelectItem value="baby-item">Baby Item</SelectItem>
                    <SelectItem value="custom">Custom Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="size">Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">Small</SelectItem>
                      <SelectItem value="m">Medium</SelectItem>
                      <SelectItem value="l">Large</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="custom">Custom Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" type="number" min="1" placeholder="1" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="colors">Preferred Colors</Label>
                <Input id="colors" placeholder="e.g. Coral pink, cream, sage green" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Delivery Timeline</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                    <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                    <SelectItem value="1-2-months">1-2 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Additional Details</Label>
                <Textarea 
                  id="details" 
                  placeholder="Share any specific requirements, measurements, or design preferences..."
                  rows={4}
                />
              </div>

              <Button variant="hero" className="w-full" size="lg">
                Continue to Payment
              </Button>
            </CardContent>
          </Card>

          {/* Order Summary & Info */}
          <div className="space-y-8">
            {/* Pricing Info */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Pricing & Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Estimated Price Range:</span>
                    <span className="font-semibold">KSh 1,500 - 5,000</span>
                  </div>
                  <div className="flex justify-between text-primary">
                    <span>Deposit Required (30%):</span>
                    <span className="font-bold">KSh 450 - 1,500</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Final price depends on complexity and materials used
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Payment Options:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>M-Pesa Mobile Money</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Bank Transfer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>PayPal</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Timeline */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Order Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div>
                      <div className="font-medium">Submit Order & Pay Deposit</div>
                      <div className="text-sm text-muted-foreground">We'll review and confirm details</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div>
                      <div className="font-medium">Start Crafting</div>
                      <div className="text-sm text-muted-foreground">We begin creating your item</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <div>
                      <div className="font-medium">Progress Updates</div>
                      <div className="text-sm text-muted-foreground">Regular photos and updates</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <div>
                      <div className="font-medium">Final Payment & Delivery</div>
                      <div className="text-sm text-muted-foreground">Complete payment and receive item</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Chat with us on WhatsApp for immediate assistance
                </p>
                <Button variant="accent" className="w-full">
                  💬 WhatsApp Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
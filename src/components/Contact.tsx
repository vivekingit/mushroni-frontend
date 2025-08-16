import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Get In Touch</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Mushroni</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the finest oyster mushrooms? Get in touch with us for orders, 
            questions, or to learn more about our growing operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">Mushroni Organic Farm, Telephone Exchange Road, Kudiyanmala, Kannur, Kerala</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone/WhatsApp</h4>
                    <p className="text-muted-foreground mb-2">6238144505</p>
                    <a 
                      href="https://wa.me/916238144505?text=Hello%20Mushroni,%20I%20would%20like%20to%20inquire%20about%20your%20oyster%20mushrooms."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-200 font-medium"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send WhatsApp Message
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info.mushroni@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM<br />Sun: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Follow Us</h4>
                    <a 
                      href="https://www.instagram.com/mushroni_organics?igsh=YzljYTk1ODg3Zg==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                    >
                      @mushroni_organics
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-hero rounded-xl p-6 text-primary-foreground">
              <h4 className="text-xl font-semibold mb-3">Wholesale Inquiries</h4>
              <p className="text-primary-foreground/90 mb-4">
                Restaurants and retailers can enjoy special wholesale pricing. 
                Contact us to discuss bulk orders and delivery schedules.
              </p>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Wholesale Pricing
              </Button>
            </div>
          </div>

          <Card className="shadow-hero">
            <CardHeader>
              <CardTitle className="text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Order inquiry" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your mushroom needs..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-gradient-hero text-primary-foreground shadow-soft hover:shadow-hero transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
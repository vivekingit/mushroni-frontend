import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Users, Award, Truck, Utensils, GraduationCap } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Sprout,
      title: "Sustainable Farming",
      description: "We use innovative growing techniques that minimize water usage and environmental impact while maximizing quality."
    },
    {
      icon: Users,
      title: "Family Owned",
      description: "A passionate family business dedicated to bringing you the freshest, highest-quality mushrooms since 2020."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Our mushrooms are carefully selected and graded to ensure only the best products reach your kitchen."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Fresh mushrooms delivered within 24 hours of harvest to maintain peak flavor and nutritional value."
    },
    {
      icon: Utensils,
      title: "Farm to Table",
      description: "Direct from our organic farm to your plate with no middlemen, ensuring maximum freshness and quality."
    },
    {
      icon: GraduationCap,
      title: "Expert Cultivation",
      description: "Years of specialized knowledge in mushroom cultivation using advanced growing methods and quality control."
    }
  ];

  return (
    <section id="about" className="py-6 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">About Mushroni</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Growing Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Mushroni, we're passionate about cultivating the finest oyster mushrooms using sustainable 
            practices and innovative growing methods. Our commitment to quality ensures that every mushroom 
            meets our high standards for freshness, flavor, and nutrition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-hero">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">Our Mission</h3>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            To provide fresh, sustainable, and nutritious mushroom products while supporting local communities 
            and protecting our environment. We believe that great taste shouldn't come at the cost of our planet's health.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-primary-foreground/90">
              <div className="text-3xl font-bold">2020</div>
              <div className="text-sm">Founded</div>
            </div>
            <div className="text-primary-foreground/90">
              <div className="text-3xl font-bold">10k+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-primary-foreground/90">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Organic Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
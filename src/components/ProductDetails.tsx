import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Zap, Shield } from "lucide-react";

export const ProductDetails = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Heart Healthy",
      description: "Rich in potassium and low in sodium, supporting cardiovascular health"
    },
    {
      icon: Zap,
      title: "High Protein",
      description: "Complete amino acid profile with essential nutrients for muscle development"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Beta-glucans and antioxidants that boost your natural immune system"
    },
    {
      icon: Leaf,
      title: "Sustainably Grown",
      description: "Eco-friendly cultivation methods with minimal environmental impact"
    }
  ];

  const nutritionalFacts = [
    { label: "Calories", value: "33 per 100g" },
    { label: "Protein", value: "3.3g" },
    { label: "Fiber", value: "2.3g" },
    { label: "Potassium", value: "420mg" }
  ];

  return (
    <section id="products" className="py-12 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Our Flagship Product</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Oyster Mushrooms</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the exceptional taste and nutritional benefits of our premium oyster mushrooms, 
            cultivated with care and harvested at peak freshness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Health Benefits</h3>
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Nutritional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nutritionalFacts.map((fact, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-foreground">{fact.label}</span>
                      <span className="font-semibold text-primary">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Cooking Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-muted-foreground">
                  • Sauté with garlic and herbs for 5-7 minutes
                </div>
                <div className="text-muted-foreground">
                  • Perfect for stir-fries, soups, and pasta dishes
                </div>
                <div className="text-muted-foreground">
                  • Store in refrigerator for up to 7 days
                </div>
                <div className="text-muted-foreground">
                  • No washing needed - clean with damp cloth
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
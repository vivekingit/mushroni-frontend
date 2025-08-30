import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import heroImage from "@/assets/oyster-mushrooms-hero.jpg";

export const Hero = () => {
  const images = [
    heroImage,
    "/lovable-uploads/a421d872-bf7d-4968-9fe6-20e98b1544d6.png",
    "/lovable-uploads/64d1b4c4-f155-47ad-821b-b9da91d351ef.png",
    "/lovable-uploads/48f5bcd4-c922-46d7-9ad3-88082451e4c1.png"
  ];

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Reset to first image to loop continuously
      }
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium
                <span className="text-primary block">Oyster Mushrooms</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fresh, organic, and sustainably grown mushrooms delivered straight from our farm to your table. 
                Experience the exceptional quality and rich flavor of our premium oyster mushrooms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground shadow-hero hover:shadow-soft transition-all duration-300 hover:scale-105">
                Explore Products
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Fresh</div>
                <div className="text-sm text-muted-foreground">Daily Harvest</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Local</div>
                <div className="text-sm text-muted-foreground">Farm Direct</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-hero">
                      <img 
                        src={image} 
                        alt={`Fresh Oyster Mushrooms ${index + 1}`} 
                        className="w-full h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-soft">
              <div className="text-sm font-medium">200g pack</div>
              <div className="text-2xl font-bold">₹100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
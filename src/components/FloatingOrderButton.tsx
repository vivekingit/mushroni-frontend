import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FloatingOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/916238144505?text=Hello%20Mushroni,%20I%20would%20like%20to%20place%20an%20order%20for%20oyster%20mushrooms."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3"
          size="lg"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Order Now
        </Button>
      </a>
    </div>
  );
};
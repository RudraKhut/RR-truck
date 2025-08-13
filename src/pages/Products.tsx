import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Truck, Wrench, Shield } from "lucide-react";
import partsImage from "@/assets/truck-parts-collection.jpg";
import serviceImage from "@/assets/truck-service.jpg";
import brakedrumImage from "@/assets/3600ax-brake-drum.png";

const Products = () => {
  const productCategories = [
    {
      title: "Trailer Brake Shoes 4707",
      description: "Premium 4707 brake shoes for trailer applications with superior stopping power",
      features: [
        "OEM-quality friction materials",
        "Extended wear resistance",
        "Heat-resistant compounds",
        "Perfect fit for 4707 assemblies"
      ],
      image: partsImage,
    },
    {
      title: "Brake Drums 3600AX",
      description: "Heavy-duty 3600AX brake drums for commercial trailer applications",
      features: [
        "High-grade cast iron construction",
        "Precision machined finish",
        "Heat treated for durability",
        "Standard 3600AX specifications"
      ],
      image: brakedrumImage,
    },
    {
      title: "Air Brake Components",
      description: "Complete air brake system parts and accessories",
      features: [
        "Air chambers & diaphragms",
        "Brake valves & fittings",
        "Air lines & connectors",
        "Compressor parts"
      ],
      image: partsImage,
    },
    {
      title: "Brake System Kits",
      description: "Complete brake overhaul kits for efficient repairs",
      features: [
        "All components included",
        "Vehicle-specific kits",
        "Installation hardware",
        "Technical documentation"
      ],
      image: serviceImage,
    },
  ];

  const brands = [
    "Bendix", "Meritor", "Webb", "Gunite", "TSE Brakes", 
    "Stemco", "ConMet", "SAF-Holland", "Wabco", "Haldex"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Premium Quality Parts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Truck Brake Components & Parts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive inventory of brake systems and components for all major truck manufacturers. 
            Quality parts that keep your fleet moving safely and efficiently.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 md:h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 mb-4">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-hero rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Parts</h2>
            <p className="text-muted-foreground">Quality, reliability, and service you can trust</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fleet Tested</h3>
              <p className="text-muted-foreground">
                All parts tested in real-world fleet operations for proven performance and reliability.
              </p>
            </div>
            
            <div className="text-center">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Technical assistance from our experienced parts specialists for proper selection and installation.
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Comprehensive warranty coverage on all brake components with nationwide support.
              </p>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Trusted Brands We Carry</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <span className="font-semibold text-foreground">{brand}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-primary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact our parts specialists for pricing, availability, and technical assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Link to="/contact" className="flex items-center">
                  Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = "tel:+12068808859"}
              >
                Call (206) 880-8859
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ChatBot />
    </div>
  );
};

export default Products;
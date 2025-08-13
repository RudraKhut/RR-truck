import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Users, Calendar, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/truck-brakes-hero.jpg";
import partsImage from "@/assets/truck-parts-collection.jpg";
import serviceImage from "@/assets/truck-service.jpg";
const Index = () => {
  const features = [{
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Fleet Solutions",
    description: "Comprehensive brake and parts solutions for large truck fleets nationwide."
  }, {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Quality Parts",
    description: "Premium semi truck brake components and parts from trusted manufacturers."
  }, {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Expert Support",
    description: "Professional guidance for repair shops and parts stores across the industry."
  }];
  const announcements = [{
    date: "March 15-17, 2024",
    title: "Mid-America Trucking Show",
    location: "Louisville, KY",
    description: "Visit us at booth #12345 for the latest in truck brake technology and special show pricing."
  }, {
    date: "April 20-22, 2024",
    title: "Heavy Duty Aftermarket Week",
    location: "Las Vegas, NV",
    description: "Join us for product demonstrations and meet with our technical specialists."
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Trusted by 500+ Fleet Operations
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Heavy Duty Truck Parts Distributor</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Your trusted partner for semi truck brake systems and parts. Serving the trucking industry with a regular supply and reliable products.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Get Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="mr-2 w-4 h-4" />
              Call (206) 880-8859
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose RR Truck Parts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three decades of experience serving the trucking industry with reliable parts and exceptional service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Premium Brake Components & Parts</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We stock a comprehensive range of brake systems, pads, rotors, drums, and related components for all major truck manufacturers. Our parts meet or exceed OEM specifications.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  <span>OEM-quality semi truck parts</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  <span>Large Inventory in strategically located warehouses across USA</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  <span>Competitive Pricing for Bulk Orders</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  <span>Parts Sourcing and mix container load solutions</span>
                </li>
              </ul>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Link to="/products" className="flex items-center">
                  View All Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={partsImage} alt="Truck parts collection" className="rounded-lg shadow-card" />
              <img src={serviceImage} alt="Truck service" className="rounded-lg shadow-card mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Upcoming Exhibitions</h2>
            <p className="text-xl text-muted-foreground">Meet us at these industry events</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {announcements.map((announcement, index) => <Card key={index} className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 border-primary text-primary">
                    {announcement.date}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
                  <p className="text-primary font-medium mb-3">{announcement.location}</p>
                  <p className="text-muted-foreground">{announcement.description}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/announcements">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our parts specialists today for pricing and availability on truck brake components.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                <Mail className="mr-2 w-4 h-4" />
                Get Quote
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="mr-2 w-4 h-4" />
              Call (206) 880-8859
            </Button>
          </div>
        </div>
      </section>

      <ChatBot />
    </div>;
};
export default Index;
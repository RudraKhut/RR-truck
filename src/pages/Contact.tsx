import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MailOpen } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    emailMarketing: false,
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      emailMarketing: false,
    });
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to our newsletter!",
      description: "You'll receive updates about new products and industry news.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your truck parts needs? Contact our expert team for personalized solutions and competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border shadow-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <p className="text-muted-foreground">(206) 880-8859</p>
                  <p className="text-sm text-muted-foreground">Sales: Ext. 1 | Support: Ext. 2</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <p className="text-muted-foreground">risingrocketsllc@gmail.com</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold">Address</span>
                  </div>
                  <p className="text-muted-foreground">
                    Rising rockets llc<br />
                    20024 85th Ave S Building C,<br />
                    Kent, WA 98031, United States
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold">Business Hours</span>
                  </div>
                  <p className="text-muted-foreground">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Email Marketing Signup */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MailOpen className="w-5 h-5 mr-2 text-primary" />
                  Industry Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Subscribe to receive updates on new products, industry news, and special offers.
                </p>
                <form onSubmit={handleEmailSignup} className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="bg-input border-border"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-input border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-input border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your truck parts needs, fleet size, or specific requirements..."
                      required
                      className="bg-input border-border min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="emailMarketing"
                      checked={formData.emailMarketing}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, emailMarketing: checked as boolean })
                      }
                    />
                    <Label htmlFor="emailMarketing" className="text-sm">
                      I would like to receive email updates about new products and industry news
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-hero rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-muted-foreground mb-6">
            Our parts specialists are available to help you find the right components for your fleet.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={() => window.location.href = "tel:+12068808859"}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now: (206) 880-8859
          </Button>
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default Contact;

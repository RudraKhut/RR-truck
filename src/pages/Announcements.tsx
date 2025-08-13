import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import { Calendar, MapPin, Clock, Users, Truck, ExternalLink } from "lucide-react";

const Announcements = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Mid-America Trucking Show",
      date: "March 15-17, 2024",
      location: "Kentucky Exposition Center, Louisville, KY",
      booth: "Booth #12345",
      description: "Join us at the largest annual heavy-duty trucking industry event in the US. We'll be showcasing our latest brake technology innovations and offering special show pricing on select products.",
      highlights: [
        "Live product demonstrations",
        "Meet with technical specialists",
        "Exclusive show pricing",
        "Free brake inspection guides"
      ],
      status: "upcoming",
      website: "https://truckingshow.com"
    },
    {
      id: 2,
      title: "Heavy Duty Aftermarket Week (HDAW)",
      date: "April 20-22, 2024",
      location: "Sands Expo Center, Las Vegas, NV",
      booth: "Booth #B4567",
      description: "The premier event for heavy-duty aftermarket professionals. Connect with industry leaders and discover the latest trends in truck parts and service.",
      highlights: [
        "New product launches",
        "Technical training sessions",
        "Networking opportunities",
        "Industry trend discussions"
      ],
      status: "upcoming",
      website: "https://hdaw.org"
    },
    {
      id: 3,
      title: "American Trucking Associations Management Conference",
      date: "May 10-13, 2024",
      location: "Gaylord National Resort, Maryland",
      booth: "Booth #A789",
      description: "Premier gathering of trucking executives and fleet managers. Perfect opportunity to discuss fleet-wide brake solutions and maintenance programs.",
      highlights: [
        "Fleet management solutions",
        "Maintenance program discussions",
        "Executive networking",
        "Industry insights"
      ],
      status: "upcoming",
      website: "https://trucking.org"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Technology & Maintenance Council Annual Meeting",
      date: "February 26-29, 2024",
      location: "New Orleans, LA",
      description: "Successfully showcased our technical expertise and latest brake innovations to maintenance professionals.",
      status: "completed"
    },
    {
      id: 5,
      title: "Work Truck Show",
      date: "March 5-8, 2024",
      location: "Indianapolis, IN",
      description: "Great turnout at our booth featuring commercial vehicle brake solutions.",
      status: "completed"
    }
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    const variant = status === "upcoming" ? "default" : "secondary";
    const text = status === "upcoming" ? "Upcoming" : "Completed";
    
    return (
      <Badge variant={variant} className={status === "upcoming" ? "bg-gradient-primary" : ""}>
        {text}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Industry Events & Announcements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the RR Truck Parts team at major trucking industry events. Connect with our specialists 
            for product demonstrations, technical support, and exclusive show offers.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Truck className="w-8 h-8 text-primary mr-3" />
            Upcoming Events
          </h2>
          
          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <CardTitle className="text-2xl mb-2 md:mb-0">{event.title}</CardTitle>
                    <StatusBadge status={event.status} />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-primary mr-2" />
                      <span className="font-semibold text-primary">{event.booth}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Event Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(event.website, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Event Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Clock className="w-8 h-8 text-primary mr-3" />
            Recent Events
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="bg-card border-border shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <StatusBadge status={event.status} />
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-hero">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Planning to Attend?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a meeting with our team at any of these events. We'd love to discuss your 
              specific truck parts needs and show you our latest products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Users className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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

export default Announcements;
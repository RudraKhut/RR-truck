import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with truck parts and brake systems. You can also call us directly at (206) 880-8859 for immediate assistance.",
      isBot: true,
    },
  ]);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot response with phone integration info
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! For immediate assistance, please call us at (206) 880-8859. Our parts specialists are standing by to help with your truck brake and parts needs. We'll also have someone follow up with you soon.",
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setMessage("");
    
    // Show toast about phone connection
    toast({
      title: "Message sent!",
      description: "Our team will contact you shortly. For immediate help, call (206) 880-8859",
    });
  };

  const handleCallNow = () => {
    window.location.href = "tel:+12068808859";
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300 z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] flex flex-col bg-card border border-border shadow-card z-50">
      <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-primary rounded-t-lg">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="font-semibold text-white">RR Truck Parts Support</span>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.isBot
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-border">
        <Button
          onClick={handleCallNow}
          className="w-full mb-3 bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Now: (206) 880-8859
        </Button>
        
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatBot;
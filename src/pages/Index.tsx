import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, TrendingUp, Shield, Users, Building, Phone, Mail, ArrowRight, FileText, BarChart3, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Turn Everyday Sales Into Bankable Records
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Kesher transforms your daily transactions into a Unified Financial Profile lenders can trust, all through WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-kesher-navy hover:bg-white/90 shadow-kesher">
              <MessageSquare className="mr-2 h-5 w-5" />
              Try Demo on WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-kesher-navy">
              Join Kesher Today
            </Button>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-20 px-4 bg-kesher-grey">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-kesher-navy">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Say Hello on WhatsApp",
                description: "Start your financial journey with a simple greeting.",
                icon: MessageSquare
              },
              {
                step: "2", 
                title: "Upload Records",
                description: "Send receipts, past records, or statements.",
                icon: FileText
              },
              {
                step: "3",
                title: "Track Daily Sales", 
                description: "Log sales manually or auto-sync via Kesher.",
                icon: BarChart3
              },
              {
                step: "4",
                title: "Ask Questions",
                description: "Get insights like 'What were my sales last week?'",
                icon: TrendingUp
              },
              {
                step: "5",
                title: "Access Credit",
                description: "Share your UFP with lenders for credit access.",
                icon: CreditCard
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-kesher transition-all duration-300 bg-white">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Badge className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold bg-kesher-blue text-white">
                      {item.step}
                    </Badge>
                  </div>
                  <item.icon className="w-8 h-8 text-kesher-blue mx-auto mb-4" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{item.description}</CardDescription>
                </CardContent>
                {index < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-kesher-blue">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-kesher-navy">See Kesher in Action</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience how Kesher transforms your daily business conversations into financial insights.
          </p>
          
          {/* Phone Mockup */}
          <div className="relative mx-auto max-w-sm">
            <div className="bg-kesher-navy rounded-3xl p-2 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Phone Header */}
                <div className="bg-kesher-accent px-4 py-3 text-white text-center font-medium">
                  Kesher Assistant
                </div>
                
                {/* Chat Messages */}
                <div className="p-4 space-y-4 h-96 overflow-y-auto bg-gray-50">
                  <div className="flex justify-start">
                    <div className="bg-white border px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-sm">
                      👋 Welcome to Kesher! Your financial assistant for your business.
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white border px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-sm">
                      I'll help you track sales, manage cashflow, and access affordable loans.
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white border px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-sm">
                      To begin, what's your business name?
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-kesher-blue text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                      Grace Beauty Salon
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white border px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-sm">
                      Great! Grace Beauty Salon is registered. Ready to track your daily sales?
                    </div>
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="p-4 border-t bg-white">
                  <div className="bg-gray-100 rounded-full px-4 py-2 text-gray-500 text-sm">
                    Type a message...
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="bg-kesher-blue hover:bg-kesher-blue-dark">
              <MessageSquare className="mr-2 h-5 w-5" />
              Try the Demo on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-kesher-grey">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-kesher-navy">Why Choose Kesher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Organized Finances",
                description: "Keep all your financial records unified and accessible in WhatsApp.",
                icon: Shield
              },
              {
                title: "Real-Time Insights", 
                description: "Get instant answers about sales, expenses, and cash flow trends.",
                icon: TrendingUp
              },
              {
                title: "Credibility with Lenders",
                description: "Your UFP makes you visible and credible to financial institutions.",
                icon: Building
              },
              {
                title: "Simple WhatsApp Experience",
                description: "No new apps to learn. Everything happens in WhatsApp.",
                icon: MessageSquare
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-kesher transition-all duration-300 group bg-white">
                <CardContent className="pt-6">
                  <benefit.icon className="w-12 h-12 text-kesher-blue mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-4 text-kesher-navy">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-kesher-navy">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "With Kesher, I proved my shop's income and got a SACCO loan.",
                name: "Jane",
                title: "Grocery Seller"
              },
              {
                quote: "I finally track sales weekly without stress.", 
                name: "Musa",
                title: "Electronics Dealer"
              },
              {
                quote: "Kesher is like a bookkeeper in my phone.",
                name: "Aisha",
                title: "Salon Owner"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-kesher transition-all duration-300 bg-gradient-light border-0">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6 italic text-kesher-navy">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-kesher-navy">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 bg-kesher-grey">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-kesher-navy">Built for Every Business Size</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Micro Sellers",
                items: ["Kiosks", "Mama mboga", "Boda riders"],
                icon: Users,
                color: "bg-kesher-sky"
              },
              {
                title: "Small Shops", 
                items: ["Salons", "Hardware stores", "Mini-retail"],
                icon: Building,
                color: "bg-kesher-blue"
              },
              {
                title: "Growth Businesses",
                items: ["Pharmacies", "Agro-dealers", "Distributors"],
                icon: TrendingUp,
                color: "bg-kesher-navy"
              }
            ].map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-kesher transition-all duration-300 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-kesher-navy">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-lg">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Kesher Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Turn Your Business Data Into Opportunity</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already building their financial future with Kesher.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-kesher-navy hover:bg-white/90 shadow-kesher">
              <MessageSquare className="mr-2 h-5 w-5" />
              Try Demo on WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-kesher-navy">
              Join Kesher Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white border-t">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-kesher-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-kesher-navy">Email</h3>
              <p className="text-muted-foreground">hi@kesher.africa</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-kesher-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-kesher-navy">Phone</h3>
              <p className="text-muted-foreground">+254 700 000 000</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="w-8 h-8 text-kesher-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-kesher-navy">WhatsApp</h3>
              <Button className="bg-kesher-blue hover:bg-kesher-blue-dark">Chat on WhatsApp</Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-kesher-blue transition-colors">How It Works</a>
              <a href="#" className="hover:text-kesher-blue transition-colors">About Us</a>
              <a href="#" className="hover:text-kesher-blue transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
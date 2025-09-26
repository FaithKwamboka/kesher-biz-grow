import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, TrendingUp, Shield, Users, Building, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Financial Growth" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Bankability Made Simple
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Kesher is your financial assistant on WhatsApp. Turn daily records into a Unified Financial Profile (UFP), get instant insights, and unlock access to credit, all without leaving WhatsApp.
          </p>
          <Button variant="hero" size="lg" className="shadow-kesher">
            <MessageSquare className="mr-2 h-5 w-5" />
            Try Demo on WhatsApp
          </Button>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">See Kesher in Action</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Watch how Kesher transforms scattered receipts, M-Pesa messages, and ledgers into a clear financial profile that makes your business bankable.
          </p>
          <div className="bg-gradient-warm rounded-3xl p-12 shadow-card-soft">
            <div className="bg-white/90 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-24 h-24 text-kesher-green mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Interactive Demo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Start on WhatsApp",
                description: "Say hello to Kesher to begin.",
                icon: MessageSquare
              },
              {
                step: "2", 
                title: "Upload Historical Records",
                description: "Send photos of receipts, scanned ledgers, or M-Pesa statements.",
                icon: TrendingUp
              },
              {
                step: "3",
                title: "Ongoing Daily Updates", 
                description: "Text your sales, or let Kesher parse your M-Pesa and receipts.",
                icon: CheckCircle
              },
              {
                step: "4",
                title: "Unified Financial Profile",
                description: "Kesher organizes sales, expenses, and cashflow into one dashboard.",
                icon: Shield
              },
              {
                step: "5", 
                title: "Ask for Insights Anytime",
                description: "Example: 'What are my top 3 products?' Kesher replies instantly.",
                icon: TrendingUp
              },
              {
                step: "6",
                title: "Access to Credit",
                description: "Share your UFP with partner lenders to unlock affordable loans.",
                icon: Building
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-kesher transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </Badge>
                    <item.icon className="w-6 h-6 text-kesher-green" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="success" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Try Demo on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Kesher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Stay Organized",
                description: "All your financial records unified in WhatsApp.",
                icon: Shield
              },
              {
                title: "Save Time", 
                description: "Automated reconciliation from receipts, sales, and M-Pesa.",
                icon: CheckCircle
              },
              {
                title: "Grow Smarter",
                description: "Track sales, debtors, and inventory trends.",
                icon: TrendingUp
              },
              {
                title: "Unlock Credit",
                description: "Your UFP makes you visible and credible to lenders.",
                icon: Building
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-kesher transition-all duration-300 group">
                <CardContent className="pt-6">
                  <benefit.icon className="w-12 h-12 text-kesher-green mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Affordable for Every Business</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Free for the first 50 pilot businesses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="relative overflow-hidden">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-4xl font-bold text-kesher-green">KES 200<span className="text-lg text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">Basic insights for growing businesses</CardDescription>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-kesher-green bg-gradient-success">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl text-white">Growth</CardTitle>
                <div className="text-4xl font-bold text-white">KES 500<span className="text-lg text-white/80">/month</span></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 text-white/90">Advanced dashboard, premium support</CardDescription>
                <Button variant="hero" className="w-full bg-white text-kesher-green hover:bg-white/90">Get Started</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="success" size="lg">Join Kesher Today</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Kesher helped me track daily sales from M-Pesa and receipts. Now I know where my money goes.",
                name: "Mercy",
                title: "Salon Owner, Kisumu"
              },
              {
                quote: "Before Kesher, I couldn't get a loan because I had no formal records. With my UFP, I got approved by a SACCO.",
                name: "David", 
                title: "Shopkeeper, Nairobi"
              },
              {
                quote: "It feels like having an accountant in my WhatsApp. Simple, fast, and reliable.",
                name: "Amina",
                title: "Grocery Seller, Mombasa"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-kesher transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Built for Micro and Small Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Micro Sellers",
                items: ["Kiosk owners", "Mama mboga", "Boda operators"],
                icon: Users
              },
              {
                title: "Small Businesses", 
                items: ["Shops", "Salons", "Pharmacies"],
                icon: Building
              },
              {
                title: "Growing SMEs",
                items: ["Distributors", "Service providers", "Tech integrations"],
                icon: TrendingUp
              }
            ].map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-kesher transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <category.icon className="w-12 h-12 text-kesher-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-kesher-green mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">hi@kesher.africa</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-kesher-green mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+254 700 000 000</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="w-8 h-8 text-kesher-green mb-4" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <Button variant="success">Chat on WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join Kesher Today</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Your business deserves to be bankable. Get started now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-kesher">
              <MessageSquare className="mr-2 h-5 w-5" />
              Try WhatsApp Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-kesher-green">
              Join Kesher
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
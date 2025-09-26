import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, TrendingUp, Shield, Users, Building, Phone, Mail, ArrowRight, FileText, BarChart3, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-kesher-blue/10 to-transparent"></div>
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white leading-tight">
              Turn Everyday Sales Into <span className="text-gradient">Bankable Records</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Kesher transforms your daily transactions into a Unified Financial Profile lenders can trust, all through WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-kesher-navy hover:bg-white/90 shadow-kesher hover-lift font-semibold px-8 py-4">
                <MessageSquare className="mr-3 h-5 w-5" />
                Try Demo on WhatsApp
              </Button>
              <Button variant="secondary" size="lg" className="glass-effect text-white border-white/30 hover:bg-white hover:text-kesher-navy font-semibold px-8 py-4 transition-spring">
                Join Kesher Today
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-kesher-sky/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-kesher-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>


      {/* How It Works Section */}
      <section className="py-24 px-4 bg-kesher-grey">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-display font-bold mb-6 text-kesher-navy">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Simple steps to transform your business finances</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Say Hello on WhatsApp",
                description: "Start your financial journey with a simple greeting.",
                icon: MessageSquare,
                color: "from-kesher-blue to-kesher-sky"
              },
              {
                step: "2", 
                title: "Upload Records",
                description: "Send receipts, past records, or statements.",
                icon: FileText,
                color: "from-kesher-sky to-kesher-accent"
              },
              {
                step: "3",
                title: "Track Daily Sales", 
                description: "Log sales manually or auto-sync via Kesher.",
                icon: BarChart3,
                color: "from-kesher-accent to-kesher-blue"
              },
              {
                step: "4",
                title: "Ask Questions",
                description: "Get insights like 'What were my sales last week?'",
                icon: TrendingUp,
                color: "from-kesher-blue to-kesher-navy"
              },
              {
                step: "5",
                title: "Access Credit",
                description: "Share your UFP with lenders for credit access.",
                icon: CreditCard,
                color: "from-kesher-navy to-kesher-blue"
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-kesher transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold bg-gradient-to-r ${item.color} text-white shadow-elegant animate-pulse-glow`}>
                      {item.step}
                    </div>
                  </div>
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-kesher-blue/10 to-kesher-sky/10 w-fit mx-auto">
                    <item.icon className="w-10 h-10 text-kesher-blue group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-kesher-navy group-hover:text-kesher-blue transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
                {index < 4 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-kesher-blue z-20">
                    <div className="bg-white rounded-full p-2 shadow-soft">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-kesher-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kesher-grey/30 via-transparent to-kesher-grey/30"></div>
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-5xl font-display font-bold mb-8 text-kesher-navy">See Kesher in Action</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              Experience how Kesher transforms your daily business conversations into financial insights.
            </p>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative mx-auto max-w-sm animate-scale-in">
            <div className="bg-gradient-to-br from-kesher-navy to-kesher-blue-dark rounded-3xl p-3 shadow-kesher relative">
              {/* Phone Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-kesher-sky/20 to-transparent rounded-3xl animate-pulse-glow"></div>
              
              <div className="bg-white rounded-2xl overflow-hidden relative z-10 shadow-elegant">
                {/* Phone Header */}
                <div className="bg-gradient-to-r from-kesher-blue to-kesher-accent px-6 py-4 text-white text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-lg">Kesher Assistant</span>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full">Online</div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="p-4 space-y-4 h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-white scrollbar-thin scrollbar-thumb-gray-300">
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '0.5s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      👋 Welcome back, Grace! Ready to track today's sales?
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '0.7s'}}>
                    <div className="bg-gradient-to-r from-kesher-blue to-kesher-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      Yes! Today I got 3,500 KES from hair treatments
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '0.9s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      ✅ Logged! 3,500 KES recorded for hair treatments today.
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.1s'}}>
                    <div className="bg-gradient-to-r from-kesher-blue to-kesher-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      Also spent 800 KES on hair products
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '1.3s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      ✅ Expense recorded: 800 KES for hair products.
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.5s'}}>
                    <div className="bg-gradient-to-r from-kesher-blue to-kesher-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      What's my profit this week?
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '1.7s'}}>
                    <div className="bg-gradient-accent text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      This week: Sales 18,500 KES, Expenses 4,200 KES. Your profit is 14,300 KES! 📈
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.9s'}}>
                    <div className="bg-gradient-to-r from-kesher-blue to-kesher-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      I need a loan for new equipment
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '2.1s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      Your UFP shows steady monthly profit of 52,000 KES. I can connect you with partner lenders! 💰
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '2.3s'}}>
                    <div className="bg-gradient-accent text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      📋 Based on your profile, you qualify for:
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '2.5s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      🏦 KWFT: Up to 100,000 KES at 15% interest
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '2.7s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      🏦 Faulu Bank: Up to 150,000 KES at 18% interest
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '2.9s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      🏦 SMEP: Up to 80,000 KES at 14% interest
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '3.1s'}}>
                    <div className="bg-gradient-to-r from-kesher-blue to-kesher-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      Tell me more about SMEP
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '3.3s'}}>
                    <div className="bg-gradient-accent text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      SMEP offers the best rate at 14%. Fast approval in 3 days. Shall I share your UFP with them?
                    </div>
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="p-4 border-t bg-gradient-to-r from-white to-kesher-grey/20">
                  <div className="bg-gray-100 rounded-full px-4 py-3 text-gray-500 text-sm flex items-center">
                    <span>Type a message...</span>
                    <div className="ml-auto w-2 h-2 bg-kesher-blue rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <Button size="lg" className="bg-gradient-to-r from-kesher-blue to-kesher-blue-dark hover:from-kesher-blue-dark hover:to-kesher-navy shadow-kesher hover-lift font-semibold px-8 py-4">
              <MessageSquare className="mr-3 h-5 w-5" />
              Try the Demo on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-kesher-grey relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kesher-blue/5 via-transparent to-kesher-accent/5"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-display font-bold mb-6 text-kesher-navy">Why Choose Kesher?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Unlock the power of organized finances and data-driven insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Organized Finances",
                description: "Keep all your financial records unified and accessible in WhatsApp.",
                icon: Shield,
                gradient: "from-kesher-blue to-kesher-sky"
              },
              {
                title: "Real-Time Insights", 
                description: "Get instant answers about sales, expenses, and cash flow trends.",
                icon: TrendingUp,
                gradient: "from-kesher-accent to-kesher-blue"
              },
              {
                title: "Credibility with Lenders",
                description: "Your UFP makes you visible and credible to financial institutions.",
                icon: Building,
                gradient: "from-kesher-sky to-kesher-accent"
              },
              {
                title: "Simple WhatsApp Experience",
                description: "No new apps to learn. Everything happens in WhatsApp.",
                icon: MessageSquare,
                gradient: "from-kesher-navy to-kesher-blue"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-10 hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-kesher transition-all duration-500 group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-kesher-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-6 text-kesher-navy group-hover:text-kesher-blue transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
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
            <Button variant="secondary" size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-kesher-navy font-semibold">
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
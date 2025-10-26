import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, TrendingUp, Shield, Users, Building, Phone, Mail, ArrowRight, FileText, BarChart3, CreditCard, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-qenty-blue/10 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-display font-bold text-qenty-navy">
              Qenty
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-qenty-blue font-semibold">
                Home
              </Link>
              <Link to="/about" className="text-qenty-navy hover:text-qenty-blue transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-qenty-blue/10 to-transparent"></div>
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white leading-tight tracking-tight drop-shadow">
              Turn Everyday Sales Into <span className="text-white">Bankable Records</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Qenty transforms your daily transactions into a Unified Financial Profile lenders can trust. Access via WhatsApp or web - your choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-qenty-navy hover:bg-white/90 shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
                <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Try Demo on WhatsApp
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="glass-effect text-white border-white/30 hover:bg-white hover:text-qenty-navy font-semibold px-8 py-4 transition-spring">
                Join Qenty Today
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-qenty-sky/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-qenty-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>


      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-qenty-navy mb-12">How It Works</h2>

          {/* Desktop: compact horizontal stepper */}
          <div className="hidden md:flex items-stretch justify-between gap-6 relative">
            <div className="absolute left-0 right-0 top-10 h-px bg-qenty-blue/20"></div>
            {[
              {
                title: "Say Hello on WhatsApp",
                description: "Start with a simple greeting.",
                icon: MessageSquare
              },
              {
                title: "Upload Records",
                description: "Receipts, ledgers, or statements.",
                icon: FileText
              },
              {
                title: "Track Daily Sales",
                description: "Manual or auto-log via Qenty.",
                icon: BarChart3
              },
              {
                title: "Ask Questions",
                description: "Instant insights anytime.",
                icon: TrendingUp
              },
              {
                title: "Access Credit",
                description: "Share your UFP with lenders.",
                icon: CreditCard
              }
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-qenty-blue text-white flex items-center justify-center shadow-card-soft">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="mt-4 font-semibold text-qenty-navy text-lg">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: simple stacked list */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {[
              {
                title: "Say Hello on WhatsApp",
                description: "Start with a simple greeting.",
                icon: MessageSquare
              },
              {
                title: "Upload Records",
                description: "Receipts, ledgers, or statements.",
                icon: FileText
              },
              {
                title: "Track Daily Sales",
                description: "Manual or auto-log via Qenty.",
                icon: BarChart3
              },
              {
                title: "Ask Questions",
                description: "Instant insights anytime.",
                icon: TrendingUp
              },
              {
                title: "Access Credit",
                description: "Share your UFP with lenders.",
                icon: CreditCard
              }
            ].map((item, i) => (
              <Card key={i} className="p-4 bg-white border shadow-card-soft">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-qenty-blue text-white flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-qenty-navy text-lg">{item.title}</p>
                      <p className="text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-qenty-grey/30 via-transparent to-qenty-grey/30"></div>
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-5xl font-display font-bold mb-8 text-qenty-navy">See Qenty in Action</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              Experience how Qenty transforms your daily business conversations into financial insights.
            </p>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative mx-auto max-w-sm animate-scale-in">
            <div className="bg-gradient-to-br from-qenty-navy to-qenty-blue-dark rounded-3xl p-3 shadow-qenty relative">
              {/* Phone Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-qenty-sky/20 to-transparent rounded-3xl animate-pulse-glow"></div>
              
              <div className="bg-white rounded-2xl overflow-hidden relative z-10 shadow-elegant">
                {/* Phone Header */}
                <div className="bg-gradient-to-r from-qenty-blue to-qenty-accent px-6 py-4 text-white text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-lg">Qenty Assistant</span>
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
                    <div className="bg-gradient-to-r from-qenty-blue to-qenty-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      Yes! Today I got 3,500 KES from hair treatments
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '0.9s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      ✅ Logged! 3,500 KES recorded for hair treatments today.
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.1s'}}>
                    <div className="bg-gradient-to-r from-qenty-blue to-qenty-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      Also spent 800 KES on hair products
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '1.3s'}}>
                    <div className="bg-gradient-card border px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      ✅ Expense recorded: 800 KES for hair products.
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.5s'}}>
                    <div className="bg-gradient-to-r from-qenty-blue to-qenty-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
                      What's my profit this week?
                    </div>
                  </div>
                  
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '1.7s'}}>
                    <div className="bg-gradient-accent text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-soft">
                      This week: Sales 18,500 KES, Expenses 4,200 KES. Your profit is 14,300 KES! 📈
                    </div>
                  </div>
                  
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.9s'}}>
                    <div className="bg-gradient-to-r from-qenty-blue to-qenty-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
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
                    <div className="bg-gradient-to-r from-qenty-blue to-qenty-blue-dark text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-soft">
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
                <div className="p-4 border-t bg-gradient-to-r from-white to-qenty-grey/20">
                  <div className="bg-gray-100 rounded-full px-4 py-3 text-gray-500 text-sm flex items-center">
                    <span>Type a message...</span>
                    <div className="ml-auto w-2 h-2 bg-qenty-blue rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <Button size="lg" className="bg-gradient-to-r from-qenty-blue to-qenty-blue-dark hover:from-qenty-blue-dark hover:to-qenty-navy shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
              <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-3 h-5 w-5" />
                Try the Demo on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-qenty-grey relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-qenty-blue/5 via-transparent to-qenty-accent/5"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-display font-bold mb-6 text-qenty-navy">Why Choose Qenty?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Unlock the power of organized finances and data-driven insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Organized Finances",
                description: "Keep all your financial records unified and accessible via WhatsApp or web.",
                icon: Shield,
                gradient: "from-qenty-blue to-qenty-sky"
              },
              {
                title: "Real-Time Insights", 
                description: "Get instant answers about sales, expenses, and cash flow trends.",
                icon: TrendingUp,
                gradient: "from-qenty-accent to-qenty-blue"
              },
              {
                title: "Credibility with Lenders",
                description: "Your UFP makes you visible and credible to financial institutions.",
                icon: Building,
                gradient: "from-qenty-sky to-qenty-accent"
              },
              {
                title: "WhatsApp & Web Access",
                description: "Choose your preferred platform - mobile WhatsApp or web dashboard.",
                icon: Globe,
                gradient: "from-qenty-navy to-qenty-blue"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-10 hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-qenty transition-all duration-500 group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-qenty-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-6 text-qenty-navy group-hover:text-qenty-blue transition-colors">{benefit.title}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-qenty-navy">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "With Qenty, I proved my shop's income and got a SACCO loan.",
                name: "Jane",
                title: "Grocery Seller"
              },
              {
                quote: "I finally track sales weekly without stress.", 
                name: "Musa",
                title: "Electronics Dealer"
              },
              {
                quote: "Qenty is like a bookkeeper in my phone.",
                name: "Aisha",
                title: "Salon Owner"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-qenty transition-all duration-300 bg-gradient-light border-0">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6 italic text-qenty-navy">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-qenty-navy">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 bg-qenty-grey">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-qenty-navy">Built for Every Business Size</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Micro Sellers",
                items: ["Kiosks", "Mama mboga", "Boda riders"],
                icon: Users,
                color: "bg-qenty-sky"
              },
              {
                title: "Small Shops", 
                items: ["Salons", "Hardware stores", "Mini-retail"],
                icon: Building,
                color: "bg-qenty-blue"
              },
              {
                title: "Growth Businesses",
                items: ["Pharmacies", "Agro-dealers", "Distributors"],
                icon: TrendingUp,
                color: "bg-qenty-navy"
              }
            ].map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-qenty transition-all duration-300 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-qenty-navy">{category.title}</h3>
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

      {/* Join Qenty Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Turn Your Business Data Into Opportunity</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already building their financial future with Qenty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-qenty-navy hover:bg-white/90 shadow-qenty" asChild>
              <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Try Demo on WhatsApp
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-qenty-navy font-semibold">
              Join Qenty Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white border-t">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-qenty-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-qenty-navy">Email</h3>
              <p className="text-muted-foreground">qenty.ai@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-qenty-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-qenty-navy">Phone</h3>
              <p className="text-muted-foreground">+254727705173</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="w-8 h-8 text-qenty-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-qenty-navy">WhatsApp</h3>
              <Button className="bg-qenty-blue hover:bg-qenty-blue-dark" asChild>
                <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-qenty-blue transition-colors">How It Works</a>
              <Link to="/about" className="hover:text-qenty-blue transition-colors">About Us</Link>
              <a href="#" className="hover:text-qenty-blue transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

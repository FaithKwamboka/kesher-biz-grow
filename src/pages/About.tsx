import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Smartphone, Lightbulb, TrendingUp, MessageSquare, Users, Target, Building, ArrowRight, Sparkles, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-kesher-blue/10 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-display font-bold text-kesher-navy">
              Kesher
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-kesher-navy hover:text-kesher-blue transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-kesher-blue font-semibold">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-kesher-blue/10 to-transparent"></div>
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 text-white">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 text-white leading-tight tracking-tight drop-shadow-lg">
              About <span className="text-gradient bg-gradient-to-r from-white to-kesher-sky bg-clip-text text-transparent">Kesher</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Empowering Africa's invisible businesses with financial transparency and unlimited opportunity.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-kesher-sky/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-kesher-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Our Story Section */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kesher-blue/5 via-transparent to-kesher-accent/5"></div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-kesher-blue/10 rounded-full px-6 py-3 mb-8 text-kesher-blue">
              <Building className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Foundation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12 text-kesher-navy leading-tight">
              Built for Africa's <span className="text-gradient bg-gradient-to-r from-kesher-blue to-kesher-accent bg-clip-text text-transparent">Invisible Businesses</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Kesher was founded to solve a critical challenge: <strong className="text-kesher-navy">millions of micro and small businesses</strong> across Africa run on paper receipts, M-Pesa messages, and notebooks, making them invisible to formal finance.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Without proper records, they cannot prove income or access affordable loans. <strong className="text-kesher-blue">We are here to change that.</strong>
              </p>
            </div>
            
            <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="bg-gradient-to-br from-kesher-blue to-kesher-navy rounded-3xl p-8 shadow-kesher">
                  <div className="grid grid-cols-2 gap-6 text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">40M+</div>
                      <div className="text-sm opacity-90">Small Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">$300B</div>
                      <div className="text-sm opacity-90">Informal Economy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">80%</div>
                      <div className="text-sm opacity-90">Lack Bank Access</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">90%</div>
                      <div className="text-sm opacity-90">Use Paper Records</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-kesher-accent/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-28 px-4 bg-gradient-to-br from-kesher-grey to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kesher-sky/10 via-transparent to-kesher-blue/10"></div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-kesher-accent/10 rounded-full px-6 py-3 mb-8 text-kesher-accent">
              <Target className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Mission</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12 text-kesher-navy leading-tight">
              Turning Everyday Transactions Into <span className="text-gradient bg-gradient-to-r from-kesher-accent to-kesher-blue bg-clip-text text-transparent">Opportunity</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-card border-0 shadow-kesher hover-lift">
              <CardContent className="pt-6">
                <p className="text-xl text-muted-foreground leading-relaxed text-center">
                  Our mission is to empower small businesses by transforming <strong className="text-kesher-blue">fragmented financial data</strong> into a single, trusted <strong className="text-kesher-navy">Unified Financial Profile (UFP)</strong>. With Kesher, entrepreneurs gain credibility, insights, and access to the growth capital they deserve.
                </p>
                
                <div className="flex justify-center mt-8">
                  <div className="flex items-center gap-4 text-kesher-blue">
                    <div className="w-2 h-2 bg-kesher-blue rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Transforming Lives, One Transaction at a Time</span>
                    <div className="w-2 h-2 bg-kesher-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kesher-navy/5 via-transparent to-kesher-blue/5"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-kesher-navy/10 rounded-full px-6 py-3 mb-8 text-kesher-navy">
              <Lightbulb className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Solution</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12 text-kesher-navy leading-tight">
              <span className="text-gradient bg-gradient-to-r from-kesher-navy to-kesher-blue bg-clip-text text-transparent">Bankability</span>-as-a-Service
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MessageSquare,
                title: "WhatsApp Native",
                description: "Works directly inside WhatsApp - no new app to learn",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Globe,
                title: "Data Aggregation",
                description: "Connects M-Pesa, receipts, ledgers, Excel, and accounting apps",
                gradient: "from-kesher-blue to-kesher-sky"
              },
              {
                icon: TrendingUp,
                title: "Real-time Insights",
                description: "Live dashboards showing sales, inventory, and debtors",
                gradient: "from-kesher-accent to-kesher-navy"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-kesher transition-all duration-300 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-kesher-navy group-hover:text-kesher-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This profile is then shared with partner banks, SACCOs, and MFIs to unlock <strong className="text-kesher-blue">embedded lending opportunities</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-28 px-4 bg-gradient-to-br from-kesher-grey to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kesher-blue/5 via-transparent to-kesher-accent/5"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-kesher-sky/10 rounded-full px-6 py-3 mb-8 text-kesher-sky">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Values</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12 text-kesher-navy leading-tight">
              What Drives <span className="text-gradient bg-gradient-to-r from-kesher-sky to-kesher-accent bg-clip-text text-transparent">Us Forward</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Trust & Transparency",
                description: "We build transparency for businesses and lenders, creating trust through verified financial profiles.",
                icon: Shield,
                gradient: "from-kesher-blue to-kesher-sky",
                features: ["Verified Data", "Secure Sharing", "Honest Reporting"]
              },
              {
                title: "Radical Simplicity",
                description: "Easy to use, accessible on WhatsApp. No complex interfaces or lengthy onboarding processes.",
                icon: Smartphone,
                gradient: "from-kesher-sky to-kesher-accent",
                features: ["WhatsApp Native", "One-Tap Logging", "Instant Insights"]
              },
              {
                title: "Continuous Innovation",
                description: "AI-powered insights for smarter decisions, constantly evolving to serve our users better.",
                icon: Lightbulb,
                gradient: "from-kesher-accent to-kesher-blue",
                features: ["AI Analytics", "Smart Predictions", "Auto-categorization"]
              },
              {
                title: "True Empowerment",
                description: "Giving small businesses the tools to grow and access the capital they deserve.",
                icon: TrendingUp,
                gradient: "from-kesher-navy to-kesher-blue",
                features: ["Financial Literacy", "Credit Access", "Growth Tools"]
              }
            ].map((value, index) => (
              <Card key={index} className="p-10 hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-kesher transition-all duration-500 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant flex-shrink-0`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-semibold mb-4 text-kesher-navy group-hover:text-kesher-blue transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {value.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {value.features.map((feature, i) => (
                          <span key={i} className="bg-kesher-blue/10 text-kesher-blue px-3 py-1 rounded-full text-sm font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kesher-accent/5 via-transparent to-kesher-navy/5"></div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-kesher-accent/10 rounded-full px-6 py-3 mb-8 text-kesher-accent">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Vision</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12 text-kesher-navy leading-tight">
              A Future Where Every Business <span className="text-gradient bg-gradient-to-r from-kesher-accent to-kesher-navy bg-clip-text text-transparent">Counts</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We envision an Africa where no entrepreneur is excluded from opportunity because of missing records. With Kesher, <strong className="text-kesher-navy">every sale, expense, and receipt</strong> contributes to building a bankable future.
              </p>
              
              <div className="space-y-4">
                {[
                  "Financial inclusion for all entrepreneurs",
                  "Transparent lending ecosystem",
                  "Data-driven business growth",
                  "Sustainable economic development"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 animate-fade-in" style={{animationDelay: `${0.4 + i * 0.1}s`}}>
                    <div className="w-2 h-2 bg-kesher-accent rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="bg-gradient-to-br from-kesher-accent to-kesher-navy rounded-3xl p-8 shadow-kesher">
                  <div className="text-center text-white mb-8">
                    <h3 className="text-2xl font-bold mb-4">Our Impact Goal</h3>
                    <div className="text-4xl font-bold mb-2">1M+</div>
                    <div className="text-sm opacity-90">Businesses Empowered by 2030</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold mb-1">50+</div>
                      <div className="text-xs opacity-90">Partner Lenders</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold mb-1">$10B</div>
                      <div className="text-xs opacity-90">Credit Unlocked</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-kesher-blue/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-kesher-blue via-kesher-blue-dark to-kesher-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-kesher-sky/10 to-transparent"></div>
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
              Join the Movement
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Be part of the journey to make Africa's $300B informal economy visible and bankable.
            </p>
            <Button size="lg" className="bg-white text-kesher-navy hover:bg-white/90 shadow-kesher hover-lift font-semibold px-8 py-4">
              <MessageSquare className="mr-3 h-5 w-5" />
              Try Demo on WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-kesher-sky/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-kesher-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>
    </div>
  );
};

export default About;
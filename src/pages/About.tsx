import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Smartphone, Lightbulb, TrendingUp, MessageSquare, Users, Target, Building } from "lucide-react";
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
      <section className="py-24 px-4 bg-gradient-to-br from-kesher-blue via-kesher-blue-dark to-kesher-navy">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white leading-tight">
            About Kesher
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering Africa's invisible businesses with financial transparency and opportunity.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-kesher-navy">
              Built for Africa's Invisible Businesses
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Kesher was founded to solve a critical challenge: millions of micro and small businesses across Africa run on paper receipts, M-Pesa messages, and notebooks, making them invisible to formal finance. Without proper records, they cannot prove income or access affordable loans. We are here to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 bg-kesher-grey">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-kesher-navy">
              Turning Everyday Transactions Into Opportunity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Our mission is to empower small businesses by transforming fragmented financial data into a single, trusted Unified Financial Profile (UFP). With Kesher, entrepreneurs gain credibility, insights, and access to the growth capital they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kesher-sky/10 to-kesher-blue/10">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-kesher-navy">
              Bankability-as-a-Service
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Kesher works directly inside WhatsApp, making it easy to use. By aggregating data from M-Pesa, receipts, ledgers, and digital tools like Excel or accounting apps, we build real-time dashboards that show sales, inventory, and debtors. This profile is then shared with partner banks, SACCOs, and MFIs to unlock embedded lending opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-kesher-navy">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trust",
                description: "We build transparency for businesses and lenders.",
                icon: Shield,
                gradient: "from-kesher-blue to-kesher-sky"
              },
              {
                title: "Simplicity",
                description: "Easy to use, accessible on WhatsApp.",
                icon: Smartphone,
                gradient: "from-kesher-sky to-kesher-accent"
              },
              {
                title: "Innovation",
                description: "AI-powered insights for smarter decisions.",
                icon: Lightbulb,
                gradient: "from-kesher-accent to-kesher-blue"
              },
              {
                title: "Empowerment",
                description: "Giving small businesses the tools to grow.",
                icon: TrendingUp,
                gradient: "from-kesher-navy to-kesher-blue"
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-kesher transition-all duration-300 group">
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-kesher-navy group-hover:text-kesher-blue transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 px-4 bg-kesher-grey">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-kesher-navy">
              A Future Where Every Business Counts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We envision an Africa where no entrepreneur is excluded from opportunity because of missing records. With Kesher, every sale, expense, and receipt contributes to building a bankable future.
            </p>
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
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import qentyLogo from "@/assets/qenty-logo.png";

const Demo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-qenty-blue/10 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={qentyLogo} alt="Qenty" className="h-20 w-auto" />
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-qenty-navy hover:text-qenty-blue transition-colors flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Demo Video Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-qenty-grey to-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-qenty-blue/10 rounded-full px-6 py-3 mb-8">
              <Play className="w-5 h-5 text-qenty-blue" />
              <span className="text-sm font-semibold text-qenty-blue">Product Demo</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-qenty-navy leading-tight">
              See Qenty in <span className="text-gradient bg-gradient-to-r from-qenty-blue to-qenty-accent bg-clip-text text-transparent">Action</span>
            </h1>
            <p className="text-xl text-qenty-navy/90 max-w-3xl mx-auto leading-relaxed">
              Watch how Qenty transforms your daily business operations into a complete financial profile.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-qenty bg-qenty-navy animate-scale-in">
            <div className="aspect-video">
              <video 
                controls 
                className="w-full h-full"
                poster="/videos/qenty-demo.mp4"
              >
                <source src="/videos/qenty-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h2 className="text-3xl font-display font-bold mb-6 text-qenty-navy">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-qenty-navy/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Qenty to build their financial profile and access growth capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="success" className="shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
                <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                  Try on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="hero" className="shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
                <a href="https://app.qenty.io" target="_blank" rel="noopener noreferrer">
                  Start on Web
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-qenty-navy">
            What You'll Get with Qenty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Easy Record Keeping",
                description: "Track sales, expenses, and inventory via WhatsApp or web - no complex setup required."
              },
              {
                title: "Financial Insights",
                description: "Get real-time dashboards and AI-powered insights to understand your business better."
              },
              {
                title: "Access to Credit",
                description: "Build a bankable profile that lenders recognize and share it to unlock financing."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-qenty-grey/50 hover:bg-qenty-grey transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-qenty-navy">{feature.title}</h3>
                <p className="text-qenty-navy/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

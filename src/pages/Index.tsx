import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, TrendingUp, Shield, Users, Building, Phone, Mail, ArrowRight, FileText, Package, CreditCard, Globe, BarChart3 } from "lucide-react";
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
              <a href="https://qenty.replit.app/auth/signup" className="text-qenty-navy hover:text-qenty-blue transition-colors ml-auto">
                Login
              </a>
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
              Your Business Data, <span className="text-white">Now Bankable</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Track sales, manage inventory, log expenses - all via WhatsApp or web. Build a financial profile lenders recognize and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" variant="success" className="shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
                <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Try Qenty on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="hero" className="shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
                <a href="https://Kesher.replit.app" target="_blank" rel="noopener noreferrer">
                  Join Qenty Today
                </a>
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
                title: "Manage Daily Operations",
                description: "Track sales, update catalogue, manage inventory.",
                icon: Package
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
                <p className="text-sm text-qenty-navy/90 mt-1">{item.description}</p>
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
                title: "Manage Daily Operations",
                description: "Track sales, update catalogue, manage inventory.",
                icon: Package
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
                      <p className="text-base text-qenty-navy/90">{item.description}</p>
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
            <p className="text-xl text-qenty-navy/90 mb-16 max-w-3xl mx-auto leading-relaxed">
              Experience how Qenty transforms your daily business conversations into financial insights.
            </p>
          </div>
          
          {/* Phone Mockup - WhatsApp Style */}
          <div className="relative mx-auto max-w-sm animate-scale-in">
            <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl relative">
              {/* Phone Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent rounded-3xl"></div>
              
              <div className="bg-[#E5DDD5] rounded-2xl overflow-hidden relative z-10 shadow-elegant">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] px-4 py-3 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                      🏪
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base">Qenty</div>
                      <div className="text-xs text-gray-200 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        online
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Chat Messages - WhatsApp Background Pattern */}
                <div className="p-3 space-y-3 h-96 overflow-y-auto bg-[#E5DDD5] relative" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1c9bf' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}>
                  
                  {/* Welcome Message with Actions */}
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
                      <div className="text-sm text-gray-900 mb-2">
                        Welcome back! 👋<br/>What would you like to do today?
                      </div>
                      <div className="mt-3 space-y-2 border-t pt-2">
                        <button className="flex items-center gap-2 text-sm text-[#128C7E] hover:underline w-full text-left">
                          <span>↩️</span>
                          <span className="font-medium">Record a Sale</span>
                        </button>
                        <button className="flex items-center gap-2 text-sm text-[#128C7E] hover:underline w-full text-left">
                          <span>↩️</span>
                          <span className="font-medium">Record an Expense</span>
                        </button>
                        <button className="flex items-center gap-2 text-sm text-[#128C7E] hover:underline w-full text-left">
                          <span>☰</span>
                          <span className="font-medium">See all options</span>
                        </button>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-2">07:40</div>
                    </div>
                  </div>
                  
                  {/* User initiates sale */}
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg rounded-tr-none max-w-[75%] shadow-sm">
                      <div className="text-sm text-gray-900">
                        Sold fertilizer to Kamau Farm - 50kg DAP
                      </div>
                      <div className="text-xs text-gray-600 text-right mt-1 flex items-center justify-end gap-1">
                        07:42
                        <span className="text-blue-500">✓✓</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Receipt with PDF */}
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '0.6s'}}>
                    <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
                      {/* PDF Preview */}
                      <div className="bg-gray-100 rounded p-3 mb-2 flex items-start gap-2">
                        <div className="text-3xl">📄</div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-700 uppercase mb-1">RECEIPT</div>
                          <div className="text-xs text-gray-600">G795900.pdf</div>
                          <div className="text-xs text-gray-500">2.8 kB • PDF</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-600">✅</span>
                        <span className="text-sm font-semibold text-gray-900">Cash Sale Recorded!</span>
                      </div>
                      <div className="text-sm text-gray-900 space-y-1">
                        <p className="font-medium">Kamau Farm</p>
                        <p><span className="text-gray-600">Receipt:</span> G795900</p>
                        <p><span className="text-gray-600">Total:</span> KES 4,800.00</p>
                        <p className="font-medium mt-1">Items:</p>
                        <ul className="text-xs space-y-0.5 ml-2">
                          <li>• DAP Fertilizer 50kg: 1.0 x KES 4,800.00</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-2">📎 Receipt is attached above.</p>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-2">07:42</div>
                    </div>
                  </div>
                  
                  {/* User updates catalogue */}
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '0.8s'}}>
                    <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg rounded-tr-none max-w-[75%] shadow-sm">
                      <div className="text-sm text-gray-900">
                        Update NPK price to 5,200 KES
                      </div>
                      <div className="text-xs text-gray-600 text-right mt-1 flex items-center justify-end gap-1">
                        07:44
                        <span className="text-blue-500">✓✓</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Update Confirmation */}
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '1.0s'}}>
                    <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span>✏️</span>
                        <span className="text-sm font-semibold text-gray-900">Product Updated!</span>
                      </div>
                      <div className="text-sm text-gray-900">
                        <p className="flex items-center gap-1">
                          <span className="text-green-600">✅</span>
                          <span>NPK 17-17-17 50kg price updated to KES 5,200.00 in your catalogue</span>
                        </p>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-2">07:44</div>
                    </div>
                  </div>
                  
                  {/* System notification */}
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '1.2s'}}>
                    <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[75%] shadow-sm">
                      <div className="text-sm text-gray-900">
                        Changes saved! View your catalogue to see all updates.
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-1">07:44</div>
                    </div>
                  </div>
                  
                  {/* User records expense */}
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.4s'}}>
                    <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg rounded-tr-none max-w-[75%] shadow-sm">
                      <div className="text-sm text-gray-900">
                        Paid 1,500 for transport delivery
                      </div>
                      <div className="text-xs text-gray-600 text-right mt-1 flex items-center justify-end gap-1">
                        11:02
                        <span className="text-blue-500">✓✓</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expense Confirmation */}
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '1.6s'}}>
                    <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-600">✅</span>
                        <span className="text-sm font-semibold text-gray-900">Expense Recorded!</span>
                      </div>
                      <div className="text-sm text-gray-900 space-y-1">
                        <p className="font-medium">Agro Supplies Ltd</p>
                        <p><span className="text-gray-600">Category:</span> Transport</p>
                        <p><span className="text-gray-600">Description:</span> Delivery to customer</p>
                        <p><span className="text-gray-600">Amount:</span> KES 1,500.00</p>
                        <p><span className="text-gray-600">Payment:</span> Cash</p>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-2">11:02</div>
                    </div>
                  </div>
                  
                  {/* User asks for insights */}
                  <div className="flex justify-end animate-slide-up" style={{animationDelay: '1.8s'}}>
                    <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg rounded-tr-none max-w-[75%] shadow-sm">
                      <div className="text-sm text-gray-900">
                        Show me this month's summary
                      </div>
                      <div className="text-xs text-gray-600 text-right mt-1 flex items-center justify-end gap-1">
                        11:05
                        <span className="text-blue-500">✓✓</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business insights */}
                  <div className="flex justify-start animate-slide-up" style={{animationDelay: '2.0s'}}>
                    <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
                      <div className="text-sm text-gray-900 space-y-1">
                        <p className="font-semibold">📊 October Summary</p>
                        <p>💰 Total Sales: KES 285,400.00</p>
                        <p>📉 Total Expenses: KES 82,150.00</p>
                        <p className="text-green-600 font-semibold">✨ Net Profit: KES 203,250.00</p>
                        <p className="text-xs text-gray-600 mt-2">Your business is growing steadily! 📈</p>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-2">11:05</div>
                    </div>
                  </div>
                </div>
                
                {/* WhatsApp Chat Input */}
                <div className="p-2 border-t border-gray-300 bg-[#F0F0F0]">
                  <div className="bg-white rounded-full px-4 py-2 text-gray-500 text-sm flex items-center shadow-sm">
                    <span>Type a message</span>
                    <div className="ml-auto text-gray-400">😊</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '1s'}}>
            <Button size="lg" variant="hero" className="shadow-qenty hover-lift font-semibold px-10 py-4" asChild>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Watch Demo
              </a>
            </Button>
            <Button size="lg" variant="success" className="shadow-qenty hover-lift font-semibold px-10 py-4" asChild>
              <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-3 h-5 w-5" />
                Try Qenty on WhatsApp
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
            <p className="text-xl text-qenty-navy/90 max-w-3xl mx-auto">Unlock the power of organized finances and data-driven insights</p>
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
                title: "Financial Analytics",
                description: "Track your business performance with detailed analytics and visual reports.",
                icon: BarChart3,
                gradient: "from-qenty-navy to-qenty-accent"
              },
              {
                title: "Credibility with Lenders",
                description: "Your UFP makes you visible and credible to financial institutions.",
                icon: CheckCircle,
                gradient: "from-qenty-sky to-qenty-accent"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-10 hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-qenty transition-all duration-500 group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-qenty-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-6 text-qenty-navy group-hover:text-qenty-blue transition-colors">{benefit.title}</h3>
                  <p className="text-qenty-navy/90 text-lg leading-relaxed">{benefit.description}</p>
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
                    <p className="text-sm text-qenty-navy/90">{testimonial.title}</p>
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
                title: "Micro & Small Businesses",
                icon: Users,
                color: "bg-qenty-sky"
              },
              {
                title: "Medium Enterprises", 
                icon: Building,
                color: "bg-qenty-blue"
              },
              {
                title: "Freelancers & Consultants",
                icon: TrendingUp,
                color: "bg-qenty-navy"
              }
            ].map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-qenty transition-all duration-300 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-qenty-navy">{category.title}</h3>
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="success" className="shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
              <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-3 h-5 w-5" />
                Try Qenty on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="hero" className="shadow-qenty hover-lift font-semibold px-8 py-4" asChild>
              <a href="https://Kesher.replit.app" target="_blank" rel="noopener noreferrer">
                Join Qenty Today
              </a>
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
              <p className="text-qenty-navy/90">qenty.ai@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-qenty-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-qenty-navy">Phone</h3>
              <p className="text-qenty-navy/90">+254727705173</p>
              <p className="text-qenty-navy/90">+254702735380</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="w-8 h-8 text-qenty-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-qenty-navy">WhatsApp</h3>
              <Button variant="success" className="shadow-qenty hover-lift font-semibold" asChild>
                <a href="https://wa.me/254794760625" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-qenty-navy/90">
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

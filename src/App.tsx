import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Textarea } from './components/ui/textarea';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  ArrowRight, 
  Building2, 
  Banknote, 
  BarChart3,
  CheckCircle,
  Star,
  Globe,
  Smartphone
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('investor');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">InvestIndia</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <Button variant="outline" size="sm">Sign In</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🇮🇳 Made for India
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              India's Premier
              <span className="text-primary block">Crowdfunding Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in India's most promising startups, trade on our secondary market, 
              and access venture debt opportunities. All in one comprehensive platform.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Equity Crowdfunding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Invest in early-stage startups and become a shareholder in India's next unicorns.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Secondary Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Trade your investments for liquidity before traditional exit events.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Banknote className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Venture Debt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Access crowdlending opportunities with fixed returns and lower risk profiles.</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Investing Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              List Your Startup
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join InvestIndia</h2>
            <p className="text-xl text-gray-600">Get started as an investor or list your startup</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="investor" className="text-lg py-3">
                <Users className="w-5 h-5 mr-2" />
                I'm an Investor
              </TabsTrigger>
              <TabsTrigger value="startup" className="text-lg py-3">
                <Building2 className="w-5 h-5 mr-2" />
                I'm a Startup
              </TabsTrigger>
            </TabsList>

            {/* Investor Registration */}
            <TabsContent value="investor">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Investor Registration</CardTitle>
                  <CardDescription>
                    Join thousands of investors backing India's most promising startups
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-name">Full Name *</Label>
                      <Input id="investor-name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-email">Email Address *</Label>
                      <Input id="investor-email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-phone">Phone Number *</Label>
                      <Input id="investor-phone" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-city">City *</Label>
                      <Input id="investor-city" placeholder="Mumbai, Delhi, Bangalore..." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investment-range">Investment Range *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25k-1l">₹25,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1l-5l">₹1,00,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="5l-25l">₹5,00,000 - ₹25,00,000</SelectItem>
                          <SelectItem value="25l+">₹25,00,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-type">Investor Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investor type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual Investor</SelectItem>
                          <SelectItem value="hni">High Net Worth Individual</SelectItem>
                          <SelectItem value="family-office">Family Office</SelectItem>
                          <SelectItem value="institutional">Institutional Investor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investment-interests">Investment Interests</Label>
                    <Textarea 
                      id="investment-interests" 
                      placeholder="Tell us about your investment preferences, sectors of interest, risk appetite..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Register as Investor
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Startup Registration */}
            <TabsContent value="startup">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Startup Registration</CardTitle>
                  <CardDescription>
                    List your startup and connect with investors across India
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-name">Startup Name *</Label>
                      <Input id="startup-name" placeholder="Your startup name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founder-name">Founder Name *</Label>
                      <Input id="founder-name" placeholder="Primary founder name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="founder-email">Email Address *</Label>
                      <Input id="founder-email" type="email" placeholder="founder@startup.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founder-phone">Phone Number *</Label>
                      <Input id="founder-phone" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sector">Sector *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary sector" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="healthtech">HealthTech</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="mobility">Mobility</SelectItem>
                          <SelectItem value="foodtech">FoodTech</SelectItem>
                          <SelectItem value="agritech">AgriTech</SelectItem>
                          <SelectItem value="cleantech">CleanTech</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sub-sector">Sub-Sector *</Label>
                      <Input id="sub-sector" placeholder="e.g., Digital Payments, Online Learning" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="funding-stage">Latest Funding Round *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select funding stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="series-a">Series A</SelectItem>
                          <SelectItem value="series-b">Series B</SelectItem>
                          <SelectItem value="series-c">Series C</SelectItem>
                          <SelectItem value="growth">Growth Stage</SelectItem>
                          <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="funding-amount">Funding Amount Raised</Label>
                      <Input id="funding-amount" placeholder="e.g., ₹50 Lakhs, ₹2 Crores" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startup-description">Startup Description *</Label>
                    <Textarea 
                      id="startup-description" 
                      placeholder="Describe your startup, the problem you're solving, your solution, and traction..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="funding-goal">Current Funding Goal</Label>
                    <Input id="funding-goal" placeholder="e.g., ₹1 Crore for 10% equity" />
                  </div>

                  <Button className="w-full" size="lg">
                    Submit Startup Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600">Join India's fastest-growing investment community</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₹500+ Cr</div>
              <div className="text-gray-600">Total Investments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">Active Investors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Funded Startups</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25%</div>
              <div className="text-gray-600">Average Returns</div>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              SEBI Compliant
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              RBI Approved
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              ISO 27001 Certified
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Made in India
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InvestIndia</span>
              </div>
              <p className="text-gray-400">
                India's premier crowdfunding platform connecting investors with promising startups.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Crowdfunding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Secondary Market</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Venture Debt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@investindia.com</li>
                <li>+91 80 4567 8900</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InvestIndia. All rights reserved. | Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
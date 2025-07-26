import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Textarea } from './components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { TrendingUp, Users, Building2, ArrowRight, Shield, Globe, Star } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('investor');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold">InvestIndia</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Markets</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
        </div>
        <Button className="bg-primary text-black hover:bg-primary/90 font-semibold px-6">
          Login
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Future of <br />
            <span className="text-primary">Investment</span> is Here
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the power of India's next-generation crowdfunding platform. 
            Access equity investments, secondary markets, and venture debt opportunities.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 py-4 text-lg rounded-full"
          >
            Start Investing Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Ways to Grow Your Wealth</h2>
            <p className="text-gray-400 text-lg">Choose your investment strategy and start building your portfolio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-white">Equity Crowdfunding</CardTitle>
                <CardDescription className="text-gray-400">
                  Invest in promising startups and high-growth companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Minimum investment from ₹10,000</li>
                  <li>• Equity ownership in startups</li>
                  <li>• Potential for high returns</li>
                  <li>• Diversified portfolio options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-white">Secondary Market</CardTitle>
                <CardDescription className="text-gray-400">
                  Trade your investments with other investors for liquidity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Buy and sell existing investments</li>
                  <li>• Real-time market pricing</li>
                  <li>• Enhanced liquidity options</li>
                  <li>• Transparent trading platform</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-white">Venture Debt</CardTitle>
                <CardDescription className="text-gray-400">
                  Provide debt financing to growing companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Fixed returns with lower risk</li>
                  <li>• 12-24% annual returns</li>
                  <li>• Secured lending options</li>
                  <li>• Regular interest payments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Platform</h2>
            <p className="text-gray-400 text-lg">Get started as an investor or list your startup for funding</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800 mb-8">
              <TabsTrigger value="investor" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                For Investors
              </TabsTrigger>
              <TabsTrigger value="startup" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                For Startups
              </TabsTrigger>
            </TabsList>

            <TabsContent value="investor">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Investor Registration</CardTitle>
                  <CardDescription className="text-gray-400">
                    Start your investment journey with us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-name" className="text-white">Full Name</Label>
                      <Input id="investor-name" placeholder="Enter your full name" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-email" className="text-white">Email Address</Label>
                      <Input id="investor-email" type="email" placeholder="Enter your email" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-phone" className="text-white">Phone Number</Label>
                      <Input id="investor-phone" placeholder="+91 XXXXX XXXXX" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investment-range" className="text-white">Investment Range</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select investment range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="10k-50k">₹10,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-2l">₹50,000 - ₹2,00,000</SelectItem>
                          <SelectItem value="2l-10l">₹2,00,000 - ₹10,00,000</SelectItem>
                          <SelectItem value="10l+">₹10,00,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investor-type" className="text-white">Investor Type</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select investor type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="individual">Individual Investor</SelectItem>
                        <SelectItem value="hni">High Net Worth Individual</SelectItem>
                        <SelectItem value="institutional">Institutional Investor</SelectItem>
                        <SelectItem value="family-office">Family Office</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-primary text-black hover:bg-primary/90 font-semibold">
                    Register as Investor
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="startup">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Startup Registration</CardTitle>
                  <CardDescription className="text-gray-400">
                    List your startup and raise funding from our investor community
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name" className="text-white">Company Name</Label>
                      <Input id="company-name" placeholder="Enter company name" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founder-name" className="text-white">Founder Name</Label>
                      <Input id="founder-name" placeholder="Enter founder name" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sector" className="text-white">Sector</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select sector" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="healthtech">HealthTech</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="mobility">Mobility</SelectItem>
                          <SelectItem value="foodtech">FoodTech</SelectItem>
                          <SelectItem value="agritech">AgriTech</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sub-sector" className="text-white">Sub-Sector</Label>
                      <Input id="sub-sector" placeholder="e.g., Digital Payments, Online Learning" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="funding-stage" className="text-white">Latest Funding Round</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select funding stage" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="series-a">Series A</SelectItem>
                          <SelectItem value="series-b">Series B</SelectItem>
                          <SelectItem value="series-c">Series C</SelectItem>
                          <SelectItem value="growth">Growth Stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="funding-amount" className="text-white">Funding Amount Sought</Label>
                      <Input id="funding-amount" placeholder="₹ Amount in Lakhs" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-description" className="text-white">Company Description</Label>
                    <Textarea 
                      id="company-description" 
                      placeholder="Describe your company, business model, and growth plans..."
                      className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-primary text-black hover:bg-primary/90 font-semibold">
                    Register Startup
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Thousands</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">₹500Cr+</div>
              <div className="text-gray-400">Total Investments</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-gray-400">Active Investors</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-400">Funded Startups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold">InvestIndia</span>
              </div>
              <p className="text-gray-400 text-sm">
                India's leading crowdfunding platform for equity investments, secondary markets, and venture debt.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Platform</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Equity Crowdfunding</div>
                <div>Secondary Market</div>
                <div>Venture Debt</div>
                <div>Portfolio Management</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Company</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Legal</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Risk Disclosure</div>
                <div>Compliance</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 InvestIndia. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <span>Made in India</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
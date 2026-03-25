/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Lock, User, ArrowLeft, ArrowRight, Eye, EyeOff, Search, Settings, Home, LayoutGrid, ExternalLink, Download, ShoppingCart, Users, MessageSquare, Share2, Edit2, MessageCircle, ShieldCheck, Zap, Server, Globe, Clock, CheckCircle2, Copy, Check, QrCode, BarChart2, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1, 0, 0, 1, 27.009001, 39.238998)">
      <path fill="#4285F4" d="M -3.264 5.106 C -3.264 4.304 -3.334 3.519 -3.474 2.772 L -15.009 2.772 L -15.009 7.153 L -8.406 7.153 C -8.69 8.523 -9.479 9.689 -10.667 10.459 L -10.667 13.313 L -6.692 13.313 C -4.371 11.243 -3.264 8.36 -3.264 5.106 Z"/>
      <path fill="#34A853" d="M -15.009 16.761 C -11.715 16.761 -8.909 15.659 -6.692 13.313 L -10.667 10.459 C -11.855 11.229 -13.344 11.682 -15.009 11.682 C -18.239 11.682 -20.974 9.531 -21.969 6.69 L -26.085 6.69 L -26.085 9.809 C -23.839 14.195 -19.725 16.761 -15.009 16.761 Z"/>
      <path fill="#FBBC05" d="M -21.969 6.69 C -22.211 5.968 -22.369 5.204 -22.369 4.411 C -22.369 3.618 -22.211 2.854 -21.969 2.132 L -21.969 -0.987 L -26.085 -0.987 C -26.905 0.593 -27.368 2.427 -27.368 4.411 C -27.368 6.395 -26.905 8.229 -26.085 9.809 L -21.969 6.69 Z"/>
      <path fill="#EA4335" d="M -15.009 -7.934 C -13.229 -7.934 -11.61 -7.334 -10.353 -6.184 L -6.614 -9.848 C -8.909 -11.943 -11.715 -13.013 -15.009 -13.013 C -19.725 -13.013 -23.839 -10.447 -26.085 -6.061 L -21.969 -2.942 C -20.974 -5.783 -18.239 -7.934 -15.009 -7.934 Z"/>
    </g>
  </svg>
);

const TEMPLATES = [
  { id: 1, title: 'Minimal Portfolio', category: 'Personal', tier: 'Standard', image: 'https://picsum.photos/seed/portfolio/600/400' },
  { id: 2, title: 'E-Commerce Pro', category: 'Store', tier: 'Premium', image: 'https://picsum.photos/seed/store/600/400' },
  { id: 3, title: 'SaaS Landing', category: 'Business', tier: 'Standard', image: 'https://picsum.photos/seed/saas/600/400' },
  { id: 4, title: 'Creative Agency', category: 'Agency', tier: 'Premium', image: 'https://picsum.photos/seed/agency/600/400' },
];

const MY_SITES = [
  { id: 1, title: 'John Portfolio', url: 'john.acme.site', image: 'https://picsum.photos/seed/portfolio/400/500', visitors: '1.2k', responses: 45, status: 'Published', tier: 'Standard', category: 'Portfolio' },
  { id: 2, title: 'Store Front', url: 'shop.acme.site', image: 'https://picsum.photos/seed/store/400/500', visitors: '342', responses: 12, status: 'Draft', tier: 'Premium', category: 'E-commerce' },
];

function ParallaxPreviewImage({ src, alt, className = "" }: { src: string, alt: string, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`absolute inset-0 w-full h-full overflow-hidden bg-gray-100 ${className}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[25%] -bottom-[25%] w-full h-[150%]">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
          referrerPolicy="no-referrer" 
        />
      </motion.div>
    </div>
  );
}

function AuthScreen({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-white sm:bg-gray-50 flex flex-col justify-center sm:py-12 font-sans text-gray-900">
      <div className="w-full max-w-md mx-auto sm:px-6 lg:px-8">
        <div className="bg-white sm:shadow-xl sm:rounded-3xl overflow-hidden min-h-screen sm:min-h-0 flex flex-col">
          
          <div className="px-6 pt-12 pb-8 sm:pt-10 sm:pb-6">
            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="font-bold text-2xl">A</span>
            </div>
            <h1 className="font-bold text-3xl tracking-tight mb-2">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h1>
            <p className="text-gray-500 text-base">
              {isLogin ? 'Please enter your details to sign in.' : 'Sign up to get started with Acme.'}
            </p>
          </div>

          <div className="px-6 flex-1 flex flex-col">
            <button 
              onClick={onLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 px-4 py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 outline-none font-semibold shadow-sm active:scale-[0.98]"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-400 font-medium">or continue with email</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.form 
                key={isLogin ? 'login' : 'signup'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5 flex-1"
                onSubmit={handleSubmit}
              >
                {!isLogin && (
                  <div>
                    <label className="font-semibold text-sm text-gray-700 pb-1.5 block">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 pl-11 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="font-semibold text-sm text-gray-700 pb-1.5 block">Email</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" />
                    </div>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 pl-11 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium" 
                      placeholder="you@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center pb-1.5">
                    <label className="font-semibold text-sm text-gray-700">Password</label>
                    {isLogin && (
                      <a href="#" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" />
                    </div>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium" 
                      placeholder="••••••••" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-black focus:outline-none transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white rounded-2xl px-4 py-4 font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all flex justify-center items-center gap-2 shadow-lg shadow-black/10 active:scale-[0.98]"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                
                {!isLogin && (
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By signing up, you agree to our <a href="#" className="underline hover:text-black">Terms of Service</a> and <a href="#" className="underline hover:text-black">Privacy Policy</a>.
                  </p>
                )}
              </motion.form>
            </AnimatePresence>
          </div>
          
          <div className="py-6 px-6 mt-auto border-t border-gray-100 sm:border-none sm:bg-gray-50/50">
            <p className="text-center text-gray-600 font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-black hover:underline focus:outline-none transition-all"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function HomeScreen() {
  const [activeTab, setActiveTab] = useState<'home' | 'mysites'>('home');
  const [activeTier, setActiveTier] = useState<'Standard' | 'Premium'>('Standard');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [previewTemplate, setPreviewTemplate] = useState<typeof TEMPLATES[0] | null>(null);
  const [checkoutTemplate, setCheckoutTemplate] = useState<typeof TEMPLATES[0] | null>(null);
  const [editTemplate, setEditTemplate] = useState<typeof MY_SITES[0] | null>(null);
  const [analyticsSite, setAnalyticsSite] = useState<typeof MY_SITES[0] | null>(null);

  const categories = ['All', ...Array.from(new Set(TEMPLATES.map(t => t.category)))];

  const filteredTemplates = TEMPLATES.filter(t => {
    const matchesTier = t.tier === activeTier;
    const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
    return matchesTier && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col relative pb-24">
      {/* Top Header */}
      <header className="px-6 pt-6 pb-4 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <img 
            src="https://picsum.photos/seed/avatar/100/100" 
            alt="Profile Avatar" 
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <div>
            <p className="text-xs text-gray-500 font-medium">Good morning,</p>
            <h2 className="text-sm font-bold">John Doe</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 pt-2">
        {activeTab === 'home' ? (
          <>
            {/* Modern Pricing Tabs */}
            <div 
              className="mb-8 mx-auto w-full max-w-sm flex p-1.5 rounded-[2rem] bg-[#F0F0F2] border border-transparent relative"
            >
              {(['Standard', 'Premium'] as const).map((tier) => {
                const isActive = activeTier === tier;
                return (
                  <button
                    key={tier}
                    onClick={() => setActiveTier(tier)}
                    className={`flex-1 relative flex flex-col items-center justify-center py-3.5 px-4 rounded-[1.5rem] transition-colors duration-300 z-10 ${
                      isActive ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTierBackground"
                        className="absolute inset-0 bg-white rounded-[1.5rem] shadow-sm border border-black/5"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 font-bold text-[15px] mb-0.5 whitespace-nowrap">{tier}</span>
                    <div className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                      <span className="text-xs text-gray-400 line-through font-medium">
                        {tier === 'Standard' ? '₹2999' : '₹5999'}
                      </span>
                      <span className={`text-sm font-black ${isActive ? 'text-black' : 'text-gray-600'}`}>
                        {tier === 'Standard' ? '₹999' : '₹2499'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Category Filter Tags */}
            <div className="mb-8 flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all active:scale-95 ${
                    activeCategory === category
                      ? 'bg-black text-white shadow-md shadow-black/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {filteredTemplates.map((template) => {
                const isPremium = template.tier === 'Premium';
                return (
                  <motion.div 
                    key={template.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className={`group rounded-[2rem] overflow-hidden border flex flex-col h-[480px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                      isPremium 
                        ? 'bg-gray-900 border-gray-800 shadow-xl shadow-black/20 hover:shadow-black/40' 
                        : 'bg-white border-gray-100 shadow-sm hover:shadow-black/10'
                    }`}
                  >
                    <div className="flex-1 relative bg-gray-100 overflow-hidden">
                      <ParallaxPreviewImage src={template.image} alt={template.title} />
                      <div className={`absolute top-5 left-5 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                        isPremium 
                          ? 'bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-950' 
                          : 'bg-white/90 text-gray-700'
                      }`}>
                        {template.tier}
                      </div>
                    </div>
                    <div className="p-5 shrink-0">
                      <h3 className={`font-bold text-xl mb-1 ${isPremium ? 'text-white' : 'text-gray-900'}`}>
                        {template.title}
                      </h3>
                      <p className={`text-sm mb-5 ${isPremium ? 'text-gray-400' : 'text-gray-500'}`}>
                        A beautiful, responsive template perfect for your next project.
                      </p>
                      
                      <div className="flex gap-3">
                        <button 
                          onClick={() => setPreviewTemplate(template)}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-colors active:scale-[0.98] border ${
                          isPremium
                            ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700'
                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}>
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                        <button 
                          onClick={() => setCheckoutTemplate(template)}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-md active:scale-[0.98] ${
                          isPremium
                            ? 'bg-white text-black hover:bg-gray-100 shadow-white/10'
                            : 'bg-black text-white hover:bg-gray-800 shadow-black/10'
                        }`}>
                          <ShoppingCart className="w-4 h-4" />
                          Get
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="mb-6">
              <h1 className="font-bold tracking-tight text-3xl mb-1">My Sites</h1>
              <div className="h-6 opacity-100">
                <p className="text-gray-500 text-base">Manage your purchased templates.</p>
              </div>
            </div>
            
            <motion.div 
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {MY_SITES.map(site => (
                <motion.div 
                  key={site.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-[2rem] p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-row gap-4 sm:gap-6 items-stretch group"
                >
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${site.status === 'Published' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                        <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">{site.status}</span>
                      </div>
                      <h3 className="font-bold text-xl sm:text-2xl leading-tight mb-1">{site.title}</h3>
                      <a href="#" className="text-xs sm:text-sm font-medium text-blue-600 hover:underline truncate block max-w-[140px] sm:max-w-full">{site.url}</a>
                    </div>

                    <div className="flex gap-4 sm:gap-6 my-4 sm:my-6">
                      <div className="flex flex-col">
                        <span className="text-2xl sm:text-3xl font-black tracking-tight">{site.visitors}</span>
                        <span className="text-[10px] sm:text-xs font-semibold text-gray-400 flex items-center gap-1 sm:gap-1.5 mt-1 uppercase tracking-wider">
                          <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5"/> Visitors
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl sm:text-3xl font-black tracking-tight">{site.responses}</span>
                        <span className="text-[10px] sm:text-xs font-semibold text-gray-400 flex items-center gap-1 sm:gap-1.5 mt-1 uppercase tracking-wider">
                          <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5"/> Responses
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 mt-auto">
                      <button 
                        onClick={() => setEditTemplate(site)}
                        className="flex-1 min-w-[100px] bg-black text-white rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-md shadow-black/10 active:scale-[0.98]"
                      >
                        <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Edit Site</span><span className="sm:hidden">Edit</span>
                      </button>
                      <button 
                        onClick={() => setAnalyticsSite(site)}
                        className="flex-1 min-w-[100px] bg-white border border-gray-200 text-black rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-[0.98]"
                      >
                        <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Analytics</span><span className="sm:hidden">Stats</span>
                      </button>
                      <button 
                        onClick={async () => {
                          try {
                            if (navigator.share) {
                              await navigator.share({
                                title: site.title,
                                text: `Check out my new website: ${site.title}`,
                                url: `https://${site.url}`,
                              });
                            } else {
                              navigator.clipboard.writeText(`https://${site.url}`);
                              alert('URL copied to clipboard!');
                            }
                          } catch (error) {
                            console.error('Error sharing:', error);
                          }
                        }}
                        className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition-colors active:scale-[0.98]"
                      >
                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="w-32 sm:w-48 shrink-0 rounded-2xl overflow-hidden border border-gray-100 relative bg-gray-50 aspect-[3/4]">
                    <ParallaxPreviewImage src={site.image} alt={site.title} />
                    <div className={`absolute top-2 right-2 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold shadow-sm ${
                      site.tier === 'Premium' 
                        ? 'bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-950' 
                        : 'bg-white/90 text-gray-700'
                    }`}>
                      {site.tier}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </main>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-0 right-0 px-6 pointer-events-none flex justify-center z-50">
        <div className="bg-black/60 backdrop-blur-2xl text-white rounded-full px-2 py-2 flex items-center gap-2 shadow-2xl pointer-events-auto border border-white/20">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${
              activeTab === 'home' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            <Home className="w-5 h-5" />
            {activeTab === 'home' && <span className="text-sm font-semibold">Home</span>}
          </button>
          <button 
            onClick={() => setActiveTab('mysites')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${
              activeTab === 'mysites' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
            {activeTab === 'mysites' && <span className="text-sm font-semibold">My Sites</span>}
          </button>
        </div>
      </div>

      {/* Template Preview Overlay */}
      <AnimatePresence>
        {previewTemplate && (
          <TemplatePreview 
            template={previewTemplate} 
            onBack={() => setPreviewTemplate(null)} 
            onGet={() => setCheckoutTemplate(previewTemplate)}
          />
        )}
      </AnimatePresence>

      {/* Checkout Overlay */}
      <AnimatePresence>
        {checkoutTemplate && (
          <CheckoutPage 
            template={checkoutTemplate} 
            onBack={() => setCheckoutTemplate(null)} 
          />
        )}
      </AnimatePresence>

      {/* Editor Overlay */}
      <AnimatePresence>
        {editTemplate && (
          <CMSEditor 
            site={editTemplate} 
            onBack={() => setEditTemplate(null)} 
          />
        )}
      </AnimatePresence>

      {/* Analytics Overlay */}
      <AnimatePresence>
        {analyticsSite && (
          <AnalyticsPage 
            site={analyticsSite} 
            onBack={() => setAnalyticsSite(null)} 
            onEdit={() => {
              setAnalyticsSite(null);
              setEditTemplate(analyticsSite);
            }}
            onShare={async () => {
              try {
                if (navigator.share) {
                  await navigator.share({
                    title: analyticsSite.title,
                    text: `Check out my new website: ${analyticsSite.title}`,
                    url: `https://${analyticsSite.url}`,
                  });
                } else {
                  navigator.clipboard.writeText(`https://${analyticsSite.url}`);
                  alert('URL copied to clipboard!');
                }
              } catch (error) {
                console.error('Error sharing:', error);
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function TemplatePreview({ template, onBack, onGet }: { template: typeof TEMPLATES[0], onBack: () => void, onGet: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden"
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={onGet}
          className="h-10 px-4 rounded-full bg-black text-white flex items-center justify-center gap-2 font-semibold text-sm hover:bg-gray-800 transition-colors shadow-md"
        >
          <ShoppingCart className="w-4 h-4" />
          Get Template
        </button>
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 overflow-hidden">
        <div className="flex flex-col gap-12 opacity-[0.03] -rotate-45 select-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="text-8xl md:text-[12rem] font-black whitespace-nowrap">
              PREVIEW PREVIEW PREVIEW PREVIEW
            </span>
          ))}
        </div>
      </div>

      {/* Template Content */}
      <div className="flex-1 overflow-y-auto pt-20 pb-12 px-4 sm:px-8 relative z-0">
        <div className="max-w-5xl mx-auto">
          {/* Simple Dummy Content based on Template Category */}
          {template.category === 'Portfolio' && (
            <div className="space-y-12">
              <div className="text-center space-y-6 py-20">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{template.title}</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">A creative portfolio showcasing my best work and projects.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                  <img src={template.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                  <img src="https://picsum.photos/seed/port1/800/800" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                  <img src="https://picsum.photos/seed/port2/800/800" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                  <img src="https://picsum.photos/seed/port3/800/800" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          )}

          {template.category === 'E-commerce' && (
            <div className="space-y-12">
              <div className="h-[60vh] bg-gray-100 rounded-3xl overflow-hidden relative flex items-center justify-center">
                <img src={template.image} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" referrerPolicy="no-referrer" />
                <div className="relative z-10 text-center space-y-4">
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black">{template.title}</h1>
                  <button className="px-8 py-4 bg-black text-white rounded-full font-bold">Shop Now</button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden">
                      <img src={`https://picsum.photos/seed/prod${i}/400/600`} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h3 className="font-bold">Product {i + 1}</h3>
                      <p className="text-gray-500">$99.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {template.category !== 'Portfolio' && template.category !== 'E-commerce' && (
            <div className="space-y-12">
              <div className="py-20 max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{template.title}</h1>
                <p className="text-xl text-gray-500">Welcome to this beautiful {template.category.toLowerCase()} template.</p>
                <div className="flex justify-center gap-4">
                  <button className="px-8 py-4 bg-black text-white rounded-full font-bold">Get Started</button>
                  <button className="px-8 py-4 bg-gray-100 text-black rounded-full font-bold">Learn More</button>
                </div>
              </div>
              <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden">
                <img src={template.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="p-8 bg-gray-50 rounded-3xl space-y-4">
                    <div className="w-12 h-12 bg-black rounded-full"></div>
                    <h3 className="text-xl font-bold">Feature {i + 1}</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function AnalyticsPage({ site, onBack, onEdit, onShare }: { site: typeof MY_SITES[0], onBack: () => void, onEdit: () => void, onShare: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 bg-gray-50 flex flex-col overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex-none flex justify-between items-center p-4 bg-white border-b border-gray-100 shadow-sm z-20">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="font-bold text-sm sm:text-base">Analytics: {site.title}</h2>
            <p className="text-xs text-gray-500">{site.url}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={onShare}
            className="px-4 py-2 rounded-full font-semibold text-sm transition-colors flex items-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button 
            onClick={onEdit}
            className="px-6 py-2 rounded-full bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors shadow-md flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            <span className="hidden sm:inline">Edit Site</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <Users className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">Total Visitors</span>
              </div>
              <div className="text-4xl font-black mb-2">{site.visitors}</div>
              <div className="text-sm text-green-500 flex items-center gap-1 font-medium">
                <TrendingUp className="w-4 h-4" /> +12% this week
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <MessageSquare className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">Total Responses</span>
              </div>
              <div className="text-4xl font-black mb-2">{site.responses}</div>
              <div className="text-sm text-green-500 flex items-center gap-1 font-medium">
                <TrendingUp className="w-4 h-4" /> +5% this week
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">Template Expiry</span>
              </div>
              <div className="text-4xl font-black mb-2">30 Days</div>
              <div className="text-sm text-gray-400 flex items-center gap-1 font-medium">
                <Calendar className="w-4 h-4" /> Renews Oct 24, 2026
              </div>
            </div>
          </div>

          {/* Visitors by Country */}
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                Visitors by Country
              </h3>
            </div>
            
            <div className="space-y-6">
              {[
                { country: 'United States', percentage: 45, count: '540' },
                { country: 'United Kingdom', percentage: 25, count: '300' },
                { country: 'India', percentage: 15, count: '180' },
                { country: 'Canada', percentage: 10, count: '120' },
                { country: 'Others', percentage: 5, count: '60' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-24 sm:w-32 font-semibold text-xs sm:text-sm text-gray-700 truncate">{stat.country}</div>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.percentage}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-black rounded-full"
                    />
                  </div>
                  <div className="w-12 sm:w-16 text-right font-bold text-xs sm:text-sm">{stat.count}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

function CheckoutPage({ template, onBack }: { template: typeof TEMPLATES[0], onBack: () => void }) {
  const [addDomain, setAddDomain] = useState(false);
  const [addHosting, setAddHosting] = useState(false);

  const isPremium = template.tier === 'Premium';
  const basePrice = isPremium ? 2499 : 999;
  const domainPrice = 899;
  const hostingPrice = 1499;

  const upsellsTotal = (addDomain ? domainPrice : 0) + (addHosting ? hostingPrice : 0);
  const subtotal = basePrice + upsellsTotal;
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 bg-gray-50 flex flex-col overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex-none flex justify-between items-center p-4 bg-white border-b border-gray-100">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-lg">Checkout</h2>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24 lg:pb-0">
          
          {/* Left Column: Summary & Upsells */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Preview Summary */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-full sm:w-48 aspect-video bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                <img src={template.image} alt={template.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-bold mb-3">
                  {template.tier} Template
                </div>
                <h3 className="text-2xl font-black mb-2">{template.title}</h3>
                <p className="text-gray-500 text-sm">{template.category} • Responsive Design • Full Source Code</p>
              </div>
            </div>

            {/* Optional Upsells */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg px-2">Optional Add-ons</h4>
              
              {!isPremium && (
                <label className={`flex items-start gap-4 p-5 rounded-3xl border-2 cursor-pointer transition-all ${addDomain ? 'border-black bg-black/5' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${addDomain ? 'border-black bg-black' : 'border-gray-300'}`}>
                    {addDomain && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="font-bold flex items-center gap-2"><Globe className="w-4 h-4" /> Custom Domain</h5>
                      <span className="font-bold">+₹{domainPrice}/yr</span>
                    </div>
                    <p className="text-sm text-gray-500">Connect your own custom domain name (e.g., yourname.com).</p>
                  </div>
                </label>
              )}

              <label className={`flex items-start gap-4 p-5 rounded-3xl border-2 cursor-pointer transition-all ${addHosting ? 'border-black bg-black/5' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${addHosting ? 'border-black bg-black' : 'border-gray-300'}`}>
                  {addHosting && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-bold flex items-center gap-2"><Server className="w-4 h-4" /> Extra Hosting Duration</h5>
                    <span className="font-bold">+₹{hostingPrice}/yr</span>
                  </div>
                  <p className="text-sm text-gray-500">Extend your included hosting by an additional 12 months.</p>
                </div>
              </label>
            </div>
            
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm sticky top-6">
              <h3 className="font-bold text-xl mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">{template.title} ({template.tier})</span>
                  <span className="font-medium">₹{basePrice}</span>
                </div>
                {addDomain && !isPremium && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Custom Domain</span>
                    <span className="font-medium">₹{domainPrice}</span>
                  </div>
                )}
                {addHosting && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Extra Hosting</span>
                    <span className="font-medium">₹{hostingPrice}</span>
                  </div>
                )}
                <div className="h-px bg-gray-100 my-4" />
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">GST (18%)</span>
                  <span className="font-medium">₹{gst.toFixed(2)}</span>
                </div>
              </div>

              <div className="h-px bg-gray-100 mb-6" />
              
              <div className="flex justify-between items-end mb-8">
                <span className="font-bold text-gray-900">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-black block leading-none">₹{total.toFixed(2)}</span>
                  <span className="text-xs text-gray-500">Includes taxes</span>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-medium">6 Months Hosting Included</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Instant Setup</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Secure Payment</span>
                </div>
              </div>

              {/* Desktop CTA */}
              <button className="hidden lg:flex w-full py-4 rounded-2xl bg-black text-white items-center justify-center gap-2 font-bold hover:bg-gray-800 transition-colors shadow-xl shadow-black/10 active:scale-[0.98]">
                <Lock className="w-4 h-4" />
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <div className="flex-1">
            <span className="text-xs text-gray-500 font-medium block">Total (Inc. GST)</span>
            <span className="text-xl font-black">₹{total.toFixed(2)}</span>
          </div>
          <button className="flex-[2] py-4 rounded-2xl bg-black text-white flex items-center justify-center gap-2 font-bold hover:bg-gray-800 transition-colors shadow-xl shadow-black/10 active:scale-[0.98]">
            <Lock className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CMSEditor({ site, onBack }: { site: typeof MY_SITES[0], onBack: () => void }) {
  const [isPreview, setIsPreview] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenEditorTour');
    if (!hasSeenTour) {
      setTourStep(1);
    }
  }, []);

  const nextTourStep = () => {
    if (tourStep === 3) {
      setTourStep(0);
      localStorage.setItem('hasSeenEditorTour', 'true');
    } else {
      setTourStep(prev => prev + 1);
    }
  };

  const skipTour = () => {
    setTourStep(0);
    localStorage.setItem('hasSeenEditorTour', 'true');
  };

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden"
    >
      {/* Top Bar */}
      <div className={`flex-none flex justify-between items-center p-4 bg-white border-b border-gray-100 shadow-sm relative ${tourStep > 0 ? 'z-40' : 'z-20'}`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="font-bold text-sm sm:text-base">{site.title}</h2>
            <p className="text-xs text-gray-500">{site.url}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <div className={`relative ${tourStep === 2 ? 'z-[60] ring-4 ring-blue-500/30 rounded-full bg-white' : ''}`}>
            <button 
              onClick={() => setIsPreview(!isPreview)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors flex items-center gap-2 ${
                isPreview ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span className="hidden sm:inline">{isPreview ? 'Exit Preview' : 'Preview'}</span>
            </button>
          </div>
          <div className={`relative ${tourStep === 3 ? 'z-[60] ring-4 ring-blue-500/30 rounded-full bg-white' : ''}`}>
            <button 
              onClick={handlePublish}
              disabled={isPublishing}
              className="px-6 py-2 rounded-full bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors shadow-md flex items-center gap-2 disabled:opacity-70"
            >
              {isPublishing ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Globe className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{isPublishing ? 'Publishing...' : 'Publish'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Editor Canvas */}
      <div className={`flex-1 overflow-y-auto relative transition-colors duration-500 ${isPreview ? 'bg-white' : 'bg-gray-50'}`}>
        {!isPreview && (
          <div className={`absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-2 shadow-lg transition-all duration-300 ${tourStep === 1 ? 'z-[60] ring-4 ring-blue-500/30 scale-110' : 'z-10'}`}>
            <Edit2 className="w-3 h-3" />
            Click any text to edit
          </div>
        )}
        
        <div className={`max-w-5xl mx-auto transition-all duration-500 ${isPreview ? 'py-0' : 'py-12 px-4 sm:px-8'}`}>
          <div className={`bg-white transition-all duration-500 ${isPreview ? '' : 'shadow-2xl shadow-black/5 rounded-[2rem] overflow-hidden border border-gray-100'}`}>
            
            {/* Template Content (Editable) */}
            {site.category === 'Portfolio' && (
              <div className="space-y-12 pb-24">
                <div className="text-center space-y-6 py-24 px-4">
                  <EditableText 
                    as="h1" 
                    initialText={site.title}
                    className="text-5xl md:text-7xl font-black tracking-tighter outline-none"
                    isPreview={isPreview}
                  />
                  <EditableText 
                    as="p" 
                    initialText="A creative portfolio showcasing my best work and projects."
                    className="text-xl text-gray-500 max-w-2xl mx-auto outline-none"
                    isPreview={isPreview}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
                  <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative group">
                    <img src={site.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/port1/800/800" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/port2/800/800" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/port3/800/800" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            )}

            {site.category === 'E-commerce' && (
              <div className="space-y-12 pb-24">
                <div className="h-[60vh] bg-gray-100 relative flex items-center justify-center">
                  <img src={site.image} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" referrerPolicy="no-referrer" />
                  <div className="relative z-10 text-center space-y-4 px-4">
                    <EditableText 
                      as="h1" 
                      initialText={site.title}
                      className="text-5xl md:text-7xl font-black tracking-tighter text-black outline-none"
                      isPreview={isPreview}
                    />
                    <EditableText 
                      as="button" 
                      initialText="Shop Now"
                      className="px-8 py-4 bg-black text-white rounded-full font-bold outline-none"
                      isPreview={isPreview}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-3">
                      <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden">
                        <img src={`https://picsum.photos/seed/prod${i}/400/600`} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <EditableText 
                          as="h3" 
                          initialText={`Product ${i + 1}`}
                          className="font-bold outline-none"
                          isPreview={isPreview}
                        />
                        <EditableText 
                          as="p" 
                          initialText="$99.00"
                          className="text-gray-500 outline-none"
                          isPreview={isPreview}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {site.category !== 'Portfolio' && site.category !== 'E-commerce' && (
              <div className="space-y-12 pb-24">
                <div className="py-24 max-w-3xl mx-auto text-center space-y-6 px-4">
                  <EditableText 
                    as="h1" 
                    initialText={site.title}
                    className="text-5xl md:text-7xl font-black tracking-tighter outline-none"
                    isPreview={isPreview}
                  />
                  <EditableText 
                    as="p" 
                    initialText={`Welcome to this beautiful ${site.category?.toLowerCase() || 'custom'} site.`}
                    className="text-xl text-gray-500 outline-none"
                    isPreview={isPreview}
                  />
                  <div className="flex justify-center gap-4">
                    <EditableText 
                      as="button" 
                      initialText="Get Started"
                      className="px-8 py-4 bg-black text-white rounded-full font-bold outline-none"
                      isPreview={isPreview}
                    />
                    <EditableText 
                      as="button" 
                      initialText="Learn More"
                      className="px-8 py-4 bg-gray-100 text-black rounded-full font-bold outline-none"
                      isPreview={isPreview}
                    />
                  </div>
                </div>
                <div className="px-8">
                  <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden">
                    <img src={site.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="p-8 bg-gray-50 rounded-3xl space-y-4">
                      <div className="w-12 h-12 bg-black rounded-full"></div>
                      <EditableText 
                        as="h3" 
                        initialText={`Feature ${i + 1}`}
                        className="text-xl font-bold outline-none"
                        isPreview={isPreview}
                      />
                      <EditableText 
                        as="p" 
                        initialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        className="text-gray-500 outline-none"
                        isPreview={isPreview}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Tour Overlay */}
      <AnimatePresence>
        {tourStep > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm flex items-center justify-center pointer-events-auto"
          >
            <motion.div
              key={tourStep}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`absolute bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-xl p-3 shadow-lg shadow-black/5 w-56 mx-4 ${
                tourStep === 1 ? 'top-20 left-1/2 -translate-x-1/2' :
                tourStep === 2 ? 'top-20 right-4 md:right-32' :
                tourStep === 3 ? 'top-20 right-4' : ''
              }`}
            >
              <h3 className="text-xs font-bold text-gray-900 mb-0.5">
                {tourStep === 1 && "Inline Editing"}
                {tourStep === 2 && "Preview Mode"}
                {tourStep === 3 && "Publish Changes"}
              </h3>
              <p className="text-[10px] text-gray-500 mb-3 leading-snug">
                {tourStep === 1 && "Click directly on any text to edit it. No complex forms needed!"}
                {tourStep === 2 && "Toggle preview to see exactly how your site will look to visitors."}
                {tourStep === 3 && "When you're happy with your changes, publish them to the world."}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {[1, 2, 3].map(step => (
                    <div key={step} className={`w-1 h-1 rounded-full transition-colors ${step === tourStep ? 'bg-black' : 'bg-gray-200'}`} />
                  ))}
                </div>
                <div className="flex gap-2 items-center">
                  <button onClick={skipTour} className="text-[10px] font-medium text-gray-400 hover:text-gray-700 transition-colors">Skip</button>
                  <button onClick={nextTourStep} className="px-2 py-1 bg-black text-white text-[10px] font-semibold rounded-md hover:bg-gray-800 transition-colors shadow-sm active:scale-[0.98]">
                    {tourStep === 3 ? "Done" : "Next"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Success Animation */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>
              
              <h2 className="text-2xl font-black mb-2">Published!</h2>
              <p className="text-gray-500 text-sm mb-8">Your site is now live and ready to be shared with the world.</p>

              {/* URL Box */}
              <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3 mb-6">
                <div className="flex-1 truncate text-sm font-medium text-gray-700 text-left">
                  https://{site.url}
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(`https://${site.url}`);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600 relative group"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {copied ? 'Copied!' : 'Copy URL'}
                  </span>
                </button>
                <button 
                  onClick={async () => {
                    try {
                      if (navigator.share) {
                        await navigator.share({
                          title: site.title,
                          text: `Check out my new website: ${site.title}`,
                          url: `https://${site.url}`,
                        });
                      } else {
                        // Fallback if Web Share API is not supported
                        navigator.clipboard.writeText(`https://${site.url}`);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }
                    } catch (error) {
                      console.error('Error sharing:', error);
                    }
                  }}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600 relative group"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Share
                  </span>
                </button>
              </div>

              {/* QR Code */}
              <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm mb-8 group relative overflow-hidden flex flex-col items-center justify-center">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${site.url}`} 
                  alt="QR Code" 
                  className="w-32 h-32"
                />
                <a 
                  href={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${site.url}`}
                  download="qrcode.png"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Download className="w-6 h-6" />
                  <span className="text-xs font-bold">Download QR</span>
                </a>
              </div>

              <button 
                onClick={onBack}
                className="w-full py-3.5 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors active:scale-[0.98]"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function EditableText({ 
  as: Component = 'span', 
  initialText, 
  className = '',
  isPreview
}: { 
  as?: any, 
  initialText: string, 
  className?: string,
  isPreview?: boolean
}) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  if (isPreview) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component 
      className={`${className} ${isEditing ? 'ring-2 ring-blue-500 ring-offset-4 rounded-sm' : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-4 rounded-sm cursor-text transition-all'}`}
      contentEditable={!isPreview}
      suppressContentEditableWarning
      onFocus={() => setIsEditing(true)}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        setIsEditing(false);
        setText(e.currentTarget.textContent || '');
      }}
      onClick={(e: React.MouseEvent) => {
        if (!isEditing) {
          e.preventDefault();
        }
      }}
    >
      {text}
    </Component>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {isLoggedIn ? (
        <motion.div
          key="home"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <HomeScreen />
        </motion.div>
      ) : (
        <motion.div
          key="auth"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <AuthScreen onLogin={() => setIsLoggedIn(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

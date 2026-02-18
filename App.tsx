
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  User, 
  Users, 
  Gem, 
  TrendingUp, 
  MessageSquare, 
  Phone, 
  Facebook, 
  MessageCircle,
  ChevronRight,
  Compass,
  Star,
  Zap,
  CheckCircle2,
  Heart,
  Crown,
  History,
  ShieldCheck,
  Instagram,
  ArrowUpRight,
  Layers,
  Award,
  // Added missing icons used in footer
  Map,
  Anchor
} from 'lucide-react';
import { AnalysisType, PersonalityProfile } from './types';
import { 
  MIGI_PROFILE, 
  JAMES_PROFILE, 
  SYNERGY_DATA, 
  BRAND_NAME, 
  AUTHOR, 
  COUPLE_IMAGE,
  MIGI_HERO,
  JAMES_HERO
} from './constants';
import { getGeminiConsultant } from './services/gemini';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AnalysisType>(AnalysisType.SYNERGY);
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const activeProfile = activeTab === AnalysisType.MIGI ? MIGI_PROFILE : JAMES_PROFILE;

  const handleConsult = async () => {
    if (!chatInput.trim()) return;
    setIsTyping(true);
    setChatResponse('');
    const context = JSON.stringify({ migi: MIGI_PROFILE, james: JAMES_PROFILE, synergy: SYNERGY_DATA });
    const response = await getGeminiConsultant(chatInput, context);
    setChatResponse(response);
    setIsTyping(false);
  };

  const getHeaderImage = () => {
    if (activeTab === AnalysisType.SYNERGY) return COUPLE_IMAGE;
    if (activeTab === AnalysisType.MIGI) return MIGI_HERO;
    if (activeTab === AnalysisType.JAMES) return JAMES_HERO;
    return COUPLE_IMAGE;
  };

  const NavButton = ({ type, label, icon: Icon }: { type: AnalysisType, label: string, icon: any }) => (
    <button 
      onClick={() => setActiveTab(type)}
      className={`group relative flex flex-col items-center p-4 transition-all duration-500 ${
        activeTab === type ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'
      }`}
    >
      <Icon className={`w-6 h-6 mb-1 ${activeTab === type ? 'scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]' : ''}`} />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
      {activeTab === type && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-px bg-amber-400"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] selection:bg-amber-400 selection:text-black">
      {/* Fixed Background Text Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] overflow-hidden select-none">
        <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
          {BRAND_NAME}
        </h1>
        <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap ml-[15vw]">
          EMPIRE 2569
        </h1>
      </div>

      {/* Hero Section - Improved to prevent clipping */}
      <header className="relative h-[85vh] flex flex-col justify-end p-8 md:p-20 overflow-hidden border-b border-amber-500/10">
        <div className="absolute inset-0 z-0">
          <img 
            src={getHeaderImage()} 
            className="w-full h-full object-cover opacity-50 grayscale-[0.2] contrast-125 transition-all duration-[5s] ease-out scale-100"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-8 max-w-6xl">
          <div className="flex items-center space-x-6">
            <div className="h-px w-16 bg-amber-400"></div>
            <span className="text-amber-400 text-xs font-black uppercase tracking-[0.5em] animate-pulse">Imperial Astral Analysis</span>
          </div>
          
          <div className="space-y-2">
             <h1 className="text-7xl md:text-[11rem] font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-200 to-amber-500 drop-shadow-2xl py-2">
              {activeTab === AnalysisType.SYNERGY ? BRAND_NAME : activeProfile.name}
            </h1>
            <p className="text-2xl md:text-4xl font-light text-amber-100/40 tracking-[0.3em] uppercase italic border-l-4 border-amber-500/30 pl-8">
              {activeTab === AnalysisType.SYNERGY ? 'The Empire Partnership' : `Personal Destiny ${activeProfile.year}`}
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-2xl border-b border-white/5 py-2">
        <div className="max-w-5xl mx-auto flex justify-around px-8">
          <NavButton type={AnalysisType.MIGI} label="Migi Analysis" icon={User} />
          <NavButton type={AnalysisType.JAMES} label="James Analysis" icon={User} />
          <NavButton type={AnalysisType.SYNERGY} label="The Synergy" icon={Users} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-24 relative z-10">
        
        {activeTab === AnalysisType.SYNERGY ? (
          /* SYNERGY VIEW - Spectular Layout */
          <div className="space-y-48">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-6 space-y-12">
                <div className="inline-flex items-center space-x-4 px-6 py-2 bg-amber-400/10 border border-amber-400/20 rounded-full">
                  <Crown className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-black uppercase tracking-widest text-amber-200">{SYNERGY_DATA.connectionType}</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter text-amber-50">
                  The Power <br /> <span className="text-amber-400">of Two</span>
                </h2>
                <p className="text-2xl text-slate-400 thai-font leading-relaxed font-light italic border-l-2 border-amber-500/20 pl-8">
                  "{SYNERGY_DATA.description}"
                </p>
              </div>

              {/* Spectacular 3-Image Collage */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-6 relative">
                <div className="absolute inset-0 bg-amber-400/5 blur-[120px] rounded-full"></div>
                
                <div className="col-span-2 relative h-[400px] rounded-[3rem] overflow-hidden group border border-white/10 shadow-2xl">
                  <img src={COUPLE_IMAGE} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="MigiJames Couple" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-400">The Power Couple</span>
                  </div>
                </div>

                <div className="relative h-[250px] rounded-[2rem] overflow-hidden border border-white/10 group">
                  <img src={MIGI_HERO} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Migi Single" />
                  <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay"></div>
                  <div className="absolute bottom-4 left-6 text-sm font-bold uppercase tracking-widest">Migi</div>
                </div>

                <div className="relative h-[250px] rounded-[2rem] overflow-hidden border border-white/10 group">
                  <img src={JAMES_HERO} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="James Single" />
                  <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay"></div>
                  <div className="absolute bottom-4 left-6 text-sm font-bold uppercase tracking-widest">James</div>
                </div>
              </div>
            </section>

            {/* SYNERGY DETAILS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
               <div className="space-y-12 bg-white/5 border border-white/5 p-16 rounded-[4rem] backdrop-blur-md">
                <h3 className="text-4xl font-bold flex items-center">
                  <Layers className="w-10 h-10 mr-4 text-amber-500" />
                  The Blueprint
                </h3>
                {SYNERGY_DATA.steps.map((step, idx) => (
                  <div key={idx} className="space-y-8">
                    <h4 className="text-lg font-black text-amber-200 uppercase tracking-widest border-b border-white/10 pb-4">{step.title}</h4>
                    <ul className="space-y-6 text-slate-300 thai-font text-lg leading-relaxed">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Zap className="w-5 h-5 mr-4 text-amber-500 shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                <h3 className="text-4xl font-bold flex items-center">
                  <ShieldCheck className="w-10 h-10 mr-4 text-amber-500" />
                  Dual Essence
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="p-10 bg-[#121214] border border-white/5 rounded-3xl relative group">
                    <h4 className="text-amber-400 font-black mb-4 uppercase tracking-[0.2em] text-[10px]">Migi's Domain</h4>
                    <p className="text-xl text-slate-200 thai-font">{SYNERGY_DATA.dualPower.migi}</p>
                  </div>
                  <div className="p-10 bg-[#121214] border border-white/5 rounded-3xl relative group">
                    <h4 className="text-amber-400 font-black mb-4 uppercase tracking-[0.2em] text-[10px]">James's Domain</h4>
                    <p className="text-xl text-slate-200 thai-font">{SYNERGY_DATA.dualPower.james}</p>
                  </div>
                  <div className="p-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-[3rem] text-[#0a0a0c] shadow-2xl shadow-amber-500/20">
                    <h4 className="font-black mb-4 uppercase tracking-[0.3em] text-[10px] opacity-70">Synthesized Result</h4>
                    <p className="text-3xl font-bold thai-font leading-tight">{SYNERGY_DATA.dualPower.result}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* DIAMOND ALCHEMY PROCESS - Full Page Impact */}
            <section className="relative py-48 border-y border-white/5 overflow-hidden">
               <Gem className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] text-amber-400 opacity-[0.03] pointer-events-none" />
               <div className="relative space-y-24">
                  <div className="text-center space-y-6">
                    <span className="text-amber-400 font-black uppercase tracking-[0.5em] text-xs">The Sacred Methodology</span>
                    <h2 className="text-7xl md:text-9xl font-bold tracking-tighter italic text-amber-50">
                      {SYNERGY_DATA.diamondAlchemy.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {SYNERGY_DATA.diamondAlchemy.steps.map((step, idx) => (
                      <div key={idx} className="bg-white/5 p-12 rounded-[4rem] border border-white/5 relative group hover:bg-white/10 transition-all duration-500">
                        <div className="text-[12rem] font-black text-amber-400/5 absolute -top-16 -left-4 leading-none select-none">0{idx + 1}</div>
                        <div className="relative space-y-8">
                           <div className="space-y-4">
                              <h3 className="text-3xl font-bold text-amber-200">{step.title}</h3>
                              <p className="text-slate-500 thai-font italic leading-relaxed">{step.description}</p>
                           </div>
                           <ul className="space-y-4 pt-8 border-t border-white/10">
                              {step.subItems.map((sub, i) => (
                                <li key={i} className="flex items-start text-slate-300 thai-font text-lg">
                                  <ArrowUpRight className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-1" />
                                  {sub}
                                </li>
                              ))}
                           </ul>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </section>
          </div>
        ) : (
          /* INDIVIDUAL PROFILE VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-32">
              <section className="space-y-12">
                <div className="flex items-center space-x-8">
                  <div className="w-32 h-px bg-amber-500/20"></div>
                  <h2 className="text-6xl font-bold tracking-tighter flex items-center">
                    <History className="w-12 h-12 mr-6 text-amber-400" />
                    The Decoding
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {activeProfile.decoding.map((sec, idx) => (
                    <div key={idx} className="p-12 bg-white/5 border border-white/5 rounded-[3rem] space-y-8 group hover:border-amber-400/20 transition-all">
                      <h3 className="text-xl font-black text-amber-200 uppercase tracking-widest pb-6 border-b border-white/5">{sec.title}</h3>
                      <ul className="space-y-6 text-slate-400 thai-font text-lg leading-relaxed">
                        {sec.items.map((item, i) => <li key={i} className="flex items-start"><span className="text-amber-500 mr-3 text-2xl">•</span>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="relative p-20 bg-gradient-to-br from-zinc-900 to-[#0a0a0c] border border-amber-500/10 rounded-[5rem] overflow-hidden">
                <Zap className="absolute top-0 right-0 w-[30rem] h-[30rem] text-amber-400/5 -mr-20 -mt-20" />
                <div className="relative space-y-16">
                  <div className="space-y-4">
                    <span className="text-amber-400 text-xs font-black uppercase tracking-[0.4em]">Strategic Path</span>
                    <h2 className="text-5xl font-bold">Business Strategy</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {activeProfile.strategy.map((sec, idx) => (
                      <div key={idx} className="space-y-6">
                        <h4 className="text-amber-100 font-bold flex items-center text-xl"><Compass className="w-6 h-6 mr-3 text-amber-500" /> {sec.title}</h4>
                        <ul className="space-y-4 text-slate-400 thai-font text-lg">
                          {sec.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="pt-20 border-t border-white/5 text-center">
                    <p className="text-4xl font-light italic text-amber-100/90 leading-tight thai-font max-w-4xl mx-auto">
                      "{activeProfile.wisdom}"
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-12">
               <div className="sticky top-32 space-y-12">
                  <div className="p-12 bg-white/5 border border-white/5 rounded-[4rem] relative overflow-hidden group">
                    <Star className="absolute -top-12 -right-12 w-48 h-48 text-amber-400 opacity-[0.03] group-hover:rotate-45 transition-transform duration-1000" />
                    <div className="space-y-10 relative">
                       <h3 className="text-3xl font-black text-amber-400 uppercase tracking-widest pb-6 border-b border-white/10">Astral Chart</h3>
                       <div className="space-y-8">
                          <div>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] block mb-2">Ruling Planet</span>
                            <p className="text-3xl font-bold text-amber-100">{activeProfile.astral.planet}</p>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] block mb-2">Solar Sign</span>
                            <p className="text-3xl font-bold text-amber-100">{activeProfile.astral.sign}</p>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] block mb-2">Celestial House</span>
                            <p className="text-3xl font-bold text-amber-100">{activeProfile.astral.house}</p>
                          </div>
                       </div>
                       <p className="text-lg text-amber-100/50 thai-font italic leading-relaxed pt-8 border-t border-white/5">
                         "{activeProfile.astral.visualization}"
                       </p>
                    </div>
                  </div>

                  <div className="p-12 bg-[#121214] rounded-[4rem] border border-white/5">
                     <h3 className="text-2xl font-bold text-amber-200 mb-10 flex items-center">
                        <Gem className="w-8 h-8 mr-4 text-amber-400" />
                        Gems & Rituals
                     </h3>
                     <div className="space-y-12">
                        {activeProfile.jewelryAdvice?.map((sec, idx) => (
                          <div key={idx} className="space-y-6">
                            <span className="text-xs font-black uppercase tracking-widest text-amber-400/40">{sec.title}</span>
                            <ul className="space-y-5">
                              {sec.items.map((item, i) => (
                                <li key={i} className="flex items-start text-base text-slate-300 thai-font leading-relaxed">
                                  <ArrowUpRight className="w-4 h-4 mr-3 text-amber-500 shrink-0 mt-1" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* AI SECTION */}
        <section className="mt-48 relative group">
           <div className="absolute inset-0 bg-amber-400/5 blur-[150px] rounded-full opacity-50"></div>
           <div className="relative bg-[#0d0d0f] border border-white/5 rounded-[5rem] p-24 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                 <div className="lg:col-span-5 space-y-10">
                    <div className="inline-flex p-6 bg-amber-400 rounded-[2rem] shadow-[0_0_50px_rgba(251,191,36,0.2)]">
                       <MessageSquare className="text-black w-10 h-10" />
                    </div>
                    <div className="space-y-6">
                       <h2 className="text-6xl font-bold tracking-tighter">Ask Kru Den AI</h2>
                       <p className="text-2xl text-slate-400 thai-font leading-relaxed font-light">
                          วิเคราะห์รหัสชีวิตและกลยุทธ์ธุรกิจ MigiJames <br />ผ่านขุมพลังปัญญาประดิษฐ์ระดับสากล
                       </p>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-7 space-y-10">
                    <div className="relative">
                       <textarea 
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          placeholder="เช่น ความสำเร็จระดับจักรพรรดิคืออะไร?"
                          className="w-full bg-black/50 border border-white/5 rounded-[3rem] p-10 text-white thai-font text-xl focus:ring-4 focus:ring-amber-400/20 outline-none transition-all h-64 resize-none shadow-inner placeholder:opacity-30"
                       />
                       <button 
                          onClick={handleConsult}
                          disabled={isTyping}
                          className="absolute bottom-8 right-8 bg-amber-400 hover:bg-amber-300 text-black px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all flex items-center disabled:opacity-50 active:scale-95 shadow-xl shadow-amber-400/20"
                       >
                          {isTyping ? "Analyzing..." : "Consult AI"}
                          <ChevronRight className="ml-3 w-5 h-5" />
                       </button>
                    </div>
                    
                    {chatResponse && (
                       <div className="p-12 bg-amber-400/5 border border-amber-400/20 rounded-[3rem] animate-in fade-in slide-in-from-bottom-10 duration-1000">
                          <div className="flex items-center space-x-4 mb-8">
                             <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
                             <span className="text-xs font-black text-amber-400 uppercase tracking-[0.4em]">Master Facilitator Wisdom</span>
                          </div>
                          <p className="text-2xl text-amber-50/90 thai-font leading-loose whitespace-pre-wrap font-light">
                             {chatResponse}
                          </p>
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-64 border-t border-white/5 pt-32 pb-24 px-12 bg-[#08080a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
           <div className="space-y-10">
              <h3 className="text-5xl font-bold tracking-tighter text-amber-100 italic">
                 {BRAND_NAME}
              </h3>
              <p className="text-slate-500 text-lg thai-font leading-loose italic font-light">
                 "เพราะอัญมณีของคุณ ไม่ได้เป็นเพียงแค่เครื่องประดับ แต่คือรหัสลับแห่งชีวิตที่เจียระไนจากดวงดาว"
              </p>
           </div>

           <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-amber-400/60">Connect</h4>
              <div className="space-y-6">
                 <a href="https://web.facebook.com/Tardgon" target="_blank" className="flex items-center text-slate-400 hover:text-amber-400 transition-colors group">
                    <Facebook className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-bold">Facebook Official</span>
                 </a>
                 <div className="flex items-center text-slate-400 group">
                    <Instagram className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-bold">@Migijames_Jewelry</span>
                 </div>
                 <a href="https://shop.line.me/@242irxzi" target="_blank" className="flex items-center text-slate-400 hover:text-amber-400 transition-colors group">
                    <MessageCircle className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-bold">Line Shop: @242irxzi</span>
                 </a>
              </div>
           </div>

           <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-amber-400/60">Boutique</h4>
              <div className="space-y-6">
                 <div className="flex items-start text-slate-400 group">
                    <Map className="w-6 h-6 mr-4 mt-1 shrink-0" />
                    <span className="text-lg thai-font leading-relaxed font-bold">MigiJames Amulet Jewelry<br />High-End Boutique Bangkok</span>
                 </div>
                 <div className="flex items-center text-slate-400 group">
                    <Anchor className="w-6 h-6 mr-4" />
                    <span className="text-lg font-bold">Store Locator</span>
                 </div>
              </div>
           </div>

           <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-amber-400/60">Legacy</h4>
              <p className="text-sm text-slate-600 thai-font leading-loose italic">
                 Experience the fusion of quantum reality and spiritual wisdom. Crafted for the enlightened few by Kru Den Master Facilitator.
              </p>
           </div>
        </div>
        
        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col items-center space-y-6">
           <div className="flex items-center space-x-6 text-amber-400/20">
              <Award className="w-6 h-6" />
              <div className="h-px w-24 bg-white/5"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.6em]">The Imperial Analysis 2569</span>
              <div className="h-px w-24 bg-white/5"></div>
              <Award className="w-6 h-6" />
           </div>
           <div className="text-[10px] text-slate-700 uppercase tracking-[0.4em] font-bold">
              &copy; 2569 {BRAND_NAME} | PRODUCED BY {AUTHOR} | LINE: @DENMASTERFA
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

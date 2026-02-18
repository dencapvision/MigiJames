
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
  Map,
  Compass,
  Star,
  Zap,
  CheckCircle2,
  Heart,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { AnalysisType, PersonalityProfile } from './types';
import { MIGI_PROFILE, JAMES_PROFILE, SYNERGY_DATA, BRAND_NAME, AUTHOR } from './constants';
import { getGeminiConsultant } from './services/gemini';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AnalysisType>(AnalysisType.MIGI);
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

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 pb-20 overflow-x-hidden">
      {/* Header / Hero */}
      <header className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-20"
            alt="Jewelry Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
            {BRAND_NAME}
          </h1>
          <p className="text-xl md:text-2xl font-light text-amber-100/80 tracking-widest uppercase">
            Astral Business Blueprint 2569
          </p>
          <div className="mt-6 flex justify-center items-center space-x-2 text-sm text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Analyzed by {AUTHOR}</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/10 px-4 py-2">
        <div className="max-w-4xl mx-auto flex justify-around">
          <button 
            onClick={() => setActiveTab(AnalysisType.MIGI)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all ${activeTab === AnalysisType.MIGI ? 'bg-amber-400/10 text-amber-400' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <User className="w-6 h-6 mb-1" />
            <span className="text-xs font-semibold">Migi Analysis</span>
          </button>
          <button 
            onClick={() => setActiveTab(AnalysisType.JAMES)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all ${activeTab === AnalysisType.JAMES ? 'bg-amber-400/10 text-amber-400' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <User className="w-6 h-6 mb-1" />
            <span className="text-xs font-semibold">James Analysis</span>
          </button>
          <button 
            onClick={() => setActiveTab(AnalysisType.SYNERGY)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all ${activeTab === AnalysisType.SYNERGY ? 'bg-amber-400/10 text-amber-400' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Users className="w-6 h-6 mb-1" />
            <span className="text-xs font-semibold">Synergy</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 mt-8 space-y-12">
        
        {activeTab !== AnalysisType.SYNERGY ? (
          <>
            {/* Individual Profile Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Zap className="w-24 h-24 text-amber-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-amber-200 mb-6 flex items-center">
                    <Compass className="w-8 h-8 mr-3 text-amber-400" />
                    The Decoding {activeProfile.year}
                  </h2>
                  <div className="space-y-8">
                    {activeProfile.decoding.map((sec, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-lg font-semibold text-amber-100 flex items-center">
                          <ChevronRight className="w-4 h-4 mr-1 text-amber-400" />
                          {sec.title}
                        </h3>
                        <ul className="space-y-2 text-slate-400 pl-5 list-disc thai-font">
                          {sec.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-amber-200 mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-amber-400" />
                    Business Strategy
                  </h2>
                  <div className="space-y-6">
                    {activeProfile.strategy.map((sec, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="text-md font-medium text-amber-100">{sec.title}</h3>
                        <ul className="space-y-1 text-slate-400 pl-4 list-disc thai-font">
                          {sec.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {activeProfile.missionAdvice && (
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute -bottom-4 -right-4 opacity-5">
                      <Heart className="w-32 h-32 text-amber-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-amber-200 mb-6 flex items-center">
                      <Heart className="w-6 h-6 mr-3 text-amber-400" />
                      Social Mission
                    </h2>
                    <div className="space-y-6">
                      {activeProfile.missionAdvice.map((sec, idx) => (
                        <div key={idx} className="space-y-3 bg-amber-400/5 p-4 rounded-2xl border border-amber-400/10">
                          <h4 className="text-sm font-bold text-amber-100/80 uppercase tracking-widest flex items-center">
                             {sec.title}
                          </h4>
                          <ul className="space-y-3 text-slate-300 thai-font">
                            {sec.items.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 text-amber-400 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Astral Blueprint Visualization Card */}
                <div className="bg-gradient-to-br from-indigo-900/40 to-amber-900/40 border border-white/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
                  <h2 className="text-2xl font-bold text-amber-200 mb-6 flex items-center">
                    <Star className="w-6 h-6 mr-3 text-amber-400" />
                    The Astral Blueprint
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">Planet</span>
                        <span className="text-sm font-semibold text-amber-100">{activeProfile.astral.planet}</span>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">Sign</span>
                        <span className="text-sm font-semibold text-amber-100">{activeProfile.astral.sign}</span>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">House</span>
                        <span className="text-sm font-semibold text-amber-100">{activeProfile.astral.house}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-sm italic text-slate-300 thai-font leading-relaxed">
                        "{activeProfile.astral.visualization}"
                      </p>
                    </div>
                  </div>
                </div>

                {activeProfile.jewelryAdvice && (
                   <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-amber-200 mb-6 flex items-center">
                      <Gem className="w-6 h-6 mr-3 text-amber-400" />
                      Gemstone Selection
                    </h2>
                    <div className="space-y-6">
                      {activeProfile.jewelryAdvice.map((sec, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-sm font-bold text-amber-100/80 uppercase tracking-widest">{sec.title}</h4>
                          <ul className="space-y-3 text-slate-300 thai-font">
                            {sec.items.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 text-amber-400 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeProfile.investmentAdvice && (
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-amber-200 mb-6 flex items-center">
                      <TrendingUp className="w-6 h-6 mr-3 text-amber-400" />
                      Investment Advice
                    </h2>
                    <div className="space-y-6">
                      {activeProfile.investmentAdvice.map((sec, idx) => (
                        <div key={idx} className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                          <h4 className="text-sm font-bold text-amber-100/80 uppercase tracking-widest flex items-center">
                             {idx === 1 && <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />}
                             {sec.title}
                          </h4>
                          <ul className="space-y-3 text-slate-300 thai-font">
                            {sec.items.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 text-amber-400 mt-1">{idx === 1 ? <ChevronRight className="w-3 h-3" /> : '•'}</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-amber-400/5 border border-amber-400/20 rounded-3xl p-8">
                  <h3 className="text-xl font-semibold text-amber-200 mb-2">Final Wisdom</h3>
                  <p className="text-lg text-amber-100/90 thai-font italic">
                    "{activeProfile.wisdom}"
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Synergy / Somphong View */
          <section className="space-y-12">
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-400/20 rounded-[3rem] p-12 text-center space-y-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              <Users className="w-20 h-20 text-amber-400 mx-auto" />
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-amber-200 tracking-tight">{SYNERGY_DATA.connectionType}</h2>
                <p className="text-xl text-slate-400 thai-font max-w-2xl mx-auto italic leading-relaxed">
                  "{SYNERGY_DATA.description}"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:border-amber-400/40 transition-all">
                  <h4 className="text-amber-200 font-bold mb-3 flex items-center">
                    <User className="w-4 h-4 mr-2" /> Migi's Role
                  </h4>
                  <p className="text-sm text-slate-400 thai-font leading-relaxed">{SYNERGY_DATA.dualPower.migi}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:border-amber-400/40 transition-all">
                  <h4 className="text-amber-200 font-bold mb-3 flex items-center">
                    <User className="w-4 h-4 mr-2" /> James's Role
                  </h4>
                  <p className="text-sm text-slate-400 thai-font leading-relaxed">{SYNERGY_DATA.dualPower.james}</p>
                </div>
                <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/30 group">
                  <h4 className="text-amber-200 font-bold mb-3 flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-2" /> Combined Result
                  </h4>
                  <p className="text-sm text-amber-100 thai-font font-medium leading-relaxed">{SYNERGY_DATA.dualPower.result}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-8">
                <h3 className="text-2xl font-bold text-amber-200 flex items-center">
                  <Layers className="w-6 h-6 mr-3 text-amber-400" />
                  Synergy Deep-Dive
                </h3>
                <div className="space-y-8">
                  {SYNERGY_DATA.steps.map((step, idx) => (
                    <div key={idx} className="space-y-3">
                       <h4 className="text-amber-100 font-semibold border-l-2 border-amber-400 pl-3">{step.title}</h4>
                       <ul className="space-y-3 text-slate-400 thai-font">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                             <span className="mr-2 text-amber-400 mt-1">•</span>
                             {item}
                          </li>
                        ))}
                       </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group h-full min-h-[400px]">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Partnership" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                  <span className="px-3 py-1 bg-amber-400 text-black text-[10px] font-bold uppercase rounded-full">Success Level: Emperor</span>
                  <h4 className="text-3xl font-bold mt-2">The Double Success Blueprint</h4>
                  <p className="text-slate-300 thai-font text-sm max-w-sm">
                    เมื่อ "ความรู้จริง" ของเจมส์ พบกับ "สุนทรียภาพ" ของมิกิ คือจุดเริ่มต้นของอาณาจักรที่ไม่มีวันล่มสลาย
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* AI Consultant Widget */}
        <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4 w-full">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-amber-400 rounded-2xl">
                  <MessageSquare className="text-black w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Ask Kru Den AI</h2>
              </div>
              <p className="text-slate-400 thai-font">
                ปรึกษาเพิ่มเติมเกี่ยวกับรหัสชีวิต การเจียระไนบทเรียน หรือกลยุทธ์ธุรกิจ MigiJames ปี 2569 ได้ที่นี่
              </p>
              <div className="relative">
                <textarea 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="เช่น ผลลัพธ์ความสำเร็จระดับจักรพรรดิคืออะไร? หรือ มิกิและเจมส์เสริมดวงกันอย่างไร?"
                  className="w-full bg-[#121214] border border-white/10 rounded-2xl p-4 text-slate-200 thai-font focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all h-32 resize-none"
                />
                <button 
                  onClick={handleConsult}
                  disabled={isTyping}
                  className="absolute bottom-4 right-4 bg-amber-400 hover:bg-amber-300 text-black px-6 py-2 rounded-xl font-bold transition-all flex items-center disabled:opacity-50"
                >
                  {isTyping ? "วิเคราะห์อยู่..." : "ปรึกษา AI"}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            
            {chatResponse && (
              <div className="flex-1 w-full bg-amber-400/5 border border-amber-400/20 rounded-3xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Kru Den's Response</span>
                </div>
                <p className="text-slate-200 thai-font leading-relaxed whitespace-pre-wrap">
                  {chatResponse}
                </p>
              </div>
            )}
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer className="mt-20 border-t border-white/10 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-500">
              {BRAND_NAME}
            </h3>
            <p className="text-slate-500 text-sm max-w-xs thai-font">
              "เพราะอัญมณีของคุณ ไม่ได้เป็นเพียงแค่เครื่องประดับ แต่คือรหัสลับแห่งชีวิต"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <a href="tel:+66629199695" className="flex items-center text-slate-400 hover:text-amber-400 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              <span className="text-sm">062 919 9695</span>
            </a>
            <a href="https://web.facebook.com/Tardgon" target="_blank" className="flex items-center text-slate-400 hover:text-amber-400 transition-colors">
              <Facebook className="w-5 h-5 mr-2" />
              <span className="text-sm">Facebook</span>
            </a>
            <div className="flex items-center text-slate-400">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">Line: @242irxzi</span>
            </div>
            <div className="flex items-center text-slate-400">
              <Map className="w-5 h-5 mr-2" />
              <span className="text-sm">Store Locator</span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-[10px] text-slate-600 uppercase tracking-[0.2em]">
          &copy; 2569 {BRAND_NAME} Jewelry Story Telling. Analyzed by Kru Den Master Facilitator.
        </div>
      </footer>
    </div>
  );
};

export default App;

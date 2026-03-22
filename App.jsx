import React, { useState } from 'react';
import { Send, Sparkles, Languages, BookOpen, Mic, Volume2, Copy, Check, History, LayoutDashboard } from 'lucide-react';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [style, setStyle] = useState('formal');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTranslate = () => {
    if (!inputText) return;
    setLoading(true);
    // Simulasi AI Power
    setTimeout(() => {
      let result = "";
      if (style === 'formal') result = "Mohon maaf, saya berhalangan hadir pada pertemuan tersebut.";
      else if (style === 'sopan') result = "Terima kasih banyak atas bantuannya, Pak/Bu.";
      else result = "Oke siap, nanti dikabarin lagi ya!";
      
      setOutputText(result);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <nav className="bg-indigo-600 text-white p-5 sticky top-0 z-50 shadow-lg flex justify-between items-center rounded-b-2xl">
        <div className="flex items-center gap-2">
          <Sparkles className="text-yellow-300" />
          <span className="font-extrabold text-xl tracking-tight">Ngomong Pintar</span>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-indigo-400 overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lia" alt="User" />
        </div>
      </nav>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Banner Visi */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
          <h2 className="text-sm font-medium opacity-80 italic">#BahasaHidup</h2>
          <p className="text-xl font-bold mt-1">Upgrade bahasamu, tunjukkan karaktermu! 🇮🇩</p>
        </div>

        {/* Card Input */}
        <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100 space-y-4">
          <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl">
            {['formal', 'sopan', 'santai'].map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all capitalize ${style === s ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
              >
                {s}
              </button>
            ))}
          </div>

          <textarea
            className="w-full bg-slate-50 rounded-2xl p-4 text-slate-700 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none min-h-[120px] text-lg transition-all"
            placeholder="Ketik kalimat gaulmu di sini..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            onClick={handleTranslate}
            disabled={loading || !inputText}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 active:scale-95 transition-all"
          >
            {loading ? "Menganalisis..." : <><Sparkles size={20}/> Upgrade Sekarang</>}
          </button>
        </div>

        {/* Output Area */}
        {outputText && (
          <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-indigo-100 animate-bounce-in space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Hasil Pintar</span>
              <button onClick={() => {navigator.clipboard.writeText(outputText); setCopied(true); setTimeout(()=>setCopied(false), 2000)}} className="text-slate-400">
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>
            <p className="text-xl font-semibold text-slate-800 leading-relaxed italic">"{outputText}"</p>
            <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
              <Volume2 size={18} /> Dengarkan Pelafalan
            </button>
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 px-8 py-4 flex justify-between items-center">
        <div className="flex flex-col items-center gap-1 text-indigo-600">
          <LayoutDashboard size={24} />
          <span className="text-[10px] font-bold">HOME</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-300">
          <BookOpen size={24} />
          <span className="text-[10px] font-bold">KAMUS</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-300">
          <Languages size={24} />
          <span className="text-[10px] font-bold">DAERAH</span>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('Formal');

  // KAMUS LIA: Di sinilah "Nyawa" aplikasi kamu. 
  const kamusLia = {
    Formal: {
      "tong": "kami", "sa": "saya", "ko": "anda", "pi": "pergi",
      "tra": "tidak", "makan": "bersantap", "ngomong": "berbicara",
      "kam": "kalian", "kitorang": "kami semua"
    },
    Sopan: {
      "tong": "kami teman-teman", "sa": "saya", "ko": "kamu",
      "pi": "izin pamit pergi", "tra": "tidak bisa",
      "makan": "makan bersama", "ngomong": "berdiskusi"
    },
    Papua: {
      "kami": "Tong", "saya": "Sa", "anda": "Ko", "pergi": "Pi",
      "tidak": "Tra", "makan": "Makan e", "bicara": "Ngomong"
    }
  };

  const prosesBahasa = () => {
    if (!inputText) {
      setResult("Ketik kata dulu ya, Lia! 😊");
      return;
    }

    let kata = inputText.toLowerCase().split(' ');
    let hasilTerjemahan = kata.map(k => kamusLia[mode][k] || k);
    
    setResult(hasilTerjemahan.join(' '));
  };

  return (
    <div style={{ backgroundColor: '#fdfcfe', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', borderRadius: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        
        <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', padding: '40px 20px', color: 'white', textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '800' }}>#NgomongPintar</h1>
          <p style={{ opacity: 0.9, marginTop: '10px' }}>Asisten Literasi Digital Papua 🇮🇩</p>
        </div>

        <div style={{ display: 'flex', gap: '10px', padding: '20px', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
          {['Formal', 'Sopan', 'Papua'].map((m) => (
            <button key={m} onClick={() => setMode(m)} style={{ border: 'none', backgroundColor: mode === m ? '#6366f1' : '#e5e7eb', color: mode === m ? 'white' : '#4b5563', padding: '10px 15px', borderRadius: '15px', cursor: 'pointer', fontWeight: '600' }}>
              {m === 'Papua' ? 'Dialek Papua' : m}
            </button>
          ))}
        </div>

        <div style={{ padding: '25px' }}>
          <textarea 
            placeholder="Ketik di sini... (Contoh: Tong lagi makan)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ width: '100%', height: '120px', borderRadius: '15px', border: '2px solid #f3f4f6', padding: '15px', fontSize: '16px', outline: 'none' }}
          />
          <button onClick={prosesBahasa} style={{ width: '100%', marginTop: '20px', padding: '18px', borderRadius: '18px', border: 'none', backgroundColor: '#6366f1', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            ✨ Upgrade Sekarang
          </button>
        </div>

        {result && (
          <div style={{ padding: '20px', margin: '0 25px 25px', backgroundColor: '#f5f3ff', borderRadius: '20px', borderLeft: '5px solid #a855f7' }}>
            <p style={{ fontSize: '12px', color: '#7c3aed', fontWeight: 'bold', marginBottom: '8px' }}>HASIL ({mode}):</p>
            <p style={{ fontSize: '18px', color: '#1f2937', fontWeight: '600' }}>{result}</p>
          </div>
        )}

        <div style={{ textAlign: 'center', paddingBottom: '25px', color: '#9ca3af', fontSize: '13px' }}>
          Dibuat oleh <b>Mustiliani (Lia)</b><br/>
          IAIN Fattahul Muluk Papua
        </div>
      </div>
    </div>
  );
};

export default App;

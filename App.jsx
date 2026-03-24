import React, { useState } from 'react';

// Pastikan ada kata 'export default' di bawah ini
export default function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('Formal');

  const kamusLia = {
    Formal: { "tong": "kami", "sa": "saya", "ko": "anda", "pi": "pergi", "tra": "tidak" },
    Sopan: { "tong": "kami semua", "sa": "saya", "ko": "kamu", "pi": "mohon pamit", "tra": "tidak bisa" },
    Papua: { "saya": "sa", "kamu": "ko", "kami": "tong", "pergi": "pi", "tidak": "tra" }
  };

  const proses = () => {
    if (!inputText) return;
    let kata = inputText.toLowerCase().split(' ');
    let hasil = kata.map(k => kamusLia[mode][k] || k);
    setResult(hasil.join(' '));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto', backgroundColor: 'white', borderRadius: '25px', padding: '30px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#4f46e5' }}>✨ #NgomongPintar</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Karya Lia - IAIN Fattahul Muluk</p>
        
        <div style={{ margin: '20px 0' }}>
          {['Formal', 'Sopan', 'Papua'].map(m => (
            <button key={m} onClick={() => setMode(m)} style={{ margin: '5px', padding: '10px 15px', backgroundColor: mode === m ? '#4f46e5' : '#eee', color: mode === m ? 'white' : '#333', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
              {m === 'Papua' ? 'Dialek' : m}
            </button>
          ))}
        </div>

        <textarea 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="Ketik: tong lagi pi makan" 
          style={{ width: '100%', height: '100px', borderRadius: '15px', border: '2px solid #eee', padding: '15px', fontSize: '16px', boxSizing: 'border-box', outline: 'none' }} 
        />

        <button onClick={proses} style={{ width: '100%', marginTop: '15px', padding: '15px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '15px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
          Upgrade Sekarang 🚀
        </button>

        {result && (
          <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#f5f3ff', borderRadius: '15px', borderLeft: '5px solid #4f46e5', textAlign: 'left' }}>
            <small style={{ color: '#4f46e5', fontWeight: 'bold' }}>HASIL ({mode}):</small>
            <p style={{ fontSize: '18px', margin: '5px 0 0', color: '#1f2937' }}>"{result}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

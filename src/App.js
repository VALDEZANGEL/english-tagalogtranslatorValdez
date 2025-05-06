import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      me: 'ako',
      you: 'ikaw',
      them: 'sila',
      this: 'ito',
      that: 'yan',
      these: 'ito',
      those: 'yan',
      ghost: 'multo',
      house: 'bahay',
      car: 'sasakyan',
      tree: 'kamote',
      dog: 'aso',
      cat: 'pusa',
      bird: 'ibon',
      sun: 'araw',
      moon: 'buwan',
      water: 'tubig',
      fire: 'apoy',
      dirt: 'lupa',
      dirty: 'madumi',
      rain: 'ulan',
      nature: 'kalikasan',
      love: 'pag-ibig',
      envy: 'pag-iinggit',
      table: 'lamesa',
      room: 'kuwarto',
      chair: 'upuan',
      bed: 'kama',
      door: 'pintuan',
      window: 'bintana',
      wall: 'pader',
      floor: 'sahig',
      ceiling: 'kisame',
      roof: 'bubong'
      // Add more translations as needed
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
}

export default App;

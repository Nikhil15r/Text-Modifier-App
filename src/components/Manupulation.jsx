import React, { useState } from 'react';

const TextManipulationComponent = (props) => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish

  const handleTranslateText = () => {
    if (text) {
      // Replace 'YOUR_API_KEY' with your actual Google Translate API key
      const apiKey = 'AIzaSyCkjeLRN1bVH2FKU9gzWGMbgyKXg6HioZY';
      const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
      
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: 'en', // Source language (English)
          target: targetLanguage, // Target language
          format: 'text',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTranslatedText(data.data.translations[0].translatedText);
          props.showAlert('Text Translated!', 'success');
        })
        .catch((error) => {
          console.error('Translation error:', error);
          props.showAlert('Translation Error', 'error');
        });
    }
  };

  return (
    <div className="container my-3">
      {/* ... previous JSX code ... */}
      <button onClick={handleTranslateText}>Translate Text</button>
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        {/* Add more language options as needed */}
      </select>
      {/* Display translated text */}
      {translatedText && (
        <div>
          <h4>Translated Text ({targetLanguage}):</h4>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextManipulationComponent;

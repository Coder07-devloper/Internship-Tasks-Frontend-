import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [error, setError] = useState("");

  const languages = [
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "zh", name: "Chinese" },
    { code: "ar", name: "Arabic" },
    { code: "hi", name: "Hindi" },
    { code: "tr", name: "Turkish" },
    { code: "nl", name: "Dutch" },
    { code: "pl", name: "Polish" },
    { code: "sv", name: "Swedish" }
  ];

  const handleTranslate = async () => {
    if (!text.trim()) {
      setError("Please enter some text to translate.");
      return;
    }

    setLoading(true);
    setError("");
    setTranslated("");

    try {
      // Try multiple LibreTranslate instances
      const libreTranslateEndpoints = [
        "https://libretranslate.de/translate",
        "https://translate.argosopentech.com/translate",
        "https://libretranslate.com/translate"
      ];

      for (const endpoint of libreTranslateEndpoints) {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              q: text,
              source: "en",
              target: targetLanguage,
              format: "text",
            }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.translatedText) {
              setTranslated(data.translatedText);
              return;
            }
          }
        } catch (e) {
          console.log(`Failed with endpoint: ${endpoint}`, e);
          continue;
        }
      }

    
      try {
        const googleResponse = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`);
        
        if (googleResponse.ok) {
          const googleData = await googleResponse.json();
          if (googleData && googleData[0] && googleData[0][0]) {
            const translatedText = googleData[0][0][0];
            if (translatedText) {
              setTranslated(translatedText);
              return;
            }
          }
        }
      } catch (e) {
        console.log("Google Translate failed:", e);
      }

      
      const simpleTranslations = {
        "es": {
          "hello": "hola",
          "goodbye": "adiós",
          "thank you": "gracias",
          "please": "por favor",
          "yes": "sí",
          "no": "no",
          "this is earth": "esto es la tierra",
          "how are you": "cómo estás",
          "good morning": "buenos días",
          "good night": "buenas noches"
        },
        "fr": {
          "hello": "bonjour",
          "goodbye": "au revoir",
          "thank you": "merci",
          "please": "s'il vous plaît",
          "yes": "oui",
          "no": "non",
          "this is earth": "c'est la terre",
          "how are you": "comment allez-vous",
          "good morning": "bonjour",
          "good night": "bonne nuit"
        },
        "de": {
          "hello": "hallo",
          "goodbye": "auf wiedersehen",
          "thank you": "danke",
          "please": "bitte",
          "yes": "ja",
          "no": "nein",
          "this is earth": "das ist die erde",
          "how are you": "wie geht es dir",
          "good morning": "guten morgen",
          "good night": "gute nacht"
        }
      };

      const lowerText = text.toLowerCase().trim();
      if (simpleTranslations[targetLanguage] && simpleTranslations[targetLanguage][lowerText]) {
        setTranslated(simpleTranslations[targetLanguage][lowerText]);
        return;
      }

      throw new Error("All translation services are currently unavailable. Please try again later.");

    } catch (error) {
      console.error("Translation error:", error);
      setError("⚠️ Translation failed. Please try again later or check your internet connection. You can also try simple phrases like 'hello', 'thank you', etc.");
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setText("");
    setTranslated("");
    setError("");
  };

  const swapLanguages = () => {
    if (translated) {
      setText(translated);
      setTranslated("");
      setTargetLanguage("en");
    }
  };

  return (
    <div style={{ 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#333", fontSize: "2.5em" }}>🌍 Text Translator</h1>
        <p style={{ color: "#666", fontSize: "1.1em" }}>
          Translate your text from English to your favorite language
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "20px",
        marginBottom: "20px"
      }}>
        
        <div style={{ 
          backgroundColor: "white", 
          padding: "20px", 
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ marginTop: 0, color: "#333" }}>English Text</h3>
          <textarea
            rows="6"
            style={{
              width: "100%",
              padding: "15px",
              border: "2px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
              resize: "vertical"
            }}
            placeholder="Enter text in English..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div style={{ marginTop: "15px" }}>
            <button 
              onClick={handleTranslate} 
              disabled={loading}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {loading ? "Translating..." : "Translate"}
            </button>
            <button 
              onClick={clearAll}
              style={{
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Clear
            </button>
          </div>
        </div>

      
        <div style={{ 
          backgroundColor: "white", 
          padding: "20px", 
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h3 style={{ margin: 0, color: "#333" }}>Translation</h3>
            <select 
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              style={{
                padding: "8px 12px",
                border: "2px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          
          <div style={{
            minHeight: "120px",
            padding: "15px",
            border: "2px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
            fontSize: "16px",
            lineHeight: "1.5"
          }}>
            {loading ? (
              <div style={{ textAlign: "center", color: "#666" }}>
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>⏳</div>
                Translating...
              </div>
            ) : translated ? (
              <div>
                <div style={{ marginBottom: "15px" }}>{translated}</div>
                <button 
                  onClick={swapLanguages}
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    cursor: "pointer"
                  }}
                >
                  🔄 Swap Languages
                </button>
              </div>
            ) : (
              <div style={{ color: "#999", textAlign: "center" }}>
                Translation will appear here...
              </div>
            )}
          </div>
        </div>
      </div>

      
      {error && (
        <div style={{
          backgroundColor: "#f8d7da",
          color: "#721c24",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
          textAlign: "center",
          marginTop: "20px"
        }}>
          {error}
        </div>
      )}

     
      <div style={{
        backgroundColor: "#d1ecf1",
        color: "#0c5460",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid #bee5eb",
        marginTop: "20px"
      }}>
        <h4 style={{ marginTop: 0 }}>💡 Translation Tips:</h4>
        <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
          <li>Try simple phrases like "hello", "thank you", "goodbye"</li>
          <li>Keep sentences short and clear</li>
          <li>If translation fails, wait a moment and try again</li>
          <li>The app tries multiple translation services automatically</li>
        </ul>
      </div>

      
      <div style={{ 
        textAlign: "center", 
        marginTop: "30px", 
        color: "#666",
        fontSize: "14px"
      }}>
        <p>Powered by LibreTranslate, Google Translate APIs & Fallback Translations</p>
        <p>Built with React</p>
      </div>
    </div>
  );
}

export default App;

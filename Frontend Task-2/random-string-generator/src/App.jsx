import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [generatedString, setGeneratedString] = useState('')
  const [stringLength, setStringLength] = useState(10)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [generationCount, setGenerationCount] = useState(0)

  // Generate random string function using useCallback for performance optimization
  const generateRandomString = useCallback(() => {
    let chars = ''
    
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) chars += '0123456789'
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    if (chars === '') {
      setGeneratedString('Please select at least one character type')
      return
    }
    
    let result = ''
    for (let i = 0; i < stringLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    
    setGeneratedString(result)
    setGenerationCount(prev => prev + 1)
  }, [stringLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  // Generate initial string on component mount and when dependencies change
  useEffect(() => {
    generateRandomString()
  }, [generateRandomString])

  // Auto-generate new string every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomString()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [generateRandomString])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedString)
      alert('String copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🔐 Random String Generator</h1>
        
        <div className="controls">
          <div className="control-group">
            <label htmlFor="length">String Length: {stringLength}</label>
            <input
              type="range"
              id="length"
              min="1"
              max="100"
              value={stringLength}
              onChange={(e) => setStringLength(parseInt(e.target.value))}
            />
          </div>
          
          <div className="control-group">
            <label>
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
              Uppercase Letters (A-Z)
            </label>
          </div>
          
          <div className="control-group">
            <label>
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
              Lowercase Letters (a-z)
            </label>
          </div>
          
          <div className="control-group">
            <label>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              Numbers (0-9)
            </label>
          </div>
          
          <div className="control-group">
            <label>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
              Special Symbols (!@#$%^&*)
            </label>
          </div>
        </div>
        
        <div className="generated-string">
          <h2>Generated String:</h2>
          <div className="string-display">
            {generatedString}
      </div>
          <div className="string-actions">
            <button onClick={generateRandomString} className="generate-btn">
              🔄 Generate New String
            </button>
            <button onClick={copyToClipboard} className="copy-btn">
              📋 Copy to Clipboard
        </button>
          </div>
        </div>
        
        <div className="stats">
          <p>Strings generated: {generationCount}</p>
          <p>Auto-refresh every 5 seconds</p>
        </div>
      </div>
    </div>
  )
}

export default App

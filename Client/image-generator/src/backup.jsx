import { useState } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');
    setImage('');

    try {
      const response = await axios.post(
        'http://localhost:3000/api/generate-image', 
        { prompt }
      );

      if (response.data.success) {
        setImage(`data:image/png;base64,${response.data.image}`);
      } else {
        setError(response.data.error || 'Image generation failed');
      }

    } catch (err) {
      setError(err.response?.data?.error || 'Failed to connect to server');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>AI Image Generator 🎨</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe an image (e.g., 'A cat wearing sunglasses')"
          style={{ width: '100%', padding: '10px' }}
        />
        <button 
          onClick={generateImage} 
          disabled={loading}
          style={{ 
            marginTop: '10px', 
            padding: '10px 20px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
      </div>

      {error && (
        <div style={{ color: 'red', margin: '10px 0', padding: '10px', background: '#ffeeee' }}>
          {error}
        </div>
      )}

      {image && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Image:</h2>
          <img 
            src={image} 
            alt="AI Generated" 
            style={{ 
              maxWidth: '100%', 
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Tribal Crafts. How can I help you today?", sender: 'bot' }
  ])
  const [inputText, setInputText] = useState('')

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }])
      setInputText('')
      
      // Auto reply after 1 second
      setTimeout(() => {
        setMessages(prev => [...prev, 
          { text: "Thank you for your message. Our team will get back to you soon!", sender: 'bot' }
        ])
      }, 1000)
    }
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>💬 Tribal Crafts Support</h4>
            <p>We're here to help!</p>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} style={{ 
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginBottom: '10px'
              }}>
                <div style={{
                  background: msg.sender === 'user' ? 'var(--primary-brown)' : 'var(--light-brown)',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-dark)',
                  padding: '10px 15px',
                  borderRadius: '15px',
                  display: 'inline-block',
                  maxWidth: '80%'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="btn btn-primary">Send</button>
          </div>
        </div>
      )}
      <button 
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
    </div>
  )
}

export default ChatWidget
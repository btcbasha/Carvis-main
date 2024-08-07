import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';

const API_URL = 'https://ai-mu-two.vercel.app/chat'; 

const ChatComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ text: string; fromAI: boolean }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const silenceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (listening) {
      setInputValue(transcript);
      resetSilenceTimer();
    }
  }, [transcript]);

  const resetSilenceTimer = () => {
    if (silenceTimer.current) {
      clearTimeout(silenceTimer.current);
    }

    silenceTimer.current = setTimeout(() => {
      handleStopRecording();
    }, 2000);
  };

  const handleStartRecording = () => {
    if (browserSupportsSpeechRecognition) {
      setIsRecording(true);
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    } else {
      alert('Browser does not support speech recognition.');
    }
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
    if (silenceTimer.current) {
      clearTimeout(silenceTimer.current);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, fromAI: false };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInputValue('');
      setShowSuggestions(false);
      setIsLoading(true);

      try {
        const response = await axios.post(API_URL, { message: inputValue });
        setTimeout(() => {
          const aiMessage = { text: response.data.response, fromAI: true };
          const finalMessages = [...updatedMessages, aiMessage];
          setMessages(finalMessages);
          localStorage.setItem('messages', JSON.stringify(finalMessages));
          setIsLoading(false);
        }, 2000);
        
        resetTranscript();
      } catch (error) {
        console.error('Error sending message:', error);
        setTimeout(() => {
          const errorMessage = { text: 'An error occurred. Please try again later.', fromAI: true };
          const finalMessages = [...updatedMessages, errorMessage];
          setMessages(finalMessages);
          localStorage.setItem('messages', JSON.stringify(finalMessages));
          setIsLoading(false);
        }, 2000);
        
        setInputValue('');
        resetTranscript();
      }
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 w-full overflow-y-hidden">
      {showSuggestions && (
        <div className="flex flex-col items-center justify-center h-screen px-4 md:px-64 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 text-center">
            {[
              { icon: '💬', text: 'Quiz me on ancient civilizations' },
              { icon: '📷', text: 'Email for plumber quote' },
              { icon: '🥕', text: 'Recipe with what\'s in my kitchen' },
              { icon: '☀️', text: 'Plan a relaxing day' },
            ].map((item, index) => (
              <button key={index} className="bg-white shadow-md rounded-lg py-3 px-4 flex items-center justify-center">
                <span className="mr-2">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex-grow overflow-y-auto px-4 scrollbar-none mt-24">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.fromAI ? 'justify-start' : 'justify-end'}`}>
            <div className={`p-3 px-6 rounded-full max-w-xs ${message.fromAI ? 'bg-gray-300 text-black' : 'bg-blue-500 text-white'}`}>
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 flex justify-start">
            <div className="p-3 px-6 rounded-full bg-gray-300">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 w-full p-4 bg-gray-100 flex items-center ">
        {isRecording ? (
          <span
            className="material-symbols-outlined absolute left-4 text-gray-500 cursor-pointer mx-2"
            onClick={handleStopRecording}
          >
            pause_circle
          </span>
        ) : (
          <span
            className="material-symbols-outlined absolute left-4 text-gray-500 cursor-pointer mx-2"
            onClick={handleStartRecording}
          >
            mic
          </span>
        )}
        <input
          type="text"
          placeholder="Message ChatGPT"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full px-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
        />
        <span
          className="material-symbols-outlined absolute right-4 text-gray-500 cursor-pointer mr-4"
          onClick={handleSendMessage}
        >
          arrow_upward
        </span>
      </div>
    </div>
  );
};

export default ChatComponent;
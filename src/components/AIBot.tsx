import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 
import {questions} from './Questions'
import axios from 'axios';


  const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; fromAI: boolean }[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const silenceTimer = useRef<NodeJS.Timeout | null>(null);
  const API_URL = 'https://ai-mu-two.vercel.app/chat'; 

  
  useEffect(() => {
    if (listening) {
      setInputValue(transcript);
      resetSilenceTimer();
    }
  }, [transcript, listening]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

  useEffect(() => {
    setMessages([{ text: questions[0].text, fromAI: true }]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOptionClick = (option: string) => {
    setIsLoading(true);
    setMessages(prevMessages => [
      ...prevMessages,
      { text: option, fromAI: false },
    ]);
  
    setTimeout(() => {
      if (option === "No") {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "Oops! Go and drink a glass of water and come back again.", fromAI: true },
        ]);
        setShowOptions(false); 
      } else if (questions[currentQuestion].options.includes(option)) {
        if (currentQuestion < questions.length - 1) {
          const nextQuestionIndex = currentQuestion + 1;
          setCurrentQuestion(nextQuestionIndex);
          setMessages(prevMessages => [
            ...prevMessages,
            { text: questions[nextQuestionIndex].text, fromAI: true },
          ]);
        } else {
          setMessages(prevMessages => [
            ...prevMessages,
            { text: "All questions answered. How can I assist you further?", fromAI: true },
          ]);
        }
      }
      setIsLoading(false);
    }, 1000);
  };


  const handleSendMessage = async (message: string = inputValue) => {
    if (message.trim()) {
      const userMessage = { text: message, fromAI: false };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInputValue('');
      setIsLoading(true);
  
      const minDisplayTime = 2000; 
      const startTime = Date.now();
  
  
      let responseReceived = false;
  
      try {
        const response = await axios.post(API_URL, { message: message });
        responseReceived = true;
        const responseTime = Date.now();
  
        setTimeout(() => {
          const aiMessage = { text: response.data.response, fromAI: true };
          const finalMessages = [...updatedMessages, aiMessage];
          setMessages(finalMessages);
          localStorage.setItem('messages', JSON.stringify(finalMessages));
          setIsLoading(false);
        }, Math.max(minDisplayTime - (responseTime - startTime), 0));
  
        resetTranscript();
      } catch (error) {
        console.error('Error sending message:', error);
        responseReceived = true;
  
        setTimeout(() => {
          const errorMessage = { text: 'An error occurred. Please try again later.', fromAI: true };
          const finalMessages = [...updatedMessages, errorMessage];
          setMessages(finalMessages);
          localStorage.setItem('messages', JSON.stringify(finalMessages));
          setIsLoading(false);
        }, minDisplayTime);
  
        setInputValue('');
        resetTranscript();
      }
      if (!responseReceived) {
        setTimeout(() => {
          setIsLoading(false);
        }, minDisplayTime);
      }
    }
  };
  
  
  return (
    <div className="h-screen flex flex-col bg-gray-100 w-full">
      <div className='mt-8 border-b-4'></div>
      <div className="flex-grow overflow-y-auto px-4 pb-20 mt-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.fromAI ? 'justify-start' : 'justify-end'}`}>
            <div className={`p-3 px-6 rounded-2xl max-w-xs ${message.fromAI ? 'bg-gray-300 text-black' : 'bg-blue-500 text-white'}`}>
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 flex justify-start">
            <div className="p-3 px-6 rounded-lg bg-gray-300">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="sticky bottom-0 flex justify-center items-center w-full p-4 border-t border-gray-200">
  <div className="relative w-full flex justify-center">
    {showOptions && questions[currentQuestion]?.options.map((option, index) => (
      <button
        key={index}
        onClick={() => handleOptionClick(option)}
        className="w-1/2 sm:w-1/3 md:w-1/4 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-left"
      >
        {option}
      </button>
    ))}
  </div>
</div>


      <div className="sticky bottom-0 w-full p-4 border-t border-gray-200">
        <div className="relative flex items-center">
          {isRecording ? (
            <span
              className="absolute left-3 text-red-500 cursor-pointer"
              onClick={handleStopRecording}
            >
              ⏹️
            </span>
          ) : (
            <span
              className="absolute left-3 text-gray-500 cursor-pointer"
              onClick={handleStartRecording}
            >
              🎤
            </span>
          )}
          <input
            type="text"
            placeholder="Message ChatGPT"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full pl-10 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
                  <span
          className="material-symbols-outlined absolute right-4 text-gray-500 cursor-pointer mr-4"
          onClick={() =>handleSendMessage()}
        >
          arrow_upward
        </span>
        </div>
      </div>

      
    </div>
  );
};

export default ChatComponent;

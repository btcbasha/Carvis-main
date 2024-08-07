import 'regenerator-runtime/runtime'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './components/Pricing';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import VehicleInfo from './components/VehicleInfo';
import HomePage from './components/HomePage';
import AiPage from './components/AiPage2';
import ChatbotInfo from './components/AiPage';
import AIBot from './components/AIBot';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/pricing"
              element={
                <div className="flex">
                  <Sidebar />
                  <Pricing />
                </div>
              }
            />
            <Route path="/screen1" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
            <Route path="/screen3" element={<Screen3 />} />
            <Route
              path="/settings"
              element={
                <div className="flex">
                  <Sidebar />
                  <Settings />
                </div>
              }
            />
            <Route
              path="/vehicle-info"
              element={
                <div className="flex">
                  <Sidebar />
                  <VehicleInfo />
                </div>
              }
            />
            <Route
              path="/chatbot"
              element={
                <div className="flex">
                  <Sidebar />
                  <AiPage />
                </div>
              }
            />
            <Route
              path="/chatbot-info"
              element={
                <div className="flex">
                  <Sidebar />
                  <ChatbotInfo />
                </div>
              }
            />
            <Route
              path="/ai-bot"
              element={
                <div className="flex">
                  <Sidebar />
                  <AIBot />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import FeedbackPage from './components/FeedbackPage/FeedbackPage';
import AboutUs from './components/AboutUs/AboutUs';
import Counselor from './components/Counselor/Counselor';
import ChatsPage from './components/ChatsPage';
import MainPage from './components/MainPage';
import ChatProvider from './Context/ChatProvider'; // Update the path
import Lobby from './components/Lobby';
import Room from './components/Room';
import ChatOption from './components/ChatOption';
import './App.scss';

function App() {
  return (
    <Router>
    <Link to='/'></Link>
    <Link to='/HomePage'></Link>
    <Link to='/ContactPage'></Link>
    <Link to='/ArticlePage'></Link>
    <Link to='/FeedbackPage'></Link>
    <Link to='/AboutUs'></Link>
    <Link to='/Counselor'></Link>
    <Link to='/ChatsPage'></Link>
    <Link to='/Lobby'></Link>
    <Link to='/Room'></Link>
    <Link to='/ChatOption'></Link>

      <ChatProvider>
        <Routes>
          {/* Follow the Following Syntax */}
          {/* <Route path='/home' element={<Home/>} /> */}
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/ContactPage" element={<ContactPage />} />
          <Route exact path="/ArticlePage" element={<ArticlePage />} />
          <Route exact path="/FeedbackPage" element={<FeedbackPage />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Counselor" element={<Counselor />} />
          <Route path="/ChatsPage" element={<ChatsPage />} />
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/Lobby" element={<Lobby />} />
          <Route exact path="/room/:roomId" element={<Room />} />
          <Route exact path="/ChatOption" element={<ChatOption />} />

        </Routes>
      </ChatProvider>
    </Router>
  );
}

export default App;
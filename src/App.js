import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import PollCreate from './components/PollCreate';
import PollResponse from './components/PollResponse';
import PollResults from './components/PollResults';
import SavedPolls from './components/SavedPolls';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { AuthProvider } from './components/AuthContext';
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div className='wholePage'>
      <Header />
      <div className='wrapper contentSection'>
        <div className='innerBox'>
          <Routes>
            <Route path='/' element={<PollCreate />} />
            <Route path='/poll/:pollID' element={<PollResponse />} />
            <Route path='/poll/:pollID/results' element={<PollResults />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;

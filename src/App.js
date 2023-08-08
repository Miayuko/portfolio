import './App.scss';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Presentation from './pages/Presentation';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
  const [View, setView] = useState('');

  function selectCurrentView(currentView) {
    if (currentView !== false) {
      setView(currentView);
    }
  }
  console.log(View);

  return (
    <>
      <div class="app">
        <Menu menuView={selectCurrentView} View={View} />
        <Home isInView={selectCurrentView} />
        <Presentation isInView={selectCurrentView} />
        <Education isInView={selectCurrentView} />
        <Experiences isInView={selectCurrentView} />
        <Contact isInView={selectCurrentView} />
      </div>
    </>
  );
}

export default App;
import{ Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Destination from './components/Destination';
import Technology from './components/Technology';
import Crew from './components/Crew';
import Error from './components/Error';

function App() {
  return (
    <>
  
      <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destination"  element={<Destination />}/>
        <Route path="/crew"  element={<Crew />}/>
        <Route path="/technology"  element={<Technology />}/>
        <Route path="/*"  element={<Error />}/>
      </Routes>
      </main>
    
    
    </>
  );
}

export default App;

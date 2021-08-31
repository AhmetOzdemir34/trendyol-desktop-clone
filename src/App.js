import './App.css';
import React, {useEffect} from 'react';
import Navi from './comps/Navi';
import Main from './comps/Main';
import Main2 from './comps/Main2';
import Story from './comps/Story';
import Footer from './comps/Footer';


function App() {
  useEffect(() => {
    alert("Geliştirme amaçlı hazırlanmıştır, orijinal haklara sahip değildir.");
  },[])
  return (
    <>
        <Navi />
        <Story />
        <Main />
        <Main2 />
        <Footer />
    </>
  );
}

export default App;

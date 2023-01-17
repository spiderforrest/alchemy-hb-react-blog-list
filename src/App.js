import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <section className="main">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;

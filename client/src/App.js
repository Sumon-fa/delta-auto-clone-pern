import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/HomePageComponents/footer/Footer';
import Header from './components/HomePageComponents/header/Header';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

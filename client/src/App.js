import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/HomePageComponents/footer/Footer';
import Header from './components/HomePageComponents/header/Header';
import Home from './pages/Home';
import Blog from "./pages/Blog"
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

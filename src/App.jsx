import React from 'react';
import "./App.css";
import About from "./pages/about.jsx";
import Events from "./pages/events.jsx";
import AnnualReport from "./pages/annual.jsx";
import Teams from "./pages/team.jsx";
import Blogs from "./pages/blogs.jsx";
import SignUp from "./pages/signup.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/footer.jsx";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div id="about" className="section">
          <About />
        </div>
        <div id="events" className="section">
          <Events />
        </div>
        <div id="annual" className="section">
          <AnnualReport />
        </div>
        <div id="team" className="section">
          <Teams />
        </div>
        <div id="blogs" className="section">
          <Blogs />
        </div>
        <div id="signup" className="section">
          <SignUp />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
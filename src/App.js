import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage';
// import Projects from './pages/projects';
import Error from './pages/error';
import Navbar from './components/ContentElements/Navbar/navbar';
import Footer from './components/ContentElements/Footer/footer';
// import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
    <main>
      <Switch>
        <Route path="/" component={Homepage} exact />
        {/* <Route path="/projects" component={Projects} /> */}
        {/* <Route path="/about" component={About} /> */}
        <Route path="/contact" component={Contact} />
        <Route component={Error} /> 
        {/* need to work out how to activate error page for all other routes */}
      </Switch>
    </main>
    <Footer />
    </div>
  );
}

export default App;

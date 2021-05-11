
import Portfolio from './Pages/Portfolio';
import Navbar from './Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';

import Error from './Pages/Error';
import CoffeeShopProject from './ProjectFolder/Coffeeshop';
import Texteditorproject from './ProjectFolder/TextEditor';
import PortfolioProject from './ProjectFolder/PortfolioProject';
import Ux from './ProjectFolder/Ux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BevProject from './ProjectFolder/Bev';
import { useState, useEffect } from 'react';
import SideBar from './MenuComponents/SideBar';



function App() {

  /*   Checks the window size for dynamic menu */
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /*   END: Checks the window size for dynamic menu */


  return (
    <Router>
      <div>
        {windowSize.width <= 768 ? <SideBar /> : <Navbar />}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <Route path="/coffeeshop" component={CoffeeShopProject} />
          <Route path="/texteditor" component={Texteditorproject} />
          <Route path="/portfolioproject" component={PortfolioProject} />
          <Route path="/ux" component={Ux} />
          <Route path="/bev" component={BevProject} />
          <Route component={Error} />
        </Switch>

      </div >

    </Router>

  );
}

export default App;

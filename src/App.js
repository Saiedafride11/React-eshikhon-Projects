import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path="/courses">
                  <Courses></Courses>
              </Route>
              <Route path="/course/:serialId">
                  <CourseDetails></CourseDetails>
              </Route>
              <Route path="/contact">
                  <Contact></Contact>
              </Route>
              <Route path="/about">
                  <About></About>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

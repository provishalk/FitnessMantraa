// import logo from './logo.svg';
import Home from './components/home.js'
import About from './components/About.js'
import ContactUs from './components/ContactUs'
import Plans from "./components/Plans";
import MyStore from "./components/MyStore";
import AdminLogin from "./components/AdminLogin"
import UserLogin from "./components/UserLogin"
import UserRegistration from "./components/UserRegistration"

import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/contact_us" exact component={ContactUs}></Route>
      <Route path="/plans" exact component={Plans}></Route>
      <Route path="/store" exact component={MyStore}></Route>
      <Route path="/admin_login" exact component={AdminLogin}></Route>
      <Route path="/user_login" exact component={UserLogin}></Route>
      <Route path="/user_registration" exact component={UserRegistration}></Route>
    </BrowserRouter>
  );
}

export default App;

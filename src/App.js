import Home from "./components/home.js";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs";
import Plans from "./components/Plans";
import MyStore from "./components/MyStore";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import { BrowserRouter, Route } from "react-router-dom";
import alertify from "alertifyjs";
import AdminFeedback from "./components/AdminFeedback/AdminFeedback.js";
import AdminUsers from "./components/AdminUsers/AdminUsers.js";
import "./App.css";

alertify.defaults = {
  notifier: {
    position: "top-right",
    delay: 3,
  },
};

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/contact_us" exact component={ContactUs}></Route>
      <Route path="/plans" exact component={Plans}></Route>
      <Route path="/store" exact component={MyStore}></Route>
      <Route path="/login" exact component={UserLogin}></Route>
      <Route path="/register" exact component={UserRegistration}></Route>
      <Route path="/admin-login" exact component={AdminLogin}></Route>
      <Route path="/admin-feedback" exact component={AdminFeedback}></Route>
      <Route path="/admin-users" exact component={AdminUsers}></Route>
    </BrowserRouter>
  );
}

export default App;

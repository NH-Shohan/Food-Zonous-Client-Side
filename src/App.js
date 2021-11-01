import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import Items from "./Pages/Home/Items/Items";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import SingleItem from "./Pages/SingleItem/SingleItem";
import AddItem from "./Pages/AddItem/AddItem";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/items">
              <Items></Items>
            </Route>
            <PrivateRoute path="/singleItem/:itemId">
              <SingleItem></SingleItem>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addItem">
              <AddItem></AddItem>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

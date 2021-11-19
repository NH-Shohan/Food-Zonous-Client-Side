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
import Orders from "./Pages/Orders/Orders";
import MyOrders from "./Pages/Login/MyOrders/MyOrders";
import ManageOrders from "./Pages/Login/ManageOrders/ManageOrders";
import AddItem from "./Pages/Login/AddItem/AddItem";

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
            <PrivateRoute path="/orders/:itemId/:itemName/">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addItem">
              <AddItem></AddItem>
            </PrivateRoute>
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

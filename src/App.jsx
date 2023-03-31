import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import { Homepage } from "./pages/index";
import { Shop } from "./pages/index";
import { Authentication } from "./pages/authentication/authentication.page";
import { auth, createUserProfileDocument } from "./firebas/firebase.utils";
import store from "./redux/store";
import { currentUserValue } from "./redux/users";
import { Checkout } from "./pages/checkout/checkout.page";
import { Aboutus } from "./pages/aboutus/Aboutus";
import { Footer } from "./components/footer/footer.component";
import ContactForm from "./pages/contact/contact";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: "null",
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // this.setState({ currentUser: user });

      store.dispatch(currentUserValue(user));

      createUserProfileDocument(user);
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route path="/crown-clothings" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/authentication" element={<Authentication />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./containers/Main";

import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

import store from "./store"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App-Site">
            <div className="Site-content">
              <div className="App-header">
                <Header />
              </div>
              <div className="main">
                <Main />
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

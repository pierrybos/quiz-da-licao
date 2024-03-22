import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "../app/store";
import "../styles/global.css";

import { wrapper } from "../store/store";
import Head from "next/head";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);

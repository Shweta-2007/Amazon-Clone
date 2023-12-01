import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login.jsx";
import Checkout from "./Checkout";
import { StateProvider, useStateValue } from "./StateProvider";
import * as ServiceWorker from "./serviceWorker";
import reducer from "./reducer.jsx";
import { initialState } from "./reducer.jsx";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Layout>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </StateProvider>
    </React.StrictMode>
  );
}

export default App;

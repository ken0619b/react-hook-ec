import React, { useState, useEffect } from "react";
import "../App.scss";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className="App">
      <Header />
      {/* <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) :<p>asasasa</p>
        }
      </div> */}
      <Footer />
    </div>
  );
};

export default App;

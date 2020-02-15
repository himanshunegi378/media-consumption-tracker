import React from "react";
import "./App.scss";
import NavigationBar from "./components/navigationBar/navigationBar";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/searchBar/searchBar";
import MediaCatalog from "./components/catalog/mediaCatalog";
import Loading from "./components/loading/loading";

function App() {
  return (
    <Router>
      <div className="App">
        <Loading />

        <NavigationBar />
        <div className="searchbar-container ml-auto mr-auto h-25 w-75  mt-5">
          <SearchBar />
          <hr/>
        </div>
        <div className="container ">
          <MediaCatalog />
        </div>
      </div>
    </Router>
  );
}

export default App;

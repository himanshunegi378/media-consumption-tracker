import React from "react";
import "./App.scss";
import NavigationBar from "./components/navigationBar/navigationBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./components/searchBar/searchBar";
import MediaCatalog from "./components/catalog/mediaCatalog";
import Loading from "./components/loading/loading";
import MediaDetail from "./components/mediaDetail/mediaDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Loading />

        <NavigationBar />
        <div className="searchbar-container ml-auto mr-auto h-25 w-75  mt-5">
          <SearchBar />
          <hr />
        </div>
        <div className="container ">
          <Route exact path="/catalog/:title" component={MediaCatalog} />
          <Route exact path="/detail/:traktId" component={MediaDetail} />
        </div>
      </div>
    </Router>
  );
}

export default App;

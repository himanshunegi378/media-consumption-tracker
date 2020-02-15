import React from "react";
import "./App.scss";
import NavigationBar from "./components/navigationBar/navigationBar";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/searchBar/searchBar";
import MediaCatalog from "./components/catalog/mediaCatalog";


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className='searchbar-container ml-auto mr-auto h-25 w-75  mt-5'>
            <SearchBar />
        </div>
          <div className='container '>
              <MediaCatalog/>
          </div>
      </div>
    </Router>
  );
}

export default App;

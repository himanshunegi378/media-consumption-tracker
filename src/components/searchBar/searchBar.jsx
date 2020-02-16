import React, { Component } from "react";
import SearchItem from "./searchItem";
import Trakt from "nodeless-trakt";
import "./searchBar.css";
import { connect } from "react-redux";
import { search,updateMediaCatlog } from "../../redux/action";
import {withRouter} from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchItem: [],
      mediaList: []
    };
    this.options = {
      client_id:
        "de8e4e4272e199e59aab0ea0e55768257916214f32d394be62560202728bb365",
      client_secret:
        "199c3e15ace3b325f1c03a460a59885bfc5a616f967d1e95f975d75ebabb44df",
      redirect_uri: null, // defaults to 'urn:ietf:wg:oauth:2.0:oob'
      api_url: null, // defaults to 'https://api.trakt.tv'
      useragent: null, // defaults to 'trakt.tv/<version>'
      pagination: true // defaults to false, global pagination (see below)
    };
    this.trakt = new Trakt(this.options);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.trakt.search
      .text({ type: "movie", query: this.state.search })
      .then(res => {
        this.props.history.push(`/catalog/${this.state.search}`)

        console.log(res);
        this.props.updateCatalog(res)
        this.setState({ searchItem: [], mediaList: res });

      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    this.trakt.search
      .text({ type: "movie", query: e.target.value })
      .then(res => {
        let items;
        items = res.map(item => {
          return <SearchItem key={item.movie.ids.trakt} data={item} />;
        });
        this.props.search(this.state.search);

        this.setState({ searchItem: items });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="searchbar mx-auto w-75 card-2">
          <form
              autoComplete='off'
            className=" input-group input-group-sm "
            onSubmit={this.handleSubmit}
          >
            <input
              id="search"
              className="search_input form-control my-auto"
              name="search"
              type="text"
              placeholder="Search..."
              size="50"
              onChange={this.handleChange}
              value={this.state.search}
            />
            <div className="input-group-append">
              <button className="search_icon" type="submit">
                <i className="fas fa-search" />
              </button>{" "}
            </div>
          </form>
        </div>
        {this.state.search !== "" ? this.state.searchItem : null}
      </>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    search: text => dispatch(search(text)),
    updateCatalog: catalog=>{dispatch(updateMediaCatlog(catalog))}
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));

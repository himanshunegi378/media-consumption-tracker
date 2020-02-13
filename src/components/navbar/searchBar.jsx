import React, { Component } from "react";
import SearchItem from "./searchItem";
import Trakt from "nodeless-trakt";



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      items: []
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
        console.log(res);
        let items;
        items = res.map(item => {
          return <SearchItem key={item.movie.ids.trakt} data={item} />;
        });

        this.setState({ items: items });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.search);

    this.trakt.search
      .text({ type: "movie", query: e.target.value })
      .then(res => {
          console.log(res)
        let items;
        items = res.map(item => {
          return (
            <SearchItem
              key={item.movie.ids.trakt}
              data={item}
            />
          );
        });

        this.setState({ items: items });
      })
        .catch(err=>console.log(err));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input
            id="search"
            name="search"
            type="text"
            onChange={this.handleChange}
            value={this.state.search}
          />{" "}
          <button type="submit">Search</button>
        </form>
          {this.state.items}
      </>
    );
  }
}

export default SearchBar;

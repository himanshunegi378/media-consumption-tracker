import React, { Component, useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import ItemDetail from "./itemDetail";

class SearchItem extends Component {
  constructor() {
    super();
    this.state = {
      click: false,
      detail: <></>,
      open: false
    };
  }

  handleClick = id => {
    this.setState(prevState => {
      return {
        click: true,
        detail: <ItemDetail id={this.props.data.movie.ids.imdb} />
      };
    });
    this.setState({ open: !this.state.open });

  };
  render() {
    const movie_title = this.props.data.movie.title;
    const year_of_release = this.props.data.movie.year;

    return (
      <>
        <Card
          onClick={() => {
            this.handleClick();
          }}
          aria-controls={this.props.data.movie.ids.imdb}
          aria-expanded={this.state.open}
        >
          <Card.Body>
            <Card.Title>{movie_title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {year_of_release}
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Collapse in={this.state.open}>
          <div id={this.props.data.movie.ids.imdb}>{this.state.detail}</div>
        </Collapse>
      </>
    );
  }
}

export default SearchItem;

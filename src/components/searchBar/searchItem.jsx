import React, { Component } from "react";
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
  componentDidMount() {}

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
        <div className="w-75 my-2 mx-auto">
          <Card
            style={{ "borderRadius": "67px" }}
            bg="light"
            onClick={() => {
              this.handleClick();
            }}
            aria-controls={this.props.data.movie.ids.imdb}
            aria-expanded={this.state.open}
          >
            <Card.Body>
              <Card.Title>
                {movie_title} {year_of_release}
              </Card.Title>
            </Card.Body>
          </Card>
          <Collapse in={this.state.open}>
            <div id={this.props.data.movie.ids.imdb}>{this.state.detail}</div>
          </Collapse>
        </div>
      </>
    );
  }
}

export default SearchItem;

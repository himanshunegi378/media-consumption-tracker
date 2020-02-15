import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
const Trakt = require("nodeless-trakt");

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: null,
      image: ""
    };
  }
  componentDidMount() {
    let options = {
      client_id:
        "de8e4e4272e199e59aab0ea0e55768257916214f32d394be62560202728bb365",
      client_secret:
        "199c3e15ace3b325f1c03a460a59885bfc5a616f967d1e95f975d75ebabb44df",
      redirect_uri: null, // defaults to 'urn:ietf:wg:oauth:2.0:oob'
      api_url: null, // defaults to 'https://api.trakt.tv'
      useragent: null, // defaults to 'trakt.tv/<version>'
      pagination: true // defaults to false, global pagination (see below)
    };
    let trakt = new Trakt(options);
    const imdbId = this.props.id;
    axios
      .get(`https://www.omdbapi.com/?i=${imdbId}&apikey=c61657ee`)
      .then(res => {
        this.setState({ image: res.data.Poster });
      });
    trakt.movies
      .summary({ id: imdbId, extended: "full" })
      .then(res => {
        this.setState({ detail: res });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.detail !== null ? (
          <Card body bg="success " text="white">
            <Row>
              <Col sm={2}>
                <img
                  className="img-fluid h-auto"
                  alt="X"
                  src={this.state.image}
                />
              </Col>
              <Col sm={10}>{this.state.detail.overview}</Col>
            </Row>
          </Card>
        ) : null}
      </>
    );
  }
}

export default ItemDetail;

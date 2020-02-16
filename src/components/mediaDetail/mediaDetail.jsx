import React, { Component } from "react";
import { getMovieDetail, getMoviePoster } from "../../utils/traktWrapper";
import { Image } from "react-bootstrap";

class MediaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: {},
      summary: {},
        imageLink : ''
    };
  }
  async componentDidMount() {
    let traktId = this.props.match.params.traktId;
    let data = await getMovieDetail(traktId);
    let imdbId = data.ids.imdb;
    const imageLink = await getMoviePoster(imdbId);
    this.setState({ summary: data,imageLink: imageLink });
  }

  render() {
    let {
      title,
      year,
      tagline,
      overview,
      country,
      genres
    } = this.state.summary;
    return (
      <div>
        <Image src={this.state.imageLink}></Image>
        <h1>{title}</h1>
        <h5>{tagline}</h5>
        <hr />
        <p>{overview}</p>
      </div>
    );
  }
}

export default MediaDetail;

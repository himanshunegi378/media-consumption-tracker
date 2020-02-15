import React, { Component } from "react";
import MediaCard from "./mediaCard";
import { connect } from "react-redux";
import axios from "axios";
import { loading,loadingComplete} from "../../redux/action";
import './style.css'

const Trakt = require("nodeless-trakt");

class MediaCatalog extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mediaCard: []
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.catalog !== this.props.catalog) {
      this.updateMediaCard(this.props.catalog);
    }
  }

  updateMediaCard = newCatalog => {
    let cardList = [];

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
    this.props.loading()
    newCatalog.forEach(media => {
      const imdbId = media.movie.ids.imdb;
      axios
        .get(`https://www.omdbapi.com/?i=${imdbId}&apikey=c61657ee`)
        .then(res => {
          let imageLink = res.data.Poster;
          trakt.movies
            .summary({ id: imdbId, extended: "full" })
            .then(res => {
              cardList.push(<MediaCard key={imdbId} imageLink={imageLink} media={res} />);
                this.setState({ mediaCard: cardList });
                this.props.loadingComplete()
              window.document.getElementById('media-catalog').focus();


            })
            .catch(err => console.log(err));
        }).catch(err=>console.log(err));
    });
  };

  render() {
    // let cards=[];
    // for (let i = 0; i < 10; i++) {
    //     cards.push(<MediaCard/>)
    // }
    return (
        <>

      <div tabIndex="0" id='media-catalog' className=" d-flex flex-wrap justify-content-center">

        {this.state.mediaCard}
      </div>
          </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    catalog: state.Search.catalog
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loading: () => {dispatch(loading())},
    loadingComplete: ()=>{dispatch(loadingComplete())}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MediaCatalog);

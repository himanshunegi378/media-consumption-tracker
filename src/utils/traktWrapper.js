import Trakt from "nodeless-trakt";
import axios from "axios";
import MediaCard from "../components/catalog/mediaCard";
import React from "react";

const options = {
  client_id: "de8e4e4272e199e59aab0ea0e55768257916214f32d394be62560202728bb365",
  client_secret:
    "199c3e15ace3b325f1c03a460a59885bfc5a616f967d1e95f975d75ebabb44df",
  redirect_uri: null, // defaults to 'urn:ietf:wg:oauth:2.0:oob'
  api_url: null, // defaults to 'https://api.trakt.tv'
  useragent: null, // defaults to 'trakt.tv/<version>'
  pagination: true // defaults to false, global pagination (see below)
};
const trakt = new Trakt(options);

export async function getMovieDetail(traktId) {
  const data = await trakt.movies.summary({ id: traktId, extended: "full" });
  return data;
}

export async function getMoviePoster(imdbId) {
  return await axios
    .get(`https://www.omdbapi.com/?i=${imdbId}&apikey=c61657ee`)
    .then(res => {
      let imageLink = res.data.Poster;
      return imageLink;
    })
    .catch(err => console.error(err));
}

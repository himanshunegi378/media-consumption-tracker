const Trakt = require("nodeless-trakt");
let options = {
  client_id: "de8e4e4272e199e59aab0ea0e55768257916214f32d394be62560202728bb365",
  client_secret:
    "199c3e15ace3b325f1c03a460a59885bfc5a616f967d1e95f975d75ebabb44df",
  redirect_uri: null, // defaults to 'urn:ietf:wg:oauth:2.0:oob'
  api_url: null, // defaults to 'https://api.trakt.tv'
  useragent: null, // defaults to 'trakt.tv/<version>'
  pagination: true // defaults to false, global pagination (see below)
};
let getsummary;
export default getsummary = id => {
  let trakt = new Trakt(options);
  return trakt.movies.summary({ id: id, extended: "full" }).then(res => {
    return res;
  });
};

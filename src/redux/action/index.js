//action when user press enter after searching and a res from server is sent to the action


export const search = searchText => ({
  type: "SEARCH",
  payload: {
    searchText: searchText
  }
});

export  const updateMediaCatlog = newCatalogList =>
    ({
      type: "UDPATE_CATALOG",
      payload:{
        newCatalogList: newCatalogList
      }
    });

export const loading = () => ({
         type: "LOADING",
         payload: {
           loading: true
         }
       });

export const loadingComplete = () => ({
    type: "LOADING_COMPLETE",
    payload: {
        loading: false
    }
});
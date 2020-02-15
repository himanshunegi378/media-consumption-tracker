let state = {
  catalog: [],
  searchText: "",
  loading: false
};

const todos = (initialState = state, action) => {
  switch (action.type) {
    case "SEARCH":
      return Object.assign({}, state, {
        searchText: action.payload.searchText
      });
    case "UDPATE_CATALOG":
      return { ...state, catalog: action.payload.newCatalogList };
    case "LOADING":
      return { ...state, loading: action.payload.loading };
    case "LOADING_COMPLETE":
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
};
export default todos;

let state = {
  catalog: [],
  searchText: ""
};

const todos = (initialState = state, action) => {
  switch (action.type) {
    case "SEARCH":
      return Object.assign({}, state, {
        searchText: action.payload.searchText
      });
    case "UDPATE_CATALOG":
      return { ...state, catalog: action.payload.newCatalogList };

    default:
      return state;
  }
};
export default todos;

let state = {
  test: "1",
  commentIds: [],
};

function setState(newState) {
  state = { ...state, ...newState };
  console.log("state", state);
}

function linkToPath(path) {
  window.location.href = path;
}

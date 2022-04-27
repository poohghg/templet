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

function toggleAmpleBox() {
  const ampleBox = document.querySelector(".ampleBox");
  ampleBox.classList.toggle("openBoxAni");
  console.log("ampleBox", ampleBox);
}

function toggleCommentId(id) {
  const _id = Number(id);
  let { commentIds } = state;
  let newCommentIds = [];
  if (commentIds.some(listIdId => listIdId === _id)) {
    newCommentIds = commentIds.filter(v => v !== id);
  } else {
    newCommentIds = commentIds.concat(_id);
  }
  return setState({ commentIds: newCommentIds });
}

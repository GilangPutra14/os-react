const e = React.createElement;

function LikeButton() {
  return e(
    "button",
    {
      onclick: () => alert("berhasil"),
    },
    "like"
  );
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);

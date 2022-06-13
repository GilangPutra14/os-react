import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../container/BlogPost/Post";

class BlogPost extends Component {
  state = {
    listArtikel: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts") //alamat uRL API
      .then((Response) => Response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listArtikel: jsonHasilAmbilDariAPI,
        });
      });
  }
  render() {
    return (
      <div className="post-artikel">
        <h2>Daftar Artikel</h2>
        {this.state.listArtikel.map((artikel) => {
          return (
            <Post key={artikel.id} judul={artikel.title} isi={artikel.title} />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;

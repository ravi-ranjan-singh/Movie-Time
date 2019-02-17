import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
class App extends Component {
  state = {
    movie: {
      title: "",
      genre: "",
      director: "",
      actors: "",
      plot: "",
      language: "",
      country: "",
      awards: "",
      img_url: "",
      imdbRating: "",
      production: ""
    },
    liked: []
  };

  saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getFromLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
  };

  componentDidMount = () => {
    const movie = this.getFromLocalStorage("lastMovie");
    const liked = this.getFromLocalStorage("likedMovies");
    if (movie !== null && liked !== null)
      this.setState({
        movie,
        liked
      });
  };

  async handleSearch(searchInput) {
    if (searchInput.trim() !== "") {
      let res = await (await fetch(
        `http://www.omdbapi.com/?apikey=aa806481&type="movie"&t=${searchInput}`
      )).json();
      await this.setState({
        movie: {
          title: res.Title,
          genre: res.Genre,
          director: res.Director,
          actors: res.Actors,
          plot: res.Plot,
          language: res.Language,
          country: res.Country,
          awards: res.Awards,
          img_url: res.Poster,
          imdbRating: res.imdbRating,
          production: res.Production
        }
      });
      this.saveToLocalStorage("lastMovie", this.state.movie);
    }
  }

  handleLike = title => {
    if (this.state.liked.includes(title)) {
      let index;
      index = this.state.liked.indexOf(title);
      let arr = [...this.state.liked];
      arr.splice(index, 1);
      this.setState(
        {
          liked: arr
        },
        () => {
          this.saveToLocalStorage("likedMovies", this.state.liked);
        }
      );
    } else {
      let arr = [...this.state.liked];
      arr.push(title);
      this.setState(
        {
          liked: arr
        },
        () => {
          this.saveToLocalStorage("likedMovies", this.state.liked);
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar
            onSearch={this.handleSearch.bind(this)}
            likedMovies={this.state.liked}
          />
        </div>
        <Content
          movie={this.state.movie}
          onLiked={this.handleLike}
          likedMovies={this.state.liked}
        />
      </div>
    );
  }
}

export default App;

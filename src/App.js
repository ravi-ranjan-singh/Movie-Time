import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Content from './Components/Content'
class App extends Component {

  state= {
   movie:{
    title:"",
    genre:"",
    director:"",
    actors:"",
    plot:"",
    language:"",
    country: "",
    awards:"",
    img_url:"",
    imdbRating:"",
    production:"",
   }
  }

 async handleSearch(searchInput){
    let res = await (await fetch(`http://www.omdbapi.com/?apikey=aa806481&type="movie"&t=${searchInput}`) ).json()
    console.log("run")
    await this.setState({
      movie:{
        title:res.Title,
        genre:res.Genre,
        director:res.Director,
        actors:res.Actors,
        plot:res.Plot,
        language:res.Language,
        country: res.Country,
        awards:res.Awards,
        img_url:res.Poster,
        imdbRating:res.imdbRating,
        production:res.Production,
      }
    })   
  }

  render() {
    return (
      <div className="container">
        <Navbar onSearch={this.handleSearch.bind(this)}/>
        <Content movie={this.state.movie}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import SecondaryContent from './SecondaryContent'
import MainContent from './MainContent'

const Content = (props) => {
    return (
        <React.Fragment>
            <div className="row content">
            <SecondaryContent movie={props.movie}/>
            <MainContent movie={props.movie} onLiked={props.onLiked} likedMovies={props.likedMovies}/>
            </div>
            <div className="row foot">
                <p className="col-12">Design And Created By Ravi Ranjan Singh</p> 
            </div>
        </React.Fragment>
      );
}
 
export default Content;
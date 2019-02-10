import React from 'react';

const SecondaryContent = (props) => {
    return ( 

        <div className="col-lg-4 col-sm-12 secondary-content">
              <div className="row poster">
                  <img src={props.movie.img_url} alt="" className="col-12"/>
              </div>
              <div className="row data">
                    <ul className="list-group col-12">
                            <li className="list-item">Language: {props.movie.language}</li>
                            <li className="list-item">Country: {props.movie.country}</li>
                            <li className="list-item">imdbRating:{props.movie.imdbRating}</li>
                            <li className="list-item">Production: {props.movie.production}</li>
                            <li className="list-item">Awards:{props.movie.awards}</li>
                    </ul>
              </div>
          </div>
     );
}
 
export default SecondaryContent;
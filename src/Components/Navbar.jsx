import React from 'react';
import logo from '../Movie.png'

const Navbar = (props) => {
    return (  
        <React.Fragment>
            <nav className="navbar navbar-light bg-light row">
            <img src={logo} alt="site-icon" className="col-lg-1 col-sm-2"></img>
                <a className="navbar-brand col-lg-4 col-sm-7 text-white" href="">Movie Time!</a>
                <form className="form-inline col-lg-6">
                <input className="form-control ml-2 mr-sm-2" type="search" placeholder="Enter Movie Name" aria-label="Search"/>
                <button className="btn btn-primary ml-4 my-2 my-sm-0"
                onClick={e=>{
                    e.preventDefault()
                    props.onSearch(document.querySelector('input').value)}
                }
                >Search</button>
                </form>
            </nav>
        </React.Fragment>
    );
}
 
export default Navbar;
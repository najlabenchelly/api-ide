import React from "react";
const Navbar = props => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        Colla'Web
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor02'
        aria-controls='navbarColor02'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor02'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Projets
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Souscription
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              En savoir plus sur nous
            </a>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='text'
            placeholder='recherche'
          />
          <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
            Recherche
          </button>
        </form>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Inscription
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='btn btn-success'>
              Connexion
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='btn btn-danger'>
              Deconnexion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

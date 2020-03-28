import React from "react";

const HomePage = props => {
  return (
    <div className='jumbotron'>
      <h1 className='display-3'>Colla'Web</h1>
      <p className='lead'>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className='my-4' />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className='lead'>
        <a className='btn btn-primary btn-lg' href='#' role='button'>
          En savoir plus
        </a>
      </p>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <a href='#' className='btn btn-sucess'>
            Connexion
          </a>
        </li>
      </ul>
    </div>
  );
};
export default HomePage;

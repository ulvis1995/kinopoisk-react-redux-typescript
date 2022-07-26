import React from 'react';
import { FilmCartMenuProps } from '../typesProps';
import './filmCartMenu.scss';

const FilmCartMenu: React.FC<FilmCartMenuProps> = ({id, nameRu, nameOriginal, 
  poster, ratingKinopoisk, genres, type, onClickid}) => {
  const returnId = () => {
    const idFilm = id
    return onClickid(idFilm);
  };
  
  return (
    <div className='film-cart-menu' data-type={type} id={`${id}`}
    onClick={returnId}>
      <div className='film-cart-img-block'> 
        <img  className='film-cart-img' 
          src={poster} width='250px' height='375px' alt='Фото'/>
        {ratingKinopoisk === undefined 
          ? ''
          :<span className='film-cart-point'>
            {ratingKinopoisk !== null ? ratingKinopoisk : '**'}
          </span>}
      </div>
      <div className='film-cart-info'>
        <p className='film-cart-name'>{nameRu}{nameRu && nameOriginal ? '/' : ''}{nameOriginal}</p>
        {genres === undefined ? '' :<p className='film-cart-genre'>{genres}</p>}
      </div>
    </div>
  )
};

export default React.memo(FilmCartMenu);
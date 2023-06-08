import { Link, useLocation } from 'react-router-dom';
import { List } from './ListFilms.styled';
import PropTypes from 'prop-types';

export function ListFilms({ films }) {
  const location = useLocation();

  const standartImage =
  'http://dummyimage.com/150x60/99cccc.gif&text=The+image!';
  return (
    <List>
      {films.map(({ title, id, name, poster_path, backdrop_path }) => {
        return (
          <li key={id}>
            <Link
              to={location.pathname === '/' ? `movies/${id}` : `${id}`}
              state={{ from: location }}
              >
            <div>
              <img
              style={{ width: 200 }}
              src={
                poster_path || backdrop_path
                ? `https://image.tmdb.org/t/p/w200${
                  poster_path || backdrop_path
                }`
                : standartImage
              }
              alt={title ?? name}
              />
              </div>
              <div>
            {title ?? name}
              </div>
              </Link>
          </li>
        );
      })}
    </List>
  );
}

ListFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

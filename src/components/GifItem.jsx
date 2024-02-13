import { PropTypes} from 'prop-types';

export const GifItem = ( { id, url, title } ) => { 
  return (
    <div className="card">
      <img src={ url } alt={ title } aria-label="img-test" />
      <p>{ title }</p>
    </div>
  )
}


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

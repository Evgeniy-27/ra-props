import PropTypes from 'prop-types';
import shortid from 'shortid';

import Star from './Star';

function Stars(props) {

  const array = [1, 2, 3, 4, 5];
  const stars = array.map(() => <Star key={shortid.generate()} />);
  const { count } = props;

  return array.includes(count) && <ul className="card-body-stars u-clearfix">{stars.slice(0, count)}</ul>;
}

Stars.defaultProps = {
  count: 0
};

Stars.propTypes = {
  count: PropTypes.number
};

export default Stars;

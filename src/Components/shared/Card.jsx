import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  return (
    <div className= {`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.prototype ={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
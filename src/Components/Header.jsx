import PropTypes from 'prop-types';

const Header = ({ text, textColor, bgColor }) => {

    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback App',
    bgColor: '#07275A',
    textColor: '#FFF3DC'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
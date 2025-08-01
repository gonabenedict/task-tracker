import PropTypes from 'prop-types'
import Button from './button'


const Header = ({ title }) => {

    const onClick = () => {
        console.log('Button clicked');
    }
  return (
    <header className="Header">
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

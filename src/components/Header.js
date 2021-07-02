import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title,toggleTaskForm,showForm}) => (
    <header className='header'>
        <h1>{title}</h1>
        <Button color= {showForm ? 'red' : 'green' } text= {showForm ? 'Close' : 'Add'} onClick={toggleTaskForm} />
      
    </header>
)


Header.defaultProps = {
    title : 'Task Tracker'
}

//for prop type checking
Header.propTypes = {
    title : PropTypes.string
}

export default Header

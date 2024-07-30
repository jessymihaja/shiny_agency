import PropTypes from 'prop-types'
Card.defaultProps = {
    title: 'Mon titre par défaut',
}
function Card({ name,label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
            <span>{name}</span>
        </div>
    )
}
Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}
 
export default Card
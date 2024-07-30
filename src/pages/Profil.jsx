import { Component } from 'react'
 
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileData: {},
        }
    }
    componentDidMount() {
        const { id } = this.props
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8000/freelance?id=${id}`)
            const jsonResponse = await response.json()
            if (jsonResponse && jsonResponse.freelanceData) {
                this.setState({ profileData: jsonResponse?.freelanceData })
            }
        }
        fetchData()
    }
    render() {
        const { profileData } = this.state
        const {
            picture,
            name,
            location,
            tjm,
            job,
            skills,
            available,
            id,
        } = profileData
 
        return (
            <div>
                <img src={picture} alt={name} height={150} width={150} />
                <h1>{name}</h1>
                <span>{location}</span>
                <h2>{job}</h2>
                <div>
                    {skills &&
                        skills.map((skill) => (
                            <div key={`skill-${skill}-${id}`}>{skill}</div>
                    ))}
                </div>
                <div>{available ? 'Disponible maintenant' : 'Indisponible'}</div>
                <span>{tjm} € / jour</span>
            </div>
        )
    }
}
 
export default Profile
import { useParams } from 'react-router-dom'
import Profile from '../../pages/Profil'
function ProfileContainer() {
  const { id } = useParams()
  return <Profile id={id} />
}

export default ProfileContainer
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { useFetch } from "../utils/hooks";
import { Loader } from "../utils/Atoms";
function Freelance() {

  const { data, isDataLoading,error} = useFetch(`http://localhost:8000/freelances`)

    const { freelancersList } = data

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
    return (
        <div>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {isDataLoading ? 
              (<Loader/>) 
            :
            (freelancersList&&freelancersList.map((profile, index) => (
              <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                <Card
                  key={`${profile.name}-${index}`}
                  label={profile.job}
                  title={profile.name}
                  picture={profile.picture}
                />
              </Link>
          )))}
        </div>
    )
}
export default Freelance    ;
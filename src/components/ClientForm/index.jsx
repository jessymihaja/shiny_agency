import { Link, useParams } from "react-router-dom"

import { Loader } from "../../utils/Atoms"
import { useFetch } from "../../utils/hooks"
function ClientForm() {
    const {questionNumber}= useParams()
    var num=parseInt(questionNumber)
    var prevNum= num === 1 ? 1 : num - 1
    var nextNum= num + 1
 
    const { data, isLoading,error} = useFetch(`http://localhost:8000/survey`)

    const { surveyData } = data
    if (error) {

        return <span>Il y a un problème</span>
        
    }
    return (
      <div>
        <h2>Questionnaire Client</h2>
        <h2>question num {questionNumber}</h2>
        {isLoading ? (
        <Loader />
    ) : (
        <h3>{surveyData&&surveyData[num]}</h3>
    )}
        <Link to={`/survey/client/${prevNum}`}>Précédent</Link>      
        {surveyData&&surveyData[num+1] ? (
            <Link to={`/survey/client/${nextNum}`}>suivant</Link>
        ) : (
            <Link to={'/client/resultats'}>resultats</Link>
        )

        }
        </div>
    )
  }
  export default ClientForm
  
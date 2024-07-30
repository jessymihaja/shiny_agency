import { Outlet} from "react-router-dom"
import { Link } from "react-router-dom"
function Survey() {
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <Link to="client/5"> Questionnaire client</Link>
            <Link to="freelance"> Questionnaire freelance</Link>
            <Outlet />
        </div>
    )
}

export default Survey
import { Loader } from "../../utils/Atoms";

function Error(){
    return(
        <div>
            <h1>Oups 🙈 Cette page n'existe pas</h1>
            <Loader></Loader>
        </div>
    )
}
export default Error;
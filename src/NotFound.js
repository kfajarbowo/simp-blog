import {Link} from 'react-router-dom'
import Img from './3.png'
const NotFound = () =>{
    
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to homepage...</Link>
            <img src={Img} alt="Image"/>
        </div>
    )
}

export default NotFound;
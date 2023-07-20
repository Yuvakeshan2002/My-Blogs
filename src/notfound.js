import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="Not-found">

            <h2>Sorry</h2>
            <p>Requested page is not available</p>

            <Link to="/" style={{color:'#f1356d', backgroundColor:'white', border:'8px', borderRadius:'8px', textDecoration:'none'}}>Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;
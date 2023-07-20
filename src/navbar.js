import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>The dojo blog</h1>

            <div className="links" >  

                <Link to="/" style={
                    { color:"white", backgroundColor: "#f1356d", borderRadius:'8px'}
                }>Home</Link>

                <Link to="/create" style={
                    { color: "white", backgroundColor: "#f1356d", borderRadius: '8px' }
                }>New blogs</Link>

            </div>
        </div>
    );
}

export default NavBar;
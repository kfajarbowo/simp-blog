import {Link} from 'react-router-dom';
const Navbar = () =>{
return (
    <nav className="navbar">
        <h1>SIMP-blog</h1>
        <div className="sub-nav">
            <Link to="/">Home</Link>
            <Link to="/create">new-blog</Link>
        </div>
    </nav>
 );
}

export default Navbar;

import { Link } from "react-router-dom"

const Header = () =>{
    return(  
        <div className="header">
        <div>logo</div>
        <ul>
        <li><Link to = "/" >Home</Link></li>
        <li><Link to = "/About" >About</Link></li>
        <li><Link to = "/Contact" >Contact</Link></li>
        </ul>
        </div>

    )
}

export default Header
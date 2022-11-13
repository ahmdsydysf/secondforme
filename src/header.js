import './header.css';

function Header (props) {
     return (
          <nav>
               <div className="logo">{props.logoName}</div>
               <div className="links">
                    <ul>
                         <li>{props.link1}</li>
                         <li>{props.link2[0]}</li>
                         <li>{props.link2[1]}</li>
                         <li>{props.link3}</li>
                    </ul>
               </div>
          </nav>
     )
}

export default Header;
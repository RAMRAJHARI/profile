import {react} from 'react';
import '../NavBar/navbar.scss';

const Navbar = (props) =>{
const menu = ['About','Contact']

    return(
        <nav className='navbar'>
            <div className='navbar__name'>
                {props.name}
            </div>
                <ul className='navbar__item'>
                   {menu.map((item)=>(
                    <li key={item}>{item}</li>
                   ))}
                </ul>
        </nav>
    )
}

export default Navbar;
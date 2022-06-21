import Link from 'next/link'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

// Top navbar


export default function Navbar() {

    return (
        // <nav className='navbar'>

        // </nav>
        <nav className='navbar' >
            <ul>
                <li>
                    <Link href="/">
                        <a style={{display: 'flex', alignItems: 'center', color: "white"}}>
                            <img src="/logo.svg" height={40} width={40}/> <span
                            style={{marginLeft: 10, marginTop: 7, fontSize: 20, color: "darkblue"}}>Jorge Moreno</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#skills">
                        <a>Skills</a>
                    </Link>
                </li>
                <li>
                    <Link href="#experience">
                        Experience
                    </Link>
                </li>
                <li>
                    <a className="social" href="https://github.com/jorgemorenop">
                        <AiFillGithub size="3rem"/>
                    </a>
                </li>
                <li>
                    <a className="social" href="https://www.linkedin.com/in/jorgemorenop/">
                        <AiFillLinkedin size="3rem"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
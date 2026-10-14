import {Element} from "react-scroll";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="bg-white w-full shadow-md p-10 mt-8">
            <Element name="contact">
                <h2>Contact me</h2>
                <p>
                    Feel free to get in touch if you think I could help with anything you have.
                </p>
                <p className="mt-2">
                    <b>Email:</b> <a className="link" href="mailto:jorgemorenodev@gmail.com">jorgemorenodev@gmail.com</a>
                </p>
                <div className="flex gap-x-2 mt-4 text-gray-500">
                    <a href="https://github.com/jorgemorenop" aria-label="GitHub" className="hover:text-gray-900">
                        <AiFillGithub size="2.5rem"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jorgemorenop/" aria-label="LinkedIn" className="hover:text-gray-900">
                        <AiFillLinkedin size="2.5rem"/>
                    </a>
                    <a href="mailto:jorgemorenodev@gmail.com" aria-label="Email" className="hover:text-gray-900">
                        <AiOutlineMail size="2.5rem"/>
                    </a>
                </div>
            </Element>
        </footer>
    )
}

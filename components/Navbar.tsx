import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import Link from 'next/link'
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MdMenu as MenuIcon} from "react-icons/md";

const menuItems = [
    {
        path: "about",
        label: "About me",
    },
    {
        path: "skills",
        label: "Skills and certifications",
    },
    {
        path: "experience",
        label: "Experience",
    },
    {
        path: "contact",
        label: "Contact",
    },
]


export default function Navbar() {
    const SectionLink = ({path, label, isPopover = false}) => {
        const linkAttrs = {
            activeClass: "active",
            to: path,
            spy: true,
            smooth: true,
            offset: -100,
            duration: 500,
            key: label,
            children: label,
        }
        return (
            isPopover ? <Popover.Button as={ScrollLink} {...linkAttrs} /> : <ScrollLink {...linkAttrs} />
        )
    }



    return (
        <header className="sticky top-0 z-50">
            <Popover className="bg-white fixed relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div
                        className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        {/*<ScrollLink*/}
                        {/*    activeClass="active"*/}
                        {/*    spy={true}*/}
                        {/*    smooth={true}*/}
                        {/*    offset={-100}*/}
                        {/*    duration={500}*/}
                        {/*    to="home"*/}
                        {/*>*/}
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                {/*<img*/}
                                {/*    className="h-8 w-auto sm:h-10 rounded-full"*/}
                                {/*    src="/profile_image.jpeg"*/}
                                {/*    alt=""*/}
                                {/*/>*/}
                                <p className="m-1.5">
                                <Link href="/">
                                    Jorge Moreno
                                </Link>
                                </p>

                            </div>

                        {/*</ScrollLink>*/}

                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">


                            {menuItems.map(SectionLink)}

                        </Popover.Group>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="https://github.com/jorgemorenop"
                               className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                <AiFillGithub size="3rem"/>
                            </a>
                            <a href="https://www.linkedin.com/in/jorgemorenop/"
                               className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 ml-2">
                                <AiFillLinkedin size="3rem"/>
                            </a>
                            <a href="mailto:jorgemorenodev@gmail.com"
                               className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 ml-2">
                                <AiOutlineMail size="3rem"/>
                            </a>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus
                                   className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    {menuItems.map((x) => SectionLink({...x, isPopover: true}))}
                                </div>
                                <div className="grid grid-cols-8 gap-y-4 gap-x-2">
                                    <a href="https://github.com/jorgemorenop"
                                       className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                        <AiFillGithub size="3rem"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jorgemorenop/"
                                       className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 ml-2">
                                        <AiFillLinkedin size="3rem"/>
                                    </a>
                                    <a href="mailto:jorgemorenodev@gmail.com"
                                       className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 ml-2">
                                        <AiOutlineMail size="3rem"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

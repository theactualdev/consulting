'use client'
import { FaPhone, FaEnvelope, FaBars } from "react-icons/fa"
import { Inter } from "next/font/google"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { linksArr, links } from "../links";


const inter = Inter({ subsets: ["latin"] });

const phoneNumber = "+98 558 547 589";
const email = "demo@example.com";

const initialLinks = [
    {act: false, title: "Home", href: "/"},
    {act: false, title: "About", href: "#about"},
    {act: false, title: "Services", href: "#services"},
    {act: false, title: "Blog", href: "/blog"},
    {act: false, title: "Careers", href: "#careers"},
    {act: false, title: "Contact", href: "#contact"}
]

export default function Navbar(){
    const pathName = usePathname();
    const [link, setLink] = useState(initialLinks);
    const [menu, setMenu] = useState("hidden");

    useEffect(() => {
        const updatedLinks = link.map(link => ({
            ...link,
            act: link.href === pathName
        }));
        setLink(updatedLinks);
        console.log(updatedLinks)
    }, [pathName]);

    return(
        <div className="flex flex-col gap-4 absolute z-10 w-full items-center">
            <div className={`text-white md:flex-row flex-col gap-6 md:gap-0 text-sm ${inter.className} flex w-[90%] justify-between items-center`}>
                <div className="flex gap-8 items-center">
                    <a referrerPolicy="no-referrer" target="_blank" href={`tel:${phoneNumber}`} className="flex items-center gap-2 cursor-pointer"><FaPhone color="white" /> {phoneNumber} </a>
                    <a referrerPolicy="no-referrer" target="_blank" href={`mailto:${email}`} className="flex items-center gap-2 cursor-pointer"><FaEnvelope color="white" /> {email} </a>
                </div>
                <div className="flex gap-8">
                    {linksArr.map((link : links, index) => (
                        <Link href={link.href} target="_blank" referrerPolicy="no-referrer" key={index} className="text-xl">
                            <p className="text-white">{<link.icon />}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <nav className="bg-[#172127CC] relative flex items-center justify-between p-8 w-[90%]">
                <div className="logo">
                    <p className="text-white font-bold text-lg md:text-4xl">Tobs Partners</p>
                </div>
                <div className="links">
                    <ul className={`md:flex ${menu} md:static absolute left-0 pl-10 md:flex-row flex-col -bottom-96 md:pl-0 md:bg-transparent bg-[#172127CC] w-full gap-8 uppercase text-white`}>
                        {link.map((link, index) => (
                            <li key={index} className={`hover:text-[#03A6F1] ${link.act && "text-[#03A6F1] md:after:w-[100%]"} after:transition-all md:after:bg-[#03A6F1] transition-all hover:after:w-[100%] after:h-[2px] after:rounded-[16px] after:absolute relative after:top-[60px]`}>
                                <Link href={link.href}>
                                    <p className="pt-5">{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:hidden">
                    <FaBars onClick={() => menu === "hidden" ? setMenu("flex") : setMenu("hidden")}/>
                </div>
            </nav>
        </div>
    )
}
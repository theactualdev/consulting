'use client'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"
import { Inter } from "next/font/google"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const phoneNumber = "+98 558 547 589";
const email = "demo@example.com";

const links = [
    {href: "https://www.facebook.com", icon: <FaFacebook />},
    {href: "https://www.twitter.com", icon: <FaTwitter />},
    {href: "https://www.instagram.com", icon: <FaInstagram />},
    {href: "https://www.pinterest.com", icon: <FaPinterest />}
]

const initialLinks = [
    {act: false, title: "Home", href: "/"},
    {act: false, title: "About", href: "/about"},
    {act: false, title: "Services", href: "/services"},
    {act: false, title: "Blog", href: "/blog"},
    {act: false, title: "Careers", href: "/careers"},
    {act: false, title: "Contact", href: "/contact"}
]

export default function Navbar(){
    const pathName = usePathname();
    const [link, setLink] = useState(initialLinks);

    useEffect(() => {
        const updatedLinks = link.map(link => ({
            ...link,
            act: link.href === pathName
        }));
        setLink(updatedLinks);
        console.log(updatedLinks)
    }, [pathName]);

    return(
        console.log(pathName, link ),
        <div className="flex flex-col gap-4 absolute w-full items-center">
            <div className={`text-white text-sm ${inter.className} flex w-[90%] justify-between items-center`}>
                <div className="flex gap-8 items-center">
                    <a referrerPolicy="no-referrer" target="_blank" href={`tel:${phoneNumber}`} className="flex items-center gap-2 cursor-pointer"><FaPhone color="white" /> {phoneNumber} </a>
                    <a referrerPolicy="no-referrer" target="_blank" href={`mailto:${email}`} className="flex items-center gap-2 cursor-pointer"><FaEnvelope color="white" /> {email} </a>
                </div>
                <div className="flex gap-8">
                    {links.map((link, index) => (
                        <Link href={link.href} target="_blank" referrerPolicy="no-referrer" key={index} className="text-xl">
                            <p className="text-white">{link.icon}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <nav className="bg-[#172127CC] flex items-center justify-between p-8 w-[90%]">
                <div className="logo">
                    <p className="text-white font-bold text-4xl">Tobs Partners</p>
                </div>
                <div className="links">
                    <ul className="flex gap-8 uppercase text-white">
                        {link.map((link, index) => (
                            <li key={index} className={`hover:text-[#03A6F1] ${link.act && "text-[#03A6F1] after:w-[100%]"} after:transition-all after:bg-[#03A6F1] transition-all hover:after:w-[100%] after:h-[2px] after:rounded-[16px] after:absolute relative after:top-[60px]`}>
                                <Link href={link.href}>
                                    <p>{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
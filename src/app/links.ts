import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"
import { IconType } from "react-icons"

export interface links {
    href: string,
    icon: IconType,
}

export const linksArr: links[] = [
    {href: "https://www.facebook.com", icon: FaFacebook },
    {href: "https://www.twitter.com", icon: FaTwitter },
    {href: "https://www.instagram.com", icon: FaInstagram },
    {href: "https://www.pinterest.com", icon: FaPinterest },
]
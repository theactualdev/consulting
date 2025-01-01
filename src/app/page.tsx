'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaChartBar, FaChartArea } from "react-icons/fa";
import image from "../../public/images/pexels1.jpg"
import { useState } from "react";
import { linksArr, links } from "./links";

const services = [
  {url: "/images/pexels-mart-production-7709306.jpg", head: "Business", text: "Nor again is there anyone who loves amir"},
  {url: "/images/pexels-mart-production-7709306.jpg", head: "Travel", text: "If you are going to use a pass of Lorem Ipsum you"},
  {url: "/images/pexels-mart-production-7709306.jpg", head: "Environment", text: "Sed ut perspiciatis unde omn iste natus error sit."},
  {url: "/images/pexels-mart-production-7709306.jpg", head: "Financial", text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do"}
]

export default function Home() {
  const [aboutState, setAboutState] = useState("hidden");
  const [aboutS, setAboutS] = useState("hidden");

  return (
    <div>
      <Head>
        <title>Consulting Site</title>
        <meta property="og:title" content="Consulting Site" />
        <meta property="og:description" content="Welcome to my consulting site!" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://consulting-ashy.vercel.app/" />
      </Head>
      <div className={`hero bg-[url(/images/pexels1.jpg)] bg-cover h-screen backdrop-blur-md bg-center relative`}>
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <div className="md:pt-64 pl-[5%] pt-80 flex flex-col gap-4 md:gap-16">
          <div className="flex flex-col gap-4 text-white">
            <h1 className="md:text-[80px] text-30px  font-extrabold">Your Trusted Partner</h1>
            <p className="md:text-xl text-sm md:max-w-[1000px] max-w-[270px] italic font-bold"> for Business, Financial, and Operational Solutions</p>
          </div>
          <Link href="/contact" className="bg-[#03A6F1] text-white p-4 rounded-lg w-fit border border-[#03A6F1] hover:text-[#03A6F1] transition-all hover:bg-white"> Contact Us </Link>
        </div>
      </div>

      <section id="about" className="px-[5%] flex md:flex-row flex-col mt-4 md:mt-0 gap-8 md:gap-0 items-center justify-around md:py-16">
        <div className="text flex flex-col max-w-[320px] gap-3">
          <p className="text-[#03A6F1] lowercase text-xl">About Us</p>
          <h2 className="font-extrabold text-2xl uppercase">Who we are</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. There are many variations of passages of Lorem.</p>
          <Link href={"/about"} className="border border-[#03A6F1] hover:bg-[#03A6F1] transition-all w-fit py-3 px-8 hover:text-white uppercase rounded-full text-[#03A6F1]">About Us</Link>
        </div>
        <div className="images gap-8 flex md:flex-row flex-col">
          <div className="relative cursor-pointer" onMouseOver={() => setAboutState("flex")} onMouseLeave={() => setAboutState('hidden')} >
            <Image src={image} width={400} height={400} className="cursor-pointer transition-all" alt="aboutImg"/>
            <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
              <p className="head flex gap-2 items-center text-xl font-extralight text-white">
                <FaChartBar /> | Our Mission
              </p>
              <div className={`pt-4 ${aboutState} transition-all flex-col gap-4`}>
                <p>Lorem ipsum dolor sit amet, ctur scing elit, sed do eiuste incididu labore et dolore magna.</p>
                <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">Read More</p>
              </div>
            </div>
          </div>
          <div className="relative cursor-pointer" onMouseOver={() => setAboutS("flex")} onMouseLeave={() => setAboutS('hidden')} >
            <Image src={image} className="cursor-pointer transition-all" alt="about" width={400} height={400}/>
            <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
              <p className="head flex gap-2 items-center text-xl font-extralight text-white">
                <FaChartArea /> | Analyze your Business
              </p>
              <div className={`pt-4 ${aboutS} transition-all flex-col gap-4`}>
                <p>Lorem ipsum dolor sit amet, ctur scing elit, sed do eiuste incididu labore et dolore magna.</p>
                <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="product flex flex-col justify-center py-16 px-[5%]">
        <div className="head flex items-center md:flex-row flex-col justify-between">
          <div className="text flex flex-col gap-2">
            <p className="text-[#03A6F1] text-xl">our services</p>
            <h3 className="font-extrabold text-4xl uppercase">Our services</h3>
          </div>
          <ul className="md:flex hidden gap-8">
            <li className="text-[#03A6F1]">All</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Financial</li>
            <li>Environment</li>
          </ul>
        </div>

        <div className="body mt-16 justify-between md:flex-row flex-col items-center gap-4 md:gap-0 flex">
          {services.map((item, index) => (
            <div className="max-w-[300px] cursor-pointer flex flex-col gap-2" key={index}>
              <Image width={300} height={300} src={item.url} alt={item.head} />
              <h3 className="font-extralight text-gray-700 text-sm"> {item.head} </h3>
              <p className="text-xl text-gray-700"> {item.text} </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact flex bg-black backdrop-blur-md flex-col bg-[url(/images/pexels-mart-production-7709306.jpg)] bg-cover py-32 text-white bg-center bg-no-repeat items-center gap-4">
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <h2 className="md:text-3xl text-lg font-extrabold">Wanna Talk To Us?</h2>
        <p className="max-w-[560px] text-center text-sm px-4 md:px-0 md:text-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.</p>
        <Link href={`mailto:theolayinkayodele@gmail.com`} className="py-4 md:text-base text-sm px-8 bg-[#03A6F1] rounded-full">Contact Us</Link>
      </section>

      <footer className="bg-gray-900 flex md:flex-row flex-col gap-16 md:gap-0 justify-around text-white md:px-32 px-4 py-24">
        <div className="col max-w-[500px] flex flex-col gap-6">
          <p className="logo text-2xl font-bold">CONSULTI</p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consect ascing elit, sed do eiusmod incididunt ut labore et dolore Many desktop lishing packages and web page editors</p>
          <ul className="flex gap-4">
            {linksArr.map((link: links, index) => (
              <li className="text-sm" key={index}><Link href={link.href}> {<link.icon />} </Link></li>
            ))}
          </ul>
        </div>
        <div className="col max-w-[500px] flex flex-col gap-6">
          <p className="logo text-2xl font-bold after:w-[20%] after:h-[1px] after:bg-white after:absolute w-fit after:right-0 after:bottom-0 relative">Quick Links!</p>
          <ul className="flex gap-4 flex-col">
            <li><Link href={"#about"}>About Us</Link></li>
            <li><Link href={"#about"}>Services</Link></li>
            <li><Link href={"#contact"}>Contact</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

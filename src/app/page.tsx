"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChartBar } from "react-icons/fa";
import { useState } from "react";
import { linksArr, links } from "./links";

export default function Home() {
  const [aboutState, setAboutState] = useState("hidden");
  const [aboutS, setAboutS] = useState("hidden");
  const [aboutSt, setAboutSt] = useState("hidden");
  const [aboutSta, setAboutSta] = useState("hidden");

  return (
    <div>
      <div
        className={`hero bg-[url(/side-view-businesswoman-showing-analytical-charts-her-male-coworker.jpg)] bg-cover h-screen backdrop-blur-md bg-center relative`}
      >
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <div className="md:pt-64 pl-[5%] pt-80 flex flex-col gap-4 md:gap-16">
          <div className="flex flex-col gap-4 text-white">
            <h1 className="md:text-[80px] text-30px  font-extrabold">
              Your Trusted Partner
            </h1>
            <p className="md:text-xl text-sm md:max-w-[500px] max-w-[270px] italic font-bold">
              {" "}
              for Business and Management Consulting | Audit Assurance and Tax Services | Trading and General Services | Agribusiness
            </p>
          </div>
          <Link
            href="/"
            className="bg-[#03A6F1] text-white p-4 rounded-lg w-fit border border-[#03A6F1] hover:text-[#03A6F1] transition-all hover:bg-white"
          >
            {" "}
            Contact Us{" "}
          </Link>
        </div>
      </div>

      <section
        id="about"
        className="px-[5%] flex md:flex-row flex-col mt-4 md:mt-0 gap-8 md:gap-0 items-center justify-around md:py-16"
      >
        <div className="text flex flex-col max-w-[320px] gap-3">
          <p className="text-[#03A6F1] lowercase text-xl">About Us</p>
          <h2 className="font-extrabold text-2xl uppercase">Who we are</h2>
          <p>
          We are Your Trusted Partner for Business, Financial, and Operational Solutions. Our mission is to empower businesses of all sizes to achieve their goals through innovative strategies, tailored solutions, and expert guidance.
          </p>
          <Link
            href={"/"}
            className="border border-[#03A6F1] hover:bg-[#03A6F1] transition-all w-fit py-3 px-8 hover:text-white uppercase rounded-full text-[#03A6F1]"
          >
            About Us
          </Link>
        </div>
        <div className="images gap-8 flex md:flex-row flex-col overflow-hidden max-w-[900px]">
          <div className="scroll mb-10 md:mb-0 md:flex-row flex-col flex whitespace-nowrap gap-8">
            <div
              className="relative cursor-pointer flex-shrink-0"
              onMouseOver={() => setAboutS("flex")}
              onMouseLeave={() => setAboutS("hidden")}
            >
              <Image
                src={`/side-view-businesswoman-showing-analytical-charts-her-male-coworker.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Business and Management Consulting
                </p>
                <div
                  className={`pt-4 ${aboutS} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Business strategy development</p>
                    <p className="text-xs">• Operational efficiency and process optimization</p>
                    <p className="text-xs">• Financial planning and budgeting</p>
                    <p className="text-xs">• Change management and organizational restructuring.</p>
                    <p className="text-xs">• Risk management frameworks</p>
                    <p className="text-xs">• Market research and feasibility studies</p>
                    <p className="text-xs">• Project management and advisory</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="relative flex-shrink-0 cursor-pointer"
              onMouseOver={() => setAboutState("flex")}
              onMouseLeave={() => setAboutState("hidden")}
            >
              <Image
                src={`/happy-african-american-office-workers-dressed-formal-clothing-having-cheerful-looks-studying-amalyzing-legal-documents-table-using-magnifying-glass-while-getting-papers-ready-meeting.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Audit, Assurance, and Tax Services
                </p>
                <div
                  className={`pt-4 ${aboutState} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Statutory and internal audits</p>
                    <p className="text-xs">• Financial statement preparation and review</p>
                    <p className="text-xs">• Risk-based auditing</p>
                    <p className="text-xs">• Tax compliance and advisory</p>
                    <p className="text-xs">• Tax planning and optimization strategies</p>
                    <p className="text-xs">• VAT, PAYE, and corporate tax filing</p>
                    <p className="text-xs">• Assurance services for regulatory compliance</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="relative cursor-pointer flex-shrink-0"
              onMouseOver={() => setAboutSt("flex")}
              onMouseLeave={() => setAboutSt("hidden")}
            >
              <Image
                src={`/hedge-fund-trader-analyzing-real-time-stock-market-sales-statistics-using-global-trade-exchange-make-business-investment-following-capital-index-trend-with-forex-trading-night.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Trading and General Services
                </p>
                <div
                  className={`pt-4 ${aboutSt} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Supply chain management and logistics</p>
                    <p className="text-xs">• Procurement and sourcing of goods</p>
                    <p className="text-xs">• Distribution of consumer and industrial products</p>
                    <p className="text-xs">• General contracting and business support services</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="relative cursor-pointer flex-shrink-0"
              onMouseOver={() => setAboutSta("flex")}
              onMouseLeave={() => setAboutSta("hidden")}
            >
              <Image
                src={`/medium-shot-smiley-women-farming.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Agribusiness
                </p>
                <div
                  className={`pt-4 ${aboutSta} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Agricultural investment advisory</p>
                    <p className="text-xs">• Agribusiness value chain development</p>
                    <p className="text-xs">• Crop production and distribution</p>
                    <p className="text-xs">• Agro-processing and packaging solutions</p>
                    <p className="text-xs">• Sustainable farming practices consulting</p>
                    <p className="text-xs">• Market linkage for agricultural products</p>
                    <p className="text-xs">• Training and capacity building for farmers</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="relative hidden md:block cursor-pointer flex-shrink-0"
              onMouseOver={() => setAboutS("flex")}
              onMouseLeave={() => setAboutS("hidden")}
            >
              <Image
                src={`/side-view-businesswoman-showing-analytical-charts-her-male-coworker.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Business and Management Consulting
                </p>
                <div
                  className={`pt-4 ${aboutS} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Business strategy development</p>
                    <p className="text-xs">• Operational efficiency and process optimization</p>
                    <p className="text-xs">• Financial planning and budgeting</p>
                    <p className="text-xs">• Change management and organizational restructuring.</p>
                    <p className="text-xs">• Risk management frameworks</p>
                    <p className="text-xs">• Market research and feasibility studies</p>
                    <p className="text-xs">• Project management and advisory</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="relative hidden md:block flex-shrink-0 cursor-pointer"
              onMouseOver={() => setAboutState("flex")}
              onMouseLeave={() => setAboutState("hidden")}
            >
              <Image
                src={`/happy-african-american-office-workers-dressed-formal-clothing-having-cheerful-looks-studying-amalyzing-legal-documents-table-using-magnifying-glass-while-getting-papers-ready-meeting.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Audit, Assurance, and Tax Services
                </p>
                <div
                  className={`pt-4 ${aboutState} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Statutory and internal audits</p>
                    <p className="text-xs">• Financial statement preparation and review</p>
                    <p className="text-xs">• Risk-based auditing</p>
                    <p className="text-xs">• Tax compliance and advisory</p>
                    <p className="text-xs">• Tax planning and optimization strategies</p>
                    <p className="text-xs">• VAT, PAYE, and corporate tax filing</p>
                    <p className="text-xs">• Assurance services for regulatory compliance</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="relative hidden md:block cursor-pointer flex-shrink-0"
              onMouseOver={() => setAboutSt("flex")}
              onMouseLeave={() => setAboutSt("hidden")}
            >
              <Image
                src={`/hedge-fund-trader-analyzing-real-time-stock-market-sales-statistics-using-global-trade-exchange-make-business-investment-following-capital-index-trend-with-forex-trading-night.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Trading and General Services
                </p>
                <div
                  className={`pt-4 ${aboutSt} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Supply chain management and logistics</p>
                    <p className="text-xs">• Procurement and sourcing of goods</p>
                    <p className="text-xs">• Distribution of consumer and industrial products</p>
                    <p className="text-xs">• General contracting and business support services</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="relative hidden md:block cursor-pointer flex-shrink-0"
              onMouseOver={() => setAboutSta("flex")}
              onMouseLeave={() => setAboutSta("hidden")}
            >
              <Image
                src={`/medium-shot-smiley-women-farming.jpg`}
                width={400}
                height={400}
                className="cursor-pointer transition-all"
                alt="aboutImg"
              />
              <div className="text text-white bottom-0 bg-[#03A6F1B3] p-3 w-full pl-10 absolute">
                <p className="head flex gap-2 items-center text-base font-extralight text-white">
                  <FaChartBar /> | Agribusiness
                </p>
                <div
                  className={`pt-4 ${aboutSta} transition-all flex-col gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">• Agricultural investment advisory</p>
                    <p className="text-xs">• Agribusiness value chain development</p>
                    <p className="text-xs">• Crop production and distribution</p>
                    <p className="text-xs">• Agro-processing and packaging solutions</p>
                    <p className="text-xs">• Sustainable farming practices consulting</p>
                    <p className="text-xs">• Market linkage for agricultural products</p>
                    <p className="text-xs">• Training and capacity building for farmers</p>
                  </div>
                  {/* <p className="after:bg-white after:w-[20%] after:h-[1px] after:absolute after:bottom-0 after:left-0 relative w-fit">
                    Read More
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="services"
        className="product flex flex-col justify-center py-16 px-[5%]"
      >
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
            <div
              className="max-w-[300px] cursor-pointer flex flex-col gap-2"
              key={index}
            >
              <Image width={300} height={300} src={item.url} alt={item.head} />
              <h3 className="font-extralight text-gray-700 text-sm">
                {" "}
                {item.head}{" "}
              </h3>
              <p className="text-xl text-gray-700"> {item.text} </p>
            </div>
          ))}
        </div>
      </section> */}

      <section
        id="contact"
        className="contact flex bg-black backdrop-blur-md flex-col bg-[url(/portrait-man-practicing-his-profession-celebrate-international-labour-day.jpg)] bg-cover py-32 text-white bg-center bg-no-repeat items-center gap-4"
      >
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <h2 className="md:text-3xl text-lg font-extrabold">
          Wanna Talk To Us?
        </h2>
        <p className="max-w-[560px] text-center text-sm px-4 md:px-0 md:text-xl">
        Partner with us to transform challenges into opportunities and drive your business forward with confidence.
        </p>
        <Link
          href={`mailto:theolayinkayodele@gmail.com`}
          className="py-4 md:text-base text-sm px-8 bg-[#03A6F1] rounded-full"
        >
          Contact Us
        </Link>
      </section>

      <footer className="bg-gray-900 flex md:flex-row flex-col gap-16 md:gap-0 justify-around text-white md:px-32 px-4 py-24">
        <div className="col max-w-[500px] flex flex-col gap-6">
          <p className="logo text-2xl font-bold">CONSULTI</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consect ascing elit, sed do eiusmod
            incididunt ut labore et dolore Many desktop lishing packages and web
            page editors
          </p>
          <ul className="flex gap-4">
            {linksArr.map((link: links, index) => (
              <li className="text-sm" key={index}>
                <Link href={link.href}> {<link.icon />} </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col max-w-[500px] flex flex-col gap-6">
          <p className="logo text-2xl font-bold after:w-[20%] after:h-[1px] after:bg-white after:absolute w-fit after:right-0 after:bottom-0 relative">
            Quick Links!
          </p>
          <ul className="flex gap-4 flex-col">
            <li>
              <Link href={"#about"}>About Us</Link>
            </li>
            <li>
              <Link href={"#about"}>Services</Link>
            </li>
            <li>
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import image from "@/../public/images/pexels1.jpg"

export default function Home() {
  return (
    <div>
      <div className="hero relative">
        <div className="wallpaper relative -z-10">
          <Image src={image} alt="wallpaper" className="absolute" />
        </div>
        <div className="pt-64 pl-[5%] flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-white">
            <h1 className="text-[80px] font-extrabold">Your Trusted Partner</h1>
            <p className="text-xl italic font-bold"> for Business, Financial, and Operational Solutions</p>
          </div>
          <Link href="/contact" className="bg-[#03A6F1] text-white p-4 rounded-lg w-fit border border-[#03A6F1] hover:text-[#03A6F1] transition-all hover:bg-white"> Contact Us </Link>
        </div>
      </div>

      <section id="about">
        <div className="text">
          <p>About Us</p>
          <h2>Who we are</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. There are many variations of passages of Lorem.</p>
          <Link href={"/about"}>About Us</Link>
        </div>
      </section>
    </div>
  );
}

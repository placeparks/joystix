import Image from "next/image";
import FooterBg from "@/public/imgs/footer-bg.png";
import AppLogo from "@/public/imgs/logo.png";
import { footerLinks, socials } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-20">
      <Image src={FooterBg} alt="img" fill className="object-cover -z-20" />
      <div className="container space-y-6">
        <div className="flex flex-col gap-12 px-4 pb-12 border-b rounded-b-3xl border-[#FC3500]">
          <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between">
            <Image src={AppLogo} alt="img" />
            <ul className="flex gap-4">
              {socials.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.image} alt="img"     width={32}
                height={32}/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="inline-grid grid-cols-2 gap-4">
              {footerLinks.map((item, index) => (
                <Link href={item.link} key={index} className="text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <p className="text-center text-white">© 2024 Joystix. All rights reserved.</p>
      </div>
    </footer>
  );
}

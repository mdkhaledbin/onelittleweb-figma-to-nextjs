import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS } from "@/lib/constants";
import { FacebookIcon } from "@/components/footer/FacebookIcon";
import { GithubIcon } from "@/components/footer/GitHubIcon";
import { InstagramIcon } from "@/components/footer/InstagramIcon";
import { TwitterIcon } from "@/components/footer/TwitterIcon";
import GoogleIcon from "@/public/navbar/logo.png";
import Wrapper from "@/components/common/Wrapper";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-t border-[#d6d6d6] bg-white py-10 md:py-16">
        <Wrapper className="flex flex-col gap-12 lg:flex-row lg:justify-between items-start">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Image src={GoogleIcon} alt="Google logo" width={106} height={38} />
            <p className="mt-6 max-w-99 text-sm leading-[1.55] text-[#52525b]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="mt-8 flex items-center gap-7 text-[#27272a]">
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-brand"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-brand"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-brand"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="hover:text-brand"
              >
                <GithubIcon />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row sm:gap-20 md:gap-24 lg:gap-36 xl:gap-50 items-center mx-auto text-center lg:justify-end">
            {FOOTER_COLUMNS.map((column) => (
              <div
                key={column.title}
                className="flex flex-col items-center text-center justify-end sm:items-start sm:text-left"
              >
                <h3 className="font-bold mb-6 text-base leading-6 text-[#18181b]">
                  {column.title}
                </h3>
                <ul className="flex flex-col items-center gap-y-3 lg:mt-0 sm:items-start mx-auto w-40">
                  {column.links.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm font-medium pt-5 leading-5 text-[#18181b] hover:text-brand"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>

      <div className="bg-[#230b41] py-4.5">
        <p className="text-center font-poppins text-sm leading-5.5 text-white">
          © Copyright 2024, All Rights Reserved by XYz
        </p>
      </div>
    </footer>
  );
}

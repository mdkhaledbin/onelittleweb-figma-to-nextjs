"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/public/navbar/logo.png";
import Button from "@/components/common/Button";
import Wrapper from "@/components/common/Wrapper";
import { NAV_LINKS } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/icon/ArrowRightIcon";
import { MenuIcon } from "@/components/icon/MenuIcon";
import { XIcon } from "@/components/icon/XIcon";
import { clsx } from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeHref = "#home";

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 h-22.25 border-b border-[#f3d7e0] bg-white shadow-[0_4px_62px_0_rgba(250,196,210,0.63)]">
      <Wrapper className="h-full">
        <div className="flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            className="z-50 transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <Image
              src={logo}
              alt="Airbnb Assistant Logo"
              width={125}
              height={45}
              className="w-25 md:w-31.25 h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6.25 lg:flex mx-auto justify-between">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "relative text-lg leading-normal transition-all duration-300 group hover:-translate-y-0.5",
                  activeHref === link.href
                    ? "font-bold text-[#ED3C6A]"
                    : "font-normal text-[#1e1e1e]",
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-0.5 bg-[#ED3C6A] transition-all duration-300",
                    activeHref === link.href ? "w-full hover:scale-110" : "w-0",
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button size="lg" className="gap-2">
              Schedule A Meeting
              <ArrowRightIcon className="text-white" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="z-50 p-2 lg:hidden text-[#1e1e1e] hover:text-[#ED3C6A] transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <XIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </Wrapper>

      {/* Mobile Navigation Drawer */}
      <div
        className={clsx(
          "fixed inset-0 top-0 z-40 h-screen w-full bg-white transition-all duration-500 lg:hidden",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <div className="flex flex-col items-center gap-6 w-full max-w-70">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "text-2xl transition-all duration-300",
                  activeHref === link.href
                    ? "font-bold text-[#ED3C6A]"
                    : "font-normal text-[#1e1e1e] hover:text-[#ED3C6A]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 w-full max-w-70">
            <Button
              size="lg"
              className="w-full gap-2 text-lg justify-center h-14"
              onClick={() => setIsOpen(false)}
            >
              Schedule A Meeting
              <ArrowRightIcon className="text-white" />
            </Button>
          </div>
        </div>

        {/* Subtle Decorative Elements for Premium Feel */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
          © 2026 Airbnb Assistant
        </div>
      </div>
    </header>
  );
};

export default Navbar;

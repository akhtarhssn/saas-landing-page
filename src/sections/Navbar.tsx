"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

import logoImage from "@/assets/images/logo.svg";
import { Button } from "@/components/button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" }
];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="md:container px-5 md:px-0 max-w-5xl">
                    <div
                        className={twMerge("border border-white/15 rounded-full bg-neutral-950/70 backdrop-blur-sm transition", isOpen && "rounded-3xl")}>
                        <div
                            className="grid grid-cols-2 lg:grid-cols-3 py-2 px-4 md:px-2 items-center ">
                            {/*logo*/}
                            <div>
                                <Image src={logoImage} alt="logo" className="h-9 w-auto" />
                            </div>

                            {/*menu Items*/}
                            <div className="hidden lg:flex justify-center items-center">
                                <nav className="lg:flex justify-between items-center gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <Link key={link.label} href={link.href}> {link?.label} </Link>
                                    ))}
                                </nav>
                            </div>

                            {/*menu Icon*/}
                            <div className="flex justify-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu block md:hidden cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line x1="3" y1="6" x2="21" y2="6"
                                          className={twMerge("origin-left transition", isOpen && "rotate-45 -translate-y-1")}></line>
                                    <line x1="3" y1="12" x2="21" y2="12"
                                          className={twMerge("transition ", isOpen && "opacity-0")}></line>
                                    <line x1="3" y1="18" x2="21" y2="18"
                                          className={twMerge("origin-left transition", isOpen && "-rotate-45 translate-y-1")}></line>
                                </svg>
                                {/*auth button*/}
                                <div className="hidden md:flex items-center gap-5">
                                    <Button variant="secondary">Log In</Button>
                                    <Button variant="primary">Sign Up</Button>
                                </div>
                            </div>
                        </div>
                        {/*    mobile nav links*/}
                        <AnimatePresence>
                            {
                                isOpen && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col items-center gap-4 py-4 ">
                                            {
                                                navLinks.map((nav, index) => (
                                                        <Link
                                                            key={index}
                                                            href={nav?.href}
                                                            className="hover:text-lime-400 transition"
                                                        >{nav?.label}</Link>
                                                    )
                                                )
                                            }
                                            <Button variant={"secondary"} size={"sm"}>Log In</Button>
                                            <Button variant={"primary"} size={"sm"}>Sign Up</Button>
                                        </div>
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-20 md:pb-24 xl:pb-32" />
        </>
    )
        ;
}

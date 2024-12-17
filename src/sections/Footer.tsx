import Image from "next/image";

import LogoImage from "@/assets/images/logo.svg"
import Link from "next/link";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
            {/*    Logo*/}
                    <div>
                        <Image src={LogoImage} alt="logo" />
                    </div>
                    
                {/*    content*/}
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link?.label}
                                    href={link?.href}
                                    className="text-white/50 text-sm"
                                >{link?.label}</Link>
                            ))}
                        </nav>
                    </div>

                </div>
            </div>
        </section>
    );
}

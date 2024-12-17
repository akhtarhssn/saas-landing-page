import Image from "next/image";

import { Tag } from "@/components/tag";
import { FeatureCard } from "@/components/feature-card";
import { Avatar } from "@/components/avatar";
import { Key } from "@/components/key";

import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides"
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets {" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-freee team editing "
                        className="md:col-span-2 xl:col-span-1 group shadow shadow-transparent hover:shadow-lime-400 transition">
                        <div className="aspect-video flex items-center justify-center ">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-8 border-indigo-500 z-30">
                                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-8 border-amber-500 z-20">
                                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-8 border-transparent group-hover:border-green-400 transition z-10">
                                <div
                                    className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image src={avatar4} alt="Avatar 4"
                                           className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
                                    {
                                        Array.from({ length: 3 }).map((_, i) => (
                                            <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                        ))
                                    }
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Interactive Prototyping"
                                 description="Engage your clients with prototypes that react to user actions "
                                 className="md:col-span-2 xl:col-span-1 shadow shadow-transparent hover:shadow-lime-400 transition group">
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition">We&apos;ve achieved <span
                                className="bg-gradient-to-r from-purple-400 to to-pink-400 bg-clip-text text-transparent relative">
                                <span>incredible</span>
                                <video
                                    src="/assets/gif-incredible.mp4"
                                    autoPlay loop muted playsInline
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                                />
                            </span> growth
                                this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Keyboard Quick Actions"
                                 description="Powerful commands to help you create designs more quickly"
                                 className="md:col-span-2 xl:col-span-1 md:col-start-2 xl:col-start-auto shadow shadow-transparent hover:shadow-lime-400 transition group">
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-2 transition-all duration-300 w-28 ">shift</Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-2 transition-all duration-300 delay-150">alt</Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-2 transition-all duration-300 delay-200">C</Key>
                        </div>
                    </FeatureCard>
                </div>
                {/*    features*/}
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map(feature => (
                        <div key={feature}
                             className="bg-neutral-900 border border-white/10 inline-flex items-center px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 hover:scale-105 transition duration-500 cursor-pointer group">
                            <span
                                className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-90 transition duration-300">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
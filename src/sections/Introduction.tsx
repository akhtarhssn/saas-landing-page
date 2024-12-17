"use client";

import { useScroll, useTransform } from "framer-motion";

import { Tag } from "@/components/tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {

    const [currentWord, setCurrentWord] = useState(0)

    const scrollTarget = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({target: scrollTarget, offset: ['start end', 'end end']});

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

    useEffect(() => {
        wordIndex.on('change', latest => {
            setCurrentWord(latest)
        })
    }, [])

    return (
        <section className="py-28 xl:py-40">
            <div className="container">
                {/*section heading tag*/}
                <div className="sticky top-24 lg:top-28">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl xl:text-7xl text-center font-medium mt-10 ">
                        <span className="">Your creative process deserves better. {" "}</span>
                        <span>
                            {
                                words.map((word, i) => (
                                    <span key={i} className={twMerge("transition duration-500 text-white/15", i < currentWord && "text-white")}>{`${word} `}</span>
                                ))
                        }
                        </span>
                        <span className="text-lime-400 block">That&apos;s why we built layers</span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget} />
            </div>
        </section>
    );
}

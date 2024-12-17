"use client";

import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { Button } from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import { Pointer } from "@/components/cursor-pointer";

import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {

    // framer motion animation:
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    //
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: [0, 16, 0], x: 0 }, { duration: 0.5, ease: "easeInOut" }]
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5, ease: "easeInOut" }]
        ]);
        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }]

        ]);

    }, []);

    return (
        <section
            className="py-24 overflow-clip"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`
            }}
        >
            <div className="container relative">
                {/*design and cursor*/}
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    ref={leftDesignScope}
                    drag
                    className="absolute  -left-40 top-16 hidden xl:block">
                    <Image src={designExample1Image} alt="design example 1" draggable={false} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    ref={rightDesignScope}
                    drag
                    className="absolute -right-72 -top-16  hidden xl:block">
                    <Image src={designExample2Image} alt="design example 2" draggable={false} />
                </motion.div>
                {/*design and cursor end*/}

                {/*<Image src={cursorYouImage} alt={"you"} />*/}

                {/*cursor pointer*/}
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    ref={leftPointerScope}
                    className="absolute left-56 top-96  hidden xl:block">
                    <Pointer name="Andrea " />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    ref={rightPointerScope}
                    className="absolute right-80 -top-4  hidden xl:block">
                    <Pointer name="Bryan" color="red" />
                </motion.div>
                {/*cursor pointer end*/}

                {/*hero content*/}
                <div className="flex justify-center">
                    <span
                        className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-white/90 font-semibold"> ✨$7.5m seed round raised
                </span>
                </div>
                <h1 className="text-6xl md:text-7xl xl:text-8xl font-medium text-center mt-6">Impactful design, created
                    effortlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">Design tools should&apos;t slow
                    you down. Layers combines powerful features with an intuitive
                    interface that keeps you in your creative flow.</p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto ">
                    <input type="email" placeholder="Enter your email"
                           className="bg-transparent px-4 md:flex-1 w-full focus:outline-none" />
                    <Button variant="primary" type="submit" className="whitespace-nowrap" size="sm">Sign Up</Button>
                </form>
                {/*hero content end*/}
            </div>
        </section>
    );
}

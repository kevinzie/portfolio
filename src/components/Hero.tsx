import React from "react";
import LottiePlayer from "./LottiePlayer";
import {TypeAnimation} from "react-type-animation";

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: any;
    backgroundWidth?: number;
    backgroundHeight?: number;
    name?: string;
}

const Hero: React.FC<HeroProps> = ({
                                       title,
                                       subtitle,
                                       backgroundImage,
                                       backgroundWidth,
                                       backgroundHeight,
                                       name,
                                   }) => {
    return (
        <section
            id={'home'}
            className="relative overflow-x-hidden flex  h-screen bg-cover bg-center items-center"
        >
            <div
                className="bg-black/50 container mx-auto relative overflow-hidden flex flex-col justify-center items-start align-middle rounded-2xl text-white w-full h-full">
                <div className={'flex flex-col leading-none uppercase font-oswald'}>
                    <h1 className="text-[15rem] font-bold">{title}</h1>
                    <div className="flex flex-col leading-none uppercase relative font-oswald">
                        <h2 className="text-[16rem]  bg-gradient-to-r font-bold from-blue-400 to-pink-500 text-transparent bg-clip-text">{subtitle}</h2>
                        <span className={'font-semibold justify-end flex font-firaCode text-xl text-[#bbb]'}>
                            <TypeAnimation
                                sequence={[
                                    `${name}`, 1500,
                                    `BACKEND DEVELOPER`, 500,
                                    `FRONTEND DEVELOPER`, 500,
                                    `FULL-STACK DEVELOPER`, 500,
                                    `SEO EXPERT`, 500,
                                ]}
                                deletionSpeed={90}
                                repeat={Infinity}
                            /></span>
                    </div>

                </div>
            </div>
            <div className={`absolute invert scale-y-125 top-0 rotate-90 right-0 opacity-40 grayscale h-full`}>
                <img draggable={false} className={'h-full scale-110'} src={backgroundImage} alt="" />
            </div>
        </section>
    );
};

export default Hero;

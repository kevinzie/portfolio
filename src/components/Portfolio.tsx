import React from "react";
import {Icon} from "@iconify/react";

interface PortfolioProps {
    title: string;
    backgroundImage?: any;
    background?: any;
    color?: string;
    ctUrl?: string;
    techStack?: string[];
    projectName?: string;
    projectDescription?: string;
    projectResponsibility?: string[];
}

const Portfolio: React.FC<PortfolioProps> = ({
                                                 title,
                                                 backgroundImage,
                                                 background,
                                                 color,
                                                 ctUrl,
                                                 techStack,
                                                 projectName,
                                                 projectDescription,
                                                 projectResponsibility,
                                             }) => {
    return (
        <section className="relative group grid overflow-hidden grid-cols-1 gap-4 p-2 bg-white bg-opacity-10 border border-neutral-600 rounded-3xl">
            <div className={'absolute top-0.5 -mt-0.5 left-1/2 w-full h-[1px] z-10 opacity-75 bg-gradient-to-r from-neutral-600 via-white to-neutral-600 transform -translate-x-1/2'}></div>
            <div className={`relative rounded-2xl flex flex-col justify-between ${background} overflow-hidden h-[500px]`}>
                <div className={'absolute top-0.5 -mt-0.5 left-1/2 w-full h-[1px] z-10 opacity-30 bg-gradient-to-r from-neutral-600 via-white to-neutral-600 transform -translate-x-1/2'}></div>

                <div className="flex h-full w-full flex-col px-5 gap-3 justify-between ">
                    <h3 className={'px-5 w-full justify-between py-8 flex flex-row items-center gap-8 font-semibold text-xl font-quicksand'}>
                        <span>{title}</span>
                        <a href={"#"} className={'w-9 h-9 relative aspect-square p-1 duration-300 rounded-full'}>
                            <Icon icon={'solar:arrow-right-line-duotone'} className={'w-full h-full'} />
                        </a>
                    </h3>
                    <div className={'absolute w-full px-16 left-1/2 -translate-x-1/2  bottom-0 flex-1 -mb-4 flex rounded-lg overflow-hidden transition duration-300 group-hover:-rotate-3 group-hover:scale-110'}>
                        <img className={'h-full w-full rounded-tr-2xl rounded-tl-2xl z-10'} src={backgroundImage} alt="" />
                        <div className={'bg-black blur-xl bg-opacity-30 w-full -bottom-5 absolute left-1/2 transform -translate-x-1/2 h-full scale-90'}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

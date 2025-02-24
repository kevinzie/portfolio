import React, {useEffect, useRef, useState} from "react";
import Portfolio from "./Portfolio";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import List from "./List";
import TechStack from "./TechStack";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Project {
    title: string;
    backgroundImage: string;
    color: string;
    background: string;
    projectTitle: string;
    projectDescription: string;
    projectResponsibility: string[];
    projectStacks: { title: string; icon: string }[];
    ctUrl: string;
    description: string;
}

const SectionPortfolio: React.FC<{ heading?: string }> = ({heading}) => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error loading projects:", error));
    }, []);

    useEffect(() => {
        sectionRefs.current.forEach((el, index) => {
            if (el) {
                gsap.fromTo(
                    el,
                    {opacity: 0, y: 50},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });
    }, [projects]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = sectionRefs.current.findIndex((el) => el === entry.target);
                    if (index !== -1) {
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        } else if (entry.boundingClientRect.top > 0) {
                            setActiveIndex(Math.max(0, index - 1));
                        }
                    }
                });
            },
            {rootMargin: "-20% 0px -50% 0px", threshold: 0.2}
        );

        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            sectionRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, [projects]);

    return (
        <div id={'projects'} className="relative py-32 grid grid-cols-2 gap-10 container mx-auto font-quicksand">
            <div className={'flex flex-col mb-20 gap-5 items-center justify-center text-center col-span-2'}>
                <h2 className={'text-md text-neutral-600 font-firaCode'}>FEATURED CASE STUDIES</h2>
                <h3 className={'flex gap-2 text-5xl font-raleway font-semibold'}>
                    <span>Project </span>
                    <span className="bg-gradient-to-r font-bold from-blue-400 to-pink-500 text-transparent bg-clip-text">
                        History
                    </span>
                </h3>
            </div>

            <div className="flex flex-col gap-20">
                {projects?.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            sectionRefs.current[index] = el;
                        }}
                        className="opacity-0 transform translate-y-10"
                    >
                        <Portfolio
                            title={item.title}
                            background={item.background}
                            backgroundImage={item.backgroundImage}
                            color={item.background}
                            ctUrl={item.ctUrl}
                        />
                    </div>
                ))}
            </div>

            <div className="sticky top-20 h-fit pl-10 self-start font-quicksand p-5 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold flex flex-row items-center gap-4 -ml-10">
                    <span
                        className={`absolute -left-0 w-6 h-1 ${projects[activeIndex]?.background} rounded-full`}></span>
                    <span className={'pl-10'}>{projects[activeIndex]?.projectTitle}</span>
                </h2>
                <p className={'my-5'}>{projects[activeIndex]?.description}</p>

                <div className={'flex mt-4 flex-col gap-2 justify-start w-full items-start'}>
                    {
                        projects[activeIndex]?.projectResponsibility.map((item, index) => (
                            <List key={index} title={item} icon={'solar:stars-minimalistic-bold'}
                                  iconColor={projects[activeIndex]?.color}/>
                        ))
                    }
                </div>

                <div className={'flex mt-4 flex-row gap-2 justify-start w-full items-start'}>
                    {
                        projects[activeIndex]?.projectStacks.map((item, index) => (
                            <TechStack key={index} title={item?.title} icon={item?.icon}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SectionPortfolio;

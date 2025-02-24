import React, {useEffect, useRef, useState} from "react";
import Portfolio from "./Portfolio";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import List from "./List";
import TechStack from "./TechStack";
import CardWork from "./CardWork";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Project {
    title: string;
    date_start: string;
    date_end: string;
    color: string;
    company: string;
    background: string;
    description: string;
    responsibility: string[];
    skills: string[];
    ctUrl: string;
}

const SectionExperience: React.FC<{ heading?: string }> = ({heading}) => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/data/works.json")
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
        <div id={'career-journey'} className="relative py-32 flex flex-col mx-auto font-quicksand">
            <div className={'absolute bottom-0 h-full w-auto -z-10 blur-2xl'}>
                <img className={'w-auto h-full object-cover'} src={'/assets/images/bg/bg-3.jpg'} />
            </div>
            <div className={'flex flex-col mb-20 gap-5 items-center justify-center text-center col-span-2'}>
                <h2 className={'text-md text-neutral-600 font-firaCode'}>PROFESSIONAL PATH</h2>
                <h3 className={'flex gap-2 text-5xl font-raleway font-bold'}>
                    <span>Career </span>
                    <span
                        className="bg-gradient-to-r font-bold from-blue-400 to-pink-500 text-transparent bg-clip-text">
                        Journey
                    </span>
                </h3>
            </div>


            <div
                className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent max-w-7xl mx-auto">


                {projects?.map((item, index) => (
                    <div
                        key={index}

                        ref={(el) => {
                            sectionRefs.current[index] = el;
                        }}
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                    >
                            <div
                                className="flex  items-center justify-center w-10 h-10 rounded-full border border-white bg-neutral-900 group-[.is-active]:bg-white group-[.is-active]:bg-opacity-20 group-[.is-active]:backdrop-blur-md  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                    <path fill-rule="nonzero"
                                          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                </svg>
                            </div>
                            <div
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] backdrop-blur-md bg-white bg-opacity-10 p-4 rounded-xl shadow-lg">
                                <div className="flex text-sm flex-col justify-between mb-1">
                                    <div className="font-bold text-white">{item?.title} at {item?.company}</div>
                                    <time className="font-caveat font-medium text-purple-300">{item?.date_start} - {item?.date_end}</time>
                                </div>
                                <div className="text-slate-200 text-sm">{item?.description}
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionExperience;

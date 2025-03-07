import React, {useEffect, useState} from "react";
import {Icon} from "@iconify/react";
import {TypeAnimation} from "react-type-animation";

interface MenuItem {
    id: number;
    title: string;
    link: string;
    cvUrl?: string;
}

export default function Navbar() {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [textColor, setTextColor] = useState('white');
    useEffect(() => {
        import('../assets/menu.json')
            .then((module) => {
                setMenu(module.default);
            })
            .catch((err) => console.error('Error loading the menu', err));
    }, []);
    return (
        <header className="fixed top-0 z-50 bg-black bg-opacity-10 backdrop-blur-md flex w-full  text-white py-1 font-firaCode">
            <div className="container mx-auto flex justify-between items-center">
                <div className="font-bold font-quicksand ">
                    <a href="/" title={'Denny Ferdiansyah'} className={'flex flex-col gap-0 items-start rounded-md bg-opacity-90 text-2xl '}>
                        <span className={'bg-gradient-to-r font-bold from-yellow-400 to-pink-500 text-transparent bg-clip-text'}>Denny Ferdiansyah</span>
                        <span className={'text-sm'} style={{
                            color: textColor,
                        }}>
                            <TypeAnimation
                                sequence={[
                                    () => setTextColor('white'),
                                    `Senior Software Engineer`, 500,
                                    () => setTextColor('cyan'),
                                    `GoLang`, 500,
                                    () => setTextColor('yellow'),
                                    `Javascript`, 500,
                                    () => setTextColor('lightblue'),
                                    `TypeScript`, 500,
                                    () => setTextColor('orange'),
                                    `Magento`, 500,
                                    () => setTextColor('cyan'),
                                    `Wordpress`, 500,
                                    () => setTextColor('lightblue'),
                                    `ReactJS`, 500,
                                    () => setTextColor('white'),
                                    `NextJS`, 500,
                                    () => setTextColor('lightgreen'),
                                    `VueJS`, 500,
                                    () => setTextColor('green'),
                                    `NuxtJS`, 500,
                                    () => setTextColor('white'),
                                ]}
                                deletionSpeed={90}
                                repeat={Infinity}
                            />
                        </span>
                    </a>
                </div>
                <nav>
                    <ul className="flex space-x-6 items-center">
                        {
                            menu.map((item, index) => (
                                <li key={`item_${index}`}>
                                    <a href={item?.link} className="hover:text-gray-400 flex gap-1 uppercase text-sm">
                                        <span className={'text-gray-500'}>{(index + 1).toString().padStart(2, '0')}</span>
                                        <span>{item?.title}</span>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                </nav>
            </div>
        </header>
    );
}

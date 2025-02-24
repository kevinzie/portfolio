import {useEffect, useState} from "react";
import {Icon} from "@iconify/react";

interface MenuItem {
    id: number;
    title: string;
    link: string;
    cvUrl?: string;
}

export default function Navbar() {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    useEffect(() => {
        import('../assets/menu.json')
            .then((module) => {
                setMenu(module.default);
            })
            .catch((err) => console.error('Error loading the menu', err));
    }, []);
    return (
        <header className="relative flex w-full  text-white py-4 font-firaCode">
            <div className="container mx-auto flex justify-between items-center">
                <div className="font-bold font-firaCode">
                    <a href="/" title={'Denny Ferdiansyah'} className={'bg-white rounded-md bg-opacity-90 text-4xl text-black'}>DF</a>
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

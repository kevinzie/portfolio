import {ReactNode} from "react";
import Navbar from "../components/Navbar";
import {Icon} from "@iconify/react";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="bg-black border-t border-neutral-900 py-20">
                <div className={'container relative mx-auto text-center flex gap-4 flex-col items-center'}>
                    <div className={'relative flex flex-col items-center w-20 h-20 rounded-full overflow-hidden'}>
                        <img src={'/assets/images/profile/me.jpeg'} />
                    </div>
                    <span className={'font-bold font-lg'}>Hello, I'm Denny Ferdiansyah a Full Stack Developer</span>
                    
                    <a target={'_blank'} href={'https://www.linkedin.com/in/dferdiansyah2908'} className={'flex bg-white hover:bg-opacity-30 transition duration-200 group bg-opacity-10 backdrop-blur-md flex-row gap-3 items-center justify-center border border-neutral-400 rounded-full p-1 pl-5'}>
                        <span className={'font-bold bg-gradient-to-r font-bold from-blue-400 to-pink-500 text-transparent bg-clip-text'}>Let's Connect</span>
                        <div className={'bg-white transition duration-200 group-hover:bg-blue-700 h-10 w-10 rounded-full bg-opacity-10 p-2'}>
                            <Icon icon={'heroicons:arrow-right'} className={'w-full h-full '} />
                        </div>
                    </a>
                </div>
            </footer>
        </div>
    )
}
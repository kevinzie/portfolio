import {ReactNode} from "react";
import Navbar from "../components/Navbar";
import {Icon} from "@iconify/react";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer id={'contact'} className="bg-black border-t max-w-4xl mx-auto border-neutral-900 py-20">
                <div className={'container relative mx-auto text-center flex gap-4 flex-col items-center'}>
                    <div className={'relative flex flex-col items-center w-20 h-20 rounded-full overflow-hidden'}>
                        <img src={'/assets/images/profile/me.jpeg'} />
                    </div>
                    <span className={'text-lg'}>Senior Software Engineer with over 10 years of experience in Full-Stack Development, specializing in TypeScript, Golang, Laravel, Magento, and Flutter. Experienced in architecting scalable systems, optimizing performance, and integrating complex payment and logistics solutions. Proven ability to enhance platform stability, streamline business processes, and drive revenue growth through technical innovation. Skilled in real-time applications, e-commerce solutions, and cross-platform development, with hands-on expertise in WebSockets, GetX, Firebase, ERP integrations, and third-party API integrations. Passionate about building efficient backend systems and seamless user experiences to power high-performance applications.</span>
                    
                    <div className={'flex gap-6'}>
                        <a target={'_blank'} href={'https://www.linkedin.com/in/dennyferdiansyah'} className={'flex bg-white hover:bg-opacity-30 transition duration-200 group bg-opacity-10 backdrop-blur-md flex-row gap-3 items-center justify-center border border-neutral-400 rounded-full p-1 pl-5'}>
                            <span className={'font-bold bg-gradient-to-r font-bold from-blue-400 to-pink-500 text-transparent bg-clip-text'}>Let's Connect</span>
                            <div className={'bg-white transition duration-200 group-hover:bg-blue-700 h-10 w-10 rounded-full bg-opacity-10 p-2'}>
                                <Icon icon={'heroicons:arrow-right'} className={'w-full h-full '} />
                            </div>
                        </a>
                        <a target={'_blank'} href={'https://wa.me/628126773966'} className={'flex bg-white hover:bg-opacity-30 transition duration-200 group bg-opacity-10 backdrop-blur-md flex-row gap-3 items-center justify-center border border-neutral-400 rounded-full p-1 pl-5'}>
                            <span className={'font-bold bg-gradient-to-r font-bold from-yellow-400 to-green-500 text-transparent bg-clip-text'}>Let's Chat</span>
                            <div className={'bg-white transition duration-200 group-hover:bg-lime-700 h-10 w-10 rounded-full bg-opacity-10 p-2'}>
                                <Icon icon={'heroicons:arrow-right'} className={'w-full h-full '} />
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
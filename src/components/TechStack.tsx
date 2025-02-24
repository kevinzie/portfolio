import React from "react";
import StackIcon from "tech-stack-icons";

interface TechStackProps {
    title: string;
    icon: string;
}

const TechStack: React.FC<TechStackProps> = ({
                                       title,
                                       icon,
                                   }) => {
    return (
        <div className={'flex flex-row gap-2 border border-neutral-600 rounded-xl bg-white py-1 bg-opacity-10 px-2 items-center justify-center'}>
            <StackIcon className={'w-5 h-5'} name={icon} />
            <span className={'text-white font-quicksand font-semibold text-xs'}>{title}</span>
        </div>
    );
};

export default TechStack;

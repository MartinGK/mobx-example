
export const ShortArrow = ({ className = '' }: { className?: string }) => {
    return <div className={`content-[''] h-[4px] w-[70%] bg-black block float-left relative top-[9px] duration-[0.2s] ease-in-out after:content-[''] after:float-left after:border-l-[11px] after:border-l-solid after:border-l-[#000] after:border-r-[11px] after:border-r-solid after:border-r-transparent after:border-t-[11px] after:border-t-solid after:border-t-transparent after:border-b-[11px] after:border-b-solid after:border-b-transparent after:absolute after:-right-4 after:-top-[8px] ${className}`}
    />
}

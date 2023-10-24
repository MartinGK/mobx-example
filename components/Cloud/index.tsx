type Props = { message: string | React.ReactNode, onClick?: () => void }

export function Cloud({ message, onClick }: Props) {
    return (
        <div className={`relative bg-[rgba(255,_255,_255)] w-[135px] h-[45px] rounded-[67.5px] [box-shadow:10px_10px_rgba(0,0,0,0.2)] before:content-[''] before:bg-[rgba(255,_255,_255)] before:absolute before:w-[76.5px] before:h-[67.5px] before:rounded-[50%] before:-top-[40.5px] before:right-[18px] after:content-[''] after:bg-[rgba(255,_255,_255)] after:absolute after:w-[45px] after:h-[45px] after:rounded-[50%] after:-top-[22.5px] after:left-[22.5px] ${onClick ? 'cursor-pointer' : 'cursor-auto'}`}
            onClick={onClick}>
            <span className="z-20 flex text-sm absolute ml-auto mr-auto left-[25%] top-[15%]">{message}</span>
        </div>
    );
}
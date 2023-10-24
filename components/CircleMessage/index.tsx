
const backgrounds = {
    orange: "bg-[repeating-linear-gradient(-45deg,#FDAF6D,#FDAF6D_2px,#ffffff_2px,#ffffff_5px)]",
    blue: "bg-[repeating-linear-gradient(-45deg,#7ABAF0,#7ABAF0_2px,#ffffff_2px,#ffffff_5px)]",
    green: "bg-[repeating-linear-gradient(-45deg,#9AD349,#9AD349_2px,#ffffff_2px,#ffffff_5px)]",
    red: "bg-[repeating-linear-gradient(-45deg,#FC9999,#FC9999_2px,#ffffff_2px,#ffffff_5px)]"
}

export enum CircleMessageVariants {
    orange = "orange",
    blue = "blue",
    green = "green",
    red = "red"
};

type CircleMessageProps = {
    variant: CircleMessageVariants,
    children: string | React.ReactNode,
}

export const CircleMessage = ({ variant, children }: CircleMessageProps) => {
    return <div className={`box-content border border-black rounded-full w-40 h-32 flex justify-center items-center text-center font-bold text-lg text-shadow shadow-white ${backgrounds[variant]}`}>
        {children}
    </div>
}

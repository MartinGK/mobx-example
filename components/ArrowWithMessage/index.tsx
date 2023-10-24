import { ShortArrow } from "@/components"

export const ArrowWithMessage = ({ message }: { message: string }) => {
    return <div className="flex flex-col h-full justify-center items-center w-full" >
        <span className="font-bold text-[16px]">{message}</span>
        <ShortArrow />
    </div>
}

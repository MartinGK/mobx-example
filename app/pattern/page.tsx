'use client'
import { RenderCounter, Cloud, CircleMessageVariants, CircleMessage, ArrowWithMessage } from "@/components";

export default function Pattern() {
    return (
        <div className="flex flex-col gap-24 items-center">
            <RenderCounter className="text-2xl" />
            <div className="flex flex-col">
                <div className="grid grid-cols-8 gap-8">
                    <ArrowWithMessage message="events" />
                    <div className="flex flex-col items-center gap-4">
                        <Cloud onClick={()=>{}} >Click me!</Cloud>
                        <CircleMessage variant={CircleMessageVariants.orange}>Actions</CircleMessage>
                    </div>
                    <ArrowWithMessage message="update" />
                    <div className="flex flex-col items-center gap-4">
                        <Cloud>{}</Cloud>
                        <CircleMessage variant={CircleMessageVariants.blue}>Observable state</CircleMessage>
                    </div>
                    <ArrowWithMessage message="notify" />
                    <div className="flex flex-col items-center gap-4">
                        <Cloud>{}</Cloud>
                        <CircleMessage variant={CircleMessageVariants.green}>Computed values</CircleMessage>
                    </div>
                    <ArrowWithMessage message="trigger" />
                    <div className="flex flex-col items-center gap-4">
                        <Cloud><RenderCounter /></Cloud>
                        <CircleMessage variant={CircleMessageVariants.red}>Side-Effect (like render)</CircleMessage>
                    </div>
                </div>
                <div className="w-full grid grid-cols-8 ">
                    <div className="relative rounded border-solid border-black border-t-transparent border-4 h-16 mt-2 rounded-br-full rounded-bl-full w-[85%] col-start-2 col-span-7 justify-self-center after:content-[''] after:float-left after:border-l-[11px] after:border-l-solid after:border-l-transparent after:border-r-[11px] after:border-r-solid after:border-r-transparent after:border-t-[11px] after:border-t-solid after:border-t-transparent after:border-b-[11px] after:border-b-solid after:border-b-[#000] after:absolute after:-left-[13.5px] after:-top-[16px]"></div>
                    <span className="col-start-5 text-center pt-4 font-bold text-[16px]">events</span>
                </div> 
            </div>
        </div>
    );
}
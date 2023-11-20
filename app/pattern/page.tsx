'use client'
import { RenderCounter} from "@/components";
import MobxPattern from "@/components/MobxPattern";
export default function Pattern() {
    return (
        <div className="flex flex-col gap-24 items-center">
            <RenderCounter className="text-2xl" />
            <div className="flex flex-col">
                <MobxPattern />
                <div className="w-full grid grid-cols-8 ">
                    <div className="relative rounded border-solid border-black border-t-transparent border-4 h-16 mt-2 rounded-br-full rounded-bl-full w-[85%] col-start-2 col-span-7 justify-self-center after:content-[''] after:float-left after:border-l-[11px] after:border-l-solid after:border-l-transparent after:border-r-[11px] after:border-r-solid after:border-r-transparent after:border-t-[11px] after:border-t-solid after:border-t-transparent after:border-b-[11px] after:border-b-solid after:border-b-[#000] after:absolute after:-left-[13.5px] after:-top-[16px]"></div>
                    <span className="col-start-5 text-center pt-4 font-bold text-[16px]">events</span>
                </div>
            </div>
        </div>
    );
}
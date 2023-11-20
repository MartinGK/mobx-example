'use client'
import { RenderCounter, Cloud, CircleMessageVariants, CircleMessage, ArrowWithMessage } from "@/components";
import { MobxStore } from "@/stores/mobx";
import { observer } from 'mobx-react-lite';
import { useState } from "react";

export default observer(function MobxPattern() {
    const [state] = useState(()=>new MobxStore())

    return (
        <div className="grid grid-cols-8 gap-8">
        <ArrowWithMessage message="events" />
        <div className="flex flex-col items-center gap-4">
            <Cloud onClick={() => state.updateObservableState("New value")} >Click me!</Cloud>
            <CircleMessage variant={CircleMessageVariants.orange}>Actions</CircleMessage>
        </div>
        <ArrowWithMessage message="update" />
        <div className="flex flex-col items-center gap-4">
            <Cloud>{state.myObservableState}</Cloud>
            <CircleMessage variant={CircleMessageVariants.blue}>Observable state</CircleMessage>
        </div>
        <ArrowWithMessage message="notify" />
        <div className="flex flex-col items-center gap-4">
            <Cloud>{state.myComputedValue}</Cloud>
            <CircleMessage variant={CircleMessageVariants.green}>Computed values</CircleMessage>
        </div>
        <ArrowWithMessage message="trigger" />
        <div className="flex flex-col items-center gap-4">
            <Cloud><RenderCounter /></Cloud>
            <CircleMessage variant={CircleMessageVariants.red}>Side-Effect (like render)</CircleMessage>
        </div>
    </div>
    );
})
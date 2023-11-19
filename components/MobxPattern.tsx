import { observer } from "mobx-react-lite";
import { ArrowWithMessage } from "./ArrowWithMessage";
import { CircleMessage, CircleMessageVariants } from "./CircleMessage";
import { Cloud } from "./Cloud";
import { useState } from "react";
import { MobXState } from "@/stores/mobx";
import { RenderCounter } from "./RenderCounter";

export default observer(function MobXPattern() {
    const [state] = useState(() => new MobXState());

    const updateObservableState = () => {
        state.updateObservable("New value");
    }

    return (
        <div className="grid grid-cols-8 gap-8">
            <ArrowWithMessage message="events" />
            <div className="flex flex-col items-center gap-4">
                <Cloud onClick={updateObservableState} >Click me!</Cloud>
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

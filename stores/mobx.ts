import { makeAutoObservable } from "mobx"
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined");

export class MobXState {
    myObservableState: string = "My value";

    constructor() {
        makeAutoObservable(this);
    }

    get myComputedValue(): string {
        return `Length: ${this.myObservableState.length}`
    }

    updateObservable(newValue: string){
        this.myObservableState = newValue;
    }
}
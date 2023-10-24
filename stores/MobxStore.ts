import { makeAutoObservable } from "mobx"

export class MobXState {
    myObservableState: string

    constructor() {
        this.myObservableState = "My value"
        makeAutoObservable(this)
    }

    get myComputedValue(): string {
        return `Length: ${this.myObservableState.length}`
    }
}

import { makeObservable, observable, action, computed } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined")

export class MobxStore {
  // Observables
  myObservableState = "My value";

  constructor() {
    makeObservable(this, {
        myObservableState: observable,
        myComputedValue: computed,
        updateObservableState: action
    })
  }

  // Computed values
  get myComputedValue(): string {
    return `Length: ${this.myObservableState.length}`;
  }

  // Actions
  updateObservableState(newString: string) {
    this.myObservableState = newString;
  }   
}

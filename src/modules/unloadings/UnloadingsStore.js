// import _ from "lodash";
import { observable, action } from "mobx";

class UnloadingsStore {
  @observable user = {};

  @action
  async hello() {}
}

const unloadingsStore = new UnloadingsStore();

export default unloadingsStore;

// import _ from "lodash";
import { observable, action } from "mobx";
import XLSX from "xlsx";

const convertFileToJson = (file, fn) => {
  const reader = new FileReader();
  const rABS = !!reader.readAsBinaryString;
  reader.onload = e => {
    /* Parse data */
    const bstr = e.target.result;
    const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
    /* Get first worksheet */
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    /* Convert array of arrays */
    const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    /* Update state */
    fn(data);
  };
  if (rABS) reader.readAsBinaryString(file);
  else reader.readAsArrayBuffer(file);
};

const convertJsonToFile = json => {
  /* convert state to workbook */
  const ws = XLSX.utils.aoa_to_sheet(json);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
  /* generate XLSX file and send to client */
  XLSX.writeFile(wb, "sheetjs.xlsx");
};

class UnloadingsStore {
  @observable prevUnloding = {
    file: null,
    json: null
  };

  @observable currentUnloading = {
    file: null,
    json: null
  };

  @action
  async setPrevUnloadingFile(file) {
    this.prevUnloding.file = file;
    convertFileToJson(file, json => {
      this.prevUnloding.json = json;
    });
  }

  @action
  async setCurrentUnloadingFile(file) {
    this.currentUnloading.file = file;
    convertFileToJson(file, json => {
      this.currentUnloading.json = json;
    });
  }

  @action
  exportResultFile() {
    convertJsonToFile(this.currentUnloading.json);
  }
}

export const unloadingsStore = new UnloadingsStore();

export default { unloadingsStore };

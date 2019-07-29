// import _ from "lodash";
import React, { Component } from "react";
import { Row, Column } from "styled-flexbox-grid";
import { observer, inject } from "mobx-react";
import { FilesDropzone } from "../../../ui/atoms";
import { toJS } from "mobx";

// import { withRouter } from "react-router";

@inject("unloadingsStore")
@observer
class CompareUnloadings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { unloadingsStore } = this.props;
    const prevUnloadingFile = toJS(unloadingsStore.prevUnloding.json);
    const currentUnloadingFile = toJS(unloadingsStore.currentUnloading.json);

    return (
      <>
        <Row>
          <Column span={6}>
            <FilesDropzone
              multiple
              onDrop={files => {
                unloadingsStore.setPrevUnloadingFile(files[0]);
              }}
              files={prevUnloadingFile ? [prevUnloadingFile] : null}
            />
          </Column>
          <Column span={6}>
            <FilesDropzone
              multiple
              onDrop={files => {
                unloadingsStore.setCurrentUnloadingFile(files[0]);
              }}
              files={currentUnloadingFile ? [currentUnloadingFile] : null}
            />
          </Column>
        </Row>
        <button
          type="button"
          onClick={() => {
            unloadingsStore.exportResultFile();
          }}
        >
          Export File
        </button>
      </>
    );
  }
}

export default CompareUnloadings;

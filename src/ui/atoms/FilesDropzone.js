import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Row, Column } from "styled-flexbox-grid";

const getColor = props => {
  if (props.isDragAccept) {
    return "#61dafb";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#61dafb";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const FilesDropzone = ({ files, onDrop, multiple = false }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop: acceptedFiles => {
      onDrop(acceptedFiles);
      // setFiles(
      //   acceptedFiles.map(file =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file)
      //     })
      //   )
      // );
    }
  });
  return (
    <section>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>
          Перетащите {multiple ? "файлы" : "файл"} в эту область, либо нажмите
          на неё
        </p>
      </Container>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      {/*<Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <DropzoneContainer>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>
                  Перетащите {multiple ? "файлы" : "файл"} в эту область, либо
                  нажмите на неё
                </p>
              </div>
            </DropzoneContainer>
          )}
        </Dropzone>*/}
    </section>
  );
};

export default { FilesDropzone };

import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const getColor = props => {
  if (props.isDragAccept) {
    return "#000";
  }
  if (props.isDragReject) {
    return "#61dafb";
  }
  if (props.isDragActive) {
    return "#61dafb";
  }
  return "#61dafb";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin-top: 25px;
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
    }
  });

  // console.log("files AAAA :", files);

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
      {files && (
        <aside>
          <h4>Files</h4>
          <ul>
            {files.map((file, index) => (
              <li key={`${index.toString()}`}>
                <pre>{JSON.stringify(file, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </section>
  );
};

export default { FilesDropzone };

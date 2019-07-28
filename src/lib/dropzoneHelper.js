import React from "react";

const ICONS = {
  xls: "fa fa-file-excel-o",
  pdf: "fa fa-file-pdf-o",
  zip: "fa fa-file-archive-o",
  gzip: "fa fa-file-archive-o",
  rar: "fa fa-file-archive-o",
  doc: "fa fa-file-word-o",
  docx: "fa fa-file-word-o",
  ppt: "fa fa-file-powerpoint-o",
  txt: "fa fa-file-text-o",
  js: "fa fa-file-code-o",
  cpp: "fa fa-file-code-o",
  mp4: "fa fa-file-video-o"
};

const UNKNOWN_FILE_ICON = "fa fa-file-o";

export const getFileIconByExtension = (ext, iconSize) => {
  return <i className={`${ICONS[ext] || UNKNOWN_FILE_ICON} fa-${iconSize}x`} />;
};

export const checkIsImage = fileName => {
  return /\.(gif|jpg|jpeg|tiff|png)$/i.test(fileName);
};

export const getExtensionByFileName = fileName => {
  return /(?:\.([^.]+))?$/.exec(fileName)[1];
};

import React from "react";
import { FileWithPath } from "react-dropzone";
import styled from "styled-components";
import excelMock from "../service/mock/excelMock";
import Dropzone from "./Dropzone";
import ExcelGrid from "./ExcelGrid";

enum FilesState {
  NONE = "NONE",
  INSIDE = "INSIDE",
  UPLOADING = "UPLOADING",
}

const DropAndViewGto: React.FC = () => {
  const [excelData, setExcelData] = React.useState<
    Record<string, string>[] | null
  >();

  const [filesState, setFilesState] = React.useState<FilesState>(
    FilesState.NONE
  );

  const handlerDropFile = React.useCallback(async (files: FileWithPath[]) => {
    setFilesState(FilesState.UPLOADING);
    await Promise.all(
      files.map(async (file) => {
        // const fileData = new FormData();

        // fileData.append("file", file, file.name);

        // const { data: responseData } = await axios.post(
        //   "/api/uploadGto",
        //   fileData
        // );

        //@ts-expect-error
        const responseData: Record<string, string | number>[] = excelMock;

        setExcelData(
          responseData.map((row: Record<string, string | number>) =>
            Object.assign(
              {},
              ...Object.keys(row).map((k) => {
                const val = row[k];
                if (typeof val === "number") {
                  return { [k]: val };
                }
                if (!isNaN(new Date(val).getMonth())) {
                  return { [k]: new Date(val) };
                }
                return { [k]: val };
              })
            )
          )
        );
      })
    );
    setFilesState(FilesState.NONE);
  }, []);

  const handlerDragEnter = React.useCallback(() => {
    setFilesState(FilesState.INSIDE);
  }, []);

  const handlerDragLeave = React.useCallback(() => {
    setFilesState(FilesState.NONE);
  }, []);

  return (
    <div className="w-100 h-100">
      {excelData ? (
        <ExcelGrid data={excelData} />
      ) : (
        <form className="w-100 h-100">
          <StyledDropZone
            className="w-100 h-100 p-3"
            onDrop={handlerDropFile}
            onDragEnter={handlerDragEnter}
            onDragLeave={handlerDragLeave}
            filesState={filesState}
          >
            <span>
              {filesState === FilesState.UPLOADING
                ? "Загрузка ..."
                : "Перетащите excel файл ..."}
            </span>
          </StyledDropZone>
        </form>
      )}
    </div>
  );
};

const StyledDropZone = styled(Dropzone)<{ filesState: FilesState }>`
  border: 5px dashed gray;

  ${({ filesState }) => {
    if (filesState === FilesState.INSIDE) {
      return "border-color: blue;";
    }
    if (filesState === FilesState.UPLOADING) {
      return "border-color: yellow;";
    }
  }}
`;

export default DropAndViewGto;

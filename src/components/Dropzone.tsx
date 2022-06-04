import React from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

interface DropzoneProps {
  onDrop: (files: FileWithPath[]) => void;
  onDragEnter: (e: React.DragEvent<HTMLElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLElement>) => void;
  className?: string;
  children?: React.ReactNode | React.ReactElement[];
}

const Dropzone: React.FC<DropzoneProps> = ({
  onDragEnter,
  onDragLeave,
  onDrop,
  className,
  children,
}) => {
  const onDropHandler = React.useCallback(
    (acceptedFiles: FileWithPath[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const onDragEnterHandler = React.useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      onDragEnter(e);
    },
    [onDragEnter]
  );

  const onDragLeaveHandler = React.useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      if (!onDragLeave) return;
      onDragLeave(e);
    },
    [onDragLeave]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropHandler,
    onDragEnter: onDragEnterHandler,
    onDragLeave: onDragLeaveHandler,
  });

  return (
    <div
      {...getRootProps({
        onClick: (e) => e.stopPropagation(),
        className: `dropzone-container ${className}`,
      })}
    >
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

export default Dropzone;

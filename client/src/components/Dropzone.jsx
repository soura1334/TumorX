import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone({ setFilePreview, setSelectedFile, filePreview }) {
  const {
    acceptedFiles,
    fileRejections,
    getInputProps,
    getRootProps,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      const preview = URL.createObjectURL(file);
      setFilePreview(preview);

      setSelectedFile(file);

      return () => URL.revokeObjectURL(preview);
    }
  }, [acceptedFiles, setFilePreview, setSelectedFile]);

  return (
    <div className="p-10 flex flex-col items-center w-[60vw] my-10 bg-white rounded-lg shadow-md">
      <div
        {...getRootProps({
          className: `border-2 ${
            acceptedFiles.length > 0
              ? "border-none"
              : "border-dashed border-gray-300"
          } h-[50vh] w-full flex flex-col justify-center items-center cursor-pointer hover:border-gray-500 transition`,
        })}
      >
        <input {...getInputProps()} />
        {filePreview ? (
          <div className="flex flex-col items-center">
            <img src={filePreview} alt="Preview" className="h-70 object-contain" />
            <p className="mt-2">{acceptedFiles[0]?.name}</p>
            <p className="text-gray-500">
              Click anywhere inside this area to select another file
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>Drag and drop your MRI scan image here, or click to select files</p>
            <p>Accepted Formats: (.jpg, .png, .jpeg)</p>
          </div>
        )}
      </div>

      {fileRejections.length > 0 && (
        <p className="text-red-500 mt-2">
          Only 1 file is allowed and it must be a valid image.
        </p>
      )}
    </div>
  );
}

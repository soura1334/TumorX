import Dropzone from "./Dropzone";
import { useState } from "react";

export default function Form() {
  const [filePreview, setFilePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Prediction request failed");

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
      setResponse({ error: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <Dropzone
        filePreview={filePreview}
        setFilePreview={setFilePreview}
        setSelectedFile={setSelectedFile}
      />
      <button
        type="submit"
        className={`${
          selectedFile
            ? "bg-blue-500 cursor-pointer"
            : "bg-gray-600 cursor-not-allowed"
        } text-white px-5 py-2 rounded-lg`}
        disabled={!selectedFile || loading}
      >
        {loading ? "Analyzing..." : "Generate Report"}
      </button>

      {response && !response.error && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg text-center">
          <p className="text-lg font-bold">Prediction: {response.prediction}</p>
          <p className="text-gray-700">
            Confidence: {(response.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}

      {response?.error && (
        <p className="mt-4 text-red-500">{response.error}</p>
      )}
    </form>
  );
}

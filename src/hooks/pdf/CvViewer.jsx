"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function CvViewer({ pdf }) {
  const [scale, setScale] = useState(1);

  return (
    <div className="w-full h-full overflow-auto bg-neutral-700">
      <div className="h-12 flex items-center justify-center gap-2 sticky left-0 z-10">
        <button
          onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
          className="bg-white text-black text-xl font-bold px-3 py-1 rounded"
        >
          −
        </button>

        <button
          onClick={() => setScale((s) => Math.min(2.5, s + 0.1))}
          className="bg-white text-black text-xl font-bold px-3 py-1 rounded"
        >
          +
        </button>
      </div>

      <div className="min-w-max flex justify-center p-4">
        <Document file={pdf}>
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
    </div>
  );
}

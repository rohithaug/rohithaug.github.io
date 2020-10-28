import React, { Component } from "react";
import "../styling/resume.css";
import { Document, Page, pdfjs } from "react-pdf";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import resumePDF from "../media/Rohith-S-P-Resume.pdf";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

class Resume extends Component {
  constructor(props) {
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <br /> <br /> <br />
            <div className="row">
              <div className="col">
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <Document file={resumePDF}>
                      <Page key={`page_1`} pageNumber={1} width={width} />
                      <Page key={`page_2`} pageNumber={2} width={width} />
                    </Document>
                  )}
                </AutoSizer>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col" style={{ textAlign: "right" }}>
                <a href={resumePDF} download="Rohith-S-P-Resume.pdf">
                  <div type="submit" className="btn btn-outline-info">
                    DOWNLOAD <PictureAsPdfIcon />
                  </div>
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;

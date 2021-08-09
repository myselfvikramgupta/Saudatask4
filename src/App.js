import React, { useState } from "react";
import XLSX from "xlsx";
import FileUploader from "./fileUploader";
import Table from "./tableData";
import Title from "./title";
import "./App.css";

const extensions = ["xlsx", "xls", "csv"];
function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const importExcelFile = (e) => {
    const excelFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target.result;
      const workBook = XLSX.read(result, { type: "binary" });
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      let headers = fileData[0].map((head) => head.trim().replace(" ", "_"));
      const heads = fileData[0].map((head) => ({ title: head }));
      setColumns(heads);
      fileData.splice(0, 1);
      setData(convertDataToJson(headers, fileData));
    };
    if (excelFile) {
      const fileType = checkFileType(excelFile);
      if (fileType) {
        reader.readAsBinaryString(excelFile);
      } else {
        alert("Invalid file input, Select Excel, CSV file");
      }
    } else {
      alert("Choose excel file...");
    }
  };
  const checkFileType = (file) => {
    const fileName = file.name.split(".");
    const extension = fileName[fileName.length - 1];
    return extensions.includes(extension);
  };
  const convertDataToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        //   console.log(headers);
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };

  return (
    <div className="container-fluid">
      <FileUploader handleFile={importExcelFile} />
      {data.length > 0 ? <Table data={data} columns={columns} /> : <Title />}
    </div>
  );
}

export default App;

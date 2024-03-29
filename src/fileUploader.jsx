const FileUploader = ({ handleFile }) => {
  return (
    <>
      <div className="file_uploader">
        <div className="file">
          <label>
            <input type="file" onChange={handleFile} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17 6h-6v-1h6v1zm0 2h-6v1h6v-1zm0 3h-6v1h6v-1zm5-11v14.386c0 2.391-6.648 9.614-9.811 9.614h-10.189v-24h20zm-16 18c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm0-12c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm14-4h-12v20h3.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-11.543z" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};
export default FileUploader;

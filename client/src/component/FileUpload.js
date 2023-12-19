// Component.js
import React from "react";
import styles from "../css/FileUpload.module.css"; // CSS 모듈 import

function FileUpload() {
  return (
    <div className={styles.uploadContainer}>
      <div className={styles.card}>
        <h2 className={styles.title}>File Upload</h2>
        <div className={styles.uploadButtonContainer}>
          <label
            className={`${styles.uploadButton} ${styles.fileInput}`}
            htmlFor="file-upload"
          >
            <CloudIcon className="w-8 h-8" />
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input className="hidden" id="file-upload" type="file" />
          </label>
          <button className={styles.uploadButton}>Upload</button>
        </div>
      </div>
    </div>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export default FileUpload;

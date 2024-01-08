import React from "react";
import { Label } from "./Label";
import { Button } from "./Button";
import { CardTitle, CardHeader, CardContent, Card } from "./Card";
import styles from "../../assets/css/FileUpload.module.css";
import { DropzoneArea } from 'material-ui-dropzone';

export default function FileUpload() {
  return (
    <div className={styles.fileUploadContainer}>
      <div className={`${styles.fileUploadGrid} grid gap-4 items-start`}>
      </div>
      <DropzoneArea
        onChange={(files) => console.log('Files:', files)}
      />
      <div className={styles.selectedFilesCard}>
        <Card className="w-full">
          <CardHeader className="pb-4">
            <CardTitle>Selected Files</CardTitle>
          </CardHeader>
          <CardContent>
            <ul
              className={`${styles.selectedFilesList} divide-y divide-gray-200`}
            >
              <li
                className={`${styles.selectedFileItem} py-2 flex justify-between items-center`}
              >
                <span>file1.jpg</span>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </li>
              <li
                className={`${styles.selectedFileItem} py-2 flex justify-between items-center`}
              >
                <span>file2.png</span>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </li>
              <li
                className={`${styles.selectedFileItem} py-2 flex justify-between items-center`}
              >
                <span>document.pdf</span>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

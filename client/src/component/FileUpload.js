// FileUpload.js
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import styles from "./FileUpload.module.css";

export default function FileUpload() {
  return (
    <div className={styles.fileUploadContainer}>
      <div className={`${styles.fileUploadGrid} grid gap-4 items-start`}>
        <div
          className={`${styles.fileInputLabel} grid w-full items-center gap-2`}
        >
          <Label htmlFor="file-upload">Select Files</Label>
          <Input id="file-upload" multiple type="file" />
        </div>
        <Button className="w-full">Upload Files</Button>
      </div>
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

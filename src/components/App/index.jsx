import React from "react";
import styles from "./styles.module.scss";
import { InputForm } from "../InputForm";
import { DataTable } from "../DataTable";

export const App = () => (
  <main className={styles.app}>
    <div className={styles.form}>
      <InputForm />
    </div>
    <DataTable />
  </main>
);

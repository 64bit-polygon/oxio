import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { SortButton } from "../SortButton";
import { Cell } from "../Cell";
import { useRecoilValue } from "recoil";
import { postsSelector } from "../../state/selectors";
import { sortPosts } from "../../utils/sort.js";
import {
  LABEL,
  QUANTITY,
  DATE,
  IS_ACTIVE,
  ASC,
  DESC
} from "../../utils/constants.js";
import { Header } from "../Header";

const COLS = [LABEL, QUANTITY, DATE, IS_ACTIVE];
const labelMap = {
  [LABEL]: "Label",
  [QUANTITY]: "Quantity",
  [DATE]: "Created",
  [IS_ACTIVE]: "Is Active"
};

export const DataTable = () => {
  const [sortBy, setSortBy] = useState(DATE);
  const [sortDirction, setSortDirction] = useState(DESC);
  const [sortedData, setSortedData] = useState([]);
  const data = useRecoilValue(postsSelector);

  useEffect(() => {
    setSortedData(sortPosts(data, sortDirction, sortBy));
  }, [sortBy, sortDirction, data]);

  const toggleDirection = () => setSortDirction(sortDirction === ASC ? DESC : ASC);

  return (
    <div role="table" className={styles.table}>
      <Header>Data table</Header>
      <div role="row" className={styles.headerRow}>
      {COLS.map(col => (
        <div
          key={col}
          role="columnheader"
          aria-sort={sortBy === col ? sortDirction : null}
          className={cn(styles.headerCell, styles[col])}
        >
          <SortButton
            toggleDirection={toggleDirection}
            setSortType={() => setSortBy(col)}
            isCurrent={sortBy === col}
            direction={sortDirction}
          >
            {labelMap[col]}
          </SortButton>
        </div>
      ))}
      </div>
      <div role="rowgroup" className={styles.formBody}>
      {sortedData.map(row => (
        <div role="row" className={styles.row} key={row.id}>
        {COLS.map(col =>
          <div
            role="cell"
            className={cn(styles.cell, styles[col])}
            key={`${row.id}${col}`}
          >
            <Cell type={col}>
              {row[col]}
            </Cell>
          </div>
        )}
        </div>
      ))}
      </div>
    </div>
  );
};

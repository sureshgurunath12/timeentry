import { React, useEffect, useState } from "react";
import "./ProjectsTree.css";


import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router-dom";

import Paper from '@mui/material/Paper';
import {
  SelectionState,
  TreeDataState,
  CustomTreeData,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from '@devexpress/dx-react-grid-material-ui';

import {
  generateRows,
  defaultColumnValues,
} from '../../data/generator';

const getChildRows = (row, rootRows) => {
  const childRows = rootRows.filter(r => r.parentId === (row ? row.id : null));
  return childRows.length ? childRows : null;
};

export const ProjectsTree = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [data] = useState(generateRows({
    columnValues: {
      id: ({ index }) => index,
      parentId: ({ index, random }) => (index > 0 ? Math.trunc((random() * index) / 2) : null),
      ...defaultColumnValues,
    },
    length: 20,
  }));
  const [tableColumnExtensions] = useState([
    { columnName: 'name', width: 300 },
  ]);
  const [defaultExpandedRowIds] = useState([0]);

  return (
    <Paper>
      <Grid
        rows={data}
        columns={columns}
      >
        <SelectionState />
        <TreeDataState
          defaultExpandedRowIds={defaultExpandedRowIds}
        />
        <CustomTreeData
          getChildRows={getChildRows}
        />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableTreeColumn
          for="name"
          showSelectionControls
        />
      </Grid>
    </Paper>
  );
};


export default ProjectsTree;

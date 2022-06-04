import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React from "react";
import styled from "styled-components";
import { excelFields, FieldExcelType } from "../const/excel";

interface ExcelGridProps {
  data: Record<string, string>[];
}

const defaultColDef: ColDef = {
  filter: true,
  sortable: true,
};

const ExcelGrid: React.FC<ExcelGridProps> = ({ data }) => {
  // const cities = React.useMemo(
  //   () =>
  //     data
  //       .map((row) => row[excelFields[ExcelFieldName.CITY].field])
  //       .filter(onlyUnique),
  //   [data]
  // );

  return (
    <AgGridWrapper className="h-100 w-100 ag-theme-material">
      <AgGridReact
        className="h-100 w-100"
        rowData={data}
        defaultColDef={defaultColDef}
        columnDefs={Object.values(excelFields).map((val) => {
          const colDef: ColDef = {
            ...val,
            tooltipField: val.field,
          };

          // if (
          //   val.filter === AgGridFilter.SELECT &&
          //   val.field === excelFields[ExcelFieldName.CITY].field
          // ) {
          //   colDef.filterParams = {
          //     // newRowsAction: "keep",
          //     // suppressRemoveEntries: true,
          //     values: cities,
          //   };
          //   console.log(colDef);
          // }

          return colDef;
        })}
      />
    </AgGridWrapper>
  );
};

const AgGridWrapper = styled.div`
  .ag-root {
    border: 1px solid gray;
  }

  .ag-header-cell.${FieldExcelType.GENERAL_INFO} {
    background-color: #cdcdff;
  }
  .ag-row-even .${FieldExcelType.GENERAL_INFO} {
    background-color: #d7d7ff;
  }
  .ag-row-odd .${FieldExcelType.GENERAL_INFO} {
    background-color: #eaeafd;
  }

  .ag-header-cell.${FieldExcelType.HEALTH_INFO} {
    background-color: #efc1fd;
  }
  .ag-row-even .${FieldExcelType.HEALTH_INFO} {
    background-color: #efd7ff;
  }
  .ag-row-odd .${FieldExcelType.HEALTH_INFO} {
    background-color: #f7eafd;
  }

  .ag-header-cell.${FieldExcelType.PHYSICAL_INFO} {
    background-color: #fdc1c1;
  }
  .ag-row-even .${FieldExcelType.PHYSICAL_INFO} {
    background-color: #ffd7d7;
  }
  .ag-row-odd .${FieldExcelType.PHYSICAL_INFO} {
    background-color: #fdeaea;
  }
`;

export default React.memo(ExcelGrid);

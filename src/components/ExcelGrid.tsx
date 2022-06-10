import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { excelFields, FieldExcelType } from "../const/excel";
import { choiceTablePattern } from "../store/excel.store";

interface ExcelGridProps {
  data: Record<string, string>[];
}

const defaultColDef: ColDef = {
  filter: true,
  sortable: true,
  checkboxSelection: true,
};

const ExcelGrid: React.FC<ExcelGridProps> = ({ data }) => {
  // const cities = React.useMemo(
  //   () =>
  //     data
  //       .map((row) => row[excelFields[ExcelFieldName.CITY].field])
  //       .filter(onlyUnique),
  //   [data]
  // );

  const choiceExcelPattern = useRecoilValue(choiceTablePattern);
  const colDefs = React.useMemo(() => {
    return Object.values(excelFields)
      .map((val) => {
        if (
          choiceExcelPattern === "potm" &&
          ![FieldExcelType.GENERAL_INFO, FieldExcelType.ESTIMATE].includes(
            val.cellClass as FieldExcelType
          )
        ) {
          return null;
        }

        const colDef: ColDef = {
          ...val,
          tooltipField: val.field,
        };

        return colDef;
      })
      .filter((val): val is ColDef => val !== null);
  }, [choiceExcelPattern]);

  return (
    <AgGridWrapper className="h-100 w-100 ag-theme-material">
      <AgGridReact
        className="h-100 w-100"
        rowSelection="multiple"
        rowData={data}
        defaultColDef={defaultColDef}
        columnDefs={colDefs}
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

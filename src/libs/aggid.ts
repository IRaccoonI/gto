export function isFirstColumn(params: any): boolean {
  const displayedColumns = params.columnApi.getAllDisplayedColumns();
  return displayedColumns[0] === params.column;
}

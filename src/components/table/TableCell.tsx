import { forwardRef, HTMLAttributes } from "react";

const TableCell = forwardRef<
  HTMLTableCellElement,
  HTMLAttributes<HTMLTableCellElement>
>(({ className, ...res }, ref) => {
  return (
    <td
      ref={ref}
      className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
      {...res}
    />
  );
});

TableCell.displayName = "TableCell";
export default TableCell;

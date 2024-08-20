import { forwardRef, HTMLAttributes } from "react";

const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...res }, ref) => {
  return (
    <tr
      ref={ref}
      className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
      {...res}
    />
  );
});
TableRow.displayName = "TableRow";

export default TableRow;

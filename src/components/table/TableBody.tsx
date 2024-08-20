import { forwardRef, HTMLAttributes } from "react";

const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...res }, ref) => {
  return (
    <tbody
      ref={ref}
      className={`[&_tr:last-child]:border-0 ${className}`}
      {...res}
    />
  );
});

TableBody.displayName = "TableBody";
export default TableBody;

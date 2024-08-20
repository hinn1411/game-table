import { forwardRef, HTMLAttributes } from "react";

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...res }, ref) => {
  return (
    <thead ref={ref} className={`[&_tr]:border-b ${className}`} {...res} />
  );
});
TableHeader.displayName = "TableHeader";

export default TableHeader;

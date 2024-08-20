import { FC } from "react";

interface ButtonProps {
  Icon: React.ElementType;
  name: string;
  style?: string;
}

const Button: FC<ButtonProps> = ({ Icon, name, style }) => {
  return (
    <button
      className={`inline-flex items-center rounded-md px-3 py-1.5 h-8 gap-1 text-sm font-medium border bg-black text-white ${style}`}
    >
      <Icon className="w-3.5 h-3.5 flex items-center justify-center" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        {name}
      </span>
    </button>
  );
};

export default Button;

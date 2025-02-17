import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  children: ReactNode;
}

export const Button = ({ onClick, disabled, children }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
  >
    {children}
  </button>
);

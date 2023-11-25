import {PropsWithChildren, useEffect} from "react";
import classNames from "classnames";
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  className?: string;
}

export const Button = ({children, primary, secondary, success, warning, danger, outline, rounded, ...rest}:PropsWithChildren<ButtonProps>) => {
  const checkVariationValue = (): void | Error => {
    const count = [primary, secondary, success, warning, danger].reduce(
      (accumulator:number, variation) => accumulator + Number(!!variation)
    ,0);

    if (count > 1) {
      throw new Error('Only one variation can be true');
    }
  }

  useEffect(() => {
    checkVariationValue();
  },[primary, secondary, success, warning, danger]);

  const classes = twMerge(classNames(rest.className,'flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  }));

  return <button {...rest} className={classes}>{children}</button>;
}
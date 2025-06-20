import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "rounded-full px-6 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles =
    variant === "primary"
      ? "bg-green-500 text-black hover:bg-opacity-80 focus:ring-green-500"
      : "bg-gray-700 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:ring-gray-500";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles} ${className} shadow-lg`}
      onClick={onClick}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </motion.button>
  );
};

export default Button;

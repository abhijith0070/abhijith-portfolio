import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";

interface RippleProps {
  x: number;
  y: number;
}

export const RippleButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "default"
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  variant?: string;
}) => {
  const [ripples, setRipples] = useState<RippleProps[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipples([...ripples, { x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);

    onClick?.();
  };

  const baseClasses = "relative overflow-hidden inline-flex items-center justify-center rounded-md font-medium transition-all";
  const variantClasses = variant === "default" 
    ? "bg-gradient-primary text-white px-6 py-3" 
    : "border border-border px-6 py-3";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {ripples.map((ripple, index) => (
        <motion.span
          key={index}
          className="absolute bg-white/30 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ width: 0, height: 0, x: 0, y: 0 }}
          animate={{ 
            width: 300, 
            height: 300, 
            x: -150, 
            y: -150,
            opacity: [1, 0]
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  );
};

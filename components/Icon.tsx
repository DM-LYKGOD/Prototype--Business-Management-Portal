import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  isFilled?: boolean;
  // FIX: Add `style` prop to allow custom styling and fix type errors.
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ name, className, isFilled, style }) => {
  const internalStyle = isFilled ? { fontVariationSettings: "'FILL' 1" } : {};
  return (
    <span className={`material-symbols-outlined ${className || ''}`} style={{ ...internalStyle, ...style }}>
      {name}
    </span>
  );
};

export default Icon;

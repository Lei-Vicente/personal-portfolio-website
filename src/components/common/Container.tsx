import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  id,
  as: Component = 'div',
}) => {
  return (
    <Component
      id={id}
      className={`w-full max-w-[min(94vw,1800px)] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 ${className}`}
    >
      {children}
    </Component>
  );
};

import React from 'react';
interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hello Child
      <h3>{color}</h3>
      <button onClick={onClick}> Click Me </button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}> Click Me </button>
    </div>
  );
};

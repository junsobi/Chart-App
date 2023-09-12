import React from "react";
import Button from "./Button";

interface UniqueItemsButtonsProps {
  ids: string[];
}

const UniqueItemsButtons: React.FC<UniqueItemsButtonsProps> = ({ ids }) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  return (
    <div>
      <Button
        label="해제"
        isActive={activeId === null}
        onClick={() => setActiveId(null)}
      />
      {ids.map((id) => (
        <Button
          key={id}
          label={id}
          isActive={id === activeId}
          onClick={() => setActiveId(id)}
        />
      ))}
    </div>
  );
};

export default UniqueItemsButtons;

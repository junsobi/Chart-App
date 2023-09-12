import React, { useContext } from "react";
import Button from "./Button";
import { SelectedIdContext } from "../contexts/selectedIdContext";

interface UniqueItemsButtonsProps {
  ids: string[];
}

const UniqueItemsButtons: React.FC<UniqueItemsButtonsProps> = ({ ids }) => {
  const { selectedButton, setSelectedButton } = useContext(SelectedIdContext);

  return (
    <div>
      <Button
        label="해제"
        isActive={selectedButton === null}
        onClick={() => setSelectedButton(null)}
      />
      {ids.map((id) => (
        <Button
          key={id}
          label={id}
          isActive={id === selectedButton}
          onClick={() =>
            setSelectedButton((prevSelected) =>
              prevSelected === id ? null : id
            )
          }
        />
      ))}
    </div>
  );
};

export default UniqueItemsButtons;

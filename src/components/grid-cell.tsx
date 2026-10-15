import { memo, type KeyboardEvent, type Ref } from "react";

interface GridCellProps {
  // The cell's click number, or 0 when it is not selected.
  clickNumber: number;
  onSelect: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  ref: Ref<HTMLButtonElement>;
}

function GridCell({ clickNumber, onSelect, onKeyDown, ref }: GridCellProps) {
  const isSelected = clickNumber > 0;

  const baseClass =
    "h-20 cursor-pointer rounded-lg border border-gray-400 text-2xl transition";
  const stateClass = isSelected
    ? "pop bg-[#3CB371] text-white"
    : "bg-white hover:bg-[#3CB371]/50";

  return (
    <button
      ref={ref}
      className={`${baseClass} ${stateClass}`}
      onClick={onSelect}
      onKeyDown={onKeyDown}
    >
      {isSelected && clickNumber}
    </button>
  );
}

export default memo(GridCell);

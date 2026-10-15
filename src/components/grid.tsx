import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import GridCell from "./grid-cell";

const CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// How far each arrow key moves focus in a grid that is 3 cells wide.
const ARROW_STEPS: Record<string, number> = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -3,
  ArrowDown: 3,
};

function Grid() {
  const [order, setOrder] = useState<number[]>([]);

  console.log("order", order);
  const cellRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleSelect(cell: number) {
    if (!order.includes(cell)) {
      setOrder([...order, cell]);
    }
  }

  function handleKeyDown(event: KeyboardEvent, cell: number) {
    const step = ARROW_STEPS[event.key];
    if (step) {
      event.preventDefault();
      cellRefs.current[cell + step]?.focus();
    }
  }

  const handleClear = () => {
    setOrder([]);
  };

  return (
    <>
      <div className="grid-container">
        {CELLS.map((cell) => (
          <GridCell
            key={cell}
            ref={(element) => {
              cellRefs.current[cell] = element;
            }}
            clickNumber={order.indexOf(cell) + 1}
            onSelect={() => handleSelect(cell)}
            onKeyDown={(event) => handleKeyDown(event, cell)}
          />
        ))}
      </div>

      <button
        disabled={order.length === 0}
        className="mt-5 cursor-pointer rounded border border-gray-400 px-5 py-2 hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={handleClear}
      >
        Clear
      </button>
    </>
  );
}

export default Grid;

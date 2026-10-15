import "./App.css";
import Grid from "./components/grid";

function App() {
  return (
    <main className="p-5 text-center">
      <h1 className="mb-5 text-3xl font-bold">Grid Selection</h1>
      <Grid />
    </main>
  );
}

export default App;

// import type { KeyboardEvent, Ref } from "react";

// interface GridCellProps {
//   // The cell's click number, or 0 when it is not selected.
//   clickNumber: number;
//   onSelect: () => void;
//   onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
//   ref: Ref<HTMLButtonElement>;
// }

// function GridCell({ clickNumber, onSelect, onKeyDown, ref }: GridCellProps) {
//   const isSelected = clickNumber > 0;

//   const baseClass =
//     "h-20 cursor-pointer rounded-lg border border-gray-400 text-2xl";
//   const stateClass = isSelected
//     ? "pop bg-blue-600 text-white"
//     : "bg-white hover:bg-sky-200";

//   return (
//     <button
//       ref={ref}
//       className={`${baseClass} ${stateClass}`}
//       onClick={onSelect}
//       onKeyDown={onKeyDown}
//     >
//       {isSelected && clickNumber}
//     </button>
//   );
// }

// export default GridCell;

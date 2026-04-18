const Buttons = ({
  left,
  right,
  step,
  handleClick,
}: {
  left: string;
  right: string;
  step: number;
  handleClick: (view: number, value: "left" | "right" | null) => void;
}) => (
  <div className="flex gap-3 flex-col md:flex-row">
    <button
      className="px-4 py-1 bg-left text-white rounded-full font-medium text-2xl w-full md:w-auto md:px-12"
      onClick={() => handleClick(step, "left")}
    >
      {left}
    </button>
    <button
      className="px-4 py-1 bg-right text-white rounded-full font-medium text-2xl w-full md:w-auto md:px-12"
      onClick={() => handleClick(step, "right")}
    >
      {right}
    </button>
  </div>
);

export default Buttons;

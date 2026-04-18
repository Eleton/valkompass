import Section from "../components/section";

const Start = ({
  handleClick,
}: {
  handleClick: (view: number, value: "left" | "right" | null) => void;
}) => (
  <Section>
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-black">Aimans Valkompass</h1>
        <h2 className="text-xl">
          Gör Aimans Valkompass™ och ta reda på vilket parti du borde rösta på i
          valet!
        </h2>
      </div>
      <div>
        <button
          className="px-12 py-1 bg-lime text-white rounded-full font-medium text-2xl w-full md:w-auto"
          onClick={() => handleClick(1, null)}
        >
          Starta
        </button>
      </div>
    </div>
  </Section>
);

export default Start;

import Section from "../components/section";

const results = [
  {
    name: "Vänsterpartiet",
    description: "",
  },
  {
    name: "Miljöpartiet",
    description: "",
  },
  {
    name: "Socialdemokraterna",
    description: "",
  },
  {
    name: "Centerpartiet",
    description: "",
  },
  {
    name: "Liberalerna",
    description: "",
  },
  {
    name: "Kristdemokraterna",
    description: "",
  },
  {
    name: "Moderaterna",
    description: "",
  },
];
const Result = ({
  value,
  children,
}: {
  value: { left: number; right: number };
  children: React.ReactNode;
}) => {
  return (
    <Section>
      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex flex-col gap-4 grow">
          <h1 className="text-4xl font-bold text-black">Resultat</h1>
          <div>
            <div className="flex justify-between px-1">
              <div>{`${100 * Math.round(value.left / 6)}% vänster`}</div>
              <div>{`${100 * Math.round(value.right / 6)}% höger`}</div>
            </div>
            <div
              className="grid h-10 rounded-lg overflow-hidden"
              style={{
                gridTemplateColumns: `${value.left}fr ${value.right}fr`,
              }}
            >
              <div className="bg-left text-white font-bold h-full"></div>
              <div className="bg-right text-white font-bold h-full"></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl">
              Du borde rösta på{" "}
              <span className="font-bold">{results[value.left].name}</span>
            </h2>
            <p>{results[value.left].description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Är du nöjd med ditt resultat?</p>
          {children}
        </div>
      </div>
    </Section>
  );
};

export default Result;

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
const SD = ({
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
              <div>{`0% PK`}</div>
              <div>{`100% Sverige`}</div>
            </div>
            <div
              className="grid h-10 rounded-lg overflow-hidden"
              style={{
                gridTemplateColumns: "1fr",
              }}
            >
              <div className="bg-sd text-white font-bold h-full"></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl">
              Du borde rösta på{" "}
              <span className="font-bold">Sverigedemokraterna</span>
            </h2>
            <p>Jimmie Åkesson, tja-la-la-la-laaa~</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {children}
        </div>
      </div>
    </Section>
  );
};

export default SD;

import Section from "../components/section";

const results = [
  {
    name: "Vänsterpartiet",
    description: "Du tycker skatt är det sexigaste som finns, och får vi bara igenom 100% skatt så kan vi äntligen få bukt med arbetslösheten!",
  },
  {
    name: "Miljöpartiet",
    description: "Du brinner för att rädda valarna och regnskogen, och du kan till och med tänka dig att rädda mänskligheten.",
  },
  {
    name: "Socialdemokraterna",
    description: "Du uppskattar Tidös politik, men det känns helt enkelt lite säkrare om det är Maggan som genomför den.",
  },
  {
    name: "Centerpartiet",
    description: "Det är din bestämda åsikt att sakfrågorna går först, d.v.s vilka partier som ska ha ministrar och egentligen bara det.",
  },
  {
    name: "Liberalerna",
    description: "Sannolikheten att du ska rösta på Liberalerna är så liten att vi inte lagt resurser på att skriva en beskrvining av dig.",
  },
  {
    name: "Kristdemokraterna",
    description: "Samhället behöver mer moral! Mycket mer moral! Så mycket moral att det blir dubbel moral!",
  },
  {
    name: "Moderaterna",
    description: "Du tycker att alla i Sverige förtjänar ett arbete, ty arbete ger frihet. Om du fattar vinken.",
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
              <div>{`${Math.round(100 * value.left / 6)}% vänster`}</div>
              <div>{`${Math.round(100 * value.right / 6)}% höger`}</div>
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

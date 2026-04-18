import Section from "../components/section";

const Question = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Section>
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-black">Aimans Valkompass</h1>
        <p className="text-xl font-semibold">{title}</p>
      </div>
      {children}
    </div>
  </Section>
);

export default Question;

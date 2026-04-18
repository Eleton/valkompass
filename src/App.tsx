import { useState } from "react";
import "./App.css";
import Start from "./views/start";
import Buttons from "./components/buttons";
import Question from "./views/question";
import Result from "./views/result";
import SD from "./views/sd";

function App() {
  const [view, setView] = useState(0);
  const [value, setValue] = useState({ left: 0, right: 0 });

  const handleClick = (view: number, value: "left" | "right" | "restart" | null) => {
    setView(view);
    if (!value) return;
    if (value === "restart") {
      setValue({ left: 0, right: 0 });
    } else {
      setValue((prev) => ({ ...prev, [value]: prev[value] + 1 }));
    }
  };

  console.log({ view, value });

  return (
    <main className="h-dvh bg-lime w-full flex flex-col items-stretch justify-center p-4">
      {view === 0 && <Start handleClick={handleClick} />}
      {view === 1 && (
        <Question title="Vad är det finaste som en stat kan ge dig?">
          <Buttons
            left="Trygghet"
            right="Frihet"
            step={2}
            handleClick={handleClick}
          />
        </Question>
      )}
      {view === 2 && (
        <Question title="Vilket av följande personlighetsdrag anser du är osexigast hos en partner?">
          <Buttons
            left="Girighet"
            right="Lathet"
            step={3}
            handleClick={handleClick}
          />
        </Question>
      )}
      {view === 3 && (
        <Question title="Vem var din favoritseriefigur som barn?">
          <Buttons
            left="Bamse"
            right="Joakim von Anka"
            step={4}
            handleClick={handleClick}
          />
        </Question>
      )}
      {view === 4 && (
        <Question title="Du är ute på havet. Vågorna skvalpar, och det blåser upp till storm. Mörka moln närmar sig, det kommer bli blött. Det är dock inga problem, för du vet att du är i gott sällskap. Du kollar fram, på din medpassagerare. Vem är det som sitter i samma båt?">
          <Buttons
            left="Staten"
            right="Kapitalet"
            step={5}
            handleClick={handleClick}
          />
        </Question>
      )}
      {view === 5 && (
        <Question title="Vid vilken ålder bör barn sättas i fängelse?">
          <Buttons left="14" right="13" step={6} handleClick={handleClick} />
        </Question>
      )}
      {view === 6 && (
        <Question title="Vilken är din främsta politiska fetisch?">
          <Buttons
            left="Binda Amanda Lind"
            right="Lebba med Ebba"
            step={7}
            handleClick={handleClick}
          />
        </Question>
      )}
      {view === 7 && (
        <Result value={value}>
          <div className="flex gap-3 flex-col md:flex-row">

            <button
              className="px-4 py-1 bg-sd rounded-full font-medium text-2xl w-full md:w-auto md:px-12"
              onClick={() => handleClick(8, null)}
            >
              NEJ
            </button>
            <button
              className="px-4 py-1 outline-2 outline-black/30 rounded-full font-medium text-2xl w-full md:w-auto md:px-12"
              onClick={() => handleClick(0, "restart")}
            >
              Börja om
            </button>
          </div>
        </Result>
      )}
      {view === 8 && (
        <SD>
          <div className="flex gap-3 flex-col md:flex-row">
            <button
              className="px-4 py-1 outline-2 outline-black/30 rounded-full font-medium text-2xl w-full md:w-auto md:px-12"
              onClick={() => handleClick(0, "restart")}
            >
              Börja om
            </button>
          </div>
        </SD>
      )}
    </main>
  );
}

export default App;

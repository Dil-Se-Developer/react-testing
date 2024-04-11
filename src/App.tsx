import "./App.css";
import { Application } from "./components/application/application";
import { Counter } from "./components/counter/counter";
import { Skills } from "./components/skills/skills";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={skills} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;

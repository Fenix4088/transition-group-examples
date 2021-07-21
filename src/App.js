import './App.css';
import {SimpleLoader} from "./components/SimpleLoader/SimpleLoader";
import {SwitchTransitionComp} from "./components/SwitchTransition/SwitchTransition";
import {TransitionGroupComp} from "./components/TransitionGroup/TransitionGroupComp";

function App() {
  return (
    <div>
        <SimpleLoader/>
        <SwitchTransitionComp/>
        <TransitionGroupComp/>
    </div>
  );
}

export default App;

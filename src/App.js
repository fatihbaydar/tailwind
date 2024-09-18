import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl text-center text-purple-500 font-bold mt-2">Tailwind</h1>
      {/* <Typography/> */}
      {/* <SpacingAndSizing/> */}
      {/* <HoverAndFocus/> */}
      <FlexAndResponsive/>
    </div>
  );
}

export default App;

import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="dark:bg-gray-700 min-h-screen">
      <Navbar/>
      <h1 className="text-2xl text-center text-purple-500 dark:text-white font-bold mt-2">Tailwind</h1>
      {/* <Typography/> */}
      {/* <SpacingAndSizing/> */}
      {/* <HoverAndFocus/> */}
      {/* <FlexAndResponsive/> */}
    </div>
  );
}

export default App;

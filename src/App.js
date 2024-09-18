import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="dark:bg-gray-700 min-h-screen">
      <Navbar />
      <ProfileCard />
      <h1 className="mt-2">
        Tailwind
      </h1>
      {/* <Typography/> */}
      {/* <SpacingAndSizing/> */}
      {/* <HoverAndFocus/> */}
      {/* <FlexAndResponsive/> */}
    </div>
  );
}

export default App;

// burada h1 içinde yer alan text-2xl text-center text-purple-500 dark:text-white font-bold kısmı alıp index.css içindeki layer base içinde tanımladık. böylece her yerde tüm h1ler aynı stile sahip olabilecek.

import { MenubarDemo } from "./components/Element/TopBar";
import MyHeroSection from "./components/Element/HeroSection";
import './App.css';
import CardSection from "./components/Element/CardSection";
import { ValueProvider } from "./ValueContext";

function App() {
  return (

    <div>
      <ValueProvider>
        <MenubarDemo />
        <MyHeroSection />
        <CardSection />
      </ValueProvider>
    </div>

  );
}

export default App;

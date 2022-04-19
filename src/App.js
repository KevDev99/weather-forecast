import WeatherBox from "./components/WeatherBox";

import { WeatherProvider } from "./context/WeatherContext";

import LocationInput from "./components/LocationInput";

function App() {

  return (
    <WeatherProvider>
      <main>
        <LocationInput />
        <WeatherBox />
      </main>
    </WeatherProvider>
  );
}

export default App;

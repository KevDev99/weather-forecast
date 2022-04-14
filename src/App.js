import { useEffect } from "react";
import WeatherBox from "./components/WeatherBox";
import { WeatherProvider } from './context/WeatherContext'


function App() {

  const onPositionReceived = (pos) => {
    const crds = pos.coords;
    console.log(crds.latitude, crds.longitude)
  }

  // set success handler for getting user position
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(onPositionReceived, () => { }, options)
  }, [])

  return (
    <WeatherProvider>
      <main>
        <form id="frmCity" className="frmCity">
          <label htmlFor="city" className="city-label">Your city </label>
          <input className="city-input" type="text" name="city" placeholder="London" />
        </form>



        <WeatherBox />
      </main>
    </WeatherProvider>
  );
}

export default App;

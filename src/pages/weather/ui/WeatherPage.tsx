import './WeatherPage.scss';
import { DateHelper } from "../../../shared/helpers/dateHelper.ts";
import PrecipitationBlock from "./precipitation/PrecipitationBlock.tsx";

const WeatherPage = () => {
  return (
    <div className="weather__block">
      <div className="weather__general-info">
        <PrecipitationBlock />
        <div>2 div</div>
        <div>3 div</div>
      </div>
      <div className="weather__current-weather">
        current-weather
      </div>
    </div>
  );
};

export default WeatherPage;
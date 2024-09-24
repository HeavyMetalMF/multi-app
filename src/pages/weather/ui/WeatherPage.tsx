import './WeatherPage.scss';
import { DateHelper } from "../../../shared/helpers/dateHelper.ts";

const WeatherPage = () => {
  return (
    <div className="weather__block">
      <div className="weather__block__header">
        <div>Курилово</div>
        <div>{DateHelper.Instance.getCurrentDate()}</div>
      </div>
      <div className="weather__block__current-weather">
        <div className="weather__block__current-weather__now">
          left
        </div>
        <div className="weather__block__current-weather__forecast">
          <div className="weather__block__temperature">+10</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
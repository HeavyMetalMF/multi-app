import './WeatherPage.scss';
import { DateHelper } from "../../../shared/helpers/dateHelper.ts";

const WeatherPage = () => {
  return (
    <div className="weather__block">
      <div>
        <span>
          {DateHelper.Instance().getCurrentDate()}
        </span>
        <span>

        </span>
      </div>
    </div>
  );
};

export default WeatherPage;
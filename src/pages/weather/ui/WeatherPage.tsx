import './WeatherPage.scss';
import PrecipitationBlock from "./precipitation/PrecipitationBlock.tsx";
import Rain from "./precipitation/Rain.tsx";
import StyledWeatherBlock from "./styledWeatherBlock/StyledWeatherBlock.tsx";

const WeatherPage = () => {
  return (
    <div className="weather__block">
      <div className="weather__general-info">
        <PrecipitationBlock />
        <div>2 div</div>
        <div>3 div</div>
      </div>
      <div className="weather__current-weather">
        <StyledWeatherBlock isSwitchers className="precipitation__switchers__item" radius={30} width={350} height={150}> <Rain/> </StyledWeatherBlock>
        <StyledWeatherBlock isSwitchers className="precipitation__switchers__item" radius={30} width={400} height={120}> <Rain/> </StyledWeatherBlock>
      </div>
    </div>
  );
};

export default WeatherPage;
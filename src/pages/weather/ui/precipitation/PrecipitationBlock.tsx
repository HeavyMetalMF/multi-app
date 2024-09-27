import Rain from "./Rain.tsx";
import Humidity from "./Humidity.tsx";
import Wind from "./Wind.tsx";
import './precipitation.scss';
import StyledWeatherBlock from "../styledWeatherBlock/StyledWeatherBlock.tsx";
// import  { ReactComponent as DropIcon } from  '../../../../shared/ui/assets/img/drop.svg';

const PrecipitationBlock = () => {
  return (
    <div>
      <StyledWeatherBlock className="precipitation__full-info" radius={30} width={205} height={185}>
          <div>
              <div>
                  top info
                  {/*<DropIcon />*/}
              </div>
              <div>bottom info</div>
          </div>
      </StyledWeatherBlock>
        <div className="precipitation__switchers">
        <StyledWeatherBlock className="precipitation__switchers__item" radius={8} width={50} height={50}> <Rain/> </StyledWeatherBlock>
        <StyledWeatherBlock className="precipitation__switchers__item" radius={8} width={50} height={50}> <Humidity /> </StyledWeatherBlock>
        <StyledWeatherBlock className="precipitation__switchers__item" radius={8} width={50} height={50}> <Wind /> </StyledWeatherBlock>
      </div>
    </div>
  );
};

export default PrecipitationBlock;
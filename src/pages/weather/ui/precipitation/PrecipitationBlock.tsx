import Rain from "./Rain.tsx";
import Humidity from "./Humidity.tsx";
import Wind from "./Wind.tsx";
import './precipitation.scss';
import StyledWeatherBlock from "../styledWeatherBlock/StyledWeatherBlock.tsx";
import DropIcon from  '../../../../shared/ui/assets/img/drop2.svg?react';

const PrecipitationBlock = () => {
  return (
    <div>
      <StyledWeatherBlock radius={30} width={255} height={220}>
          <div className="precipitation__full-info">
            <div className="precipitation__full-info__top">
              <div className="precipitation__full-info__top__data">
                <div className="precipitation__full-info__top__data__header">
                  <DropIcon  style={{width: '15px'}} />
                  <span className="precipitation__full-info__top__data__header__text">Влажность</span>
                </div>
                <div className="precipitation__full-info__top__data__procent">13%</div>
                <span className="precipitation__full-info__top__data__status">Влажно</span>
              </div>
              <div className="precipitation__full-info__top__thermometer">
                <div className="precipitation__full-info__top__thermometer__current-data" style={{bottom: 'calc(50% - 10px)'}}></div>
              </div>
            </div>
            <div className="precipitation__full-info__bottom">
              <div>lorem ipsumtext</div>
              <div>sadasdaj fdfds f</div>
            </div>
          </div>
      </StyledWeatherBlock>
        <div className="precipitation__switchers">
        <StyledWeatherBlock isSwitchers className="precipitation__switchers__item" radius={8} width={60} height={60}> <Rain/> </StyledWeatherBlock>
        <StyledWeatherBlock isSwitchers className="precipitation__switchers__item" radius={8} width={60} height={60}> <Humidity /> </StyledWeatherBlock>
        <StyledWeatherBlock isSwitchers className="precipitation__switchers__item" radius={8} width={60} height={60}> <Wind /> </StyledWeatherBlock>
      </div>
    </div>
  );
};

export default PrecipitationBlock;
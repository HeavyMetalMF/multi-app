import './StyledWeatherBlock.scss';
import { StyledWeatherBlockProps } from "../types.ts";
import classNames from 'classnames';


const StyledWeatherBlock = ({children, width, height, radius, className, isSwitchers}: StyledWeatherBlockProps) => {
  const contentWidth = isSwitchers ? width - 12 : width - 30
  const contentHeight = isSwitchers ? height - 12 : height - 30
  const contentRadius = isSwitchers ? radius : radius - 10
  return (
    <div style={{width: width, height: height, borderRadius: radius}} className={classNames('styled-weather_block__border')}>
      <div style={{width: contentWidth, height: contentHeight, borderRadius: contentRadius}} className={classNames('styled-weather_block__content', className)}>
        {children}
      </div>
    </div>
  );
};

export default StyledWeatherBlock;
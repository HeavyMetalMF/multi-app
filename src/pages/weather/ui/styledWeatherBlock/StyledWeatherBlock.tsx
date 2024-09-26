import './StyledWeatherBlock.scss';
import { StyledWeatherBlockProps } from "../types.ts";
import classNames from 'classnames';


const StyledWeatherBlock = ({children, width, height, radius, className}: StyledWeatherBlockProps) => {
  return (
    <div style={{width: width, height: height, borderRadius: radius}} className={classNames('weather_block', className)}>
      {children}
    </div>
  );
};

export default StyledWeatherBlock;
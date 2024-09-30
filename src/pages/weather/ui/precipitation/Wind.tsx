import './precipitation.scss';
import WindIcon from  '../../../../shared/ui/assets/img/wind-white.svg?react';

const Wind = () => {
  return (
    <div className="precipitation__wind">
      <WindIcon className="precipitation__wind__icon" />
    </div>
  );
};

export default Wind;
import './precipitation.scss';
import ManyDrops from  '../../../../shared/ui/assets/img/manyDrops.svg?react';

// Влажность
const Humidity = () => {
  return (
    <div className="precipitation__humidity">
      <ManyDrops className="precipitation__humidity__drops" />
    </div>
  );
};

export default Humidity;
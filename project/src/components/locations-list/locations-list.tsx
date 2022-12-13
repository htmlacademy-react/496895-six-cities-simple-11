import { memo } from 'react';
import {CITIES_NAMES} from '../../constants/constants';
import Location from '../location/location';

type TLocationList = {
  currentCityName: string;
}

function LocationList({currentCityName} : TLocationList) : JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES_NAMES.map((cityName) => <Location key={cityName} cityName={cityName} isActive={cityName === currentCityName} />)}
      </ul>
    </section>
  );
}

export default memo(LocationList);

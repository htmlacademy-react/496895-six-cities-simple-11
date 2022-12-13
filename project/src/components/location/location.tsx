import {memo, SyntheticEvent} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeCity, changeSortingType, setOffers} from '../../store/offers-process/offers-process';

import {DEFAULT_OFFERS_SORTING_OPTION} from '../../constants/constants';

type TLocationProps = {
  cityName: string;
  isActive: boolean;
}

function Location({cityName, isActive} : TLocationProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const modifierClassName = isActive ? ' tabs__item--active' : '';
  const locationClassName = `locations__item-link tabs__item${modifierClassName}`;

  const handleLocationItemClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
    dispatch(setOffers());
    dispatch(changeSortingType(DEFAULT_OFFERS_SORTING_OPTION));
  };

  return (
    <li className="locations__item">
      <a className={locationClassName} onClick={handleLocationItemClick} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default memo(Location);

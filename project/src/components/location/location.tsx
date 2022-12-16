import {memo, SyntheticEvent} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeCity, setOffers} from '../../store/offers-process/offers-process';

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

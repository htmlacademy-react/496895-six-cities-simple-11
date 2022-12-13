import {memo, useState} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {SORTING_OPTIONS} from '../../constants/constants';
import {TSortingEnum} from '../../types/types';
import SortingOption from '../sorting-option/sorting-option';
import {getSortingType} from '../../store/offers-process/selectors';
import {changeSortingType, sortingActionsMap} from '../../store/offers-process/offers-process';

function Sorting() : JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const sortingType = useAppSelector(getSortingType);
  const dispatch = useAppDispatch();
  const modifierClassName = isActive ? ' places__options--opened' : '';

  const handleOptionClick = (type: TSortingEnum) => {
    dispatch(sortingActionsMap[type]());
    dispatch(changeSortingType(type));
    setIsActive(false);
  };

  const handleSortingClick = () => {
    setIsActive(!isActive);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingClick}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${modifierClassName}`}>
        {SORTING_OPTIONS.map((option) => <SortingOption key={option} onOptionClick={handleOptionClick} isActive={option === sortingType} name={option} />)}
      </ul>
    </form>
  );
}

export default memo(Sorting);

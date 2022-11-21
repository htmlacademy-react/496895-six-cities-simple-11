import {useState} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {SORTING_OPTIONS, sortingActionsMap} from '../../constants/constants';
import {changeSortingTypeAction} from '../../store/action';
import {TSortingEnum} from '../../types/types';
import SortingOption from '../sorting-option/sorting-option';

function Sorting() : JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector((staate) => staate.sortingType);
  const modifierClassName = isActive ? ' places__options--opened' : '';

  const handleOptionClick = (sortingType: TSortingEnum) => {
    dispatch(sortingActionsMap[sortingType]());
    dispatch(changeSortingTypeAction(sortingType));
    setIsActive(false);
  };

  const handleSortingClick = () => {
    setIsActive(!isActive);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingClick}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${modifierClassName}`}>
        {SORTING_OPTIONS.map((option) => <SortingOption key={option} onOptionClick={handleOptionClick} isActive={option === selectedOption} name={option} />)}
      </ul>
    </form>
  );
}

export default Sorting;

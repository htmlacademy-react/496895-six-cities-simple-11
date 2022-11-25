import {TSortingEnum} from '../../types/types';

type TSortingOptionProps = {
  name: TSortingEnum;
  isActive: boolean;
  onOptionClick: (sortingType: TSortingEnum) => void;
}

function SortingOption({name, isActive, onOptionClick} : TSortingOptionProps) : JSX.Element {
  const optionModifierClassName = isActive ? ' places__option--active' : '';
  const optionClassName = `places__option${optionModifierClassName}`;

  const handleOptionClick = () => {
    onOptionClick(name);
  };

  return (
    <li className={optionClassName} tabIndex={0} onClick={handleOptionClick}>{name}</li>
  );
}

export default SortingOption;

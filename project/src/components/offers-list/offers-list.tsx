import OfferCard from '../../components/offer-card/offer-card';
import {TOffer} from '../../types/types';

type TOffersListProps = {
  offers: TOffer[];
  onCardHover?: (id: number) => void | undefined;
  isNear?: boolean;
}

function OffersList({offers, onCardHover, isNear}: TOffersListProps): JSX.Element {
  const SecondaryClassName = {
    Section: isNear ? 'near-places' : 'cities__places',
    Title: isNear ? 'near-places__title' : 'visually-hidden',
    List: isNear ? 'near-places__list' : 'cities__places-list tabs__content'
  };

  const titleText = isNear ? 'Other places in the neighbourhood' : 'Places';

  return (
    <section className={`${SecondaryClassName.Section} places`}>
      <h2 className={SecondaryClassName.Title}>{titleText}</h2>

      {!isNear &&
        <>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
        </>}

      <div className={`${SecondaryClassName.List} places__list`}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            onCardHover={onCardHover}
            offer={offer}
            isNear={isNear}
          />)
        )}
      </div>
    </section>
  );
}

export default OffersList;

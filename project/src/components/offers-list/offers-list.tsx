import OfferCard from '../offer-card/offer-card';
import Sorting from '../sorting/sorting';
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
          <b className="places__found">{offers.length} places to stay in {offers[0].city.name}</b>
          <Sorting />
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

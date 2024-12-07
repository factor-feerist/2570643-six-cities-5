import { SortingOptions } from '../const';
import { OfferPreview } from '../types/offer';

function getRatingPercentage(rating: number) {
  return `${20 * rating}%`;
}

function getSortedOfferPreviews(offers: OfferPreview[], sortingOption: SortingOptions) {
  switch (sortingOption) {
    case SortingOptions.Popular:
      return offers.slice();
    case SortingOptions.PriceLowToHigh:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortingOptions.PriceHighToLow:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortingOptions.TopRatedFirst:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
}

export { getRatingPercentage, getSortedOfferPreviews };

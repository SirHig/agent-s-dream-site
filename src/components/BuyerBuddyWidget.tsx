import { createElement } from 'react';

interface BuyerBuddyWidgetProps {
  type: 'SearchForm' | 'ListingResults' | 'SearchDetails';
  className?: string;
}

const BuyerBuddyWidget = ({ type, className }: BuyerBuddyWidgetProps) => {
  return createElement('bb-widget', {
    'data-type': type,
    className: className
  });
};

export default BuyerBuddyWidget;

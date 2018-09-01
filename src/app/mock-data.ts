import { Promo, PromoOpts } from './promo';

const promosDefs: PromoOpts[] = [
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795'],
    title: 'Title for a promo',
    region: [0, 0, 20, 20]
  },
  {
    page: 1,
    upcs: ['0028400083591'],
    title: 'Another promo title',
    region: [20, 20, 20, 20]
  },
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795'],
    region: [40, 40, 20, 20]
  },
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795'],
    title: 'Fresh Ground Beef'
  },
  {
    page: 1,
    upcs: ['0028400083591'],
    title: 'Another promo title'
  },
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795']
  },
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795'],
    title: 'Title for a promo'
  },
  {
    page: 1,
    upcs: ['0028400083591'],
    title: 'Another promo title'
  },
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795']
  },
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795'],
    title: 'Title for a promo'
  },
  {
    page: 1,
    upcs: ['0028400083591'],
    title: 'Another promo title'
  },
  {
    page: 1,
    upcs: ['0855088005467', '0856312002795']
  },
];

const promos: Promo[] = promosDefs.map(opts => new Promo(opts));

export { promos };
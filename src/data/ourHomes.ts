import pic1 from '../assets/homes/rahim home pic (1).jpeg'
import pic2 from '../assets/homes/rahim home pic (2).jpeg'
import pic3 from '../assets/homes/rahim home pic (3).jpeg'
import pic4 from '../assets/homes/rahim home pic (4).jpeg'
import pic5 from '../assets/homes/rahim home pic (5).jpeg'

/*
 * Our Homes page content.
 *
 * Only the five client-supplied photographs are used. `pic2` is reserved for
 * the Our Location section. Captions describe only what is visibly present in
 * each photograph and do not claim facilities, features or services.
 */

export const homeImages = {
  bedroom: { src: pic1, alt: 'A bedroom with a double bed, soft bedding, bedside lamp and a window with curtains' },
  location: { src: pic2, alt: 'Brick houses beside a large open area of grass under a clear blue sky' },
  kitchen: { src: pic3, alt: 'A kitchen with white gloss units, an extractor hood, a double oven and a tiled floor' },
  seating: { src: pic4, alt: 'A seating area with two armchairs around a small round table, with curtained windows' },
  lounge: { src: pic5, alt: 'A living room with a large corner sofa, a coffee table and framed pictures on the wall' },
}

/** The client-approved Our Location paragraph, used verbatim. Do not edit. */
export const LOCATION_TEXT =
  'Nestled within the beautiful countryside of Buckinghamshire, Rahim Care Group offers a peaceful, semi-rural setting that combines the tranquillity of countryside living with convenient access to local amenities, educational facilities and community resources. Surrounded by picturesque landscapes, green spaces and charming market towns, our location provides a welcoming and nurturing environment where children and young people can enjoy a sense of calm, privacy and belonging. The balance between rural surroundings and accessible community facilities creates an ideal setting for promoting emotional wellbeing, personal development and positive experiences.'

export interface GalleryItem {
  src: string
  alt: string
  caption: string
}

/** The remaining four photographs for the Explore Our Homes gallery. */
export const GALLERY: GalleryItem[] = [
  {
    src: pic5,
    alt: homeImages.lounge.alt,
    caption: 'A living room with a corner sofa and seating area',
  },
  {
    src: pic1,
    alt: homeImages.bedroom.alt,
    caption: 'A bedroom with a double bed and bedside lamp',
  },
  {
    src: pic3,
    alt: homeImages.kitchen.alt,
    caption: 'A kitchen with fitted units and a dining area',
  },
  {
    src: pic4,
    alt: homeImages.seating.alt,
    caption: 'A quiet seating area with armchairs',
  },
]

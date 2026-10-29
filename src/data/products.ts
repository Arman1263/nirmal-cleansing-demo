/**
 * NIRMAL - Product Catalogue Data
 *
 * NOTE FOR BUSINESS OWNER / DEVELOPER:
 * All product specifications, sample prices, descriptions, and imagery are
 * demonstration placeholders. No unverified certifications or claims are made.
 * Replace with verified SKU data, accurate packaging specifications, and
 * professional product photography before production launch.
 */

export type ProductCategoryType =
  | 'floor-cleaner'
  | 'bathroom-cleaner'
  | 'toilet-cleaner'
  | 'body-soap';

export type CategoryGroup = 'household-cleaning' | 'personal-care';

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryType;
  categoryGroup: CategoryGroup;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  size: string;
  availableSizes: string[];
  samplePrice: string;
  isSamplePrice: boolean;
  image: string;
  imageAlt: string;
  packagingType: string;
  features: string[];
  usageInstructions: string;
  badge?: string;
}

export interface CategoryMetadata {
  id: ProductCategoryType | 'all';
  label: string;
  group?: CategoryGroup;
  description: string;
}

export const CATEGORY_GROUPS = [
  {
    id: 'household-cleaning' as CategoryGroup,
    title: 'Household Cleaning Essentials',
    tagline: 'Spotless surfaces, sparkling tiles, and long-lasting freshness.',
    description:
      'Formulated for everyday home hygiene. Removes tough grime, grease, and water stains from floors, bathrooms, and sanitary ware with ease.',
    categories: ['floor-cleaner', 'bathroom-cleaner', 'toilet-cleaner'],
    image:
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80',
    itemCountText: '6 Products Available',
  },
  {
    id: 'personal-care' as CategoryGroup,
    title: 'Personal Care & Soaps',
    tagline: 'Gentle cleansing bars crafted for wholesome daily bathing.',
    description:
      'Carefully made bathing soaps combining nourishing moisture and refreshing traditional aromas for gentle, non-drying skin care.',
    categories: ['body-soap'],
    image:
      'https://images.unsplash.com/photo-1607006314144-8d933390c370?auto=format&fit=crop&w=800&q=80',
    itemCountText: '4 Handcrafted Soap Bars',
  },
];

export const FILTER_TABS: Array<{ id: 'all' | ProductCategoryType; label: string }> = [
  { id: 'all', label: 'All Products' },
  { id: 'floor-cleaner', label: 'Floor Cleaners' },
  { id: 'bathroom-cleaner', label: 'Bathroom Cleaners' },
  { id: 'toilet-cleaner', label: 'Toilet Cleaners' },
  { id: 'body-soap', label: 'Body Soaps' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'nirmal-pine-floor-cleaner',
    name: 'Nirmal Pine Fresh Floor Cleaner',
    category: 'floor-cleaner',
    categoryGroup: 'household-cleaning',
    categoryLabel: 'Floor Cleaner',
    shortDescription:
      'Deep cleaning liquid for marble, tile, and stone floors with an invigorating natural pine scent.',
    fullDescription:
      'Nirmal Pine Fresh Floor Cleaner is an everyday household essential designed to lift dirt, dust, and oily grime effortlessly. Formulated specifically for Indian household flooring including polished marble, vitrified tiles, and mosaic surfaces. Leaves no sticky residue and infuses the home with a long-lasting, crisp pine freshness.',
    size: '1000 ml',
    availableSizes: ['500 ml', '1000 ml', '5 Litre Can'],
    samplePrice: '₹125',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Pine Fresh Floor Cleaner in ergonomic bottle',
    packagingType: 'Ergonomic leak-proof HDPE bottle with measuring cap',
    badge: 'Bestseller',
    features: [
      'Lifts stubborn stains & daily dust',
      'Non-sticky quick-drying formula',
      'Invigorating natural pine aroma',
      'Suitable for marble, tiles & granite',
    ],
    usageInstructions:
      'Dilute 1 capful (approx. 20ml) in half a bucket of clean water (approx. 4 litres). Mop the floor gently. No rinsing required.',
  },
  {
    id: 'nirmal-citrus-floor-cleaner',
    name: 'Nirmal Citrus Sparkle Floor Cleaner',
    category: 'floor-cleaner',
    categoryGroup: 'household-cleaning',
    categoryLabel: 'Floor Cleaner',
    shortDescription:
      'Zesty lemon and citrus infused floor wash for high-traffic living areas and kitchen floors.',
    fullDescription:
      'Crafted to tackle greasy kitchen spills, dust, and footmarks, Nirmal Citrus Sparkle delivers sparkling clean floors with an uplifting citrus zest. Its concentrated formulation cuts through sticky residues without stripping the natural sheen of your flooring.',
    size: '1000 ml',
    availableSizes: ['1000 ml', '5 Litre Can'],
    samplePrice: '₹120',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Citrus Sparkle Floor Wash bottle',
    packagingType: 'Heavy-duty recyclable plastic bottle with carry handle',
    features: [
      'Cuts kitchen grease and cooking oils',
      'Streak-free shine on vitrified tiles',
      'Fresh citrus peel fragrance',
      'Safe for regular daily mopping',
    ],
    usageInstructions:
      'Mix 1 capful into 4 litres of water. For greasy kitchen stains, apply a small amount directly onto a wet cloth, wipe, and mop with plain water.',
  },
  {
    id: 'nirmal-tough-stain-bathroom-cleaner',
    name: 'Nirmal Power Action Bathroom Cleaner',
    category: 'bathroom-cleaner',
    categoryGroup: 'household-cleaning',
    categoryLabel: 'Bathroom Cleaner',
    shortDescription:
      'Specialised formulation to dissolve hard water scale, soap scum, and yellow stains on tiles and fittings.',
    fullDescription:
      'Hard water stains and stubborn soap scum can dull your bathroom tiles and taps. Nirmal Power Action Bathroom Cleaner targets mineral buildup, soap residues, and grime on ceramic tiles, washbasins, and chrome fixtures. Restores natural gloss without harsh noxious fumes.',
    size: '500 ml',
    availableSizes: ['500 ml', '1000 ml'],
    samplePrice: '₹110',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Power Action Bathroom Cleaner bottle',
    packagingType: 'Grip-textured bottle with directional squirt nozzle',
    badge: 'Fast Acting',
    features: [
      'Dissolves tough hard water & soap marks',
      'Brightens ceramic tiles and washbasins',
      'Gentle on chrome fittings when used as directed',
      'Leaves a clean, fresh floral aroma',
    ],
    usageInstructions:
      'Squirt onto tiled surfaces or washbasin. Spread evenly with a soft sponge or brush. Allow to sit for 3 to 5 minutes, then scrub gently and rinse thoroughly with clean water.',
  },
  {
    id: 'nirmal-ceramic-sparkle-bathroom-cleaner',
    name: 'Nirmal Daily Tile & Basin Wash',
    category: 'bathroom-cleaner',
    categoryGroup: 'household-cleaning',
    categoryLabel: 'Bathroom Cleaner',
    shortDescription:
      'Mild daily bathroom wash for everyday maintenance of sinks, mirrors, and shower partitions.',
    fullDescription:
      'A gentle, non-abrasive bathroom maintenance wash meant for everyday upkeep. Prevents the accumulation of yellow water stains, grime, and scum on modern glass partitions, acrylic shower panels, and ceramic vanity tops.',
    size: '1000 ml',
    availableSizes: ['500 ml', '1000 ml'],
    samplePrice: '₹140',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Daily Tile & Basin Wash',
    packagingType: 'Ergonomic bottle with precision dispenser',
    features: [
      'Gentle for daily maintenance',
      'Prevents scale buildup on shower glass',
      'Non-abrasive formula that protects glaze',
      'Pleasant ocean breeze scent',
    ],
    usageInstructions:
      'Dilute 1 part cleaner with 3 parts water in a spray bottle or mug. Wipe down surfaces with a sponge and rinse with water.',
  },
  {
    id: 'nirmal-deep-clean-toilet-cleaner',
    name: 'Nirmal Deep Clean Power Toilet Cleaner',
    category: 'toilet-cleaner',
    categoryGroup: 'household-cleaning',
    categoryLabel: 'Toilet Cleaner',
    shortDescription:
      'Thick clinging formula that coats the toilet bowl to remove tough stains, limescale, and odours.',
    fullDescription:
      'Nirmal Deep Clean Power Toilet Cleaner features a high-viscosity clinging gel that adheres to the curved surfaces of Indian and Western toilet bowls. Formulated to lift deep limescale deposits, rust stains, and organic soils from rim to u-bend, delivering sparkling hygiene with every flush.',
    size: '750 ml',
    availableSizes: ['500 ml', '750 ml', '1000 ml'],
    samplePrice: '₹95',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Deep Clean Power Toilet Cleaner bottle with angled neck',
    packagingType: 'Angled-neck bottle for easy under-the-rim application',
    badge: 'High Viscosity',
    features: [
      'Thick gel coats and clings to bowl walls',
      'Removes tough limescale and yellow ring stains',
      'Reaches deep under the rim with angled neck',
      'Neutralises foul sanitary odours',
    ],
    usageInstructions:
      'Squeeze the bottle to apply the gel around the inner rim of the toilet bowl. Leave for 15 to 20 minutes for the thick formula to act. Brush lightly and flush clean.',
  },
  {
    id: 'nirmal-descale-ultra-toilet-cleaner',
    name: 'Nirmal Ultra Descaler Toilet Wash',
    category: 'toilet-cleaner',
    categoryGroup: 'household-cleaning',
    categoryLabel: 'Toilet Cleaner',
    shortDescription:
      'Heavy-duty descaling solution engineered for regions with severe hard groundwater.',
    fullDescription:
      'Specifically formulated for Indian households coping with borewell water and heavy calcium deposits. Nirmal Ultra Descaler acts on stubborn mineral crusts and borewell stains without weakening ceramic finishes when used as instructed.',
    size: '500 ml',
    availableSizes: ['500 ml', '1000 ml'],
    samplePrice: '₹85',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Ultra Descaler Toilet Wash',
    packagingType: 'Child-resistant cap with directional nozzle',
    features: [
      'Targeted for borewell & hard water stains',
      'Rapid mineral breakdown action',
      'Leaves porcelain sparkling white',
      'Easy-grip bottle with safety cap',
    ],
    usageInstructions:
      'Apply directly over stubborn deposits. Allow to stand for 10 minutes. Scrub thoroughly with a toilet brush and flush.',
  },
  {
    id: 'nirmal-gentle-neem-tulsi-soap',
    name: 'Nirmal Gentle Neem & Tulsi Soap',
    category: 'body-soap',
    categoryGroup: 'personal-care',
    categoryLabel: 'Body Soap',
    shortDescription:
      'Traditional clarifying bathing bar with pure extracts of neem and holy basil for refreshing daily baths.',
    fullDescription:
      'Nirmal Gentle Neem & Tulsi Soap brings time-tested botanicals to your everyday bathing routine. Made through small-batch cold saponification with plant-derived oils, this bar produces a rich, creamy lather that gently washes away sweat, impurities, and oil while respecting skin comfort.',
    size: '125 g',
    availableSizes: ['100 g', '125 g', 'Pack of 3 (125g each)'],
    samplePrice: '₹45',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1607006314144-8d933390c370?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Gentle Neem and Tulsi Soap bar with herbs',
    packagingType: 'Eco-conscious biodegradable paper box with moisture-barrier liner',
    badge: 'Customer Favourite',
    features: [
      'Crafted with Neem & Tulsi herbal extracts',
      'Rich, velvety lather for clean skin feel',
      'Free from artificial heavy synthetic perfumes',
      'Long-lasting firm bar that doesn’t turn mushy',
    ],
    usageInstructions:
      'Rub the bar between wet hands or loofah to generate rich lather. Smooth over damp body and rinse completely with water. Keep dry in a drained soap dish after use.',
  },
  {
    id: 'nirmal-pure-glycerin-moisture-bar',
    name: 'Nirmal Pure Glycerin Moisture Bar',
    category: 'body-soap',
    categoryGroup: 'personal-care',
    categoryLabel: 'Body Soap',
    shortDescription:
      'Translucent amber glycerin soap formulated to preserve natural skin moisture during dry seasons.',
    fullDescription:
      'An ultra-mild, translucent bathing bar enriched with pure vegetable glycerin. Ideal for individuals whose skin feels tight or dry after ordinary soap baths. Gently cleanses without stripping away the essential natural lipid layer of your skin.',
    size: '100 g',
    availableSizes: ['100 g', '125 g'],
    samplePrice: '₹50',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Pure Glycerin translucent soap bar',
    packagingType: 'Transparent protective inner sleeve with gold-foil stamped box',
    features: [
      'High glycerin content for moisture retention',
      'Mild non-irritating cleansing base',
      'Light soothing honey-dew fragrance',
      'Suitable for delicate & dry skin types',
    ],
    usageInstructions:
      'Lather gently onto wet skin and rinse thoroughly. For best bar longevity, store away from standing water.',
  },
  {
    id: 'nirmal-sandalwood-turmeric-bar',
    name: 'Nirmal Sandalwood & Turmeric Bathing Bar',
    category: 'body-soap',
    categoryGroup: 'personal-care',
    categoryLabel: 'Body Soap',
    shortDescription:
      'Aromatic bathing bar infused with classic Indian sandalwood aroma and golden turmeric essence.',
    fullDescription:
      'Experience the heritage of Indian bathing rituals. Nirmal Sandalwood & Turmeric Bathing Bar blends warm, woody sandalwood aroma with soothing turmeric to refresh tired senses and leave your skin feeling soft, fragrant, and pampered after every morning bath.',
    size: '125 g',
    availableSizes: ['125 g', 'Pack of 4 (Value pack)'],
    samplePrice: '₹55',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1547793548-710ec928bb20?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Sandalwood and Turmeric soap on stone slab',
    packagingType: 'Premium embossed gift-ready paper carton',
    badge: 'Heritage Blend',
    features: [
      'Warm traditional sandalwood fragrance',
      'Infused with fine turmeric extract',
      'Triple-milled for long-lasting performance',
      'Leaves skin delicately perfumed',
    ],
    usageInstructions:
      'Work into a creamy foam across wet skin, enjoy the warm sandalwood aroma, and rinse clean with warm or cool water.',
  },
  {
    id: 'nirmal-shea-nourishing-soap',
    name: 'Nirmal Shea Butter Comfort Soap',
    category: 'body-soap',
    categoryGroup: 'personal-care',
    categoryLabel: 'Body Soap',
    shortDescription:
      'Richly conditioning bath bar formulated with pure shea butter and coconut oil for soft skin.',
    fullDescription:
      'Formulated for superior softness, this nourishing bar blends rich shea butter with saponified cold-pressed coconut oil. It creates a dense, cushiony lather that coddles the skin, making it a daily favourite for morning showers.',
    size: '100 g',
    availableSizes: ['100 g', '125 g'],
    samplePrice: '₹60',
    isSamplePrice: true,
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Nirmal Shea Butter Comfort Soap bar',
    packagingType: 'Textured handmade kraft paper wrapper',
    features: [
      'Enriched with natural shea butter',
      'Cushiony, creamy lather',
      'Comforting sweet vanilla & almond scent',
      'Protects skin from drying tap water',
    ],
    usageInstructions:
      'Lather generously on damp body, massage softly, and wash off with clean water.',
  },
];

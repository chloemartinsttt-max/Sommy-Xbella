import heroBraidsImg from '../assets/images/hero_model_braids_1792441907713.jpg';
import serviceBraidsImg from '../assets/images/service_braids_black_1792441922916.jpg';
import serviceLashesImg from '../assets/images/service_lashes_black_1792441922259.jpg';
import serviceBrowsImg from '../assets/images/service_brows_black_1792441924439.jpg';
import serviceOutfitsImg from '../assets/images/service_outfit_black_1792441923902.jpg';
import galleryBohoImg from '../assets/images/gallery_boho_black_1792441924466.jpg';
import galleryLashesNaturalImg from '../assets/images/service_lashes_black_1792441922259.jpg';
import galleryCoutureImg from '../assets/images/service_outfit_black_1792441923902.jpg';
import aboutStylistImg from '../assets/images/about_stylist_black_1792441925776.jpg';
import sommyPhotoImg from '../assets/images/sommy_founder.jpg';
import logoImg from '../assets/images/logo.jpg';

export {
  heroBraidsImg,
  serviceBraidsImg,
  serviceLashesImg,
  serviceBrowsImg,
  serviceOutfitsImg,
  galleryBohoImg,
  galleryLashesNaturalImg,
  galleryCoutureImg,
  aboutStylistImg,
  sommyPhotoImg,
  logoImg,
};

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  fallbackImage: string;
  highlights: string[];
  category: 'hair' | 'lashes' | 'brows' | 'fashion';
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'lashes-brows' | 'fashion';
  categoryLabel: string;
  image: string;
  fallbackImage: string;
  description: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Scissors' | 'Layers' | 'ShieldCheck' | 'HeartHandshake';
}

export const BRAND_PHONE = '+234 814 332 6565';
export const BRAND_PHONE_CLEAN = '2348143326565';
export const WHATSAPP_BASE_URL = `https://wa.me/${BRAND_PHONE_CLEAN}`;

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = 'Hello SOMMY XBELLA! I would like to inquire about booking an appointment.';
  const message = customMessage || defaultText;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'braids-hair-styling',
    name: 'Braids & Hair Styling',
    description: 'Beautiful braids and carefully styled hair to complement your personality, occasion, and individual taste.',
    image: serviceBraidsImg,
    fallbackImage: '/images/service_braids_black_1792441922916.jpg',
    highlights: [
      'Knotless & Box Braids',
      'Bohemian & Goddess Braids',
      'Stitch Cornrows & Scalp Art',
      'Sleek Ponytails & Updos',
      'Bridal & Event Hair Styling',
    ],
    category: 'hair',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to book an appointment for Braids & Hair Styling.',
  },
  {
    id: 'cluster-lashes',
    name: 'Cluster Lashes',
    description: 'Enhance your eyes with beautiful cluster lashes for a soft, natural, or glamorous finish.',
    image: serviceLashesImg,
    fallbackImage: '/images/service_lashes_black_1792441922259.jpg',
    highlights: [
      'Soft Natural Day Look',
      'Wispy Hybrid Volume',
      'Cat-Eye Flare Finish',
      'Lightweight Long-Wear Lash Comfort',
      'Gentle Safe Application',
    ],
    category: 'lashes',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to book an appointment for Cluster Lashes.',
  },
  {
    id: 'eyebrow-trimming',
    name: 'Eyebrow Trimming',
    description: 'Keep your brows neat, defined, and beautifully shaped to complement your features.',
    image: serviceBrowsImg,
    fallbackImage: '/images/service_brows_black_1792441924439.jpg',
    highlights: [
      'Precision Brow Architecture',
      'Razor & Razor-Sharp Finish',
      'Facial Proportion Mapping',
      'Clean & Gentle Grooming',
      'Long-Lasting Neat Definition',
    ],
    category: 'brows',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to book an appointment for Eyebrow Trimming.',
  },
  {
    id: 'dressmaking-custom-outfits',
    name: 'Dressmaking & Custom Outfits',
    description: 'Bring your fashion ideas to life with custom outfits designed around your style and preferences.',
    image: serviceOutfitsImg,
    fallbackImage: '/images/service_outfit_black_1792441923902.jpg',
    highlights: [
      'Bespoke Tailoring & Measurements',
      'Evening Gowns & Celebration Wear',
      'African Contemporary Fashion',
      'Fabric Sourcing & Consultation',
      'Perfect Custom Silhouette Fit',
    ],
    category: 'fashion',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to discuss and book a consultation for Dressmaking & Custom Outfits.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Goddess Crown Braids with Golden Accents',
    category: 'hair',
    categoryLabel: 'Braids & Styling',
    image: serviceBraidsImg,
    fallbackImage: '/images/service_braids_black_1792441922916.jpg',
    description: 'Intricately parted goddess braids adorned with champagne gold cuffs and soft cascading curls.',
  },
  {
    id: 'g-2',
    title: 'Bohemian Island Curl Knotless Braids',
    category: 'hair',
    categoryLabel: 'Braids & Styling',
    image: galleryBohoImg,
    fallbackImage: '/images/gallery_boho_black_1792441924466.jpg',
    description: 'Romantic half-up crown styling featuring chocolate and caramel boho curls.',
  },
  {
    id: 'g-3',
    title: 'Signature Long Waist-Length Box Braids',
    category: 'hair',
    categoryLabel: 'Braids & Styling',
    image: heroBraidsImg,
    fallbackImage: '/images/hero_model_braids_1792441907713.jpg',
    description: 'Featherlight, precision-parted knotless braids designed for everyday effortless glamour.',
  },
  {
    id: 'g-4',
    title: 'Luxe Cluster Lashes with Dewy Finish',
    category: 'lashes-brows',
    categoryLabel: 'Cluster Lashes',
    image: serviceLashesImg,
    fallbackImage: '/images/service_lashes_black_1792441922259.jpg',
    description: 'Dimensional cluster lash extensions offering full flutter with weightless comfort.',
  },
  {
    id: 'g-5',
    title: 'Soft Natural Wispy Hybrid Lash Clusters',
    category: 'lashes-brows',
    categoryLabel: 'Cluster Lashes',
    image: galleryLashesNaturalImg,
    fallbackImage: '/images/service_lashes_black_1792441922259.jpg',
    description: 'Delicate cluster extensions accentuating the natural eye contour for seamless beauty.',
  },
  {
    id: 'g-6',
    title: 'Precision Sculpted & Defined Eyebrows',
    category: 'lashes-brows',
    categoryLabel: 'Eyebrow Grooming',
    image: serviceBrowsImg,
    fallbackImage: '/images/service_brows_black_1792441924439.jpg',
    description: 'Clean, tailored eyebrow shaping aligned with natural facial symmetry and bone structure.',
  },
  {
    id: 'g-7',
    title: 'Bespoke Emerald & Gold Brocade Couture Gown',
    category: 'fashion',
    categoryLabel: 'Custom Outfits',
    image: galleryCoutureImg,
    fallbackImage: '/images/service_outfit_black_1792441923902.jpg',
    description: 'Dramatic occasion silhouette crafted with African luxury brocade and gold detailing.',
  },
  {
    id: 'g-8',
    title: 'Draped Champagne Satin Evening Gown',
    category: 'fashion',
    categoryLabel: 'Custom Outfits',
    image: serviceOutfitsImg,
    fallbackImage: '/images/service_outfit_black_1792441923902.jpg',
    description: 'Hand-draped couture silhouette tailored to measure in the SOMMY XBELLA atelier.',
  },
];

export const WHY_CHOOSE_US: StrengthItem[] = [
  {
    id: 'wc-1',
    title: 'Attention to Detail',
    description: 'Every braid part, lash cluster, and seam is crafted with meticulous care and refined precision.',
    iconName: 'Sparkles',
  },
  {
    id: 'wc-2',
    title: 'Personalized Styling',
    description: 'Tailored looks designed around your unique features, personal aesthetic, and the occasion.',
    iconName: 'Scissors',
  },
  {
    id: 'wc-3',
    title: 'Beauty & Fashion in One Place',
    description: 'Complete coordination under one roof—from your hairstyle and lashes to your custom outfit.',
    iconName: 'Layers',
  },
  {
    id: 'wc-4',
    title: 'Careful Finishing & Presentation',
    description: 'Sleek edges, featherlight lash adhesion, and bespoke garment finishes that stand out.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'wc-5',
    title: 'A Welcoming Customer Experience',
    description: 'Warm, respectful, and attentive service focused on making you feel completely relaxed and confident.',
    iconName: 'HeartHandshake',
  },
];

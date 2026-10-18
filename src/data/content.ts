export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
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
    image: '/src/assets/images/service_braids_styling_1792341020284.jpg',
    highlights: [
      'Knotless & Box Braids',
      'Bohemian & Goddess Braids',
      'Stitch Cornrows & Scalp Art',
      'Sleek Ponytails & Updos',
      'Bridal & Event Hair Styling'
    ],
    category: 'hair',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to book an appointment for Braids & Hair Styling.'
  },
  {
    id: 'cluster-lashes',
    name: 'Cluster Lashes',
    description: 'Enhance your eyes with beautiful cluster lashes for a soft, natural, or glamorous finish.',
    image: '/src/assets/images/service_cluster_lashes_1792341021139.jpg',
    highlights: [
      'Soft Natural Day Look',
      'Wispy Hybrid Volume',
      'Cat-Eye Flare Finish',
      'Lightweight Long-Wear Lash Comfort',
      'Gentle Safe Application'
    ],
    category: 'lashes',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to book an appointment for Cluster Lashes.'
  },
  {
    id: 'eyebrow-trimming',
    name: 'Eyebrow Trimming',
    description: 'Keep your brows neat, defined, and beautifully shaped to complement your features.',
    image: '/src/assets/images/service_eyebrow_trimming_1792341020651.jpg',
    highlights: [
      'Precision Brow Architecture',
      'Razor & Razor-Sharp Finish',
      'Facial Proportion Mapping',
      'Clean & Gentle Grooming',
      'Long-Lasting Neat Definition'
    ],
    category: 'brows',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to book an appointment for Eyebrow Trimming.'
  },
  {
    id: 'dressmaking-custom-outfits',
    name: 'Dressmaking & Custom Outfits',
    description: 'Bring your fashion ideas to life with custom outfits designed around your style and preferences.',
    image: '/src/assets/images/service_custom_outfits_1792341021374.jpg',
    highlights: [
      'Bespoke Tailoring & Measurements',
      'Evening Gowns & Celebration Wear',
      'African Contemporary Fashion',
      'Fabric Sourcing & Consultation',
      'Perfect Custom Silhouette Fit'
    ],
    category: 'fashion',
    whatsappMessage: 'Hello SOMMY XBELLA, I would like to discuss and book a consultation for Dressmaking & Custom Outfits.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Goddess Crown Braids with Golden Accents',
    category: 'hair',
    categoryLabel: 'Braids & Styling',
    image: '/src/assets/images/service_braids_styling_1792341020284.jpg',
    description: 'Intricately parted goddess braids adorned with champagne gold cuffs and soft cascading curls.'
  },
  {
    id: 'g-2',
    title: 'Bohemian Island Curl Knotless Braids',
    category: 'hair',
    categoryLabel: 'Braids & Styling',
    image: '/src/assets/images/gallery_braids_boho_1792341040142.jpg',
    description: 'Romantic half-up crown styling featuring chocolate and caramel boho curls.'
  },
  {
    id: 'g-3',
    title: 'Signature Long Waist-Length Box Braids',
    category: 'hair',
    categoryLabel: 'Braids & Styling',
    image: '/src/assets/images/hero_braids_portrait_1792341019972.jpg',
    description: 'Featherlight, precision-parted knotless braids designed for everyday effortless glamour.'
  },
  {
    id: 'g-4',
    title: 'Luxe Cluster Lashes with Dewy Finish',
    category: 'lashes-brows',
    categoryLabel: 'Cluster Lashes',
    image: '/src/assets/images/service_cluster_lashes_1792341021139.jpg',
    description: 'Dimensional cluster lash extensions offering full flutter with weightless comfort.'
  },
  {
    id: 'g-5',
    title: 'Soft Natural Wispy Hybrid Lash Clusters',
    category: 'lashes-brows',
    categoryLabel: 'Cluster Lashes',
    image: '/src/assets/images/gallery_lashes_natural_1792341040036.jpg',
    description: 'Delicate cluster extensions accentuating the natural eye contour for seamless beauty.'
  },
  {
    id: 'g-6',
    title: 'Precision Sculpted & Defined Eyebrows',
    category: 'lashes-brows',
    categoryLabel: 'Eyebrow Grooming',
    image: '/src/assets/images/service_eyebrow_trimming_1792341020651.jpg',
    description: 'Clean, tailored eyebrow shaping aligned with natural facial symmetry and bone structure.'
  },
  {
    id: 'g-7',
    title: 'Bespoke Emerald & Gold Brocade Couture Gown',
    category: 'fashion',
    categoryLabel: 'Custom Outfits',
    image: '/src/assets/images/gallery_outfit_couture_1792341041500.jpg',
    description: 'Dramatic occasion silhouette crafted with African luxury brocade and gold detailing.'
  },
  {
    id: 'g-8',
    title: 'Draped Champagne Satin Evening Gown',
    category: 'fashion',
    categoryLabel: 'Custom Outfits',
    image: '/src/assets/images/service_custom_outfits_1792341021374.jpg',
    description: 'Hand-draped couture silhouette tailored to measure in the SOMMY XBELLA atelier.'
  }
];

export const WHY_CHOOSE_US: StrengthItem[] = [
  {
    id: 'wc-1',
    title: 'Attention to Detail',
    description: 'Every braid part, lash cluster, and seam is crafted with meticulous care and refined precision.',
    iconName: 'Sparkles'
  },
  {
    id: 'wc-2',
    title: 'Personalized Styling',
    description: 'Tailored looks designed around your unique features, personal aesthetic, and the occasion.',
    iconName: 'Scissors'
  },
  {
    id: 'wc-3',
    title: 'Beauty & Fashion in One Place',
    description: 'Complete coordination under one roof—from your hairstyle and lashes to your custom outfit.',
    iconName: 'Layers'
  },
  {
    id: 'wc-4',
    title: 'Careful Finishing & Presentation',
    description: 'Sleek edges, featherlight lash adhesion, and bespoke garment finishes that stand out.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'wc-5',
    title: 'A Welcoming Customer Experience',
    description: 'Warm, respectful, and attentive service focused on making you feel completely relaxed and confident.',
    iconName: 'HeartHandshake'
  }
];

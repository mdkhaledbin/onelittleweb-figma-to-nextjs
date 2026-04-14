import React from 'react';
import BookingsIcon from "@/components/services/icons/BookingsIcon";
import CleaningIcon from "@/components/services/icons/CleaningIcon";
import QueryIcon from "@/components/services/icons/QueryIcon";
import ListingIcon from "@/components/services/icons/ListingIcon";
import ReviewsIcon from "@/components/services/icons/ReviewsIcon";
import ExpenseIcon from "@/components/services/icons/ExpenseIcon";
import HostfullyIcon from '@/components/tools/icons/HostfullyIcon';
import Image from 'next/image';

import Beyound from "@/public/tools/Beyound.png"
import Guesty from "@/public/tools/Guesty.png"
import Lodgify from "@/public/tools/Lodgify.png"
import PriceLab from "@/public/tools/PriceLab.png"
import WheelHouse from "@/public/tools/WheelHouse.png"

import TestimonialAvatar1 from "@/public/review/Ellipse 21 (1).png"
import TestimonialAvatar2 from "@/public/review/Ellipse 21 (2).png"
import TestimonialAvatar3 from "@/public/review/Ellipse 21 (4).png"


export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  highlighted?: boolean;
  features: PricingFeature[];
}

export interface Testimonial {
  name: string;
  text: string;
  avatar: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PartnerLogo {
  label: string;
  accentClass: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export const HERO = {
  headingTop: "Airbnb Assistants For",
  headingBottom: "Property Management",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryCta: "Schedule A Meeting",
  secondaryCta: "See Pricing",
};

export const CLIENT_LOGOS: PartnerLogo[] = [
  { label: "airbnb", accentClass: "text-[#ff5a5f]" },
  { label: "Booking.com", accentClass: "text-[#003580]" },
  { label: "Vrbo", accentClass: "text-[#0e214b]" },
  { label: "tripadvisor", accentClass: "text-[#34e0a1]" },
  { label: "Expedia", accentClass: "text-[#191e3b]" },
  { label: "home to go", accentClass: "text-[#000000]" },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: <ListingIcon />,  
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <BookingsIcon />,  
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <CleaningIcon />,  
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <ReviewsIcon />,  
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <ExpenseIcon />,  
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <QueryIcon />,  
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const TOOL_LOGOS = [
  <Image src={PriceLab} className="object-contain" alt={'PriceLab'} />,
  <Image src={WheelHouse} className="object-contain" alt={'WheelHouse'} />,
  <Image src={Beyound} className="object-contain" alt={'Beyound Pricing'} />,
  <HostfullyIcon />,
<Image src={Guesty} className="object-contain" alt={"Guesty"} />,
<Image src={Lodgify} className="object-contain" alt={"Lodgify"} />,
  <HostfullyIcon />,
<Image src={Guesty} className="object-contain" alt={"Guesty"} />,
<Image src={Lodgify} className="object-contain" alt={"Lodgify"} />,
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for individuals who who need advanced features and tools for client work.",
    monthlyPrice: 25,
    yearlyPrice: 19,
    highlighted: true,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    monthlyPrice: 100,
    yearlyPrice: 79,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export const PROCESS_STEPS = [
  "Add requirements\nand sign up today",
  "Connect with your CSM\n& onboarding team",
  "Meet your STR Assistant\nnext week",
];

export const WHY_CHOOSE_ITEMS = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: <Image src={TestimonialAvatar1} width={200} height={200} alt="Testimonial Avatar" />,
  },
  {
    name: "Esther Howard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: <Image src={TestimonialAvatar2} width={200} height={200} alt="Testimonial Avatar" />,
  },
  {
    name: "Robert Fox",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: <Image src={TestimonialAvatar3} width={200} height={200} alt="Testimonial Avatar" />,
  },
  {
    name: "Robert Fox",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: <Image src={TestimonialAvatar3} width={200} height={200} alt="Testimonial Avatar" />,
  },
  {
    name: "Robert Fox",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: <Image src={TestimonialAvatar3} width={200} height={200} alt="Testimonial Avatar" />,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we will provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel anytime before your next billing cycle. Your access remains active until the end of the current cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes. You can add tax IDs, billing addresses, and custom notes directly from the billing dashboard.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is handled monthly or yearly based on your selected plan, and invoices are generated automatically.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your email from profile settings after verifying your current password and confirming the new address.",
  },
];

export const CTA = {
  heading: "Still have questions?",
  description:
    "Can not find the answer you are looking for? Please chat to our friendly team.",
  button: "Get in touch",
};

export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

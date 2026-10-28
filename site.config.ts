import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Jaffna Amma's Kitchen",
  tagline: "Homemade Jaffna Tamil curries and weekly meal plans, delivered across Scarborough, Toronto.",
  category: "Jaffna home cooking",
  schemaType: "FoodEstablishment",
  area: "Scarborough, Toronto, ON",
  siteUrl: "https://jaffna-ammas-kitchen.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#802615" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Homemade in Scarborough",
    headline: "Amma's Jaffna curries, from her pot to your plate",
    subhead: "Every curry is made by hand, the real Jaffna way, with Amma's roasted curry powder. Order by Instagram DM or on our flavrr page, with delivery across Scarborough and nearby areas.",
    images: [{ src: "/images/amma.jpg", alt: "Jaffna Amma's Kitchen illustration of Amma stirring a clay pot of curry" }],
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: ["Homemade with love", "Authentic Jaffna Tamil food", "Delivery across Scarborough ($6)", "Weekly meal plans from $55"],

  about: {
    title: "Cooked by Amma, the Jaffna way",
    body: [
      "Jaffna Amma's Kitchen is a home kitchen in Scarborough cooking authentic Jaffna Tamil food. From her pot to your plate, every curry is made by hand, slow cooked with Amma's own roasted curry powder.",
      "Nothing makes Amma happier than hearing you enjoyed her food. Order a favourite curry for tonight, or let Amma take care of the week with a weekly meal plan.",
    ],
  },

  menu: {
    title: "Amma's menu",
    intro: "Prices as posted on Instagram. Specials change through the week, so send a DM to see what Amma is cooking.",
    variant: "list",
    groups: [
      {
        title: "Curries",
        items: [
          { name: "Jaffna Chicken Curry", description: "Slow cooked in Amma's roasted curry powder.", price: "$8" },
          { name: "Jaffna Mutton Curry", description: "Slow cooked the Jaffna way with roasted spices.", price: "M $10.50 / L $17.50" },
          { name: "Kathirikai Paal Curry", description: "Eggplant in a coconut milk curry.", price: "M $4 / L $5.50" },
        ],
      },
      {
        title: "Sambols",
        items: [
          { name: "Coconut Sambol", price: "$6" },
          { name: "Pavakkai Sambol", description: "Bitter gourd sambol.", price: "$6" },
        ],
      },
      {
        title: "Meal plans",
        items: [{ name: "Weekly meal plans", description: "Homemade Jaffna meals for the week.", price: "From $55/week" }],
      },
    ],
    footnote: "Delivery across Scarborough and nearby areas is $6.",
  },

  instagram: {
    handle: "jaffnaammaskitchen",
    embeds: ["https://www.instagram.com/p/Deu1iAgqbM-/"],
    embedsTitle: "Fresh from Amma's kitchen",
  },

  order: {
    title: "Order from Amma",
    intro: "Send a DM on Instagram or order on our flavrr page. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Jaffna Amma's Kitchen! I would like to order.\nItems:\nQuantity:\nDate:\nDelivery address (or pickup):",
    links: [{ label: "Order on flavrr", href: "https://flavrr.ca/order/jaffnaammaskitchen" }],
    note: "Delivery across Scarborough and nearby areas for $6.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram, or order online on our flavrr page." },
    { q: "Do you deliver?", a: "Yes. Amma delivers across Scarborough and nearby areas for $6." },
    { q: "Do you offer meal plans?", a: "Yes, weekly meal plans start from $55 a week." },
  ],

  contact: {
    area: "Scarborough, Toronto, Ontario",
    phone: "647-221-6350",
    email: "jaffnaammaskitchen@gmail.com",
    socials: [{ label: "Order on flavrr", href: "https://flavrr.ca/order/jaffnaammaskitchen" }],
  },

  seo: {
    title: "Jaffna Amma's Kitchen | Jaffna home cooking in Scarborough",
    description: "Homemade Jaffna Tamil curries, sambols and weekly meal plans in Scarborough, Toronto. Order by Instagram DM or flavrr, with $6 delivery nearby.",
    keywords: ["Jaffna food Scarborough", "Tamil curry Toronto", "homemade meal plans Scarborough", "Sri Lankan Tamil food Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

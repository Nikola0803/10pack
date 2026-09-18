// Product catalogue.
//
// This module is the single source of truth the storefront reads from. It is
// deliberately shaped like a CRM/commerce API response, so swapping the
// constant below for a `fetch()` against the CRM stays a one-file change.

export type CoaRow = [label: string, value: string];

export type Coa = {
  latest: boolean;
  purity: string;
  /** Lot summary shown at the top of the certificate card. */
  summary: CoaRow[];
  /** Full eight-stage QC panel. */
  panel: CoaRow[];
};

export type ProductDetail = {
  badges: string[];
  description: string;
  /** e.g. "4.9 \u00b7 212 reviews" */
  rating: string;
  sizes: string[];
  coas: Coa[];
  /** Molecular profile summary shown above the specification table. */
  profile: CoaRow[];
  /** Full specification table. */
  spec: CoaRow[];
};

export type Product = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
  purity: string;
  /** Price of one 10-vial pack, in dollars. */
  packPrice: number;
  /** Per-vial price as printed on the card, e.g. "$54.90". */
  perVial: string;
  lot: string;
  /** Background tint class for the image well. */
  tint: string;
  /** Shop filter facets. See SHOP_CATEGORIES. */
  categories: string[];
  /** Availability pill shown on the card, e.g. "On back order — ships Thursday". */
  stockNote: string | null;
  /**
   * Detail-page content. Only present for compounds whose full record has been
   * imported, so the product page renders those sections conditionally.
   */
  detail?: ProductDetail;
};

/** Facets offered by the shop filter bar. */
export const SHOP_CATEGORIES = [
  "Reference Compounds",
  "Lyophilized Powders",
  "Research Blends",
  "Laboratory Accessories",
] as const;

/** Every pack on the store is ten vials. */
export const VIALS_PER_PACK = 10;

/** Subscribe & Save discount applied on the product page. */
export const SUBSCRIPTION_DISCOUNT = 0.15;

export const products: Product[] = [
  {
    "slug": "ghk-cu",
    "name": "GHK-Cu 100mg",
    "image": "/products/ghk-cu-100mg.webp",
    "imageAlt": "GHK-Cu 100mg research vial",
    "imageTitle": "GHK-Cu 100mg — research use only",
    "purity": "99.84%",
    "packPrice": 549.0,
    "perVial": "$54.90",
    "lot": "RB-2419-A",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ],
    "detail": {
      "badges": [
        "Reference Compound",
        "Lyophilized",
        "Research Use Only"
      ],
      "description": "GHK-Cu is a copper-binding tripeptide supplied as a lyophilized blue powder for in-vitro research. Each vial is quantified by HPLC-UV against a certified reference standard and identity-confirmed by LC-MS/MS.",
      "rating": "4.9 · 212 reviews",
      "sizes": [
        "10mg",
        "40mg"
      ],
      "coas": [
        {
          "latest": true,
          "purity": "99.84%",
          "summary": [
            [
              "Variant",
              "GHK-Cu 100mg"
            ],
            [
              "Lot #",
              "RB-2419-A"
            ],
            [
              "Labeled",
              "10mg"
            ],
            [
              "Actual",
              "10.23mg"
            ],
            [
              "Tested",
              "Jul 24, 2026"
            ]
          ],
          "panel": [
            [
              "Purity (HPLC)",
              "99.84%"
            ],
            [
              "Net Peptide",
              "10.23mg"
            ],
            [
              "Identity (HPLC)",
              "Confirmed (GHK-Cu)"
            ],
            [
              "HPLC Conformity",
              "2/2 passed (99.80%, 99.84%)"
            ],
            [
              "Heavy Metals",
              "Pass (within limits)"
            ],
            [
              "Sterility (PCR)",
              "No Growth"
            ],
            [
              "Endotoxin",
              "0.09 EU/mL"
            ],
            [
              "Fentanyl Screen",
              "Not Detected"
            ]
          ]
        },
        {
          "latest": false,
          "purity": "99.95%",
          "summary": [
            [
              "Variant",
              "GHK-Cu 100mg"
            ],
            [
              "Lot #",
              "RB-2419-B"
            ],
            [
              "Labeled",
              "10mg"
            ],
            [
              "Actual",
              "10.18mg"
            ],
            [
              "Tested",
              "Jun 18, 2026"
            ]
          ],
          "panel": [
            [
              "Purity (HPLC)",
              "99.95%"
            ],
            [
              "Net Peptide",
              "10.18mg"
            ],
            [
              "Identity (HPLC)",
              "Confirmed (GHK-Cu)"
            ],
            [
              "HPLC Conformity",
              "2/2 passed (99.91%, 99.95%)"
            ],
            [
              "Heavy Metals",
              "Pass (within limits)"
            ],
            [
              "Sterility (PCR)",
              "No Growth"
            ],
            [
              "Endotoxin",
              "0.09 EU/mL"
            ],
            [
              "Fentanyl Screen",
              "Not Detected"
            ]
          ]
        },
        {
          "latest": false,
          "purity": "99.67%",
          "summary": [
            [
              "Variant",
              "GHK-Cu 100mg"
            ],
            [
              "Lot #",
              "RB-2419-C"
            ],
            [
              "Labeled",
              "10mg"
            ],
            [
              "Actual",
              "10.13mg"
            ],
            [
              "Tested",
              "May 09, 2026"
            ]
          ],
          "panel": [
            [
              "Purity (HPLC)",
              "99.67%"
            ],
            [
              "Net Peptide",
              "10.13mg"
            ],
            [
              "Identity (HPLC)",
              "Confirmed (GHK-Cu)"
            ],
            [
              "HPLC Conformity",
              "2/2 passed (99.63%, 99.67%)"
            ],
            [
              "Heavy Metals",
              "Pass (within limits)"
            ],
            [
              "Sterility (PCR)",
              "No Growth"
            ],
            [
              "Endotoxin",
              "0.09 EU/mL"
            ],
            [
              "Fentanyl Screen",
              "Not Detected"
            ]
          ]
        },
        {
          "latest": false,
          "purity": "99.89%",
          "summary": [
            [
              "Variant",
              "GHK-Cu 100mg"
            ],
            [
              "Lot #",
              "RB-2419-D"
            ],
            [
              "Labeled",
              "10mg"
            ],
            [
              "Actual",
              "10.08mg"
            ],
            [
              "Tested",
              "Apr 02, 2026"
            ]
          ],
          "panel": [
            [
              "Purity (HPLC)",
              "99.89%"
            ],
            [
              "Net Peptide",
              "10.08mg"
            ],
            [
              "Identity (HPLC)",
              "Confirmed (GHK-Cu)"
            ],
            [
              "HPLC Conformity",
              "2/2 passed (99.85%, 99.89%)"
            ],
            [
              "Heavy Metals",
              "Pass (within limits)"
            ],
            [
              "Sterility (PCR)",
              "No Growth"
            ],
            [
              "Endotoxin",
              "0.09 EU/mL"
            ],
            [
              "Fentanyl Screen",
              "Not Detected"
            ]
          ]
        }
      ],
      "profile": [
        [
          "Type",
          "Synthetic compound"
        ],
        [
          "Category",
          "Reference Compound"
        ],
        [
          "Purity",
          "≥ 99%"
        ],
        [
          "Form",
          "Lyophilized"
        ]
      ],
      "spec": [
        [
          "CAS Number",
          "89030-95-5"
        ],
        [
          "Molecular Formula",
          "C14H22CuN6O4"
        ],
        [
          "Molecular Weight",
          "402.9 Da"
        ],
        [
          "Sequence",
          "Gly-His-Lys · Cu(II)"
        ],
        [
          "Purity (HPLC-UV)",
          "99.84%"
        ],
        [
          "Net Peptide Content",
          "10.23mg"
        ],
        [
          "Endotoxin (LAL)",
          "< 0.5 EU/mg"
        ],
        [
          "Sterility (USP <71>)",
          "No growth"
        ],
        [
          "Fentanyl Screen",
          "Not detected"
        ],
        [
          "Appearance",
          "White lyophilized powder"
        ],
        [
          "Solubility",
          "Water, PBS"
        ],
        [
          "Storage",
          "-20°C, dry, light-protected"
        ]
      ]
    }
  },
  {
    "slug": "mots-c",
    "name": "MOTS-c 10mg",
    "image": "/products/mots-c-10mg.webp",
    "imageAlt": "MOTS-c 10mg research vial",
    "imageTitle": "MOTS-c 10mg — research use only",
    "purity": "99.79%",
    "packPrice": 499.0,
    "perVial": "$49.90",
    "lot": "RB-2411-I",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "nad-plus",
    "name": "NAD+ 500mg",
    "image": "/products/nad-plus-500mg.webp",
    "imageAlt": "NAD+ 500mg research vial",
    "imageTitle": "NAD+ 500mg — research use only",
    "purity": "99.78%",
    "packPrice": 599.0,
    "perVial": "$59.90",
    "lot": "RB-2417-C",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "klow",
    "name": "Klow 80mg",
    "image": "/products/klow-80mg.webp",
    "imageAlt": "Klow 80mg research vial",
    "imageTitle": "Klow 80mg — research use only",
    "purity": "99.69%",
    "packPrice": 649.0,
    "perVial": "$64.90",
    "lot": "RB-2415-E",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders",
      "Research Blends"
    ]
  },
  {
    "slug": "glp3-rt",
    "name": "RB-3 RT 10mg",
    "image": "/products/glp3-rt-10mg.webp",
    "imageAlt": "RB-3 RT 10mg research vial",
    "imageTitle": "RB-3 RT 10mg — research use only",
    "purity": "99.71%",
    "packPrice": 599.0,
    "perVial": "$59.90",
    "lot": "RB-2418-B",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "glutathione",
    "name": "Glutathione 1500mg",
    "image": "/products/glutathione-1500mg.webp",
    "imageAlt": "Glutathione 1500mg research vial",
    "imageTitle": "Glutathione 1500mg — research use only",
    "purity": "99.81%",
    "packPrice": 579.0,
    "perVial": "$57.90",
    "lot": "RB-2414-F",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "igf-1-lr3",
    "name": "IGF-1 LR3 10mg",
    "image": "/products/igf-1-lr3-1mg.webp",
    "imageAlt": "IGF-1 LR3 10mg research vial",
    "imageTitle": "IGF-1 LR3 10mg — research use only",
    "purity": "99.74%",
    "packPrice": 629.0,
    "perVial": "$62.90",
    "lot": "RB-2413-G",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "tesamorelin",
    "name": "Tesamorelin 10mg",
    "image": "/products/tesamorelin-10mg.webp",
    "imageAlt": "Tesamorelin 10mg research vial",
    "imageTitle": "Tesamorelin 10mg — research use only",
    "purity": "99.88%",
    "packPrice": 649.0,
    "perVial": "$64.90",
    "lot": "RB-2412-H",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "glp2-tz",
    "name": "RB-2 TZ 10mg",
    "image": "/products/glp2-tz-10mg.webp",
    "imageAlt": "RB-2 TZ 10mg research vial",
    "imageTitle": "RB-2 TZ 10mg — research use only",
    "purity": "99.62%",
    "packPrice": 479.0,
    "perVial": "$47.90",
    "lot": "RB-2416-D",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "cjc-1295-ipamorelin",
    "name": "CJC-1295 (No DAC) + Ipamorelin 10mg",
    "image": "/products/cjc-1295-no-dac-ipamorelin-10mg.webp",
    "imageAlt": "CJC-1295 (No DAC) + Ipamorelin 10mg research vial",
    "imageTitle": "CJC-1295 (No DAC) + Ipamorelin 10mg — research use only",
    "purity": "99.83%",
    "packPrice": 549.0,
    "perVial": "$54.90",
    "lot": "RB-2410-J",
    "tint": "tint-sage",
    "stockNote": "On back order — ships Thursday",
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders",
      "Research Blends"
    ]
  },
  {
    "slug": "selank",
    "name": "Selank 10mg",
    "image": "/products/selank-10mg.webp",
    "imageAlt": "Selank 10mg research vial",
    "imageTitle": "Selank 10mg — research use only",
    "purity": "99.84%",
    "packPrice": 449.0,
    "perVial": "$44.90",
    "lot": "RB-2409-K",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  },
  {
    "slug": "cagrilintide",
    "name": "Cagrilintide 5mg",
    "image": "/products/cagrilintide-5mg.png",
    "imageAlt": "Cagrilintide 5mg research vial",
    "imageTitle": "Cagrilintide 5mg — research use only",
    "purity": "99.69%",
    "packPrice": 569.0,
    "perVial": "$56.90",
    "lot": "RB-2408-L",
    "tint": "tint-sage",
    "stockNote": null,
    "categories": [
      "Reference Compounds",
      "Lyophilized Powders"
    ]
  }
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** Products shown in the "Frequently Researched Together" rail. */
export const relatedProducts = (slug: string, limit = 4) =>
  products.filter((p) => p.slug !== slug).slice(0, limit);

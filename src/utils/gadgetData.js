import logo from "../assets/hero1.jpeg";

const gadgetData = [
  {
    type: "Smartphones",
    gadgets: [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        description:
          "Apple's latest flagship featuring a powerful A17 Bionic chip, a titanium body, and a stunning 120Hz ProMotion display. Experience next-level performance, photography, and battery life with the iPhone 15 Pro Max.",
        price: 134999,
        discountedPrice: 129999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPh4wc-f4SbbYTPtdwnD1SQ50T_HD7Av4jjWeC-6TI07PMkhpDibUoe8Jqa0-BXN6xGVxmnporw-55QfMVc3SZQOmMvcB73vk_oY9rG_5yf5j_0gh3V19blQ",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        description:
          "The ultimate Android flagship, featuring an advanced 200MP camera, Snapdragon 8 Gen 3 processor, and S-Pen functionality. The Galaxy S24 Ultra sets new standards in mobile innovation.",
        price: 124999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSg3_vUetPjZvlJFJUTbrPndhh9mrgZAJYzyr31ImT8Uc-luKfp9P7QFCk_RIpxut89h21nHHE3QmdUBmR_Fq9m16_3ZhOX3KaUl2WhSx-gunQlog_5vTn3_A",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 3,
        name: "Google Pixel 8 Pro",
        description:
          "Google’s most advanced smartphone, powered by the Tensor G3 chip and boasting a revolutionary AI-driven camera system. The Pixel 8 Pro delivers stunning photos and a smooth stock Android experience.",
        price: 106999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnFvB4rSAiw8dvs5vlM7I7DAzqXP9oENGKCEIverQbuOniqafvOXLJbkIWWhloK0Tz_SZ2sOULjQt4HdqSWa0t0VWUsIXL5J5YPcdEbaXX2CnNC2pmfSgZPw",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 4,
        name: "OnePlus 12 Pro",
        description:
          "A powerhouse smartphone with a 120Hz AMOLED display, Snapdragon 8 Gen 3 processor, and ultra-fast 100W charging. The OnePlus 12 Pro ensures smooth performance and long-lasting battery life.",
        price: 79999,
        discountedPrice: 74999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPJPb5tZqpnRYd4mTkg65FFZQ9a_HXb5pUROD218hwAvbAEY9ml01NZ5d3MacsWbBALPQkMKSsGK0nTQK99NOn-PNy5HNt27xNV1DTd09s",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 5,
        name: "Xiaomi 14 Ultra",
        description:
          "A flagship smartphone featuring a Leica-powered camera system, Snapdragon 8 Gen 3, and a stunning WQHD+ AMOLED display. Xiaomi 14 Ultra redefines mobile photography and performance.",
        price: 89999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBjDovMRhyd1NfGRAg4ffuPwy0UQMY4U6fOR9aSSWdOx4DF79JVVsYxnIdhVwBHQh61wN3wW_XIOWPMhAgn5RSgwqKxJqB797k8JDEqxeG",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 6,
        name: "Asus ROG Phone 8",
        description:
          "The ultimate gaming smartphone, featuring a 165Hz AMOLED display, Snapdragon 8 Gen 3, and advanced cooling technology. Designed for hardcore gamers who demand peak performance.",
        price: 94999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTeXXOsxVmxBNwwHDE-0UvJ7YUI72YyyScPwBSW8GXSa2fxXZAtroL1Ccvrzpteq7nKXqEbibALSklnOrkKwUxrGHevPb_RMLxV4cppNXA",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 7,
        name: "iQOO 12",
        description:
          "A performance-focused smartphone powered by Snapdragon 8 Gen 3, 120W fast charging, and a 144Hz AMOLED display. The iQOO 12 is perfect for gaming and multimedia enthusiasts.",
        price: 69999,
        discountedPrice: 64999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQmGszW7LgN4Wm0DHZMwIYEO2SZ0xK-Mmk2rGP5fMU8tBdd1HpVHBhtOF6dMQ4Tk1UspkBlY71rRF9Ot2l7L-X9BRdNzOqM84EEGQm5-X3THdDaQQuA6WFcw",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 8,
        name: "Nothing Phone 2",
        description:
          "A unique transparent design with LED Glyph Interface, Snapdragon 8+ Gen 1, and a 120Hz OLED display. The Nothing Phone 2 offers a fresh take on smartphone aesthetics and innovation.",
        price: 45999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5qkR85hUyd1lLUCSV3El28GZ3poBHzzfI2U_CdXB7BrqzTxLxSdlvAIBH3Phr-CFgG1Rxefa3758IFVjsPRN4-QE504GZX-aCR5zWC78",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 9,
        name: "Realme GT 5 Pro",
        description:
          "A high-performance smartphone featuring Snapdragon 8 Gen 3, 144Hz AMOLED display, and blazing-fast 240W charging. Realme GT 5 Pro is built for speed and efficiency.",
        price: 57999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7zAZWJI6f7DZq85iBnE2cBPD4GBC_EBdKTZUKnig-tk2gW-SPZQ9vGMIaqhK68DTtIdPAhnYF5mrsfv-tZMNtGPLmZxP1olLWo6_5VGy0",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 10,
        name: "Samsung Galaxy Z Fold 5",
        description:
          "A premium foldable phone with an immersive 7.6-inch AMOLED display, Snapdragon 8 Gen 2, and S-Pen support. The Galaxy Z Fold 5 offers a versatile and futuristic smartphone experience.",
        price: 154999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSutn8KfppIswVS-3yYysO1pLsqER14ytSmnXsOzdIdsziVmPpDQEu9n3AAlD4nlxDJUGX5ZzjBydr74w1iqm0Gyw1W4uds5HiJIbySKY5mOH4raFmt3jHlGA",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Wireless Earbuds",
    gadgets: [
      {
        id: 11,
        name: "Apple AirPods Pro (2nd Gen)",
        description:
          "Advanced noise cancellation, Adaptive Transparency, and spatial audio make AirPods Pro 2 the ultimate choice for seamless Apple ecosystem integration and premium sound quality.",
        price: 24999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQHafo0KxN7mVOMGJpgSWttOo4viA2W3zY5VI3sGDYwQzXi0mWXas2SA2D7JbANU9zZWVKH1kHzKTJPtAItzImUK_2q0Bgt1GwCdXHmmhRE5dE2ZZnjf1Lj9Q",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 12,
        name: "Samsung Galaxy Buds 2 Pro",
        description:
          "Immerse yourself in Hi-Fi sound with 24-bit audio, ANC, and 360-degree spatial audio. The Galaxy Buds 2 Pro delivers rich, detailed sound in a compact and comfortable design.",
        price: 17999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGotIlIzumLDjfDDSNaWgyuVs8khI3aOw-0hcauF7fo5OSviIqQ58HzHvdRZdW8jn0gZ2hV8AbDQFcIE9GB5WYTYlgF-X5QZ5ToegIYa8_aEHXyzUzqdPR",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 13,
        name: "Sony WF-1000XM5",
        description:
          "Sony’s flagship noise-canceling earbuds with next-gen ANC, high-res audio, and LDAC support. The WF-1000XM5 ensures an immersive listening experience with a premium fit.",
        price: 23999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8KoPsF-XzTfl0q4bIlOvcunaXYNDRKjF1_OlN5Vqrda8A6Z34zH0XJxyikimxhRb71O4a0r5WOczmyQiPvw8M0WGnTX95ecpAeMhvCPpjTxDgsp1QW1Pw_w",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 14,
        name: "Bose QuietComfort Earbuds II",
        description:
          "Unmatched noise cancellation and clear, rich sound make the QuietComfort Earbuds II perfect for audiophiles and frequent travelers seeking superior sound isolation.",
        price: 26999,
        discountedPrice: 24999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIJJ4znVcuLdcemLQfElmophTIDzxBtcsUshZKrUOdrE0e5ZFDQZzhQXUCScybMQ1a0qKY00pEszXaOvnp-UkjTl5VRlSyQJfV3PYxLbU",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 15,
        name: "Nothing Ear (2)",
        description:
          "Nothing Ear (2) brings a transparent aesthetic, personalized sound, and Hi-Res Audio with ANC for an immersive audio experience in a stylish and unique form factor.",
        price: 11999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHau3zHeCSGOzCLhsaMxi0rBe0PukvfugRjKUB2dIS2qbrjAwcNNLel6ekWtIxDOm4sJX3IfekpE4Ozz8PaxphM7y28LavhTiaFzYj8d6FnMbBznojAFUT",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 16,
        name: "Sennheiser Momentum True Wireless 3",
        description:
          "With audiophile-grade sound, ANC, and aptX Adaptive, the Momentum True Wireless 3 delivers rich, detailed audio with supreme comfort for extended listening sessions.",
        price: 27999,
        discountedPrice: 25999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCVKz2rbe9tpv9Fcgxa471EsLvU3ZYNioR405brM6OCaCLbtIAS5pigyjfNtihmEspaCuFUqWRGqwZveoAiHEFmdQAGq7K4hDT4bUohIEXXAX-DsWpbxZq3g",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 17,
        name: "Jabra Elite 7 Pro",
        description:
          "A perfect blend of professional-grade call clarity and premium sound, the Jabra Elite 7 Pro features ANC, HearThrough mode, and a secure fit for all-day use.",
        price: 15999,
        discountedPrice: 14999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKolkqEUgs66-5TzyNzOZii9TC-GElQ2qlTFfeQZh8vEirtxVCWPgKvkm77-_ruT2KeOFxjnMvsdxqHJi7KqRvByX5mB9KVG74gUrrerAKGwMadhj1amr2",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 18,
        name: "OnePlus Buds Pro 2",
        description:
          "Co-created with Dynaudio, the OnePlus Buds Pro 2 delivers rich bass, immersive spatial audio, and effective ANC in a sleek and stylish design.",
        price: 12999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSp1MEVM11IWr-xS1ZEOiSeHYYIJVneI0n7hKoUIfhwzvUO3cqaTercNymFeWYDry7SLR5uOJGARopNQ9HgS8G5PMV6F160J4ZjxLHJZ-k3",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 19,
        name: "Anker Soundcore Liberty 4",
        description:
          "Anker’s Liberty 4 brings high-fidelity sound, 360-degree spatial audio, and heart rate tracking, making it one of the most feature-packed earbuds in its price range.",
        price: 11999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6OcpGT5VTdCeAUxPqAWW4mLI2VcZc5UUV_ZZUVzxcNYo-2s0QyRxEZ3ZN2RHh_Nej_a5RwCEaTSWMMaPGAuV3ye7IPlvSYm1-bMLF9zUfbhjaHge2Pzwx",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 20,
        name: "Realme Buds Air 5 Pro",
        description:
          "With LDAC, ANC, and 50dB noise reduction, the Realme Buds Air 5 Pro delivers premium audio quality at an affordable price, making it a great budget alternative.",
        price: 6999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDh5tqnnJSPi0IMwFF1h0H1r0sBKUR1QzgjDBUZnMjocek4VvSbnkC5YXkEwXTRb2HJv3qWTqW5IjO6Hn30xHcmHq5y7vbWVKYLI6jYzHnIRjhZWk6Q5nT1Q",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Bluetooth Headphones",
    gadgets: [
      {
        id: 21,
        name: "Sony WH-1000XM5",
        description:
          "Premium noise-canceling over-ear headphones with exceptional sound quality and adaptive ANC. Features touch controls and up to 30 hours of battery life.",
        price: 34999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9ykc3FtoxqzdiRqysOyGNGL2V67cw_QjrdmlJOJE-8V8e2eYweAlWLRpWxjfFmro56ISxeGAKl_KoplZsd9OZASWZp6wkcnRqPkxLjUvhpBVD2OzfbjyL",
        rating: 4.8,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 22,
        name: "Bose QuietComfort 45",
        description:
          "Industry-leading noise-canceling headphones with a comfortable fit, 24-hour battery life, and crystal-clear call quality.",
        price: 32999,
        discountedPrice: 28999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcPCsoTEV-L9_sGlOcOTjR96IZ9hi9Zk-x5sq27-8pUaxP3g7CKW5DmZE3mnwFTV1x64lDi8Adlj1ub0leCSswy4LeWJLfm3CpeKYFUDUc-TH_IwKYpweWbg",
        rating: 4.7,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 23,
        name: "Sennheiser Momentum 4",
        description:
          "Audiophile-grade sound with adaptive ANC, luxurious comfort, and up to 60 hours of battery life.",
        price: 26999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQX1hH25seqX5A8FRGoVosHwLgvKofowoD5QpI4NTUpSr76P-BYJONR7y7PDTGGo081Nhs7yoXBrDKwbW-F4MgT99eNsGSiBqziZmztfbbJ-NVwgUcZcE9ZPQ",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 24,
        name: "Apple AirPods Max",
        description:
          "Apple's premium over-ear headphones with spatial audio, computational sound, and active noise cancellation.",
        price: 59999,
        discountedPrice: 52999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQgILCXWetuT79ToILn_mFqCBsTq-Sla1dwFjZYZUfVwzZJ86uivsJU1DylzPFWrKp2lddOBrCTrZ-mNeqC-0UrxA2QDMCzUWIcKl62AyFGTzgvlAeZKT3",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1,
      },
      {
        id: 25,
        name: "JBL Tour One M2",
        description:
          "JBL’s premium over-ear ANC headphones with immersive sound, smart ambient mode, and up to 50 hours of battery life.",
        price: 19999,
        discountedPrice: 17999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxtKVLmQhSah9YHDvSKqFSb4_-qNDjltyKVti1n48WffUSunVUxKkSe8uk5YsltPqeE4-7ymU-TtaSg-60CAUGRH9-Z93ShRdVLxwF0VrRW3p_YNKorxxy",
        rating: 4.4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0,
      },
      {
        id: 26,
        name: "Beats Studio Pro",
        description:
          "Beats' high-performance over-ear wireless headphones with personalized spatial audio and premium ANC.",
        price: 26999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4o7SJF9dimGU4eBx2g0TSMbcDAU8Lhm_vDiQkV7QbgdXdbdZ1cwthL1d3NMXgyTwXI-JWtnfFoS8teLgov6QYwutvT4ia_uNTkhfXwM0YpBtF1xEmryGH",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 27,
        name: "Anker Soundcore Space Q45",
        description:
          "Affordable yet powerful ANC headphones with high-resolution sound and up to 50 hours of battery life.",
        price: 12999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS96ojQaZzebnJO6YNG50Y9fX3eUN2enGIbuUHMz1A5dk1V53oXqueYTL0y4ToVpRNhllOb2NyUKVlf6Zi1SHJVmc0SreoGZ61phkPK8jvja4LIkG5I4ZeI7Q",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1,
      },
      {
        id: 28,
        name: "Skullcandy Crusher ANC 2",
        description:
          "Bass-heavy wireless headphones with adjustable sensory bass, active noise cancellation, and long battery life.",
        price: 15999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKdmtI4vn0TBF6WEsaXzKcKbdal0m5nAPOuY19k18vEAqjiqScLcUt1-cMkeHrykD02jKYr-WVfVyM6BtRplBPVB2wg8BfnWpmlDLWiMOGwgNxGqj-UXLr",
        rating: 4.1,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 29,
        name: "Marshall Monitor II ANC",
        description:
          "Retro-styled over-ear headphones with signature Marshall sound, active noise cancellation, and up to 45 hours of playback time.",
        price: 22999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjLXtyiDNuOscobV4pL8Uhr3uH2IXvWt3Hw2JpHNf2Fdgl9HJKMVt89i6HXOm8WRclDFpmsi_F4jrsTyK8Pgq7bLlDDwMv7qIpvZh4Rpe3NgCllx6_QXgLAHdn",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 30,
        name: "Philips PH805",
        description:
          "A budget-friendly yet premium-looking ANC headphone with solid battery life and well-balanced audio output.",
        price: 11999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaIkOFNY3LNckCjNfMgrI5TYGznjw9q8bN49WuQwiSy9LmT6iJb-JOArHaVp5Li4-pfr2sukDDR_i2hwgcHecBCQD7czHDJh2KfgqFTCwgBPtXMDtmlPRm",
        rating: 4.0,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Wired Earphones",
    gadgets: [
      {
        id: 31,
        name: "Sony MDR-EX155AP",
        description:
          "Compact, lightweight wired earphones with balanced sound, in-line mic, and comfortable fit.",
        price: 1299,
        discountedPrice: 999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXdPQ2ksc0RwzF5OM7Gp921W28h6PEy_7Y7Q-wlVPtQw3syFpvxeFY_VzbW2DzOTL4QmIMNiWLfKqjYk9jWiX5AhOwsygSKirW_YpsLA5l2cmj_N2B_Qz9",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 32,
        name: "Sennheiser CX 300S",
        description:
          "High-fidelity in-ear headphones with deep bass, passive noise isolation, and ergonomic design.",
        price: 3499,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKk_Od4FTpKjchrPaq8ZPJlNA4gDbuoO6Xvfb2qT-7KibtgFRPUkOx7_WobTmaY8NAlV2NFYJcBEst0VSxjSna54YlDPFar2vFUodmSU4",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 33,
        name: "JBL C200SI",
        description:
          "Affordable wired earphones with JBL’s signature sound, deep bass, and noise-isolating fit.",
        price: 899,
        discountedPrice: 799,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfi6O3dz64QFvcYKwPANbAshD5Myu6ZF_Y44YK10ZjEW_3eDDEMOHFpMnjNqzXBlSqSyf4EJvnWmaRXfL1qBFzlEohBM4eQSoLAkc5sKbTt3gWKZbk6oRT",
        rating: 4.0,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 34,
        name: "1MORE Piston Fit",
        description:
          "Stylish and durable earphones with an aluminum body, Hi-Res certified sound, and in-line mic.",
        price: 1499,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlMnkpvkrGywy7QR65k3mx-iYkSUh4vnvMA9h8shF6TrrLd7dI6JfE_vqyFKWSNqJC0hiRucoF-yuddOVVr4ol-2rQ6DygqhFkrv1s9-E8",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 35,
        name: "Realme Buds 2",
        description:
          "Popular budget earphones with powerful bass, tangle-free cable, and inline remote controls.",
        price: 599,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMkJcU9279GDM2NrJKHrx-4-oiKEs76VU0JPxsnos5sppb3oS9__Ot4KWbh4WB1d5mLYpKNDgq4bT87TjNms1aSJKUMJjyVtYi8liY7i0p",
        rating: 4.1,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 36,
        name: "Bose SoundSport In-Ear",
        description:
          "Sporty, sweat-resistant wired earphones with Bose’s signature audio and secure-fit design.",
        price: 4999,
        discountedPrice: 4299,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrr9s8ZSfMpFZ0GJQh3tkpwAl6eUeF_j9Ppj5YaMrxaXnpD2_NDoFcgPlaVV_RrJxOCxVVVQ3B-ZZ-hWe9LeYljzMsrem8EqfF1A5y7z__2rm6Ge93XjAL",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 37,
        name: "Skullcandy Ink’d+",
        description:
          "Lightweight and stylish earphones with enhanced bass, noise isolation, and in-line controls.",
        price: 1299,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSafCPo6G0BmmECujp8g9Yd9IeBjKM_ieJAw-m21OQkjCUm_nWVuD-3qi9TQXim37GRtRk_IgqlhhLIf71VVl1rLYOMWJyaBtTPSc5VsH4",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 38,
        name: "Razer Hammerhead Duo",
        description:
          "Gaming-oriented dual-driver earphones with immersive sound and durable build.",
        price: 2999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeVrdJvcgP8HZjxqdODJlMMgK3hloX1oio6CtqkSer7FKqUi63nHleWoYmoj3q9CoOZJb4WfoF6ZLG0MUWfA0NieqfEriANjsqTdRpucpi47s25itvWJk5qQ",
        rating: 4.4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 39,
        name: "KZ ZSN Pro X",
        description:
          "Audiophile-grade wired earphones with hybrid drivers, detachable cable, and transparent design.",
        price: 2199,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsyA1_ZrBw5wtZyJdO8PtPxbmBtRFrTgjwNl67jx51EAgRIYam-TkeVYiyybwNclwDrMzo8ey9gIxtI-uCzeqPsoKTNwlgDzo0NVNXe70XvwE-yuaH7S9lGA",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 40,
        name: "Panasonic RP-TCM125",
        description:
          "Budget-friendly wired earphones with crisp sound, ergonomic fit, and built-in mic.",
        price: 799,
        discountedPrice: 699,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQk5HOvHqXSwjrNSdfdvTLFnTeTbtwkQTmwyvdcIa-UMa_WAf0HoSZu5fFJYC8q_UL7yIn0sfez-E_pGZ1saJH1-1iLJRStf_pTPzZIT2EQ",
        rating: 4.0,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Neckband Earphones",
    gadgets: [
      {
        id: 41,
        name: "Sony WI-C200",
        description:
          "Wireless neckband earphones with deep bass, 15-hour battery life, and quick charge support.",
        price: 2499,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcToZh-Y_MbA0UcZefIXmJdvY26tcYbjgPjdBg7FTsqOZHpKLAzoYPwwkOi-QtraP__btaVKMUSSJijMho4YWemPYsk97fZr7gZtMwwDVuA",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 42,
        name: "OnePlus Bullets Wireless Z2",
        description:
          "Ultra-low latency neckband with 30-hour battery life, fast charging, and IP55 water resistance.",
        price: 2299,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKSliXzEBV6r6CteEu-GJQ6OQIfMIMDCECFI3GJmEmR5SfW88kwvFmAxnSV39oGmYmiE_liCZbnp2e4Ud4kZN0yfeSIiiR1I5P6DXHeMl4_EqtkTEUF33x2Q",
        rating: 4.4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 43,
        name: "Boat Rockerz 255 Pro+",
        description:
          "Sporty wireless earphones with ASAP fast charge, powerful bass, and water resistance.",
        price: 1999,
        discountedPrice: 1699,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9NTGLwiW3wSWPAtCmAU5GY7tE_cnrGfaksYfSl5g8dYXQ6viYY1wp77w6rPThj4M5zM2pr7JRMb4dyp5PK0RA6xqIMoExJDjM-V2L_Ara0s5aLjr3BhElOA",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 44,
        name: "JBL Live 220BT",
        description:
          "Premium neckband with JBL Signature Sound, ambient aware mode, and voice assistant support.",
        price: 4999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdSwUKefkFQ4e1nVeTXkOPT5hI2nDsSwupbKqDHkLuov-Q5DBwKQf4kLVKIWdmHA14z8RTEZFLzLnnSNveWR1c7f6tmhphFN22aTWr-D8pR_HcuHuxtoK95A",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 45,
        name: "Realme Buds Wireless 2 Neo",
        description:
          "Affordable Bluetooth neckband with dynamic bass boost, lightweight design, and 17-hour battery.",
        price: 1599,
        discountedPrice: 1299,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR35qJ80mGLAR8WfGYGKrMIi-nYPIgpto_HUmpK_hFrp29j4p0ICqBm6wDPiYvtRJS01NtIeP4ZELzocR8rXDX6kCb_sL0aSK9W3S8hvS5Pgc4yooHoJvllbg",
        rating: 4.1,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 46,
        name: "Sennheiser CX 350BT",
        description:
          "Audiophile-grade neckband with superior clarity, multi-device pairing, and USB-C fast charging.",
        price: 13999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRR3gRKEnTS2wbRxJ48KcrFp_n9Ph4AaX--fF00YbKT7vIb2D4-POm5xbW-boj_oorCki3UVOVMjXt4h4P_5ZGe43hikv0ecJWtlFk3F80a",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 47,
        name: "Oppo Enco M33",
        description:
          "Balanced sound profile with fast charging, magnetic earbuds, and 28-hour battery life.",
        price: 3299,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRs0GZ_mmGe-9iPGXXUtJMyBTfGchYy4c6e0SUAwFQ2clrky8cu62P7t7eP8gpVtzO9beKbCp1ODtmxIyYsxsFECdV0qrMislCXVLbBvreWWIn3adSEVmU8w",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 48,
        name: "Noise Tune Charge",
        description:
          "Budget-friendly neckband with dual pairing, ultra-long battery life, and sweat resistance.",
        price: 199999,
        discountedPrice: 195999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrW0pKOWviG1T1KTLevOQQhZNQLpOY85peh9DICtJOfuEd39LvAIgxAajt8kUTchDTH8InNgfvlyn7y0jIxmCBTywcwzRRcT2uEU7rzGQv",
        rating: 4.0,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 49,
        name: "Infinity Glide 120",
        description:
          "Deep bass neckband from JBL’s Infinity lineup, featuring comfortable fit and powerful drivers.",
        price: 1699,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTppq69dIV4ewL-2A_qkxTeJqnoQ6HFVHQnwWe6uUvSYpecclYBM0wAa3ORWZF7GzzGoDooZHtPoiALQOtSrlVhMk62qxKkRODlN3T59xfxG74ExvlyOSMk",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 50,
        name: "Boult Audio Probass Curve",
        description:
          "Stylish and durable wireless neckband with punchy bass, passive noise isolation, and IPX5 rating.",
        price: 1499,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYSW8pcgAdPB1aAvt_wDblHXhRQtfxoPRm4ajygK-70l70s2vTKNzvmWzknCSt7Ikhe6i048ELPJOcFK63SdVe12-93bPq4VcC5UkZltSWWh49dnfK9mYUcg",
        rating: 4.1,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
    ],
  },

  {
    type: "Smartwatches",
    gadgets: [
      {
        id: 51,
        name: "Apple Watch Series 9",
        description:
          "Advanced smartwatch with health tracking, always-on display, and seamless iPhone integration.",
        price: 41999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQp3_xQkclsOnrIZe7A6uQd6T7fUtUOeXoXlL00L-OrCv3eChqJEoR_AqsI4BP5q_omNTiCbzpLqmCTuLDdxMuHOe8qAL6YbOG5CKIY9Oya48eT7iGT9XQl-Q",
        rating: 4.8,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 52,
        name: "Samsung Galaxy Watch 6",
        description:
          "Feature-packed smartwatch with Wear OS, AMOLED display, and advanced health tracking.",
        price: 34999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT80Ck9Wz2_R_oCpLyyA1OcfdjPOgqlHxejdinzMSY-WoMoamqo2fYompPLkz9YJxooHT21f25Ypm7qiSXhSnlptvr-je4vPiNzdwG3uISFr0k-SOTE7tC93g",
        rating: 4.7,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 53,
        name: "Garmin Fenix 7",
        description:
          "Premium rugged smartwatch with GPS, sports tracking, and long battery life for outdoor adventures.",
        price: 59999,
        discountedPrice: 54999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7g51hm39l3G0jAArzt4eipexpQee3iAKHnVTq0iO4pqhQ0W6f8BsdnYMZO6oPkLNMN5nIDEn2ZxsZF2ZYqic7JLXXQ0TOng254nF13iUIF3wfECNeHwtEIg",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 54,
        name: "Fitbit Sense 2",
        description:
          "Advanced health-focused smartwatch with stress tracking, ECG, and built-in GPS.",
        price: 26999,
        discountedPrice: 23999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8YjaZ5Skzs8yVD6qShHrYccqmLyZ9s-hq-39hK4b9MaDZ2IIbHyP0TB52Dg7Q0D8uqubg3zbyURPYP3CgYTTYbqSBIhy3qpSRlOvOGdZVu_H4xnDjH-RxPQ",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 55,
        name: "Amazfit GTR 4",
        description:
          "Stylish smartwatch with AMOLED display, GPS tracking, and long battery life.",
        price: 16999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRbWPeXch5gmwO21IvpCVJ3_BtTRgrsOmh2wq96mcFBX7gLdYa-diN2_YplWfqSXamqD2fzCvVXFYDXr0zOkHWYc_PDwR40FaWEDNO5UJ4jY_22HPUZ988",
        rating: 4.4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 56,
        name: "Google Pixel Watch",
        description:
          "Elegant smartwatch powered by Wear OS with Google Assistant and Fitbit health tracking.",
        price: 37999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrCG8_2sFT0ZSDhyYLALVJ-uY9QBtnnt0PtDVkqWI-8uhlFVYnGxP_80iuzK5vhvS6Hz43G8w5wilqlrz5uOyNJWGfF3AQtbDzSYPFzjU",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 57,
        name: "OnePlus Watch 2",
        description:
          "Sleek smartwatch with AMOLED display, fitness tracking, and long battery life.",
        price: 15999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTE9TTyuk5B_mRKL1FDjLfRjnIfE11mrQxDrhrCiLL0ushQ9RqUP_ltguO0njtgYQDv5Wj4svEMv2-x6HN3zJj0yXg5yi-9ScTduIpf4T0msnbrelOh0S6",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 58,
        name: "Huawei Watch GT 3",
        description:
          "Feature-rich smartwatch with 2-week battery life, AMOLED display, and accurate health tracking.",
        price: 22999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQHZRgR2HthTtg5rRr_qzic1fVF0l3fMrUSQ7dE2NXVlQ2dvbRoAH5FBhM4_OEPure8prwmhjDpDklsQyh1fOKSMkttmd1JXcF4f_o0yc",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 59,
        name: "Boat Wave Pro",
        description:
          "Budget-friendly smartwatch with fitness tracking, customizable watch faces, and long battery life.",
        price: 3999,
        discountedPrice: 3499,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQo-oSGTlHoyp316E5lzBeQ5qZ-ZvhznFi0W9qv9YyoIT8HvZ5Z7wDRxJ71CqOUKLFT8hdfkepvvUIOh2DPgcYm6o9lfgWpUOUJJYHoSd2",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 60,
        name: "Noise ColorFit Ultra 3",
        description:
          "Affordable smartwatch with large display, SpO2 monitoring, and multiple sports modes.",
        price: 5499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUAOlsdd_dHWI0GpuAB4Gr05SQKUZYtG2uGEZ8RRT8MI8VtBrWtLmbQgdHN0-xP9W7lGBvn2POw3u6JDFd4WlzNfN-PpQ3Q7PDIy8fqxZ2oFqk9Iwhs6yg",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
    ],
  },

  {
    type: "Bluetooth Speakers",
    gadgets: [
      {
        id: 61,
        name: "Amazon Echo Dot (5th Gen)",
        description:
          "Smart speaker with Alexa and deep bass. Ideal for home automation and high-quality music playback.",
        price: 5499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRy-X3WoXttNNSimHIRXVGmndibxo6qvwqd_w5oJqjunKfLESbMzFlJo9BIPNvRWpVvFQOwA0bAAGVY1KcpwSz-yXh7B2lWeHCjrQDSumVEe-yGEHMXnt42",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1,
      },
      {
        id: 62,
        name: "JBL Boombox 3",
        description:
          "Powerful bass, rugged waterproof design, and long battery life make this a perfect party speaker.",
        price: 39999,
        discountedPrice: 34999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJROTKmOqAR8rX9O4NPqq2kaEp9OsgrgNVwmxp8RyC8_j8L2pw0IRPe819ev6hrIjEzc9CxAWOLuChsm84E9TjjQN8OL-EDjcOeaJq5GnSy0HM8jLYKpjo",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 63,
        name: "Sony SRS-XB13",
        description:
          "Compact, extra bass, waterproof design, and a long-lasting battery for outdoor use.",
        price: 4199,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6NUTJlRm_AjVZBiWDR1Cv6P1WHxOT3MAVNTXNohSyg9C7B6uayG3reO84GxzBBKVx_qI-U_JZQ6nCgQ_B8_oR5JzujjDaFKK-tkr9okU4MigHTlbJO42DAA",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 64,
        name: "Bose SoundLink Flex",
        description:
          "Portable Bluetooth speaker with balanced sound and waterproof build for all conditions.",
        price: 15999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsR9MscP85ks2-e0IWSzS_KaXeT9VbOtDeBUtcXnqBAm1-NXTBhNIztJSv7TKNAMwi9I8mgVxgaumXIVBV1u8ka4dc_feIEbptpT4bV6XfEsgB1MiyCudwHg",
        rating: 4.7,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1,
      },
      {
        id: 65,
        name: "Marshall Emberton II",
        description:
          "Iconic Marshall design with clear sound and a long-lasting battery.",
        price: 17999,
        discountedPrice: 15999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMgqHiYqGLOTBKdNyaXEWEeCZeTjhVvLjtveVtqXWyMmBhkKnNzty12QChcnmbVA5he1bwAicqhnQ9m3s-0IXsrhQabeuZsUiifqW5rCx8bq_W9W6-ekrLnQ",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 66,
        name: "Ultimate Ears WONDERBOOM 3",
        description:
          "Super portable, waterproof, and delivers 360° sound for a great music experience.",
        price: 8499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS60_JEyLCYJfyt3AEtY-ibX_2X_GTa8D7OCOgOmMze2aqsll-997WhcsuyOKogMXVntEH494MAwMJuQhDchCrtnMerZLR_2OS5Yam7JrMxDCnzjgMxLtvVAQ",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 67,
        name: "Anker Soundcore Motion+",
        description:
          "High-fidelity audio with Qualcomm aptX, deep bass, and a durable build.",
        price: 11999,
        discountedPrice: 9999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeY5qTjNYNqRRGLyIJkdFDLBFljxYCHwrJ0LY9yAbcYbbdqdnUkcj12pp3svtBEX_Ri5hdsbS0QUF-WiuVmtN64r51V7zNO2mixqibCdK2u49gC_2trr71VQ",
        rating: 4.4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 68,
        name: "boAt Stone 1200",
        description:
          "Powerful sound, RGB lights, and a strong battery make it great for parties.",
        price: 4499,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGCNea8F92vvLqivZvxBvyxruxuoY_49IHIh30toL38GIBfz4jhEnbGGkrLh2YsSh6_uOOXYwUX9C2JwpTjJQ529C5i8NhfWJHNoIJi_yWwJhIvnx4o6xl",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 69,
        name: "Mi Portable Bluetooth Speaker",
        description:
          "Small yet powerful, with strong bass and a rugged, waterproof design.",
        price: 2999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCRZuRJDyTFdiW7D-d0Bvp3dneyeGxvqZKJlP-C13Azdv8OhRMYYuEjRIaKu2jqCLdlBZ6f8XaUtbW7nrVxqZEv-c9et-7NVz-NAtjPYEhOBKPkyOPHqtz",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 70,
        name: "Zebronics Sound Feast 85",
        description:
          "A budget-friendly yet powerful Bluetooth speaker with RGB lighting.",
        price: 3299,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSb6ghybMh_9h-JNi0Q_Hu0gYi7EVzz0S_88uPa5ztaBLTkrx0m5zaCbjkcL-NoSiGY0OEMkxYl0Qg8dnCYWfPo0l69FYsXYhzEhp_ibrw7TDQ3Vsg4oBxN",
        rating: 4.1,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0,
      },
    ],
  },

  {
    type: "VR Headsets",
    gadgets: [
      {
        id: 71,
        name: "Oculus Quest 2",
        description:
          "A wireless standalone VR headset with inside-out tracking and high-resolution display, ideal for gaming and productivity.",
        price: 32999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgWdC9tHvomxYjYwEq7gpVqs1cAqRvpYJsPo4S9sBIVm-lP6Zcl9mjIvwuLTSuSgfakD3zlVt8ZIB-nGJxxlvaQ_bfClZjZAIQnjCX2JQ7dVZh8tC9Fw3PYg",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 72,
        name: "HTC Vive Pro 2",
        description:
          "A premium PC VR headset featuring 5K resolution, precise tracking, and a wide field of view for high-end experiences.",
        price: 124999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTU0uOGcc5pED0X0v_41qr0H4o774YKk9oAx0QsNXRT_N7fUnRZuJqzDpCF4WwmsOx8elGgLWXMvsGWiQQn2jV8ugHVb1Oc-5Gqw49HdlZ-S1sp-Lg0DrP0",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 73,
        name: "PlayStation VR2",
        description:
          "Sony’s next-generation VR headset for PlayStation 5, featuring high-fidelity visuals, eye tracking, and adaptive triggers.",
        price: 45999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQHsoNdTIl_xD3cTTIo5dR-3W9GUn23PLS41qRC1-tK1deDReppMCVBUaNw85e41h0aDU7bxw8-Or6ArQwFMEjrDDd62IvJL05a4-jley8f692IG7xTl16rQ",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 74,
        name: "Meta Quest 3",
        description:
          "A powerful standalone VR headset with mixed reality support and enhanced performance for an immersive experience.",
        price: 41999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrzxsjSTXWb3XqTd16ETs-rri9xqP3FShDqY8_Lq-QElK6-guyNtZGH8cw603Mp4F2xkDhXRLDTw6BrDObfvLv-2tF-oo6c9ag8l2vFyk",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 75,
        name: "Valve Index",
        description:
          "A high-end PC VR headset with ultra-low latency, excellent tracking, and immersive audio for serious VR enthusiasts.",
        price: 84999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQi_1YBDSnabx9S1aEdN5id_umEoHGjLgLXytnHMdxK3fdEGcHNamrbOT7HmdBM8_P2xYp72nsOMt2iGvoeCP-B4MSo6epvNIyM5GVx4eE8MPYBc-0Pm4cu",
        rating: 4.7,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 76,
        name: "Pico 4",
        description:
          "A lightweight standalone VR headset with a comfortable fit and high-resolution display for extended VR sessions.",
        price: 74999,
        discountedPrice: 69999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBOQRmDX0S7vR0pZtbdQ-VRVaCU9ZWT2jaozFksvcz82BzfQTJBiR8lMfji7izsNuYmB6Gv0p4VtgPD0rRSCynSn0RGmbCjlaKLg6YMpyDDuOOX8E34wB-",
        rating: 4.1,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 77,
        name: "HP Reverb G2",
        description:
          "A high-fidelity VR headset designed for simulation and professional use, offering impressive clarity and comfort.",
        price: 94999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVMGrhJ0FqLpR6Rd636V6fWoZKFte4s0BKgqIJTCZmsl7vQJhre3slvTYeomternWaNZnm5uBFO7FpnrrmiFleJRTyRj0hKc8rkW_62QbQ_ViXzpnsKSTEQw",
        rating: 4.4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 78,
        name: "Samsung Odyssey+",
        description:
          "A Windows Mixed Reality headset with a vibrant AMOLED display and inside-out tracking for an accessible VR experience.",
        price: 121999,
        discountedPrice: 116999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpgvro06btaSW0XKQVClOVomraGmT4mP0Z1rGqAUXtf0xjUDWYBOPiC87E5xbNHI-Ok8O9Fs5Z1CfOTwwQ5yu08XT0A5l5hVrbXDmf42v8IwraQ5YOqdJE",
        rating: 4.0,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 79,
        name: "Pimax 8KX",
        description:
          "An ultra-wide FOV VR headset with 8K resolution, built for the most immersive and high-end VR experiences.",
        price: 114999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTl3Cy5wcI943QpakRGCwlp8ctu97dxpDzcJMgOTLcoeLZSZrosaBrIeYPIFcHL7e3JRuD5aEdp0IY1Y_5odPWEu4WHU0HO8Ioz0phI3jYqlw7kBZhP5kjv",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 80,
        name: "Lenovo Explorer",
        description:
          "A budget-friendly Windows Mixed Reality headset with a great balance of performance and affordability.",
        price: 86999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYY3s_MdRgNy7hsOcYGpbcvPDdREZkKQn17RC7jbZDnuIqiBugINvdUqfV8OQXhEFl7E-xij1GCzR-zTJBm7pkVBFxeGs01G0Q8yh7vuOh-Ru8kQNP87vY9A",
        rating: 3.8,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Game Controllers",
    gadgets: [
      {
        id: 81,
        name: "Sony DualSense Wireless Controller",
        description:
          "The Sony DualSense controller for PS5 features adaptive triggers, haptic feedback, and a futuristic design for an immersive gaming experience.",
        price: 5999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdlnjQaFDslyfav1jyaruL-UO5Fe4o4zpYx8c0RuO1Zsr0N-ABTF6AjtQNRhSxpqWSu8a25_6VbRNKoCtOK4CBGjMJlrslzCo-J1olv6UnT5FQ47bXGrDq",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 82,
        name: "Xbox Wireless Controller",
        description:
          "Xbox Wireless Controller offers superior comfort, textured grips, and seamless compatibility with Xbox Series X/S and PC.",
        price: 5499,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3nciIUXzlXjSJm2DzimfmWhOpKHpPJs9pebHDMqF7XG_mHXZbyhY_mTx6d7WPRGR2Edm7xTZMmvaGI1rbp4F13GskqwWrMywcBvl8U5np7X-ddMLcu87i_A",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 83,
        name: "Nintendo Switch Pro Controller",
        description:
          "Nintendo Switch Pro Controller provides a premium gaming experience with motion controls, HD rumble, and built-in Amiibo support.",
        price: 6999,
        discountedPrice: 5999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwxGsxEGvAXM0FHG6yrurOBlBFCdezc8xtYWr8mASSp4LHHAgQlUS9YvnqLkeI9_rtNoxI6F-pi1UZ6ROH_o2gKkY37BEZi_XooR0br8g",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 84,
        name: "Razer Wolverine V2 Wired Controller",
        description:
          "Razer Wolverine V2 offers hair-trigger mode, extra programmable buttons, and ergonomic design for competitive gaming on Xbox and PC.",
        price: 7499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxbUEbx4Bf0dX8HNAD3kXar47As2XxeorVa2RzCoxiCcc2efRAbRt3BRAa6wUIoryLHiUtFUXoaKToU-8LiugsyqoBhS0d31diYHiJAWu9",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0,
      },
      {
        id: 85,
        name: "PowerA Enhanced Wired Controller",
        description:
          "PowerA Enhanced Wired Controller delivers responsive gameplay with an affordable price, designed for Xbox and PC gaming.",
        price: 3499,
        discountedPrice: 2499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQY0lF1qxz0pO8JIRdo2b5-qU9YRhhCDfgEQQTYCHu1__23LYCLbwrolond88qFTlgZuHgXI2j7ZsUbzQn3njm0ISu47Py_pxYGc7IWR40RFWXqWeneDJlxRQ",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1,
      },
      {
        id: 86,
        name: "8BitDo Pro 2 Bluetooth Controller",
        description:
          "8BitDo Pro 2 is a versatile Bluetooth controller with customizable profiles, designed for Switch, PC, macOS, and mobile gaming.",
        price: 4999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmwk8l31uDYo9wjvSmBkKPjZzXif6HamPeqxPFxxZR0gUqcN4QhK1S2v8Wv3SKyQ5qA4XTANoWxM7J7n5h0VZuQLSvmr4pEsWveg3RUXInrkppWAt2A6CIAQ",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 87,
        name: "Logitech F710 Wireless Gamepad",
        description:
          "Logitech F710 Wireless Gamepad features dual vibration feedback and 2.4GHz connectivity for a lag-free gaming experience.",
        price: 4599,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRUJNeZP0PeTxPwOLDMjiMrFD-P7bZ29s8e4PMaNy97SWW5Og3A56zFT2Sx4IxNx7ozsYC05FAF-iRBUxXHkYEQT5BkMtq-2cy_skCufmZ0fGoWlG4dMjBTWw",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 88,
        name: "SteelSeries Stratus Duo",
        description:
          "SteelSeries Stratus Duo is a high-performance controller for PC, Android, and VR gaming, with a comfortable design and long battery life.",
        price: 5799,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6vCyQm8oseFWWBo80XMEs35zhwh9UFBuKRoaa7XWR1WYgANlc5QSNr_BUCm9W4B80RuRt7gjRW6WLlHyJL7ISwRrQaGSE5bNjE8LyiXY",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 89,
        name: "GameSir T4 Pro Multi-Platform Controller",
        description:
          "GameSir T4 Pro offers multi-platform support, motion control, and LED-backlit buttons, making it an excellent choice for gaming on the go.",
        price: 3999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyPEu1zty4ZC2rlYU65FFleUTjNQZKvfKi2a7Qcu3A_y5DpjdDtqJOx082lWWxjYkjUUdViDaIl_PDE3Bq0WlEiZylArZGnpkRSidORRMVS4XA3dBIqXBKGA",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1,
      },
      {
        id: 90,
        name: "HORI Split Pad Pro",
        description:
          "HORI Split Pad Pro enhances handheld mode on the Nintendo Switch with ergonomic design, full-sized analog sticks, and programmable rear buttons.",
        price: 5499,
        discountedPrice: 4499,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRv4U-_dNKFRExcwPeGSgizkeqUFfCthG4usHY5fosm6zkZnWpcDCBSeKBZszIVLmThKd-5VN0ii3cmmRGkFG8KdasBxhYFTcO6yoBGCThunK0r05GRHE1I",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Wireless Chargers",
    gadgets: [
      {
        id: 91,
        name: "Anker 15W Max Wireless Charger",
        description:
          "Anker's 15W fast wireless charger provides safe and efficient charging for Qi-enabled devices, featuring an anti-slip design.",
        price: 2499,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTp-ikORh-wLRnf7AduAq5bUzopa7uFLiyv52q2ZOxrGrIuj8VF5oFi8SWHdf2YO1K9isB02yLVoowlf85UOrMvefZbJFHOZTKex-1JAwF5fOTJfqry4FNW",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 92,
        name: "Belkin BoostCharge 20W Wireless Charging Stand",
        description:
          "Belkin's 20W fast wireless charger stand allows hands-free viewing while charging your smartphone efficiently.",
        price: 3499,
        discountedPrice: 2799,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLyCK5Z9kSBESNLhGpLOEw0l7v4PBb0Rnod4-sohHzAEKGf97pqFhCkt5K3xon_ckkUvlZxaCLJhVblqOwBzfaMF3OPbB5kyyWrjLoHNw",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 93,
        name: "Apple MagSafe Duo Charger",
        description:
          "Apple's MagSafe Duo Charger offers convenient wireless charging for iPhones and Apple Watches with a foldable design.",
        price: 9999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTkV6bwxuxUMeVizpPUh8Yy45Tf9Mg_MG3jSidWtsNg5zTNml_rryXB3Do6Ap0Oh9ArNBrtCFVbo0CfAEO-LyjAvGd_ZtsrdkgbBkzjMw3dsL6mm9OIm-5",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 94,
        name: "Samsung 3-in-1 Wireless Charger",
        description:
          "Samsung's 3-in-1 wireless charging pad lets you charge your phone, smartwatch, and earbuds simultaneously.",
        price: 6999,
        discountedPrice: 4999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFWgq7cjGibqumTXXDjMcuU22kqinQy3BTy7e2GU69GQjl5wuR-enA56o_dPtgUP6sIlPWb869dzXZla2GFOc8CQtYheRfKXoOkiF0F6Ow9j-2RAxT2VS1XA",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0,
      },
      {
        id: 95,
        name: "Spigen 30W Wireless Charger",
        description:
          "Spigen's 30W fast wireless charger provides advanced heat dissipation and safety features for efficient charging.",
        price: 4999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBjMogIGl1-STLDugBUbB0Gtwyl90__p1nnxnF-CS8s-1oRCGOD1PZ7GRGBYPjLTacu4iUvmaNSRbwf3HifUMyMqtro7GCYoRSZkoxzFaGLeXwA_w-179_",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 96,
        name: "Yootech Slim Wireless Charger",
        description:
          "Yootech's ultra-thin wireless charging pad is lightweight and perfect for travel, supporting standard 10W charging.",
        price: 1999,
        discountedPrice: 1499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGM9WMdPy2I6n-70A8rCf1JvjSi78zoDdK5kNMWrPWctoWYtXrTkFsQOUGBuWddt_gHX6jeyP35Q6e-D2xniqx3bffcCUYz35vGxx1uIKofoNJ-x4jjgtP",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1,
      },
      {
        id: 97,
        name: "ESR HaloLock MagSafe Wireless Charger",
        description:
          "ESR HaloLock MagSafe charger provides precise magnetic alignment for fast and secure wireless charging on Apple devices.",
        price: 3499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTF-QylG0jK7t5cnmr4sd13Petzh4xYO0nQpcmV0gTRO8PVA4sdRZ0p1kNiBb2i25agHUaCv-lNFQ6pvrZgjgt1hhpGGmI3GENirCqC07U1XHpxQr6F3sBV",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 98,
        name: "RAVPower MagSafe Wireless Charger",
        description:
          "RAVPower's MagSafe wireless charger offers strong magnetic attachment and fast 15W charging for Apple devices.",
        price: 3999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXqWT7g9i42GKVgL48_uG_E5NrnFFle2HEcPsRTQjBCjcLqivLti3ipX8d9pec7k5N_t27QcbUNwfGr64us61uA5YawFt79om_o-sRQ3hAfaFbaAMo6GNj",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 99,
        name: "CHOETECH Dual Wireless Charging Pad",
        description:
          "CHOETECH's dual wireless charging pad allows simultaneous charging of two devices, perfect for shared spaces.",
        price: 4599,
        discountedPrice: 3499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSstJl31pslWx2EPNzOsi2a2T5-pnPfKHYYJqLZGeQfQ0j2smLcJyHrE8Yll1Krr-Xfl6FCjYPSS6Dk7MIyZLj378lZseybh6zt127dP-HUnN3NeW15MLePRg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1,
      },
      {
        id: 100,
        name: "Portronics Flux 15W Wireless Charger",
        description:
          "Portronics Flux 15W Wireless Charger offers fast and reliable charging in an ultra-slim and lightweight design.",
        price: 5499,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpvw4wDtBBvlo3cw7gKAshAJP2P8yTzvA_X3yUMxetrCFT4Ayr0H5XRRhkeeh3sTWBFa_2SU-31be0Ffjljm84PlWKqTAhG2ZhSRsFPzuHZbzRNLHXtYT15w",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Fast Chargers",
    gadgets: [
      {
        id: 101,
        name: "Anker PowerPort III 65W",
        description:
          "Anker PowerPort III 65W offers ultra-fast charging for laptops, tablets, and smartphones with GaN technology for compact efficiency.",
        price: 3999,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0xNkLP9NnhboBGcZjCnDXkwT8Wre1pQkfVOvPeuhtM0vctVCuVc4bLgcnICEX9IJ1KaZ8C-pTTPZTcOrPY8O23Sc9iJbsTuFn0QCKZ2I",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 102,
        name: "Apple 20W USB-C Power Adapter",
        description:
          "Apple 20W USB-C Adapter ensures fast and efficient charging for iPhones and iPads, optimized for Apple devices.",
        price: 1999,
        discountedPrice: 1599,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3FRXEnBBmRYyRfd8huyIxVLAnIPYL00iP-3kjX0bt0ZR_lHpjRB5q4e42vrhYoSrfI6IC1XblP0z_L7jyrUj3_v8mq1W6dBmPAGjJqI9LYNqCVkpLN7xYyA",
        rating: 4.7,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 103,
        name: "Samsung 45W Super Fast Charger",
        description:
          "Samsung 45W Super Fast Charger delivers high-speed charging for Samsung Galaxy devices, featuring USB PD and PPS support.",
        price: 3499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjX5IDl8WjMrRppGhZnrnQ7FbW_DmtPahezc727RtBJHLiqeOqCZiok6uPvTSxJOt4GV6lbfM1pLFYVbc5LLsTYAOwGgFqzrxj6bfdJaro-EjaUbb-NAnG",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 104,
        name: "OnePlus 65W Warp Charger",
        description:
          "OnePlus 65W Warp Charger powers up OnePlus devices at lightning speed, ensuring fast and safe charging.",
        price: 2799,
        discountedPrice: 2499,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7oXiLfxxUYArPpsYA2TCB3smBzzSzWzAut1X-gaPRX0eG0OoJDKKItWNMMXkx7sbpX4klR218aoFtPBU7ZKLQGsiOhi2H0LWeLpqywQr7DGxu_A_kJmjO",
        rating: 4.8,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 105,
        name: "Xiaomi Mi 67W SonicCharge Adapter",
        description:
          "Xiaomi Mi 67W SonicCharge Adapter supports ultra-fast charging for Xiaomi smartphones and other compatible devices.",
        price: 2499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdi-S_SO41X6s-NutQyl4S39oqemM0GxsPPhyA_5ZI4w0VThyr7bGtk0XsPLbZHuMekh3-l41AFzzwSWqrlyK34VaNE4haaDxU_lowonvssrYN00I4DZJ-hA",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 106,
        name: "Realme 67W SuperDart Charger",
        description:
          "Realme 67W SuperDart Charger delivers blazing-fast charging for Realme smartphones and other USB-C compatible devices, ensuring safe and efficient power delivery.",
        price: 2499,
        discountedPrice: 2199,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpgnSXspPLZM-U428nWQHvaZkMEbT5rRdDhEnLZS6Orm4RERlaOc4zc6EO3RCTRc4478_57Vw4GExyST3jpX3a9Uh6O9XXIWiwIHVhYCfgWBg0CV6qQZza",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 107,
        name: "Spigen 27W USB-C PD Charger",
        description:
          "Spigen 27W USB-C Charger provides fast and efficient charging for iPhones, Android devices, and tablets.",
        price: 1799,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAugD0y3sY_IsmdcdG9wtfbJllSdrJ7sHulVx7b26i9IJthjLL1dLqxYMO9j2VkeI-n9pmiWmoP7Mt_MOGPMzvCRNrQvP3n-ywV5X1FTscwqYtqZVc9NVQ",
        rating: 4.4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 108,
        name: "Belkin 40W Dual Port Fast Charger",
        description:
          "Belkin 40W Dual Port Charger allows simultaneous fast charging with USB-C Power Delivery.",
        price: 3499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS4gtNYZi6R3l3quc2MgynmMtm_RjdZm6-F2EzMt-i9NvXZQP5_vxzRCv4dlBAFFmpMuhUT1o-s7deBVatw7PrLJgksTBJ1cZDHkKmGNFRWa7OVEXYkuvha",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 109,
        name: "UGREEN Nexode Pro 100W Charger",
        description:
          "Ugreen 100W GaN Charger supports multi-device fast charging with 4 ports, ideal for laptops, tablets, and phones.",
        price: 5999,
        discountedPrice: 5599,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIsNIDxiOqA8Qt6DYUqT_Czpo0YGWsOn7mVLQ7I2rNeLyJ0MIGTZNjc3u886kN9PHEtQjbdEm2dkyLD52pAZyDcsisV9WMEFJbA3mpLKiMe9on7XerYnCf",
        rating: 4.9,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 110,
        name: "Boat 20W SuperFast Adapter",
        description:
          "Boat 20W Adapter provides high-speed charging for smartphones with USB-C Power Delivery.",
        price: 1499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQLHnRiJgp7zdGA_4XZXfCj82IaDA2nipQhl-imyhqxUV31j_gAbaiKc1IlhNh44USV4NHiypbzyPuI-CQqRJnDHTxOrIBjWWZm18OZFrQ2rypumlwRrnlPw",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },

  {
    type: "Power Banks",
    gadgets: [
      {
        id: 111,
        name: "VoltMax 20000mAh Fast Charge Power Bank",
        description:
          "VoltMax 20000mAh Power Bank offers ultra-fast charging with dual USB-C and USB-A ports, ensuring your devices stay powered throughout the day.",
        price: 3499,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkdvYJZklIYTVijbTAZoVa-KFf_-X32R2WwnM_OhGtFYMa9iJ-aMFx2rLfx1gf8qP8QwHlaXKcIR2ai9v5Dwxl-4NIgi7pXH4MQg86-STbDaxT4X2fTRUu",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 112,
        name: "Mi Power Bank 3i 20000mAh",
        description:
          "Mi Power Bank 3i 20000mAh features 18W fast charging, triple output ports, and an advanced lithium-polymer battery.",
        price: 2299,
        discountedPrice: 1999,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRk9F2MVWs9QbDme7B3zvCffiZtJubmtEyilXjSNL0U7q2BNgPCcGMt-YFvuLWGuZRTW-Ufm8hnXb-v1WZkMmvrb9WESTZT2x9uUG0OXA",
        rating: 4.6,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 113,
        name: "Anker PowerCore 20100mAh Ultra-High Capacity",
        description:
          "Anker PowerCore 20100mAh features high-speed charging with PowerIQ and VoltageBoost, making it a reliable travel companion.",
        price: 3999,
        discountedPrice: 3499,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUTOvbOTXFQn22bAygIYPlUF2678pfKJL3N21CugXk_ahjDFHq9PEqRKbQiCdmnaAKqg86AOh9g3uy_4UG-6bpYgtainTkGo6_Mk7ryQ",
        rating: 4.7,
        availability: Math.floor(Math.random() * 3) - 1,
      },

      {
        id: 114,
        name: "URBN 20000mAh 22.5W Super Fast Power Bank",
        description:
          "URBN 20000mAh power bank offers 22.5W fast charging with Type-C PD and Quick Charge 3.0 support for fast and efficient charging.",
        price: 2799,
        discountedPrice: 2299,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC3lzbV1dtyOm1u8xWRRA2O-jYx_WvZarQlcbT0iR3gej50E2bQ5DdFdWDz-FwRK9v22WIX-_zdiTxY8m1DaWNDQWjYim-7Ss9gL0jPbI",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 115,
        name: "Croma 20000mAh Power Bank",
        description:
          "Croma 20000mAh Power Bank features fast charging, dual USB output, and a sleek compact design for easy portability.",
        price: 2999,
        discountedPrice: 2499,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_Gx8-XJS3IqUcLCuflkJDtVInt7K2GArQzfAfvpj8inu6e0mRSfPwlPhfJeLv6EhsId2bzw7RYoI4cbcDd-A70qW6_2fgciMqE9JhOeNOG1SdmDyXkn9h",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 116,
        name: "OnePlus 10000mAh 18W Fast Charging Power Bank",
        description:
          "OnePlus Power Bank comes with 18W fast charging, a dual USB-C and USB-A port design, and a sleek premium finish.",
        price: 1999,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSzfNNwuIN5yRSP3vo6aP0v-DDZUWPnIkGgJNaMBb7qLV-Lr7a0-7xEWSQ4JIndeT_wEkhjdajtQnrBFAOwyO-ZHhxP7VlOhXdMvuc_LX0Z5l1bBLMS_MMM",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 117,
        name: "Realme 20000mAh Power Bank 2",
        description:
          "Realme Power Bank 2 features 18W two-way fast charging with USB-A and USB-C output, and a high-density lithium-polymer battery.",
        price: 2499,
        discountedPrice: 1999,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNcpapk8KQweWylKsZX1Ve-k6osNQ-CliOpZFWPxmsSwZKSC-s6Dmt_kN579EByaH_ZN19gTumaMlHNeD7NopUTvx2uhjNhJQqdPqNWA46om_BjbwSTLRS7w",
        rating: 4.3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 118,
        name: "Samsung 10000mAh 25W Super Fast Power Bank",
        description:
          "Samsung's 10000mAh power bank supports 25W super-fast charging with dual-port USB-C support and high durability.",
        price: 3299,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAC_eNJcTpVMbaDkpOYERgOKw8CGDD8VyVRX3t6KojulrlQ36IZLpfLorT-i6uPGCgqD1r6-RtBmXVFh6NENKoSSedkCaRMXGoKs37fsEqexqj0V96tSQS9g",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 119,
        name: "Syska 20000mAh Power Pro 200",
        description:
          "Syska Power Pro 200 power bank provides 20000mAh of power with dual USB outputs and an advanced battery management system.",
        price: 1799,
        discountedPrice: 1499,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSeaYMGJbuct5drZ5lC5AX8q7cIwZWdKjKUd9RarJTErOEqYp-SdnO8Kj9mrpY8vKNUtbbKJwyLK_yxVmK0C9LDHpPVNfZ7oPSHO0g1INhzvaLBm7dpftylg",
        rating: 4.1,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 120,
        name: "Portronics Power Brick 20000mAh Power Bank",
        description:
          "Portronics Power Brick Power Bank features a 20000mAh battery, fast charging capabilities, and multiple output ports for convenience.",
        price: 2199,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMbTXKM_0bSy1Q-NrHOSXEVnuINDgNEVMN1rFxxGAhY5xUqb1Z02bsLYnIW_GgCpsLDr-7nGof7nKBoXXhE5p1b2zIUGndTqjlUbvHTAQKF1ztGeYUCnMlyQ",
        rating: 4.2,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
];

export default gadgetData;

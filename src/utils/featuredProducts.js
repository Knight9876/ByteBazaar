import logo from "../assets/hero1.jpeg";

const featuredProducts = [
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
    id: 3,
    name: "HP Reverb G2",
    description:
      "A high-fidelity VR headset designed for simulation and professional use, offering impressive clarity and comfort.",
    price: 49999,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVMGrhJ0FqLpR6Rd636V6fWoZKFte4s0BKgqIJTCZmsl7vQJhre3slvTYeomternWaNZnm5uBFO7FpnrrmiFleJRTyRj0hKc8rkW_62QbQ_ViXzpnsKSTEQw",
    rating: 4.4,
    availability: Math.floor(Math.random() * 3) - 1,
  },

  {
    id: 4,
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
];

export default featuredProducts;

import logo from "../assets/logo.webp";

const addRandomDecimal = (price) => {
  console.log(typeof price);
  
  // Randomly choose one of the decimal values
  const randomDecimal = [".29", ".49", ".59", ".69", ".79", ".99"];
  const randomIndex = Math.floor(Math.random() * randomDecimal.length);
  const randomDecimalValue = randomDecimal[randomIndex];

  // Add the random decimal to the price
  return price + randomDecimalValue;
};

const featuredProducts = [
  {
    id: 1,
    name: "Gold Flake Kings",
    description:
      "A premium full-flavored cigarette from ITC with a smooth and rich taste. Gold Flake Kings offers a well-balanced tobacco blend, ensuring a satisfying smoking experience with a refined aroma and a classic strong finish.",
    price: addRandomDecimal("309"),
    discountedPrice: addRandomDecimal("189"),
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/8787af78277615.Y3JvcCw0MDQsMzE2LDk5NSw2MDk.jpg",
    rating: 4,
    availability: Math.floor(Math.random() * 3) - 1,
    tag: 0, // Customer Favourite
  },
  {
    id: 2,
    name: "Rajhans",
    description:
      "A premium organic cigarette from Altria, known for its quality tobacco and smooth flavor. Known for its quality tobacco and smooth flavor, Rajhans offers a premium organic cigarette experience with a smooth flavor. It's a popular choice among smokers who prefer a premium organic cigarette experience.",
    price: addRandomDecimal("1129"),
    discountedPrice: addRandomDecimal("759"),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRji7UOyq1dOudjmWtL_MQ1m22nYDMKe95K52XreYoJHYaHaYzXgayIPD8aaup20zgFOrE&usqp=CAU",
    rating: 3.5,
    availability: Math.floor(Math.random() * 3) - 1,
  },
  {
    id: 3,
    name: "Panter Noir",
    description:
      "Panter Noir offers a sweet and fruity taste with a peach flavor, making it the perfect choice for smokers looking for a refreshing and flavorful experience.",
    price: addRandomDecimal("549"),
    discountedPrice: addRandomDecimal("199"),
    image: "https://smokincigar.com/cdn/shop/products/PanterFull_Nuit_Noir_OG.jpg?v=1625841888",
    rating: 3.5,
    availability: Math.floor(Math.random() * 3) - 1,
    tag: -1, // Best Seller
  },
  {
    id: 4,
    name: "The Chancellor by Nat Sherman",
    description:
      "A pinnacle of luxury, The Chancellor is Nat Sherman's most exclusive cigarette, crafted with the finest tobacco and gold leaf accents. Known for its ultra-luxury cigarette, The Chancellor offers an unparalleled smoking experience with a smooth, rich flavor. It's a popular choice among elite smokers who demand the absolute best.",
    price: addRandomDecimal("43349"),
    image: "https://upload.wikimedia.org/wikipedia/en/5/58/Nat_Sherman_logo.png",
    rating: 5,
    availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
    tag: 1, // Limited Edition
  },
];

export default featuredProducts;

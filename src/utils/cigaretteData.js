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

const cigaretteData = [
  {
    type: "Full Flavor / Regular Cigarettes",
    cigarettes: [
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
        name: "Gold Flake Premium",
        description:
          "A smooth, well-balanced cigarette with a rich tobacco blend. Designed for those who prefer a milder yet flavorful smoke, Gold Flake Premium provides a consistent draw and a lingering, pleasant aftertaste.",
        price: addRandomDecimal("359"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/8787af78277615.Y3JvcCw0MDQsMzE2LDk5NSw2MDk.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 3,
        name: "Classic Regular",
        description:
          "A bold and rich-tasting cigarette from ITC’s Classic brand. Known for its deep and intense flavor, Classic Regular is favored by those who enjoy a stronger smoking experience with a smooth finish.",
        price: addRandomDecimal("349"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUX1elJWerOo5HYI6guzL1W98ueI3d8q4OQ&s",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 4,
        name: "Navy Cut",
        description:
          "A strong, full-bodied cigarette with an iconic taste. Navy Cut is recognized for its robust flavor, offering a bold tobacco blend with a perfectly balanced throat hit and a smooth exhale.",
        price: addRandomDecimal("329"),
        discountedPrice: addRandomDecimal("179"),
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Players_navy_cut_logo.png",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 5,
        name: "Four Square Kings",
        description:
          "A classic cigarette with a well-balanced tobacco blend. Four Square Kings delivers a rich and smooth experience, appealing to smokers who prefer a traditional yet slightly mellow full-flavored smoke.",
        price: addRandomDecimal("259"),
        image: "https://www.godfreyphillips.co.in/public/storage/images/cigrette-images/four-square-logo.png",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 6,
        name: "Insignia",
        description:
          "A premium offering from ITC known for its refined taste. Crafted for discerning smokers, Insignia provides a luxurious smoking experience with a smooth yet bold tobacco flavor and a lingering aftertaste.",
        price: addRandomDecimal("459"),
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Logo_of_VST_Industries_Ltd.png",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 7,
        name: "Benson & Hedges Gold",
        description:
          "A high-end, smooth cigarette from ITC. Benson & Hedges Gold is known for its sophisticated tobacco blend, offering a velvety smooth smoke with a mild yet distinctive richness.",
        price: addRandomDecimal("319"),
        discountedPrice: addRandomDecimal("169"),
        image: "https://socaldistrollc.com/cdn/shop/files/BHB_600x.jpg?v=1689374755",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 8,
        name: "Charms",
        description:
          "A strong and intense cigarette, preferred by bold smokers. Charms is known for its powerful hit and full-bodied taste, making it an ideal choice for those who enjoy a rich, deep smoking experience.",
        price: addRandomDecimal("229"),
        image: "https://tpackss.globaltobaccocontrol.org/sites/default/files/styles/500x500/public/pack_images/IND_CHI_L2_03_001_0_0_2_6.JPG?itok=zg6jQRCV",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 9,
        name: "Panama King",
        description:
          "A locally popular full-flavored cigarette. Panama King is a go-to choice for those who prefer a traditional tobacco blend, offering a consistently bold taste with a satisfying draw.",
        price: addRandomDecimal("359"),
        image: "https://poster-gallery.com/images/products/754/poster_754670.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 10,
        name: "Red & White",
        description:
          "An affordable cigarette known for its strong tobacco blend. Red & White is well-regarded for delivering a bold and authentic tobacco flavor while remaining a budget-friendly choice for everyday smokers.",
        price: addRandomDecimal("409"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/d3e518172576307.Y3JvcCwyMjIwLDE3MzcsMTM5MCwxNjMy.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
  {
    type: "Light / Milder Cigarettes",
    cigarettes: [
      {
        id: 11,
        name: "Classic Milds",
        description:
          "A smoother, lighter alternative from ITC with a milder taste. Classic Milds, formerly known as Classic Lights, offers a more subtle flavor profile compared to its full-flavored counterpart. It provides a balanced smoking experience with reduced tar and nicotine content, appealing to those who prefer a less intense cigarette.",
        price: addRandomDecimal("359"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUX1elJWerOo5HYI6guzL1W98ueI3d8q4OQ&s",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 12,
        name: "Gold Flake Lights",
        description:
          "A milder blend from ITC, offering a smooth smoking experience. Gold Flake Lights features a lighter version of the classic Gold Flake blend, providing a more mellow taste while maintaining the brand's signature flavor notes. It's designed for smokers who enjoy a softer, less intense tobacco flavor with a smoother draw.",
        price: addRandomDecimal("339"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/8787af78277615.Y3JvcCw0MDQsMzE2LDk5NSw2MDk.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 13,
        name: "Wills Classic Ultra Mild",
        description:
          "Light and smooth cigarette from ITC. Known for its light and smooth taste, Wills Classic Ultra Mild offers a light and smooth smoking experience with a smooth draw. It's a popular choice among smokers who prefer a light and smooth smoking experience.",
        price: addRandomDecimal("319"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUX1elJWerOo5HYI6guzL1W98ueI3d8q4OQ&s",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 14,
        name: "Four Square Lights",
        description:
          "A light and budget-friendly option from Godfrey Phillips. Known for its light and budget-friendly price, Four Square Lights offers a light and budget-friendly smoking experience with a smooth draw. It's a popular choice among smokers who prefer a light and budget-friendly smoking experience.",
        price: addRandomDecimal("299"),
        discountedPrice: addRandomDecimal("159"),
        image: "https://www.godfreyphillips.co.in/public/storage/images/cigrette-images/four-square-logo.png",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 15,
        name: "L&M Blue",
        description:
          "Milder version of L&M, offering a smooth smoking experience from Philip Morris. Known for its milder taste and smooth draw, L&M Blue offers a smooth smoking experience with a smooth draw. It's a popular choice among smokers who prefer a smooth smoking experience.",
        price: addRandomDecimal("349"),
        image: "https://icdn.bottlenose.wine/images/full/586306.jpg?fit=clip&h=400&w=400&auto=format",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 16,
        name: "Insignia Silver",
        description:
          "Light and smooth premium cigarette from ITC. Known for its light and smooth taste, Insignia Silver offers a light and smooth smoking experience with a smooth draw. It's a popular choice among smokers who prefer a light and smooth smoking experience.",
        price: addRandomDecimal("469"),
        discountedPrice: addRandomDecimal("439"),
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Logo_of_VST_Industries_Ltd.png",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 17,
        name: "Parliament Lights",
        description:
          "A premium lighter option from Philip Morris with a recessed filter for a smoother experience. Known for its premium lighter option, Parliament Lights offers a premium lighter experience with a recessed filter for a smoother experience. It's a popular choice among smokers who prefer a premium lighter experience.",
        price: addRandomDecimal("509"),
        discountedPrice: addRandomDecimal("459"),
        image:"https://socaldistrollc.com/cdn/shop/files/parliament_800x.jpg?v=1689372925",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 18,
        name: "Dunhill Fine Cut Mild",
        description:
          "A finely crafted cigarette with a smooth, light taste from Wills. Known for its high-quality tobacco and smooth flavor, Dunhill Fine Cut offers a full-bodied smoking experience with a smooth draw. It's a popular choice among smokers who prefer a full-bodied smoking experience with a refined flavor profile.",
        price: addRandomDecimal("559"),
        image: "https://i.namu.wiki/i/qDA-XwfvfaHWu0yatLQe3ZR5pdg-xGt_0DQlXflLjI4FuQvnjU6thabKJs8hSE7_6GAE9jaL-11s2fSpIWkUow.webp",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 19,
        name: "Red & White Lights",
        description:
          "Smooth and mild cigarette by Godfrey Phillips for an enjoyable smoking experience. Known for its smooth and mild taste, Red & White Lights offers a smooth and mild smoking experience with a smooth draw. It's a popular choice among smokers who prefer a smooth and mild smoking experience.",
        price: addRandomDecimal("329"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/d3e518172576307.Y3JvcCwyMjIwLDE3MzcsMTM5MCwxNjMy.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition // Limited Edition
      },
      {
        id: 20,
        name: "Panama Lights",
        description:
          "A light and affordable cigarette option from a well-known brand. Known for its light and affordable price, Panama Lights offers a light and affordable smoking experience with a smooth draw. It's a popular choice among smokers who prefer a light and affordable smoking experience.",
        price: addRandomDecimal("289"),
        image: "https://poster-gallery.com/images/products/754/poster_754670.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
  {
    type: "Menthol Cigarettes",
    cigarettes: [
      {
        id: 21,
        name: "Gold Flake Menthol",
        description:
          "A popular menthol option from ITC, offering a crisp, cool flavor. Known for its crisp, cool flavor, Gold Flake Menthol offers a menthol cigarette experience with a refreshing taste. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("359"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/8787af78277615.Y3JvcCw0MDQsMzE2LDk5NSw2MDk.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 22,
        name: "Classic Menthol",
        description:
          "Menthol-infused version of Classic, delivering a refreshing taste from ITC. Known for its menthol-infused version, Classic Menthol delivers a refreshing taste with a menthol cigarette experience. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("329"),
        discountedPrice: addRandomDecimal("189"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUX1elJWerOo5HYI6guzL1W98ueI3d8q4OQ&s",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 23,
        name: "Flake Menthol",
        description:
          "A smooth menthol cigarette from ITC, balancing flavor and coolness. Known for its smooth menthol cigarette, Flake Menthol balances flavor and coolness with a smooth menthol cigarette experience. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("349"),
        image: "https://s3.amazonaws.com/zaubatrademarks/ce8a9ea0-eb04-4725-91d3-efd807a8a499.png",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 24,
        name: "Wills Menthol",
        description:
          "An iconic menthol cigarette from ITC, known for its bold taste. Known for its bold taste, Wills Menthol offers a menthol cigarette experience with a bold taste. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("339"),
        discountedPrice: addRandomDecimal("209"),
        image: "https://static.brandirectory.com/logos/wils006_wills.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 25,
        name: "Benson & Hedges Menthol",
        description:
          "A refreshing menthol blend from ITC, offering a smooth smoke. Known for its refreshing menthol blend, Benson & Hedges Menthol offers a menthol cigarette experience with a smooth smoke. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("459"),
        discountedPrice: addRandomDecimal("409"),
        image: "https://socaldistrollc.com/cdn/shop/files/BHB_600x.jpg?v=1689374755",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 26,
        name: "Insignia Menthol",
        description:
          "Menthol variant of Insignia, providing a cool and smooth experience from ITC. Known for its menthol variant, Insignia Menthol provides a cool and smooth experience with a menthol cigarette experience. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("469"),
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Logo_of_VST_Industries_Ltd.png",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 27,
        name: "Four Square Menthol",
        description:
          "A budget-friendly menthol option from Godfrey Phillips, perfect for everyday smokers. Known for its budget-friendly menthol option, Four Square Menthol offers a menthol cigarette experience for everyday smokers. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("259"),
        image: "https://www.godfreyphillips.co.in/public/storage/images/cigrette-images/four-square-logo.png",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 28,
        name: "Charms Menthol",
        description:
          "A premium menthol cigarette from ITC, delivering a smooth and refreshing taste. Known for its premium menthol cigarette, Charms Menthol delivers a smooth and refreshing taste with a menthol cigarette experience. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("309"),
        image: "https://tpackss.globaltobaccocontrol.org/sites/default/files/styles/500x500/public/pack_images/IND_CHI_L2_03_001_0_0_2_6.JPG?itok=zg6jQRCV",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 29,
        name: "Navy Cut Menthol",
        description:
          "Menthol version of Navy Cut, offering a balanced and affordable option from ITC. Known for its menthol version, Navy Cut Menthol offers a balanced and affordable option with a menthol cigarette experience. It's a popular choice among smokers who prefer a menthol cigarette experience.",
        price: addRandomDecimal("289"),
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Players_navy_cut_logo.png",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 30,
        name: "Panama Menthol",
        description:
          "A clean menthol option from ITC, known for its eco-friendly approach. Known for its eco-friendly approach, Panama Menthol offers a clean menthol cigarette experience with a clean menthol cigarette experience. It's a popular choice among smokers who prefer a clean menthol cigarette experience.",
        price: addRandomDecimal("299"),
        image: "https://poster-gallery.com/images/products/754/poster_754670.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
  {
    type: "Slim / Super Slim Cigarettes",
    cigarettes: [
      {
        id: 31,
        name: "Gold Flake Super Slims",
        description:
          "Elegant and slim, a premium option from ITC for sophisticated smokers. Known for its elegant and slim design, Gold Flake Super Slims offers a premium smoking experience for sophisticated smokers. It's a popular choice among smokers who prefer a premium smoking experience.",
        price: addRandomDecimal("359"),
        discountedPrice: addRandomDecimal("209"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/8787af78277615.Y3JvcCw0MDQsMzE2LDk5NSw2MDk.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 32,
        name: "Classic Gold Slims",
        description:
          "A slim version of the popular Classic Gold, offering a smooth and mild taste from ITC. Known for its slim version, Classic Gold Slims offers a smooth and mild taste with a slim cigarette experience. It's a popular choice among smokers who prefer a slim cigarette experience.",
        price: addRandomDecimal("329"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUX1elJWerOo5HYI6guzL1W98ueI3d8q4OQ&s",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 33,
        name: "Insignia Slims",
        description:
          "Korean favorite from KT&G, known for its ultra-slim design and smooth taste. Known for its ultra-slim design and smooth taste, Insignia Slims offers a slim cigarette experience with a smooth taste. It's a popular choice among smokers who prefer a slim cigarette experience.",
        price: addRandomDecimal("319"),
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Logo_of_VST_Industries_Ltd.png",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 34,
        name: "Four Square Slims",
        description:
          "R.J. Reynolds brings a unique ultra-slim cigarette for those who prefer a lighter, more refined smoke. Known for its unique ultra-slim design, Four Square Slims offers a lighter, more refined smoke with a slim cigarette experience. It's a popular choice among smokers who prefer a lighter, more refined smoke.",
        price: addRandomDecimal("289"),
        image: "https://www.godfreyphillips.co.in/public/storage/images/cigrette-images/four-square-logo.png",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 35,
        name: "Wills Slims",
        description:
          "ITC offers this iconic slim cigarette with a touch of style and sophistication. Known for its iconic slim cigarette, Wills Slims offers a slim cigarette experience with a touch of style and sophistication. It's a popular choice among smokers who prefer a slim cigarette experience.",
        price: addRandomDecimal("309"),
        image: "https://static.brandirectory.com/logos/wils006_wills.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 36,
        name: "Benson & Hedges Slims",
        description:
          "A luxury slim cigarette from ITC, famous for its colorful design and unique taste. Known for its luxury slim cigarette, Benson & Hedges Slims offers a luxury slim cigarette experience with a unique taste. It's a popular choice among smokers who prefer a luxury slim cigarette experience.",
        price: addRandomDecimal("459"),
        discountedPrice: addRandomDecimal("409"),
        image: "https://socaldistrollc.com/cdn/shop/files/BHB_600x.jpg?v=1689374755",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 37,
        name: "Navy Cut Slims",
        description:
          "A slim version of the premium Navy Cut cigarette, providing a refined smoking experience from ITC. Known for its slim version, Navy Cut Slims offers a refined smoking experience with a slim cigarette experience. It's a popular choice among smokers who prefer a refined smoking experience.",
        price: addRandomDecimal("319"),
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Players_navy_cut_logo.png",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 38,
        name: "Charms Slims",
        description:
          "ITC presents a slim option for Charms lovers, offering a full-flavor experience in a slim design. Known for its slim option, Charms Slims offers a full-flavor experience in a slim design. It's a popular choice among smokers who prefer a full-flavor experience in a slim design.",
        price: addRandomDecimal("299"),
        image: "https://tpackss.globaltobaccocontrol.org/sites/default/files/styles/500x500/public/pack_images/IND_CHI_L2_03_001_0_0_2_6.JPG?itok=zg6jQRCV",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 39,
        name: "Panama Fine Cut Slims",
        description:
          "A premium slim cigarette from ITC, known for its smooth, fine cut. Known for its smooth, fine cut, Panama Fine Cut Slims offers a premium slim cigarette experience with a smooth, fine cut. It's a popular choice among smokers who prefer a premium slim cigarette experience.",
        price: addRandomDecimal("329"),
        image: "https://poster-gallery.com/images/products/754/poster_754670.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 40,
        name: "Red & White Slims",
        description:
          "A slim cigarette from Godfrey Phillips, providing a smooth and mild experience. Known for its slim cigarette, Red & White Slims offers a smooth and mild experience with a slim cigarette experience. It's a popular choice among smokers who prefer a smooth and mild experience.",
        price: addRandomDecimal("269"),
        discountedPrice: addRandomDecimal("229"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/d3e518172576307.Y3JvcCwyMjIwLDE3MzcsMTM5MCwxNjMy.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
  {
    type: "Organic / Additive-Free Cigarettes",
    cigarettes: [
      {
        id: 41,
        name: "Indian Spirit",
        description:
          "Wills top choice for organic, additive-free smoking, offering a pure and natural experience. Known for its pure and natural experience, Indian Spirit offers a pure and natural smoking experience. It's a popular choice among smokers who prefer a pure and natural smoking experience.",
        price: addRandomDecimal("979"),
        image: "https://live.staticflickr.com/3356/3432144663_0b85fcbf65_z.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 42,
        name: "Moksha",
        description:
          "An affordable additive-free option from Wills, providing a simple and clean smoke. Known for its affordable additive-free option, Moksha offers a simple and clean smoke with a clean smoke experience. It's a popular choice among smokers who prefer a clean smoke experience.",
        price: addRandomDecimal("679"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8E_bMdPR7gb2TSyJeS38iGLDwgiy4Acl_g&s",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 43,
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
        id: 44,
        name: "Agni",
        description:
          "Japan Tobacco International's popular additive-free option, offering a classic, clean smoke. Known for its classic, clean smoke, Agni offers a classic, clean smoke experience with a clean smoke experience. It's a popular choice among smokers who prefer a clean smoke experience.",
        price: addRandomDecimal("829"),
        discountedPrice: addRandomDecimal("509"),
        image: "https://yt3.googleusercontent.com/YOS0Y-sYaKvhqhH-e29soIzj3HQYZ5CThkVVqyHjVKwuB-AKhxAoefdi6PGsyvXEz7bUxKCKWQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 45,
        name: "Dharma Gold Blend",
        description:
          "Wills offers this premium organic blend with the rich and distinctive taste of Perique tobacco. Known for its rich and distinctive taste, Dharma Gold Blend offers a rich and distinctive taste with a premium organic blend. It's a popular choice among smokers who prefer a rich and distinctive taste.",
        price: addRandomDecimal("959"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sJGyT6nZGXMQr_NrIAILw1K9WCVxPsruPA&s",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 46,
        name: "Taj Classic",
        description:
          "Wills premium additive-free option, perfect for those seeking a pure, luxurious smoke. Known for its pure, luxurious smoke, Taj Classic offers a pure, luxurious smoke experience with a pure, luxurious smoke experience. It's a popular choice among smokers who prefer a pure, luxurious smoke experience.",
        price: addRandomDecimal("1159"),
        image: "https://i.pinimg.com/736x/7c/64/41/7c644151cb61870fa3be29d0ed230dda.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 47,
        name: "Lucky Strike",
        description:
          "Wills offers this clean, additive-free version of their iconic Lucky Strike. Known for its clean, additive-free version, Lucky Strike offers a clean, additive-free version of their iconic Lucky Strike. It's a popular choice among smokers who prefer a clean, additive-free version of their iconic Lucky Strike.",
        price: addRandomDecimal("729"),
        image: "https://img.favpng.com/23/2/1/lucky-strike-cigarette-logo-british-american-tobacco-png-favpng-5gndpYz2avR5R7HaEphT2wHuh.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 48,
        name: "Surya Gold",
        description:
          "Imperial Brands presents this European favorite, known for its rich, bold taste in an additive-free blend. Known for its rich, bold taste, Surya Gold offers a rich, bold taste with an additive-free blend. It's a popular choice among smokers who prefer a rich, bold taste.",
        price: addRandomDecimal("909"),
        image: "https://i.pinimg.com/736x/d0/fc/19/d0fc1973c39efe1e0603012f1dd76534.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 49,
        name: "Vedanta Leaf",
        description:
          "Wills pure tobacco offering, providing a smooth, all-natural smoking experience. Known for its smooth, all-natural smoking experience, Vedanta Leaf offers a smooth, all-natural smoking experience. It's a popular choice among smokers who prefer a smooth, all-natural smoking experience.",
        price: addRandomDecimal("959"),
        discountedPrice: addRandomDecimal("599"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZrkV5B_GD6Bra95AMcXgPYn2WTF7zmprEA&s",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 50,
        name: "White Leaf",
        description:
          "A boutique brand known for its natural tobacco and unique design, offering an additive-free experience. Known for its natural tobacco and unique design, White Leaf offers an additive-free experience with a natural tobacco and unique design. It's a popular choice among smokers who prefer an additive-free experience.",
        price: addRandomDecimal("809"),
        image: "https://static.vecteezy.com/system/resources/previews/014/998/177/non_2x/tobacco-logo-isolated-on-white-free-vector.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
    ],
  },
  {
    type: "Clove Cigarettes (Kreteks)",
    cigarettes: [
      {
        id: 51,
        name: "Nawab Black",
        description:
          "A bold, spicy clove cigarette, Nawab Black is popular for its intense flavor and signature black packaging. Known for its bold flavor and distinct packaging, it’s a favorite among those who love a strong taste and striking design.",
        price: addRandomDecimal("749"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwScwnWaEdYYF8d5C_KbmaTmy4ZClKPmSDvg&s",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 52,
        name: "Jai Garam",
        description:
          "Jai Garam offers a rich, full-bodied kretek flavor, one of India's top clove cigarette brands. Known for its bold kretek taste, Jai Garam offers a rich experience that appeals to those who enjoy a robust smoke.",
        price: addRandomDecimal("699"),
        discountedPrice: addRandomDecimal("299"),
        image: "https://static.vecteezy.com/system/resources/previews/009/026/794/non_2x/jai-logo-jai-letter-jai-letter-logo-design-initials-jai-logo-linked-with-circle-and-uppercase-monogram-logo-jai-typography-for-technology-business-and-real-estate-brand-vector.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 53,
        name: "Sampoerna Classic",
        description:
          "Sampoerna Classic provides a smooth, balanced clove flavor from the renowned Indonesian brand. Known for its smooth, balanced taste, it’s a choice for smokers who love a classic, clean clove taste.",
        price: addRandomDecimal("799"),
        image: "https://img.favpng.com/11/17/4/sampoerna-kretek-a-mild-cigarette-marlboro-png-favpng-4XWDFx7TnWaTiWyzcdUg4Y0bZ.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 54,
        name: "Delhi Lights",
        description:
          "Delhi Lights is a lighter, refined clove cigarette, delivering a smooth and enjoyable smoke. Known for its lighter taste, it’s a top pick for those seeking a smooth, pleasant smoking experience.",
        price: addRandomDecimal("749"),
        image: "https://static.vecteezy.com/system/resources/previews/020/292/704/non_2x/delhi-indian-capital-name-in-hindi-text-delhi-typography-vector.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 55,
        name: "Kretek Supers",
        description:
          "Kretek Supers delivers an intense clove flavor with smooth smoke, creating a premium smoking experience. Known for its robust clove flavor and smoothness, it’s popular among smokers who prefer strength with a refined feel.",
        price: addRandomDecimal("799"),
        discountedPrice: addRandomDecimal("399"),
        image: "https://img.freepik.com/premium-photo/vintage-monogram-letter-k-style-baroque_923894-35753.jpg?w=360",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 56,
        name: "Sampoerna Kretek Gold",
        description:
          "Sampoerna Kretek Gold is a robust kretek cigarette that offers a full, flavorful taste, ideal for lovers of strong clove flavors. Known for its deep and rich taste, it's a must-try for fans of premium kretek cigarettes.",
        price: addRandomDecimal("829"),
        image: "https://img.favpng.com/11/17/4/sampoerna-kretek-a-mild-cigarette-marlboro-png-favpng-4XWDFx7TnWaTiWyzcdUg4Y0bZ.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 57,
        name: "Surya Garam",
        description:
          "A high-quality kretek cigarette from Garam, renowned for its intense and bold clove flavor. Known for its rich and sharp kretek taste, Garam Surya is perfect for those who appreciate powerful flavor.",
        price: addRandomDecimal("749"),
        discountedPrice: addRandomDecimal("349"),
        image: "https://i.pinimg.com/736x/d0/fc/19/d0fc1973c39efe1e0603012f1dd76534.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 58,
        name: "Bentoel Gold",
        description:
          "Bentoel Gold offers a balanced, smooth clove flavor from one of the most trusted names in the industry. Known for its harmonious taste, it’s a favorite for those who want a smooth and pleasant smoke.",
        price: addRandomDecimal("699"),
        image: "https://arest.web.id/sites/default/files/styles/foto_company_singlepost/public/logo-bentoel-group.jpg?itok=l_EcgjGJ",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 59,
        name: "Dji Sam Soe",
        description:
          "Dji Sam Soe is an Indonesian brand that provides a bold, spicy clove flavor, perfect for those who prefer a strong, traditional taste. Known for its fiery and intense taste, Dji Sam Soe makes an impression.",
        price: addRandomDecimal("759"),
        image: "https://i.pinimg.com/474x/61/56/36/615636cf75d04b6f1470f4eb9f7b7e18.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 60,
        name: "Kretek Wisma",
        description:
          "Wisma Kretek combines smooth clove flavor with high-quality tobacco, providing a top-tier smoking experience. Known for its smooth smoke and refined taste, Wisma Kretek is ideal for those who seek quality in every puff.",
        price: addRandomDecimal("789"),
        image: "https://img.freepik.com/premium-photo/vintage-monogram-letter-k-style-baroque_923894-35753.jpg?w=360",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
    ],
  },
  {
    type: "Ultra-Light Cigarettes",
    cigarettes: [
      {
        id: 61,
        name: "Surya Silver",
        description:
          "An ultra-light cigarette offering a smooth and mild experience, Surya Silver is known for its mild yet satisfying flavor. It’s a popular choice for those who enjoy a smooth, mild smoking experience.",
        price: addRandomDecimal("749"),
        image: "https://i.pinimg.com/736x/d0/fc/19/d0fc1973c39efe1e0603012f1dd76534.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 62,
        name: "Royal Silver",
        description:
          "Royal Silver is a lighter version of its classic line, providing a smooth yet satisfying smoke. Known for its smooth and satisfying flavor, it’s a popular choice for smokers who prefer a light, enjoyable smoke.",
        price: addRandomDecimal("699"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYC63wM5w9CNfY8lWY6RR3lXTpmnsuOGetbw&s",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 63,
        name: "Nirvana Silver",
        description:
          "Nirvana Silver is a balanced, ultra-light cigarette offering a mild, pleasant smoke experience. Known for its smooth and mild flavor, it’s ideal for smokers who enjoy a balanced and refined taste.",
        price: addRandomDecimal("689"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jejH7CgWDeiYDQne2iG1_BXCpM8k6QcDOg&s",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 64,
        name: "Gold Mill Ultra Lights",
        description:
          "Gold Mill offers a budget-friendly ultra-light cigarette with a smooth and mild taste, perfect for smokers who seek affordability and comfort.",
        price: addRandomDecimal("649"),
        image: "https://st5.depositphotos.com/79194766/68250/v/450/depositphotos_682500552-stock-illustration-cigarette-logo-template-tobacco.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 65,
        name: "Benson & Hedges Platinum",
        description:
          "Benson & Hedges Platinum offers a premium ultra-light experience, providing a refined and delicate flavor, perfect for smokers who appreciate subtlety and smoothness.",
        price: addRandomDecimal("799"),
        image: "https://socaldistrollc.com/cdn/shop/files/BHB_600x.jpg?v=1689374755",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 66,
        name: "L&M Silver Classic",
        description:
          "L&M Silver Classic is an affordable ultra-light cigarette that offers a smooth and mild smoking experience. Known for its affordable price and mild taste, it's favored by smokers who prefer comfort and ease.",
        price: addRandomDecimal("629"),
        discountedPrice: addRandomDecimal("289"),
        image: "https://icdn.bottlenose.wine/images/full/586306.jpg?fit=clip&h=400&w=400&auto=format",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 67,
        name: "Kent Silver Light",
        description:
          "Kent Silver Light is a modern ultra-light cigarette with a sleek filter design, offering a smooth experience. Known for its innovative design and smoothness, it’s a top choice for smokers seeking innovation in every puff.",
        price: addRandomDecimal("699"),
        image: "https://cigarettes.land/img/c/15.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 68,
        name: "Parliament Silver Edge",
        description:
          "Parliament Silver Edge is an ultra-light cigarette that features a unique recessed filter for a cooler, smoother smoke. It's perfect for smokers who prefer a refreshing and smooth experience with each puff.",
        price: addRandomDecimal("749"),
        discountedPrice: addRandomDecimal("399"),
        image:"https://socaldistrollc.com/cdn/shop/files/parliament_800x.jpg?v=1689372925",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 69,
        name: "Dunhill Silver Lights",
        description:
          "Dunhill Silver Lights offers a premium ultra-light experience with a refined and smooth taste. It’s perfect for those who enjoy a rich yet mild smoking experience.",
        price: addRandomDecimal("799"),
        discountedPrice: addRandomDecimal("459"),
        image: "https://i.namu.wiki/i/qDA-XwfvfaHWu0yatLQe3ZR5pdg-xGt_0DQlXflLjI4FuQvnjU6thabKJs8hSE7_6GAE9jaL-11s2fSpIWkUow.webp",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 70,
        name: "Chesterfield Silver Light",
        description:
          "Chesterfield Silver Light is an affordable ultra-light cigarette with a mild taste and smooth draw, perfect for those who prefer a light and comfortable smoke.",
        price: addRandomDecimal("639"),
        image: "https://www.bestwaywholesale.co.uk/img/products/full/upl/628673.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
  {
    type: "Flavored Cigarettes",
    cigarettes: [
      {
        id: 71,
        name: "Gold Flake Menthol",
        description:
          "Gold Flake Menthol offers a refreshing menthol flavor that provides a cool and crisp smoking experience. It’s ideal for smokers who prefer a menthol taste with a refreshing cool sensation.",
        price: addRandomDecimal("749"),
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/8787af78277615.Y3JvcCw0MDQsMzE2LDk5NSw2MDk.jpg",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 72,
        name: "Four Square Menthol",
        description:
          "Four Square Menthol combines smooth tobacco with a menthol capsule, offering a refreshing twist. A popular choice for those seeking a unique menthol experience with extra coolness.",
        price: addRandomDecimal("699"),
        image: "https://www.godfreyphillips.co.in/public/storage/images/cigrette-images/four-square-logo.png",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 73,
        name: "Newport Green",
        description:
          "Newport Green offers a strong menthol flavor for a cool, refreshing experience, providing smokers with a bold yet smooth menthol experience.",
        price: addRandomDecimal("799"),
        discountedPrice: addRandomDecimal("399"),
        image: "https://www.gasnwash.net/wp-content/uploads/2021/04/Newport.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 74,
        name: "Gold Seal Wine",
        description:
          "Gold Seal Wine combines a rich tobacco blend with a sweet wine flavor, offering a smooth and fruity experience with every puff.",
        price: addRandomDecimal("599"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNNoN1KverYGkRtSLNd-NLAU5TbPIypN82Q&s",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 75,
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
        id: 76,
        name: "Classic Clove",
        description:
          "Classic Clove offers a distinctive and aromatic clove-infused cigarette, giving smokers a unique flavor experience with every draw.",
        price: addRandomDecimal("899"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUX1elJWerOo5HYI6guzL1W98ueI3d8q4OQ&s",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 77,
        name: "Jaisalmer Menthol",
        description:
          "Jaisalmer Menthol combines refreshing menthol with the perfect balance of tobacco, creating a cool, crisp smoking experience.",
        price: addRandomDecimal("999"),
        image: "https://www.godfreyphillips.co.in/public/storage/images/international-cigrette/jaisalmer.png",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 78,
        name: "Vantage Mint",
        description:
          "Vantage Mint offers a natural tobacco experience with a refreshing mint flavor, making it a great choice for smokers who enjoy a fresh and cool sensation.",
        price: addRandomDecimal("899"),
        image: "https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/00012300000307/05f94244bcbd48b459e9bb49c9fdba68_large.png&width=512&type=webp&quality=90",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 79,
        name: "Whiff Menthol",
        description:
          "Whiff Menthol is a classic menthol cigarette offering a cool and crisp smoking experience with every puff, perfect for those who enjoy a refreshing menthol taste.",
        price: addRandomDecimal("749"),
        image: "https://whiff.fr/wp-content/themes/agencepointcom/img/logo-whiff.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 80,
        name: "Seneca Mint",
        description:
          "Seneca Mint offers a bold menthol flavor with a minty twist, providing an intense and refreshing menthol experience at an affordable price.",
        price: addRandomDecimal("649"),
        discountedPrice: addRandomDecimal("299"),
        image: "https://www.jrcigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw9e85bdb3/images/jrcigars/Seneca%20Filtered%20Cigars/SENECA%20FILTERED%20CIGARS.jpg?sw=220&sh=220&sm=fit&q=80",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
  {
    type: "Roll-Your-Own (RYO) Cigarettes",
    cigarettes: [
      {
        id: 81,
        name: "Classic Spirit Original",
        description:
          "Classic Spirit Original offers organic, additive-free tobacco for a smooth, natural rolling experience. A top choice for those who seek a more natural smoking experience.",
        price: addRandomDecimal("1199"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUX1elJWerOo5HYI6guzL1W98ueI3d8q4OQ&s",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 0, // Customer Favourite
      },
      {
        id: 82,
        name: "Red Bull Regular",
        description:
          "Red Bull Regular offers rich and smooth tobacco for an enjoyable roll-your-own experience. Known for its balanced flavor, it's favored by those who enjoy quality tobacco.",
        price: addRandomDecimal("899"),
        discountedPrice: addRandomDecimal("599"),
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1317e612055581.562569bb980eb.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 83,
        name: "Benson Gold",
        description:
          "Benson Gold offers classic rolling tobacco with a smooth and balanced flavor, providing a satisfying smoking experience. A reliable choice for RYO enthusiasts.",
        price: addRandomDecimal("999"),
        image: "https://m.media-amazon.com/images/I/416pck8G6qL._AC_UF894,1000_QL80_.jpg",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: -1, // Best Seller
      },
      {
        id: 84,
        name: "Golden Shag Blue",
        description:
          "Golden Shag Blue provides a reliable and smooth roll-your-own experience with its high-quality tobacco. It’s known for its balanced flavor and smooth smoke.",
        price: addRandomDecimal("849"),
        discountedPrice: addRandomDecimal("499"),
        image: "https://st4.depositphotos.com/4326917/24326/v/450/depositphotos_243264926-stock-illustration-smoke-icon-great-any-use.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 85,
        name: "Bali Shag Fine",
        description:
          "Bali Shag Fine delivers a smooth rolling experience with its fine cut tobacco, ideal for smokers seeking a fine and rich tobacco flavor.",
        price: addRandomDecimal("1099"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEm49aFtg3-05Tnr3IroyPIRV2JhmaXA9G7GHkzPno68emnBWMKJ4iWkZPhohpaVIMbU&usqp=CAU",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 86,
        name: "Mac Baren Sweet",
        description:
          "Mac Baren Sweet is a high-quality Virginia tobacco blend offering a sweet flavor. A popular choice for those who enjoy a milder, smoother roll-your-own experience.",
        price: addRandomDecimal("1399"),
        image: "https://yt3.googleusercontent.com/ytc/AIdro_lRHCG3sXLro1Hfm-epgU9i6thQg2e9SO1FoEOEMlf2ig=s900-c-k-c0x00ffffff-no-rj",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 87,
        name: "Pure Indian RYO",
        description:
          "Pure Indian RYO is made from 100% natural tobacco, providing a pure, additive-free smoking experience. Ideal for those who prefer a clean and natural smoke.",
        price: addRandomDecimal("999"),
        image: "https://www.dial4trade.com/uploaded_files/company_logos/logo_1055816_56f459f.jpeg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 88,
        name: "Stokkebye India Virginia",
        description:
          "Stokkebye India Virginia offers a smooth, flavorful Virginia blend for rolling, providing a full-bodied smoke with rich, satisfying flavors.",
        price: addRandomDecimal("1099"),
        discountedPrice: addRandomDecimal("799"),
        image: "https://theoldelantern.com/cdn/shop/files/Peter-Stokkebye.png?v=1723060148",
        rating: 4,
        availability: Math.floor(Math.random() * 3) - 1,
        tag: 1, // Limited Edition
      },
      {
        id: 89,
        name: "Golden Shag Original",
        description:
          "Golden Shag Original is traditional rolling tobacco that offers a rich, bold flavor, making it a top pick for smokers who enjoy a classic and full-bodied smoke.",
        price: addRandomDecimal("899"),
        image: "https://st4.depositphotos.com/4326917/24326/v/450/depositphotos_243264926-stock-illustration-smoke-icon-great-any-use.jpg",
        rating: 3.5,
        availability: Math.floor(Math.random() * 3) - 1,
      },
      {
        id: 90,
        name: "Teddy’s Fine RYO",
        description:
          "Teddy’s Fine RYO offers an affordable tobacco option with a smooth flavor profile, making it a great choice for those seeking a budget-friendly, quality smoking experience.",
        price: addRandomDecimal("799"),
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Teddy_cigarettes_logo.png",
        rating: 3,
        availability: Math.floor(Math.random() * 3) - 1,
      },
    ],
  },
  {
    type: "Luxury / Premium Cigarettes",
    cigarettes: [
      {
        id: 91,
        name: "Cohiba Behike",
        description:
          "A legendary luxury cigar brand, Cohiba Behike is the pinnacle of premium tobacco craftsmanship. Hand-rolled with the finest Cuban tobacco, it offers an unparalleled smoking experience. Known for its exclusivity, Cohiba Behike is a symbol of sophistication and refinement, catering to the most discerning smokers. Known for its luxury cigar, Cohiba Behike offers a luxury smoking experience with the finest Cuban tobacco. It's a popular choice among smokers who prefer a luxury smoking experience.",
        price: addRandomDecimal("8669"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnuox0c1n8wj-5eteN8aTq-f2FUUNMzqif1LIrBiy10oro_eubAnyGLusYOLquC22Ef0&usqp=CAU",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
        tag: 1, // Limited Edition
      },
      {
        id: 92,
        name: "Montecristo No. 2",
        description:
          "A masterpiece of Cuban cigar craftsmanship, Montecristo No. 2 is renowned for its rich, complex flavor and impeccable construction. Made with aged tobacco, it delivers a smooth and luxurious smoking experience. Known for its premium cigar, Montecristo No. 2 offers a premium smoking experience with rich, complex flavors. It's a popular choice among smokers who prefer a premium smoking experience.",
        price: addRandomDecimal("7799"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbZcUs6Blgp2TBewa3lz9qu7waPZSIK0vEFsuvH3t5DrvIqqyrKWMtY135ZZjk0YHxys&usqp=CAU",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 93,
        name: "Partagás Serie P No. 2",
        description:
          "A luxurious Cuban cigar, Partagás Serie P No. 2 is celebrated for its bold, full-bodied flavor and exquisite aroma. Crafted with precision, it offers a refined and indulgent smoking experience. Known for its luxury cigar, Partagás Serie P No. 2 offers a luxury smoking experience with bold, full-bodied flavors. It's a popular choice among smokers who prefer a luxury smoking experience.",
        price: addRandomDecimal("6999"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXZOyuRN_KKsXOLmlz5m70zBspQcx57ozRLmhAsgdYnIKn3J2iTV-wcmvRjj-zJahsDg&usqp=CAU",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 94,
        name: "Romeo y Julieta Churchill",
        description:
          "A classic Cuban cigar, Romeo y Julieta Churchill is known for its smooth, balanced flavor and elegant presentation. Made with the finest tobacco, it offers a timeless and luxurious smoking experience. Known for its premium cigar, Romeo y Julieta Churchill offers a premium smoking experience with smooth, balanced flavors. It's a popular choice among smokers who prefer a premium smoking experience.",
        price: addRandomDecimal("6499"),
        image: "https://www.holts.com/media//categoryimage//r/o/romeo-y-julieta-metal-sign.png",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 95,
        name: "H. Upmann Sir Winston",
        description:
          "A prestigious Cuban cigar, H. Upmann Sir Winston is revered for its rich, nuanced flavor and impeccable construction. Aged to perfection, it delivers a luxurious and unforgettable smoking experience. Known for its luxury cigar, H. Upmann Sir Winston offers a luxury smoking experience with rich, nuanced flavors. It's a popular choice among smokers who prefer a luxury smoking experience.",
        price: addRandomDecimal("7379"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVIWOo0MdhMK4g4F4D06i9QPba019L6geZcVniyo-UoQQv_KAGOsY44DE4jN2cg_UG0Q&usqp=CAU",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 96,
        name: "Trinidad Fundadores",
        description:
          "An exclusive Cuban cigar, Trinidad Fundadores is known for its delicate, refined flavor and exceptional craftsmanship. Reserved for the most discerning smokers, it offers a truly luxurious experience. Known for its luxury cigar, Trinidad Fundadores offers a luxury smoking experience with delicate, refined flavors. It's a popular choice among smokers who prefer a luxury smoking experience.",
        price: addRandomDecimal("8249"),
        image: "https://sa.egmcigars.com/cdn/shop/collections/Trinidad_1.jpg?v=1552924416",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
        tag: 1, // Limited Edition
      },
      {
        id: 97,
        name: "Bolívar Belicosos Finos",
        description:
          "A bold and luxurious Cuban cigar, Bolívar Belicosos Finos is celebrated for its intense, full-bodied flavor and impeccable construction. Known for its premium cigar, Bolívar Belicosos Finos offers a premium smoking experience with intense, full-bodied flavors. It's a popular choice among smokers who prefer a premium smoking experience.",
        price: addRandomDecimal("6079"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgQraeSIj3JbVjgakUhBO_DFq0XWPNq2w7w&s",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 98,
        name: "Vegas Robaina Famosos",
        description:
          "A luxurious Cuban cigar, Vegas Robaina Famosos is known for its rich, earthy flavor and exceptional craftsmanship. Made with the finest tobacco, it offers a refined and indulgent smoking experience. Known for its luxury cigar, Vegas Robaina Famosos offers a luxury smoking experience with rich, earthy flavors. It's a popular choice among smokers who prefer a luxury smoking experience.",
        price: addRandomDecimal("6949"),
        image: "https://sa.egmcigars.com/cdn/shop/collections/Vegas_Robaina.jpg?v=1579104743",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 99,
        name: "Quai d'Orsay Coronas Claro",
        description:
          "A refined and elegant Cuban cigar, Quai d'Orsay Coronas Claro is celebrated for its mild, smooth flavor and sophisticated aroma. Known for its premium cigar, Quai d'Orsay Coronas Claro offers a premium smoking experience with mild, smooth flavors. It's a popular choice among smokers who prefer a premium smoking experience.",
        price: addRandomDecimal("5639"),
        image: "https://pim.cigarpassion.com/images/Logo-Quai-Dorsay-new-06-04-2022-1649247563.jpg",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 100,
        name: "El Rey del Mundo Choix Supreme",
        description:
          "A luxurious Cuban cigar, El Rey del Mundo Choix Supreme is known for its smooth, creamy flavor and impeccable construction. Known for its luxury cigar, El Rey del Mundo Choix Supreme offers a luxury smoking experience with smooth, creamy flavors. It's a popular choice among smokers who prefer a luxury smoking experience.",
        price: addRandomDecimal("6499"),
        image: "https://upload.wikimedia.org/wikipedia/en/4/4f/El-Rey-Del-Mundo.jpg",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
    ],
  },
  {
    type: "Ultra-Luxury / Premium Cigarettes",
    cigarettes: [
      {
        id: 101,
        name: "The Chancellor by Nat Sherman",
        description:
          "A pinnacle of luxury, The Chancellor is Nat Sherman's most exclusive cigarette, crafted with the finest tobacco and gold leaf accents. Known for its ultra-luxury cigarette, The Chancellor offers an unparalleled smoking experience with a smooth, rich flavor. It's a popular choice among elite smokers who demand the absolute best.",
        price: addRandomDecimal("43349"),
        image: "https://upload.wikimedia.org/wikipedia/en/5/58/Nat_Sherman_logo.png",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
        tag: 1, // Limited Edition
      },
      {
        id: 102,
        name: "Sobranie Cocktail",
        description:
          "A legendary luxury cigarette, Sobranie Cocktail is famous for its colorful, hand-rolled design and exquisite flavor. Known for its ultra-luxury cigarette, Sobranie Cocktail offers a unique and luxurious smoking experience. It's a popular choice among collectors and connoisseurs.",
        price: addRandomDecimal("34679"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgAGK0Z3Z1UUlP-C6OP-pn3pw4HoV6NaC0-1UNjcRww_GM03RraVhA8GBLtWZD41DfGw&usqp=CAU",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
        tag: 1, // Limited Edition
      },
      {
        id: 103,
        name: "Dunhill Diamond Crown",
        description:
          "The epitome of luxury, Dunhill Diamond Crown is crafted with rare, aged tobacco and adorned with diamond-like embellishments. Known for its ultra-luxury cigarette, Dunhill Diamond Crown offers a refined and opulent smoking experience. It's a popular choice among the elite.",
        price: addRandomDecimal("30349"),
        image: "https://i.namu.wiki/i/qDA-XwfvfaHWu0yatLQe3ZR5pdg-xGt_0DQlXflLjI4FuQvnjU6thabKJs8hSE7_6GAE9jaL-11s2fSpIWkUow.webp",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 104,
        name: "Davidoff Royal Release",
        description:
          "A masterpiece of luxury, Davidoff Royal Release is made with the rarest tobacco leaves and packaged in a gold-embossed case. Known for its ultra-luxury cigarette, Davidoff Royal Release offers a regal smoking experience. It's a popular choice among royalty and high-net-worth individuals.",
        price: addRandomDecimal("39049"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5EbeTpeJ9mh8o9OhRIUfHSIvvcJMYBep8g&s",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
        tag: 1, // Limited Edition
      },
      {
        id: 105,
        name: "Benson & Hedges Black Ambition",
        description:
          "A luxurious cigarette, Benson & Hedges Black Ambition is crafted with premium tobacco and features a sleek, black design. Known for its ultra-luxury cigarette, Benson & Hedges Black Ambition offers a bold and sophisticated smoking experience. It's a popular choice among luxury enthusiasts.",
        price: addRandomDecimal("25999"),
        image: "https://socaldistrollc.com/cdn/shop/files/BHB_600x.jpg?v=1689374755",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 106,
        name: "Gitanes Édition Limitée",
        description:
          "A rare and luxurious cigarette, Gitanes Édition Limitée is made with a unique blend of tobacco and presented in an elegant, limited-edition case. Known for its ultra-luxury cigarette, Gitanes Édition Limitée offers a refined and exclusive smoking experience. It's a popular choice among collectors.",
        price: addRandomDecimal("32949"),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFuvGiHtkOsCY2VVknV7Q4ThubJbgqbqntw&s",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
        tag: 1, // Limited Edition
      },
      {
        id: 107,
        name: "Parliament Luxe Reserve",
        description:
          "A luxurious cigarette, Parliament Luxe Reserve is crafted with the finest tobacco and features a unique recessed filter. Known for its ultra-luxury cigarette, Parliament Luxe Reserve offers a smooth and opulent smoking experience. It's a popular choice among luxury smokers.",
        price: addRandomDecimal("28599"),
        image:"https://socaldistrollc.com/cdn/shop/files/parliament_800x.jpg?v=1689372925",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 108,
        name: "Chesterfield Heritage Collection",
        description:
          "A luxurious cigarette, Chesterfield Heritage Collection is made with rare, aged tobacco and presented in a vintage-inspired case. Known for its ultra-luxury cigarette, Chesterfield Heritage Collection offers a nostalgic and refined smoking experience. It's a popular choice among collectors.",
        price: addRandomDecimal("31199"),
        image: "https://www.bestwaywholesale.co.uk/img/products/full/upl/628673.jpg",
        rating: 4.5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 109,
        name: "Lucky Strike Luxe Gold",
        description:
          "A luxurious cigarette, Lucky Strike Luxe Gold is crafted with premium tobacco and features a gold-tipped design. Known for its ultra-luxury cigarette, Lucky Strike Luxe Gold offers a smooth and sophisticated smoking experience. It's a popular choice among luxury enthusiasts.",
        price: addRandomDecimal("27749"),
        image: "https://img.favpng.com/23/2/1/lucky-strike-cigarette-logo-british-american-tobacco-png-favpng-5gndpYz2avR5R7HaEphT2wHuh.jpg",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
      },
      {
        id: 110,
        name: "Nat Sherman Black & Gold Reserve",
        description:
          "A luxurious cigarette, Nat Sherman Black & Gold Reserve is made with the finest tobacco and presented in a gold-embossed case. Known for its ultra-luxury cigarette, Nat Sherman Black & Gold Reserve offers a rich and opulent smoking experience. It's a popular choice among elite smokers.",
        price: addRandomDecimal("37279"),
        image: "https://upload.wikimedia.org/wikipedia/en/5/58/Nat_Sherman_logo.png",
        rating: 5,
        availability: Math.floor(Math.random() * 3) - 1, // -1: Out of Stock, 0: Low Stock, 1: In Stock
        tag: 1, // Limited Edition
      },
    ],
  },
];

export default cigaretteData;

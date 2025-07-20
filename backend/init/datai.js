const products = [
  {
    id: "smart1",
    category: "Smartphones",
    url: "https://m.media-amazon.com/images/I/81WimZLWH1L._AC_UL320_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/81WimZLWH1L._AC_UL320_.jpg",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Redmi 12 5G (Jade Black, 6GB RAM, 128GB Storage)",
    },
    price: {
      mrp: 15999,
      cost: 12999,
      discount: "18%",
    },
    quantity: 1,
    description: "Snapdragon 4 Gen 2, 120Hz display, 5000mAh battery.",
    discount: "Upto ₹3000 Off",
    tagline: "Bestseller",
  },
  {
    id: "smart2",
    category: "Smartphones",
    url: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
    title: {
      shortTitle: "Smartphones",
      longTitle: "iQOO Z9 5G (Brushed Green, 8GB RAM, 128GB Storage)",
    },
    price: {
      mrp: 19999,
      cost: 16999,
      discount: "15%",
    },
    quantity: 1,
    description: "AMOLED display, Dimensity 7200, 44W fast charging.",
    discount: "Exchange Offer",
    tagline: "Top Rated",
  },
  {
    id: "smart3",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/b/x/galaxy-a15-5g-sm-a156ezknins-samsung-original-imagwkgyvgfsza34.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/i/c/galaxy-a15-5g-sm-a156elbnins-samsung-original-imagwkgykezdha6z.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Samsung Galaxy A15 5G (Blue, 6GB, 128GB Storage)",
    },
    price: {
      mrp: 18999,
      cost: 15499,
      discount: "18%",
    },
    quantity: 1,
    description:
      "Super AMOLED 90Hz screen, 5000mAh battery, MediaTek Dimensity.",
    discount: "Limited Offer",
    tagline: "Samsung Smart Deal",
  },
  {
    id: "smart4",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/l/g/n65-5g-rmx3997-realme-original-imahffnqhzxzc6uz.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/l/g/n65-5g-rmx3997-realme-original-imahffnqhzxzc6uz.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Realme Narzo 60X 5G (Stellar Green, 6GB, 128GB)",
    },
    price: {
      mrp: 14999,
      cost: 11999,
      discount: "20%",
    },
    quantity: 1,
    description: "64MP AI camera, Dimensity 6100+, 33W charging.",
    discount: "Bank Offers Available",
    tagline: "Budget 5G",
  },
  {
    id: "smart5",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/o/z/nord-ce-3-lite-5g-ce2099-oneplus-original-imagzj3wqxzgquah.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/o/z/nord-ce-3-lite-5g-ce2099-oneplus-original-imagzj3wqxzgquah.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB, 128GB)",
    },
    price: {
      mrp: 21999,
      cost: 17999,
      discount: "18%",
    },
    quantity: 1,
    description: "Snapdragon 695, 108MP camera, 67W SUPERVOOC.",
    discount: "Limited Time Deal",
    tagline: "Top Seller",
  },
  {
    id: "smart6",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/p/l/g73-5g-paux0024in-motorola-original-imagngjhg3bjmazu.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/p/l/g73-5g-paux0024in-motorola-original-imagngjhg3bjmazu.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Motorola G73 5G (Lucent White, 8GB, 128GB)",
    },
    price: {
      mrp: 18999,
      cost: 14499,
      discount: "23%",
    },
    quantity: 1,
    description: "Dimensity 930, Stereo speakers, Android 13.",
    discount: "No Cost EMI",
    tagline: "Stock Clearance",
  },
  {
    id: "smart7",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/j/a/blaze-3-5g-blaze-3-5g-lava-original-imah5z48tv7qypms.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/j/a/blaze-3-5g-blaze-3-5g-lava-original-imah5z48tv7qypms.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Lava Blaze 5G (Glass Blue, 6GB, 128GB)",
    },
    price: {
      mrp: 13999,
      cost: 10999,
      discount: "21%",
    },
    quantity: 1,
    description: "India's most affordable 5G with clean Android UI.",
    discount: "Steal Deal",
    tagline: "Made in India",
  },
  {
    id: "smart8",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/7/r/-original-imah4ncffjfgg467.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/7/r/-original-imah4ncffjfgg467.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "POCO X6 Neo 5G (Astral Black, 8GB RAM, 128GB Storage)",
    },
    price: {
      mrp: 18999,
      cost: 15499,
      discount: "18%",
    },
    quantity: 1,
    description: "MediaTek Dimensity 6100+, AMOLED display, 5000mAh battery.",
    discount: "Exchange Bonus",
    tagline: "New Launch",
  },
  {
    id: "smart9",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/7/j/-original-imagmhszyfsbqfth.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/7/j/-original-imagmhszyfsbqfth.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Infinix Zero 5G 2023 (Pearl White, 8GB, 128GB)",
    },
    price: {
      mrp: 15999,
      cost: 11999,
      discount: "25%",
    },
    quantity: 1,
    description: "Dimensity 920, 5000mAh battery, 33W fast charge.",
    discount: "Hot Deal",
    tagline: "Value Choice",
  },
  {
    id: "smart10",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Vivo T2 5G (Velocity Wave, 6GB, 128GB)",
    },
    price: {
      mrp: 18990,
      cost: 15490,
      discount: "18%",
    },
    quantity: 1,
    description: "Snapdragon 695, AMOLED screen, 64MP OIS camera.",
    discount: "Limited Offer",
    tagline: "Sleek Performer",
  },
  {
    id: "smart11",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/n/r/narzo-n53-rmx3761-realme-original-imagpygzxcuysz9k.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/n/r/narzo-n53-rmx3761-realme-original-imagpygzxcuysz9k.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Realme Narzo N53 (Feather Black, 8GB, 128GB)",
    },
    price: {
      mrp: 13999,
      cost: 10499,
      discount: "25%",
    },
    quantity: 1,
    description: "50MP AI camera, 33W fast charge, slim design.",
    discount: "Deal of the Day",
    tagline: "Slimmest Realme",
  },
  {
    id: "smart12",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/7/0/s23-s23-itel-original-imagv5j5bmhhmccp.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/7/0/s23-s23-itel-original-imagv5j5bmhhmccp.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Itel S23+ (Lake Cyan, 8GB, 256GB)",
    },
    price: {
      mrp: 10999,
      cost: 9499,
      discount: "14%",
    },
    quantity: 1,
    description: "Curved AMOLED, in-display fingerprint, Unisoc T616.",
    discount: "Online Exclusive",
    tagline: "Curved Display Budget",
  },
  {
    id: "smart13",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/ku04o7k0/mobile/v/b/n/in-note-2-e7446-micromax-original-imag787prmccfmfh.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/ku04o7k0/mobile/v/b/n/in-note-2-e7446-micromax-original-imag787prmccfmfh.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Micromax IN Note 2 (Black, 6GB, 64GB)",
    },
    price: {
      mrp: 13999,
      cost: 10999,
      discount: "21%",
    },
    quantity: 1,
    description: "AMOLED display, Helio G95, 30W fast charge.",
    discount: "Festive Deal",
    tagline: "Made in India",
  },
  {
    id: "smart14",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/l/j/-original-imagzrfwkeu2zazh.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/l/j/-original-imagzrfwkeu2zazh.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Redmi Note 13 5G (Arctic White, 6GB, 128GB)",
    },
    price: {
      mrp: 17999,
      cost: 14999,
      discount: "17%",
    },
    quantity: 1,
    description: "120Hz AMOLED, Dimensity 6100+, 5000mAh battery.",
    discount: "Launch Offer",
    tagline: "Fan Favorite",
  },
  {
    id: "smart15",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/cases-covers/back-cover/y/s/r/zap-space-sa145g-zapcase-original-imah5q4k2jdnxrsm.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/cases-covers/back-cover/y/s/r/zap-space-sa145g-zapcase-original-imah5q4k2jdnxrsm.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB)",
    },
    price: {
      mrp: 14990,
      cost: 11990,
      discount: "20%",
    },
    quantity: 1,
    description: "Exynos 1330, 6000mAh battery, Android 13.",
    discount: "EMI Available",
    tagline: "Big Battery Beast",
  },
  {
    id: "smart16",
    category: "Smartphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/g/g/w/spark-20c-bg7-tecno-original-imah2fdyqss8ynhq.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/g/g/w/spark-20c-bg7-tecno-original-imah2fdyqss8ynhq.jpeg?q=70",
    title: {
      shortTitle: "Smartphones",
      longTitle: "Tecno Spark 20C (Gravity Black, 8GB RAM, 128GB Storage)",
    },
    price: {
      mrp: 10999,
      cost: 8999,
      discount: "18%",
    },
    quantity: 1,
    description: "Helio G36, 90Hz display, stereo speakers.",
    discount: "Limited Stock",
    tagline: "Feature-Packed Budget",
  },
  {
    id: "laptop1",
    category: "Laptops",
    url: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UL320_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UL320_.jpg",
    title: {
      shortTitle: "Laptops",
      longTitle:
        "HP 15s, Intel Core i3 12th Gen, 8GB RAM, 512GB SSD, Windows 11",
    },
    price: {
      mrp: 45999,
      cost: 37990,
      discount: "17%",
    },
    quantity: 1,
    description: "Intel i3-1215U, FHD screen, fast boot SSD, built-in Alexa.",
    discount: "Exchange Bonus",
    tagline: "Everyday Laptop",
  },
  {
    id: "laptop2",
    category: "Laptops",
    url: "https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UL320_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UL320_.jpg",
    title: {
      shortTitle: "Laptops",
      longTitle: "ASUS Vivobook 15, Intel i3 11th Gen, 8GB RAM, 512GB SSD",
    },
    price: {
      mrp: 42999,
      cost: 32990,
      discount: "23%",
    },
    quantity: 1,
    description: "Stylish, lightweight, perfect for students & work.",
    discount: "Extra ₹500 Off",
    tagline: "Campus Ready",
  },
  {
    id: "laptop3",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/0/a/inspiron-3525-thin-and-light-laptop-dell-original-imagtyx3wyh2mgzs.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/0/a/inspiron-3525-thin-and-light-laptop-dell-original-imagtyx3wyh2mgzs.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Dell Inspiron 15, Ryzen 5, 8GB RAM, 512GB SSD, Windows 11",
    },
    price: {
      mrp: 52990,
      cost: 40990,
      discount: "22%",
    },
    quantity: 1,
    description: "Ryzen 5 5500U, 15.6” FHD Display, built for multitasking.",
    discount: "Flat ₹12000 Off",
    tagline: "Top Pick",
  },
  {
    id: "laptop4",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/s/e/-original-imahcd9jz6sk6rd8.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/s/e/-original-imahcd9jz6sk6rd8.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Lenovo IdeaPad Slim 3, Intel Core i5 12th Gen, 8GB RAM",
    },
    price: {
      mrp: 58990,
      cost: 47990,
      discount: "18%",
    },
    quantity: 1,
    description: "FHD IPS panel, MS Office 2021, light & travel-friendly.",
    discount: "No Cost EMI",
    tagline: "Work Anywhere",
  },
  {
    id: "laptop5",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/1/z/w/-original-imahd7zzfcv9vvje.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/1/z/w/-original-imahd7zzfcv9vvje.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Acer Aspire Lite AMD Ryzen 5 5500U, 16GB RAM, 512GB SSD",
    },
    price: {
      mrp: 45990,
      cost: 34990,
      discount: "24%",
    },
    quantity: 1,
    description: "Powerful multitasking laptop with long battery backup.",
    discount: "Mega Saver",
    tagline: "Affordable Power",
  },
  {
    id: "laptop6",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/w/i/u/-original-imahcd9mqsw6rebt.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/w/i/u/-original-imahcd9mqsw6rebt.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Infinix INBook Y1 Plus, Intel Core i3, 8GB RAM, 512GB SSD",
    },
    price: {
      mrp: 34999,
      cost: 28990,
      discount: "17%",
    },
    quantity: 1,
    description: "15.6-inch FHD, Type-C charging, sleek aluminum body.",
    discount: "Student Offer",
    tagline: "Best Under 30K",
  },
  {
    id: "laptop7",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/w/p/-original-imahcd9jhjyfutep.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/w/p/-original-imahcd9jhjyfutep.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "MSI Modern 14, Intel i5 11th Gen, 16GB RAM, 512GB SSD",
    },
    price: {
      mrp: 59990,
      cost: 49990,
      discount: "17%",
    },
    quantity: 1,
    description: "Ultra-lightweight with backlit keyboard, Windows 11 Home.",
    discount: "Work + Play",
    tagline: "Pro Creators",
  },
  {
    id: "laptop8",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/m/b/-original-imahcd9qdhp7zxhg.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/m/b/-original-imahcd9qdhp7zxhg.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "HP Pavilion 14, Ryzen 5 5625U, 16GB RAM, 512GB SSD, Win 11",
    },
    price: {
      mrp: 65999,
      cost: 54999,
      discount: "17%",
    },
    quantity: 1,
    description:
      "Lightweight laptop with Alexa built-in and FHD micro-edge display.",
    discount: "Exchange Offer",
    tagline: "Performance Pick",
  },
  {
    id: "laptop9",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/l0vbukw0/computer/z/o/e/-original-imagckcfz6jgjn3z.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/l0vbukw0/computer/z/o/e/-original-imagckcfz6jgjn3z.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle:
        "ASUS ROG Strix G15, AMD Ryzen 7, 16GB RAM, 512GB SSD, RTX 3050",
    },
    price: {
      mrp: 84990,
      cost: 72990,
      discount: "14%",
    },
    quantity: 1,
    description: "Gaming powerhouse with 144Hz display, RGB keyboard.",
    discount: "Gaming Fest",
    tagline: "Pro Gamer's Choice",
  },
  {
    id: "laptop10",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Apple MacBook Air M1, 8GB RAM, 256GB SSD, macOS Big Sur",
    },
    price: {
      mrp: 99900,
      cost: 82990,
      discount: "17%",
    },
    quantity: 1,
    description: "Silent, fast, and long-lasting performance with M1 chip.",
    discount: "No Cost EMI",
    tagline: "Apple Bestseller",
  },
  {
    id: "laptop11",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/u/o/y/-original-imahe5ruqkzt398t.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/u/o/y/-original-imahe5ruqkzt398t.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Lenovo V15 G3, AMD Ryzen 5, 8GB RAM, 512GB SSD, Win 11 Pro",
    },
    price: {
      mrp: 48990,
      cost: 39990,
      discount: "18%",
    },
    quantity: 1,
    description: "Business-ready laptop with full HD anti-glare display.",
    discount: "Business Offer",
    tagline: "Reliable Performer",
  },
  {
    id: "laptop12",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/k/y/k/-original-imahcd9ghnuhyzzd.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/k/y/k/-original-imahcd9ghnuhyzzd.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Dell Vostro 14, Intel i5 12th Gen, 8GB RAM, 512GB SSD",
    },
    price: {
      mrp: 60990,
      cost: 49990,
      discount: "18%",
    },
    quantity: 1,
    description: "Compact and powerful laptop with fingerprint reader.",
    discount: "Instant Bank Discount",
    tagline: "Office Essential",
  },
  {
    id: "laptop13",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/a/-original-imahcd9hd8sfkypj.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/a/-original-imahcd9hd8sfkypj.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Acer Swift 3 OLED, Intel Evo i5, 16GB RAM, 512GB SSD",
    },
    price: {
      mrp: 79990,
      cost: 66990,
      discount: "16%",
    },
    quantity: 1,
    description: "Premium OLED display, backlit keyboard, lightweight design.",
    discount: "Student Discount",
    tagline: "Creator’s Choice",
  },
  {
    id: "laptop14",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/k55n0y80/computer/u/v/6/asus-na-gaming-laptop-original-imafnf96vnrexbnd.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/k55n0y80/computer/u/v/6/asus-na-gaming-laptop-original-imafnf96vnrexbnd.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Realme Book Slim, Intel i3 11th Gen, 8GB RAM, 256GB SSD",
    },
    price: {
      mrp: 44999,
      cost: 36999,
      discount: "18%",
    },
    quantity: 1,
    description: "2K display, fast charge, metal body under 1.4kg.",
    discount: "Back to School",
    tagline: "Sleek & Smart",
  },
  {
    id: "laptop15",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/f/e/corebook-x-pro-laptop-chuwi-original-imah4gr9vag3hpsy.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/f/e/corebook-x-pro-laptop-chuwi-original-imah4gr9vag3hpsy.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Honor MagicBook X16, Intel i5 12th Gen, 16GB RAM, 512GB SSD",
    },
    price: {
      mrp: 59999,
      cost: 46999,
      discount: "22%",
    },
    quantity: 1,
    description: "Fingerprint login, type-C fast charging, eye comfort screen.",
    discount: "Special Offer",
    tagline: "Business Class",
  },
  {
    id: "laptop16",
    category: "Laptops",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/m/f/-original-imahcd99xa2f9pqx.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/m/f/-original-imahcd99xa2f9pqx.jpeg?q=70",
    title: {
      shortTitle: "Laptops",
      longTitle: "Samsung Galaxy Book2, Intel i5 12th Gen, 8GB RAM, 512GB SSD",
    },
    price: {
      mrp: 69990,
      cost: 58990,
      discount: "16%",
    },
    quantity: 1,
    description: "Light, slim, with Intel Iris Xe Graphics and Wi-Fi 6.",
    discount: "Festival Offer",
    tagline: "Portable Performer",
  },
  {
    id: "watch1",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/k/r/z/-original-imahchsyygjfgfpe.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/k/r/z/-original-imahchsyygjfgfpe.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'Noise ColorFit Pulse 2 Max 1.85" Display, Bluetooth Calling',
    },
    price: {
      mrp: 4999,
      cost: 1599,
      discount: "68%",
    },
    quantity: 1,
    description:
      "HD display, 100+ sports modes, SpO2, heart rate, IP68 rating.",
    discount: "Flash Sale",
    tagline: "Best Under ₹2000",
  },
  {
    id: "watch2",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/t/y/-original-imahdugcuygyyhqf.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/t/y/-original-imahdugcuygyyhqf.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'boAt Wave Call 2 with 1.83" HD Display, Bluetooth Calling',
    },
    price: {
      mrp: 6990,
      cost: 1799,
      discount: "74%",
    },
    quantity: 1,
    description:
      "Built-in mic & speaker, 700+ watch faces, IP68 water resistance.",
    discount: "Deal of the Day",
    tagline: "Top Seller",
  },
  {
    id: "watch3",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/g/r/-original-imahyz5xakhgchhn.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/g/r/-original-imahyz5xakhgchhn.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'Fire-Boltt Ninja Call Pro Plus 1.83", BT Calling, 100+ Modes',
    },
    price: {
      mrp: 7999,
      cost: 1899,
      discount: "76%",
    },
    quantity: 1,
    description: "AI voice assistant, health monitor, 1.83-inch screen.",
    discount: "Huge Discount",
    tagline: "Hot Deal",
  },
  {
    id: "watch4",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/a/e/-original-imah4nbwu6xapqdx.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/a/e/-original-imah4nbwu6xapqdx.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'Fastrack Revoltt FS1 Pro 1.96" AMOLED, Fast Charging',
    },
    price: {
      mrp: 5995,
      cost: 2995,
      discount: "50%",
    },
    quantity: 1,
    description: "AMOLED display, single sync BT calling, 2.5D curved glass.",
    discount: "Today Only",
    tagline: "Fashion + Tech",
  },
  {
    id: "watch5",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/f/y/-original-imagyxv36cgzuhur.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/f/y/-original-imagyxv36cgzuhur.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'Fire-Boltt Visionary AMOLED 1.78", Always On Display',
    },
    price: {
      mrp: 10999,
      cost: 2999,
      discount: "72%",
    },
    quantity: 1,
    description:
      "AMOLED display, Bluetooth calling, metal body, voice assistant.",
    discount: "Super Deal",
    tagline: "Premium Design",
  },
  {
    id: "watch6",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/4/p/-original-imah4fkrkdk45cfj.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/4/p/-original-imah4fkrkdk45cfj.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'NoiseFit Halo 1.43" AMOLED with BT Calling, Metallic Build',
    },
    price: {
      mrp: 5999,
      cost: 3499,
      discount: "42%",
    },
    quantity: 1,
    description: "AMOLED, 500 NITS brightness, premium leather strap design.",
    discount: "Steal Price",
    tagline: "Executive Choice",
  },
  {
    id: "watch7",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smart-watch-band-strap/l/p/8/watch-strap-stainless-steel-metal-for-universal-20mm-size-original-imah3gge3vdvphje.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smart-watch-band-strap/l/p/8/watch-strap-stainless-steel-metal-for-universal-20mm-size-original-imah3gge3vdvphje.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Fire-Boltt Phoenix Ultra Luxury Stainless Steel Strap Watch",
    },
    price: {
      mrp: 4999,
      cost: 2299,
      discount: "54%",
    },
    quantity: 1,
    description:
      "Stainless steel strap, BT calling, heart rate & SpO2 monitoring.",
    discount: "Limited Stock",
    tagline: "Luxury Look",
  },
  {
    id: "watch8",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/8/t/s/-original-imah27shjsr6fy99.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/8/t/s/-original-imah27shjsr6fy99.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'boAt Ultima Call Max 2.01" HD Display, Bluetooth Calling',
    },
    price: {
      mrp: 6499,
      cost: 1999,
      discount: "69%",
    },
    quantity: 1,
    description: "2.01-inch large HD display, 700+ watch faces, IP68.",
    discount: "Big Screen Offer",
    tagline: "Max View Experience",
  },
  {
    id: "watch9",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/i/j/x/-original-imagxp8ufdgkjayt.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/i/j/x/-original-imagxp8ufdgkjayt.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "NoiseFit Twist Round Dial with BT Calling, Metallic Finish",
    },
    price: {
      mrp: 5999,
      cost: 2199,
      discount: "63%",
    },
    quantity: 1,
    description: "Classic round dial, 1.38'' TFT, 100+ cloud faces.",
    discount: "Classic Deal",
    tagline: "Retro Meets Smart",
  },
  {
    id: "watch10",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'Fastrack Limitless FS1, 1.95" UltraVU Display, BT Calling',
    },
    price: {
      mrp: 7995,
      cost: 3499,
      discount: "56%",
    },
    quantity: 1,
    description:
      "SingleSync BT calling, AI voice assistant, Upto 7 days battery.",
    discount: "Weekend Steal",
    tagline: "Bold & Limitless",
  },
  {
    id: "watch11",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/n/s/45-72-wrb-sw-colorfiticon2-2025-std-blk-blk-android-ios-noise-original-imahe6dtnnad9zph.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/n/s/45-72-wrb-sw-colorfiticon2-2025-std-blk-blk-android-ios-noise-original-imahe6dtnnad9zph.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'Amazfit Bip 3, 1.69" Color Display, 60+ Sports Modes',
    },
    price: {
      mrp: 4999,
      cost: 2999,
      discount: "40%",
    },
    quantity: 1,
    description: "SpO2, heart rate monitor, 5 ATM water resistance.",
    discount: "Fitness First",
    tagline: "Trusted Global Brand",
  },
  {
    id: "watch12",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/i/j/51-05-pfb212-android-ios-pebble-yes-original-imahctuvkkhyjhb3.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/i/j/51-05-pfb212-android-ios-pebble-yes-original-imahctuvkkhyjhb3.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: 'Pebble Cosmos Endure 1.46" AMOLED Always-On Display',
    },
    price: {
      mrp: 7999,
      cost: 3999,
      discount: "50%",
    },
    quantity: 1,
    description:
      "Military-grade durability, 100+ watch faces, voice assistant.",
    discount: "Endurance Deal",
    tagline: "Built to Last",
  },
  {
    id: "watch13",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/screen-guard/impossible-screen-guard/r/f/4/a-ut1-w04479-khwabeeda-original-imagr84fjytuwhzh.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/screen-guard/impossible-screen-guard/r/f/4/a-ut1-w04479-khwabeeda-original-imagr84fjytuwhzh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Crossbeats Ignite S5, 1.96” AMOLED, Wireless Charging",
    },
    price: {
      mrp: 8999,
      cost: 4499,
      discount: "50%",
    },
    quantity: 1,
    description: "Premium smartwatch with BT calling and always-on display.",
    discount: "Luxury Flash",
    tagline: "Wireless Wonder",
  },
  {
    id: "watch14",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/e/e/j/-original-imah759hywsyd834.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/e/e/j/-original-imah759hywsyd834.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Fire-Boltt Phoenix AMOLED Luxe, BT Calling, Metallic Strap",
    },
    price: {
      mrp: 9999,
      cost: 3999,
      discount: "60%",
    },
    quantity: 1,
    description: "AMOLED Luxe display, 120+ sports modes, stainless finish.",
    discount: "Stylish Steal",
    tagline: "Luxe + Smart",
  },
  {
    id: "watch15",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/x/9/4/-original-imagtdqkhz3xdkdt.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/x/9/4/-original-imagtdqkhz3xdkdt.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "NoiseFit Crew Pro with 1.4” AMOLED & Always-On Display",
    },
    price: {
      mrp: 7499,
      cost: 3699,
      discount: "50%",
    },
    quantity: 1,
    description: "BT calling, rugged body, SpO2 & sleep monitor.",
    discount: "Fitness Fest",
    tagline: "Bold & Durable",
  },
  {
    id: "watch16",
    category: "Smart Watches",
    url: "https://rukminim2.flixcart.com/image/612/612/kxrvi4w0/smartwatch/k/w/i/4-4-android-zeb-fit5220ch-zebronics-no-original-imaga5g7gyhtjcyy.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/kxrvi4w0/smartwatch/k/w/i/4-4-android-zeb-fit5220ch-zebronics-no-original-imaga5g7gyhtjcyy.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Zebronics Zeb-Fit7220CH, 1.75” HD, IP67, BT Calling",
    },
    price: {
      mrp: 5999,
      cost: 2599,
      discount: "57%",
    },
    quantity: 1,
    description: "100+ sports modes, IP67, heart rate monitor.",
    discount: "Bumper Deal",
    tagline: "Feature Packed",
  },
  {
    id: "homekitchen1",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/z/j/p/hot-hot-pigeon-original-imahcmdypbguffma.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/z/j/p/hot-hot-pigeon-original-imahcmdypbguffma.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Pigeon Favourite Electric Kettle (1.5 L, Silver, Black)",
    },
    price: {
      mrp: 1195,
      cost: 625,
      discount: "47%",
    },
    quantity: 1,
    description: "Boil water for your morning tea or coffee with this kettle.",
    discount: "Extra 10% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "homekitchen2",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/fan/p/w/4/-original-imagpw6erdbe8tep.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/fan/p/w/4/-original-imagpw6erdbe8tep.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Crompton Greaves WindPro 1200-Watt Fan Heater",
    },
    price: {
      mrp: 2899,
      cost: 1649,
      discount: "43%",
    },
    quantity: 1,
    description: "Heats up your room instantly during the winter season.",
    discount: "Mega Discount",
    tagline: "Warm & Cozy",
  },
  {
    id: "homekitchen3",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/cookware-set/b/x/m/1-3-piece-byk-prestige-original-imah9qgahgthhqbr.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/cookware-set/b/x/m/1-3-piece-byk-prestige-original-imah9qgahgthhqbr.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Prestige Omega Deluxe Granite Nonstick Cookware Set",
    },
    price: {
      mrp: 2999,
      cost: 1849,
      discount: "38%",
    },
    quantity: 1,
    description: "Scratch-resistant non-stick coating for easy cooking.",
    discount: "From ₹999",
    tagline: "Kitchen Essentials",
  },
  {
    id: "homekitchen4",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-blender/f/l/l/kent-16050-hand-blender-16050-kent-original-imah5ur3xw3ghdmk.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-blender/f/l/l/kent-16050-hand-blender-16050-kent-original-imah5ur3xw3ghdmk.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Philips Daily Collection 700W Hand Blender",
    },
    price: {
      mrp: 1995,
      cost: 1099,
      discount: "45%",
    },
    quantity: 1,
    description: "Blend your smoothies, soups, or sauces with ease.",
    discount: "Huge Discount",
    tagline: "Smooth Blending",
  },
  {
    id: "homekitchen5",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/pressure-cooker/m/n/d/yes-1-pearl-greenchef-original-imah5eznstkvdxhc.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pressure-cooker/m/n/d/yes-1-pearl-greenchef-original-imah5eznstkvdxhc.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Kent 16010 Electric Pressure Cooker, 5L",
    },
    price: {
      mrp: 5999,
      cost: 3999,
      discount: "33%",
    },
    quantity: 1,
    description:
      "Cook food in a fraction of the time with advanced technology.",
    discount: "Best Deal",
    tagline: "Smart Cooking",
  },
  {
    id: "homekitchen6",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/312/312/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Bajaj 1000W 2L OTG (Oven, Toaster, Griller)",
    },
    price: {
      mrp: 4995,
      cost: 2999,
      discount: "40%",
    },
    quantity: 1,
    description: "Bake, grill, and toast with this versatile OTG oven.",
    discount: "Limited Offer",
    tagline: "Baking Made Easy",
  },
  {
    id: "homekitchen7",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/jdq9rbk0/cookware-set/x/d/k/3168430248892-set-c618s584-tefal-original-imaf2khhs7qgt569.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/jdq9rbk0/cookware-set/x/d/k/3168430248892-set-c618s584-tefal-original-imaf2khhs7qgt569.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Tefal Ingenio 5-Piece Nonstick Cookware Set",
    },
    price: {
      mrp: 7999,
      cost: 4999,
      discount: "38%",
    },
    quantity: 1,
    description: "Non-stick cookware set for easy cooking and cleaning.",
    discount: "Mega Savings",
    tagline: "Perfect Cookware",
  },
  {
    id: "homekitchen8",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/j/f/q/1000-bravo-1000-hot-cold-isi-certified-insulated-thermosteel-original-imahduh7fbs66jhu.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/j/f/q/1000-bravo-1000-hot-cold-isi-certified-insulated-thermosteel-original-imahduh7fbs66jhu.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Milton Thermosteel Flip Lid Flask, 1 L (Silver)",
    },
    price: {
      mrp: 1125,
      cost: 749,
      discount: "33%",
    },
    quantity: 1,
    description: "Keeps beverages hot or cold for up to 24 hours.",
    discount: "Everyday Value",
    tagline: "Stay Hydrated",
  },
  {
    id: "homekitchen9",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/outdoor-chair/x/i/n/83-82-2-pp-polypropylene-55-88-1-6-8904423911924-cello-89-original-imahapyazq7ujuph.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/outdoor-chair/x/i/n/83-82-2-pp-polypropylene-55-88-1-6-8904423911924-cello-89-original-imahapyazq7ujuph.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Cello Super Club Plastic Chair (Set of 2, Brown)",
    },
    price: {
      mrp: 2990,
      cost: 2090,
      discount: "30%",
    },
    quantity: 1,
    description: "Strong, lightweight, and ideal for indoor or outdoor use.",
    discount: "Flat ₹900 Off",
    tagline: "Sit in Style",
  },
  {
    id: "homekitchen10",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-cooker/f/c/a/cute-1-8-2-ss-prestige-original-imah6huqbsanpnty.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-cooker/f/c/a/cute-1-8-2-ss-prestige-original-imah6huqbsanpnty.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Prestige Electric Rice Cooker (1.8 L)",
    },
    price: {
      mrp: 2595,
      cost: 1799,
      discount: "31%",
    },
    quantity: 1,
    description: "Cook rice automatically and keep it warm for hours.",
    discount: "Hot Offer",
    tagline: "Quick Meals",
  },
  {
    id: "homekitchen11",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/blanket/n/x/d/microfiber-abstract-double-comforter-for-ac-room-mid-winter-all-original-imagzbgndefapfuy.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/blanket/n/x/d/microfiber-abstract-double-comforter-for-ac-room-mid-winter-all-original-imagzbgndefapfuy.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle:
        "Amazon Brand - Solimo Microfiber Reversible Comforter (Double)",
    },
    price: {
      mrp: 2499,
      cost: 1399,
      discount: "44%",
    },
    quantity: 1,
    description: "Soft, reversible comforter for year-round use.",
    discount: "Winter Special",
    tagline: "Cozy Nights",
  },
  {
    id: "homekitchen12",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/pot-pan/p/r/v/special-flat-tawa-280-pigeon-original-imagu9bsfbpf3gsr.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pot-pan/p/r/v/special-flat-tawa-280-pigeon-original-imagu9bsfbpf3gsr.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Pigeon Non-Stick Aluminium Tawa (280mm)",
    },
    price: {
      mrp: 725,
      cost: 499,
      discount: "31%",
    },
    quantity: 1,
    description: "Perfect for making dosa, chilla, and paratha.",
    discount: "Value Deal",
    tagline: "Tawa for Every Kitchen",
  },
  {
    id: "homekitchen13",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/l1dwknk0/electric-kettle/1/l/l/-original-imagcyntuc6zchxu.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/l1dwknk0/electric-kettle/1/l/l/-original-imagcyntuc6zchxu.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Butterfly Rapid Kettle 1.5-Litre, Silver with Black",
    },
    price: {
      mrp: 1299,
      cost: 849,
      discount: "35%",
    },
    quantity: 1,
    description: "Auto cut-off, stainless steel body, 1500W power.",
    discount: "Bestseller",
    tagline: "Tea Time Essential",
  },
  {
    id: "homekitchen14",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/container/5/m/2/24-kichen-container-kichen-storage-box-storage-container-storage-original-imah22fpdyxrswgg.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/container/5/m/2/24-kichen-container-kichen-storage-box-storage-container-storage-original-imah22fpdyxrswgg.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Asian Plastowares Plastic Storage Container Set (Set of 18)",
    },
    price: {
      mrp: 999,
      cost: 599,
      discount: "40%",
    },
    quantity: 1,
    description: "Air-tight lids, BPA-free, ideal for kitchen storage.",
    discount: "Combo Offer",
    tagline: "Organize Smart",
  },
  {
    id: "homekitchen15",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/wall-clock/g/3/a/clock-12-inches-silent-sweep-movement-32-00-1057-analog-ajanta-original-imah9cezz9gxstma.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wall-clock/g/3/a/clock-12-inches-silent-sweep-movement-32-00-1057-analog-ajanta-original-imah9cezz9gxstma.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Ajanta Plastic Wall Clock (Black, Silent Movement)",
    },
    price: {
      mrp: 699,
      cost: 349,
      discount: "50%",
    },
    quantity: 1,
    description: "Elegant design with noiseless quartz movement.",
    discount: "Today’s Pick",
    tagline: "Timeless Style",
  },
  {
    id: "homekitchen16",
    category: "Home & Kitchen",
    url: "https://rukminim2.flixcart.com/image/312/312/xif0q/water-purifier/d/l/j/-original-imahbpzx6zayyq2h.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/water-purifier/d/l/j/-original-imahbpzx6zayyq2h.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "KENT Table Top UV Water Purifier (White)",
    },
    price: {
      mrp: 7999,
      cost: 5499,
      discount: "31%",
    },
    quantity: 1,
    description: "Compact and sleek UV water purifier for home use.",
    discount: "Pure Savings",
    tagline: "Clean Water, Always",
  },
  {
    id: "headphone1",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/r/r/4/-original-imaguggqedr3ypyx.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/r/r/4/-original-imaguggqedr3ypyx.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "boAt Rockerz 235v2 with ASAP Charging Bluetooth Headset",
    },
    price: {
      mrp: 2990,
      cost: 1199,
      discount: "59%",
    },
    quantity: 1,
    description: "Fast charging, IPX5 waterproof, 10mm drivers, Bluetooth 5.0.",
    discount: "Grab Now!",
    tagline: "Best Deal",
  },
  {
    id: "headphone2",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/2/j/l/-original-imah28h4mwkywgfu.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/2/j/l/-original-imah28h4mwkywgfu.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    },
    price: {
      mrp: 29990,
      cost: 22990,
      discount: "23%",
    },
    quantity: 1,
    description: "Industry-leading noise cancellation, long battery life.",
    discount: "Best Price",
    tagline: "Top Rated",
  },
  {
    id: "headphone3",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/g/z/j/-original-imahckrzsmr7duwa.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/g/z/j/-original-imahckrzsmr7duwa.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "JBL T450BT Wireless On-Ear Headphones with Mic",
    },
    price: {
      mrp: 3999,
      cost: 1499,
      discount: "62%",
    },
    quantity: 1,
    description: "Bass boost, foldable design, 11 hours of battery life.",
    discount: "Flash Deal",
    tagline: "Best for Bass",
  },
  {
    id: "headphone4",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/n/l/p/-original-imahdt83n3zug3qq.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/n/l/p/-original-imahdt83n3zug3qq.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Boat Airdopes 441 TWS Earbuds with 24H Playback",
    },
    price: {
      mrp: 4999,
      cost: 1799,
      discount: "64%",
    },
    quantity: 1,
    description: "True wireless, 24 hours playback, IPX7 waterproof.",
    discount: "Deal of the Day",
    tagline: "Wireless Freedom",
  },
  {
    id: "headphone5",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/ktyp8cw0/headphone/e/f/v/galaxy-buds-live-sm-r180nzkainu-samsung-original-imag77fztywg5hnq.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/ktyp8cw0/headphone/e/f/v/galaxy-buds-live-sm-r180nzkainu-samsung-original-imag77fztywg5hnq.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Samsung Galaxy Buds+ True Wireless Earbuds",
    },
    price: {
      mrp: 12990,
      cost: 6999,
      discount: "46%",
    },
    quantity: 1,
    description: "Dual driver setup, 22 hours of battery, comfortable fit.",
    discount: "Best Value",
    tagline: "Premium Sound",
  },
  {
    id: "headphone6",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/e/y/0/-original-imah96h6kzungyfj.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/e/y/0/-original-imah96h6kzungyfj.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Skullcandy Riff Wireless Bluetooth On-Ear Headphones",
    },
    price: {
      mrp: 4999,
      cost: 1699,
      discount: "66%",
    },
    quantity: 1,
    description: "12 hours of battery life, lightweight and adjustable fit.",
    discount: "Big Discount",
    tagline: "Comfortable Fit",
  },
  {
    id: "headphone7",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/k7tdj0w0/headphone/p/b/t/sennheiser-hd-450bt-original-imafpyxhwknhqp8k.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/k7tdj0w0/headphone/p/b/t/sennheiser-hd-450bt-original-imafpyxhwknhqp8k.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Sennheiser HD 450BT Wireless Noise Cancelling Headphones",
    },
    price: {
      mrp: 17990,
      cost: 12990,
      discount: "28%",
    },
    quantity: 1,
    description: "Active noise cancellation, 30 hours of battery life.",
    discount: "Special Offer",
    tagline: "Superior Sound",
  },
  {
    id: "headphone8",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/x/x/nord-buds-3-pro-oneplus-original-imah2ax8jjdyxyv3.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/x/x/nord-buds-3-pro-oneplus-original-imah2ax8jjdyxyv3.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "OnePlus Buds Z2 with Active Noise Cancellation",
    },
    price: {
      mrp: 5999,
      cost: 3499,
      discount: "42%",
    },
    quantity: 1,
    description: "ANC, Dolby Atmos, 38h battery with charging case.",
    discount: "Weekend Sale",
    tagline: "ANC Comfort",
  },
  {
    id: "headphone9",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/p/h/-original-imahfmbcv8vbgdjf.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/p/h/-original-imahfmbcv8vbgdjf.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Sony WI-C310 Wireless In‑Ear Headphones (Neckband)",
    },
    price: {
      mrp: 2999,
      cost: 1999,
      discount: "33%",
    },
    quantity: 1,
    description: "Lightweight neckband, 15h battery, splash-proof.",
    discount: "Value Buy",
    tagline: "Sony Quality",
  },
  {
    id: "headphone10",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/3/e/d/-original-imahatzcg3uzk3yk.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/3/e/d/-original-imahatzcg3uzk3yk.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "JBL Tune 510BT Over‑Ear Bluetooth Headphones",
    },
    price: {
      mrp: 3999,
      cost: 2499,
      discount: "37%",
    },
    quantity: 1,
    description: "JBL Pure Bass, 40h battery, multi-device pairing.",
    discount: "Flash Offer",
    tagline: "Bass Booster",
  },
  {
    id: "headphone11",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/p/4/-original-imagtvqpkzkedv8p.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/p/4/-original-imagtvqpkzkedv8p.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Anker Soundcore Life Q35 with Hi‑Res Audio & ANC",
    },
    price: {
      mrp: 10999,
      cost: 6999,
      discount: "36%",
    },
    quantity: 1,
    description: "LDAC, 40h playtime, memory foam ear cups.",
    discount: "Deal Price",
    tagline: "Hi‑Res Comfort",
  },
  {
    id: "headphone12",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/s/1/-original-imagtwb7mazunzgd.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/s/1/-original-imagtwb7mazunzgd.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Sennheiser CX 350BT True Wireless Earbuds",
    },
    price: {
      mrp: 5990,
      cost: 4299,
      discount: "28%",
    },
    quantity: 1,
    description: "Die‑cast metal build, app EQ, 24h battery with case.",
    discount: "Special Discount",
    tagline: "Studio Sound",
  },
  {
    id: "headphone13",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/o/p/1/-original-imahdxv2eh98ptvh.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/o/p/1/-original-imahdxv2eh98ptvh.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Skullcandy Crusher Evo Wireless Over‑Ear Headphones",
    },
    price: {
      mrp: 10999,
      cost: 7499,
      discount: "32%",
    },
    quantity: 1,
    description: "Personalized bass, 40h battery, haptic bass.",
    discount: "Bass Fest",
    tagline: "Bass Lovers",
  },
  {
    id: "headphone14",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/j/n/n/quietcomfort-earbuds-ii-bose-original-imaghgjqh6bryxe2.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/j/n/n/quietcomfort-earbuds-ii-bose-original-imaghgjqh6bryxe2.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Bose QuietComfort Earbuds II, Acoustic Noise Cancelling",
    },
    price: {
      mrp: 25990,
      cost: 19990,
      discount: "23%",
    },
    quantity: 1,
    description: "World‑class ANC, tailor‑made fit, up to 6h battery.",
    discount: "Premium Deal",
    tagline: "Quietcomfort",
  },
  {
    id: "headphone15",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/w/d/k/astra-boult-original-imahd2zfafgdggg5.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/w/d/k/astra-boult-original-imahd2zfafgdggg5.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "JLab Epic Air Sport ANC Earbuds with Ear‑Tailor EQ",
    },
    price: {
      mrp: 9999,
      cost: 5999,
      discount: "40%",
    },
    quantity: 1,
    description: "IP55, ANC, sport‑secure fit, wireless charging.",
    discount: "Sporty Discount",
    tagline: "Secure Fit",
  },
  {
    id: "headphone16",
    category: "Headphones",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/d/c/tw301-blogger-upto-40h-playtime-enc-dual-pairing-fast-charging-original-imahdms3qywhcsf8.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/d/c/tw301-blogger-upto-40h-playtime-enc-dual-pairing-fast-charging-original-imahdms3qywhcsf8.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle: "Nothing Ear (1) True Wireless Earbuds, Transparent Design",
    },
    price: {
      mrp: 6999,
      cost: 4499,
      discount: "36%",
    },
    quantity: 1,
    description: "Clear Sound, wireless charging case, triple‑mic ENC.",
    discount: "Pop Culture Pick",
    tagline: "Stylish Audio",
  },
  {
    id: "fashion1",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/u/t/a/-original-imagkfa5zd2wzywv.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/u/t/a/-original-imagkfa5zd2wzywv.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Adidas Originals Men's Trefoil Hoodie",
    },
    price: {
      mrp: 2999,
      cost: 1799,
      discount: "40%",
    },
    quantity: 1,
    description: "Comfortable and stylish hoodie for men from Adidas.",
    discount: "Big Savings",
    tagline: "Best Seller",
  },
  {
    id: "fashion2",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/i/x/q/-original-imagy58punejgk9p.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/i/x/q/-original-imagy58punejgk9p.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Levi's Men's Slim Fit Jeans",
    },
    price: {
      mrp: 2999,
      cost: 1799,
      discount: "40%",
    },
    quantity: 1,
    description: "Slim fit, comfortable jeans for everyday wear.",
    discount: "Flash Sale",
    tagline: "Stylish Look",
  },
  {
    id: "fashion3",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/9/q/f/-original-imahdh63r7dhjhvs.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/9/q/f/-original-imahdh63r7dhjhvs.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Nike Men's Air Zoom Pegasus Running Shoes",
    },
    price: {
      mrp: 7999,
      cost: 4999,
      discount: "38%",
    },
    quantity: 1,
    description: "High-performance running shoes with superior cushioning.",
    discount: "Best Deal",
    tagline: "Run with Comfort",
  },
  {
    id: "fashion4",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/a/9/s-68709306-puma-original-imahcz6vz62vjbgw.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/a/9/s-68709306-puma-original-imahcz6vz62vjbgw.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Puma Men's T-Shirt",
    },
    price: {
      mrp: 999,
      cost: 599,
      discount: "40%",
    },
    quantity: 1,
    description: "Casual wear T-shirt for everyday comfort and style.",
    discount: "Huge Discount",
    tagline: "Simple & Stylish",
  },
  {
    id: "fashion5",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/x/o/b/32-wutr7006f-wrogn-original-imahaurytgqzkvgs.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/x/o/b/32-wutr7006f-wrogn-original-imahaurytgqzkvgs.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Wrangler Men's Slim Fit Chinos",
    },
    price: {
      mrp: 2799,
      cost: 1499,
      discount: "46%",
    },
    quantity: 1,
    description: "Chinos for men, stylish and comfortable for casual wear.",
    discount: "Amazing Offer",
    tagline: "Great Value",
  },
  {
    id: "fashion7",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/v/m/d/m-flower-gown-fashion2wear-original-imahfh38hpkurvvs.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/v/m/d/m-flower-gown-fashion2wear-original-imahfh38hpkurvvs.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "H&M Women's Floral Dress",
    },
    price: {
      mrp: 2499,
      cost: 1499,
      discount: "40%",
    },
    quantity: 1,
    description: "Elegant floral dress for women, perfect for all occasions.",
    discount: "Limited Offer",
    tagline: "Feminine & Chic",
  },
  {
    id: "fashion8",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/3/9/g/38-aragbz5041-arrow-original-imagvgckgjqtsqfb.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/3/9/g/38-aragbz5041-arrow-original-imagvgckgjqtsqfb.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Zara Men's Slim Fit Blazer – Grey",
    },
    price: {
      mrp: 4999,
      cost: 2999,
      discount: "40%",
    },
    quantity: 1,
    description: "Stylish blazer for formal or smart-casual events.",
    discount: "Big Offer",
    tagline: "Dressed Up",
  },
  {
    id: "fashion9",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/z/v/s-s24hmkt426-tommy-hilfiger-original-imagzrnfhzxgw9sa.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/z/v/s-s24hmkt426-tommy-hilfiger-original-imagzrnfhzxgw9sa.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Tommy Hilfiger Printed Polo T-Shirt – Men’s",
    },
    price: {
      mrp: 2599,
      cost: 1499,
      discount: "42%",
    },
    quantity: 1,
    description: "Classic polo in breathable cotton pique.",
    discount: "Summer Sale",
    tagline: "Preppy Style",
  },
  {
    id: "fashion10",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/g/t/c/38-mtro1001e-metronaut-original-imahbfd3nrspchyx.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/g/t/c/38-mtro1001e-metronaut-original-imahbfd3nrspchyx.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "H&M Women’s Skinny Jeans – Dark Blue",
    },
    price: {
      mrp: 2199,
      cost: 1299,
      discount: "41%",
    },
    quantity: 1,
    description: "Stretchy skinny jeans with comfortable fit.",
    discount: "Trendy Deal",
    tagline: "Everyday Denim",
  },
  {
    id: "fashion11",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/q/n/m-amv-gboss-30822-181-amevi-original-imaghnsmc3rgmwdj.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/q/n/m-amv-gboss-30822-181-amevi-original-imaghnsmc3rgmwdj.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Levi’s Women’s Graphic Tee – White",
    },
    price: {
      mrp: 1999,
      cost: 999,
      discount: "50%",
    },
    quantity: 1,
    description: "Classic cotton tee with subtle graphic print.",
    discount: "Cool Tee",
    tagline: "Everyday Wear",
  },
  {
    id: "fashion12",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/o/n/g/7-n-belt-01-black-7-rasambh-black-original-imahdhhdz38htvrf.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/o/n/g/7-n-belt-01-black-7-rasambh-black-original-imahdhhdz38htvrf.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Adidas Women’s Cloudfoam Slides – Black",
    },
    price: {
      mrp: 2999,
      cost: 1799,
      discount: "40%",
    },
    quantity: 1,
    description: "Comfortable slip-on slides with cushioned footbed.",
    discount: "Beach Ready",
    tagline: "Casual Comfort",
  },
  {
    id: "fashion13",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/d/u/t/s-no-4msk8625-02-snitch-original-imahbzkuaybukqgz.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/d/u/t/s-no-4msk8625-02-snitch-original-imahbzkuaybukqgz.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Levi’s Trucker Jacket – Blue Denim",
    },
    price: {
      mrp: 6999,
      cost: 4199,
      discount: "40%",
    },
    quantity: 1,
    description: "Timeless denim jacket with metal toggles.",
    discount: "Outerwear Sale",
    tagline: "Classic Layer",
  },
  {
    id: "fashion14",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/short/h/c/t/l-dm4762-084-nike-original-imagrrtuyqfh77zc.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/h/c/t/l-dm4762-084-nike-original-imagrrtuyqfh77zc.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Nike Dri‑Fit Running Shorts – Men’s",
    },
    price: {
      mrp: 2499,
      cost: 1299,
      discount: "48%",
    },
    quantity: 1,
    description: "Breathable and lightweight shorts for training.",
    discount: "Run Now",
    tagline: "Sporty Style",
  },
  {
    id: "fashion15",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/r/g/w/s-finn-sweat-melange-grey-rareism-original-imahc5deqnq3ctzj.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/r/g/w/s-finn-sweat-melange-grey-rareism-original-imahc5deqnq3ctzj.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Gap Women’s Hooded Cardigan – Heather Grey",
    },
    price: {
      mrp: 3999,
      cost: 2499,
      discount: "37%",
    },
    quantity: 1,
    description: "Cozy cardigan with hood and pockets.",
    discount: "Winter Wear",
    tagline: "Casual Cozy",
  },
  {
    id: "fashion16",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/k8ho0i80/sunglass/p/t/k/54-0rb4171-ray-ban-original-imafqhhduexfsrgv.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/k8ho0i80/sunglass/p/t/k/54-0rb4171-ray-ban-original-imafqhhduexfsrgv.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Ray-Ban Original Wayfarer Sunglasses – Unisex",
    },
    price: {
      mrp: 9999,
      cost: 6999,
      discount: "30%",
    },
    quantity: 1,
    description: "Timeless style with UV protection lenses.",
    discount: "Sunny Days",
    tagline: "Iconic Shades",
  },
  {
    id: "fashion17",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/9/g/q/40-wd-ice-0h-srk-1-nucouths-the-style-you-love-original-imahdg6zpv5z4uzh.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/9/g/q/40-wd-ice-0h-srk-1-nucouths-the-style-you-love-original-imahdg6zpv5z4uzh.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Tommy Jeans Women’s High-Rise Denim Skirt",
    },
    price: {
      mrp: 3499,
      cost: 1999,
      discount: "43%",
    },
    quantity: 1,
    description: "Classic denim skirt with clean finish.",
    discount: "Denim Days",
    tagline: "Casual Chic",
  },
  {
    id: "fashion18",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/y/n/g/-original-imah3hyzdkhpwsqa.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/y/n/g/-original-imah3hyzdkhpwsqa.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Puma Sport Backpack – 20L",
    },
    price: {
      mrp: 2999,
      cost: 1799,
      discount: "40%",
    },
    quantity: 1,
    description: "Durable backpack with multiple compartments.",
    discount: "College Combo",
    tagline: "Everyday Backpack",
  },
  {
    id: "fashion19",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/m/x/n/9-multi-purpose-backpack-with-usb-charging-port-laptop-bag-original-imahax35gztkhg7x.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/m/x/n/9-multi-purpose-backpack-with-usb-charging-port-laptop-bag-original-imahax35gztkhg7x.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Herschel Heritage Backpack – 19.5L",
    },
    price: {
      mrp: 5999,
      cost: 4499,
      discount: "25%",
    },
    quantity: 1,
    description: "Classic Herschel pack with padded straps.",
    discount: "School Ready",
    tagline: "Timeless Pack",
  },
  {
    id: "fashion20",
    category: "Fashion",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/cap/k/a/f/free-trucker-cap-lowercase-original-imah5jgczjqrmqht.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/cap/k/a/f/free-trucker-cap-lowercase-original-imah5jgczjqrmqht.jpeg?q=70",
    title: {
      shortTitle: "Fashion",
      longTitle: "Levi’s Red Tab Trucker Cap – Unisex",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    quantity: 1,
    description: "Adjustable denim cap with embroidered logo.",
    discount: "Sunny Deal",
    tagline: "Headwear Style",
  },

  {
    id: "beauty1",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/t/v/d/-original-imahfab5xvzxfeuq.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/t/v/d/-original-imahfab5xvzxfeuq.jpeg?q=70",
    title: {
      shortTitle: "Beauty",
      longTitle: "L'Oreal Paris Voluminous Lash Paradise Mascara",
    },
    price: {
      mrp: 850,
      cost: 599,
      discount: "29%",
    },
    quantity: 1,
    description: "Intense volume and length for a dramatic lash look.",
    discount: "Flash Sale",
    tagline: "Top Choice for Eyelashes",
  },
  {
    id: "beauty2",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/n/t/i/18-0-matte-poreless-liquid-tube-maybelline-new-york-original-imahckqhjsscfrgx.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/n/t/i/18-0-matte-poreless-liquid-tube-maybelline-new-york-original-imahckqhjsscfrgx.jpeg?q=70",
    title: {
      shortTitle: "Beauty",
      longTitle: "Maybelline New York Fit Me Matte + Poreless Foundation",
    },
    price: {
      mrp: 699,
      cost: 499,
      discount: "29%",
    },
    quantity: 1,
    description: "Matte foundation for a smooth, poreless finish.",
    discount: "Best Seller",
    tagline: "Flawless Finish",
  },
  {
    id: "beauty3",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/k/z/m/300-0-soft-light-moisturizer-cream-for-face-hand-body-with-original-imahchf4c3zrjhgg.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/k/z/m/300-0-soft-light-moisturizer-cream-for-face-hand-body-with-original-imahchf4c3zrjhgg.jpeg?q=70",
    title: {
      shortTitle: "Beauty",
      longTitle: "Nivea Soft Light Moisturizer Cream",
    },
    price: {
      mrp: 250,
      cost: 169,
      discount: "32%",
    },
    quantity: 1,
    description: "Light moisturizer for face, hands, and body.",
    discount: "Flash Deal",
    tagline: "Soft & Smooth Skin",
  },
  {
    id: "beauty4",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/a/b/6/-original-imah3qzazuddrvhy.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/a/b/6/-original-imah3qzazuddrvhy.jpeg?q=70",
    title: {
      shortTitle: "Beauty",
      longTitle: "Lakmé Perfect Radiance Intense Whitening Serum",
    },
    price: {
      mrp: 599,
      cost: 299,
      discount: "50%",
    },
    quantity: 1,
    description: "Brightens and evens skin tone for a radiant look.",
    discount: "Huge Discount",
    tagline: "Glow with Confidence",
  },
  {
    id: "beauty5",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/scrub/w/y/w/-original-imahdvfythdq8meh.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/scrub/w/y/w/-original-imahdvfythdq8meh.jpeg?q=70",
    title: {
      shortTitle: "Beauty",
      longTitle: "Biotique Bio Papaya Revitalizing Tan-Removal Scrub",
    },
    price: {
      mrp: 250,
      cost: 199,
      discount: "20%",
    },
    quantity: 1,
    description: "Gentle scrub that removes tan and impurities.",
    discount: "Grab the Offer",
    tagline: "Tan-Free Skin",
  },
  {
    id: "beauty6",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/z/g/h/-original-imahbx8hj5hyzywp.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/z/g/h/-original-imahbx8hj5hyzywp.jpeg?q=70",
    title: {
      shortTitle: "Beauty",
      longTitle: "Maybelline New York Super Stay Matte Ink Liquid Lipstick",
    },
    price: {
      mrp: 650,
      cost: 450,
      discount: "31%",
    },
    quantity: 1,
    description: "Long-lasting matte liquid lipstick with vibrant color.",
    discount: "Limited Time Offer",
    tagline: "Bold Lips",
  },
  {
    id: "beauty7",
    category: "Beauty ",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/1/x/q/30-0-extraordinary-oil-hair-serum-with-floral-oils-for-dry-original-imahckyebpx2kjmg.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/1/x/q/30-0-extraordinary-oil-hair-serum-with-floral-oils-for-dry-original-imahckyebpx2kjmg.jpeg?q=70",
    title: {
      shortTitle: "Beauty & toys",
      longTitle: "L'Oréal Paris Extraordinary Oil Serum",
    },
    price: {
      mrp: 799,
      cost: 499,
      discount: "38%",
    },
    quantity: 1,
    description: "Nourishing serum for smooth and shiny hair.",
    discount: "Hot Deal",
    tagline: "Hair Care Essential",
  },

  {
    id: "toys1",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/block-construction/m/a/h/city-red-sports-car-supercar-toy-vehicle-set-60448-109-blocks-original-imah769zcysf5ung.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/block-construction/m/a/h/city-red-sports-car-supercar-toy-vehicle-set-60448-109-blocks-original-imah769zcysf5ung.jpeg?q=70",
    title: {
      shortTitle: "Toys",
      longTitle: "LEGO City Police Station Toy Building Set",
    },
    price: {
      mrp: 2999,
      cost: 2199,
      discount: "27%",
    },
    quantity: 1,
    description: "Build your own police station with this fun LEGO set.",
    discount: "Best Deal",
    tagline: "Great for Kids",
  },
  {
    id: "toys2",
    category: "Beauty & toys",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/doll-doll-house/y/n/q/-original-imagv3ruz3h63tpx.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/doll-doll-house/y/n/q/-original-imagv3ruz3h63tpx.jpeg?q=70",
    title: {
      shortTitle: "Toys",
      longTitle: "Barbie Dreamhouse Dollhouse with Furniture",
    },
    price: {
      mrp: 9999,
      cost: 6999,
      discount: "30%",
    },
    quantity: 1,
    description: "Barbie Dreamhouse with fun furniture and accessories.",
    discount: "Big Discount",
    tagline: "Perfect for Girls",
  },
  {
    id: "grocery1",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/rice/e/x/u/-original-imah8xxmecr3zgn6.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/rice/e/x/u/-original-imah8xxmecr3zgn6.jpeg?q=70",
    title: {
      shortTitle: "Basmati Rice",
      longTitle: "India Gate Basmati Rice Classic, 5kg",
    },
    price: {
      mrp: 750,
      cost: 649,
      discount: "13%",
    },
    quantity: 1,
    description: "Premium aged basmati rice with long grains and rich aroma.",
    discount: "Limited Time Offer",
    tagline: "Daily Essentials",
  },
  {
    id: "grocery2",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/kx3l0nk0/flour/9/s/h/10-atta-with-multigrains-10-kg-5-kg-2-2-multigrain-flour-original-imag9mz3az8teuch.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/kx3l0nk0/flour/9/s/h/10-atta-with-multigrains-10-kg-5-kg-2-2-multigrain-flour-original-imag9mz3az8teuch.jpeg?q=70",
    title: {
      shortTitle: "Wheat Flour",
      longTitle: "Aashirvaad Whole Wheat Atta, 10kg",
    },
    price: {
      mrp: 460,
      cost: 420,
      discount: "9%",
    },
    quantity: 1,
    description: "100% whole wheat flour for soft and fluffy chapatis.",
    discount: "Save More",
    tagline: "Everyday Kitchen Item",
  },
  {
    id: "grocery3",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/edible-oil/y/8/6/-original-imahbwhr46uerghr.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/edible-oil/y/8/6/-original-imahbwhr46uerghr.jpeg?q=70",
    title: {
      shortTitle: "Cooking Oil",
      longTitle: "Fortune Sunlite Refined Sunflower Oil, 5L",
    },
    price: {
      mrp: 820,
      cost: 730,
      discount: "11%",
    },
    quantity: 1,
    description:
      "Light and healthy refined sunflower oil for everyday cooking.",
    discount: "Essentials Deal",
    tagline: "Healthy Cooking",
  },
  {
    id: "grocery4",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/pulses/6/8/o/-original-imah3gzbvhftsgau.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pulses/6/8/o/-original-imah3gzbvhftsgau.jpeg?q=70",
    title: {
      shortTitle: "Toor Dal",
      longTitle: "Tata Sampann Unpolished Toor Dal, 1kg",
    },
    price: {
      mrp: 180,
      cost: 155,
      discount: "14%",
    },
    quantity: 1,
    description: "Rich in protein and unpolished for maximum nutrients.",
    discount: "Everyday Value",
    tagline: "Kitchen Favorite",
  },
  {
    id: "grocery5",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/salt/p/c/m/-original-imahbyyjjzufh8cb.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salt/p/c/m/-original-imahbyyjjzufh8cb.jpeg?q=70",
    title: {
      shortTitle: "Salt",
      longTitle: "Tata Salt, Iodized, 1kg",
    },
    price: {
      mrp: 25,
      cost: 22,
      discount: "12%",
    },
    quantity: 1,
    description: "Vacuum evaporated iodized salt for daily use.",
    discount: "Best Seller",
    tagline: "Trusted by Millions",
  },
  {
    id: "grocery6",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/kjd6nww0-0/sugar/b/r/a/1000-premium-quality-white-sugar-500gm-pack-of-2-pouch-white-original-imafyykahcwfbpwp.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/kjd6nww0-0/sugar/b/r/a/1000-premium-quality-white-sugar-500gm-pack-of-2-pouch-white-original-imafyykahcwfbpwp.jpeg?q=70",
    title: {
      shortTitle: "Sugar",
      longTitle: "Madhur Pure and Hygienic Sugar, 1kg",
    },
    price: {
      mrp: 50,
      cost: 45,
      discount: "10%",
    },
    quantity: 1,
    description: "Refined white sugar ideal for tea, sweets, and cooking.",
    discount: "Everyday Price",
    tagline: "Clean & Sweet",
  },
  {
    id: "grocery7",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/km0x5zk0/spice-masala/x/d/4/turmeric-powder-pouch-everest-powder-original-imagfydnrysfesgq.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/km0x5zk0/spice-masala/x/d/4/turmeric-powder-pouch-everest-powder-original-imagfydnrysfesgq.jpeg?q=70",
    title: {
      shortTitle: "Turmeric Powder",
      longTitle: "Everest Turmeric Powder, 200g",
    },
    price: {
      mrp: 60,
      cost: 52,
      discount: "13%",
    },
    quantity: 1,
    description: "High-quality turmeric powder with strong flavor and color.",
    discount: "Kitchen Staple",
    tagline: "Pure & Strong",
  },
  {
    id: "grocery8",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/tea/k/g/p/-original-imah4ngt8wwxfcqu.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/tea/k/g/p/-original-imah4ngt8wwxfcqu.jpeg?q=70",
    title: {
      shortTitle: "Tea",
      longTitle: "Tata Tea Gold, 500g",
    },
    price: {
      mrp: 260,
      cost: 235,
      discount: "10%",
    },
    quantity: 1,
    description: "A fine blend of Assam CTC and long leaves for rich taste.",
    discount: "Morning Special",
    tagline: "Chai Time Favorite",
  },
  {
    id: "grocery9",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/cookie-biscuit/k/q/o/500-bourbon-chocolate-flavored-cream-filled-biscuits-family-pack-original-imah6qxbz6ehgsu5.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/cookie-biscuit/k/q/o/500-bourbon-chocolate-flavored-cream-filled-biscuits-family-pack-original-imah6qxbz6ehgsu5.jpeg?q=70",
    title: {
      shortTitle: "Biscuits",
      longTitle: "Britannia Good Day Cashew Cookies, 800g",
    },
    price: {
      mrp: 110,
      cost: 99,
      discount: "10%",
    },
    quantity: 1,
    description: "Crunchy and buttery cookies loaded with cashew bits.",
    discount: "Tasty Treat",
    tagline: "Snack Time",
  },
  {
    id: "grocery10",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jam-spread/d/i/7/1-all-natural-peanut-butter-creamy-unsweetened-1-jar-nut-butter-original-imahaysd7bmaysnd.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jam-spread/d/i/7/1-all-natural-peanut-butter-creamy-unsweetened-1-jar-nut-butter-original-imahaysd7bmaysnd.jpeg?q=70",
    title: {
      shortTitle: "Peanut Butter",
      longTitle: "Pintola All Natural Peanut Butter, 1kg",
    },
    price: {
      mrp: 399,
      cost: 329,
      discount: "18%",
    },
    quantity: 1,
    description: "Protein-rich peanut butter made from roasted peanuts.",
    discount: "Health Pick",
    tagline: "Nutty & Natural",
  },
  {
    id: "grocery11",
    category: "Grocery",
    url: "https://rukminim2.flixcart.com/image/612/612/xif0q/noodle/q/i/w/1120-2-minute-instant-noodles-masala-1120-g-280g-4-4-instant-original-imaghqckgymcr2ga.jpeg?q=70",
    detailUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/noodle/q/i/w/1120-2-minute-instant-noodles-masala-1120-g-280g-4-4-instant-original-imaghqckgymcr2ga.jpeg?q=70",
    title: {
      shortTitle: "Instant Noodles",
      longTitle: "Maggi 2-Minute Instant Noodles Masala, 280g",
    },
    price: {
      mrp: 60,
      cost: 54,
      discount: "10%",
    },
    quantity: 1,
    description: "Classic instant noodles with delicious masala flavor.",
    discount: "Quick Meal",
    tagline: "Anytime Hunger Fix",
  },
];

export default products;

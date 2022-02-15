const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Animals" },
    { name: "Games" },
    { name: "Dolls" },
    { name: "Books" },
    { name: "Lego" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Toy Story",
      description:
        "The Toys that appear within the Toy Story universe are able to animate to life. Toys have a unique biology, psychology and culture compared to humans..",
      image: "/images/cookie-tin.jpg",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Sulley Plush – Monsters",
      description: "Bright and bushy, the spotted star of Disney and Pixar",
      image: "/images/canned-coffee.jpg",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Minions",
      category: categories[1]._id,
      description:
        "This super soft, cute and collectable stuffy will be the best versatile toy.",
      image: "/images/toilet-paper.jpg",
      price: 7.99,
      quantity: 20,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Mickey",
      category: categories[1]._id,
      description:
        "These timeless characters are made with amazing detail and feature soft deluxe fabrics!.",
      image: "/images/soap.jpg",
      price: 3.99,
      quantity: 50,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Magic Hair Elf Dwarf Troll",
      category: categories[1]._id,
      description:
        "POP Movie Cartoon Magic Hair Elf Dwarf Troll Orange Pink Blue Model Vinyl Action Figure PVC Doll Birthday Collection Toys.",
      image: "/images/wooden-spoons.jpg",
      price: 14.99,
      quantity: 100,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Mattel&Star Wars",
      category: categories[2]._id,
      description:
        'Perfect for any collector, this adorable, Yoda-like plush stands at 11" tall..',
      image: "/images/camera.jpg",
      price: 399.99,
      quantity: 30,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Mr. Potato",
      category: categories[2]._id,
      description:
        "The Mr. Potato Head toy encourages kids to use their imaginations for lots of creative play when they mix and match the parts and pieces.",
      image: "/images/tablet.jpg",
      price: 199.99,
      quantity: 30,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Bath Ducky",
      category: categories[3]._id,
      description:
        "White Hot Safety Disc reveals the word HOT in white when bath water is too hot for baby (104 degrees Fahrenheit and above) Fun, easy to grasp size and shape Water tight to prevent sinking and squirting.",
      image: "/images/bedtime-book.jpg",
      price: 9.99,
      quantity: 100,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Minnie",
      category: categories[4]._id,
      description:
        "Disney Junior Mickey Mouse Funhouse Singing Fun Minnie Mouse Plush.",
      image: "/images/spinning-top.jpg",
      price: 1.99,
      quantity: 1000,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Shrek",
      category: categories[4]._id,
      description:
        "32cm Shrek Plush Stuffed Animal Doll Pillow Soft Sleeping Toys Movies TV Collectible Toy.",
      image: "/images/plastic-horses.jpg",
      price: 2.99,
      quantity: 1000,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Maui",
      category: categories[4]._id,
      description:
        "Collect your favorite Disney Princess characters. Each sold separately.",
      image: "/images/teddy-bear.jpg",
      price: 7.99,
      quantity: 100,
      user: "620a9c97f6e2df516838b2b5",
    },
    {
      name: "Tiger",
      category: categories[4]._id,
      description:
        'Disney Tiger Plush From Winnie the Pooh 20" Tall by Mattel.',
      image: "/images/alphabet-blocks.jpg",
      price: 9.99,
      quantity: 600,
      user: "620a9c97f6e2df516838b2b5",
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});

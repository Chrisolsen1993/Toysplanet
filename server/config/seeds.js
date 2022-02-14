const db = require('./connection')
const { User, Product, Category } = require('../models')

db.once('open', async () => {
  await Category.deleteMany()

  const categories = await Category.insertMany([
    { name: 'Animals' },
    { name: 'Games' },
    { name: 'Dolls' },
    { name: 'Books' },
    { name: 'Lego' },
  ])

  console.log('categories seeded')

  await Product.deleteMany()

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: '/images/canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '/images/toilet-paper.jpg',
      price: 7.99,
      quantity: 20,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: '/images/soap.jpg',
      price: 3.99,
      quantity: 50,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: '/images/wooden-spoons.jpg',
      price: 14.99,
      quantity: 100,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: '/images/camera.jpg',
      price: 399.99,
      quantity: 30,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: '/images/tablet.jpg',
      price: 199.99,
      quantity: 30,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: '/images/bedtime-book.jpg',
      price: 9.99,
      quantity: 100,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description:
        'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: '/images/spinning-top.jpg',
      price: 1.99,
      quantity: 1000,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: '/images/plastic-horses.jpg',
      price: 2.99,
      quantity: 1000,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '/images/teddy-bear.jpg',
      price: 7.99,
      quantity: 100,
      user: "620a9c97f6e2df516838b2b5"
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: '/images/alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600,
      user: "620a9c97f6e2df516838b2b5"
    },
  ])

  console.log('products seeded')

  await User.deleteMany()

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  })

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  })

  console.log('users seeded')

  process.exit()
})

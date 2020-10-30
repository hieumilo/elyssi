import { Server, Model, RestSerializer } from "miragejs";

new Server({
  models: {
    category: Model,
    products: Model,
  },

  serializers: {
    application: RestSerializer.extend({
      root: false,
      embed: true,
      normalize: json => ({
        data: {
          attributes: json
        }
      })
    })
  },

  routes() {
    this.namespace = "api";

    this.resource("categories");

    this.get("/:id/products", (schema, request) => {
      const {queryParams: { page: pageOffset, limit: pageSize }} = request
        
      const products = schema.db.products;
  
      if (Number(pageSize)) {
        const start = Number(pageSize) * Number(pageOffset)
        const end = start + Number(pageSize)
        const page = products.slice(start, end)
    
        return {
          data: page,
          nextPage: products.length > end ? Number(pageOffset) + 1 : undefined,
        }
      }
      return products
      // return schema.products.all()
    })

    this.get("/products/:slug", (schema, request) => {
      let slug = request.params.slug
        
      const products = schema.db.products;
      return products.findBy({slug: slug})
    })

    this.passthrough();
  },

  seeds(server) {
    // category
    server.create("category", {id: 1, url: '#', name: 'Man', childrens: [
      {id: 2, url: '/boots', name: 'Boots'},
      {id: 3, url: '/blutcher-boot', name: 'Blutcher Boot'},
      {id: 4, url: '/chelsea-boot', name: 'Chelsea Boot'},
      {id: 5, url: '/chukka-boot', name: 'Chukka Boot'},
      {id: 6, url: '/dress-boot', name: 'Dress Boot'},
      {id: 7, url: '/work-boot', name: 'Work Boot'},
    ]});
    server.create("category", {id: 8, url: '#', name: 'Woman', childrens: [
      {id: 9, url: '/accessories', name: 'Accessories'},
      {id: 10, url: '/belts', name: 'Belts'},
      {id: 11, url: '/caps', name: 'Caps'},
      {id: 12, url: '/laces', name: 'Laces'},
      {id: 13, url: '/socks', name: 'Socks'},
    ]});
    server.create("category", {id: 14, url: '#', name: 'Kids', childrens: [
      {id: 15, url: '/shoes', name: 'Shoes'},
      {id: 16, url: '/shoes', name: 'Derby Shoes'},
      {id: 17, url: '/belts', name: 'Belts'},
      {id: 18, url: '/caps', name: 'Caps'},
      {id: 19, url: '/laces', name: 'Laces'},
      {id: 20, url: '/socks', name: 'Socks'},
    ]});

    // product
    [...Array(50).keys()].map((index) => {
      server.create("product", {
        id: index + 1,
        sku: 'KH12345' + index,
        name: 'Woodie Blake ' + (index + 1),
        slug: 'woodie-blake-' + (index + 1),
        price: Math.floor(Math.random() * 100) + 1,
        availability: 'In Stock',
        images: [
          'https://source.unsplash.com/1000x640/?k-' + (Math.floor(Math.random() * 10) + 1),
          'https://source.unsplash.com/1000x640/?k-' + (Math.floor(Math.random() * 10) + 1),
          'https://source.unsplash.com/1000x640/?k-' + (Math.floor(Math.random() * 10) + 1),
        ],
        short_description: 'Versatile, comfortable, and chic! Three words that describe Blake by Elyssi.',
        description: 'Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Accusamus possimus, quo, fugit expedita corrupti, recusandae fuga asperiores non quos sint quia quis cumque magnam quod tenetur maxime rerum. Eum, alias.',
        additional_information: `On the main compartment has multiple pockets available for your tools, chargers, make up, keys, etc. <br><br>  Size::13.4”Lx 6.5”W x 15.4”H. <br> Weight: 1.57pounds. <br> Color: light brown.`,
        colors: ['#f35627', '#37241f', '#31c643', '#27d4f3'],
        sizes: ['Small', 'Medium', 'Large'],
        categories: [
          {id: 2, url: '/product-list', name: 'Boots'},
          {id: 10, url: '/product-list', name: 'Belts'}
        ],
        reviews: [
          {id: 10, url: '/product-list', name: 'Belts'}
        ],
        rate: Math.floor(Math.random() * 4) + 1,
        rateCount: Math.floor(Math.random() * 100) + 1,
        isFavotire: false,
        discount: 20,
      });
    })
  }
});

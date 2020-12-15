/*eslint array-callback-return: ["error", { allowImplicit: true }]*/
import { Server, Model, RestSerializer } from "miragejs";
const categories = require('./data/category.json')
const productss = require('./data/product.json')

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

    this.get("categories", (schema, request) => {
      return schema.db.categories
    });

    this.get("/:category", (schema, request) => {
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
    })

    this.get("/:category/:id", (schema, request) => {
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
    })

      this.get("/cart", (schema, request) => {
          const pageSize = 5

          const products = schema.db.products;

          if (Number(pageSize)) {
              const start = 0
              const end = Number(pageSize)
              const page = products.slice(start, end)

              return page
          }
          return products
          // return schema.products.all()
      })

    this.get("/products/:slug", (schema, request) => {
      let slug = request.params.slug
        
      const products = schema.db.products;
      return products.findBy({url_key: slug})
    })

    this.passthrough();
  },

  seeds(server) {
    // category
    categories.data.categoryList[0].children.map((item) => {
      server.create("category", item);
      return null;
    });

    // product
    productss.data.products.items.map((item) => {
      server.create("product", item);
      return;
    })
  }
});

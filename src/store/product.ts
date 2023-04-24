import { reactive } from 'vue'
import productService from '@/services/product'
import { product, productType } from '@/models/product'

export const useProductStore = reactive({
  productData: {
    filters: [],
    header: {},
    products: []
  } as product,

  async getAllProducts() {
    this.productData = await productService.getAllProducts();
  },

  getProductById(id:number) {
    return this.productData.products.find((product:productType) => product.id === id)
  }
})
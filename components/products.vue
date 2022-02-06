<template>
  <section>
    <div
      v-if="products"
      class="grid grid-cols-2 md:grid-cols-3 max-w-6xl text-sm"
    >
      <div v-for="category in products.items" :key="category.id">
        <div class="p-10 shadow-inner">
          <img :src="category.media_gallery[0].url" :alt="category.name" />
          <div class="flex flex-col items-center mt-2 text-center">
            <p>{{ category.name }}</p>
            <div class="flex flex-row font-bold">
              <p class="mr-1">
                {{ category.price_range.minimum_price.final_price.value }}
              </p>
              <p>
                {{ category.price_range.minimum_price.final_price.currency }}
              </p>
            </div>
            <button
              class="
                border border-gray-500
                hover:bg-gray-200
                rounded-3xl
                px-1
                md:px-3
                py-1
                mt-2
              "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-3">
      <pagination :pages="pages" @changepage="changePage" />
    </div>
  </section>
</template>

<script>
import products from '~/queries/products'
export default {
  name: 'products',
  data() {
    return {
      categoryUID: 'MTk=',
      pageSize: 6,
      currentPage: 1,
      pages: [],
    }
  },
  mounted() {
    this.getPagesArray()
  },
  methods: {
    getPagesArray() {
      let lastPageNumber = Math.ceil(this.products.total_count / this.pageSize)
      let page = 1
      for (let i = 0; i < lastPageNumber; i++) {
        this.pages.push(page)
        page++
      }
    },
    changePage(page) {
      this.$router.push({ params: { page: page } })
      this.currentPage = page
    },
  },
  apollo: {
    products: {
      prefetch: true,
      query: products,
      variables() {
        return {
          filters: {
            category_uid: {
              in: this.categoryUID,
            },
          },
          pageSize: this.pageSize,
          currentPage: this.currentPage,
        }
      },
    },
  },
}
</script>

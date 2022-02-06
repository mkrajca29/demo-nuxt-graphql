<template>
  <article>
    <p v-for="product in products" :key="product.id">{{ product }}</p>
  </article>
</template>

<script>
import products from '~/queries/products'
export default {
  async asyncData({ app, route, redirect }) {
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: products,
        variables: {
          filters: {
            category_uid: {
              in: route.params.id,
            },
          },
        },
      })
      return {
        page: data.products.content,
      }
    } catch (error) {
      console.log('error:', error)
      alert(error)
      redirect('/')
    }
  },
}
</script>

<style>
</style>
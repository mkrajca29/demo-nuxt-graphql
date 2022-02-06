<template>
  <nav class="text-sm">
    <div
      class="flex md:hidden items-center justify-between mx-5 p-4"
      @click="navVisible = !navVisible"
    >
      <div
        class="
          flex
          w-max
          p-4
          border border-gray-300
          hover:bg-gray-300
          rounded-xl
          cursor-pointer
        "
      >
        <img src="@/assets/nav.svg" alt="navigation" />
        <p class="ml-2 font-bold">CATEGORIES</p>
      </div>
      <h1 class="text-3xl">ESHOP</h1>
    </div>
    <div v-if="categories && navVisible" class="md:flex flex-col mx-5 p-2">
      <div
        v-for="category in categories.items"
        :key="category.id"
        class="p-2 border-t border-gray-200 hover:bg-gray-200"
      >
        <nuxt-link :to="'/category/' + category.uid"
          ><p>{{ category.name }}</p>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import categories from '~/queries/categories'
export default {
  name: 'categories',
  data() {
    return {
      navVisible: true,
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categories,
      variables() {
        return {
          filters: {},
        }
      },
    },
  },
}
</script>

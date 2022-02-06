<template>
  <nav>
    <ul class="flex list-style-none">
      <li class="page-item">
        <a
          class="
            relative
            block
            py-1.5
            px-3
            rounded
            border-0
            bg-transparent
            outline-none
            transition-all
            duration-300
            text-gray-800
          "
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in pages" :key="page" @click="changePage(page)">
        <a
          class="
            relative
            block
            py-1.5
            px-3
            border-0
            bg-transparent
            outline-none
            transition-all
            duration-300
            rounded
            text-gray-800
            hover:text-gray-800 hover:bg-gray-200
            focus:shadow-none
          "
          href="#"
          >{{ page }}</a
        >
      </li>
      <li class="page-item">
        <a
          class="
            relative
            block
            py-1.5
            px-3
            border-0
            bg-transparent
            outline-none
            transition-all
            duration-300
            rounded
            text-gray-800
          "
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    changePage(page) {
      this.$emit('changepage', page)
    },
  },
}
</script>

<style>
</style>
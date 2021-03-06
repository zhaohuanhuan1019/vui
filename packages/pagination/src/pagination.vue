<template>
  <ul class="vu-pagination" :class="{ 'vu-pagination-simple': !isMultiMode }">
    <li
      class="vu-pagination__item vu-pagination__prev vu-hairline"
      :class="{ 'vu-pagination--disabled': value === 1 }"
      @click="selectPage(value - 1)"
    >
      {{prevText}}
    </li>
    <li
      v-if="isMultiMode"
      v-for="(page, index) in pages"
      :key="index"
      class="vu-pagination__item vu-pagination__page vu-hairline"
      :class="{ 'vu-pagination--active': page.active }"
      @click="selectPage(page.number)"
    >
      {{ page.text }}
    </li>
    <li v-if="!isMultiMode" class="vu-pagination__page-desc">
      <slot name="pageDesc">{{ pageDesc }}</slot>
    </li>
    <li
      class="vu-pagination__item vu-pagination__next vu-hairline"
      :class="{ 'vu-pagination--disabled': value === computedPageCount }"
      @click="selectPage(value + 1)"
    >
      {{nextText}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'vu-pagination',

  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    },
    totalItems: {
      type: Number,
      default: 0
    }
  },

  computed: {
    isMultiMode () {
      return this.mode === 'multi';
    },

    computedPageCount () {
      const count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },

    pageDesc () {
      return this.value + '/' + this.computedPageCount;
    },

    pages () {
      const pages = [];
      const pageCount = this.computedPageCount;

      // Default page limits
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      }

      // Add page number links
      for (let number = startPage; number <= endPage; number++) {
        const page = this.makePage(number, number, number === this.value);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          const previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          const nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },

  created () {
    this.selectPage(this.value);
  },

  watch: {
    value (page) {
      this.selectPage(page);
    }
  },

  methods: {
    selectPage (page) {
      page = Math.max(1, page);
      page = Math.min(this.computedPageCount, page);
      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    },

    makePage (number, text, active) {
      return { number, text, active };
    }
  }
};
</script>

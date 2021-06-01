<template>
  <div class="text-center" v-if="objects.num_pages > 1">
    <div class="text-xs-center" v-if="$screen.width > 800">
      <div class="row justify-center">
        <div class="col col-8">
          <div class="max-width">
            <ul class="my-4 v-pagination">
              <li>
                <button type="button" class="v-pagination__navigation" @click="previousPage"
                        v-bind:class="{ 'v-pagination__navigation--disabled': objects.previous===null}">
                  <v-icon>mdi-chevron-left</v-icon>
                </button>
              </li>
              <li v-for="(page_numeration, key) in objects.num_pages" :key="key">
                <button type="button" class="v-pagination__item"
                        @click="selectPage(page_numeration)"
                        v-if="Math.abs(page_numeration - current_page) < 5 || page_numeration === objects.num_pages || page_numeration === 1"
                        :class="{primary: current_page === page_numeration,'v-pagination__item--active': current_page === page_numeration, last: (page_numeration === objects.num_pages  && Math.abs(page_numeration - current_page) > 5), first:(page_numeration === 1 && Math.abs(page_numeration - current_page) > 5)}"
                >
                  {{ page_numeration }}
                </button>
              </li>
              <li>
                <button type="button" class="v-pagination__navigation" @click="nextPage"
                        v-bind:class="{ 'v-pagination__navigation--disabled': objects.next===null}">
                  <v-icon theme="dark">mdi-chevron-right</v-icon>
                </button>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-xs-center" v-else>
      <div class="row justify-center">
        <div class="col col-8">
          <div class="max-width">
            <ul class="my-4 v-pagination">
              <li>
                <button type="button" class="v-pagination__navigation" @click="previousPage"
                        v-bind:class="{ 'v-pagination__navigation--disabled': objects.previous===null}">
                  <v-icon>mdi-chevron-left</v-icon>
                </button>
              </li>
              <li>
                <button type="button" class="v-pagination__navigation" @click="nextPage"
                        v-bind:class="{ 'v-pagination__navigation--disabled': objects.next===null}">
                  <v-icon theme="dark">mdi-chevron-right</v-icon>
                </button>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Pagination",
  props: {
    objects: Object,
    current_page: Number,
    getData: {type: Function},
  },
  methods: {
    async nextPage() {
      await this.$emit('pageChanged', this.current_page + 1);
      await this.getData()
    },
    async previousPage() {
      await this.$emit('pageChanged', this.current_page - 1);
      await this.getData()
    },
    async selectPage(pageNumeration) {
      await this.$emit('pageChanged', pageNumeration);
      await this.getData()
    },
  },
}
</script>

<style scoped>
.v-datatable__actions__range-controls {
  width: 100% !important;
}

.v-datatable__actions__pagination {
  width: 100% !important;
}

li {
  display: inline;
}

button.first::after {
  content: '...'
}

button.last::before {
  content: '...'
}

button.last {
  width: max-content !important;
}

.v-pagination__item--active {
  background-color: #F46D6D;
  border-color: #F46D6D;
  color: white;
}

.v-pagination__item:focus {
  outline: none;
}
</style>

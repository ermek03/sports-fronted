<template>
  <v-app>
    <v-dialog v-model="show.open" transition="dialog-bottom-transition" :retain-focus="false" width="800" @click:outside="e => close_handler(e)">
      <v-card v-if="!$store.state.loading">
        <v-toolbar>
          <v-toolbar-title>Подробная информация</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="black" icon dark @click.stop="$emit('close');">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-title class="headline">
          <img :src="object.image" style=" width: 100%;
            object-fit: cover; border-radius: 10px;
          border: 0.5px solid #BDBDBD;"
               v-if="object.image"
          >

          {{ object.title }}
        </v-card-title>

        <v-card-text v-for="(desc,key) in object.description" :key="key">
          {{ desc }}
        </v-card-text>
        <v-card-actions>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
              </v-flex>
              <v-spacer></v-spacer>
              <v-btn color="orange_color darken-1" text @click.stop="$emit('close');">Закрыть</v-btn>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="orange_color"
          ></v-progress-circular>
        </div>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  props: {
    dialog: {type: Object},
  },
  data() {
    return {
      object: {},
    }
  },
  methods: {
    async getItem() {
      this.$store.state.loading = true
      this.object = await this.$repositories.news.detail(this.dialog.id)
      this.$store.state.loading = false
    },
    close_handler(event) {
      this.$emit('close');
    }
  },
  computed: {
    show() {
      return this.dialog;
    },
  },
  mounted() {
    this.getItem()
  }
};
</script>

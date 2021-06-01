<template>
  <v-app>
    <v-dialog v-model="show" persistent transition="dialog-bottom-transition" :retain-focus="false" width="800">
      <v-card v-if="!$store.state.loading">
        <v-toolbar color="orange_color">
          <v-toolbar-title>Оставить отзыв</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click.stop="$emit('close');">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-form ref="entryForm" @submit.prevent="addItem()">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 lg12 md12>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm12 lg12 md12>
                        <v-text-field
                          label="Логин"
                          v-model="form.email"
                          clearable
                          filled
                          :rules="[
                            v => !!v || 'E-mail is required',
                            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                          ]"
                          prepend-icon="mdi-badge-account-outline"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 lg12 md12>
                        <v-text-field
                          label="Адрес:"
                          v-model="form.user_name"
                          clearable
                          filled
                          :rules="[v => !!v || 'Это поле обязательное',]"
                          prepend-icon="mdi-office-building-marker"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 lg12 md12>
                        <v-textarea
                          label="Описание"
                          placeholder="Описание"
                          v-model="form.text"
                          rows="3"
                          filled
                          :rules="[v => !!v || 'Это поле обязательное',]"
                          prepend-icon="mdi-card-text-outline"
                        ></v-textarea>
                      </v-flex>

                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                </v-flex>
                <v-spacer></v-spacer>
                <v-btn color="orange_color darken-1" text @click.stop="$emit('close');">Закрыть</v-btn>
                <v-btn color="orange_color darken-1" text type="submit" :loading="loading">Сохранить</v-btn>
              </v-layout>
            </v-container>
          </v-card-actions>
        </v-form>
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
    getData: {type: Function},
    dialog: Boolean,
  },
  data() {
    return {
      form: {
        user_name: '',
        email: '',
        text: '',
        is_active: false,
      },

      loading: false,
    };
  },
  methods: {
    async addItem() {
      this.loading = true
      if (this.$refs.entryForm.validate()) {
        let response = await this.$repositories.feedback.add(this.form)
        if (response) {
          await this.$refs.entryForm.reset()
          await this.$emit('close');
          await this.getData()
        }
      }
      this.loading = false
    },
  },
  computed: {
    show: {
      get() {
        return this.dialog;
      },
      set(name) {
        return name
      }
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0 !important;
}
</style>

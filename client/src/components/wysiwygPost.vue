<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="max-width: 1300px; width: 800px;">

        <q-card-section class="text-h5">Edit</q-card-section>

        <q-card-section>
            <q-input 
                v-model="title"
                outlined
                label="Post Title"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Your title cannot be empty']"
                >

                </q-input>
       <q-editor v-model="editor" min-height="5rem" />

        </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    text: String,
    textTitle: String
  },
  data () {
      return {
          editor: this.text,
          title: this.textTitle
      }
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show () {
      this.$refs.dialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    },

    onOKClick () {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok', {description: this.editor, title: this.title})
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide()
    },

    onCancelClick () {
      // we just need to hide dialog
      this.hide()
    }
  }
}
</script>
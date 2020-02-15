<template>

    <v-dialog
            v-model="dialog"
            max-width="290"
            content-class="dialog-logout"
            :attach="attach" >
        <div class="dialog-logout__container">
            <div class="dialog-logout__content">
                <slot></slot>
            </div>
            <div class="dialog-logout__nav">
                <template v-if="cancelBtn">
                    <div class="dialog-logout__nav-btn" @click="$emit('close')" >
                        {{cancelBtn}}
                    </div>
                </template>
                <template v-if="submitBtn">
                    <div class="dialog-logout__nav-btn" @click="$emit('success')">
                        {{submitBtn}}
                    </div>
                </template>
            </div>
        </div>
    </v-dialog>

</template>

<script>

    export default {
        name: 'AppDialogWindow',
        data() {
            return {}
        },
        props: {
            status: Boolean,
            cancelBtn: {
                type: String,
                default: 'Отмена',
            },
            submitBtn: {
                type: String,
                default: 'Да',
            },
            attach: {
                type: String,
                default: '',
            },
        },
        computed: {
            dialog: {
                get() {
                    return this.status
                },
                set(val) {
                    this.$emit('change', val)
                }
            }
        },
        methods: {}
    }
</script>


<style>

</style>

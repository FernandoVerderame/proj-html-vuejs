<script>
import GenericButton from '../generics/GenericButton.vue'

export default {
    name: 'FooterForm',
    data: () => ({
        searchTerm: ''
    }),
    props: { placeholder: String },
    emits: ['submit-form'],
    components: { GenericButton }
}
</script>

<template>
    <form @submit.prevent="$emit('submit-form', searchTerm)">
        <div class="input-group">
            <input type="email" class="form-control" v-model.trim="searchTerm" :placeholder="placeholder">
        </div>
        <div class="button-group mt-2">
            <GenericButton buttonText="Subscribe &#8594;" class="white" />
        </div>
    </form>
</template>

<style lang="scss" scoped>
.form-control {
    width: 100%;
    height: 70px;
    border-radius: 50px;
    border: 0;
    padding: 0 30px;
}

.button-group {
    button {
        width: 100%;
        height: 70px;
        border-radius: 50px;
        background-color: #fff;
    }
}
</style>
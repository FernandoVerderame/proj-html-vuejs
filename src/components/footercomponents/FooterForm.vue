<script>
export default {
    name: 'FooterForm',
    data: () => ({
        searchTerm: ''
    }),
    props: { placeholder: String },
    emits: ['submit-form']
}
</script>

<template>
    <form @submit.prevent="$emit('submit-form', searchTerm)">
        <div class="input-group">
            <input type="text" class="form-control" v-model="searchTerm" :placeholder="placeholder">
        </div>
        <div class="button-group mt-2">
            <button class="btn">Subscribe &#8594;</button>
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
        color: #062860;
    }
}
</style>
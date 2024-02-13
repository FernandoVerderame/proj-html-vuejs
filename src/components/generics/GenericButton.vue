<script>
export default {
    name: 'GenericButton',
    props: {
        buttonText: String,
    }
}
</script>

<template>
    <button>
        <a href="#">
            {{ buttonText }}
        </a>
    </button>
</template>

<style lang="scss" scoped>
button {
    color: white;
    border-radius: 27px;
    font-weight: 600;
    padding: 0 50px;
    line-height: 70px;
    margin: 0.5rem 0 2rem;
}

button.black {
    background-color: black;
    border: 1px solid;
}

button.transparent {
    background-color: transparent;
    border: 1px solid white;
}

a {
    text-decoration: none;
    color: white;
    line-height: 70px;
}
</style>
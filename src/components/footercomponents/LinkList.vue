<script>
export default {
    name: 'LinkList',
    props: { link: Object },
    computed: {
        upperCaseLink() {
            return this.link.text.toUpperCase()
        }
    }
}
</script>

<template>
    <li><a :href="link.url">{{ upperCaseLink }}</a></li>
</template>

<style lang="scss" scoped>
li {
    list-style-type: none;
    margin: 10px 0;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
    }
}

li:before {
    content: "";
    width: 10px;
    height: 5px;
    display: inline-block;
    background-color: #fff;
    margin-right: 10px;
}
</style>
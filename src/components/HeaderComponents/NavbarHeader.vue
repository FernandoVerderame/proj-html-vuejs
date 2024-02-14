<script>
export default {
    name: 'NavbarHeader',
    props: { headerLinks: Array }
}

</script>

<template>
    <nav class="d-flex align-items-center justify-content-center mt-4">
        <!--HEADER'S LINKS-->
        <ul class="header-links d-flex align-items-cente gap-5 list-unstyled">
            <li class="text-white fw-bold" v-for="link in headerLinks" :key="link.id">
                <a href="#" class="text-decoration-none text-white">{{ link.text.toUpperCase() }}</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.header-links li {
    border-bottom: 2px solid transparent;
    transition: all 1s linear;
}


.header-links li:hover {
    border-bottom: 2px solid white;
}
</style>
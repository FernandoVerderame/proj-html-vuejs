<script>
export default {
    name: 'NavbarHeader',
    data: () => ({
        headerLinks: [
            {
                text: 'Home',
                url: '#',
                current: false,
            },
            {
                text: 'Fixtures & results',
                url: '#',
                current: true,
            },
            {
                text: 'league table',
                url: '#',
                current: false,
            },
            {
                text: 'players',
                url: '#',
                current: false,
            },
            {
                text: 'gallery',
                url: '#',
                current: false,
            },
            {
                text: 'blog',
                url: '#',
                current: false,
            },
            {
                text: 'contact',
                url: '#',
                current: false,
            },
        ]
    })
}

</script>

<template>
    <nav class="d-flex align-items-center justify-content-center mt-4">
        <!--HEADER'S LINKS-->
        <ul class="header-links d-flex align-items-cente gap-5 list-unstyled">
            <li class="text-white fw-bold" v-for="(link, i) in headerLinks" :key="i">
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
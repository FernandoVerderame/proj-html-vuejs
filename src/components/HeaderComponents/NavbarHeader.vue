<script>
export default {
    name: 'NavbarHeader',
    data: () => ({
        links: [
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
    <nav class="d-flex align-items-center justify-content-center mt-3">
        <!--HEADER'S LINKS-->
        <ul class="header-links d-flex align-items-cente gap-5 list-unstyled">
            <li class="text-white" v-for="(link, i) in links" :key="i">{{ link.text.toUpperCase() }}</li>
        </ul>
    </nav>
</template>

<style></style>
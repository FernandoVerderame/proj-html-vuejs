<script>
export default {
    name: 'PlayerCard',
    props: {
        player: Object
    },
    computed: {
        playerSrc() {
            const url = new URL(`../../assets/img/${this.player.src}`, import.meta.url);
            return url.href;
        },
        number() {
            return this.player.shirtNumber < 10 ? this.player.shirtNumber = '0' + this.player.shirtNumber : this.player.shirtNumber
        }
    }
}
</script>

<template>
    <div class="player-card">
        <figure>
            <img :src="playerSrc" :alt="player.name" class="img-fluid">
            <div class="player-info">
                <h6>{{ number }}</h6>
                <p>{{ player.name }} - {{ player.role }}</p>
            </div>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
.player-card {
    position: relative;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    padding-bottom: 50px;


    &:hover img {
        scale: 1.05;
    }

    &:hover .player-info {
        scale: 1;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(-35%);
    }


    figure {
        // overflow: hidden;

        img {
            border-radius: 20px;
            transition: all 0.4s linear;

        }
    }

    .player-info {
        padding: 20px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(-40%);
        background-color: #000;
        transition: all 0.4s linear;

        border-radius: 20px;

        h6 {
            font-size: 20px;
            font-weight: 600;
        }

        p {
            font-weight: 400;
            opacity: 0.7;
            font-size: 18px;
            margin: 0;
        }
    }

}
</style>
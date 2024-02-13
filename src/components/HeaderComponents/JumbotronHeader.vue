<script>
export default {
    name: 'JumbotronHeader',
    data: () => ({
        slider: [
            {
                id: 1,
                image: 'slider1-1.jpg',
                primaryText: 'Welcome To Football Club',
                description: 'Live match fix types and results'
            },
            {
                id: 2,
                image: 'slider2-1.jpg',
                primaryText: 'Football Club Sport Club',
                description: 'Football is a head game'
            },
            {
                id: 3,
                image: 'slider3.jpg',
                primaryText: 'Professional Football Football Club',
                description: 'Football is the poetry of movement'
            },
            {
                id: 4,
                image: 'slider4.jpg',
                primaryText: 'Football Club Sport Club',
                description: 'Football is a head game'
            },

        ],
        currentIndex: 0,
    }),

    computed: {
        lastIndex() {
            return this.slider.length - 1
        },
    },

    methods: {
        goNextIndex() {
            if (this.currentIndex === this.lastIndex) this.currentIndex = 0
            else {
                this.currentIndex++
            }
        },

        goPrevIndex() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.lastIndex
            } else {
                this.currentIndex--
            }
        },

        // createImagePath(image) {
        //     const url = new URL(`../../assets/img/${image}`, import.meta.url);
        //     console.log(url)
        //     return url.href
        // }
    }
}

</script>

<template>
    <div class="jumbotron">
        <figure v-for="(slide, i) in slider" :key="i" :class="{ active: i === currentIndex }">
            <img class="jumbotron-img" :src="`src/assets/img/${slide.image}`" alt="">
            <div class="jumbotron-text text-center lh-sm container-jumbotron">
                <p class="big-text">{{ slide.primaryText }}</p>
                <p class="fw-bold">{{ slide.description }}</p>
                <button class="mt-3">Learn More</button>
            </div>
        </figure>
        <div class="round button-slider prev" role="button" @click="goPrevIndex">
            <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
        </div>
        <div class="round button-slider next" role="button" @click="goNextIndex">
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    position: relative;
    height: 900px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.jumbotron-text {
    position: absolute;
    bottom: 30px;
    color: white;
    left: 50%;
    transform: translate(-50%, -50%);
}

.big-text {
    font-size: 5rem;
    font-weight: bold;
}

p {
    margin: 0;
}

.button-slider {
    position: absolute;
    top: 50%;
    font-size: 1rem;
    color: white;
    border-radius: 50%;
    border: 1px solid white;
    padding: 10px 15px;
}

.next {
    right: 50px;
}

.prev {
    left: 50px;
}

.container-jumbotron {
    width: 40%;
}

figure {
    height: 100%;
    display: none;
}

figure.active {
    display: block;
}
</style>
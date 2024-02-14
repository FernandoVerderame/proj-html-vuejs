<script>
import JumbotronFigure from './JumbotronFigure.vue'
export default {
    name: 'JumbotronHeader',
    components: { JumbotronFigure, },
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
        intervall: null,
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
            };
            clearInterval(this.intervall);
            this.autoPlay()
        },

        autoPlay() {
            this.intervall = setInterval(() => {
                this.goNextIndex()
            }, 2000)
        },

        goPrevIndex() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.lastIndex
            } else {
                this.currentIndex--
            };
            clearInterval(this.intervall);
            this.autoPlay()
        },
    },

    created() {
        this.autoPlay()
    }
}

</script>

<template>
    <div class="jumbotron">
        <JumbotronFigure v-for="(slide, i) in slider" :key="slide.id" :slide="slide"
            :class="{ active: i === currentIndex }" />
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

figure.active {
    display: block;
}
</style>
<script>
import ArticlesCard from './ArticlesCard.vue';
import { store } from "../../assets/data/store.js";

export default {
    name: 'ArticlesSection',
    data: () => ({
        articles: store.articles,
        activeIndex: 1,
        interval: null,
    }),
    computed: {
        visibleCard() {
            const visibleCards = [...this.articles]
            switch (this.activeIndex) {
                case 2:
                    visibleCards.shift();
                    break;
                case 3:
                    visibleCards.shift();
                    visibleCards.shift();
                    visibleCards.push(this.articles[0]);
                    break;
                case 4:
                    visibleCards.shift();
                    visibleCards.shift();
                    visibleCards.shift();
                    visibleCards.push(this.articles[0]);
                    visibleCards.splice(3, 1, this.articles[1])
                    break;
                default:
                    visibleCards.pop();
            }
            return visibleCards
        }

    },

    components: { ArticlesCard },
    methods: {
        autoPlay() {
            this.interval = setInterval(() => {
                this.activeIndex++
                if (this.activeIndex > 4) {
                    this.activeIndex = 1
                }
            }, 3000);
        },

        setIndex(n) {
            this.activeIndex = n;
            clearInterval(this.interval);
            this.autoPlay()

        }

    },
    created() {
        this.autoPlay();
    }


};
</script>

<template>
    <section id="articles" class="pt-5">
        <div class="container">
            <div class="text-center">
                <img class="flat-icon mb-3" src="../../assets/img/recommended (1).png" alt="">
                <h3 class="fw-bold">Resent New & Articles</h3>
                <p>Be aware of the football world</p>
            </div>
            <div id="carousel">
                <div class="row gx-2">
                    <div class="col col-3" v-for="article in visibleCard" :key="article.id">
                        <ArticlesCard :article="article" />
                    </div>
                </div>
                <div class="button-container">
                    <div class="carousel-button" v-for="n in 4" :key="n" role="button"
                        :class="{ active: n === activeIndex }" @click="setIndex(n)"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#carousel {
    overflow: hidden;
}

.col {
    height: 100%;
}

.card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 20px;
    box-shadow: 3px 3px 13px 0 rgba(0, 0, 0, 0.096);
    border: 0;
}

.flat-icon {
    width: 100px;
    height: 100px;
}

.button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;
    gap: 5px;
}

.carousel-button {
    height: 5px;
    width: 30px;
    border-radius: 5px;
    background-color: #ebebeb;
}

.carousel-button.active {
    width: 70px;
    background-color: black;
    transition: all 0.5s linear;
}

.disabled {
    display: none;
}

#articles {
    background-color: #fbfbfb;
}
</style>
<script>
import ArticlesCard from './ArticlesCard.vue';
export default {
    name: 'ArticlesSection',
    data: () => ({
        articles: [
            {
                id: 1,
                image: 'news1-1-150x150.png',
                date: '29.05.2022 - Football',
                title: 'What is Football?',
                text: 'Football is a sport that is known as a ball game and is loved by [...]'
            },
            {
                id: 2,
                image: 'news3-1-150x150.png',
                date: '29.05.2022 - Football',
                title: 'Football Rules',
                text: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]'
            },
            {
                id: 3,
                image: 'news2-1-150x150.png',
                date: '29.05.2022 - Football',
                title: 'Football Features',
                text: 'Football: It is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing [...]'
            },
            {
                id: 4,
                image: 'news4-1-150x150.png',
                date: '29.05.2022 - Football',
                title: 'Football Terms',
                text: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]'
            },
            {
                id: 5,
                image: 'news6-1-150x150.png',
                date: '29.05.2022 - Football',
                title: 'How many football players are there in the world?',
                text: 'According to this report, there are more than 301 thousand football clubs, over 1.752 million [...]'
            },
        ],

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
            }, 2000);
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
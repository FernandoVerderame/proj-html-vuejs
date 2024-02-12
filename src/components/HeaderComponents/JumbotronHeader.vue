<script>
export default {
    name: 'JumbotronHeader',

}

</script>

<template>
    <div class="jumbotron">
        <img class="jumbotron-img" src="../../assets/img/slider2-1.jpg" alt="">
        <div class="jumbotron-text text-center lh-sm">
            <p class="big-text">Football Club</p>
            <p class="big-text">Sport Club</p>
            <p class="fw-bold">Football is a head game</p>
            <button>Learn More</button>
        </div>
        <div>
            <font-awesome-icon class="button-slider prev" :icon="['fas', 'chevron-left']" />
        </div>
        <div>
            <i class="fa-solid fa-chevron-right button-slider next"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    position: relative;
    height: 700px;

    img {
        max-height: 100%;
        width: 100%;
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
    font-size: 3rem;
    border: 1px solid white;
    border-radius: 50%;

}

.next {
    right: 50px;
    transform: translateY(-50%, -50%);
}

.prev {
    left: 50px;
    transform: translateY(-50%, -50%);


}
</style>
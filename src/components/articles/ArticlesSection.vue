<script>
export default {
    name: 'ArticlesSection'
};
</script>

<template>
    <div class="container">
        <div class="text-center">
            <img class="flat-icon mb-3" src="../../assets/img/recommended (1).png" alt="">
            <h3 class="fw-bold">Resent New & Articles</h3>
            <p>Be aware of the football world</p>
        </div>
        <div id="carousel">
            <div class="row gx-2">
                <div class="col col-3">
                    <div class="card">
                        <img src="../../assets/img/news1-1-150x150.png" class="card-img-top" alt="...">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <div class="card-body">
                            <h5 class="card-title">What is Football?</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the
                                card's
                                content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col col-3">
                    <div class="card">
                        <img src="../../assets/img/news1-1-150x150.png" class="card-img-top" alt="...">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <div class="card-body">
                            <h5 class="card-title">What is Football?</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the
                                card's
                                content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col col-3">
                    <div class="card">
                        <img src="../../assets/img/news1-1-150x150.png" class="card-img-top" alt="...">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <div class="card-body">
                            <h5 class="card-title">What is Football?</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the
                                card's
                                content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col col-3">
                    <div class="card">
                        <img src="../../assets/img/news1-1-150x150.png" class="card-img-top" alt="...">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <div class="card-body">
                            <h5 class="card-title">What is Football?</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the
                                card's
                                content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col col-3">
                    <div class="card">
                        <img src="../../assets/img/news1-1-150x150.png" class="card-img-top" alt="...">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <div class="card-body">
                            <h5 class="card-title">What is Football?</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the
                                card's
                                content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#carousel {
    background-color: black;
    height: 500px;
    overflow: hidden;
}

.col {
    height: 100%;
    background-color: aquamarine;
}

.card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 20px;
}

.flat-icon {
    width: 100px;
    height: 100px;
}
</style>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'AppFooter'
};
</script>

<template>
    <!-- Footer -->
    <footer>

        <!-- Footer Top -->
        <div class="footer-top container py-4">
            <div class="row">
                <div class="col">
                    <div class="logo my-4">
                        <figure>
                            <img src="../assets/img/logo-footer-football.png" alt="Logo">
                        </figure>
                    </div>
                    <div class="info my-4">
                        <ul>
                            <li>
                                <p>New Jersey, USA</p>
                            </li>
                            <li>
                                <p>+1 (234) 567 89 10</p>
                            </li>
                            <li>
                                <p>example@example.com</p>
                            </li>
                        </ul>
                    </div>
                    <div class="social my-4">
                        <a href="#">
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" class="fa-2x" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" class="fa-2x" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" class="fa-2x" />
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="news"></div>
                    <div class="form"></div>
                </div>
                <div class="col footer-list">
                    <div class="education">
                        <h4>Education</h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom text-center py-4">
            <p class="mb-0">2022 Football Club - All Rights Reserved.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer-list {
    display: flex;
    gap: 40px;
}

.info {
    ul {
        list-style-type: none;
        padding: 0;
    }
}

.logo {
    img {
        height: 75px;
    }
}

.social {
    display: flex;
    gap: 20px;

    a {
        height: 40px;
        width: 60px;
        text-align: center;
        padding: 5px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        transition: border .4s linear;

        &:hover {
            border: 1px solid transparent;
        }
    }
}

footer {
    background-image: url('../assets/img/footer-bg-football.jpg');
    color: #fff;
}
</style>
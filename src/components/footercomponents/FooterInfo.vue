<script>
export default {
    name: 'FooterInfo'
}
</script>

<template>
    <div class="col col-3">
        <div class="logo mb-4">
            <figure>
                <img src="../../assets/img/logo-footer-football.png" alt="Logo">
            </figure>
        </div>
        <div class="info my-4">
            <ul>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" class="fa-2x" />
                    <p>New Jersey, USA</p>
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-phone-volume" class="fa-2x" />
                    <p>+1 (234) 567 89 10</p>
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" class="fa-2x" />
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
</template>

<style lang="scss" scoped>
.info {
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: flex;
        gap: 15px;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
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
</style>
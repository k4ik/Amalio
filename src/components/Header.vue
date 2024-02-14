<template>
    <nav class="menu-mobile" v-if="showMenu">
        <button class="close-btn" @click="closeMenu">
            <img src="../assets/images/close.png" alt="">
        </button>
        <router-link to="/" class="header-link" @click="closeMenu">Escola</router-link>
        <router-link to="/alunos" class="header-link" @click="closeMenu">Alunos</router-link>
        <router-link to="/docentes" class="header-link" @click="closeMenu">Docentes</router-link>
    </nav>
    <header class="header">
        <h1 class="header-logo">Amálio <span>Pinheiro</span></h1>
        <nav class="header-nav">
            <router-link to="/" class="header-link">Escola</router-link>
            <router-link to="/alunos" class="header-link">Alunos</router-link>
            <router-link to="/docentes" class="header-link">Docentes</router-link>
        </nav>

        <button class="hamburger-btn" @click="openMenu">
            <img src="../assets/images/hamburger.png" alt="">
        </button>
    </header>
    
</template>

<script>
    export default {
        methods: {
            closeMenu() {
                this.showMenu = false;
            },
            openMenu() {
                this.showMenu = true;
            }
        },
        data() {
            return {
                showMenu: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #424E61;

        .header-logo {
            color: #fff;
            font-size: 1.3em;
        
            span {
                color: rgb(141, 141, 235);
            }
        }

        
        .header-nav {
            display: flex;
            gap: 15px;

            .header-link {
                color: #fff;
                text-decoration: none;
                font-size: 1.1em;

                &:hover {
                    transition: .5s;
                    color: rgb(186, 186, 245);
                }
            }
        }

        @media screen and (max-width: 768px) {
            .header-nav {
                display: none;
            }
        }
        
    }

    .menu-mobile {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.692);
        z-index: 9;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .header-link {
            color: #fff;
            text-decoration: none;
            font-size: 1.2em;

            &:hover {
                transition: .5s;
                color: rgb(186, 186, 245);
            }
        }
    }
    
    .hamburger-btn {
        display: none;
        background: transparent;
        border: none;
        img {
            width: 30px;
            height: 35px;
        }
    }

    @media screen and (max-width: 768px) {
        .hamburger-btn {
            display: block;
        }
    }

    .close-btn {
        position: absolute;
        top: 5%;
        right: 5%;
        background: transparent;
        border: none;
        img {
            width: 20px;
            height: 20px;
        }
    }
</style>
<template>
    <header class="header">
        <h1 class="header-logo">Amálio <span>Pinheiro</span></h1>
        <nav class="header-nav">
            <router-link to="/" class="header-link">Escola</router-link>
            <router-link to="/alunos" class="header-link">Alunos</router-link>
            <router-link to="/docentes" class="header-link">Docentes</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        
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
    }
</style>
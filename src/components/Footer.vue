<template>
    <footer class="footer">
        <p>&copy; Amálio Pinheiro, {{ currentYear }}</p>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                currentYear: new Date().getFullYear()
        };
  }
    }
</script>

<style lang="scss" scoped>
    .footer {
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;

        p, a {
            color: #fff;
        }

        a {
            text-decoration: none;
            &:hover {
                transition: .5s;
                color: rgb(186, 186, 245);
            }
        }
    }
</style>
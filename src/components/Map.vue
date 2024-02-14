<template>
    <section class="map-section">
        <h2>Localize-nos Aqui</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.84234654659352!2d-50.177607764091015!3d-25.08569118286705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a6a9825f9b5%3A0x3dc987c296be5968!2sCol%C3%A9gio%20Estadual%20Prof.%20Am%C3%A1lio%20Pinheiro!5e0!3m2!1spt-BR!2sbr!4v1707859807476!5m2!1spt-BR!2sbr" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .map-section {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            margin-bottom: 20px;
        }

        iframe {
            max-width: 1100px;
            height: 300px;
            width: 100%;
            border: none;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.432);
        }
    }
</style>
<template>
    <main>
        <section class="home-section">
            <article>
                <h2>Sobre a Escola</h2>
                <p>O Colégio Estadual Professor Amálio Pinheiro oferece ensino para alunos do ensino fundamental, médio e EJA no Paraná. Fundado em 1978, tem como objetivo formar cidadãos críticos e conscientes.</p>
                <p>Conta com equipe capacitada, infraestrutura completa e variedade de atividades extracurriculares. Prepara os alunos para os desafios do futuro em ambiente acolhedor e dedicado ao aprendizado.</p>
            </article>
            <aside>
                <img src="../assets/images/image.png" alt="">
            </aside>
        </section>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .home-section {
        background: linear-gradient(#424E61, #4EBFE9);
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 20px 0;

        article {
            max-width: 450px;
            width: 100%;

            h2, p {
                color: #fff;
            }

            h2 {
                margin-bottom: 10px;
            }

            p {
                text-align: justify;
                margin-bottom: 5px;
            }
        }

        aside {
            img {
                max-width: 400px;
            }
        }
    }

    @media screen and (max-width: 880px) {
        .home-section {
            justify-content: center;
            padding: 40px;
            aside {
                display: none;
            }
        }

    }
</style>
<template>
  <Header />
  <main>
    <div class="Container" v-if="aluno">
      <div class="Box">
        <div class="ImgBox">
          <img :src="aluno.photo" :alt="aluno.name" />
        </div>
        <div class="social-links">
          <a :href="`https://github.com/${aluno.github}`" target="_blank"
            ><img src="../assets/images/github.png" class="icone" alt="Github"
          /></a>
          <a :href="`https://linkedin.com/in/${aluno.linkedin}`" target="_blank"
            ><img
              src="../assets/images/linkedin.png"
              class="icone"
              alt="LinkedIn"
          /></a>
          <a :href="`https://instagram.com/${aluno.instagram}`" target="_blank"
            ><img
              src="../assets/images/instagram.png"
              class="icone"
              alt="Instagram"
          /></a>
        </div>
        <div class="img-descricao">
          <h3>{{ aluno.name }}</h3>
          <span>{{ aluno.profession }}</span>
        </div>

      </div>
      <section class="informacoes-gerais">
        <h1>Informações Gerais</h1>
        <ul>
          <li>Idade: {{ aluno.age }} anos</li>
          <li>Residência: {{ aluno.residence }}</li>
          <li>Estado Civil: {{ aluno.marital_status }}</li>
          <li>Profissão: {{ aluno.profession }}</li>
        </ul>
      </section>
    </div>
  </main>
  <Footer />
</template>
  
  <script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      aluno: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://amalio-students-api.vercel.app/alunos"
      );
      const alunos = response.data;
      const alunoId = parseInt(this.$route.params.id);

      this.aluno = alunos.find((aluno) => parseInt(aluno.id) === alunoId);
    } catch (error) {
      console.error("Erro ao obter aluno:", error);
    }
  },
  components: {
    Header,
    Footer,
  },
};
</script>
  

  <style scoped>

  main {
    height: 650px;
    margin: 20px 0;
  }
.Container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.Container .Box {
  position: relative;
  max-width: 20rem;
  height: 20rem;
  margin: 3rem;
}

.ImgBox {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.5s ease-in-out;
}

.ImgBox img {
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  resize: both;
}

.social-links a {
  margin-left: 10px;
}

.Container .Box:hover .ImgBox {
  transform: translate(3.5, 3.5);
}

.Container .Box:hover .ImgBox {
  transform: translate(-1.5rem, -1.5rem);
}

.icone {
  position: relative;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
  width: 10%;
}

.icone img {
  margin-bottom: 20px;
}

.Box:hover .icone {
  opacity: 1;
}

.informacoes-gerais h1 {
  text-align: center;
  margin-top: 90px;
  margin-bottom: 20px;
}

.informacoes-gerais ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  list-style: none;
}

.informacoes-gerais li {
  margin-bottom: 10px;
}
</style>
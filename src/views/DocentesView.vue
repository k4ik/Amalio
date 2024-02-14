<template>
  <Header />
  <main>
    <div class="Container" v-for="teacher in teachers" :key="teacher.id">
      <div class="Box">
        <div class="ImgBox">
          <img :src="teacher.photo" :alt="teacher.name" />
        </div>
        <div class="Box-content">
          <div class="social-links">
            <a :href="`https://github.com/${teacher.github}`" target="_blank"
              ><img
                src="../assets/images/github.png"
                class="icone"
                alt="Github"
            /></a>
            <a
              :href="`https://linkedin.com/in/${teacher.linkedin}`"
              target="_blank"
              ><img
                src="../assets/images/linkedin.png"
                class="icone"
                alt="LinkedIn"
            /></a>
            <a
              :href="`https://instagram.com/${teacher.instagram}`"
              target="_blank"
              ><img
                src="../assets/images/instagram.png"
                class="icone"
                alt="Instagram"
            /></a>
          </div>
          <div class="img-descricao">
            <h3>{{ teacher.name }}</h3>
            <span>{{ teacher.profession }}</span>
          </div>
        </div>
      </div>
      <section class="informacoes-gerais">
        <h1>Informações Gerais</h1>
        <ul>
          <li>Profissão: {{ teacher.profession }}</li>
          <li>Residência: {{ teacher.residence }}</li>
          <li>Estado Civil: {{ teacher.marital_status }}</li>
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
      teachers: [],
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "https://amalio-students-api.vercel.app/docentes.php"
        );
        this.teachers = response.data;
      } catch (error) {
        console.error("Erro ao obter professores:", error);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
  
    
  
<style lang="scss" scoped>
  main {
    min-height: 800px;
  }

.Box {
  max-width: 350px;
  width: 100%;
  margin: 80px auto;
  padding: 10px;

  .ImgBox {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }

  .Box-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .social-links {
      display: flex;
      gap: 10px;
      img {
        width: 30px;
      }
    }
  }
}

.informacoes-gerais {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;

  h1 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    gap: 20px;
  }
}

@media screen and (max-width: 654px) {
  .informacoes-gerais {

    ul {
      grid-template-columns: auto auto;
      gap: 20px;
    }
  }
}

@media screen and (max-width: 425px) {
  .informacoes-gerais {

    ul {
      grid-template-columns: auto;
      gap: 10px;
    }
  }
}
</style>
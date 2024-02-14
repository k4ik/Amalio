<template>
  <Header />
  <h1>Quem são nossos estudantes?</h1>
  <main>
    <div class="card" v-for="student in students" :key="student.id">
      <router-link :to="`/alunos/${student.id}`">
        <img :src="student.photo" :alt="student.name" class="student-photo">
      </router-link>
      <div class="card-content">
        <p class="student-name">{{ student.name }}</p>
        <div class="card-links">
          <a :href="`https://github.com/${student.github}`" target="_blank"><img src="../assets/images/github.png" alt=""></a>
          <a :href="`https://linkedin.com/in/${student.linkedin}`" target="_blank"><img src="../assets/images/linkedin.png" alt=""></a>
          <a :href="`https://instagram.com/${student.github}`" target="_blank"><img src="../assets/images/instagram.png" alt=""></a>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
  import axios from 'axios';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    data() {
      return {
        students: [],
      }
    },
    methods: {
      async getData() {
        axios.get('https://amalio-students-api.vercel.app/index.php')
        .then(response => {
          this.students = response.data;
          console.log(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter alunos:', error);
      });
      }
    },
    mounted() {
      this.getData();
    },
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    font-size: 1.4em;
    margin-top: 40px;
  }

  main {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    gap: 20px;
    padding: 40px 0;
    min-height: 500px;

    .card {
      max-width: 180px;
      width: 100%;

    .student-photo {
      width: 100%;
      height: 250px;
      object-fit: cover;

    }
    .card-content {

      .student-name {
        text-align: center;
        margin-bottom: 5px;
      }

      .card-links {
        display: flex;
        justify-content: center;
        gap: 10px;

        img {
          width: 30x;
          height: 30px;
        }
      }
    }
  }
  }
</style>
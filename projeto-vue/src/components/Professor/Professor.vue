<template>
  <div>
    <titulo texto="Professores" />
    <table>
      <thead>
        <th>Cód.</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="professores.length">
        <tr v-for="(professor, index) in professores" :key="index">
          <td>{{professor.id}}</td>
            <router-link to="/alunos" tag="td" style="cursor: pointer">
              {{professor.nome}} {{professor.sobrenome}}
            </router-link>
          <td>3</td>
        </tr>
      </tbody>
      <tfoot v-else>Nenhum professor encontrado.</tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo";
export default {
  components: {
    Titulo
  },
  data() {
    return {
      professores: [
        { id: 1, nome: "Michael" },
        { id: 2, nome: "Frijoles" },
        { id: 3, nome: "Dunoho" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
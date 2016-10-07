<template>
  <div class="container">
    <todo-list :tarefas="tarefas"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components : {
    'todo-list' : TodoList
  },
  data () {
    return {
      tarefas : [
        {titulo: 'Ir pedalar', completo : false},
        {titulo: 'Pagar contas', completo : false},
        {titulo: 'Ir a feira', completo : true},
        {titulo: 'Carregar a bateria da lanterna', completo : false},
        {titulo: 'Aprender VueJS', completo : false}
      ]
    }
  }
}
</script>

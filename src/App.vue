<template>
  <div class="container">
    <todo-list :tarefas="tarefas"></todo-list>
  </div>
</template>

<script>
import firebase from 'firebase' 
import TodoList from './components/TodoList.vue'

export default {
  components : {
    'todo-list' : TodoList
  },
  mounted: function () {
    var vm = this;    
    firebase.database().ref('tarefas/').on('value', function(snapshot){
      //Limpa a matriz
      vm.tarefas = [];
      var objetos = snapshot.val();

      //Monta a lista de tarefas
      for(var propriedade in objetos){
        vm.tarefas.unshift({
          '.key' : propriedade,
          titulo : objetos[propriedade].titulo,
          completa : objetos[propriedade].completa
        })
      }
    });
  },
  data () {
    return {
      tarefas : []
    }
  }
}
</script>

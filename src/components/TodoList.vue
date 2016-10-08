<template>
    <div class="col-xs-12 col-ms-12 col-md-offset-3 col-md-5 col-lg-offset-3 col-lg-5">
      <h2>ToDo App VueJS 2</h2>
      <!--Formulário-->
      <form class="form" @submit.prevent="adicionarTarefa(novaTarefa)">
        <div class="input-group">
          <input type="text" class="form-control" v-model="novaTarefa">
          <span class="input-group-btn">
            <button type="submit" class="btn btn-default">
              <span class="glyphicon glyphicon-plus"> Adicionar</span>
            </button>
            </span>          
        </div>
       
      </form>
      <!-- Lista de tarefas -->
      <ul class="list-group">
        <li v-for="(tarefa, index) in tarefas" 
          class="list-group-item clearfix">
          <p class="lead" v-bind:class="{finalizada: tarefa.completa}"> 
            {{tarefa.titulo}}
          </p>
          <input v-model="tarefa.titulo"
                 v-show="editandoTarefa === index"
                 @blur="editarTarefa(tarefa)"
                 type="text">
          <div>
            <span class="pull-right">
              <button @click="editandoTarefa = index" 
                class="btn btn-default btn-xs">
                <span class="glyphicon glyphicon-pencil"></span>
              </button>
              <button @click="editarTarefa(tarefa)"
                      v-show="editandoTarefa === index"
                      class="btn btn-default btn-xs">
                <span class="glyphicon glyphicon-floppy-saved"></span>
              </button>
              <button @click="editarEstadoTarefa(true, tarefa)"
                      class="btn btn-primary btn-xs">
                <span class="glyphicon glyphicon-ok"></span>
              </button>
              <button @click="editarEstadoTarefa(false, tarefa)"
                      class="btn btn-primary btn-xs">
                <span class="glyphicon glyphicon-repeat"></span>
              </button>
              <button @click="eliminarTarefa(tarefa)"
                class="btn btn-danger btn-xs">
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </span>
          </div>
        </li>        
      </ul>  
    </div>
</template>

<script>

import firebase from 'firebase'

export default {
  data () {
    return {
      novaTarefa : null,
      editandoTarefa : null
    }
  },
  ready(){
      console.info('todo');
  },
  props : ['tarefas'],
  methods : {
    adicionarTarefa : function (tarefa){
      firebase.database().ref('tarefas/').push({
            titulo: tarefa,
            completa: false
      });
      this.novaTarefa = null;
    },
    eliminarTarefa : function(tarefa){
      firebase.database().ref('tarefas/'+ tarefa['.key']).remove();
    },
    editarEstadoTarefa : function (estado, tarefa){
      firebase.database().ref('tarefas/'+ tarefa['.key']).update({
            completa: estado ? true : false,
      });  
    },
    editarTarefa : function(tarefa){
      firebase.database().ref('tarefas/'+ tarefa['.key']).update({
            titulo: tarefa.titulo
      });  
      this.editandoTarefa = null;
    }
  }
}
</script>

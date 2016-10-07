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
          <p class="lead" v-bind:class="{finalizada: tarefa.completo}"> 
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
              <button @click="tarefa.completo = true"
                      class="btn btn-primary btn-xs">
                <span class="glyphicon glyphicon-ok"></span>
              </button>
              <button @click="tarefa.completo = false"
                      class="btn btn-primary btn-xs">
                <span class="glyphicon glyphicon-repeat"></span>
              </button>
              <button @click="eliminarTarefa(index)"
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
export default {
  data () {
    return {
      novaTarefa : null,
      editandoTarefa : null
    }
  },
  props : ['tarefas'],
  methods : {
    adicionarTarefa : function (tarefa){
      this.tarefas.unshift(
        {titulo: tarefa, completa : false}
      );
      this.novaTarefa = null;
    },
    eliminarTarefa : function(indice){
      this.tarefas.splice(indice, 1);
    },
    editarTarefa : function(tarefa){
      console.info(tarefa);
      this.editandoTarefa = null;
    }
  }
}
</script>

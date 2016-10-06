<template>
  <div class="container">
    <div class="col-xs-12 col-ms-12 col-md-offset-3 col-md-5 col-lg-offset-3 col-lg-5">
      <h2>ToDo App VueJS 2</h2>
      <!--Formulário-->
      <form class="form">
        <div class="input-group">
          <input type="text" class="form-control">
          <span class="input-group-btn">
            <button type="submit" class="btn btn-default">
              <span class="glyphicon glyphicon-plus"> Adicionar</span>
            </button>
            </span>          
        </div>        
      </form>
      <!-- Lista de tarefas -->
      <ul class="list-group">
        <li class="list-group-item clearfix">
          <p class="lead">
            Tarefa    
          </p>
          <div>
            <span class="pull-right">
              <button type="" class="btn btn-default btn-xs">
                <span class="glyphicon glyphicon-pencil"></span>
              </button>
              <button type="" class="btn btn-primary btn-xs">
                <span class="glyphicon glyphicon-ok"></span>
              </button>
              <button type="" class="btn btn-primary btn-xs">
                <span class="glyphicon glyphicon-repeat"></span>
              </button>
              <button type="" class="btn btn-danger btn-xs">
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </span>
          </div>
        </li>        
      </ul>  
    </div>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

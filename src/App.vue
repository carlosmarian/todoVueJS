<template>

  <div>
      <!-- DIV temporário depois será removido.-->
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a href="#" class="navbar-brand">Todo App</a>
          </div>
          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li >
                      <a @click="conectar" href="#">Conectar</a>
                  </li>

                  <li  class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <span class="glyphicon glyphicon-user"></span> 
                          <strong></strong>
                          <span class="glyphicon glyphicon-chevron-down"></span>
                      </a>

                      <ul class="dropdown-menu">
                          <li>
                              <div class="navbar-login">
                                  <div class="row">
                                      <div class="col-lg-4">
                                          <p class="text-center">
                                              
                                          </p>
                                      </div>
                                      <div class="col-lg-8">
                                          <p class="text-left"><strong></strong></p>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <div class="navbar-login navbar-login-session">
                                  <div class="row">
                                      <div class="col-lg-12">
                                          <p>
                                              <a @click="desconectar()" href="#" class="btn btn-danger btn-block">
                                                  Cerrar Sesion
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </div>
    <div class="container">
      <todo-list :tarefas="tarefas"></todo-list>
    </div>
  </div>
</template>

<script>
import {firebaseDb, firebaseAuth, firebaseProvedorGoogle} from './helpers/firebase/index'
import TodoList from './components/TodoList.vue'

export default {
  components : {
    'todo-list' : TodoList
  },
  mounted: function () {
    var vm = this;
    console.info('App.mounted');
    console.info(firebaseDb);
    
    firebaseDb.ref('tarefas/').on('value', function(snapshot){
      //Limpa a matriz
      vm.tarefas = [];
      var objetos = snapshot.val();
       console.info('firebaseDb.on');
      //Monta a lista de tarefas
      for(var propriedade in objetos){
        vm.tarefas.unshift({
          '.key' : propriedade,
          titulo : objetos[propriedade].titulo,
          completa : objetos[propriedade].completa
        })
      }
    }, function erro(error){
        console.info('ERRROOO');
        console.info(error);
    });

    firebaseAuth.onAuthStateChanged(function(user) {
      console.info('onAuthStateChanged');

      if (user) {
        console.info('Conectado', user);
      } else {
        console.warn('Não conectado');
      }
    });
  },
  data () {
    return {
      tarefas : [],
      autenticado : false,
      usuarioAtivo : null,
    }
  },
  methods : {
    conectar : function(){
        
      //var provider = new firebaseAuth.GoogleAuthProvider();
      //console.log(provider);
      console.log(firebaseProvedorGoogle);

      //firebase.auth().signInWithPopup(provider).then(function(result) {
      firebaseAuth.signInWithPopup(firebaseProvedorGoogle).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.info(result);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.warn(error);
      });
    },
    desconectar : function (){

    }  
  }
}
</script>

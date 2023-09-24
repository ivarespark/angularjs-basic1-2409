var app = angular.module("MyBasicApp",[]);

app.controller("BasicController",function ($scope) {
    $scope.nombre = "Ivan";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "buen tutorial",
            username: "usergood"
        },
        {
            comentario: "mal tutorial",
            username: "userbad"
        }
    ];
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }

});

/*
-- Angular versiones menores a 1.6
app.controller("ConController",function($scope,$http){
    $scope.posts = [];
    $http.get("http://jsonplaceholder.typicode.com/posts")
        .success(function(){
            console.log(data);
            $scope.posts = data;
        })
        .error(function(err){
            console.log(data);
        })

});
*/

app.controller("HttpController",function($scope,$http){
    $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts'
    }).then(function(response){
        console.log(response);
        $scope.posts = response.data;

    },function(error){
        console.log(error);
    });

    $scope.addPost = function(){
        $http({
            method:'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            body: JSON.stringify($scope.nuevoPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(function(response){
            $scope.posts.unshift($scope.nuevoPost);
            $scope.nuevoPost = {};
            alert(JSON.stringify(response));
        }, function(error){
            alert("Fallo peticion POST");
        });
    }
});
var myApp = angular.module('myApp', []);
myApp.controller('MyController', function MyControlle($scope,http) {
  $http.get("https://demo5514996.mockable.io/products").then(function(response){
    $scope.artists = artresponse.data;
  }
  );    
});

constructor(http: HttpClient){
  http.get<[User]>('https://jsonplaceholder.typicode.com/users').subscribe( res => {
      this.users = res;
  });
}

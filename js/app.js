var app = angular.module("myApp",['ngRoute']);

app.config(function($locationProvider,$routeProvider){    
    $routeProvider.when("/latihan-ralali/",{
        templateUrl:"index.html",
        controller:"myCtrl",
        controllerAs:"myApp"
    }).when("/latihan-ralali/menu.html",{
        templateUrl:"menu.html",
        controller:"myCtrl",
        controllerAs:"myApp"
    });
    $locationProvider.html5Mode(true);
});

app.controller("myCtrl", function($scope,$routeParams,$location){

$scope.articles=[{
      title:"Title number 1",
      id:"1",
      description:"Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
      author:"Galih",
      vote:"10",
      answer:"0",
      status:"up",
      answers:[]
  },
  {
      title:"Title number 2",
      id:"2",
      description:"Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
      author:"Ririn",
      vote:"11",
      answer:"2",
      status:"up",
      answers:[
        {
           author : "Agung",
           content : "dudududuudududududu",
           vote :"11",
           status:"down"
        },{
           author : "Meise",
           content : "lalallalala",
           vote :"-1",
           status:"neutral"
        }
      ]
  },
  {
      title:"Title number 3",
      id:"3",
      description:"Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
      author:"Bowo",
      vote:"22",
      answer:"1",
      status:"neutral",
      answers:[
        {
           author : "Ashari",
           content : "dedeeddededededede",
           vote :"-5",
           status:"neutral"
        }
      ]
  }];



    $scope.init=function(){
        // console.log($routeParams.id);

        for (i = 0; i < $scope.articles.length; i++){
            if($scope.articles[i].id == $routeParams.id){
                $scope.idx = $scope.articles[i];
                break;
            }
        }
    }


    $scope.up=function(){
      // console.log($scope.idx);
      if($scope.idx.status === 'up'){
        $scope.idx.status = 'neutral';
        $scope.idx.vote = Number($scope.idx.vote)-1;
      }else if($scope.idx.status=== 'neutral'){
        $scope.idx.status = 'up';
        $scope.idx.vote = Number($scope.idx.vote)+1;
      }else if($scope.idx.status=== 'down'){
        $scope.idx.status = 'up';
        $scope.idx.vote = Number($scope.idx.vote)+2;
      }
    }


   $scope.down=function(){
      // console.log($scope.idx);
      if($scope.idx.status === 'down'){
        $scope.idx.status = 'neutral';
        $scope.idx.vote = Number($scope.idx.vote)+1;
      }else if($scope.idx.status=== 'neutral'){
        $scope.idx.status = 'down';
        $scope.idx.vote = Number($scope.idx.vote)-1;
      }else if($scope.idx.status=== 'up'){
        $scope.idx.status = 'down';
        $scope.idx.vote = Number($scope.idx.vote)-2;
      }
    }






});
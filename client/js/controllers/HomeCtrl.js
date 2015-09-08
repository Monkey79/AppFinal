myModule.controller('HomeCtrl', function($scope, $state, $http) {
    console.log("==SOY HOME CONTROLLER==");

    $scope.myKeyWord = "";

    $scope.searchFormSubmitHndl = function() {
        console.log("SUBMITEASTE EL FORM--", this.myKeyWord);
        /*	$http.post('/meliProxy').success(
        		function(){
        			console.log("YES");
        		}
        	);*/
    }
});

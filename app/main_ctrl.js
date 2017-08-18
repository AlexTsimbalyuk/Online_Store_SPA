app.controller("main_ctrl", function($scope, $location){
	
	$scope.data = model; // каталог товаров
	
	$scope.cart = []; // купленные товары

	$scope.addToCart = function( x ) { 
	
		$scope.cart.push( x );
		$scope.getSumProductInCart();
		$scope.getTotalCost();
		$scope.displayCircle();
	}
	
	$scope.getSumProductInCart = function(){
		$scope.sumProductInCart = $scope.cart.length; // число купленных товаров
	}
	
	$scope.getTotalCost = function(){ // общая стоимость
		
		var totalCost = 0;
		
		angular.forEach( $scope.cart, function(elem){ 
			totalCost += elem.price;
		});
		return totalCost;  
	}
	
	$scope.delFromCart = function( x ){
		
		$scope.cart.splice( x, 1 );
		$scope.getSumProductInCart();
		$scope.displayCircle();
	}
	
	$scope.getOrder = function(){
		
		if ( $scope.sumProductInCart > 0 ){
			
			alert("Ваш заказ принят!");
			$scope.cart = [];
			$scope.getSumProductInCart();
			$scope.displayCircle();
			$location.path("/lego");

		} else {
			
			alert("Для оформления заказа - выберите товар!");
			$scope.displayCircle();
			$location.path("/lego");
		}
	}
	
	$scope.displayCircle = function(){
		
		var circle = angular.element(document.querySelector(".cart__round"));
		
		if ( $scope.sumProductInCart > 0 && $scope.sumProductInCart < 10 ) {
			
			$scope.removeElem = true;
			circle.css("padding", "5px 9px");
			
		} else if ( $scope.sumProductInCart > 9 ){
			
			$scope.removeElem = true;
			circle.css("padding", "5px 6px");
			
		} else {
			
			$scope.removeElem = false;
		}
	}
});
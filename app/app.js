var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/lego", {
			template: 
				`<div class="container" >
					<div class="toy" ng-repeat = "x in data | filter : 'lego_toys'">
						<div class="toy__img">
							<img src="{{ x.picture }}" />
						</div>
						<div class="toy__info">
							<h3 class="toy__info--title"> {{ x.name }} </h3>
							<span> {{ x.description }} <span>
							<div class="toy__info--price"> {{ x.price }} грн.</div>
						</div>
						<div class="icon ion-ios-cart-outline" data-title="Добавить в корзину" ng-click="addToCart(x)"></div>
					</div>
				</div>`
		})
		.when("/stuffed", {
			template: 
				`<div class="container" >
					<div class="toy" ng-repeat = "x in data | filter : 'stuffed_toys'">
						<div class="toy__img">
							<img src="{{ x.picture }}" />
						</div>
						<div class="toy__info">
							<h3 class="toy__info--title"> {{ x.name }} </h3>
							<span> {{ x.description }} <span>
							<div class="toy__info--price"> {{ x.price }} грн.</div>
						</div>
						<div class="icon ion-ios-cart-outline" data-title="Добавить в корзину" ng-click="addToCart(x)"></div>
					</div>
				</div>`
		})
		.when("/radio", {
			template: 
				`<div class="container" >
					<div class="toy" ng-repeat = "x in data | filter : 'radio_toys'">
						<div class="toy__img">
							<img src="{{ x.picture }}" />
						</div>
						<div class="toy__info">
							<h3 class="toy__info--title"> {{ x.name }} </h3>
							<span> {{ x.description }} <span>
							<div class="toy__info--price"> {{ x.price }} грн.</div>
						</div>
						<div class="icon ion-ios-cart-outline" data-title="Добавить в корзину" ng-click="addToCart(x)"></div>
					</div>
				</div>`
		})
		.when("/cart", {
			template: 
				`<div class="container" >
					<div class="cartVisible">
						<table class="cartVisible__buy">
							<tr>
								<td>Товар</td>
								<td>Цена, грн.</td>
								<td></td>
							</tr>
							<tr ng-repeat = "x in cart track by $index">
								<td> {{ x.name }} </td> 
								<td> {{ x.price }} </td> 
								<td>
									<div title="Удалить" class="cartVisible__buy--del ion-close" ng-click="delFromCart($index)"></div>
								</td>
							</tr>
							<tr class="cartVisible__sum">
								<td>Общая стоимость:</td>
								<td> {{ getTotalCost() }} </td>
								<td>
									<div title="Оформить заказ" class="cartVisible__sum--order ion-checkmark" ng-click="getOrder()"></div>
								</td>
							</tr>
						</table>
					</div>
				</div>`
		});
		$routeProvider.otherwise({redirectTo: "/lego"});
})
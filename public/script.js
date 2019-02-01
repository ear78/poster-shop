new Vue({
	el: "#app",
	data: {
		total: 0,
		products: [
			{id: 1, title: "Item 1", price: 8.99},
			{id: 2, title: "Item 2", price: 9.99},
			{id: 3, title: "Item 3", price: 10.99}
		],
		cart: [

		]
	},
	methods: {
		addToCart: function (product) {
			console.log(product.id);
			this.total += product.price;
			var found = false;

			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === product.id) {
					this.cart[i].qty++;
					found = true;
				}
			}
			if (!found) {
				this.cart.push({
					id: product.id,
					title: product.title,
					price: product.price,
					qty: 1
				});
			}
		}
	}
});
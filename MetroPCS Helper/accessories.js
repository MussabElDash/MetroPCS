var accessories = {
			'keys' : ['case', 'hp', 'tgs', 'popSocket', 'metro8gb', 'other8gb', '32gb', '3600', 'smallAtalax', 'mediumAtalax', 'bigAtalax'],
			'case' : {
				'cost' : 25,
				'limit' : 15
			},
			'hp' : {
				'cost' : 15,
				'limit' : 10
			},
			'tgs' : {
				'cost' : 15,
				'limit' : 10
			},
			'popSocket' : {
				'cost' : 15,
				'limit' : 10
			},
			'metro8gb' : {
				'cost' : 20,
				'limit' : 15
			},
			'other8gb' : {
				'cost' : 25,
				'limit' : 20
			},
			'32gb' : {
				'cost' : 40,
				'limit' : 30
			},
			'3600' : {
				'cost' : 30,
				'limit' : 20
			},
			'smallAtalax' : {
				'cost' : 49,
				'limit' : 40
			},
			'mediumAtalax' : {
				'cost' : 70,
				'limit' : 60
			},
			'bigAtalax' : {
				'cost' : 120,
				'limit' : 100
			},
			most: function(cost){
				var max = 0;
				var name;
				this.keys.forEach(function(elem){
					if(accessories[elem].limit > max && accessories[elem].limit < cost){
						max = accessories[elem].limit;
						name = elem;
					}
				});
				return name;
			},
		}

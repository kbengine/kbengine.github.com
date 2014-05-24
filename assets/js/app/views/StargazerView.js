define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	'use strict';

	var StargazerView = Backbone.View.extend({
		tagName: 'li',
		className: 'stargazer',
		template: _.template($('#stargazer').html()),

		render: function() {
			console.log("Stargazer: ", this.model);
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
	return StargazerView;
});

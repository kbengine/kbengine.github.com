define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	'use strict';

	var ForkView = Backbone.View.extend({
		tagName: 'li',
		className: 'fork',
		template: _.template($('#fork').html()),

		render: function() {
			console.log("fork: ", this.model);
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
	return ForkView;
});

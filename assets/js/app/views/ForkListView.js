define(['jquery', 'underscore', 'backbone', 'app/views/ForkView'], function($, _, Backbone, ForkView) {
	'use strict';

	var ForkListView = Backbone.View.extend({
		tagName: 'ul',
		className: 'clearfix',
		render: function() {
			this.collection.each(function(model) {
				var forkView = new ForkView({model: model});
				this.$el.append(forkView.render().el);
			}, this);
			return this;
		}
	});

	return ForkListView;
});

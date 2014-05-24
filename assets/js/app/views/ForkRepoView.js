define(['jquery', 'underscore', 'backbone', 'app/views/ForkListView'], function($, _, Backbone, ForkListView) {
	'use strict';

	var Repo = Backbone.View.extend({
		tagName: 'article',
		className: 'repo1 clearfix',
		template: _.template($('#repo1').html()),

		initialize: function() {
			this.model.on('change:forks', this.renderSubview, this);
		},

		render: function() {
			console.log("repo1: ", this.model);
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		renderSubview: function(model) {
			var forkListView = new ForkListView({collection: model.get('forks')});
			forkListView.render();
			this.$('.forks').html(forkListView.el);
		}
	});
	
	return Repo;
});

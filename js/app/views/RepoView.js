define(['jquery', 'underscore', 'backbone', 'app/views/StargazerListView'], function($, _, Backbone, StargazerListView) {
	'use strict';

	var RepoView = Backbone.View.extend({
		tagName: 'article',
		className: 'repo clearfix',
		template: _.template($('#repo').html()),

		initialize: function() {
			this.model.on('change:stargazers', this.renderSubview, this);
		},

		render: function() {
			console.log("Repo: ", this.model);
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		renderSubview: function(model) {
			var stargazerListView = new StargazerListView({collection: model.get('stargazers')});
			stargazerListView.render();
			this.$('.stargazers').html(stargazerListView.el);
		}
	});
	
	return RepoView;
});

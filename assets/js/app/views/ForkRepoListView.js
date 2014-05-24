define(['jquery', 'underscore', 'backbone', 'app/views/ForkRepoView'], function($, _, Backbone, ForkRepoView) {
	'use strict';

	var ForkRepoListView = Backbone.View.extend({
		el: $('#repos1'),

		render: function() {
			this.$el.html("");
			this.collection.each(function(model) {
				if(model.get("html_url") == 'https://github.com/kbengine/kbengine')
				{
					var repoView = new ForkRepoView({model: model});
					this.$el.append(repoView.render().el);
				}
			}, this);
			return this;
		}
	});

	return ForkRepoListView;
});

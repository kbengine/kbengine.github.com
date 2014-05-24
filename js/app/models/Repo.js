define(['jquery', 'underscore', 'backbone', 'app/collections/Stargazers'], function($, _, Backbone, Stargazers) {
	'use strict';

	var Repo = Backbone.Model.extend({
		initialize: function() {
			var stargazers = new Stargazers();
			stargazers.url = this.get('stargazers_url');

			var that = this;
			stargazers.fetch().complete(function() {
				that.set('stargazers', stargazers);
			});
		}
	});

	return Repo;
});
define(['jquery', 'underscore', 'backbone', 'app/collections/Stargazers'], function($, _, Backbone, Stargazers) {
	'use strict';

	var Repo = Backbone.Model.extend({
		initialize: function() {
			var stargazers = new Stargazers();
			stargazers.url = this.get('stargazers_url');

			stargazers.comparator = function(stargazer) {
				return Math.random()>0.5?(-1):1;
			};
				
			var that = this;
			stargazers.fetch().complete(function() {
				stargazers.sort(function(a,b){return Math.random()>0.5?(-1):1});
				that.set('stargazers', stargazers);
			});
			
			var forks = new Stargazers();
			forks.url = this.get('forks_url');
			
			forks.comparator = function(fork) {
				return Math.random()>0.5?(-1):1;
			};
			
			forks.fetch().complete(function() {
				forks.sort(function(a,b){return Math.random()>0.5?(-1):1});
				that.set('forks', forks);
			});
		}
	});

	return Repo;
});
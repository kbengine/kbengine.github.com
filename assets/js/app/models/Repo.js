define(['jquery', 'underscore', 'backbone', 'app/collections/Stargazers'], function($, _, Backbone, Stargazers) {
	'use strict';

	var Repo = Backbone.Model.extend({
		initialize: function() {
			var forks_count = this.get('forks_count');
			var stargazers_count = this.get('stargazers_count');
			
			var stargazers = new Stargazers();
			stargazers.url = this.get('stargazers_url') + "?per_page=36&page=" + ((Math.ceil(Math.random()*(stargazers_count / 26))) + 1);
			stargazers.comparator = function(stargazer, stargazer1) {
				return Math.random()>0.5?(-1):1;
			};
				
			var that = this;
			stargazers.fetch().complete(function() {
				stargazers.sort();
				that.set('stargazers', stargazers);
			});
			
			var forks = new Stargazers();
			forks.url = this.get('forks_url') + "?per_page=36&page=" + ((Math.ceil(Math.random()*(forks_count / 26))) + 1);
			
			forks.comparator = function(fork, fork1) {
				return Math.random()>0.5?(-1):1;
			};
			
			forks.fetch().complete(function() {
				forks.sort();
				that.set('forks', forks);
			});
		}
	});

	return Repo;
});
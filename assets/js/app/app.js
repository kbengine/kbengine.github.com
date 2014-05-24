define(['jquery', 'underscore', 'backbone', 'app/collections/Repos', 'app/views/RepoListView'],
	function($, _, Backbone, Repos, RepoListView) {
	'use strict';

	var App = {
		init: function() {
			var self = this;
			$(document).ready(function() {
				$('[data-action=search]').focus();
			});

			var url = 'https://api.github.com/users/kbengine/repos';
			var repos = new Repos();
			repos.url = url;
			repos.comparator = function(repo) {
				return -repo.get("stargazers_count");
			};
			repos.fetch().complete(function() {
				var repoListView = new RepoListView({collection: repos});
				repoListView.render();
			});
		}
	};

	return App;
});

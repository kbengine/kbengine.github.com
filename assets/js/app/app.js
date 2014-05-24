define(['jquery', 'underscore', 'backbone', 'app/collections/Repos', 'app/views/RepoListView', 'app/views/ForkRepoListView'],
function($, _, Backbone, Repos, RepoListView, ForkRepoListView) {
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

			repos.fetch().complete(function() {
				var repoListView = new RepoListView({collection: repos});
				repoListView.render();
				var repoListView = new ForkRepoListView({collection: repos});
				repoListView.render();
				
			});
		}
	};

	return App;
});

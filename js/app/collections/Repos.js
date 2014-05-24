define(['jquery', 'underscore', 'backbone', 'app/models/Repo'], function($, _, Backbone, Repo) {
	'use strict';

	var Repos = Backbone.Collection.extend({
		model: Repo
	});

	return Repos;
});
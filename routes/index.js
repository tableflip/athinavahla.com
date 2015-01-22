var _ = require('underscore'),
	keystone = require('keystone'),
	importRoutes = keystone.importer(__dirname)


// Import Route Controllers
var routes = {
	views: importRoutes('./views')
}
// Setup Route Bindings
exports = module.exports = function (app) {

  app.get('/', routes.views.index);
  app.get('/about(.html)?', routes.views.page('about'));
  app.get('/contact(.html)?', routes.views.page('contact'));
  app.get('/teaching(.html)?', routes.views.page('teaching'));
  app.get('/projects_current(.html)?', routes.views.projects_current);
  app.get('/projects_past(.html)?', routes.views.projects_past);	

}

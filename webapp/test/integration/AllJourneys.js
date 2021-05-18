/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 OrdersSet in the list
// * All 3 OrdersSet have at least one NavOrderItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"Pizza/BestInPizza/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Pizza/BestInPizza/test/integration/pages/App",
	"Pizza/BestInPizza/test/integration/pages/Browser",
	"Pizza/BestInPizza/test/integration/pages/Master",
	"Pizza/BestInPizza/test/integration/pages/Detail",
	"Pizza/BestInPizza/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Pizza.BestInPizza.view."
	});

	sap.ui.require([
		"Pizza/BestInPizza/test/integration/MasterJourney",
		"Pizza/BestInPizza/test/integration/NavigationJourney",
		"Pizza/BestInPizza/test/integration/NotFoundJourney",
		"Pizza/BestInPizza/test/integration/BusyJourney",
		"Pizza/BestInPizza/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
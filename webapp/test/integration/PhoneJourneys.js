/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"Pizza/BestInPizza/test/integration/NavigationJourneyPhone",
		"Pizza/BestInPizza/test/integration/NotFoundJourneyPhone",
		"Pizza/BestInPizza/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});
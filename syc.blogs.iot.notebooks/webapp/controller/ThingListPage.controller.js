sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("syc.blogs.iot.notebooks.controller.ThingListPage", {
		onInit: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("thinglistpage").attachMatched(this._onRouteMatched, this);
		},

		_onRouteMatched: function(oEvent) {
			sap.ui.getCore().byId("idBusy").close();
		},

		handleNavBackPress: function() {
			window.history.back();
		},

		onThingListPress: function(oEvent) {
			sap.ui.getCore().byId("idBusy").open();
			var oData = oEvent.getParameter("thing").getModel().oData;
			var sPath = oEvent.getParameter("thing").sPath.substr(1);
			var oObject = oData[sPath];
			this.getOwnerComponent().getRouter().navTo("analysispage", {
				thingId: oObject.ThingId,
				headerTitle: oObject.ThingName,
				subHeaderTitle: oObject.ThingExternalId
			});
		}

	});
});
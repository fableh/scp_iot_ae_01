sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("syc.blogs.iot.notebooks.controller.LandingPage", {

		zoomToMap: function(oEvent) {
			oEvent.getParameters().context = oEvent.getParameter("thing");
			this.byId("idMap").doMapZoom(oEvent);
		},

		oMultiRowSelect: function(oEvent) {
			sap.ui.getCore().byId("idBusy").open();
			var oThingObject = oEvent.getParameter("context").getParameters("thing").thingData;
			this.getOwnerComponent().getRouter().navTo("thingpage", {
				thingId: oThingObject.ThingId,
				thingType: oThingObject.ThingType,
				highSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.High || 0,
				mediumSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Medium || 0,
				lowSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Low || 0
			});
		},

		oMultiFooterSelect: function(oEvent) {
			sap.ui.getCore().byId("idBusy").open();
			this.getOwnerComponent().getRouter().navTo("thinglistpage", false);
		},

		oSingleHeaderSelect: function(oEvent) {
			sap.ui.getCore().byId("idBusy").open();
			var oThingObject = oEvent.getParameter("context").getParameters("thing").thingData;
			this.getOwnerComponent().getRouter().navTo("thingpage", {
				thingId: oThingObject.ThingId,
				thingType: oThingObject.ThingType,
				highSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.High || 0,
				mediumSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Medium || 0,
				lowSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Low || 0
			});
		},

		oSingleFooterSelect: function(oEvent) {
			sap.ui.getCore().byId("idBusy").open();
			var oThingObject = oEvent.getParameter("context").getParameters("thing").thingData;
			this.getOwnerComponent().getRouter().navTo("analysispage", {
				thingId: oThingObject.ThingId,
				headerTitle: oThingObject.ThingName,
				subHeaderTitle: oThingObject.ThingExternalId
			});
		},

	});
});
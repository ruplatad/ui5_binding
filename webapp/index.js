sap.ui.require([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
    ], function (XMLView, JSONModel, ResourceModel) {

    "use strict";
    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {

        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");
        sap.ui.getCore().setModel(oProductModel, "products");

        // Create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Ruplata",
            lastName: "Dewangan",
            enabled: true,
            panelHeaderText: "Data Binding Basics",
            address: {
                street: "Dietmar-Hopp-Allee 16",
                city: "Walldorf",
                zip: "69190",
                country: "Germany"
            },
            salesAmount: 12345.6789,
            priceThreshold: 10,
            currencyCode: "EUR"

        });
        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);

        // Create a resource bundle for language specific texts
        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n"
        });

        // Assign the model object to the SAPUI5 core using the name "i18n"
        sap.ui.getCore().setModel(oResourceModel, "i18n");

        // Display the XML view called "App"
        var oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        });

        // Register the view with the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);


        // Insert the view into the DOM
        oView.placeAt("content");

    });

});
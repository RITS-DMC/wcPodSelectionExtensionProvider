 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "ritsdmc-az12fc9w/execution/eu20-quality/web/dmc/cloud/sap/customdevplugin/wcPodSelectionExtensionProvider/LifecycleExtension",
    "ritsdmc-az12fc9w/execution/eu20-quality/web/dmc/cloud/sap/customdevplugin/wcPodSelectionExtensionProvider/PluginEventExtension",
    "ritsdmc-az12fc9w/execution/eu20-quality/web/dmc/cloud/sap/customdevplugin/wcPodSelectionExtensionProvider/PropertyEditorExtension",
    "ritsdmc-az12fc9w/execution/eu20-quality/web/dmc/cloud/sap/customdevplugin/utils/ExtensionUtilities",
    "ritsdmc-az12fc9w/execution/eu20-quality/web/dmc/cloud/sap/customdevplugin/utils/PodSelectionExtensionUtility"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities, ExtensionUtility) {
    "use strict";
    return PluginExtensionProvider.extend("ritsdmc-az12fc9w.execution.eu20-quality.web.dmc.cloud.sap.customdevplugin.wcPodSelectionExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
            this.oExtensionUtility = new ExtensionUtility();
        },
        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtilities, this.oExtensionUtility);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtilities, this.oExtensionUtility);
            this.oExtensionUtility.setPluginEventExtension(oPluginEventExtension);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oExtensionUtilities);
            return [oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension];
        }
    })
});

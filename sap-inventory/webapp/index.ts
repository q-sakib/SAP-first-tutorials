import XMLView from "sap/ui/core/mvc/XMLView";
import ComponentContainer from "sap/ui/core/ComponentContainer";

new ComponentContainer({
  id: "container",
  name: "ui5.walkthrough",
  settings: {
    id: "walkthrough",
  },
  autoPrefixId: true,
  async: true,
}).placeAt("content");

XMLView.create({
  viewName: "ui5.walkthrough.view.App"
}).then(function(view) {
  view.placeAt("content");
});
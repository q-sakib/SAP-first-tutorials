import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";

import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";


export default class App extends Controller { 
  onInit(): void  {
    // set data model on view
    const oData = {
      recipient: {
        name: "from JSON Model"
      }
    };
    const oModel = new JSONModel(oData);
    this.getView()?.setModel(oModel);


    const i18nModel = new ResourceModel({
      bundleName: "ui5.walkthrough.i18n.i18n"
    });
    this.getView()?.setModel(i18nModel, "i18n");
  }



  async onShowHello():Promise<void> {
    // show a native JavaScript alert
    // MessageToast.show("Hello " + this.getView()?.getModel()?.getProperty("/recipient/name"));

    const recipient = (this.getView()?.getModel() as JSONModel).getProperty("/recipient/name");
    const i18nModel = this.getView()?.getModel("i18n") as ResourceModel;
    const i18nBundle = await i18nModel.getResourceBundle();
    const sHelloMsg = i18nBundle.getText("helloMsg", [recipient]) || "Hello";
    MessageToast.show(sHelloMsg);
  }
}
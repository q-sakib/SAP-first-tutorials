import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";

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
  }



  onShowHello():void {
    // show a native JavaScript alert
    MessageToast.show("Hello " + this.getView()?.getModel()?.getProperty("/recipient/name"));
  }
}
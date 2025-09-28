import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";

export default class App extends Controller { 
  onShowHello():void {
    // show a native JavaScript alert
    MessageToast.show("Hello World");
  }
}
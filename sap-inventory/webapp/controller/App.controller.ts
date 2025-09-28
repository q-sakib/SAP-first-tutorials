import Controller from "sap/ui/core/mvc/Controller";

export default class App extends Controller { 
  onShowHello():void {
    // show a native JavaScript alert
    alert("Hello World");
  }
}
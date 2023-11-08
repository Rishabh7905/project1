sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */  
    function (Controller) {
        "use strict";
        return Controller.extend("project1.controller.View1", {
            onInit: function () {    
                 },
                 onPress() {
                    const oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("RouteView2");
             },
             onPress1() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView3");
         },
                 updateData: function(){
                     var list = this.getView().byId("list");
                     var selItem =list.getSelectedItem();
                     var title = selItem.getTitle();
                     var description = selItem.getDescription();
                     var EmpName = this.getView().byId("nameinput").getValue();
                     var payload = {
                         EmpId: parseInt(title),
                         EmpName: EmpName
                     };
                     var path = "/CURDSet("+ title +")";
                     var oDataModel =this.getOwnerComponent().getModel();
                     oDataModel.update(path,payload,{
                        success: function(data,response){
                         MessageToast.show("Successfully Updated");
                        } ,
                        error: function(error){
                         MessageToast.show("Error While Updating the Data");
                        }
                     });
                             },
                             createData: function(){
                                 var EmpId = this.getView().byId("idinput").getValue();
                                 var EmpName = this. getView().byId("nameinput").getValue();
                                 var data ={
                                     EmpId: parseInt(EmpId),
                                     EmpName: EmpName
                                 };
                                 var oDataModel = this.getOwnerComponent().getModel();
                                 oDataModel.create("/CURDSet", data,{
                                     success: function(data,response){
                                         MessageToast.show("successfully created");
                                     },
                                     error: function(error){
                                         MessageToast.show("Error While Creating the Data");
                                     }
                                 });
              },
              deleteData: function(){
                 var list =this.getView().byId("list");
                 var selItem =list.getSelectedItem();
                 var title = selItem.getTitle();
                 var path = "/CURDSet("+ title +")";
                 var oDataModel = this.getOwnerComponent().getModel();
                 oDataModel.remove(path,{
                     success: function(data,response){
                         MessageToast.show("successfully deleted");
                     },
                     error: function(error){
                         MessageToast.show("deletion failed");
                     }
                 });
              }     
        });
    });

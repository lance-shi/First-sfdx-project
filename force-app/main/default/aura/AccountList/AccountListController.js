({
    doInit : function(component, event, helper) {
    	var action = component.get("c.findall");
    	action.setCallback(this, function(a) {
    		component.set("v.accounts", a.getReturnValue());
    	});
    	$A.enqueueAction(action);
    }
})

Ext.define("SenchaMusic.view.SearchMusicListItem",{
	extend : 'Ext.dataview.component.DataItem',
	xtype : "searchmusiclistitem",
	requires : ["Ext.Button"],
	
	config : {
		fileNameButton : true,
		
		dataMap : {
			getFileNameButton : {
				setHtml : "name"
			}
		},
		
		layout : {
			type : 'hbox'
		}
	},
	
	applyFileNameButton : function(config)
	{
		return Ext.factory(config,Ext.Button,this.getFileNameButton());
	},
	

    updateFileNameButton: function(newTextButton, oldTextButton) {
        if (oldTextButton) {
            this.remove(oldTextButton);
        }

        if (newTextButton) {
            this.add(newTextButton);
        }
    }	    
	
	

});
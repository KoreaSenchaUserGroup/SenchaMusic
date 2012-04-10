Ext.define("SenchaMusic.view.SearchMusicBar",{
	extend : "Ext.Toolbar",
	xtype : "searchmusicbar",
	requires : ["Ext.field.Search",
	           "Ext.Title"],
		
	config : {
		items : [
		         {
		        	 xtype : 'title',
		        	 title : 'Search'
		         },
		         {
		        	 xtype : 'searchfield'
		         }
		        ]
	}	
});
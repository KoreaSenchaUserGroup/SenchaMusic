Ext.define("SenchaMusic.view.Main",{
	extend : "Ext.navigation.View",
	xtype : 'mainview',
	requires : ["SenchaMusic.view.SearchMusicBar",
	            "SenchaMusic.view.SearchMusicList"],
	
	config : {
		layout : 'card',
		fullscreen : true,
		items : [

		         {
		        	 xtype : 'searchmusicbar', 
		             docked : 'top',
		             height : '60px'
		         },
		         {
		        	 xtype : 'searchmusiclist' 
		         }

		        ]
	}
		
});
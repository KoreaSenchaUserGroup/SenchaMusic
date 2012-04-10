Ext.define("SenchaMusic.view.SearchMusicList",{
	extend : "Ext.DataView",
	xtype : 'searchmusiclist',
	requires : ['SenchaMusic.view.SearchMusicListItem'],
	
	config : {
		useComponents : true,
		defaultType : "searchmusiclistitem"
//		itemTpl : "<p style='#000'>{name} </p>"
	}
});
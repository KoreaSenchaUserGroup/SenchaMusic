Ext.define("SenchaMusic.model.MusicItem",{
	extend : "Ext.data.Model",
	requires : ["SenchaMusic.proxy.MusicSearch"],
	
	config :
	{
		fields : [
		         {name : 'name', type : 'string'},
		         {name : 'flash_preview_url', type : 'string'}
		         ],
		proxy : "musicsearch"
	}
});
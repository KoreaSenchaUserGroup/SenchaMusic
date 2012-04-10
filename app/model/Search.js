Ext.define("SenchaMusic.model.Search",{
	extend : 'Ext.data.Model',
	requires : ["SenchaMusic.model.MusicItem"],
	
	config : {
		fields :
			[
			 	{name : 'id'},
			 	{name : 'query', type : 'string'},
			 ],
		hasMany :
		{
			model : "SenchaMusic.model.MusicItem",
			name : "musicItems",
			filterProperty : 'query'
		}
	},
	
	
});
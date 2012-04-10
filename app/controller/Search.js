Ext.define("SenchaMusic.controller.Search",{
	extend : 'Ext.app.Controller',
	requires : ["SenchaMusic.model.Search",
	            "SenchaMusic.view.MusicPlay"],

	config : {
		refs : {
			main : {
				selector : 'mainview',
				xtype : 'mainview',
				autoCreate : true
			},
			searchField : 'searchmusicbar > searchfield',
			searchMusicList : 'searchmusiclist',
			musicPlay : {
				selector : 'musicplay',
				xtype : 'musicplay',
				autoCreate : true
			}
			
		},
		
		control : {
			searchField : {
				keyup : "goMusicSearch"
			},
			searchMusicList : {
				itemtap : "goMusicPlay"
			}
		}
	},
	
	goMusicPlay : function(list, idx, el, record) {
		this.musicPlay  = Ext.create('SenchaMusic.view.MusicPlay');
		this.musicPlay.setRecord(record);
		this.getMain().push(this.musicPlay);
	},
	
	doMusicSearch : function(search){
		var store = search.musicItems();
		storeTmp = store;
		var searchList = this.getSearchMusicList();
		searchList.setStore(store);
		store.load();
	},
	
	goMusicSearch : function(field,e){
		var searchField = this.getSearchField();
		var keyCode = e.event.keyCode;
		
		if(keyCode == 13)
		{
			var query = searchField.getValue();
			var search = new SenchaMusic.model.Search({
				query :  query
			});
			this.doMusicSearch(search);
		}
	}
});


Ext.define("SenchaMusic.view.MusicPlay",{
	extend : "Ext.Container",
	xtype : "musicplay",
	requires : ['Ext.Toolbar',
	            'Ext.Audio'],

	config : {
		items : 
			[
		 		{
		 			xtype : 'toolbar',
		 			docked : 'top',
		 			title : 'TaeYang(BigBang)_Wedding Dress.mp3' 
		 		},
		 		{
		 			xtype : 'audio',
		 			autoResume : true,
		 			url : 'http://dc149.4shared.com/img/218542840/606dad2b/dlink__2Fdownload_2FJ8vm6UsR_3Ftsid_3D20120406_123003_902f09be/preview.mp3?dsid=1fs6qo.27a6f956063e063718a34b3125c85c22'
		 		}
		 	]		
	},
	
	updateRecord : function(newRecord){
		var mp3Name = newRecord.data.name;
		var mp3Url = newRecord.data.flash_preview_url;	
		this.down('toolbar').setTitle(mp3Name);
		this.down('audio').setUrl(mp3Url);
	}
});
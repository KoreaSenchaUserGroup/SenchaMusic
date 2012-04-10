Ext.Loader.setPath({
	'Ext' : '../../src'
});

Ext.application({
	name : 'SenchaMusic',
	
	views : ['Main'],
	models : ['MusicItem'],
	controllers : ['Search'],
	
	tabletStartupScreen: 'resources/loading/tablet_startup.png',
	phoneStartupScreen: 'resources/loading/phone_startup.png',
	
	icon: {
	    57: 'resources/icons/icon.png',
	    72: 'resources/icons/icon-72.png',
	    114: 'resources/icons/icon-114.png'
	},
	
	launch : function()
	{
        Ext.Viewport.add({
            xclass: 'SenchaMusic.view.Main'
        });
	}
});
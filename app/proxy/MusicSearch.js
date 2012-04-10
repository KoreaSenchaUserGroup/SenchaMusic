Ext.define("SenchaMusic.proxy.MusicSearch",{
	extend : "Ext.data.proxy.JsonP",
	alias : ["proxy.musicsearch"],
	
	config : {
		url : "http://senchamusics.appspot.com/crossDomainSolution.do",
		
		reader : {
			type : 'json',
			rootProperty : 'result_files'
		}
	},
	filterParam : undefined, 
	buildRequest : function(operation)
	{
		var request = this.callParent(arguments);
		var filter = operation.getFilters()[0];
		var params = request.getParams();
		
		if(filter)
		{
			delete params.filter;
			
			Ext.apply(params,{
				url : "http://search.4shared.com/network/searchXml.jsp?searchCategory=music/audio&sortType=1&q="+filter.getValue()
			});
			
			request.setParams(params);
			request.setUrl(this._url);
			request.setUrl(this.buildUrl(request));
		}
		
		return request;
	}
	
});
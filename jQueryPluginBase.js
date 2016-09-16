/**
 * jQuery-plugin-base
 * 
 * @author Kasper Koman
 * @description Based on various examples on the web, so use however you like.
 */
(function($){
	var PluginName = function(element, options)
	{
		var elem = $(element);
		var obj = this;
		var settings = $.extend({
			//Defaults
		}, options || {});

		// Initialization
		this.init = function() {
			alert('Hello World!');
		};

		var privateFunction = function() {

		};
   	};

   	$.fn.pluginName = function(options) {
       	return this.each(function()
       	{
			var element = $(this);

			// Check if instance of plugin already exists on element
			if (element.data('pluginData')) {
				return;
			}

			// Create instance of plugin
			var pluginInstance = new PluginName(this, options);

			// Call init function
			pluginInstance.init();

			element.data('pluginData', pluginInstance);
       	});
   	};
})(jQuery);
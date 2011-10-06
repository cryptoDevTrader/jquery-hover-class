/*
 * jQuery hoverClass
 * Adds hover classes for use with IE6
 */
;(function($){
	$.fn.hoverClass = function(config)
	{
		if (typeof config != 'undefined' && $.fn.hoverIntent)
		{
			config = (config == true) ? {} : config;

			this.hoverIntent($.fn.hoverClass.mouseOver, $.fn.hoverClass.mouseOut, config);
		}
		else
		{
			return this.hover($.fn.hoverClass.mouseOver, $.fn.hoverClass.mouseOut);
		}

		return this;
	}

	$.fn.hoverClass.mouseOver = function(e)
	{
		var hoverClasses = $(this).data('hoverClass');

		if (typeof hoverClasses === 'undefined')
		{
			// get all classes for element
			hoverClasses = $(this).attr('class').split(' ');

			// add "-hover" to each class and add to
			$.each(hoverClasses, function(i){
				hoverClasses[i] += (hoverClasses[i] == '') ? '' : '-hover';
			});

			// add default "hover" class
			hoverClasses.push('hover');

			// store hoverClasses for element
			$(this).data('hoverClass', $.trim(hoverClasses.join(' ')));

			// retrieve hover Classes
			hoverClasses = $(this).data('hoverClass');
		}

		$(this).addClass(hoverClasses);
	}

	$.fn.hoverClass.mouseOut = function(e)
	{
		if (e.relatedTarget && e.relatedTarget !== document && !e.relatedTarget.parentNode)
		{
			return;
		}

		var hoverClasses = $(this).data('hoverClass');

		if (typeof hoverClasses !== 'undefined')
		{
			$(this).removeClass(hoverClasses);
		}
	}
})(jQuery);
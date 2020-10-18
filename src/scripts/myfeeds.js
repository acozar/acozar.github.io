		jQuery(function($) {
		  $("#rss-news").rss("https://www.eldiario.es/rss/",
		  {
			limit: 6,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<div><h5><a href="{url}">{title}</a></h5><p><small>{date}</small></p><div>{teaserImage}{shortBodyPlain}</div><strong class="reverse"><a class="button-icon s circled" href="{url}">Read more</a></strong></div><hr>'
		  })
		})
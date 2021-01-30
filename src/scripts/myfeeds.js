		jQuery(function($) {
		  $("#rss-verbum").rss("http://blog.acozar.com/feeds/posts/default",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
		jQuery(function($) {
		  $("#rss-illustratio").rss("http://graphic.acozar.com/feeds/posts/default",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{teaserImage}{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
		jQuery(function($) {
		  $("#rss-imago").rss("http://photo.acozar.com/feeds/posts/default",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{teaserImage}{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
		jQuery(function($) {
		  $("#rss-register").rss("http://video.acozar.com/feeds/posts/default",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{teaserImage}{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
		jQuery(function($) {
		  $("#rss-codex").rss("https://acozar.github.io/feed.xml",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
		jQuery(function($) {
		  $("#rss-tesis").rss("http://blog.acozar.com/feeds/posts/default/-/Tesis",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
		jQuery(function($) {
		  $("#rss-antitesis").rss("http://blog.acozar.com/feeds/posts/default/-/Antitesis",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
		jQuery(function($) {
		  $("#rss-sintesis").rss("http://blog.acozar.com/feeds/posts/default/-/Sintesis",
		  {
			limit: 4,
			dateFormat: 'D [de] MMMM',
			entryTemplate:'<article><h3><a href="{url}">{title}</a></h3><strong>{date}</strong><div>{shortBodyPlain}</div><em><small><a href="{url}">+</a></small></em></article>'
		  })
		})
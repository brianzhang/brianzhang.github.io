define(['jquery', 'handlebars', 'turn'], ($, handlebars, turn)->
	class StartApp

		constructor: ()->
			@initialize()

		initialize: ()->
			$("#flipbook").turn({
				width: 600
				height:400
				autoCenter: true
			})
			alert true
)
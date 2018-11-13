var notesTemplate = Handlebars.compile(`
	{{#each notes}}
	<div class="note">
		<span class="input"><textarea data-id="{{ @index }}">{{ this 
			}}</textarea></span>

		<button class="remove btn btn-xs" data-id="{{ @index }}"><i class="fa fa-trash" aria-hidden="true"></i></button>
	</div>
	{{/each}}
`);
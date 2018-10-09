$(document).ready(function(){
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true,
		mode : "python",
		theme : "dracula"
	});

	var doc = editor.getDoc();

	$(".call-api").click(function(){
		$.ajax({
			type: "GET",
			url: "http://0.0.0.0:8080/spoky/color",
			crossDomain: true,
			success: function(result) {
				console.log(result);
				$(".api-response").text(JSON.stringify(result));
				
			},
			error: function(result) {
				alert('Error !');
			}
		});
	});

	$(".commit").click(function(){
		$(document).data("content", doc.getValue());
	})
});
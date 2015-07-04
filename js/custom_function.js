function getMenu()
{
	$.ajax({
		type: 'get',
		dataType: 'jsonp',
		url: 'http://tazamandi.in/appsajax/menu.php',
		success: function(msg)
		{
			$("#navMenu").html(msg['menu']);
			//alert(msg['menu']);
			var ww = document.body.clientWidth;

			$(".nav li a").each(function() {
				if ($(this).next().length > 0) {
					$(this).addClass("parent");
				};
			})
			
			$(".toggleMenu").click(function(e) {
				e.preventDefault();
				$(this).toggleClass("active");
				$(".nav").toggle();
			});
			adjustMenu();

		},
		error: function(msg)
		{
			alert("Error");
		}
	});
}

function getProduct()
{
	var page = document.URL;
	var query = page.split("?")[1];
	var id = query.split("=")[1];
	$.ajax({
		type: 'get',
		data: 'proId='+id,
		url: 'http://tazamandi.in/appsajax/product.php',
		dataType: 'jsonp',
		success: function(msg)
		{
			$("#cartItem").html(msg['product']);
		}
	});
}
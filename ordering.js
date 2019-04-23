jQuery(document).ready(function() {
	$(".item-address").find("table").on("click", function(e) {
		var me = $(this);
		var siblings = me.siblings("table");
		siblings.find("input[type='radio']").removeAttr('checked');
		siblings.removeClass("selected");
		me.addClass("selected");
		me.find("input[type='radio']").attr("checked", "checked");
	});



/* Click .box selects radio button on shipping methods and payment methods pages */
	(function() {
		$('#checkout-content').on('click', '.shipping-methods .box, .payment-methods .box', function(e) {
			var radio = $(this).find(':radio');
			radio.prop('checked', true);
		});
	})();

})
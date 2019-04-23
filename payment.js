jQuery(document).ready(function() {

(function() {
  $("#online-payment").on('click', function(e) {
      $('input#online').prop("checked", true);
      $('input#cash').prop("checked", false);
      $('#show-me').addClass('show'); 
  });

  $("#cash-payment").on('click', function(e) {
      $('input#online').prop("checked", false);
      $('input#cash').prop("checked", true);
      $('#show-me').removeClass('show'); 
  });
})();


(function() {
		$('#show-me').on('click', '.box.highlight', function(e) {
			var radio = $(this).find(':radio');
			radio.prop('checked', true);
		});
	})();


})
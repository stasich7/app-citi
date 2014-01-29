(function() {

	$(function() {

		// search box placeholder
		$('.search-box').on('click', 'input', function() {
			if ($(this).val() === 'Поиск сервиса') {
				return $(this).val('');
			}
		});
		$('.search-box').on('blur', 'input', function() {
			if ($(this).val().length === 0) {
				return $(this).val('Поиск сервиса');
			}
		});

		// user block. show form
		$('.user-block').on('click', '.controls a', function() {
			var user_block, user_form;
			user_block = $(this).parents('.user-block').eq(0);
			user_form = user_block.find('form');
			$(this).parent().hide();
			user_form.show();
			return false;
		});

		// user block. cancel form
		$('.user-block').on('click', 'form .cancel', function() {
			var user_block, user_controls, user_form;
			user_block = $(this).parents('.user-block').eq(0);
			user_form = user_block.find('form');
			user_controls = user_block.find('.controls');
			user_form.hide();
			user_controls.show();
			return false;
		});

		// user block. update form
		$('.user-block').on('click', 'form .update', function() {
			var user_block, user_controls, user_form;
			// do something here to update data
			user_block = $(this).parents('.user-block').eq(0);
			user_form = user_block.find('form');
			user_controls = user_block.find('.controls');
			user_form.hide();
			user_controls.show();
			return false;
		});

		// small devices header menu toggle
		$('header').on('click', 'a.menu', function() {
			var header;
			header = $(this).parents('header').eq(0);
			if (header.hasClass('menu-opened')) {
				header.removeClass('menu-opened');
			} else {
				header.addClass('menu-opened');
			}
			return false;
		});

		// small devices header searchbox toggle
		$('header').on('click', 'a.search', function() {
			var header, link;
			link = $(this);
			header = $(this).parents('header').eq(0);
			if (header.hasClass('search-opened')) {
				header.removeClass('search-opened');
			} else {
				header.addClass('search-opened');
			}
			return false;
		});
	});

}).call(this);

$(document).ready(function() {

	$('#ajax_form').on('submit', function(e){
		e.preventDefault()

		let form = $(this); // Предположу, что этот код выполняется в обработчике события 'submit' формы
		let data = new FormData(); // Для отправки файлов понадобится объект FormData. Подробнее про него можно прочитать в документации - https://developer.mozilla.org/en-US/docs/Web/API/FormData

		// Сбор данных из обычных полей
		form.find(':input[name]').not('[type="file"]').each(function() {
			let field = $(this);
			data.append(field.attr('name'), field.val());
		});

		$.ajax({
			url: 'mail.html',
			type: 'POST',
			data: 'data',
			contentType: false,
			cache: false,
			processData: false,
			success: function() {
				alert('Вы успешно подписались');
			},
			error: function() {
				alert('Ошибка');
			}
		});
	});
});
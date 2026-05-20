// script.js

// Функция для показа всплывающих уведомлений SweetAlert
function showAlert(icon, title) {
    Swal.fire({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500 // Закроется автоматически через 1.5 секунды
    });
}

// Обработчик отправки формы
document.getElementById('callbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы (перезагрузку страницы)

    const form = event.target;

    // Отправляем данные формы на сервер Formspree
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(() => {
        // Если отправка прошла успешно
        showAlert('success', 'Заявка отправлена!');
        form.reset(); // Очищаем поля формы
    })
    .catch(() => {
        // Если произошла ошибка (например, нет интернета)
        showAlert('error', 'Что-то пошло не так. Попробуйте еще раз.');
    });
});
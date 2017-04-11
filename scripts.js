(function () {
  $(function () {
    $('.get-in-touch').on('click', function () {
      showForm();
    });

    $('.close-button').on('click', function () {
      hideForm()
    });

    $('.send-button').on('click', function (event) {
      event.preventDefault();
      sendMail();
      showSuccess();
    });
  })

  function showForm () {
    $('.contact-modal').addClass('contact-modal--visible');
  }

  function hideForm () {
    $('.contact-modal').removeClass('contact-modal--visible');
  }

  function sendMail () {
    var message = $('.form-name').val() + "(" + $('.form-email').val() + ") has requested help with " + $('.form-reason').val() + ".";
    $.ajax({
        url: "https://formspree.io/tedwalleriii@gmail.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    }).done(function (data) {
      console.log(data);
    });
  }

  function showSuccess() {
    $('.contact-form').addClass('contact-form--hidden');
    $('.contact-message').removeClass('contact-message--hidden');
  }
}());

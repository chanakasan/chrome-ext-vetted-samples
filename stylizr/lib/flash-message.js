let messageClearTimer;

function flashMessage(msg) {
  clearTimeout(messageClearTimer);
  const message = document.querySelector('.flash-messages');
  message.innerText = msg;
  messageClearTimer = setTimeout(function () {
    message.innerText = '';
  }, 3000);
}

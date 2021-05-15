const ws = new WebSocket(location.href.replace(/^http/, "ws"));

const form = document.querySelector("#messageForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nickname = event.target.nickname.value;
  const message = event.target.message.value;
  if (nickname && message) {
    ws.send(
      JSON.stringify({
        nickname,
        message,
        
      })
    );
  }
});

const chatContainer = document.querySelector("#chat");

ws.addEventListener("message", ({ data }) => {
  const { date, nickname, message } = JSON.parse(data);
  chatContainer.innerHTML += `
  <div class="message">
    <small class="date">${date}</small> <strong>${nickname}:</strong> <span class="text">${message}</span>
  </div>
  `;
});

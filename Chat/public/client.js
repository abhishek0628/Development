const ws = new WebSocket("ws://localhost:3000");

const name = prompt("Enter your name:");

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    const chat = document.getElementById("chat");

    chat.innerHTML += `
        <div class="msg">
            <b>${data.name}:</b> ${data.message}
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;
};

function sendMsg() {
    const input = document.getElementById("msg");

    if (!input.value.trim()) return;

    const payload = {
        name: name,
        message: input.value
    };

    ws.send(JSON.stringify(payload));
    input.value = "";
}
function WebSocketTest() {

    if ("WebSocket" in window) {
        alert("WebSocket is supported by your Browser!");

        // Let us open a web socket
        var ws = new WebSocket("ws://192.168.4.1/wstest");

        ws.onopen = function () {
            // Web Socket is connected, send data using send()
            alert("WS is connected");
        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            document.getElementById("dop").innerHTML = received_msg;
        };

        ws.onclose = function () {
            // websocket is closed.
            alert("Connection is closed...");
        };
    } else {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }
}

function Wellcome(){
    alert("Hello Welcome")
    if ("WebSocket" in window) {
        console.log("WebSocket is supported by your Browser!");
    } else {
        // The browser doesn't support WebSocket
        console.log("WebSocket NOT supported by your Browser!");
    }
}
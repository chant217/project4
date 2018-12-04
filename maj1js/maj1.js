function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

// $('.slider').click(function(){
// 	$ ('.lightsofff').();
// }



//  function lightOff(){
//  	var lightswitch = document.getElementById("lightswitch");
//  	var lightsoff = $(".lightoff");
//  	if (lightswitch.checked){
//  		console.log("lightswitch is checked")
//  		lightsoff.style.display = "block";
//  	} else {
//  		lightsoff.style.display = "none";
//  	}
//  }

// lightOff();

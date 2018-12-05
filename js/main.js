$( ".social-link" ).hover( function() {
  	var name = $(this)[0].getAttribute("data-name");
  	var action = $(this)[0].getAttribute("data-action");
  	$("#dynamic")[0].innerHTML = action+" me on"
  },function(){
  	$("#dynamic")[0].innerHTML = "{{action}} me on"
  }
);

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $("#myModal").modal('hide');
    } 
});

$("#myModal").on('hidden.bs.modal', function (e) {
  $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});

$(window).scroll(function() {
    if ($(this).scrollTop()>150 && !$("#go-up").hasClass("visible"))
    {
    	$("#go-up").addClass("visible");
    }
    else if ($(this).scrollTop() === 0 && $("#go-up").hasClass("visible")){
    	$("#go-up").removeClass("visible");
    }
 });

$("#go-up").click(function(){
	$('html, body').animate({scrollTop: '0px'}, 600);
});

$("#show-gif").click(function(){
  if(this.innerHTML === "Press Me" || this.innerHTML === "Try it again"){
    this.innerHTML = "Ok, I had enough";
    $("#merge-gif").css("opacity","1");
  }else{
    this.innerHTML = "Try it again";
    $("#merge-gif").css("opacity","0");
  }
});

function triggerMenu() {
  var x = document.getElementById("myTopnav");
  if (!x.classList.contains("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}


//EXPERIMENTAL
// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//   var winScroll = document.body.scrollTop;
//   var height = document.body.scrollHeight - document.body.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

function switchTab(item) {
  if(!item.classList.contains("active")){
    const tabsList = $("#content-tabs")[0].getElementsByClassName("nav-link");
    const contentTabs = $("#content-tabs")[0].getElementsByClassName("card-body");
    for(i=0; i<tabsList.length; i++ ){
      if(tabsList[i] === item){
        tabsList[i].classList.add("active");
        contentTabs[i].classList.add("active");
      }else if(tabsList[i].classList.contains("active")){
        tabsList[i].classList.remove("active");
        contentTabs[i].classList.remove("active");
      }
    }
  }
}

$('.form-field').blur( function() {
  if(!$(this).val()){
    this.classList.add("is-invalid");
  }
  else if($(this).val() && this.classList.contains("is-invalid")){
    this.classList.remove("is-invalid");
  }
});

// $('.email-field').blur( function () {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if(!re.test($(this).val()) && !this.classList.contains("is-invalid")){
//       this.classList.add("is-invalid");
//   }
//   else if($(this).val() && this.classList.contains("is-invalid")){
//     this.classList.remove("is-invalid");
//   }
// });

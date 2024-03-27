$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
  });


  let profilePic = document.getElementById('profile_pic');
  let inputFile = document.getElementById('file');

  inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
  }

  function InsertData() {
    document.getElementById('profile_pic').src = "./imgs/empty_pic.jpg" 
    alert("Submitted succesfully!");
  } 
  

  //Donate Icons
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('You submitted successfully! Thank You!', 'success')
  })
} 





//Business Logic

//Interface Logic
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const q1 = $("#q1").val();
    const q2 = $("input:radio[name=q2]:checked").val();
    const color = $("#color").val();
    
    //debugging
    const debug = [q1,q2,color].join(' | ');
    console.log(debug);
  })
})
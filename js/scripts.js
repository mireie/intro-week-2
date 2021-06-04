//Business Logic
function totalScore(q2,q3,q4,q5,q6) {
  return q2+q3+q4+q5+q6;
}

//Interface Logic
$(document).ready(function() {
  $('button#submit').click(function() {
    $('#validation').addClass('submitted');
    $('#validation').show();
  })
  
  $("form#survey").submit(function(event) {
    event.preventDefault();
    
    const q1 = $("#q1").val();
    const q2 = parseInt($("input:radio[name=q2]:checked").val());
    const q3 = parseInt($("input:radio[name=q3]:checked").val());
    const q4 = parseInt($("input:radio[name=q4]:checked").val());
    const q5 = parseInt($("input:radio[name=q5]:checked").val());
    const q6 = parseInt($("input:radio[name=q6]:checked").val());
    const color = $("#color").val();
    const score = totalScore(q2,q3,q4,q5,q6);
    
    if (score % 7 === 0) {
      result= "Go";
    } else {
      if (q2 === 0) {
        if (score % 2 === 0) {
          result= "Swift";
        } else {
          result= "Python";
        }
      } else if (q2 === 1) {
        if (score % 2 === 0) {
          result= "C#";
        } else {
          result= "JavaScript";
        }
      } else if (q2 === 2) {
        if (score % 2 === 0) {
          result= "Ruby";
        } else {
          result= "Rust";
        }
      }
    }
    $("#result").text(result);
    $("body").css("background-color",color);
    $("#name").text(q1);
    $(".result").slideToggle(1000);
    $(".survey").slideToggle(1000);
    $("#result").fadeToggle(500);

  });
  $("#reset").click(function() {
    $(".result").slideToggle(1000);
    $(".survey").slideToggle(1000);
    $("#survey")[0].reset();
    $("#result").fadeToggle(500);
    $('#validation').removeClass('submitted');
    $('#validation').hide();
    $("body").css("background-color","white");

  /* debugging tools
    const debug = [q1,q2,q3,q4,q5,q6,color].join(' | ');
    console.log(debug);
    console.log("Total Score: "+score);
    */  
  });
})
//Business Logic
function totalScore(q2,q3,q4,q5,q6) {
  return q2+q3+q4+q5+q6;
}
function result(score)
if (score % 3 === 0) {
  return "Go";
} else {
  if (q2 === 0) {
    //Animal
    if (score % 2 === 0) {
      //Swift
    } else {
      //Python
    }
  } else if (q2 === 1) {
    //Food
    if (score % 2 === 0) {
      //C#
    } else {
      //JavaScript
    }
  } else if (q2 === 2) {
    //Red
    if (score % 2 === 0) {
      //Ruby
    } else {
      //Rust
    }
  } else if (q2 === 3) {
    //Go
  }
}

//Interface Logic
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const q1 = $("#q1").val();
    const q2 = $("input:radio[name=q2]:checked").val();
    const q3 = $("input:radio[name=q3]:checked").val();
    const q4 = $("input:radio[name=q4]:checked").val();
    const q5 = $("input:radio[name=q5]:checked").val();
    const q6 = $("input:radio[name=q6]:checked").val();
    const color = $("#color").val();
    const score = totalScore(q2,q3,q4,q5,q6);
    const result = result(score);
    
    //debugging
    const debug = [q1,q2,color].join(' | ');
    console.log(debug);
    
  })
})

/*
Go

Animal
-swift
-python

Food
-C#
-JavaScript

Red
-Rust
-Ruby
*/
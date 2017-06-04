
  //functions for drag and drop images
  //////////////////////////////////////////////////////////
  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  }
//////////////////////////////////////////////////////////


$(document).ready(function(){
  var oWincount = 0;
  var xWincount = 0;
  var clickCount = 0;
  var tieCount = 0;
  var imageArr = ['images/char1.jpg', 'images/char2.jpg', 'images/char3.jpg', 'images/char4.jpg'];


  //create img tags
  for (var i = 0; i < imageArr.length; i++) {
    $('#drag-container').append(
      $('<img>',{
        'id' : 'img' + (i + 1),
        'class': 'image-style',
        'draggable' : true,
        'ondragstart' : 'drag(event)',
        'src' : imageArr[i],
      })
    );
  }


  function checkingResult(){
    var tokenPlayerA = $('#playerA').val();
    var tokenPlayerB = $('#playerB').val();
    if (
      $('#button1').hasClass('o-style') && $('#button2').hasClass('o-style') && $('#button3').hasClass('o-style') ||
      $('#button4').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button6').hasClass('o-style') ||
      $('#button7').hasClass('o-style') && $('#button8').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button1').hasClass('o-style') && $('#button4').hasClass('o-style') && $('#button7').hasClass('o-style') ||
      $('#button2').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button8').hasClass('o-style') ||
      $('#button3').hasClass('o-style') && $('#button6').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button1').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button3').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button7').hasClass('o-style')) {


        if ($("#drop-container1:has(img)").length > 0){
          $url = $('#drop-container1 img').attr('src');
          swal({
            title: "congratulations!",
            text: "you won this time.",
            imageUrl: $url,
          });
        }else if (tokenPlayerA) {
          alert(tokenPlayerA +' wins, please click the reset button to start a new game');
        }else if (!tokenPlayerA) {
          alert('o wins, please click the reset button to start a new game');
        }
        oWincount ++;
        $('#o-win-container span').text(oWincount);
    }else if (
      $('#button1').hasClass('x-style') && $('#button2').hasClass('x-style') && $('#button3').hasClass('x-style') ||
      $('#button4').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button6').hasClass('x-style') ||
      $('#button7').hasClass('x-style') && $('#button8').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button1').hasClass('x-style') && $('#button4').hasClass('x-style') && $('#button7').hasClass('x-style') ||
      $('#button2').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button8').hasClass('x-style') ||
      $('#button3').hasClass('x-style') && $('#button6').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button1').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button3').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button7').hasClass('x-style')) {
        if ($("#drop-container2:has(img)").length > 0){
          $url = $('#drop-container2 img').attr('src');
          swal({
            title: "congratulations!",
            text: "you won this time.",
            imageUrl: $url,
          });
        }else if (tokenPlayerB) {
          alert(tokenPlayerB +' wins, please click the reset button to start a new game');
        }else if (!tokenPlayerB) {
          alert('x wins, please click the reset button to start a new game');
        }
        xWincount ++;
        $('#x-win-container span').text(xWincount);
      }else if(clickCount === 9){
        alert('tie')
        tieCount ++;
        $('#tie-container span').text(tieCount);
      }
  }
  $('th').on('click', function(){

    var tokenPlayerA = $('#playerA').val();
    var tokenPlayerB = $('#playerB').val();
    //enshure users cannot click other button once if the game has a result.
    if (
      $('#button1').hasClass('o-style') && $('#button2').hasClass('o-style') && $('#button3').hasClass('o-style') ||
      $('#button4').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button6').hasClass('o-style') ||
      $('#button7').hasClass('o-style') && $('#button8').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button1').hasClass('o-style') && $('#button4').hasClass('o-style') && $('#button7').hasClass('o-style') ||
      $('#button2').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button8').hasClass('o-style') ||
      $('#button3').hasClass('o-style') && $('#button6').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button1').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button3').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button7').hasClass('o-style')) {
        if ($("#drop-container1:has(img)").length > 0){
          $url = $('#drop-container1 img').attr('src');
          swal({
            title: "congratulations!",
            text: "you won this time.",
            imageUrl: $url,
          });
        }else if (tokenPlayerA) {
          alert(tokenPlayerA +' wins, please click the reset button to start a new game');
        }else if (!tokenPlayerA){
          alert('o wins, please click the reset button to start a new game');
        }
    }else if (
      $('#button1').hasClass('x-style') && $('#button2').hasClass('x-style') && $('#button3').hasClass('x-style') ||
      $('#button4').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button6').hasClass('x-style') ||
      $('#button7').hasClass('x-style') && $('#button8').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button1').hasClass('x-style') && $('#button4').hasClass('x-style') && $('#button7').hasClass('x-style') ||
      $('#button2').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button8').hasClass('x-style') ||
      $('#button3').hasClass('x-style') && $('#button6').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button1').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button3').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button7').hasClass('x-style')) {
        if ($("#drop-container2:has(img)").length > 0){
          $url = $('#drop-container2 img').attr('src');
          swal({
            title: "congratulations!",
            text: "you won this time.",
            imageUrl: $url,
          });
        }else if (tokenPlayerB) {
          alert(tokenPlayerB +' wins, please click the reset button to start a new game');
        }else if (!tokenPlayerB){
        alert('x wins, please click the reset button to start a new game');
        }

      }else if (clickCount === 9) {
        alert('tie, please click the reset button to start a new game')
      }else if($(this).hasClass('o-style') || $(this).hasClass('x-style')){
        alert('it is already selected');
      }else if (clickCount%2 === 0) {
        clickCount ++;
        $(this).addClass('o-style');
        if($("#drop-container1:has(img)").length >0){
          $url = $('#drop-container1 img').attr('src');
          console.log('image checked')
          $(this).css('background-image','url(' + $url + ')');
          console.log(clickCount);
          checkingResult();

          // alert('images added');
        }else if (tokenPlayerA) {
          $(this).text(tokenPlayerA);
          console.log(clickCount);
          checkingResult();
        }else if (!tokenPlayerA) {
          $(this).text('o');
          console.log(clickCount);
          checkingResult();
        }


      }else if (clickCount%2 !== 0) {
        clickCount ++;
        $(this).addClass('x-style');
        if ($("#drop-container2:has(img)").length > 0) {
          $url = $('#drop-container2 img').attr('src');
          $(this).css('background-image','url(' + $url + ')');
          console.log(clickCount);
          checkingResult();
        }else if (tokenPlayerB) {
          $(this).text(tokenPlayerB);
          console.log(clickCount);
          checkingResult();
        }else if (!tokenPlayerB) {
          $(this).text('x');
          console.log(clickCount);
          checkingResult();
        }



      }
  });

  $('#reset-button').on('click',function(){
    $('th').removeAttr('class');
    $('th').removeAttr('class');
    $('th').text('');
    $('th').css('background-image','none');
    clickCount = 0;
    console.log(clickCount);
  });

});

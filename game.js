

$(document).ready(function(){
  var oWincount = 0;
  var xWincount = 0;
  var clickCount = 0;
  var tieCount = 0;
  var imageArr = ['images/char1.jpg', 'images/char2.jpg', 'images/char3.jpg', 'images/char4.jpg'];

//create radio input for images
for (var i = 0; i < imageArr.length; i++) {
  console.log(typeof imageArr[i]);
  $('#pic-tokenA').append(
    $('<input/>',{
      'class' : 'radio-style',
      'id' :'radio' + (i + 1),
      'type' : 'radio',
      'name' : 'radioContainer',
      'value' : 'radio' + (i + 1),
    }),
    $('<img>',{
      'id' : 'img' + (i + 1),
      'class': 'image-style',
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

        if (tokenPlayerA) {
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
        if (tokenPlayerB) {
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
      if (tokenPlayerA) {
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
        if (tokenPlayerB) {
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

        if (tokenPlayerA) {
          $(this).text(tokenPlayerA).addClass('o-style');
          console.log(clickCount);
          checkingResult();
        }else if (!tokenPlayerA) {
          $(this).text('o').addClass('o-style');
          console.log(clickCount);
          checkingResult();
        }


      }else if (clickCount%2 !== 0) {
        clickCount ++;

        if (tokenPlayerB) {
          $(this).text(tokenPlayerB).addClass('x-style');
          console.log(clickCount);
          checkingResult();
        }else if (!tokenPlayerB) {
          $(this).text('x').addClass('x-style');
          console.log(clickCount);
          checkingResult();
        }



      }
  });

  $('#reset-button').on('click',function(){
    $('th').removeAttr('class');
    $('th').removeAttr('class');
    $('th').text('');
    clickCount = 0;
    console.log(clickCount);
  });

});

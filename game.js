

$(document).ready(function(){
  var oWincount = 0;
  var xWincount = 0;
  var clickCount = 0;
  var tieCount = 0;
  function checkingResult(){
    if (
      $('#button1').hasClass('o-style') && $('#button2').hasClass('o-style') && $('#button3').hasClass('o-style') ||
      $('#button4').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button6').hasClass('o-style') ||
      $('#button7').hasClass('o-style') && $('#button8').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button1').hasClass('o-style') && $('#button4').hasClass('o-style') && $('#button7').hasClass('o-style') ||
      $('#button2').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button8').hasClass('o-style') ||
      $('#button3').hasClass('o-style') && $('#button6').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button1').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button9').hasClass('o-style') ||
      $('#button3').hasClass('o-style') && $('#button5').hasClass('o-style') && $('#button7').hasClass('o-style')) {
        alert('o wins');
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
        alert('x wins');
        xWincount ++;
        $('#x-win-container span').text(xWincount);
      }else if(clickCount === 9){
        alert('tie')
        tieCount ++;
        $('#tie-container span').text(tieCount);
      }
  }
  $('th').on('click', function(){
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
        alert('o wins, please click the reset button to start a new game');
    }else if (
      $('#button1').hasClass('x-style') && $('#button2').hasClass('x-style') && $('#button3').hasClass('x-style') ||
      $('#button4').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button6').hasClass('x-style') ||
      $('#button7').hasClass('x-style') && $('#button8').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button1').hasClass('x-style') && $('#button4').hasClass('x-style') && $('#button7').hasClass('x-style') ||
      $('#button2').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button8').hasClass('x-style') ||
      $('#button3').hasClass('x-style') && $('#button6').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button1').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button9').hasClass('x-style') ||
      $('#button3').hasClass('x-style') && $('#button5').hasClass('x-style') && $('#button7').hasClass('x-style')) {
        alert('x wins, please click the reset button to start a new game');
      }else if (clickCount === 9) {
        alert('tie, please click the reset button to start a new game')
      }else if($(this).text() === 'o' || $(this).text() === 'x' ){
        console.log('hi');
        alert('it is already selected');
      }else if (clickCount%2 === 0) {
        clickCount ++;
        $(this).text('o').addClass('o-style');
        console.log(clickCount);
        checkingResult();
      }else if (clickCount%2 !== 0) {
        clickCount ++;
        $(this).text('x').addClass('x-style');
        console.log(clickCount);
        checkingResult();
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

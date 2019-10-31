function switchAlgorithmCopy() {

  $('#bubble-sort-copy').addClass('hidden');
  $('#insertion-sort-copy').addClass('hidden');
  $('#selection-sort-copy').addClass('hidden');

  let algorithmName = $('#algo-select').val();

  if (algorithmName === 'bubblesort') {
    $('#bubble-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'selectionsort') {
    $('#selection-sort-copy').toggleClass('hidden');
  } else if (algorithmName === 'insertionsort') {
    $('#insertion-sort-copy').toggleClass('hidden');
  } else {
    $('#algorithm-name').text('Nothing!');
  }
}

$( document ).ready(function() {
    switchAlgorithmCopy();
});

function algoChange() {
  switchAlgorithmCopy();
}

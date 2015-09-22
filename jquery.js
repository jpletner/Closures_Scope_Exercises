$(document).ready(function() {

  function myCounter() {
    var counter = 0;
    return {
      more: function() {
        counter+=1;
        return counter;
      },
      less: function() {
        counter-=1;
        return counter;
    },
    reset: function() {
      var counter = 0;
      return counter;
    }
  }
  }

  var addBtn = $('.plus');
  var result = $('.rowTotal');
  var cnt = myCounter();



  addBtn.click(function(event) {
    result.html(cnt.more());
  });

  $('.minus').click(function(event) {
    $('.rowTotal').html(cnt.less(this));
  });

  $('.reset').click(function(event) {
    $('.rowTotal').html(cnt.reset);
  });

});

$(function() {
      var $table = $('table#table1');

      $('input.addRow').on('click',function() {
          var $tr = $(this).closest('.myRow');
          var $newRow = $tr.clone();
          $tr.after($newRow);
      });

      $table.on('click', '.deleteRow', function() {
          $(this).closest('tr').remove();
      });
  });

(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('#data').before('<div class = "row"><div class = "col s12 m12 center"><ul class = "pagination" id = "nav"> <li>   <span class = "disable-links"><a class = "disabled" href="javascript:void()">&laquo;</a></span> </li>  </ul></div></div>');
  var rowsShown = 4;
  var rowsTotal = $('#data tbody tr').length;
  var numPages = rowsTotal/rowsShown;
  for(i = 0;i < numPages;i++) {
      var pageNum = i + 1;
      $('#nav').append('<li class = "waves-effect"><a href="javascript:void()" rel="'+i+'">'+pageNum+'</a> </li>');
  }
  $('#nav').append('<li>   <span class = "disable-links"><a class = "disabled" href="javascript:void()">&raquo;</a></span> </li>  ');
  $('#data tbody tr').hide();
  $('#data tbody tr').slice(0, rowsShown).show();
  $('#nav a:first').addClass('active');
  $('#nav  a').bind('click', function(){

      $('#nav a').removeClass('active');
      $(this).addClass('active');
      var currPage = $(this).attr('rel');
      var startItem = currPage * rowsShown;
      var endItem = startItem + rowsShown;
      $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
              css('display','table-row').animate({opacity:1}, 300);
  });
});

$(function() {
  var id = 0;

  $('table tr:gt(0)').each(function() {
    id++;
    $(this).prepend('<td>' + id + '</td>');
  });
});
$(function() {
    $('.select-group').change(function(){
      $selectText = $(this).find(':selected').text();
      $('.bread_crumbs li span').text($selectText);
    });
// });

// $(function(){
    $('.tab_group li').click(function(){
      $tabText = $(this).children('a').text();
      $('.bread_crumbs li span').text($tabText);
    });
});

$(function() {
    $('.select-group').change(function(){
      $('.content').hide();
      $('#' + $(this).val()).show();
    });
});

$(function(){
  var $li = $('ul.tab_group li');
    $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.content').hide();
    
    $li.click(function(){
        $($(this).find('a'). attr ('href')).show().siblings ('.content').hide();
        $(this).addClass('active'). siblings ('.active').removeClass('active');
    });
});
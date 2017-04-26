$('.tab-panel-wrap > div').hide();
$('.tab-panel-wrap > div:first-of-type').show();
$('.tab-button-link').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tab-button-wrap').data('tabgroup'),
        others = $this.closest('.tab-button').siblings(),
        target = $this.attr('href');
    console.log('tabgroup = ' + tabgroup);
    console.log('others = ' + others);
    console.log('target = ' + target);
    others.removeClass('active');
    $this.parents('.tab-button').addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();

})

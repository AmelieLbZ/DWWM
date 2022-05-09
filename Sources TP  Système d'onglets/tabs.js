$('.tabs a').on('click', function(e){
    e.preventDefault()
    var $a=$(this)
    var $li=$a.parent()
    if($li.hasClass('active')){
        return false
    }
    $li.siblings('.active').removeClass('active') //je cible les class .active avec le siblings
    $li.addClass('active')
    
})
/**
 * Created by apple on 16/11/2.
 */
$(function(){
    $('#search span').on('click',function(){
        alert($('#search-input').val());
    });
    var $search = $('#search-input');
    $search.on('keypress',function(e){
        if(e.which == 13){
            alert($search.val());
        }
    });
    $search.on('focus',function(){
        if(this.value == this.defaultValue){
            this.value = '';
        }

    }).on('blur',function(){
        if(this.value == ''){
            this.value = this.defaultValue;
        }

    });
    var a = 0;
    var $li = $('#img-box li');
    $('#next').on('click',function(){
        a++;
       if(a == $li.size()){
           a = 0;
       }
        $('#img-box').animate({
            left:-a*$li.eq(0).width()
        })
    });
});
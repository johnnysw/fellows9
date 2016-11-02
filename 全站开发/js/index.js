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
});
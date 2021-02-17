$( "input[type='button']" ).on( "click", function(){
    let obj = $('#formlist').serialize();
    let allInf = obj.split('&');
    let infLen = allInf.length;
    let alertStr = '';

    for(let i=0;i<infLen;i++){
        let title = allInf[i].split('\=');
        if(title[1]=='' || title[1]==0){
            if(title[0] == 'app_class'){
                alertStr +='請選擇考慮的商品<br>';
            }
            else if(title[0]=='app_time'){
                alertStr +='請選擇時段<br>';
            }
            else if(title[0]=='username'){
                alertStr +='請輸入姓名<br>';
            }
            else if(title[0]=='phone'){
                alertStr +='請輸入電話<br>';
            }
            else if(title[0]=='email'){
                alertStr +='請輸入Email<br><br>';
            }
        }
    }
    if(alertStr == ''){
        alertStr +='感謝您的預約';
    }else{
        alertStr +='感謝您的配合';
    }
    $('#errormessage').html(alertStr);
    $(".outerdiv").css({
        'display':'flex',
    });
    
} );
$('#determine').click(function(){
    $(".outerdiv").css({
        'display':'none',
    });
});

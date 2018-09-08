function Ajax(methods,url,fuSucc,fuFaild){
        let ats=new XMLHttpRequest();
        ats.open(methods,url,true);
        ats.send();
        ats.onreadystatechange = function(){
                if (ats.status == 200 && ats.readyState == 4) {
                    if(typeof fuSucc==='function'){
                        // setTimeout(function(){
                            fuSucc(ats.responseText);
                        // }, 1000);
                    }
                }
                else{
                    if(typeof fuFaild==='function'){
                        if(ats.status==404){
                            let faild='网页不存在!';
                            fuFaild(faild);
                        }
                        else if(ats.readyState==3){
                            let message='加载中...';
                            fuFaild(message);
                        }
                    }
                }
            }
    }
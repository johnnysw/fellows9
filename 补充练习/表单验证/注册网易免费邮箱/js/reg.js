var checkresult;
$(document).ready(function(){
	
	
	$("#vcode_img,#imageA").bind("click",function(){
		 var myDate=new Date() ;
			//当为yeah时，显示英文验证码
		 var afteren=__$0();
			if(RegResult.domain=="yeah.net"){
				 $("#vcode_img").attr("src","regvf1/verifyCodeImgF.jsp?env="+afteren+"&type=en&t="+myDate.getTime());
			}else{
				 $("#vcode_img").attr("src","regvf1/verifyCodeImgF.jsp?env="+afteren+"&type=zh&t="+myDate.getTime());
			}
	     return false;
	});
	
	var myDate=new Date();
    var hh=myDate.getTime();
    RegTime.starttime=hh;

    
    
    
	$("#imageA").click();

	$("#unameInp").val("");
	$("#passwInp").val("");
	$("#passConfim").val("");
	$("#answerInp").val("");
	$("#mobileInp").val("");
	$("#verifyInp").val("");
	$("#selfqInp").val("");
	
	 $("#qSelect option:nth-child(1)").attr("selected" , "selected");
	
	
	if(selectdomain=="163.com"){
		 $("#domainchkBox option:nth-child(1)").attr("selected" , "selected");
	}else if(selectdomain=="126.com"){
		 $("#domainchkBox option:nth-child(2)").attr("selected" , "selected");
	}else if(selectdomain=="yeah.net"){
		$("#domainchkBox option:nth-child(3)").attr("selected" , "selected");
		$("#vcode_img").width(120);
		$("#vcode_img").height(50);
		 
	}
	
	/**
	 * 
	 * 聚焦函数定义
	 */
	
	document.getElementById('unameInp1').onfocus = function(){
		document.getElementById('unameInp1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('unameInp1').blur()",0);
		
		
		}
	document.getElementById('passwInp1').onfocus = function(){
		document.getElementById('passwInp1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('passwInp1').blur()",0);
		
		
		}
	document.getElementById('passConfim1').onfocus = function(){
		document.getElementById('passConfim1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('passConfim1').blur()",0);
		
		
		}
	document.getElementById('qSelect1').onfocus = function(){
		document.getElementById('qSelect1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('qSelect1').blur()",0);
		
		
		}
	document.getElementById('selfqInp1').onfocus = function(){
		document.getElementById('selfqInp1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('selfqInp1').blur()",0);
		
		
		}
	document.getElementById('answerInp1').onfocus = function(){
		document.getElementById('answerInp1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('answerInp1').blur()",0);
		
		
		}
	document.getElementById('mobileInp1').onfocus = function(){
		document.getElementById('mobileInp1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('mobileInp1').blur()",0);
		
		
		}
	document.getElementById('verifyInp1').onfocus = function(){
		document.getElementById('verifyInp1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('verifyInp1').blur()",0);
		
		
		}
	document.getElementById('checkbox1').onfocus = function(){
		document.getElementById('checkbox1').style.backgroundColor="#f00";
		setTimeout("document.getElementById('checkbox1').blur()",0);
		
		
		}
	
	
	$("#refreshBtn").bind("click", function(){
		window.location.href="http://reg.email.163.com/mailregAll/reg0.jsp?from="+from;
		return false;
	});
	
	
	/**
	 * 用户名输入框激活
	 */
	$("#unameInp").bind("focus", function(){
		
		var ifva=ifvalid();
		if(ifva==false){
			$("#staytoolong").show();
			return ;
		}
		nowfocus="uname";
		var myDate=new Date();
		var hh=myDate.getTime();
		RegTime.unametime=hh;
		
		deleteNoticeMessage("unameWrap");
		$("#unameShowbox").hide();
		var ret=chkUsername();

		$("#unameInp").attr("class","g-ipt g-ipt-active");
		$("#unameNot").attr("class","txt-info txt-infoNotice");
		return false;
	});
	
    $("#unameInp").bind("mouseover", function(){
		

		$("#unameNot").attr("class","txt-info txt-infoNotice");
		return false;
	 });
     $("#unameInp").bind("mouseout", function(){
		

    	 $("#unameNot").attr("class","txt-info");
		return false;
	 });
	
	
	$("#unameInp").bind("keyup", function(event){
    	if(event.keyCode==13){
    		$("#unameInp").blur();
    		return false;
    	}
		var val = $.trim($("#unameInp").val());
    	if(val==""){
    		deleteNoticeMessage("unameWrap");
    	}
		
    	return false;
	});
	/**
	 * 用户名输入框失去焦点
	 */
    $("#unameInp").bind("blur", function(){
    	var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.unametime)/500;
    	var logdata={
    			field:"uname",
    			usetime:usertime+""
    	};
    	
    	
    	RegResult.username=false;
    	$("#unameInp").attr("class","g-ipt");
		$("#unameNot").attr("class","txt-info");
    	deleteNoticeMessage("unameWrap");
		var ret=chkUsername();
		var uname = $.trim($("#unameInp").val());
		if(uname==""){
			return ;
		}
		
		
	    var mbuname="";
	    if(/^13\d{9}$/.test( uname ) | /^15\d{9}$/.test( uname ) | /^18\d{9}$/.test( uname )|/^14\d{9}$/.test( uname ) )
	    	mbuname=uname;
		
		$("#mobileurl").attr("href","http://e.mail.163.com/mobilemail/home.do?from=regemail&mobile="+mbuname);
		$("#vip163url").attr("href","http://reg.vip.163.com/register.m?b08bqa1&pageReg=1&username="+uname);
		$("#vip126url").attr("href","http://reg.vip.126.com/register.m?b09bqa1&pageReg=1&username="+uname);
		$("#vip188url").attr("href","http://reg.mail.188.com/servlet/regist?b12bqa1&pageReg=1&username="+uname);
		$("#liangurl").attr("href","http://haoma.163.com/");
		var domain=$("#domainchkBox").find("option:selected").val();
		 logdata.content=uname+"@"+domain;
		var re={
				mail163:false,
				mail126:false,
				mailyeah:false,
				vip163:false,
				vip126:false,
				vip188:false
			};
		
		var params={
				ajaxurlwithparam:"checkuname.do?uname="+uname+"&random="+Math.random(),
				method:"GET",
				data:""
		};
		checkresult=ajaxRequest(params);
		if(checkresult!=null){
			re=checkresult;
		}else{
			checkresult=re;
		}
		//用户名格式是否正确
		if(ret>0) {
			var  ifexist=false;
			if(domain=="163.com"){
				ifexist=re.mail163;
			}else if(domain=="126.com"){
				ifexist=re.mail126;
			}else if(domain=="yeah.net"){
				ifexist=re.mailyeah;
			}
           if(ifexist==true){  
        	   $("#unameInp").attr("class","g-ipt");
        	   $("#unameShowbox").hide();
        	   showNoticeMessage("success","恭喜，该邮件地址可注册","unameWrap");
        	   RegResult.username=true;
        	  
        	   logdata.result="success";
           }else{
        	   if(re.mail163==false&&re.mail126==false&&re.mailyeah==false&&(re.vip163==true||re.vip126==true||re.vip188==true)){   //免费邮全部被占用,收费邮箱未被全部占用
        		   $("#unameInp").attr("class","g-ipt g-ipt-err");
        		   showNoticeMessage("wrong","","unameWrap");
        		   showuserCheckbox("freealloccupy",uname,domain,re);
        		   
        		   logdata.result="freealloccupy";
   			   }else if(re.mail163==true||re.mail126==true||re.mailyeah==true){   //免费邮有可用
   				$("#unameInp").attr("class","g-ipt g-ipt-err");
   				   showNoticeMessage("wrong","","unameWrap");
   				   showuserCheckbox("freesomeoccupy",uname,domain,re);
   				   
   				  logdata.result="freesomeoccupy";
   			   }else if(re.mail163==false&&re.mail126==false&&re.mailyeah==false&&re.vip163==false&&re.vip126==false&&re.vip188==false){   //所有与全部被占用
   				 showNoticeMessage("wrong","","unameWrap");
   				   showuserCheckbox("alloccupy",uname,domain,re);
   				   
   				  logdata.result="alloccupy";
   			   }
           }

		}else if(ret==0){
			//用户名输入框为空,显示规则
			$("#unameInp").attr("class","g-ipt");
		}else if(ret == -1){	  //当用户填写用户名为数字开头时
		    $("#unameInp").attr("class","g-ipt g-ipt-err");
		    showNoticeMessage("wrong","","unameWrap");
			showuserCheckbox("numberstart",uname,domain,re);		
	
			logdata.result="numberstart";
		}else if(ret == -7){   //全部以数字
			
			showNoticeMessage("wrong","","unameWrap");
			showuserCheckbox("allnumber",uname,domain,re);
			
			logdata.result="allnumber";
		}else if(ret == -2){  //当用户名少于六个字符
		    $("#unameInp").attr("class","g-ipt g-ipt-err");
		    showNoticeMessage("wrong","","unameWrap");
			showuserCheckbox("shortuname",uname,domain,re);
			
			logdata.result="shortuname";
			
		}else if(ret == -6){
			showNoticeMessage("wrong","只能输入6~18个字符","unameWrap");
			
			logdata.result="contentlengthwrong";
		}else if(ret == -3){
			showNoticeMessage("wrong","只能输入字母、数字和下划线","unameWrap");
			logdata.result="contenttypewrong";
		}else if(ret == -5){
			showNoticeMessage("wrong","请以字母或数字结尾","unameWrap");
			logdata.result="notcharornumend";
		}else if(ret == -4){
			showNoticeMessage("wrong","请以字母开头","unameWrap");
			logdata.result="notcharstart";
		}
		else if(ret == -8){
			showuserCheckbox("mobilephone",uname,domain,re);
			showNoticeMessage("wrong","","unameWrap");

			logdata.result="entermobile";
		}		
		
		logReg(logdata);
		return false;
	});
    /**
     * 密码输入框获得焦点
     */    
    $("#passwInp").bind("focus", function(){
    	var ifva=ifvalid();
		if(ifva==false){
			$("#staytoolong").show();
			return ;
		}
    	
    	nowfocus="password";
    	var myDate=new Date();
		var hh=myDate.getTime();
		RegTime.passwordtime=hh;
    	deleteNoticeMessage("passwWrap");
    	showPasswordStrong();
		$("#passwInp").attr("class","g-ipt g-ipt-active");
		$("#passwWrap").attr("class","ipt-wraper ipt-wraper-active");
		$("#passwNot").attr("class","txt-info txt-infoNotice");
		deleteNoticeMessage("passwWrap");
		$("#passStrong").show();
		return false;
	});
    
    $("#passwInp").bind("mouseover", function(){
		$("#passwNot").attr("class","txt-info txt-infoNotice");
		return false;
	 });
     $("#passwInp").bind("mouseout", function(){
    	$("#passwNot").attr("class","txt-info");
		return false;
	 });
  
    /**
	 * 密码输入框失去焦点
	 */
    $("#passwInp").bind("blur", function(){
    	

    	
    	var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.passwordtime)/500;
    	var logdata={
    			field:"password",
    			usetime:usertime+""
    	};
    	
    	
    	RegResult.password=false;
    	$("#passwInp").attr("class","g-ipt");
    	$("#passwNot").attr("class","txt-info");
    	$("#passwWrap").attr("class","ipt-wraper");
		$("#passStrong").hide();
		
		var unmaea=$.trim($("#unameInp").val());
    	var pawwordc=$.trim($("#passwInp").val());
    	
    	if(unmaea.toUpperCase()==pawwordc.toUpperCase()){
    		if(pawwordc=="")
    			return false;
    		showNoticeMessage("wrong","密码过于简单","passwWrap");
    		return false;
    	}
    	
    	//判断是否含有中文	
    	if(/.*[\u4e00-\u9fa5]+.*$/.test(pawwordc)){
    	    		if(pawwordc=="")
    	    			return false;
    	    		showNoticeMessage("wrong","只能输入字母、数字或者字符","passwWrap");
    	    		return false;
    	}
		
		
		var pare=chkPassword();
		if(pare==-1){
			showNoticeMessage("wrong","密码长度应为6~16个字符","passwWrap");
			logdata.result="contentshort";
		}else if(pare==0){
			return;
		}else if(pare==-2){
			showNoticeMessage("wrong","密码长度应为6~16个字符","passwWrap");
			logdata.result="contentlong";
		}
		else if(pare==-3){
			showNoticeMessage("wrong","只能输入字母、数字、特殊字符","passwWrap");
			logdata.result="contenttypewrong";
		}else{
			var pwd=$.trim($("#passwInp").val());
			var box=checkStrong(pwd);
			var tex;
			if(box==1){
	        	tex="密码强度：弱";
	        }else if(box==2){
	        	tex="密码强度：中";
	        }else if(box==3||box==4){
	        	tex="密码强度：强";
	        }	
			showNoticeMessage("success",tex,"passwWrap");
			RegResult.password=true;
			logdata.result="success";
			logdata.presult=box+"";
		}
		
		var passc=$.trim($("#passConfim").val());
		if(passc!=""){
			$("#passConfim").blur();
		}else{
			deleteNoticeMessage("passconfimWrap");
		}
		
		logReg(logdata);
		return false;
	});
    
    /**
     *按键结束，主要实时检查密码强度 
     */
    $("#passwInp").bind("keyup", function(event){
    	if(event.keyCode==13){
    		$("#passwInp").blur();
    		return false;
    	}
    	var pwd=$.trim($("#passwInp").val());

    	showPasswordStrong();
		return false;
	});
    
    /**
     * 确认密码输入框获得焦点
     */
    $("#passConfim").bind("focus", function(event){
    	var ifva=ifvalid();
		if(ifva==false){
			$("#staytoolong").show();
			return ;
		}
    	nowfocus="passwordconf";
    	var myDate=new Date();
		var hh=myDate.getTime();
		RegTime.passwordconftime=hh;
    	
    	$("#passConfim").attr("class","g-ipt g-ipt-active");
    	$("#passwconfNot").attr("class","txt-info txt-infoNotice");
    	if(RegResult.password==false)
    		return false;
    	var pwd=$.trim($("#passConfim").val());
    	deleteNoticeMessage("passconfimWrap");

		return false;
	});
    
  $("#passConfim").bind("mouseover", function(){
		

		$("#passwconfNot").attr("class","txt-info txt-infoNotice");
		return false;
	 });
     $("#passConfim").bind("mouseout", function(){
		

    	 $("#passwconfNot").attr("class","txt-info");
		return false;
	 });
    /**
     * 确认密码输入框失去焦点
     */
    $("#passConfim").bind("blur", function(event){
    	
    	var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.passwordconftime)/500;
    	var logdata={
    			field:"passwordconf",
    			usetime:usertime+""
    	};
    	
    	
    	$("#passwconfNot").attr("class","txt-info");
    	$("#passConfim").attr("class","g-ipt");
    	RegResult.passwordconfim=false;
    	deleteNoticeMessage("passconfimWrap");
    	if(RegResult.password==false)
    		return false;
    	var re=chkPasswordconfirm();
    	if(re==true)
    	logdata.result="success";
    	else
    		logdata.result="fail";
    	
    	logReg(logdata);
    	
		return false;
	});
    
    $("#passConfim").bind("keyup", function(event){
    	if(event.keyCode==13){
    		$("#passConfim").blur();
    		return false;
    	}
    	return false;
	});
    
    
    /** ----------- 保护问题和答案事件 ----------- */
    
    $("#qSelect").bind("mouseover", function(){
		

		$("#passwquNot").attr("class","txt-info txt-infoNotice");
		return false;
	 });
     $("#qSelect").bind("mouseout", function(){
		

    	 $("#passwquNot").attr("class","txt-info");
		return false;
	 });
    
    
	$("#selfqInp").bind("focus",function(){
		var ifva=ifvalid();
		if(ifva==false){
			$("#staytoolong").show();
			return ;
		}
		nowfocus="selfinp";
		var myDate=new Date();
		var hh=myDate.getTime();
		RegTime.selfinptime=hh;
		
		deleteNoticeMessage("selfqWrap");
		$("#selfqInp").attr("class","g-ipt g-ipt-active");
		$("#passwquselfNot").attr("class","txt-info txt-infoNotice");
		
		var val = $.trim($("#selfqInp").val());
		if(fLen(val)>0){
			$("#selfqInp").select();
		}else{
			deleteNoticeMessage("selfqWrap");
		}
		return false;
	});
	 $("#selfqInp").bind("keyup", function(event){
			if(event.keyCode==13){
	    		$("#selfqInp").blur();
	    		return false;
	    	}
	    	var val = $.trim($("#selfqInp").val());
	    	if(val==""){
	    		deleteNoticeMessage("selfqWrap");
	    	}
			return false;
		});
	 
	
	
	$("#selfqInp").bind("blur",function(){
		
		var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.selfinptime)/500;
    	var logdata={
    			field:"selfinp",
    			usetime:usertime+""
    	};
		
		
		RegResult.selfquestionresult==false;
		$("#selfqInp").attr("class","g-ipt");
		$("#passwquselfNot").attr("class","txt-info");
		$("#passwquNot").attr("class","txt-info");
		
		ret=chkSelfquestion();
		if(ret==0){
			return false;
		}else if(ret==-1){
			showNoticeMessage("wrong","自定义问题长度应为6~30个字符","selfqWrap");
			logdata.result="contentshort";
		}else if(ret==-2){
			showNoticeMessage("wrong","自定义问题长度应为6~30个字符","selfqWrap");
			logdata.result="contentlong";
		}else if(ret==1){
			showNoticeMessage("success","","selfqWrap");
			RegResult.selfquestionresult=true;
			var selfinpva=$.trim($("#selfqInp").val());
			RegResult.questionvalue=selfinpva;
			RegResult.questionseldval=selfinpva;
			
			var anser = $.trim($("#answerInp").val());
		    if(anser!=""){
		      $("#answerInp").blur();
		    }
		    logdata.result="success";
		}
		logReg(logdata);
	}	
	
	);
	
	  $("#selfqInp").bind("mouseover", function(){
			

			$("#passwquselfNot").attr("class","txt-info txt-infoNotice");
			return false;
		 });
	     $("#selfqInp").bind("mouseout", function(){
			

	    	 $("#passwquselfNot").attr("class","txt-info");
			return false;
		 });
	
	$("#answerInp").bind("focus",function(){
		var ifva=ifvalid();
		if(ifva==false){
			$("#staytoolong").show();
			return ;
		}
		nowfocus="answer";
		var myDate=new Date();
		var hh=myDate.getTime();
		RegTime.answertime=hh;
		
		deleteNoticeMessage("answerWrap");
		$("#answerInp").attr("class","g-ipt g-ipt-active");


		$("#passwanNot").attr("class","txt-info txt-infoNotice");
		var val = $.trim($("#answerInp").val());
		if(fLen(val)>0){
			$("#answerInp").select();
		}else{
			deleteNoticeMessage("answerWrap");
		}
		return false;
		
	});
	
	 
	 $("#answerInp").bind("mouseover", function(){
			

			$("#passwanNot").attr("class","txt-info txt-infoNotice");
			return false;
		 });
	     $("#answerInp").bind("mouseout", function(){
			

	    	 $("#passwanNot").attr("class","txt-info");
			return false;
		 });
	
	  $("#answerInp").bind("keyup", function(event){
		  
		  if(event.keyCode==13){
	    		$("#answerInp").blur();
	    		return false;
	    	}
	    	var val = $.trim($("#answerInp").val());
	    	if(val==""){
	    		deleteNoticeMessage("answerWrap");
	    	}
	    		
			return false;
		});
	$("#answerInp").bind("blur",function(){
		
		var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.answertime)/500;
    	var logdata={
    			field:"answer",
    			usetime:usertime+""
    	};
		
		RegResult.answer=false;
		$("#answerInp").attr("class","g-ipt");
		$("#passwanNot").attr("class","txt-info");
		var ret=chkanswer();
		if(ret==0){
			deleteNoticeMessage("answerWrap");
			return false;
		}else if(ret==-2||ret==-3||ret==-4||ret==-5){
			showNoticeMessage("wrong","请勿使用过于简单的答案","answerWrap");
			logdata.result="answertooeasy";
		}else if(ret==-1){
			showNoticeMessage("wrong","答案长度应为4~30个字符","answerWrap");
			logdata.result="contentshort";
		}else if(ret==-6){
			showNoticeMessage("wrong","答案长度应为4~30个字符","answerWrap");
			logdata.result="contentlong";
		}else if(ret==1){
			showNoticeMessage("success","","answerWrap");
			logdata.result="";
			RegResult.answer=true;
			logdata.result="success";
		}
			
		logReg(logdata);
		return false;
	}	
	);
	/** --------- end ------------ */
    
    
    
	/** ----------- 手机号码事件 ----------- */
	$("#mobileInp").bind("focus",function(){
		var ifva=ifvalid();
		if(ifva==false){
			$("#staytoolong").show();
			return ;
		}
		nowfocus="mobile";
		var myDate=new Date();
		var hh=myDate.getTime();
		RegTime.mobiletime=hh;
		
		deleteNoticeMessage("mobileWrap");
		deleteNoticeMessage("mobileWrap");
		$("#mobileInp").attr("class","g-ipt g-ipt-active");
		
		$("#mobileNot").attr("class","txt-info txt-infoNotice");
		$("#mobileNot").attr("style","color:#ffa200");
		return false;
	});
	   $("#mobileInp").bind("keyup", function(event){
	    	if(event.keyCode==13){
	    		$("#mobileInp").blur();
	    		return false;
	    	}
	    	return false;
		});
	
	   $("#mobileInp").bind("mouseover", function(){
			

			$("#mobileNot").attr("class","txt-info txt-infoNotice");
			$("#mobileNot").attr("style","color:#ffa200");
			return false;
		 });
	     $("#mobileInp").bind("mouseout", function(){
			

	    	 $("#mobileNot").attr("class","txt-info");
	    	 $("#mobileNot").attr("style","");
			return false;
		 });
	   
	$("#mobileInp").bind("blur",function(){
		
		var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.mobiletime)/500;
    	var logdata={
    			field:"mobile",
    			usetime:usertime+""
    	};
		
		
		
		RegResult.mobilephone=false;
		$("#mobileInp").attr("class","g-ipt");
		deleteNoticeMessage("mobileWrap");
		$("#mobileNot").attr("class","txt-info");
		$("#mobileNot").attr("style","");
		$("#mobileInp").attr("style","");
		var ret=chkMobile();
		if(ret==0){
			return false;
		}else if(ret==-1){
			showNoticeMessage("wrong","请输入有效的手机号","mobileWrap");
			logdata.result="fail";
		}else if(ret==1){
			showNoticeMessage("success","","mobileWrap");
			logdata.result="success";
			RegResult.mobilephone=true;
		}
		logReg(logdata);
		return false;
	});
	/** --------- end ------------ */
	
	
	/** --------- 验证码 ------------ */
	$("#verifyInp").bind("blur",function(){
		
		var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.verfifytime)/500;
    	var logdata={
    			field:"verify",
    			usetime:usertime+"",
    			version:"regvf1"
    			
    	};
		
		RegResult.verifycode=false;
		$("#verifyInp").attr("class","g-ipt");
		$("#verifyCodeNot").attr("class","txt-info");
		ret=chkAuthcode();
		if(ret==0){
			deleteNoticeMessage("verifycodeWrap");
			return false;
		}
		else {
			deleteNoticeMessage("verifycodeWrap");
			RegResult.verifycode=true;
		}
		logReg(logdata);
		return false;
	});
	
	 $("#verifyInp").bind("keyup", function(event){
	    	if(event.keyCode==13){
	    		$("#verifyInp").blur();
	    		return false;
	    	}
	    	return false;
		});
	
	 $("#verifyInp").bind("mouseover", function(){
			

			$("#verifyCodeNot").attr("class","txt-info txt-infoNotice");
			return false;
		 });
	     $("#verifyInp").bind("mouseout", function(){
			

	    	 $("#verifyCodeNot").attr("class","txt-info");
			return false;
		 });
	 
    $("#verifyInp").bind("focus",function(){
    	var ifva=ifvalid();
		if(ifva==false){
			$("#staytoolong").show();
			return ;
		}
    	nowfocus="verifycode";
    	var myDate=new Date();
		var hh=myDate.getTime();
		RegTime.verfifytime=hh;
		
		
    	
    	deleteNoticeMessage("verifycodeWrap");
    	deleteNoticeMessage("verifycodeWrap");
    	$("#verifyInp").attr("class","g-ipt g-ipt-active");
		$("#verifyCodeNot").attr("class","txt-info txt-infoNotice");
		
	});
	/** --------- end ------------ */
   
	
	$("#rec163li").bind("click",function(){
	    if(checkresult.mail163==true){
	    	$("#domainchkBox option:nth-child(1)").attr("selected" , "selected"); 
	    	$("#unameInp").attr("class","g-ipt");
 		   showNoticeMessage("success","","unameWrap");
 		  RegResult.username=true;
 		  RegResult.domain="163.com";
	    	restuserBox();
	    	
	    	//验证码
			 $("#showimgMsg").text("请输入图片中的字符"); 
			 $("#vcode_img").width(80);
			 $("#vcode_img").height(30);
			 $("#verifyInp").width(214);
			 $("#imageA").click();
	    }else{
	    	
	    }
	});
	
	
	
	$("#serviceItemChek").bind("click",function(){
		if($("#serviceItemChek").attr("checked") != true){
			showNoticeMessage("wrong","请接受服务条款","serviceItmeWrap");
			$("#serviceItemChek").attr("class","");
			ok=false;
		}else{
			deleteNoticeMessage("serviceItmeWrap");
			$("#serviceItemChek").attr("class","");
			
		}
	});
	
	
	$("#rec126li").bind("click",function(){
		 if(checkresult.mail126==true){
			 $("#domainchkBox option:nth-child(2)").attr("selected" , "selected"); 
			 $("#unameInp").attr("class","g-ipt");
			 showNoticeMessage("success","","unameWrap");
			 RegResult.username=true;
			 RegResult.domain="126.com";
			 restuserBox();
			 
			 //验证码
			 $("#showimgMsg").text("请输入图片中的字符"); 
			 $("#vcode_img").width(80);
			 $("#vcode_img").height(30);
			 $("#verifyInp").width(214);
			 
			 $("#imageA").click();
		 }else{
		    	
		 }
	});
	$("#recyeahli").bind("click",function(){
		 if(checkresult.mailyeah==true){
			 $("#domainchkBox option:nth-child(3)").attr("selected" , "selected"); 
			 $("#unameInp").attr("class","g-ipt");
			 showNoticeMessage("success","","unameWrap");
			 RegResult.username=true;
			 RegResult.domain="yeah.net";
			 restuserBox();
			 
			 //更换验证码
			 $("#showimgMsg").text("请输入图片中的字符，不区分大小写"); 
			 $("#vcode_img").width(120);
			 $("#vcode_img").height(50);
			 $("#verifyInp").width(174);
			 $("#imageA").click();
		 }else{
		    	
		 }
	});

	$("#regBtn").bind("click",function(){
		
		nowfocus="regbtn";
		var myDate=new Date();
    	var usertime=(myDate.getTime()-RegTime.starttime);
    	
    
    	var logdata={
    			field:"regbtn",
    			usetime:usertime+""
    	};
		
    	var wavawrap="";
    	var focusinp="";
    
		var ok=true;
		
		if(RegResult.username==false){
			var uname=$.trim($("#unameInp").val());
			if(uname==""){
				showNoticeMessage("wrong","请输入邮件地址","unameWrap");
				logdata.result="nouname";
			}
			ok=false;
			
			if(wavawrap==""){
				wavawrap="unameWrap";
				focusinp="unameInp1";
			}
			
			
		}
	
	 
		if(RegResult.password==false){
			var passw=$.trim($("#passwInp").val());
			if(passw==""){
				showNoticeMessage("wrong","请输入密码","passwWrap");
				logdata.result="nopassword";
			}
			ok=false;
			
			if(wavawrap==""){
				wavawrap="passwWrap";
				focusinp="passwInp1";
			}
			
			
		}
	
		if(RegResult.passwordconfim==false){
			var passwc=$.trim($("#passConfim").val());
			if(passwc==""){
				showNoticeMessage("wrong","请再次输入密码","passconfimWrap");
				logdata.result="nopasswordconf";
			}
			ok=false;
			
			if(wavawrap==""){
				wavawrap="passconfimWrap";
				focusinp="passConfim1";
			}
			
		}
		

		if(RegResult.verifycode==false){
			var vcode=$.trim($("#verifyInp").val());
			if(vcode==""){
				showNoticeMessage("wrong","请输入验证码","verifycodeWrap");
				logdata.result="noverifycode";
				if(wavawrap==""){
					wavawrap="verifycodeWrap";
					focusinp="verifyInp1";
				}
			}
			ok=false;
		
		}

		var mobilev=$.trim($("#mobileInp").val());
		if(RegResult.mobilephone==false&&mobilev!=""){
			showNoticeMessage("wrong","手机号码有误","mobileWrap");
			logdata.result="wrongmobile";
			ok=false;
			
			if(wavawrap==""){
				wavawrap="mobileWrap";
				focusinp="mobileInp1";
			}
			
		}
		
		if($("#serviceItemChek").attr("checked") != true){
			showNoticeMessage("wrong","请接受服务条款","serviceItmeWrap");
			logdata.result="notacceptitem";
			$("#serviceItemChek").attr("class","");
			if(wavawrap==""){
				wavawrap="serviceItmeWrap";
				focusinp="checkbox1";
			}
			ok=false;
		}else{
			deleteNoticeMessage("serviceItmeWrap");
			$("#serviceItemChek").attr("class","");
			
		}

		if(ok==false){
			 logReg(logdata);
 
			 if(wavawrap!=""){
				 document.getElementById(focusinp+"").focus();
			
				 waveMsg(wavawrap+"");
			 }
	 
			return false;
		}
	    
		var uname= $.trim($("#unameInp").val());
		var password= $.trim($("#passwInp").val());
		var passwordconf= $.trim($("#passConfim").val());
		var answer= $.trim($("#answerInp").val());
		var mobile= $.trim($("#mobileInp").val());
		var verifycode= $.trim($("#verifyInp").val());
		var domain=RegResult.domain;
		var question=RegResult.questionvalue;
		var questionval=RegResult.questionval;
		var version="regvf1";
		var questionseldval=RegResult.questionseldval;
		
		
		//kuayu
    	var ifacc=false;
        if(ifacc){
        var requestData = document.createElement("script") ;  
        var hosturl;
        if(domain=="163.com"){
        	hosturl="regall.mail.163.com";
        }else if(domain=="126.com"){
        	hosturl="regall.mail.126.com";
        }else if(domain=="yeah.net"){
        	hosturl="regall.mail.yeah.net";
        }else {
        	hosturl="regall.mail.163.com";
        }

        requestData.type = "text/javascript";  
        requestData.src = "http://"+hosturl+"/mailregAll/multidomain.do?uid="+uname+"@"+domain+"&pass="+password+"&version="+version;  
        document.getElementsByTagName('head')[0].appendChild(requestData);
        
        }
    	//kuayu
		
		
		
		if(question=="")
			question=$.trim($("#selfqInp").val());
		var returnto="";
		var regresult;
		var params={
				ajaxurlwithparam:"createmail2.do",
				method:"POST",
				data:{uname:uname,password:password,optshi:usertime,passwordconf:passwordconf,mobile:mobile,verifycode:verifycode,domain:domain,version:version}
		};
		regresult=ajaxRequest(params);

	    if(regresult.message=="true"){
	    	
	    	
	    	//kuayu
	    	var ifacc=false;
            if(ifacc){
	        var requestData = document.createElement("script") ;  
	        var hosturl;
	        if(domain=="163.com"){
	        	hosturl="regall.mail.163.com";
	        }else if(domain=="126.com"){
	        	hosturl="regall.mail.126.com";
	        }else if(domain=="yeah.net"){
	        	hosturl="regall.mail.yeah.net";
	        }else {
	        	hosturl="regall.mail.163.com";
	        }

	        requestData.type = "text/javascript";  
	        requestData.src = "http://"+hosturl+"/mailregAll/multidomain.do?uid="+uname+"@"+domain+"&pass="+password+"&version="+version;  
	        document.getElementsByTagName('head')[0].appendChild(requestData);
	        
            }
	    	//kuayu
	    	
	    	logdata.result="success";
	    	logReg(logdata);
	        if (domain=="163.com") {
	        	returnto = "http://entry.mail.163.com/coremail/fcg/ntesdoor2";
	        } else if (domain=="126.com") {
	        	returnto = "http://entry.mail.126.com/cgi/ntesdoor?verifycookie=1&lightweight=1&style=1";
	        } else if (domain=="yeah.net") {
	        	returnto = "http://entry.yeah.net/cgi/ntesdoor?lightweight=1&verifycookie=1&style=1";
	        }
	        
	        $("#uname").val(uname);
	        $("#domain").val(domain);
	        $("#return_to").val(returnto);
	    	$("#login_form").submit();
	    	return false;

	    	
	    }else if(regresult.message=="wrongcode"){
	    	showNoticeMessage("wrong","输入错误，请重新输入","verifycodeWrap");
	    	logdata.result="wrongverifycode";
	    	$("#imageA").click();
	    }else if(regresult.message=="fail"){
	    	logdata.result="fail";
	    	logReg(logdata);
	    	window.location.href="fail2.do?t=blacklist&username="+uname+"&domain="+domain;
	    }else if(regresult.message=="bindtoomany"){
	    	showNoticeMessage("wrong","关联帐号过多，可编辑短信JC发送到10690163331，取消和所有帐号的绑定","mobileWrap");
	    	logdata.result="mobilebindtoomany";
	    }else if(regresult.message=="greylist"){
	    	
	    	//kuayu
	    	var ifacc=true;
            if(ifacc){
	        var requestData = document.createElement("script") ;  
	        var hosturl;
	        if(domain=="163.com"){
	        	hosturl="regall.mail.163.com";
	        }else if(domain=="126.com"){
	        	hosturl="regall.mail.126.com";
	        }else if(domain=="yeah.net"){
	        	hosturl="regall.mail.yeah.net";
	        }else {
	        	hosturl="regall.mail.163.com";
	        }

	        requestData.type = "text/javascript";  
	        requestData.src = "http://"+hosturl+"/mailregAll/multidomain.do?uid="+uname+"@"+domain+"&pass="+password+"&version="+version;  
	        document.getElementsByTagName('head')[0].appendChild(requestData);
	        
            }
	    	//kuayu
	    	
	    	
	    	
	    	window.location.href="greylist2.do?username="+uname+"&domain="+domain+"&version="+version;
	    	logdata.result="greylist";
	    }else if(regresult.message=="unameequalpword"){
	    	showNoticeMessage("wrong","密码过于简单","passwWrap");
	    	logdata.result="unameequalpassword";
	    }else if(regresult.message=="readd"){
	    	logdata.result="readd";
	    	logReg(logdata);
	    	window.location.href="fail2.do?t=readd&username="+uname+"&domain="+domain;
	    }else if(regresult.message=="staytoolong"){
	    	$("#staytoolong").show();
	    }else{
	    	logdata.result="fail";
	    	logReg(logdata);
	    	window.location.href="fail2.do?username="+uname+"&domain="+domain;
	    }
	    logReg(logdata);
         return false;
	    
	}); 
	
});




//////////////////////////////////////////////////////////////////////

/**
 * 注册结果
 */
var RegResult ={
	username:false,
    password:false,
    passwordconfim:false,
    passwquestion:false,
    selfpasswquestion:false,
    selfquestionresult:false,
    questionval:"",
    questionseldval:"",
    answer:false,
    mobilephone:false,
    verifycode:false,
    questionvalue:"",
    domain:selectdomain
    
};
var ve=envalue;

/**
 * 
 */
var RegTime = {
	starttime:0,
	unametime:0,
	passwordtime:0,
	passwordconftime:0,
	selfinptime:0,
	answertime:0,
	mobiletime:0,
	verfifytime:0,
	succmobile:0,
	succverify:0
}
/**
 * 检查用户名
 * @return
 */
function chkUsername() {
	var username = $.trim($("#unameInp").val());
	if(username=="") {
		return 0;
	}
	else if( /^[0-9]{1,20}$/.test( username )){
		if(/^13\d{9}$/.test( username ) | /^15\d{9}$/.test( username ) | /^18\d{9}$/.test( username )|/^14\d{9}$/.test( username ) )
			return -8;
		 
			return -7;
	}
	else if( /^\d.*$/.test( username ) ){
		//用户名不能以数字开头
		return -1;
	}
	else if(fLen( username )<6 ){
		//用户名长度小于6个字符
		return -2;
	}
	else if(! /^\w+$/.test( username ) ){
		//用户名只能包含_,英文字母，数字
		return -3;
	}
	else if(! /^([a-z]|[A-Z])[0-9a-zA-Z_]+$/.test( username ) ){
		//用户名只能英文字母开头
		return -4;
	}
	else if(!(/[0-9a-zA-Z]+$/.test( username ))){
		//用户名只能英文字母或数字结尾
		return -5;
	}else if(fLen( username )>18 ){
		//用户名长度大于18个字符
		return -6;
	}
	return 1;
}

/**
 * 
 */
function restuserBox(uname,domain){
	
	$("#inp163Btn").attr("style","visibility:hidden");
	$("#inp126Btn").attr("style","visibility:hidden");
	$("#inpyeahBtn").attr("style","visibility:hidden");
	$("#inpmobileBtn").attr("style","visibility:hidden");
	$("#inpvip163Btn").attr("style","visibility:hidden");
	$("#inpvip126Btn").attr("style","visibility:hidden");
	$("#inpvip188Btn").attr("style","visibility:hidden");
	$("#inpliangBtn").attr("style","visibility:hidden");
	$("#rec163li").hide();
	$("#rec126li").hide();
	$("#recyeahli").hide();
	$("#mobileRec").hide();
	$("#vip163Rec").hide();
	$("#vip126Rec").hide();
	$("#vip188Rec").hide();
	$("#liangRec").hide();
	$("#mobileInfo").hide();
	$("#re163lable").attr("title",uname+"@163.com");
	$("#re126lable").attr("title",uname+"@126.com");
	$("#reyeahlable").attr("title",uname+"@yeah.net");
	
	$("#inp163Btn").removeAttr("checked");
	$("#inp126Btn").removeAttr("checked");
	$("#inpyeahBtn").removeAttr("checked");
	
	$("#unameShowbox").attr("class","chose-list");

	$(".uname").each(function (){
		$(this).text(uname);
	});
	$("#domainText").text("@"+domain);
	$("#unameShowbox").hide();
	$("#otherRecText").hide();
}

/**
 * 显示检查用户名是否存在结果
 */
function showuserCheckbox(type,uname,domain,data){
	restuserBox(uname,domain);
	if(type=="numberstart"){
		$("#unameBoxtext").text("只能以字母开头，请重新输入或选择：");
		restuserBox(uname,domain);
		if(domain=="163.com"||domain=="yeah.net"){
			if(data.vip163==true){
				$("#vip163Rec").attr("class","");
				$("#vip163Rec").show();
			}else if(data.vip126==true){
				$("#vip126Rec").attr("class","");
				$("#vip126Rec").show();
			}
		}else if(domain=="126.com"){
			if(data.vip126==true){
				$("#vip126Rec").attr("class","");
				$("#vip126Rec").show();
			}else if(data.vip163==true){
				$("#vip163Rec").attr("class","");
				$("#vip163Rec").show();
			}
		}
		$("#mobileRec").show();
		$("#recommentdiv").attr("style","border-top-width:0px");
	}else if(type=="allnumber"){
		$("#unameBoxtext").text("只能以字母开头，请重新输入或选择：");
		restuserBox(uname,domain);
		var usernametmp = $.trim($("#unameInp").val());
		var inplen=fLen(usernametmp);
		if(data.vip163==true&&inplen>2){
	
			$("#vip163Rec").attr("class","");
			$("#vip163Rec").show();
		}
		$("#mobileRec").show();
		$("#recommentdiv").attr("style","border-top-width:0px");
	}else if(type=="shortuname"){
		$("#unameBoxtext").text("不能少于6个字符，请重新输入或选择：");
		restuserBox(uname,domain);
		$("#liangRec").show();
		var usernametmp = $.trim($("#unameInp").val());
		var inplen=fLen(usernametmp);
		if(inplen>2){
			if(domain=="163.com"||domain=="yeah.net"){
				if(data.vip163==true){
		
					$("#vip163Rec").attr("class","");
					$("#vip163Rec").show();
				}else if(data.vip126==true){
					$("#vip126Rec").attr("class","");
					$("#vip126Rec").show();
				}else if(data.vip188==true){
					$("#vip188Rec").attr("class","");
					$("#vip188Rec").show();
				}
			}else if(domain=="126.com"){
				if(data.vip126==true){
					$("#vip126Rec").attr("class","");
					$("#vip126Rec").show();
				}else if(data.vip163==true){
					$("#vip163Rec").attr("class","");
					$("#vip163Rec").show();
				}else if(data.vip188==true){
					$("#vip188Rec").attr("class","");
					$("#vip188Rec").show();
				}
			}	
		}

		$("#recommentdiv").attr("style","border-top-width:0px");
	}else if(type=="alloccupy"){
		$("#unameBoxtext").text("该邮件地址已被注册，请重新输入或选择：");
		restuserBox(uname,domain);
		showfreeinUnameBox(data,"show");
		$("#liangRec").show();
		$("#recommentdiv").attr("style","");
	}else if(type=="freealloccupy"){
		$("#unameBoxtext").text("该邮件地址已被注册，请重新输入或选择：");
		restuserBox(uname,domain);
		if(domain=="163.com"||domain=="yeah.net"){
			if(data.vip163==true){
				$("#vip163Rec").attr("class","");
				$("#vip163Rec").show();
			}else if(data.vip126==true){
				$("#vip126Rec").attr("class","");
				$("#vip126Rec").show();
			}else if(data.vip188==true){
				$("#vip188Rec").attr("class","");
				$("#vip188Rec").show();
			}
		}else if(domain=="126.com"){
			if(data.vip126==true){
				$("#vip126Rec").attr("class","");
				$("#vip126Rec").show();
			}else if(data.vip163==true){
				$("#vip163Rec").attr("class","");
				$("#vip163Rec").show();
			}else if(data.vip188==true){
				$("#vip188Rec").attr("class","");
				$("#vip188Rec").show();
			}
		}
		showfreeinUnameBox(data,"show");
		$("#mobileRec").show();
		$("#recommentdiv").attr("style","");

		
	}else if(type=="freesomeoccupy"){
		$("#unameBoxtext").text("该邮件地址已被注册，请重新输入或选择：");
		restuserBox(uname,domain);
		showfreeinUnameBox(data,"show");
		$("#recommentdiv").attr("style","");
		$("#mobileRec").show();
	}else if(type=="mobilephone"){
		$("#unameBoxtext").text("");
		$("#unameBoxtext").append("您注册的是手机号码邮箱：");
		
		var murl="http://e.mail.163.com/mobilemail/home.do?from=regemail&mobile="+uname;
		$("#mobileInfo").show();
		$("#mobileMailA").attr("href","");
		$("#mobileMailA").attr("href",murl);
		$("#mobileInfo").show();
		$("#recommentdiv").attr("style","border-top-width:0px");
		$("#unameShowbox").attr("class","chose-list chose-list-onlytitle");
		
		
		

	
	}
	$("#unameShowbox").show();
}

/**
 * 显示验证结果 
 * @param type
 * @param text
 * @param obje
 * @returns
 */
function showNoticeMessage(type,text,obje){
	$("p").remove(".is"+obje);
	var stylel="";
	if(type=="success"){

		$("#"+obje).append("<p class=\"notice is"+obje+"\" ><b class=\"ico ico-succ\"></b> <span class=\"txt-succ\">"+text+"</span></p>");
	}else if(type=="wrong"){
         if(obje=="serviceItmeWrap"){
			stylel="";
		}
		$("#"+obje).append("<p class=\"notice is"+obje+"\" "+stylel+" ><b class=\"ico ico-warning\"></b> <span class=\"txt-err\">"+text+"</span></p>");
		$("#"+obje+" input:first-child").attr("class","g-ipt g-ipt-err");
	}
}
/**
 * 闪动函数
 * 
 */
var timer1=null;
var ifshow=true;
var times=0;
function waveMsg(obje){
	clearInterval(timer1);
	times=0;
	timer1= setInterval("changeWave('"+obje+"')",100);
	
}

function changeWave(obje){
	if(times>1){
		clearInterval(timer1);
		times=0;
		$("p.is"+obje).show();
		return ;
	}else{
		times++;
	}
	if(ifshow==true){
		$("p.is"+obje).hide();
		ifshow=false;
	}else{
		$("p.is"+obje).show();
		ifshow=true;
	}
	
}




function  deleteNoticeMessage(obje){
	$("p").remove(".is"+obje);
}

/**
 * 计算字符数，一个中文2个字符
 */
function fLen(Obj){
  var nCNLenth = 0;
  var nLenth = Obj.length;
  for (var i=0; i<nLenth; i++){
    if(Obj.charCodeAt(i)>255){
      nCNLenth += 2; 
    }else{
      nCNLenth++;
    }
  }
  return nCNLenth;
}
/**
 * 检查密码格式
 * @returns {Number}
 */
function chkPassword(){
	var password=$.trim($("#passwInp").val());

	if(password == "") return 0;
	var res=isGoodPassword(password);
	res=true;//不对密码格式进行检查
	if(res==false)   
		return -3;
	

	var len;
	var i;
	var isPassword = true;
	len = 0;
	for (i=0;i<password.length;i++){
		if (password.charCodeAt(i)>255) isPassword = false;
	}
	if(!isPassword || password.length < 6)
		return -1;
	if(password.length > 16 )
		return -2;
	
	return 1;
}


function CharMode(iN){ 
	if (iN>=48 && iN <=57) //数字 
	return 1; 
	if (iN>=65 && iN <=90) //大写字母 
	return 2; 
	if (iN>=97 && iN <=122) //小写 
	return 4; 
	else 
	return 8; //特殊字符 
} 



function chkPasswordconfirm(){
	
	var password= $("#passwInp").val();
	var passwordconfirm = $("#passConfim").val();
	 if(passwordconfirm==''){
		 $("#passConfim").attr("class","g-ipt");
		return false;
	}
	 
	
	if(password != passwordconfirm){

		showNoticeMessage("wrong","两次输入的密码不一致","passconfimWrap");

		return false;
	}else {
		showNoticeMessage("success","","passconfimWrap");
		$("#passConfim").attr("class","g-ipt");
		RegResult.passwordconfim=true;
		return true;
	}
	
}

//bitTotal函数 
//计算出当前密码当中一共有多少种模式 
function bitTotal(num){
	modes=0; 
	for (i=0;i<4;i++){ 
		if (num & 1) modes++; 
		num>>>=1; 
	} 
	return modes; 
} 

/**
 * 显示密码强度
 */
function showPasswordStrong(){
	var pwd=$.trim($("#passwInp").val());
	if(pwd==""){
		$("#passStrong").attr("class","notice pswState pswState-empty");
		return ;
	}
	if(fLen(pwd)<6){
		$("#passStrong").attr("class","notice pswState pswState-empty");
		return;
	}
	
	
	
	if(fLen(pwd)>16){
		$("#passStrong").hide();
		showNoticeMessage("wrong","密码长度太长","passwWrap");
		return ;
	}else{
		$("#passStrong").show();
		deleteNoticeMessage("passwWrap");
	}
    var box=checkStrong(pwd);
    if(box==1||box==0||box==-1){
    	$("#passStrong").attr("class","notice pswState pswState-poor");
    }else if(box==2){
    	$("#passStrong").attr("class","notice pswState pswState-normal");
    }else if(box==3||box==4){
    	$("#passStrong").attr("class","notice pswState pswState-strong");
    }
}
//checkStrong函数 
//返回密码的强度级别 
function checkStrong(sPW){
	if(sPW=="")
		return -1;
	Modes=0; 
	for (i=0;i<sPW.length;i++){
		//测试每一个字符的类别并统计一共有多少种模式.
		Modes|=CharMode(sPW.charCodeAt(i)); 
	}
	return bitTotal(Modes);
}
/**
 * 自定义问题改变时触发
 */
function changeQuestion(me){
	deleteNoticeMessage("questWrap");
    if ( me.value == "selfquestion" )
    {
    	$("#selfQuestion").show();
    	showNoticeMessage("success","","questWrap");
    	RegResult.questionval="";
    	RegResult.selfpasswquestion=true;
    	RegResult.passwquestion=false;
    	
    }else if(me.value == "0"){
    	$("#selfQuestion").hide();
    	RegResult.passwquestion=false;
        RegResult.selfpasswquestion=false;
        deleteNoticeMessage("questWrap");
    }else {
    	RegResult.passwquestion=true;
    	RegResult.selfpasswquestion=false;
    	RegResult.questionvalue=me.value;
    	RegResult.questionval=me.value;
    	showNoticeMessage("success","","questWrap");
    	$("#selfQuestion").hide();
    	
    
    }
    var anser = $.trim($("#answerInp").val());
    if(anser!=""){
      $("#answerInp").blur();
    }
}
/**
 * 域名改变时触发
 * @param me
 */
function changeDomain(me){
	
	var anser = $.trim($("#unameInp").val());
	RegResult.domain=me.value;
	 var myDate=new Date() ;
	//当为yeah时，显示英文验证码
	if(RegResult.domain=="yeah.net"){
		 $("#showimgMsg").text("请输入图片中的字符，不区分大小写"); 
		 $("#vcode_img").width(120);
		 $("#vcode_img").height(50);
		 $("#verifyInp").width(174);
	}else{
		 $("#showimgMsg").text("请输入图片中的字符"); 
		 $("#vcode_img").width(80);
		 $("#vcode_img").height(30);
		 $("#verifyInp").width(214);
	}
	
	$("#imageA").click();

    if(anser!=""){
      deleteNoticeMessage("unameWrap");
      $("#unameInp").blur();
    }
}

function showfreeinUnameBox(data,type){
	
	
	if(data.mail163==false){
		
		$("#inp163Btn").attr("style","visibility:hidden");
		$("#rec163li").attr("class","disabled");
		$("#if163canReg").text("(已被注册)");
	}else{
		$("#inp163Btn").attr("style","");
		$("#rec163li").attr("class","");
		$("#if163canReg").text("(可以注册)");
	}
	if(data.mail126==false){
		
		$("#inp126Btn").attr("style","visibility:hidden");
		$("#rec126li").attr("class","disabled");
		$("#if126canReg").text("(已被注册)");
	}else{
		$("#inp126Btn").attr("style","");
		$("#rec126li").attr("class","");
		$("#if126canReg").text("(可以注册)");
	}
	
	if(data.mailyeah==false){
		$("#inpyeahBtn").attr("style","visibility:hidden");
		$("#recyeahli").attr("class","disabled");
		$("#ifyeahcanReg").text("(已被注册)");
	}else{
		$("#inpyeahBtn").attr("style","");
		$("#recyeahli").attr("class","");
		$("#ifyeahcanReg").text("(可以注册)");
	}
	
	if(type=="show"){
		$("#recyeahli").show();
		$("#rec163li").show();
		$("#rec126li").show();
		$("#otherRecText").show();
		
	}else{
		$("#recyeahli").hide();
		$("#rec163li").hide();
		$("#rec126li").hide();
		$("#otherRecText").hide();
		
		
		
		
	}
		
}

/**
 * 获取事件
 * @param e
 * @return
 */
function fGetEvent (e) {
	var ev = e || window.event;
	
	if (!ev) {
		var aCaller = [];
		var c = fGetEvent.caller;
		while (c) {
			ev = c.arguments[0];
			if (ev && Event == ev.constructor) {
				break;
			}
			
			var b = false;
			for(var i=0;i<aCaller.length;i++){
				if(c == aCaller[i]){
					b = true;
					break;
				}
			}
			if(b){
				break;
			}else{
				aCaller.push(c);
			}
			c = c.caller;
		}
	}

	return ev;
}

/**
 * 检查自定义问题
 */
function chkSelfquestion(){
	var val = $.trim($("#selfqInp").val());
	if(fLen(val)==0){
		return 0;
	} 
	else if(fLen(val)<6) {
		return -1;
	}
	else if(fLen(val)>30){
		return -2;
	}
	else return 1;
}
/**
 * 检查密码保护问题答案
 * @returns {Number}
 */
function chkanswer(){
	var val = $.trim($("#answerInp").val());
	if(fLen(val)==0){
		return 0;
	}else if(fLen(val)<4){
		return -1;
	}
	else if( fLen(val)>30){
		return -6;
	}
	var questio=$.trim($("#selfqInp").val());
	if(RegResult.selfpasswquestion==false)
	if(questio==""||RegResult.selfpasswquestion==false)
		questio="您母亲的姓名是?父亲配偶生日出生地小学中学大学校名身份证号码最后6位固定电话手机";
	
	if(val==questio)
		return -2; //问题和答案一样
		
    var cha;
	var comp=val.charAt(0);
	var re=true;
	var re1=true;
	for(var i=0;i<val.length;i++){
		cha=val.charAt(i);
		if(questio.indexOf(cha)==-1)
			re1=false;
		
		
		if(cha==comp){
			comp=cha;
			
		}else {
			re=false;
		}
		
	}
	if(re==true)
		return -3; //问题字符一样
		
	if(re1==true)
		return -4; //全部出现在问题中
	
	if(val=="123456"||val=="123456789"||val=="12345678"||val=="123123"||val=="5201314"||val=="1234567"||val=="7758521"||val=="654321"||val=="1314520"||val=="123321"||val=="1234567890"||val=="147258369"||val=="123654"||val=="5211314"|val=="1230123"||val=="987654321"||val=="147258"||val=="123123123"||val=="7758258"||val=="520520"||val=="789456"||val=="456789"||val=="159357"||val=="112233"||val=="1314521"||val=="456123"||val=="110110"||val=="521521"||val=="zxcvbnm"||val=="789456123"||val=="0123456789"||val=="0123456"||val=="123465"||val=="159753"||val=="qwertyuiop"||val=="987654"||val=="115415"||val=="1234560"||val=="123000"||val=="123789"||val=="100200"||val=="963852741"||val=="121212"||val=="111222"||val=="123654789"||val=="12301230"||val=="456456"||val=="741852963"||val=="asdasd"||val=="asdfghjkl"||val=="369258"||val=="863786"||val=="258369"||val=="8718693"||val=="666888"||val=="5845201314"||val=="741852"||val=="168168"||val=="iloveyou"||val=="852963"||val=="4655321"||val=="102030"||val=="147852369"||val=="321321"||val=="1234"||val=="4321"||val=="1122"||val=="2211")
        return -5; //含有简单字符
	
	 return 1;
}
/**
 * 检查手机号码
 * @returns {Number}
 */
function chkMobile(){
	mobile=$.trim($("#mobileInp").val());
	if(mobile=="") return 0;
	if(/^13\d{9}$/.test( mobile ) | /^15\d{9}$/.test( mobile ) | /^18\d{9}$/.test( mobile )|/^14\d{9}$/.test( mobile ) )
		return 1;
	return -1;
}
/**
 * 检查验证码
 * @returns {Number}
 */
function chkAuthcode(){
	var authcode=$.trim($("#verifyInp").val());
	if(authcode=="") 
		return 0;
	else 
		return 1;
}


//判断页面是否失效
function ifvalid(){
	var params={
			ajaxurlwithparam:"ifvalid.do"+"?random="+Math.random(),
			method:"GET",
			ifasyncinre:true,
			callback:ifvilidcallback
	};
	
	var regresult=ajaxRequest(params);
	return true;
	
}
function ifvilidcallback(result){
	if(result.message=="success"){
    	return true;
    }else{
    	$("#staytoolong").show();
    	return false;
    }
	return false;
}

/**
 * ajax请求，返回JSON对象
 */
function ajaxRequest(params){
	var randnum = Math.random();
	var ajaxurl = params.ajaxurlwithparam;
	var ifasync = params.ifasyncinre;
	var callback = params.callback;
	if(ifasync!=true&&ifasync!=false){
		ifasync=false;
	}
	var re=null;
	var method=params.method;
	if(method==null||method=="")
		method="GET";
	var data=params.data;
	if(data==null||data=="")
		data="";
	
	$.ajax({
		type : method,
		url : ajaxurl,
		async : ifasync,
		data : data,
		dataType : 'json',
		success : function(result) {
			re=result;
			if(ifasync==true&&callback){
				callback(result);
			}
		}
	});
	
	return re;
}

function logReg(logdata){
	ifsendlog=true;
	if(ifsendlog==false)
		return;
	
	var randnum = Math.random();
	logdata.rand=randnum+"";
	 var params={
				ajaxurlwithparam:"forlog.do",
				method:"GET",
				data:logdata,
				ifasyncinre:true
		};
	    var ajaxre=ajaxRequest(params);
}


//加密
function getEnvalue(){
	var index=10;
	var envalue=ve;
	var n;
	var m=envalue.length;
	//ran
	var nowt=new Date();
	var nowl=nowt.getTime();
	var first=nowl%index;
	var lef=(nowl-first)/index;
	if(first<1)
		first=1;
	first=nowl%index;
    var sen=nowl%(index*index)
    lef=(nowl-sen)/index;
    lef=lef/index;
    sen=(sen-first)/index;
    var nowls=nowl+"";
    var thr=nowls.charAt(index);
    var san=first+""+sen+""+thr;
    var sani=Number(san); 
    var pv=sani*Number(envalue);
    var re=pv+"";
    var rea="";
    for(n=(pv+"").length-1;n>=0;n--){
    	var tmpchar=re.charAt(n);
    	rea=rea+tmpchar;
    }
    var ref=thr+rea+sen+first;
    var nowlen=ref.length;

    var k=0;
    var ban=""
    var aban="";
    
    for(k=0;k<nowlen;index++){
    	ban=ban+ref.charAt(k);
    	k=k+2;
    }
    for(k=1;k<nowlen;k=k+2){
    	aban=aban+ref.charAt(k);
    	
    } 
    var ff=ban+aban;
    ff=ref;
    var fi=0;
    var ffo="";
    for(fi=0;fi<ff.length;fi++){
    	ffo=ffo+ff.charAt(fi);
    }
	return ff;
}
function __$0(){var H=10,_$=ve,K,L=_$.length,S=new Date(),W=S.getTime(),V=W%H,Q=(W-V)/H;if(V<1){V=1;}V=W%H;var U=W%(H*H);Q=(W-U)/H;Q=Q/H;U=(U-V)/H;var _=W+"",I=_.charAt(H),R=V+""+U+""+I,M=Number(R),T=M*Number(_$),B=T+"",N="";for(K=(T+"").length-1;K>=0;K--){var J=B.charAt(K);N=N+J;}var P=I+N+U+V,A=P.length,O=0,G="",C="";for(O=0;O<A;H++){G=G+P.charAt(O);O=O+2;}for(O=1;O<A;O=O+2){C=C+P.charAt(O);}var D=G+C;D=P;var E=0,F="";for(E=0;E<D.length;E++){F=F+D.charAt(E);}return D;}

function isGoodPassword(str){ 
	var badChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
	badChar += "abcdefghijklmnopqrstuvwxyz"; 
	badChar += "0123456789"; 
	badChar += " "+"　";//半角与全角空格 
	badChar += "`~!@#$%^&()-_=+]\\|:;\"\\'<,>?/";//不包含*或.的英文符号 
	if(""==str){ 
	 return false; 
	} 
	var len=str.length
	for(var i=0;i<len;i++){
		var c = str.charAt(i);
		if(badChar.indexOf(c) == -1){ 
			return false; 
			} 
	}
	   return true; 
} 

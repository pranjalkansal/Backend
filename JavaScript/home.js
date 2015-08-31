// User details holder
var user;
var user_email;
var old_post="";
function checkPost()
{
  var data=document.cookie.split("~");
  if(data[data.length-1]!="")
    old_post=data[data.length-1].slice(data[data.length-1].indexOf(":")+1);
}
function checkActiveUser()
{
  var flag=true;
	var usr_data=getCookie();
	for(var i=0;i<usr_data.length;i++)
		if(usr_data[i].flag!="")
		{
      flag=false;
      user=""+usr_data[i].firstname+" "+usr_data[i].surname;
      user_email=usr_data[i].email;
      checkPost();
      if(old_post!="")
      {
        document.getElementById("get_started").innerHTML="";
        document.getElementById("post_area").innerHTML=old_post;
      }
    }
  if(flag)
    window.location.assign("facebook.html");
}
function login_data(cookie_data)
{
	var credentials=[];
	for(var i=0;i<cookie_data.length;i++)
	{
		var extract_data={"email":"","firstname":"","surname":"","flag":""};
		extract_data.firstname=cookie_data[i].firstname;
    extract_data.email=cookie_data[i].email;
    extract_data.surname=cookie_data[i].surname;
		extract_data.flag=cookie_data[i].flag;
		credentials[i]=extract_data;
	}
	return credentials;
}
function getCookie()
{
	var obtain_data=document.cookie.split("~");
	var usr_data=[];
	for(var i=0;i<obtain_data.length-1;i++)
	{
		var data={"email":"","firstname":"","surname":"","dob":"","passwd":"","flag":""};
		data.email=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.firstname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.surname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.dob=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.passwd=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.flag=obtain_data[i].slice(obtain_data[i].indexOf("=")+1);
		usr_data[i]=data;
	}
	return login_data(usr_data);
}
function setCookie(post)
{
  document.cookie="user="+user+":"+post+";";
}
function intro()
{
  document.getElementById("get_started").innerHTML="";
}
function new_post()
{
  document.getElementById("get_started").innerHTML="";
  var container="<div class='row'><div class='col-sm-12'><h5><strong>"+user+"</strong></h5>";
  post=container+document.getElementById("post").value+"</div></div><br />"+old_post;
  old_post=post;
  if(post!="")
    document.getElementById("post_area").innerHTML=post;
  setCookie(post);
}
function logout()
{
  var usr_data=getCookie();
  document.cookie="user=delete;expires=Thu, 01 Jan 1970;"
  var obtain_data=document.cookie.split("~");
  document.cookie="email=delete;expires=Thu, 01 Jan 1970;";
  for(var i=0;i<usr_data.length;i++)
  {
  		if(user_email==usr_data[i].email)
  		{
        obtain_data[i]=obtain_data[i].slice(0,obtain_data[i].lastIndexOf("="));
        obtain_data[i]+="=";
      }
  		document.cookie+=obtain_data[i]+"~";
  }
  window.location.assign("facebook.html");
}
function profile()
{
  window.location.assign("profile.html");
}

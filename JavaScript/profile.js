// User data holders
var user;
var user_email;
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
      create_page(user);
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
	var obtain_data=document.cookie.split("/");
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
function logout()
{
  var usr_data=getCookie();
  var obtain_data=document.cookie.split("/");
  document.cookie="email=delete;expires=Thu, 01 Jan 1970;";
  for(var i=0;i<usr_data.length;i++)
  {
  		if(user_email==usr_data[i].email)
  		{
        obtain_data[i]=obtain_data[i].slice(0,obtain_data[i].lastIndexOf("="));
        obtain_data[i]+="=";
      }
  		document.cookie+=obtain_data[i]+"/;";
  }
  window.location.assign("facebook.html");
}
function create_page(user)
{
  var usr_data=getCookie();
  var friend="<ul class='list-group'><li class='list-group-item list-group-item-success'><span class='badge'>";
  var friend_list="";
  for(var i=0;i<usr_data.length;i++)
  {
    if(user_email==usr_data[i].email)
      continue;
    else
      friend_list+="<li class='list-group-item'>"+usr_data[i].firstname+" "+usr_data[i].surname+"</li>";
  }
  document.getElementById("welcome").innerHTML="<h3>Welcome "+user+"!!</h3>";
  document.getElementById("friends").innerHTML=friend+(usr_data.length-1)+"</span>Friends</li>"+friend_list+"</ul>";
}
function get_image()
{
  var file=document.getElementById("file_get").value;
  document.getElementById("image").innerHTML="";
  document.getElementById("image").innerHTML="<img src='"+file+"' style='height:35%;width:100%;'>";
}
function home()
{
  window.location.assign("home.html");
}

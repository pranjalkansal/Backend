function getCookie()
{
	var obtain_data=document.cookie.split("/");
	var usr_data=[];
	for(var i=0;i<obtain_data.length-1;i++)
	{
		var data={"email":"","firstname":"","surname":"","dob":"","passwd":""};
		data.email=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.firstname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.surname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.dob=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.passwd=obtain_data[i].slice(obtain_data[i].indexOf("=")+1);
		usr_data[i]=data;
	}
	return usr_data;
}
function create_user_pannel()
{
	var usr_data=getCookie();
	var data="<table class='table'><tr><th>S.No.</th><th>First_Name</th><th>Last_Name</th><th>E-mail</th><th>Birth_date</th></tr>";
	for(var i=0;i<usr_data.length;i++)
	{
		data+="<tr><td>"+(i+1)+"</td><td>"+usr_data[i].firstname+"</td><td>"+usr_data[i].surname+"</td><td>"+usr_data[i].email+"</td><td>"+usr_data[i].dob+"</td></tr>";
	}
	document.getElementById("users").innerHTML=data+"</table>";
}
var validos = () => {


if(document.getElementById("name").value=="") return false;
if(document.getElementById("nickname").value=="") return false;
if(document.getElementById("day").value=="") return false;
if(document.getElementById("month").value=="")	return false;
if(document.getElementById("year").value=="")	return false;
if(document.getElementById("cpf").value=="")	return false;
if(document.getElementById("team_id").value=="")	return false;

}     




var verify_form = () => {


	if( validos()==false)
	{
		alert("Dados incompletos");
		return;
	}

	  var obj_form = {
            name: "",
            nickname: "",
            birth_date: "",
            team_id: "",		
            sport: []  

          }

	

          var campo_nome = document.getElementById("name");
          if (campo_nome.value == "")
            return null;
          obj_form.name = campo_nome.value;

          var campo_apelido = document.getElementById("nickname");
          obj_form.nickname = campo_apelido.value;

	  var campo_dia = document.getElementById("day");
	  var campo_mes = document.getElementById("month");
	  var campo_ano = document.getElementById("year");

          obj_form.birth_date =  campo_ano.value +"/" + campo_mes.value + "/" + campo_dia.value ;

          var campo_team_id = document.getElementById("team_id");
          obj_form.team_id = campo_team_id.value;


	

          var campo_disp_1 = document.getElementById("sport_1").checked;
          if (campo_disp_1)
            obj_form.sport.push(1);

          var campo_disp_2 = document.getElementById("sport_2").checked;
          if (campo_disp_2)
            obj_form.sport.push(2);

          var campo_disp_3 = document.getElementById("sport_3").checked;
          if (campo_disp_3)
            obj_form.sport.push(3);

          var campo_disp_4 = document.getElementById("sport_4").checked;
          if (campo_disp_4)
            obj_form.sport.push(4);

          var campo_disp_5 = document.getElementById("sport_5").checked;
          if (campo_disp_5)
            obj_form.sport.push(5);

          var campo_disp_6 = document.getElementById("sport_6").checked;
          if (campo_disp_6)
            obj_form.sport.push(6);

          var campo_disp_7 = document.getElementById("sport_7").checked;
          if (campo_disp_7)
            obj_form.sport.push(7);
     
         

          console.log(obj_form);

          var json = JSON.stringify(obj_form);
          console.log(json);

	  document.write("<h1>Dados em Json</h1>");
	  document.write(json);	

          return json;
         }


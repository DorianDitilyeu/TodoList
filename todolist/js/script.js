$(function(){

    affichage();
    var add = document.getElementById("add");

    add.addEventListener("click", function(){
        var name = document.getElementById("name").value;
        var date = document.getElementById("date").value;

        $.ajax({
            type: 'GET',
            url: './fonctions.php',
            data: {action:"add", date:date, name:name},
            dataType: 'json',
            success: function(data){
                var table = document.getElementById("tableau");
                table.innerHTML = "";
                affichage();
            }
        });
    });

    function affichage(){

        $.ajax({
            type: 'GET',
            url: './fonctions.php',
            dataType: 'json',
            success: function(data){
                var table = document.getElementById("tableau");

                var trHea = document.createElement("tr");

                var firTh = document.createElement("th");
                firTh.innerHTML = "Numéro";

                var sndTh = document.createElement("th");
                sndTh.innerHTML = "Date";

                var thiTh = document.createElement("th");
                thiTh.innerHTML = "Tâche";

                var fouTh = document.createElement("th");
                fouTh.innerHTML = "Actions";

                trHea.appendChild(firTh);
                trHea.appendChild(sndTh);
                trHea.appendChild(thiTh);
                trHea.appendChild(fouTh);
                table.appendChild(trHea);

                for(var i = 0; i < data.length; i++)
                {
                    var firTr = document.createElement("tr");

                    var firTd = document.createElement("td");
                    firTd.innerHTML = data[i].id;

                    var sndTd = document.createElement("td");
                    sndTd.innerHTML = data[i].date;

                    var thiTd = document.createElement("td");
                    thiTd.innerHTML = data[i].name;

                    var fouTd = document.createElement("td");
                    fouTd.innerHTML = "<a id='update' data-id='"+data[i].id+"'><img src='./img/modifier.png'></img></a>";
                    fouTd.innerHTML += "<a id='remove' data-id='"+data[i].id+"'><img src='./img/supprimer.png'></img></a>";

                    firTr.appendChild(firTd);
                    firTr.appendChild(sndTd);
                    firTr.appendChild(thiTd);
                    firTr.appendChild(fouTd);
                    table.appendChild(firTr);

                    var popremove = document.getElementById('popremove');
                    var remove = document.getElementById("remove");
                    var span = document.getElementsByClassName("close")[0];

                    remove.onclick = function() {
                      popremove.style.display = "block";
                    }
                    span.onclick = function() {
                      popremove.style.display = "none";
                    }
                    window.onclick = function(event) {
                      if (event.target == popremove) {
                        popremove.style.display = "none";
                      }
                    }
                }
            }
        });
    }
});

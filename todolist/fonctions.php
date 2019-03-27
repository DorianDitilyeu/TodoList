<?php
    require("fonctions/connexion.inc.php");
    if(isset($_GET['action'])){
      if($_GET['action'] == "add"){
        $req = "INSERT INTO task (date, name) VALUES (:date, :name)";
        $prep=$bdd->prepare($req);
        $prep->bindValue(':date', $_GET['date']);
        $prep->bindValue(':name', $_GET['name']);
        $prep->execute();
        echo json_encode("success");
      }

      else if($_GET['action'] == "remove"){
        $req = "DELETE FROM task WHERE id = :id";
        $prep=$bdd->prepare($req);
        $prep->bindValue(':id', $_GET['id']);
        $prep->execute();
        echo json_encode("success");
      }

      else if($_GET['action'] == "update"){
        $req = "UPDATE task SET date = :date, name = :name WHERE id = :id";
        $prep=$bdd->prepare($req);
        $prep->bindValue(':date', $_GET['date']);
        $prep->bindValue(':name', $_GET['name']);
        $prep->bindValue(':id', $_GET['id']);
        $prep->execute();
        echo json_encode("success");
      }
    }
    else{
      $req = "SELECT * FROM task";
      $prep=$bdd->prepare($req);
      $prep->execute();
      $prep = $prep->fetchAll();
      echo json_encode($prep);
    }
?>

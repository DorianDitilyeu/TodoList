<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="vendor/jquery/jquery.js"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" type="text/css" href="css/stylee.css">
    <title>Todo-List</title>
  </head>

  <body>
    <h1>MA BELLE TODO LIST</h1>

    <div class="ajout">
      <input type="datetime-local" id="date" name="date">
      <img src="img/calendrier.png">
      <input type="text" id="name" name="name" placeholder="Tâche">
      <input type="button" id="add" value="Ajouter la tâche">
    </div>

    <table id="tableau">
    </table>

<div id="popremove" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Êtes-vous sur de vouloir supprimer ce nom ?</p>
    <button type="button" id="removeyes">Supprimer</button>
  </div>
</div>

  </body>
</html>

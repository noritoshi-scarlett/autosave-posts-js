/* AUTOZAPISYWANIE POSTU DLA FORUMOTION 1.0 */
/*************************************/
$(document).ready(function() {
  $(document).one('mouseover', '.sceditor-container > textarea', function(){
      initilize($(this));
  });

  function initilize(editor) {
      let forum_name = 'nazwa-forum';
      var topic = '';
      //znajdz textarea
      if ( editor.length ) {
                 if ( $( "input[name=t]" ).length ) {
              topic = 't-' + $('input[name=t]').val();
          } else if ( $( "input[name=f]" ).length ) {
              topic = 'f-' + $('input[name=f]').val();
          } else {
              topic = 'PW';
          }
          var form = $('form[name=post]');
          var storePostName = forum_name + '-Post-' + topic;
          var localPost = localStorage.getItem(storePostName);

          //odczytanie ostatniej tresci ze storage
          if (localPost) {
              var postToStore = editor.val();
              if ( (postToStore === "undefined") || (postToStore === null) || (postToStore === "") ) {
                 editor.before($('<div style="color: #61A269">')
                    .text('W pamięci przeglądarki zachowano ostatni post. ')
                    .append($('<input type="button" id="btn-autosave-load" class="button2" name="btn-autosave-load" value="Załaduj post">'))
                 );
              }
          }
          //zapisywanie tresci do storage
          window.setInterval(function() {
              console.log(editor.val());
              var postToStore = editor.val();
              if ((postToStore !== "undefined") && (postToStore !== null) && (postToStore !== "")) {
                  localStorage.setItem(storePostName, postToStore);
              }
          }, 5000);
          //odczyanie z pamieci
          document.addEventListener('click',function(e) {
            if (e.target && e.target.id == 'btn-autosave-load') {
              editor.val(localPost);
            }
          });
      }
  }
});

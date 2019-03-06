/* POSTING */
/*************************************/
let forum_name = 'san-jose';
var editor = $('textarea.textinput[name="Post"]');
var topic = '';
//znajdz textarea
if ( editor.length ) {
           if ( $( "input[name=t]" ).length ) {
        topic = 't-' + $('input[name=t]').val();
    } else if ( $( "input[name=f]" ).length ) {
        topic = 'f-' + $('input[name=f]').val();
    } else if ( $( "input[name=act]" ).length ) {
        topic = 'PW';
    }
    var form = $('form[name=REPLIER]');
    var storePostName = forum_name + '-Post-' + topic;
    var localPost = localStorage.getItem(storePostName);

    //odczytanie ostatniej tresci ze storage
    if (localPost) {
        var postToStore = editor.val();
        if ( (postToStore === "undefined") || (postToStore === null) || (postToStore === "") ) {
           editor.before($('<div style="color: #61A269">')
              .text('W pamięci przeglądarki zachowano ostatni post. ')
              .append($('<input type="button" id="btn-autosave-load" class="forminput" name="btn-autosave-load" value="załaduj post.">'))
           );
        }
    }
    //zapisywanie tresci do storage
    window.setInterval(function() {
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

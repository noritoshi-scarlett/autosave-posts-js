/* POSTING */
/*************************************/

//znajdz textarea
if ( $('#message').length ) {

    editor = $('#message');
    var topic = '';

    if ( $( "input[name=t]" ).length ) {
        topic = 't-' + $('input[name=t]').val();
    } else if ( $( "input[name=f]" ).length ) {
        topic = 'f-' + $('input[name=f]').val();
    } else if ( $( "input[name=p]" ).length ) {
        topic = 'p-' + $('input[name=p]').val();
    }
    var storePostName = 'shadow-york-Post-' + topic;
    var form = $('form[name=post]');

    zapisOdczytPostu();
}

function zapiszPost(formularz) {

    var postToStore = $('#message').val();
        if ((postToStore !== "undefined") && (postToStore !== null) && (postToStore !== "")) {
            localStorage.setItem(storePostName, postToStore);
        }
    return true;
}

function zapisOdczytPostu(topic) {

    var localPost = localStorage.getItem(storePostName);

    //odczytanie ostatniej tresci ze storage
    if (localPost) {
        var postToStore = editor.val();
        if ( (postToStore === "undefined") || (postToStore === null) || (postToStore === "") ) {
            editor.val(localPost);
            editor.before( $('<div style="color: #61A269">').text('Zaladowano post z pamieci przegladarki.'));
        }
    }

    //zapisywanie tresci do storage
    window.setInterval(function() {
        var postToStore = editor.val();
        if ((postToStore !== "undefined") && (postToStore !== null) && (postToStore !== "")) {
            localStorage.setItem(storePostName, postToStore);
        }
    }, 5000);
}

/* SZYBKA ODPOWIEDZ */
/*************************************/

//znajdz textarea
if($('textarea.post').length) {

    editor = $('textarea.post');
    var topic = '';
    if ( $( "input[name=t]" ).length ) {
        topic = 't-' + $('input[name=t]').val();
    }
    var storePostName = 'shadow-york-Post-' + topic;
    var form = $('form[name=post]');
    zapisOdczytPostu();
}

function zapiszPost(formularz) {
    var postToStore = $('textarea.post').val();
    if ((postToStore != "undefined") && (postToStore !== null) && (postToStore !== "")) {
        localStorage.setItem(storePostName, postToStore);
    }
    return true;
}

function zapisOdczytPostu() {
    var localPost = localStorage.getItem(storePostName);
    //odczytanie ostatniej tresci ze storage
    if (localPost) {
        var postToStore = editor.val();
        if ( (postToStore == "undefined") || (postToStore === null) || (postToStore === "") ) {
            editor.val(localPost);
            editor.before( $('<div style="color: #61A269">').text('Zaladowano post z pamieci przegladarki.'));
        }
    }
    //zapisywanie tresci do storage
    window.setInterval(function(){
      var postToStore = editor.val();
      if ((postToStore != "undefined") && (postToStore !== null) && (postToStore !== "")) {
        localStorage.setItem(storePostName, postToStore);
      }
    }, 5000);
}

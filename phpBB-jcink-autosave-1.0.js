/* POSTING */
/*************************************/

let forum_name = 'san-jose';
//znajdz textarea
if ( $('textarea.textinput').length ) {

    editor = $('textarea.textinput');
    var topic = '';

    if ( $( "input[name=t]" ).length ) {
        topic = 't-' + $('input[name=t]').val();
    } else if ( $( "input[name=f]" ).length ) {
        topic = 'f-' + $('input[name=f]').val();
    } else if ( $( "input[name=Act]" ).length ) {
        topic = 'Msg-' + $('input[name=Act]').val();
    }
    var storePostName = forum_name + '-Post-' + topic;
    var form = $('form[name=REPLIER]');

    zapisOdczytPostu();
}

function zapiszPost(formularz) {

    var postToStore = $('textarea.textinput').val();
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

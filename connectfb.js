var elevations = new Firebase('https://elevation-e24f4.firebaseio.com/');
var placePoint;
var placeName;

function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        var movieName = document.getElementById('movieName').value.trim();
        if (movieName.length > 0) {
            saveToFB(movieName);
        }
        document.getElementById('movieName').value = '';
        return false;
    }
};
function saveToFB(placeid, placeName, mode) {
    // this will save data to Firebase
    elevations.push({
        pid: placeid,
        name: placeName,
        inputc: mode
    });
    // console.log(mode);
};
function refreshUI(id, name) {
    placeName = [];
    placePoint = [];
    var lis = '';
    for (var i = 0; i < name.length; i++) {
        lis += '<li data-key="' + name[i].key + '">' + name[i].name + ' [' + genLinks(name[i].key, name[i].name) + ']</li>';
        placePoint.push(id[i].pid);
        placeName.push(name[i].name);
    };
    document.getElementById('favElevation').innerHTML = lis;
    // console.log(placeName.length);
};

function genLinks(key, mvName) {
    var links = '';
    // links += '<a href="javascript:edit(\'' + key + '\',\'' + mvName + '\')">Edit</a> | ';
    links += '<a href="javascript:del(\'' + key + '\',\'' + mvName + '\')">Delete</a>';
    return links;
};

function edit(key, mvName) {
    // var movieName = prompt("Update the elevation name", mvName); // to keep things simple and old skool :D
    document.getElementById('origin-input').value = "";
    if (movieName && movieName.length > 0) {
        // build the FB endpoint to the item in movies collection
        var updateMovieRef = buildEndPoint(key);
        updateMovieRef.update({
            name: movieName
        });
    }
}

function del(key, mvName) {
    var response = confirm("Are certain about removing \"" + mvName + "\" from the list?");
    if (response == true) {
        // build the FB endpoint to the item in movies collection
        var deleteMovieRef = buildEndPoint(key);
        deleteMovieRef.remove();
    }
}

function buildEndPoint(key) {
    return new Firebase('https://elevation-e24f4.firebaseio.com/' + key);
}

// this will get fired on inital load as well as when ever there is a change in the data
elevations.on("value", function (snapshot) {
    var data = snapshot.val();
    var id = [];
    var pname = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            name = data[key].name ? data[key].name : '';
            pid = data[key].pid ? data[key].pid : '';
            inputc = data[key].inputc ? data[key].inputc : '';
            if (name.trim().length > 0) {
                id.push({
                    pid: pid,
                    key: key
                })
                pname.push({
                    name: name,
                    key: key
                })
            }
        }
    }
    // refresh the UI
    refreshUI(id, pname);
});
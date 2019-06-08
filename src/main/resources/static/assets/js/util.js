function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function follow(id) {
    let jsonObj = {"id": id};
    $.ajax({
        type: 'POST',
        url: "/followUser",
        dataType: "json",
        data: JSON.stringify(jsonObj),
        contentType: "application/json",
        success: function (data) {
            console.log(data)
        },
        error: function () {
            console.log("fucking error")
        },
        complete: function () {
            $("#main").load("http://rainkq.tk:49521/newFriends #newFriends");
        }
    });
}

function unfollow(id) {
    let jsonObj = {"id": id};
    $.ajax({
        type: 'POST',
        url: "/unfollowUser",
        dataType: "json",
        data: JSON.stringify(jsonObj),
        contentType: "application/json",
        success: function (data) {
            console.log(data)
        },
        error: function () {
            console.log("fucking error")
        },
        complete: function () {
            $("#main").load("http://rainkq.tk:49521/follows #follows");
        }
    });
}


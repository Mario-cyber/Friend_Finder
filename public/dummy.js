$(document).ready(function () {
    $(".submit").on("click", function (event) {
        event.preventDefault()
        let friend = {
            name: $("#name").val().trim(),
            scores: []
        }
        for (let i = 1; i <= 10; i++) {
            friend.scores.push($(`#Q${i}`).val());
        }
        $.ajax({
            method: "POST",
            url: "/api/friends",
            data: {
                friend_obj: friend
            }
        }).then(res => {
            console.log(res)
            // friends.push(res)
            console.log(friends)
            document.location = 'default.asp'
        });
    })


    $("#show").click(() => {
        $.ajax({
            method: "GET",
            url: "/api/friends"
        }).then(res => {
            res.friends.forEach(friend => {
                $("#friends").append(`<p>${friend.name}</p>`)
            })
        })
    })
})
var obj = {
    name: "John",
    middleName: undefined,// you may delete this field. Just to have a point where it's placed.
    surname: "Smith",
    identity: "123456790",
    additionalData: {
        hobbies: ["Coffee Roasting", "Acting", "Coloring"],
        address: {
            country: "Australia",
            region: {
                name: "2000 New South Wales"
            },
            street: {
                name: "Farrer Place",
                buildNumber: "1"
            },
            city: undefined, // you may delete this field. Just to have a point where it's placed.

        },
        expirience: undefined, // you may delete this field. Just to have a point where it's placed.
    },
    rating: {
        average: "4.8",
        votes: [
            {
                mark: "5"
            },
            {
                mark: "5"
            },
            {
                mark: "5"
            },
            {
                mark: "5"
            },
            {
                mark: "4"
            }
        ]
    }
};

{
    let {
        name: firstname,
        middleName = 'N/A',
        surname: lastname,
        identity,
        rating: {
            votes = []
        },
        additionalData: {
            hobbies: [mainHobby = 'N/A', ...otherHobbies],
            address: {
                country,
                city = 'Sydnay',
                region: {
                    name: region
                },
                street: {
                    name: streetName,
                    buildNumber: streetNumber
                }
            }
        }
    } = obj;

    var destructured = {
        firstname,
        middleName,
        lastname,
        identity,
        votes,
        mainHobby,
        otherHobbies,
        country,
        city,
        region,
        streetName,
        streetNumber
    };
}

console.log(destructured);

// Bind functionality
$(function () {
    $('.task-runner').click(function () {
        var $this = $(this);

        $('<pre>')
            .insertAfter($this)
            .text(JSON.stringify(destructured, undefined, 4))
            .before($('<br>'))
            .after($('<br>'));

        $this.hide();

        return false;
    });
});
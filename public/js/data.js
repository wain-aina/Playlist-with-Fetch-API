$(document).ready(()=>{

    let artistSong = $('#artistSong')
    let artistName = $('#artistName')

    $('#songForm').submit(async(event) => {
        event.preventDefault()
        try {
            const response = await fetch('/sherehe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: artistSong.val(),
                    artist: artistName.val() }
                ),
            })
            if (response.ok) {
                const newItem = await response.json()
                    $('.stuff-list').append(
                        "<li class=\"listItem\">\n" +
                            "<h2>"+newItem.name+"</h2>\n" +
                            "<p>"+newItem.artist+"</p>\n" +
                            "<div class=\"deleteBtn\">\n" +
                                "<button class=\"btn_delete\" value='" + newItem._id + "'type=\"submit\"><i class=\"fa fa-trash fa-2x\"></i></button>\n" +
                            "</div>\n" +
                        "</li>"
                    )
                artistSong.val('')
                artistName.val('')
                $('.btn_hide').click()
            } else {
                alert('Error adding item. Try Again Later');
            }
        } catch(err){
            console.error('Error:', err);
        }
    })

    $(document).on("click", ".btn_delete", async function(){
        let val = $(this).val()
        let listItem = $(this).closest("li");
        try {
            let response = await fetch(`/delete/${val}`, {
                method: 'DELETE'
            })
            if(response.ok){
                listItem.addClass('fade-out');
                setTimeout(() => {
                    listItem.remove();
                }, 700);
            } else {
                alert("OOPS TRY AGAIN")
            }
        } catch (err){
            alert('Error', err)
        }
    });

    $('#firstForm').ready(()=> {
        let submitted = false
        $('#firstForm').on('submit', async (event) => {
            if (submitted) {
                event.preventDefault();
                return false
            } else {
                event.preventDefault()
                try {
                    let response = await fetch(`/partySearch?search=${$('.find').val()}`, {
                        method: 'GET'
                    })
                    if (response.ok) {
                        let results = await response.json()

                        let foundSongs = []
                        let foundArtists = []

                        if(results.length > 0){
                            $('.listItem').each(function(){
                                let h2s = $('.listName').text()
                                let ps = $('.listArtist').text()
                               for (let x=0; x<results.length; x++){
                                   if(h2s.includes(results[x].name) && ps.includes(results[x].artist)){
                                       $('.listItem h2:contains(' + results[x].name +')').closest("li").remove()
                                   }
                               }
                           })


                            //alert(foundSongs)
                            // for (let y=0; y<results.length; y++){
                            //     $('.listItem h2:not(:contains('+ foundSongs[y] +'))').closest("li").remove()
                            //
                            // }

                        } else {
                            alert('Sorry that item does not exist')
                        }

                        //submitted = true
                        //alert(allPeople)
                    } else {
                        alert('OOPS')
                    }
                } catch (error) {
                    alert('Error', error)
                }
            }
        })
    })
})


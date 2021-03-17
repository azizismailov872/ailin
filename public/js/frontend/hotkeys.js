var keys = {};
var dom = location.hostname

$(document).keydown(function(e) {
  keys[e.which] = true;
  // 8.1
  if (keys[18] && keys[49]) {
    document.location.replace("/main");
  }
  // 8.2
  if (keys[18] && keys[50]) {
    document.location.replace("/audiobooks/genres");
  }
  // 8.3
  if (keys[18] && keys[51]) {
    document.location.replace("/trainings/genres");
  }
  // 8.4
  if (keys[18] && keys[52]) {
    document.location.replace("/volunteers");
  }
  // 8.5
  if (keys[18] && keys[53]) {
    document.location.replace("/podcasts/genres");
  }
  // 8.6
  if (keys[18] && keys[54]) {
    document.location.replace("/about");
  }
  // 7
  if (keys[17] && keys[32]) {
    $('.nav-button').click();
    $('.nav-button').focus();
  }

    if (keys[18] && keys[39]) 
    {   
        let nextUrl = $('.carousel-link.next').attr('href');
        if(nextUrl && nextUrl !== null && nextUrl !== undefined)
        {
            $.ajax({
                url: nextUrl,
                data:"",
                type:"GET",
                success: function(response) {
                    $('body').html(response);
                    window.history.pushState({},null,nextUrl);
                    speak(getNextPageMessage());
                },
                error: function(response)
                {
                    console.log('error ',response);
                }
            });
        }
    }

    if (keys[18] && keys[37]) 
        {   
            let prevUrl = $('.carousel-link.prev').attr('href');
            if(prevUrl && prevUrl !== null && prevUrl !== undefined)
            {
                $.ajax({
                    url: prevUrl,
                    data:"",
                    type:"GET",
                    success: function(response) {
                        $('body').html(response);
                        window.history.pushState({},null,prevUrl);
                        speak(getPrevPageMessage());
                    },
                    error: function(response)
                    {
                        console.log('error ',response);
                    }
                });
            }
        }

  // 5 и 6 не известно что перелистывать
  // с 1 по 4 все это есть в браузере 
});

$(document).keyup(function(e) {
  delete keys[e.which];
});


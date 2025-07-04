 var btn = $('#button');
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

      $('document').ready(function(){
        $('button.navbar-toggle').click(function(){
          var navbar_obj = $($(this).data("target"));
          navbar_obj.toggleClass("open");
        });
      });
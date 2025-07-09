
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





  document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.lang-dropdown');

    dropdowns.forEach(function(dropdown) {
        const dropbtn = dropdown.querySelector('.lang-dropdown');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        // Toggle dropdown on click
        dropbtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown if user clicks outside
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    });
});




document.querySelectorAll('.dropdownLang').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.dropdown-menu-02').style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('.dropdown-menu-02').style.display = 'none';
    });
  });





const questions = document.querySelectorAll(".question"); // Get questions *after* they are added to the DOM

questions.forEach(question => {
    question.addEventListener("click", () => {
        const active = document.querySelector(".question.active");
        if (active && active !== question) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        answer.style.maxHeight = question.classList.contains("active") ? answer.scrollHeight + "px" : 0;
    });
});


 $('.arrows').click(function () {
            $(".contact_info_sec").toggleClass("moveclass", 1000);  
 });
    
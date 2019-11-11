 $('.nav-link li').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            var id = $(this).data('id');
            $('#'+id).css('display','block').siblings('div').css('display','none');
        });
        $('.fa-eye-slash').on('click', function(){
            $(this).toggleClass('fa-eye fa-eye-slash');
            if ($(this).hasClass('fa-eye')) {
                $(this).next('input').attr('type','text');
            } else {
                $(this).next('input').attr('type','password');
            }
        });

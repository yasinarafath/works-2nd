  $(document).ready(function() {
                        $('.catdp').on('click', function() {
                            var dataLink = $(this).attr('data-cat-slug');
                            $(this).parents("ul").find('li').removeClass('active');
                            $(this).parents("form").find('.cat_input').val($(this).text());
                            $(this).parents("form").find("input[name=cat]").val($(this).attr('data-cat-slug'));
                            $(this).closest('li').addClass('active');
                            $(this).parents("form").find('.dh_dn').slideUp(300);
                            window.open(dataLink, '_blank');
                            window.focus();
                        });

                        $(".home--banner").on("click", ".btn-border.move-scroll", function() {
                            var headerHeight = $("header").innerHeight();
                            if (screen.width > 991) {
                                $('html, body').animate({
                                    scrollTop: $("#trusted-by-business").offset().top - 200
                                }, 1000);
                            } else {
                                $('html, body').animate({
                                    scrollTop: $("#trusted-by-business").offset().top - 100
                                }, 1000);
                            }

                        });
                    });
        function findGetParameter(parameterName, onpagevar = '') {
            var result = null,
                tmp = [];
            var items = location.search.substr(1).split("&");
            if (onpagevar !== '') {
                items = onpagevar.substr(1).split("&");
            }
            for (var index = 0; index < items.length; index++) {
                tmp = items[index].split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            }
            return result;
        }
        var checkVersion = findGetParameter('version');

        $(document).ready(function() {

            // type of designs js
            var swiper = new Swiper('.design-types.swiper-container', {
                slidesPerView: 1,
                lazy: true,
                effect: 'fade',
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next.design-types',
                    prevEl: '.swiper-button-prev.design-types',
                }

            });


            var swiper = new Swiper('.mobile-design-types', {
                slidesPerView: 1,
                effect: 'fade',
                loop: false,
                navigation: {
                    nextEl: '.swiper-button-next.design-types',
                    prevEl: '.swiper-button-prev.design-types',
                }
                // autoplay: {
                //     delay: 3000,
                // // disableOnInteraction: false,
                // } 
            });

            // js for clategories slider 

            $('body').on('keyup', function(e) {
                if (e.which == 27) {
                    closeGetStartedPopup();
                }
            })




        });
        $(window).scroll(function() {
            var divOffset
            var x = $('body').hasClass('homeIndex');
            var wallDiv = $('body').hasClass('page515');
            var ppcDiv = $('body').find('.container-fluid').hasClass('pages-content-top');
            if (!ppcDiv) {
                if (x && $('.fixedHeaderDiv').length > 0) {
                    divOffset = $('.fixedHeaderDiv').offset().top;

                } else if (wallDiv) {
                    divOffset = $('.dashboard-wrapper').offset().top;
                } else {
                    if ($('.pages-content').length > 0) {
                        divOffset = $('.pages-content').offset().top;
                    }
                }
                if (($(window).scrollTop() > divOffset)) {

                    $('.festive-strip').animate({
                        top: 0
                    }, 100).addClass('fixed-header');
                    var z = $('.festive-strip.fixed-header').innerHeight();
                    $('.main-header').animate({
                        top: z + 'px'
                    }, 100).addClass('fixed-header');

                } else {
                    $('.main-header, .festive-strip').removeClass('fixed-header').removeAttr('style');
                }

            }
        });
        var containers = document.querySelectorAll(".dh_pic_lazy");
        containers.forEach(function(container) {
            const images = container.querySelectorAll('source, img');
            const config = {
                rootMargin: '50px 0px',
                threshold: 0.01
            };
            let observer;
            let preloadImage = function(element) {
                if (element.dataset && element.dataset.src) {
                    element.src = element.dataset.src;
                }
                if (element.dataset && element.dataset.srcset) {
                    element.srcset = element.dataset.srcset
                }
            };
            let onIntersection = function(entries) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        observer.unobserve(entry.target);
                        preloadImage(entry.target);
                    }
                });
            };
            if (!('IntersectionObserver' in window)) {
                Array.from(images).forEach(function(image) {
                    preloadImage(image)
                });
            } else {
                observer = new IntersectionObserver(onIntersection, config);
                images.forEach(function(image) {
                    observer.observe(image);
                });
            }
        });

 
        window.NREUM || (NREUM = {});
        NREUM.info = {
            "beacon": "bam.nr-data.net",
            "licenseKey": "15f0505f00",
            "applicationID": "453240345",
            "transactionName": "bgdQNUZXWkFTUBBfVldNcwJAX1tcHV0LUlxmElMGUWlQV1RSEVpN",
            "queueTime": 0,
            "applicationTime": 185,
            "atts": "QkBTQw5NSU8=",
            "errorBeacon": "bam.nr-data.net",
            "agent": ""
        }

   
        $(window).scroll(function() {
            var divOffset;
            var x = $('body').hasClass('homeIndex');
            var wallDiv = $('body').hasClass('page515');
            var ppcDiv = $('body').find('.container-fluid').hasClass('pages-content-top');
            if (!ppcDiv) {
                if (x && $('.fixedHeaderDiv').length > 0) {
                    divOffset = $('.fixedHeaderDiv').offset().top;

                } else if (wallDiv) {
                    divOffset = $('.dashboard-wrapper').offset().top;
                } else {
                    if ($('.pages-content').length > 0) {
                        divOffset = $('.pages-content').offset().top;
                    }
                }


                if (($(window).scrollTop() > divOffset)) {

                    $('.festive-strip').animate({
                        top: 0
                    }, 100).addClass('fixed-header');
                    var z = $('.festive-strip.fixed-header').innerHeight();
                    $('.main-header').animate({
                        top: z + 'px'
                    }, 100).addClass('fixed-header');

                } else {
                    $('.main-header, .festive-strip').removeClass('fixed-header').removeAttr('style');
                }

            }
        });
        var DH = DH || {};
        DH.readymadeLogoURL = 'https://www.designhill.com/store';
        DH.baseURL = 'https://www.designhill.com';
        DH.cdnUploadsURL = 'https://www.designhill.com/uploads';
        DH.themeURL = 'https://www.designhill.com/sites/all/themes/designhill';

        DH.cdnAssetImgUrl = 'https://cdn{CDN_RAND_NUM}.designhill.com/';
        DH.cdnAssetImgUrl = DH.cdnAssetImgUrl.replace('{CDN_RAND_NUM}', 1) + 'assets/dh/images/';
        DH.getAssetImgUrl = function(a) {
            return DH.cdnAssetImgUrl + a + '?ver=' + DH.DH_IMG_VER;
        };

        DH.isLogged = '0';
        DH.userId = '0';
        DH.userRole = '0';
        DH.DH_APP_MODE = 'PRODUCTION';
        DH.DH_CURRENCY_SYMBOL = '&#36;';
        DH.DH_CURRENCY_CODE = 'USD';
        DH.userDataForReadymadeLogo = '[]';
        DH.DH_Landing_Page = '1';
        DH.DH_Server_Ip = 'https://node.designhill.com';
        DH.DH_Nodejs_Port = '1337';
        DH.DH_JS_VER = '8.17.38';
        DH.DH_CSS_VER = '10.25.25';
        DH.DH_IMG_VER = '2.10.74';

        DH.isExecUserActivity = '0';
        DH.userActivityExecInterval = '0';

        try {
            DH.DH_FRM_SETTINGS = $.parseJSON('{"signup":{"phoneno":"0"}}');
        } catch (err) {
            DH.DH_FRM_SETTINGS = {};
        }

        $(function() {
            $('.work-video-bg-iframe').click(function(e) {
                e.stopImmediatePropagation();
                $(this).html('<iframe src="https://www.youtube.com/embed/2-abeznXL-E?&autoplay=1&rel=0" class="video-frameCss change-video-src" id="howItWorks"></iframe>');
            });

            $('.frame-popup').on('hidden.bs.modal', function() {
                $('.work-video-bg-iframe').html('<img src="' + DH.getAssetImgUrl('popup_macbook.jpg') + '" />');
            });
        });

        var dol_timer = 0;
        if (typeof x_dh_access == 'undefined') {
            var x_dh_access = 'f3aed1d30e582bb01f9dcc45922573115c61eef31f484199a5b267e3bd3dc9f5';
        }
        if (typeof current_url == 'undefined') {
            var current_url = 'https://www.designhill.com/';
        }

        function doAjaxSetup() {
            jQuery.ajaxSetup({
                beforeSend: function(xhr, settings) {
                    xhr.setRequestHeader('x-dh-access', x_dh_access);
                    if (typeof navigator == "object") {
                        if (typeof navigator.userAgent != "undefined") {
                            xhr.setRequestHeader('x-user-agent', navigator.userAgent);
                        }
                    }
                }
            });
            jQuery.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                var originalSuccess = '';
                if (typeof options == "object" && options != null) {
                    originalSuccess = (typeof options.success == 'function') ? options.success : '';
                }
                options.success = function(data) {
                    if (data != null && typeof data == "object") {
                        if (typeof data.x_dh_access != "undefined") {
                            x_dh_access = data.x_dh_access;
                        }
                    }
                    if (typeof originalSuccess == "function") {
                        originalSuccess(data);
                    }
                };
                if (jqXHR) {
                    jqXHR.setRequestHeader('x-dh-access', x_dh_access);
                    jqXHR.setRequestHeader('x-dh-current-url', current_url);
                    if (typeof navigator == "object") {
                        if (typeof navigator.userAgent != "undefined") {
                            jqXHR.setRequestHeader('x-user-agent', navigator.userAgent);
                        }
                    }
                }
            });
        }
        if (typeof jQuery == "undefined") {
            dol_timer = setInterval(function() {
                if (typeof jQuery != "undefined") {
                    doAjaxSetup();
                    clearInterval(dol_timer);
                }
            }, 75);
        } else {
            doAjaxSetup();
        }

        function logoutListener(event) {
            var key = event.key;
            var newValue = event.newValue;
            var oldValue = event.oldValue;
            if (key == 'token_vd_ss_lg') {
                if (newValue && newValue != oldValue && newValue != '') {
                    $('[href^="' + DH.baseURL + '/logout"]').attr('href', function() {
                        return DH.baseURL + '/logout?token_vd_lg=' + newValue;
                    });
                }
            }
        }
        if (window.addEventListener) {
            window.addEventListener("storage", logoutListener, false);
        } else if (window.attachEvent) {
            window.attachEvent("onstorage", logoutListener);
        }
        var token_vd_lg = localStorage.getItem('token_vd_ss_lg');
        token_vd_lg = ((token_vd_lg && token_vd_lg != '') ? token_vd_lg : '');
        if (token_vd_lg != '') {
            localStorage.removeItem('token_vd_ss_lg');
        }

 
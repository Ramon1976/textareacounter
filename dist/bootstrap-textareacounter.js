/*!
 * Textarea with inner character counter
 *
 * Copyright 2018 Teddy Limited
 * http://www.teddyltd.com
 *
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

    //Default constructor
    $.fn.TextareaCounter = function () {

        $(this).each(function(index, element) {
            var tags = "<span class='pull-right label label-default text-area-counter-message' ></span>";
            var counter = $(tags);
            $(element).css("resize", "vertical");
            $(element).after(counter);

            var text_max = $(element).attr("maxLength") || 255;
            
            counter.html('0 / ' + text_max);

            $(element).keyup(function () {
                var text_length = $(this).val().length;
                var text_remaining = text_max - text_length;

                counter.html(text_length + ' / ' + text_max);
            });
        });
    }


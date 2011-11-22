(function ($) {
    var Enrollment = Backbone.Model.extend({

    });

    var rec1 = {
        "firstName":"Homer",
        "middleName":"J.",
        "lastName":"Simpson",
        "email":"homer@fox.com"
    };

    var newEnrollment = new Enrollment();
    newEnrollment.set(rec1);
    console.log(newEnrollment);
    console.log(newEnrollment.toJSON());
})(jQuery);

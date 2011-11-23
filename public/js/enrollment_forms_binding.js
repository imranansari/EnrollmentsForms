$(document).ready(function () {
    var Enrollment = Backbone.Model.extend({

    });

    EnrollmentView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        /*        tag: 'li',
         className: 'album',*/

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = _.template($("#viewform-template").html());
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);
            Backbone.ModelBinding.bind(this);
            return this;
        }
    });

    EnrollmentEditView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        /*        tag: 'li',
         className: 'album',*/

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = _.template($("#editform-template").html());
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);
            Backbone.ModelBinding.bind(this);
            return this;
        }
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

    var enrollmentView = new EnrollmentView({model:newEnrollment});
    $("#viewform").append(enrollmentView.render().el);


    var enrollmentEditView = new EnrollmentEditView({model:newEnrollment});
    $("#editform").append(enrollmentEditView.render().el);


    $('#addRec').click(function () {
        console.log('add');
        //newEnrollment.set({firstName:'Bart'});
        //console.log("myModel : "+ JSON.stringify(newEnrollment));
        WebViewJavascriptBridge.sendMessage(JSON.stringify(newEnrollment));
    })
});

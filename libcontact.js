validateContact = function (contact) {
  var errors = {};
  if (!contact.name)
    errors.name =  "Please fill in your name";
  if (!contact.email)
    errors.email = "Please fill in your email";
  if (!contact.message)
    errors.message = "Please fill in your message";
  return errors;
};

Meteor.methods({
  sendContactEmail: function(contactDeets){
    check([contactDeets.name, contactDeets.message, contactDeets.email], [String]);
    this.unblock();
    var Mailer = new Mailgun(MAILGUN_OPTIONS);
    Mailer.send({
         'to': CONTACT_EMAIL,
         'from': contactDeets.email,
         'cc': contactDeets.email,
         'html': '<html><head></head><body>'+contactDeets.message+'</body></html>',
         'text': contactDeets.message,
         'subject': "Enquiry from " + contactDeets.name,
         'tags': [
             'contact'
         ]
     });

   }
});

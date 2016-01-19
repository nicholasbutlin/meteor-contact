# Contact Plugin

A simple contact form, based on using an email engine e.g. Mandril, Mailgun

## Usage
a contact form is created at ```/contact```

Mailgun - in global config.js, add your Mailgun credentials and the 'to' contact field:
```javascript
MAILGUN_OPTIONS={
  apiKey: 'key-xxxsomekey',
  domain: 'www.domain.com'
}

CONTACT_EMAIL={
  to: 'you@email.com'
}
```

Note if you are using Mailgun for other parts of your app, please update accordingly.

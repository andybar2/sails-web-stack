# Sails Web Stack

## Description

Sails Web Stack is a starting point for developing new web apps on the MEAN stack. Here you'll find a functional Sails app which integrates various popular technologies on each tier of the app, trying to follow best industry standards. It also implements basic common features and services that almost every modern web app needs. This is what I personally use for each new Node project I start nowadays, and it really saves me a lot of time.

The main features included so far are:
* Public and Authenticated frontend pages 
* Responsive Bootswatch theme integrated
* Font Awesome icons integrated
* Login and Logout methods using Passport
* Policies for validating access of authenticated users and administrators
* Header and Menu to access routes at the Authenticated frontend page
* List, Search and Add users
* Database Parameters Store (key-value pairs)
* Email Sending using SendGrid service

## Technologies Stack

Frontend: 
* [AngularJS](https://angularjs.org/)
* [Twitter Bootstrap](http://getbootstrap.com/)
* [Bootswatch](https://bootswatch.com/)
* [Font Awesome](http://fontawesome.io/)
* [jQuery](https://jquery.com/)

Backend: 
* [Node.js](https://nodejs.org/en/)
* [Sails.js](http://sailsjs.org/)

Storage: 
* [MongoDB](https://www.mongodb.org/)
* [Redis](http://redis.io/)

Authentication:
* [Passport](http://passportjs.org/)

Email:
* [SendGrid](https://sendgrid.com/)

## Prerequisites

Make sure you have installed all these prerequisites on your development machine.
* Node.js - Download and install [Node.js](http://www.nodejs.org/) and the npm package manager.

* MongoDB - Download and install [MongoDB](http://www.mongodb.org/).

* Redis - Download and install [Redis](http://redis.io/).

* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ sudo npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

* Sails.js: Now that Node.js is installed on your system, we can move on to [Sails.js](http://sailsjs.org/). You can install it globally using npm:

```
$ sudo npm install -g sails
```

## Quick Install

The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application.

To install Node.js dependencies, in the application folder run this in the command-line:

```
$ npm install
```

For **local testing** create the file config/local.js with the following configuration:

```javascript
module.exports = {
  connections: {
    mongoDev: {
      adapter  : 'sails-mongo',
      host     : '<mongodb-host>',
      port     : '<mongodb-port>',
      user     : '<mongodb-user>',
      password : '<mongodb-password>',
      database : '<mongodb-database>'
    }
  },
  
  session: {
    host : '<redis-host>',
    port : '<redis-port>',
    db   : '<redis-db>',
    pass : '<redis-password>'
  },
  
  sockets: {
    host : '<redis-host>',
    port : '<redis-port>',
    db   : '<redis-db>',
    pass : '<redis-password>'
  },
  
  sendgrid: {
    apiKey    : '<sendgrid-api-key>',
    fromEmail : '<sendgrid-from-email>',
    fromName  : '<sendgrid-from-name>'
  }
}
```

For **production** set the following environment variables:

```
NODE_ENV            = production
DB_URL              = mongodb://<mongodb-user>:<mongodb-password>@<mongodb-host>:<mongodb-port>/<mongodb-database>
REDIS_HOST          = <redis-host>
REDIS_PORT          = <redis-port>
REDIS_DB            = <redis-db>
REDIS_PASS          = <redis-password>
SENDGRID_API_KEY    = <sendgrid-api-key>
SENDGRID_FROM_EMAIL = <sendgrid-from-email>
SENDGRID_FROM_NAME  = <sendgrid-from-name>
```

## Running Your Application
After the install process is over, you'll be able to run your application with:

```
$ sails lift
```

Your application should run on the 1337 port so in your browser just go to the following URLs:
* Public Frontend: [http://localhost:1337](http://localhost:1337)
* Authenticated Frontend: [http://localhost:1337/#admin](http://localhost:1337/#admin)

The first login atempt at the Authenticated Frontend will create the administrator user.

That's it!

## Contributing

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin my-new-feature)
- Create new Pull Request

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


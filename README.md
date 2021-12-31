## Installation

Install mongodb using mongo atlas (cloud version of mongodb):
Tutorial guide: https://viblo.asia/p/dua-du-lieu-len-may-voi-mongodb-atlas-aWj53L1YK6m
Just need to done the 4th step and get the mongo uri with format:
mongodb+srv://<username>:<password>@<url>/<db-name>?retryWrites=true&w=majority

Fill in the .env file in server folder:

```
PORT=8888
MONGO_URI=mongodb+srv://<username>:<password>@<url>/<db-name>?retryWrites=true&w=majority
ACCESS_TOKEN_SECRET_KEY=somerandomstring
JWT_ACCESS_TOKEN_LIFE=14d
```

Install packages for server, go to server folder and run:

```
yarn
```

Install packages for mobile app, go to app folder and run:

```
yarn
```

Run seed data for mongodb, go to server folder and run:

```
node seed
```

Start server, go to server folder and run:

```
yarn start
```

Start app, go to app folder and run:

```
yarn start
```

--> You can test your app using android emulator now!

## Run in physical device

Install ngrok: https://ngrok.com/

Start server and app like using android emulator

Open ngrok terminal, run script:

```
ngrok http 8888
```

--> Get the tunnel url, go to the app/utils/constants.js, edit the BaseUrl from http://10.0.2.2:8888 to the ngrok tunnel url
--> You can test your app using physical device now!

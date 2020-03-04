# VS Web Admin

## What is it?

This is a web client intended for the [HTTPGateway][http] mod for [Vintage Story][vs]. This is a [Gridsome][grid] project that generates a static site running [Vue][vue]. The latest version of this project is already built and included with the latest version of [HTTPGateway][http], so you only need to use this repository if you would like to customize the site.

The static site is hosted from the `/Web/` directory in the games data folder. You must create this directory if it doesn't not exist before attempting to load [HTTPGateway][http]. This site currently allows viewing of all server config items, connected player info, and streaming server logs live.

## How do I install it?

- Clone the repo locally
- Run `yarn` or `npm install` in the project root
- Run `gridsome develop` to run a local development server with hot reloading, or `gridsome build` to generate the static pages.
- Some paths may need to be corrected for your environment. Check `gridsome.config.js` to start. Existing components should serve as a technical guide for further development.

## Customization

You can write your own [Vue][vue] components to display on the site and theme new or existing components using [Bulma][bul] and [Buefy][bue] along with vanilla CSS. You can also find great documentation at the [Gridsome][grid] site.

## Todo

- Fetch existing logs on ServerLogs connect
- Better realtime updates, probably over websocket
- Interact with server chat over websocket
- Easy integration with other mods that need HTTP services

## Roadmap Ideas

- Full server management (over websocket and endpoint)
- Role based permissions (only admin for now)
- Reverse proxy support

[http]: https://github.com/tharin2002/httpgateway
[vs]: https://www.vintagestory.at/
[eio]: https://github.com/unosquare/embedio
[ng]: https://www.nginx.com/
[isrv]: http://apidocs.vintagestory.at/api/Vintagestory.API.Server.IServerAPI.html
[bue]: https://buefy.org/
[bul]: https://bulma.io/
[vue]: https://vuejs.org/
[grid]: https://gridsome.org/

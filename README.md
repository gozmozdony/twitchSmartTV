# WebOs Twitch.tv application

A WebOs application to watch your favourite streams.
I'm not using the TwitchJs to embedd videos, because of the hardware limitations of webOs TV-s. Therefore you can't see the chat and all the other functions twitch providing.

## Getting Started

These instructions will get you a copy of the project up and running on your WebOs tv. This version of the app is only for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* LG WebOs TV
* LG Developer account
* LG Developer App from the WebOs App Store
* LG Remote App from IOS App Store or Android Google play
* [WebOs SDK](http://webostv.developer.lge.com/sdk/download/download-sdk/) - Current version of the LG WebOs SDK
* [NPM](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm) - * NPM package manager with NodeJS


### Installing

Install the WebOs SDK with the NPM package manager to your computer.
Then clone this repository to your local machine.

Run NPM to install dependencies, in the main folder of the project.
```
npm install
```

After the NPM installed the requirements, run the build.
```
npm run build
npm run build -- --watch ( if you want to run it in live development mode)
```

You can test the application in any browser, by opening the index.html from the root directory.

## Deployment

To deploy it on a WebOs TV follow these steps to create the required connection to your TV:
http://webostv.developer.lge.com/develop/app-test/

After the connection is successful, you can simply click on the build app in WebOs SDK or use the method from here:
http://webostv.developer.lge.com/sdk/using-webos-tv-cli/testing-web-app-cli/#Listing_Target_Device

Connect the remote app on your smartphone, or use your TV remote, to navigate and start the application.

## Compatible - Tested devices

The application has been tested on the following tools/devices:
* [TV] LG 47LB650V
* [TOOL] webOS Simulator 3.0.0
```
If you have tested on a device that is not listed, please leave a feedback for me to add it to the list and/or fix the issues you have encountered.
```

## Contribution

Anyone who have ideas how to make it better, feel free to make an issue, or contribute to the code.

## Built With

* [Vue.JS](https://vuejs.org) - The web framework used
* [Typescript](https://www.typescriptlang.org) - The language written in
* [Semantic UI](https://semantic-ui.com) - Semantic UI framework
* [Animate CSS](https://daneden.github.io/animate.css/) - CSS animations
* [Streamlink](https://streamlink.github.io) - Grabbing streamlinks from twitch

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gozmozdony/twitchWebOs/tags). 

## Authors

* **Gyula Szakács** - *Initial work* - [gozmozdony](https://github.com/gozmozdony)

See also the list of [contributors](https://github.com/gozmozdony/twitchWebOs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks for twitch making it possible.
* My friend who helped me testing it.

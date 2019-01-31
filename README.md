# Smart TV Twitch.TV application

A Smart TV appliaction to watch your favourite strams for webOs and Tizen OS.
I'm not using the TwitchJs to embedd videos, because of the hardware limitations of webOs TV-s. Therefore you can't see the chat and all the other functions that twitch provides.

## Getting Started

These instructions will get you a copy of the project up and running on your WebOs TV/Emulator. This version of the app is only for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

Common
* [YARN](https://yarnpkg.com/en/docs/install#windows-stable) - * YARN package manager

webOS
* LG WebOs TV
* LG Developer account
* LG Developer App from the WebOs App Store
* LG Remote App from IOS App Store or Android Google play
* [WebOs SDK](http://webostv.developer.lge.com/sdk/download/download-sdk/) - Current version of the LG WebOs SDK

Tizen
* Samsung Tizen TV
* Tizen studio
* [Tizen emulator](https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-emulator)
* [Tizen SDK](https://developer.samsung.com/tv/develop/getting-started/setting-up-sdk/installing-tv-sdk) - Current version of the Tizen SDK

### Installing

Install the YARN package manager to your computer.
Then clone this repository to your local machine and checkout the webOs/Tizen branch.

Run YARN to install dependencies, in the main folder of the project.
```
yarn install
```

### Building
Copy and modify the content of the dev.json file.
```
cp env.dist.json env.json
```
After the yarn installed the requirements, run the build.
```
yarn build [--watch]
```

### Development
To run lintfix use the following command
```
yarn lint:fix
```

You can test the application in any browser, by opening the index.html from the dist directory.

## webOS TV Deployment

checkout the webos branch of the repository.
In the WebOs SDK open import the dist build directory as a webOs Project.

To deploy it on a WebOs TV follow these steps to create the required connection to your TV:
http://webostv.developer.lge.com/develop/app-test/

After the connection is successful, you can simply click on the build app in WebOs IDE or use the method from here:
http://webostv.developer.lge.com/sdk/using-webos-tv-cli/testing-web-app-cli/#Listing_Target_Device

Connect the remote app on your smartphone, or use your TV remote, to navigate and start the application.

## Tizen TV Deployment

Checkout the tizen branch of the repository.
In the tizen SDK import the dist build directory as a Tizen Project.

To deploy it on a Tizen TV follow these steps to create the required connection to your TV.
After the connection is successful, you can simply click on the build app in Tizen Studio.
More info about how to:
https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device

Use your TV remote, to navigate and start the application.

## webOS Compatible - Tested devices

The application has been tested on the following tools/devices:
* [LG 47LB650V](http://www.lg.com/uk/support/support-product/lg-47LB650V) 
* [webOS Simulator 1.2.0](http://webostv.developer.lge.com/sdk/emulator/introduction-emulator/) 
* [webOS Simulator 2.0.0](http://webostv.developer.lge.com/sdk/emulator/introduction-emulator/) 
* [webOS Simulator 3.0.0](http://webostv.developer.lge.com/sdk/emulator/introduction-emulator/) 

If you have tested on a device that is not listed, please leave a feedback for me to add it to the list and/or fix the issues you have encountered.

## Tizen Compatible - Tested devices

The application has been tested on the following tools/devices:
* [Tizen Emulator tv-4.0-x86](https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device) 

If you have tested on a device that is not listed, please leave a feedback for me to add it to the list and/or fix the issues you have encountered.

## Contribution

Anyone who have ideas how to make it better, feel free to make an issue, or contribute to the code.

## Built With

* [Vue.JS](https://vuejs.org) - The web framework used
* [Vue-router](https://router.vuejs.org/en/) - Routing and history handling
* [Vue-lazy-loading](https://github.com/hilongjw/vue-lazyload) - Lazy loading images
* [Typescript](https://www.typescriptlang.org) - The language written in
* [Semantic UI](https://semantic-ui.com) - Semantic UI framework
* [Animate CSS](https://daneden.github.io/animate.css/) - CSS animations
* [Streamlink](https://streamlink.github.io) - Grabbing streamlinks from twitch


## Semantic additional info

In the dist directory there is an already builded version of the semantic ui what contains only the essential modules for the UI.

## Animate additional info

Only parts used from Animate CSS, therefore all the used animations moved into the style.css in the dist/assets directory.

## Streamlink additional info

The application currently using a self hosted server that uses streamlink. It do not stores any information about the requests. 
The server that responds with the HLS stream sources, uses a token for authentication, what is provided within the webpack config.

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gozmozdony/twitchSmartTV/tags). 

## Authors

* **Gyula Szakács** - *Initial work* - [gozmozdony](https://github.com/gozmozdony)

See also the list of [contributors](https://github.com/gozmozdony/twitchSmartTV/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks for twitch making it possible.
* Everybody who helped me.

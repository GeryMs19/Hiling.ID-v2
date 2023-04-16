Hiling.id
===
&nbsp;
Apk Preview 
---
<p align="center">
    <img width="200px" src="assets/tampilan1.jpg">
</p>

<p align="center">
    <img width="200px" src="assets/tampilan2.jpg">
</p>

<p align="center">
    <img width="200px" src="assets/tampilan3.jpg">
</p>


## Installation
Run the following command below in project terminal root to build android apk
```
yarn install
```
or
```
npm install
```
&nbsp;
Next is run the same function as git init inside expo
```
npx expo install expo-updates
```
&nbsp;
Build inside expo
```
expo build:android
```
or
```
npm install -g eas-cli
eas build -p android
```
&nbsp;
Then wait and follow the instruction if it the first build, generate a new key and choose apk.Last if expo need login in terminal input same as your expo.dev account
&nbsp;


## Dependencies
- ["expo-status-bar": "~1.4.0"](https://docs.expo.dev/versions/latest/sdk/status-bar/),
- ["react-native-safe-area-context": "4.3.1"](https://docs.expo.dev/versions/latest/sdk/safe-area-context/),
- ["react-native-screens": "~3.15.0"](https://docs.expo.dev/versions/latest/sdk/screens/),
- ["nativewind": "^2.0.11"](https://www.nativewind.dev/quick-starts/expo)
- ["@expo/vector-icons": "13.0.0"](https://icons.expo.fyi/)

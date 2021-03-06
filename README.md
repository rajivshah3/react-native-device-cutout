
# DisplayCutout for React Native

[![GitHub version](https://badge.fury.io/gh/rajivshah3%2Freact-native-display-cutout.svg)](https://badge.fury.io/gh/rajivshah3%2Freact-native-display-cutout) [![Maintainability](https://api.codeclimate.com/v1/badges/dfa536260a3131540826/maintainability)](https://codeclimate.com/github/rajivshah3/react-native-display-cutout/maintainability) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/de3c4e6e440f4cdf93492ddd5b41ace1)](https://app.codacy.com/app/rajivshah3/react-native-display-cutout?utm_source=github.com&utm_medium=referral&utm_content=rajivshah3/react-native-display-cutout&utm_campaign=badger)

## Getting started

`$ npm install react-native-display-cutout --save`

or

`$ yarn add react-native-display-cutout`

### Mostly automatic installation

`$ react-native link react-native-display-cutout`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.rajivshah.displaycutout.RNDisplayCutoutPackage;` to the imports at the top of the file
  - Add `new RNDisplayCutoutPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-display-cutout'
  	project(':react-native-display-cutout').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-display-cutout/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-display-cutout')
  	```


## Usage

See the full documentation [here](https://rajivshah3.github.io/react-native-display-cutout/)

```javascript
import RNDisplayCutout from 'react-native-display-cutout';

// TODO: What to do with the module?
```

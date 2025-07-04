#!/bin/bash

VERSION='2.7.0'

## US
# Android
curl \
  -F "payload=@../../../../apps/Android.SauceLabs.Mobile.Sample.app.$VERSION.apk" \
  -F name=Android.MyDemoAppRN.apk \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  \
  'https://api.us-west-1.saucelabs.com/v1/storage/upload'
# iOS
curl \
  -F "payload=@../../../../apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.$VERSION.zip" \
  -F name=MyRNDemoApp.zip \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  \
  'https://api.us-west-1.saucelabs.com/v1/storage/upload'
curl \
  -F "payload=@../../../../apps/iOS.RealDevice.SauceLabs.Mobile.Sample.app.$VERSION.ipa" \
  -F name=MyRNDemoApp.ipa \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  \
  'https://api.us-west-1.saucelabs.com/v1/storage/upload'

## EU
# Android
curl \
  -F "payload=@../../../../apps/Android.SauceLabs.Mobile.Sample.app.$VERSION.apk" \
  -F name=Android.MyDemoAppRN.apk \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  \
  'https://api.eu-central-1.saucelabs.com/v1/storage/upload'
# iOS
curl \
  -F "payload=@../../../../apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.$VERSION.zip" \
  -F name=MyRNDemoApp.zip \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  \
  'https://api.eu-central-1.saucelabs.com/v1/storage/upload'
curl \
  -F "payload=@../../../../apps/iOS.RealDevice.SauceLabs.Mobile.Sample.app.$VERSION.ipa" \
  -F name=MyRNDemoApp.ipa \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  \
  'https://api.eu-central-1.saucelabs.com/v1/storage/upload'

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    yarn start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Android Runtime Env

- Android 15, API Level 36
- Emulator 35.4.9
- SDK Build Tools 36

Tested on Medium Phone with dimensions `1080 x 2400` @ `420dpi`

## iOS Runtime Env

Tested on `iPhone 16 Pro` simulator on `iOS 18.3`

## Additional Notes

- Commented out my implemention of 20 character limit due to discrepancy between given Mockup and task statement.
- Notes are saved to local storage and rehydrated upon app start
# CS360_Barter_App

Android app built for CS360 

Requirements for emulator:
- Setup Android Studio and emulator https://docs.expo.dev/workflow/android-studio-emulator/
    This allows us to emulate any phone and get the **Android** **SDK** setup.
    - You will need to setup a device on Android Studio.
    - Add to your PATH environment variable the platform-tools folder in ~/AppData/Local/Android/Sdk/platform-tools
    - Add ANDROID_HOME environment variable to ~/AppData/Local/Android/Sdk
- Make sure the command adb and adb --version works in powershell on windows.

### To run the project, navigate to the directory and run the following:
- npm i
- npx expo start
  
### Then either:
- Hit the 'a' key to launch Android
- Hit the 'w' key to launch web
- Run ios on either a mac or in a modified environment. 

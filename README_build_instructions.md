# Build Instructions for Barter Buddy

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

### To run the database, navigate to the directory and setup the following:
- Create a .env with DB_HOST, DB_PORT, DB_PASSWORD, DB_USER, DB_NAME
- Setup a MySQL server, some options include XAMPP or MySQL configurator. 
- Run 'node backend_db/server.js'

### Then either:
- Hit the 'a' key to launch Android
- Hit the 'w' key to launch web
- Run ios on either a mac or in a modified environment. 

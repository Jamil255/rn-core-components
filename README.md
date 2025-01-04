# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
```
## File Structure
my-expo-app/
├── src/
│   ├── assets/                # Static files such as images, fonts, icons
│   │   ├── images/            # Images (e.g., .png, .jpg)
│   │   ├── fonts/             # Custom fonts
│   │   └── icons/             # App icons and vector files
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Button.js          # Example: Button component
│   │   ├── Header.js          # Example: Header component
│   │   └── ...
│   │
│   ├── contexts/              # Context providers for global state
│   │   ├── AuthContext.js     # Example: Authentication context
│   │   └── ThemeContext.js    # Example: Theme context
│   │
│   ├── hooks/                 # Custom hooks
│   │   ├── useAuth.js         # Example: Custom hook for authentication
│   │   └── useFetch.js        # Example: Custom hook for API calls
│   │
│   ├── navigation/            # Navigation setup
│   │   ├── AppNavigator.js    # Main navigator
│   │   └── AuthNavigator.js   # Authentication flow
│   │
│   ├── screens/               # App screens
│   │   ├── HomeScreen.js      # Example: Home screen
│   │   ├── LoginScreen.js     # Example: Login screen
│   │   ├── ProfileScreen.js   # Example: Profile screen
│   │   └── ...
│   │
│   ├── services/              # API services and external integrations
│   │   ├── api.js             # Example: API calls
│   │   └── firebase.js        # Example: Firebase configuration
│   │
│   ├── styles/                # Global styles and theming
│   │   ├── colors.js          # Example: Color palette
│   │   ├── typography.js      # Example: Font sizes and styles
│   │   └── global.js          # Example: Global stylesheet
│   │
│   ├── utils/                 # Utility functions
│   │   ├── helpers.js         # Example: Helper functions
│   │   └── constants.js       # Example: App constants
│   │
│   ├── App.js                 # Main entry point (imports src)
│   └── index.js               # Expo entry file (if needed)
│
├── .expo/                     # Expo-specific settings (auto-generated)
├── .expo-shared/              # Shared settings (auto-generated)
├── node_modules/              # Installed dependencies
├── package.json               # Dependencies and scripts
├── app.json                   # Expo app configuration
├── babel.config.js            # Babel configuration
└── metro.config.js            # Metro bundler configuration

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

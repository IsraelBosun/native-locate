# React Native Google Maps Location App
![Screenshot_20230813-214119](https://github.com/IsraelBosun/native-locate/assets/110021253/a0d8c928-e3c4-4c24-bd89-d76b90c84555)

![App Demo](demo.gif)

This is a React Native application that utilizes the Google Maps API to fetch and display locations on a map. The app is built using the Expo framework, making it easy to develop and test on both iOS and Android platforms.

## Features



- Fetches location data from the Google Maps API.
- Displays fetched locations on an interactive map.
- Allows users to view details of each location by tapping on map markers.
- Smooth and intuitive user interface.

## Screenshots

![Screenshot_20230813-214240](https://github.com/IsraelBosun/native-locate/assets/110021253/32df90e9-ccff-4a37-b418-a40f80258fa9)
![Screenshot_20230813-214041](https://github.com/IsraelBosun/native-locate/assets/110021253/0c0966e4-2aea-407b-a1bb-6bcb2714c7f2)


## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/IsraelBosun/native-locate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd native-locate
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the project root directory and add your Google Maps API key:

   ```javascript
   // .env
   EXPO_PUBLIC_GOOGLE_API = 'YOUR_API_KEY_HERE';
   ```

5. Run the app:

   ```bash
   npm start
   # or
   yarn start
   ```

6. Scan the QR code using the Expo Go app on your mobile device or use an emulator to see the app in action.

## Configuration

- Google Maps API key: You need to obtain a Google Maps API key and replace `'YOUR_API_KEY_HERE'` in the `.env` file with your actual API key.

## Dependencies

- React Native
- Expo
- react-native-maps

## Acknowledgments

- This project was inspired by the need to create a simple and interactive way to display locations using the Google Maps API in a React Native app.
- Thanks to the Expo team for providing an amazing platform for developing React Native applications.

## License!


This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute, report issues, or make suggestions to improve this project. Pull requests are welcome! If you have any questions or need further assistance, please don't hesitate to contact the project maintainers.

Happy mapping! 🗺️

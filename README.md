# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Petitions and Grievances Portal for NIT Patna

## Overview
The Petitions and Grievances Portal is designed to facilitate the students of NIT Patna in raising their grievances and ensuring they are addressed by the authorities. This platform allows students to submit petitions, upvote or downvote issues, and helps the administration prioritize and resolve the most common grievances effectively.

## Features
- **Create Petitions:** Students can submit petitions detailing their issues or grievances.
- **Voting System:** Users can upvote or downvote petitions to signify agreement or disagreement with the issue.
- **Grievance Tracking:** Petitions are tracked based on the number of votes they receive, with highly upvoted petitions notified to the authorities.
- **Notifications:** Petitions that receive more than 20 upvotes trigger a notification to the relevant authorities for action.
- **Google Authentication:** Users can sign up and sign in using their Google accounts for a seamless authentication process.

## Tools & Technologies Used
- **Frontend:**
  - HTML, CSS, JavaScript
  - React.js
  - react-toastify
- **Backend:**
  - Firebase (Authentication, Firestore Database, Hosting)

## Installation and Setup
Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/your-username/nit-patna-grievances-portal.git
    cd nit-patna-grievances-portal
    ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```

3. **Configure Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore Database in your Firebase project.
   - Enable Google Authentication in the Firebase Authentication section.
   - Copy your Firebase configuration and paste it into a `Firebase.js` file in your project's root directory.

4. **Run the Application:**
    ```sh
    npm start
    ```

5. **Build for Production:**
    ```sh
    npm run build
    ```

## Project Structure
The project is organized into the following main directories and files:

- **src/components**: Contains React components such as Navbar, PetitionForm, PetitionList, etc.
- **src/pages**: Contains pages such as Home, Login, Signup, Dashboard, etc.
- **src/Firebase.js**: Firebase configuration and initialization file.
- **src/App.js**: Main application component handling routes and authentication state.
- **public**: Public assets such as images and the main HTML template.
- **index.js**: Entry point of the React application.

## Usage
1. **Sign Up and Login:**
   - New users can sign up using their email and password or sign up with Google.
   - Existing users can log in with their email and password or sign in with Google to access the platform's features.

2. **Submit a Petition:**
   - Once logged in, navigate to the "Write" page to submit a new petition.
   - Fill in the issue, description, and email fields, then submit the form.

3. **Vote on Petitions:**
   - View the list of petitions on the Dashboard.
   - Upvote or downvote petitions to express your support or disagreement.

4. **Track Petitions:**
   - Petitions with significant upvotes will be highlighted and notified to the authorities for action.
   - Petitions with excessive downvotes will be removed from the platform.

## Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please reach out to the project maintainers:

- Avnit Prakash (you@example.com)

---

Feel free to customize this README file as needed to better fit your project.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Petitions-and-Grievances-Portal-for-NIT-Patna

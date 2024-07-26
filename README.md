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


## Contact
For any questions or feedback, please reach out to the project maintainers:

- Avnit Prakash (avnitprakash3@gmail.com)

---

Feel free to customize this README file as needed to better fit your project.

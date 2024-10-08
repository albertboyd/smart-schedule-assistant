# Smart Schedule Assistant

## Project Description

The **Smart Schedule Assistant** is a lightweight scheduling application designed to help users organize their events while providing insights using sentiment analysis. It allows users to add, manage, and delete events, and uses a sentiment analysis tool to detect the emotional tone of each event. The project is powered by **React** and **Firebase** for real-time updates and persistence. 

I was inspired to build this project based on my interest in combining productivity tools with insights from AI. Scheduling can often be stressful, and knowing the sentiment behind events can help users make better decisions. With more time, the project could be expanded to include AI-driven suggestions and Google Calendar integration for a complete scheduling solution.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- Firebase account with Firestore enabled

### Instructions for Running the Application Locally

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/albertboyd/smart-schedule-assistant.git
    ```

2. Navigate to the project directory:

    ```bash
    cd smart-schedule-assistant
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up Firebase:

    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
    - Enable Firestore in your Firebase project.
    - Copy your Firebase configuration and paste it into `src/firebaseConfig.js`.

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to:

    ```
    http://localhost:5173
    ```

### Implemented Features

1. **Event Management**:
    - Users can add, view, and delete events.
    - All events are persisted in **Firebase Firestore**.

2. **Sentiment Analysis**:
    - Each event description is analyzed for sentiment (positive, negative, neutral) using the **Sentiment** library.
    - The sentiment is displayed alongside each event.

3. **Real-time Updates**:
    - Using **Firebase Firestore**, all changes to the events (additions, deletions) are reflected in real-time without needing a page refresh.

### Technologies Used

- **React**: Frontend framework for building the UI.
- **Firebase**: Used for Firestore database to store and retrieve event data.
- **Firebase SDK**: For integrating Firebase Firestore with the React app.
- **Sentiment**: A JavaScript library for performing sentiment analysis on event descriptions.

### Approach

- The project follows a simple structure with one main component (`EventList.jsx`) to manage events. The component handles Firebase integration for storing and retrieving events.
- Sentiment analysis is applied to each event description when it's added. This adds a layer of insight into the user's events, which is displayed alongside the event name.
- Firebase is used for real-time database updates to ensure that the UI reflects changes immediately as they happen.

#### Challenges Faced

- **Time Constraint**: Due to the 3-hour time limit, I focused on getting the core functionalities working (event management, sentiment analysis, Firebase integration).
- **Firebase Setup**: Initial Firebase setup and ensuring Firestore operations worked smoothly within React required extra time to configure properly.
- **Sentiment Integration**: Although simple, integrating sentiment analysis and making sure it provided meaningful insights required tuning.

### Future Enhancements

Given more time, I would implement the following features:

1. **Google Calendar Integration**: Sync events with Google Calendar using the **Google Workspace API**, so users can view and manage all their events in one place.
   
2. **AI-based Suggestions**: Use AI (such as OpenAI) to suggest event names or optimal scheduling times based on user preferences or previous events.
   
3. **Improved UI/UX**: Implement a cleaner, more intuitive design using a CSS framework like **Tailwind CSS** to enhance user experience.
   
4. **Event Reminders**: Add a notification system to remind users of upcoming events via email or browser notifications.
   
5. **Advanced Sentiment Analysis**: Use more advanced AI tools to provide detailed sentiment analysis and insights (e.g., breaking down sentiments per event attribute).

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to clone the project and experiment with it, and I'm open to any suggestions for improvement. Happy coding!

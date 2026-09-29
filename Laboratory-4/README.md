# IT313 Components and JSX (Lab 4)

## Problem Overview
Building a reusable Student Roster Card Renderer to display enrolled students using React Native and Expo. 

## Component Structure
- **StudentRoster (Parent)**: Holds the student data array and maps over it to render the UI. It returns a single root element (a `ScrollView`) containing a dynamic header and the list of cards.
- **StudentCard (Child)**: A functional component that receives student details (`name`, `course`, `units`, `isFullLoad`) via destructured props and displays them. It conditionally renders a "Full Load" badge.

## How to Run
1. Install dependencies: `npm install`
2. Start the application: `npx expo start`
3. Scan the QR code via Expo Go to view on a physical device, or press `a`/`i` to run on an emulator.
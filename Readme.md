# System Design: Website Uptime Monitor for Small Businesses

## 1. Overview
The Website Uptime Monitor is a lightweight service tailored for small businesses and non-technical users. It provides:
- **Website monitoring**: Checks website availability periodically.
- **Instant alerts**: Sends email notifications when a site goes down or comes back up.
- **User-friendly interface**: Allows users to easily add and manage URLs.

The MVP focuses on simplicity and affordability, offering:
- URL input for websites to monitor.
- Periodic uptime checks (every 5 minutes).
- Email notifications for status changes.

---

## 2. Key Components
- **Frontend**: A web app for user interaction (signup, login, URL management, status display).
- **Backend**: Manages user data, performs uptime checks, and sends notifications.
- **Database**: Stores user info, URLs, and check results.
- **Scheduler**: Runs periodic checks.
- **Notification System**: Sends email alerts.

---

## 3. Architecture
- **Frontend**: React-based web app for a simple, responsive UI.
- **Backend**: Node.js with Express for API and logic handling.
- **Database**: PostgreSQL for reliable storage.
- **Scheduler**: `node-cron` for scheduling checks.
- **Email Service**: SendGrid for sending notifications.
- **Hosting**: Heroku (web dyno for API, worker dyno for scheduler).

---

## 4. Data Model
The system uses three tables in PostgreSQL:

### Users Table
- `id` (Primary Key, Integer)
- `email` (Unique, String)
- `password` (Hashed, String)
- `created_at` (Timestamp)

### URLs Table
- `id` (Primary Key, Integer)
- `user_id` (Foreign Key to Users, Integer)
- `url` (String)
- `name` (String, optional)
- `created_at` (Timestamp)

### Checks Table
- `id` (Primary Key, Integer)
- `url_id` (Foreign Key to URLs, Integer)
- `status` (Enum: "up" or "down")
- `checked_at` (Timestamp)

---

## 5. Core Functionality

### 5.1 User Authentication
- **Registration**: Users sign up with an email and password. Passwords are hashed with bcrypt.
- **Login**: Users log in with credentials and receive a JWT token for API access.
- **Authorization**: JWT ensures users only access their own data.

### 5.2 URL Management
- Users add URLs via the dashboard (e.g., "https://example.com").
- URLs are stored in the `URLs` table with an optional name.
- Dashboard displays a list of URLs with current status and last checked time.

### 5.3 Uptime Monitoring
- A cron job runs every 5 minutes to check all URLs in the database.
- For each URL:
  - Send an HTTP GET request using `axios`.
  - If status code is 200-299, mark as "up"; otherwise, mark as "down".
- Store results in the `Checks` table with timestamps.

### 5.4 Notification System
- After each check, compare the latest status with the previous one (from `Checks` table).
- If status changes:
  - "Up" to "down": Send email: "Alert: Your website [URL] is down as of [time]."
  - "Down" to "up": Send email: "Your website [URL] is back up as of [time]."
- Use SendGrid for email delivery.

---

## 6. User Workflow
1. **Sign Up**: User registers with email and password.
2. **Log In**: User accesses the dashboard.
3. **Add URL**: User inputs a URL to monitor.
4. **Monitoring**: System checks the URL every 5 minutes.
5. **Alert**: User receives an email if the status changes.
6. **View Status**: User sees URL status (up/down) and last checked time on the dashboard.

---

## 7. Technology Stack
- **Frontend**: React (with hooks for state management)
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **HTTP Client**: `axios` for uptime checks
- **Scheduler**: `node-cron`
- **Email**: SendGrid
- **Authentication**: JWT
- **Hosting**: Heroku

---

## 8. API Endpoints
- `POST /register`: Create a new user.
- `POST /login`: Authenticate and return JWT.
- `GET /urls`: List user's URLs with current status.
- `POST /urls`: Add a new URL.
- `DELETE /urls/:id`: Remove a URL.

---

## 9. Error Handling
- **Invalid URLs**: Validate format on input.
- **Timeouts**: Set 10-second timeout for HTTP requests; mark as "down" if exceeded.
- **First Check**: No notification on initial check; start after second check.
- **Email Errors**: Log failures without interrupting monitoring.

---

## 10. Security
- Hash passwords with bcrypt.
- Use HTTPS for all communications.
- Restrict users to their own URLs via JWT.

---

## 11. Future Enhancements
- Add SMS notifications (e.g., via Twilio).
- Allow custom check intervals.
- Display uptime statistics and history.

This MVP design ensures a simple, affordable, and effective solution for small businesses to monitor their websites.
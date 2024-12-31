# MarmaAdminPanelBE

This is the backend of the Marma Admin Panel application. It includes features for managing events, jobs, and users.

## Features
- Event management with image uploads
- Job application handling
- Secure authentication with JWT
- MongoDB database integration
- Cloudinary for file storage

## Environment Variables
The following `.env` variables are required to run the project:

```plaintext
PORT=
DBURL=mongodb+srv://<your-db-url>
CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_KEY=<your-cloudinary-key>
CLOUDINARY_SECRET=<your-cloudinary-secret>
ADMIN_EMAIL=<your-admin-email>
ADMIN_EMAIL_PASS=<your-admin-email-password>
JWT_SECRET_KEY=<your-secret-key>

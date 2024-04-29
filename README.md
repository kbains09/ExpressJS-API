# brainflix-api
Overview

BrainFlix is a video sharing platform where users can upload, view, and interact with videos. This documentation provides an overview of the API endpoints and functionality.

Tech Stacks Used

The BrainFlix project utilizes the following technologies:

Frontend: The client application is built using React.js, a JavaScript library for building user interfaces. React Router is used for multi-page functionality, and axios is used for making HTTP requests to the API.
Backend: The API server is built using Node.js, a JavaScript runtime, and Express.js, a web application framework for Node.js. Data is stored in a JSON file on the server for persistence.
Styling: The project uses SASS for styling, allowing for the use of variables and a more organized CSS structure. BEM (Block Element Modifier) principles are followed for naming classes.
Asset Management: Images and other static assets are served from the Node.js server.
Base URL

The base URL for the API is http://localhost:3001 when running locally. When deployed, the base URL will be updated accordingly.

Authentication

Authentication is not required to access the API endpoints.

Endpoints

Get All Videos
URL: /videos
Method: GET
Description: Retrieves a list of all videos.
Response: An array of video objects, each containing the following properties:
id (string): The unique identifier for the video.
title (string): The title of the video.
description (string): The description of the video.
image (string): The URL of the thumbnail image for the video.
Get Video by ID
URL: /videos/:id
Method: GET
Description: Retrieves a video by its ID.
Response: An object containing the details of the video with the specified ID, including the properties mentioned above.
Add New Video
URL: /videos
Method: POST
Description: Adds a new video to the list of videos.
Request Body: An object containing the following properties:
title (string): The title of the video.
description (string): The description of the video.
Response: The newly added video object, including the generated id and a hardcoded image path for the thumbnail.
Usage

To use the API, make requests to the appropriate endpoints using your preferred HTTP client (e.g., Postman, Axios).

Example: Get All Videos
bash
Copy code
GET http://localhost:5000/videos
Example: Add New Video
bash
Copy code
POST http://localhost:5000/videos
{
  "title": "New Video Title",
  "description": "New Video Description"
}
Error Handling

If a requested video is not found, the API will respond with a 404 status code and an error message.
If there is a problem with the request (e.g., missing required fields), the API will respond with a 400 status code and an error message.
Persistence

Video data is stored in a JSON file on the server and persists across server restarts.

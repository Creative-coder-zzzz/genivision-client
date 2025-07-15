🧠 Genivision — AI Image Generator
Genivision is a powerful AI-powered image generation platform built with the MERN Stack and integrated with the ClipDrop API. Users can generate high-quality images by entering simple text prompts.


**Visit site - https://genivision-client.vercel.app**



🚀 Features
🔐 Secure Authentication – Users must log in to access image generation.

🎁 Free Trial Credits – Every user receives 5 free credits upon signing up/logging in.

🎨 AI-Powered Image Generation – Users can generate images by writing a prompt and clicking "Generate Now".

💳 Credit-Based System – After the free credits are used, users must purchase more credits to continue generating images.

🌐 Modern Stack – Built using the MERN Stack (MongoDB, Express.js, React, Node.js).

🤖 ClipDrop API – Uses ClipDrop’s API for high-quality image generation (initial 100 API credits available).

📝 How It Works
1. User Authentication
Users must sign up or log in to access image generation features.

Auth is secured using industry best practices with Express and JWT.

2. Credit System
Each new user is granted 5 free image generation credits.

Every image generation request consumes 1 credit.

Once the free credits are exhausted, users are prompted to purchase additional credits to continue.

3. Image Generation Flow
After logging in, users:

Enter a text prompt (e.g., "A futuristic city in the clouds").

Click the "Generate Now" button.

The backend sends the request to the ClipDrop API.

The generated image is returned and displayed in the UI.

🔧 Tech Stack
Tech	Description
MongoDB	For storing user data and credit balances
Express.js	Backend server and API routes
React.js	Frontend user interface
Node.js	Server runtime environment
ClipDrop API	AI image generation service (initial 100 API credits used)
JWT	Secure token-based authentication

🛒 Credit Purchase (Coming Soon / Implemented)
Users can recharge credits via a payment gateway (e.g., Razorpay, Stripe – based on your implementation).

Credit balance updates instantly upon successful transaction.

⚙️ Developer Notes
ClipDrop API has 100 initial credits, monitor usage and upgrade as needed.

Credit logic is enforced in both frontend and backend to avoid abuse.

Ensure that prompts are validated and sanitized before sending to the API.


<img width="1919" height="871" alt="image" src="https://github.com/user-attachments/assets/7b92d650-1f0e-45b8-b739-747f9490f42a" />
<img width="1895" height="877" alt="image" src="https://github.com/user-attachments/assets/6122b96f-3bf3-40e5-97a5-dff8f5906e86" />



📬 Contact
For queries or suggestions, feel free to reach out.
sandeshadhikari2003@gmail.com or just whatsapp in 8927678560

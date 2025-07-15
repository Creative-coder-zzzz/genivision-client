# 🧠 Genivision — AI Image Generator

**Genivision** is a powerful AI-powered image generation platform built using the **MERN Stack** and integrated with the **ClipDrop API**. Users can generate high-quality images simply by entering creative prompts — all powered by cutting-edge AI tools.

🌐 **Live Site:** [https://genivision-client.vercel.app](https://genivision-client.vercel.app)

---

## 🚀 Features

- 🔐 **Secure Authentication** – Users must log in to access image generation.
- 🎁 **Free Trial Credits** – Each user gets **5 free credits** upon signing up.
- 🎨 **AI Image Generation** – Enter a prompt and click "Generate Now" to create unique images.
- 💳 **Credit-Based System** – Users must buy credits after exhausting the free ones.
- 🤖 **ClipDrop API Integration** – High-quality image generation powered by ClipDrop.
- 🛠️ **Modern MERN Stack** – Built with MongoDB, Express.js, React, and Node.js.

---

## 📝 How It Works

### 1️⃣ User Authentication
- Users must sign up or log in to use the generator.
- Auth is secured via JWT and Express middleware.

### 2️⃣ Credit System
- 🎉 New users get **5 free credits**.
- 🖼️ Each image generation consumes **1 credit**.
- 🛒 After depletion, users are prompted to **purchase credits** (coming soon / implemented).

### 3️⃣ Image Generation Flow
- User logs in → enters a prompt (e.g., *"A futuristic city in the clouds"*) → clicks **Generate Now**.
- The request is sent to the **ClipDrop API**, and the image is returned and displayed.

---

## 🔧 Tech Stack

| Technology     | Description                                    |
|----------------|------------------------------------------------|
| MongoDB        | Stores user profiles and credit balances       |
| Express.js     | Handles backend routes and API logic           |
| React.js       | Frontend user interface                        |
| Node.js        | Backend runtime environment                    |
| JWT            | Secure token-based authentication              |
| ClipDrop API   | AI image generation engine (100 initial credits) |

---

## 🛒 Credit Purchase (Coming Soon / Implemented)

- 🔁 Credit recharge will be possible via **Razorpay / Stripe** (depending on integration).
- ✅ User’s credit balance is updated **instantly** upon successful payment.
- 🔐 Credit usage is validated in **both frontend and backend** to prevent abuse.

---

## 🖼️ Screenshots

<img width="1919" height="871" alt="Genivision Prompt" src="https://github.com/user-attachments/assets/7b92d650-1f0e-45b8-b739-747f9490f42a" />
<br />
<img width="1895" height="877" alt="Genivision Result" src="https://github.com/user-attachments/assets/6122b96f-3bf3-40e5-97a5-dff8f5906e86" />

---

## ⚙️ Developer Notes

- 🧾 **API Usage**: ClipDrop API starts with **100 credits** – keep usage monitored.
- 🛡️ Prompt validation is important to prevent spam or abuse.
- 📦 Credit logic is enforced on **both client and server** to avoid manipulation.

---

## 📬 Contact

Have a question or suggestion? Feel free to reach out!

- 📧 Email: [sandeshadhikari2003@gmail.com](mailto:sandeshadhikari2003@gmail.com)  
- 📱 WhatsApp: [+91 89276 78560](https://wa.me/918927678560)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---


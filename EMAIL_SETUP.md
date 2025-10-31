# 📧 Email Service Setup Guide

## 🚀 Quick Setup

### 1. Create `.env.local` file in your project root:

```bash
# Email Configuration
EMAIL_PASS=your-gmail-app-password
```

### 2. Get Gmail App Password:

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to **Google Account Settings** → **Security**
3. Under "2-Step Verification", click **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password (like: `abcd efgh ijkl mnop`)
6. Add it to your `.env.local` file

### 3. Restart your development server:

```bash
npm run dev
```

## ✨ How It Works

### **When someone contacts you:**

1. **📧 Notification Email** → Sent to `tushardhokane12@gmail.com`
   - Beautiful dark theme with your branding
   - Contact details and message
   - Action required reminder

2. **🎉 Thank You Email** → Sent to the user
   - Professional greeting with their name
   - Your animated digital business card
   - All your achievements and contact info
   - Professional closing message

## 🎨 Email Features

### **Notification Email:**
- 🚀 Dark cyber theme
- 👤 Contact details highlighted
- 💬 Message in styled box
- ⚡ Action required reminder
- 📱 Timestamp

### **Thank You Email:**
- 🎉 Personalized greeting
- 💼 Professional tone
- 🏆 Your achievements highlighted
- 📄 Digital business card with QR code
- 🔗 Social media links
- 💫 Animated effects

## 🔧 Troubleshooting

### **If emails don't send:**

1. Check your `.env.local` file exists
2. Verify the `EMAIL_PASS` is correct (16 characters, no spaces)
3. Make sure 2FA is enabled on Gmail
4. Check console logs for error messages

### **Common Issues:**

- ❌ "Invalid login" → Wrong app password
- ❌ "Less secure apps" → Use App Password, not regular password
- ❌ "Authentication failed" → 2FA not enabled

## 📱 Test the System

1. Fill out the contact form on your portfolio
2. Check your email for the notification
3. Check the sender's email for the thank you message
4. Both emails should arrive within seconds

## 🎯 Success Indicators

✅ **Console shows:** "Notification email sent successfully"  
✅ **Console shows:** "Thank you email sent successfully"  
✅ **You receive:** Beautiful notification email  
✅ **User receives:** Professional thank you with business card  

---

**Note:** The system gracefully handles missing email credentials - the contact form still works even if emails fail to send.

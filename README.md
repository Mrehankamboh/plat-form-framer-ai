# Platform (plat-form.framer.ai) — local copy

HTTrack se download ki hui site (`D:\httrack\plat-form.framer.ai_`) yahan `site/` folder mein hai.

## Chalane ka tareeqa

```bash
npm run dev
```

Phir browser mein kholo: http://localhost:3020

## Notes

- `server.js` ek simple Node server hai (koi install nahi chahiye). Ye `/labs` jaise saaf URLs ko `labs.html` se jor deta hai.
- Images `site/framerusercontent.com/` se local load hoti hain.
- Site ki JavaScript, videos aur kuch SVG icons abhi bhi internet (framerusercontent.com) se aate hain — is liye internet on hona chahiye.
- HTTrack ne home page ke number counters ka data kharab kar diya tha; woh `site/index.html` mein theek kar diya gaya hai.
- HTTrack ne links ko `services.html` bana diya tha; inhein wapas live jaisa `./services` kar diya gaya hai.
- Live site se compare kiya: saare 18 pages ka text, images aur titles bilkul same hain.

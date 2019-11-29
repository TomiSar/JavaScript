//12. Security and building for production
//Developing environment --> npm run dev and Production build --> npm run build
//Building your application for Production
//npm run build \webpack-starter\build files from production build

//Cross-site Scripting XXS
//CSP: Content Security Policy
//  -- Use HTTP Header: Content-Security-Policy
//CORS: Cross Origin Resource Sharing
//  -- Use HTTP Header: Access-Control-Allow-Origin

//Preventing the man-in-the-middle Attacks
//Use SSL
//Use HTTP Header: Strict Transport security
//Use cookie attributes: Secure and httpOnly

//Security and eval() function
// let inputString = "console.log('Hello');";
// let inputAlert = "alert('Hello from JavaScript');";
// eval(inputAlert);
// eval(inputString);

//Chrome developer tools and security --> Network ctrl-r, app.js Sources
//https://javascriptobfuscator.com/
//console.log('This is a build for production');
**Chart** 
 
 npm install chart.js --save
 
 
 **Toevoegen aan index.html**
 
 Let op wordt overschreven bij stap 6
 
 
 <link rel="apple-touch-icon-precomposed" href="assets/imgs/touch-icon-iphone.png">
 
 Bestand in www folder
 
 
 
 **Deploy firebase**
 
 1. npm install -g firebase-tools
 2. firebase login
 3. firebase init
 4.     Public dir: www
 5.     Configure single-page app: Yes
 6.     File index excist: Overwrite : No
 7. npm run ionic:build --prod
 8. Toevoegen icon en code zie boven
 9  Uncomment serviceworker
 10. naam wijzigen
 11. firebase deploy
 
 
  **Icons**
  
  logo.png   512px 512px
  
  touch-icon-iphone.png   180px 180px
 
 
 **Hosting:**
 
 https://eigenarenstrategie.firebaseapp.com



 **meer over index.html**

https://technology.amis.nl/2016/08/16/creating-near-native-mobile-web-app-aka-progressive-web-app-for-ios-with-ionic-2/


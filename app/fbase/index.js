import fbase from 'firebase';



  
  
try {
    console.log('index1', process.env)
    var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOM,
    databaseURL: process.env.DB_URL,
    storageBucket: process.env.DB_BUCKET
  };
  console.log('index2', config);
  fbase.initializeApp(config);
}catch(e){
    
}

    console.log(config)
  
 export var githubProv = new fbase.auth.GithubAuthProvider();
 export var fbaseref =  fbase.database().ref()
 export default fbase; 
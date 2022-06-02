const express = require("express");
const router = express.Router();
const fs = require('fs');
const fetch = require('node-fetch');

const schedule = require('node-schedule');


//Global
const NewsModel = require("../models/News");
//Sports
const exp = require("../models/SportsModel");
//India
const exp2 = require("../models/IndiaModel");
//Business
const exp3 = require("../models/BusinessModel");
//Covid
const exp4 = require("../models/CovidModel");
//Entertainment
const exp5 = require("../models/EntertainmentModel");
//Experiment
const exp6 = require("../models/Experiment");





async function DeleteCall(newsObj) {
  try {
    const news = await newsObj.find();
    var nn = news[0]._id;
    const result = await newsObj.findByIdAndDelete(nn);
    //res.json(result);
    //console.log(nn);
  } catch (err) {
    res.send("Error " + err);
  }
}









//DATA
var Global_Data        = JSON;
var Sports_Data        = JSON;
var India_Data         = JSON;
var Business_Data      = JSON;
var Covid_Data         = JSON;
var Entertainment_Data = JSON;
var Experiment_DATA    = JSON;


//Change Scheduler Insert Data Time
var GlobalDataTime        = '0  0 7 * * *';
var SportsDataTime        = '10 0 7 * * *';
var IndiaDataTime         = '20 0 7 * * *';
var BusinessDataTime      = '30 0 7 * * *';
var CovidDataTime         = '40 0 7 * * *';
var EntertainmentDataTime = '50 0 7 * * *';
var ExperimentDataTime    = ' 0 1 7 * * *';

//Delete old data
var Del_GlobalDataTime        = '0 0 8 * * *';
var Del_SportsDataTime        = '10 0 8 * * *';
var Del_IndiaDataTime         = '20 0 8 * * *';
var Del_BusinessDataTime      = '30 0 8 * * *';
var Del_CovidDataTime         = '40 0 8 * * *';
var Del_EntertainmentDataTime = '50 0 8 * * *';
var Del_ExperimentDataTime = '0 1 8 * * *';


 function FetchData(val, DATA) {
  console.log("fetch api endpoint called for ",val);
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${val}&count=15`,
      params: {safeSearch: 'Off', textFormat: 'Raw'},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '88875c1bf2mshba102aa1467eefep1d4505jsnce86da92f996'
      }
    };
    
     axios.request(options).then(function (response) {      
      //DATA = JSON.stringify(response.data.value);
      if(DATA === 'Global_Data') Global_Data = response.data.value;
      else if(DATA === 'Sports_Data') Sports_Data = response.data.value;
      else if(DATA === 'India_Data') India_Data = response.data.value;
      else if(DATA === 'Business_Data') Business_Data = response.data.value;
      else if(DATA === 'Covid_Data') Covid_Data = response.data.value;
      else if(DATA === 'Entertainment_Data') Entertainment_Data = response.data.value;
      else if(DATA === 'Experiment_DATA') Experiment_DATA = response.data.value;
      else console.log('----------------DATA---NOT---FOUND-------------');
    }).catch(function (error) {
      console.error(error);
    });
}

//Fetch data on server load
//setTimeout(() => {   }, 3000);

  FetchData('global', 'Global_Data'); 
  setTimeout(() => {  FetchData('Sports','Sports_Data');  }, 2000);
  setTimeout(() => { FetchData('India','India_Data');  }, 3000);
  setTimeout(() => { FetchData('Business','Business_Data'); }, 4000);
  setTimeout(() => { FetchData('Covid','Covid_Data');  }, 5000);
  setTimeout(() => { FetchData('Entertainment','Entertainment_Data');  }, 6000);
  setTimeout(() => { FetchData('crypto','Experiment_DATA');  }, 1000);

  

//Global-Job
schedule.scheduleJob('global-job', GlobalDataTime, () => {
  FetchData('global', 'Global_Data');
  //NewsModel == Global
  const currnews = new NewsModel({
    value : Global_Data ,       
   });
  currnews.save();
  console.log('global-job ran @',new Date().toString());
  console.log(Global_Data);
  console.log("------------------Global_Data-over-------------------");
  //cancel the job
  schedule.cancelJob('global-job');
})
//-----Del----Global-News-----------------------------
schedule.scheduleJob('del-global-job', Del_GlobalDataTime, () => {
  DeleteCall(NewsModel);  
  console.log('del-global-job ran @',new Date().toString());
  console.log("------------------Del_Global_Data-over-------------------");
    //cancel the job
  schedule.cancelJob('del-global-job');
})



//Sports-Job
schedule.scheduleJob('sports-job', SportsDataTime, () => {
  FetchData('Sports', 'Sports_Data');
  // 10 0 7 * * *
  //exp == Sports
  const currnews = new exp({
    value : Sports_Data ,       
   });
  currnews.save();
  console.log('Sports-job ran @',new Date().toString());
  console.log(Sports_Data);
  console.log("------------------Sports_Data-over-------------------");
  //cancel the job
  schedule.cancelJob('sports-job');
})
//-----Del----Sports-News-----------------------------
schedule.scheduleJob('del-sports-job', Del_SportsDataTime, () => {
  DeleteCall(exp);  
  console.log('del-sports-job ran @',new Date().toString());
  console.log("------------------Del_Sports_Data-over-------------------");
    //cancel the job
  schedule.cancelJob('del-sports-job');
})




//India-Job
schedule.scheduleJob('india-job', IndiaDataTime, () => {
  FetchData('India', 'India_Data');
  // 20 0 7 * * *
  //exp2 == India
  const currnews = new exp2({
    value : India_Data ,       
   });
  currnews.save();
  console.log('India-job ran @',new Date().toString());
  console.log(India_Data);
  console.log("------------------India_Data-over-------------------");
  //cancel the job
  schedule.cancelJob('india-job');
})
//-----Del----india-News-----------------------------
schedule.scheduleJob('del-india-job', Del_IndiaDataTime, () => {
  DeleteCall(exp2);  
  console.log('del-india-job ran @',new Date().toString());
  console.log("------------------Del_India_Data-over-------------------");
    //cancel the job
  schedule.cancelJob('del-india-job');
})



//Business_Job
schedule.scheduleJob('business-job', BusinessDataTime, () => {
  FetchData('Business', 'Business_Data');
  // 30 0 7 * * *
  //exp3 == Business
  const currnews = new exp3({
    value : Business_Data ,       
   });
  currnews.save();
  console.log('Business-job ran @',new Date().toString());
  console.log(Business_Data);
  console.log("------------------Business_Data-over-------------------");
  //cancel the job
  schedule.cancelJob('business-job');
})
//-----Del----Business-News-----------------------------
schedule.scheduleJob('del-business-job', Del_BusinessDataTime, () => {
  DeleteCall(exp3);  
  console.log('del-business-job ran @',new Date().toString());
  console.log("------------------Del_Business_Data-over-------------------");
    //cancel the job
  schedule.cancelJob('del-business-job');
})





//Covid_Job
schedule.scheduleJob('covid-job', CovidDataTime, () => {
  FetchData('covid', 'Covid_Data');
  // 40 0 7 * * *
  //exp4 == Covid
  const currnews = new exp4({
    value : Covid_Data ,       
   });
  currnews.save();
  console.log('Covid-job ran @',new Date().toString());
  console.log(Covid_Data);
  console.log("------------------Covid_Data-over-------------------");
  //cancel the job
  schedule.cancelJob('covid-job');
})
//-----Del----Covid-News-----------------------------
schedule.scheduleJob('del-covid-job', Del_CovidDataTime, () => {
  DeleteCall(exp4);  
  console.log('del-covid-job ran @',new Date().toString());
  console.log("------------------Del_Covid_Data-over-------------------");
    //cancel the job
  schedule.cancelJob('del-covid-job');
})





//Entertainment-Job Entertainment_Data
schedule.scheduleJob('entertainment-job', EntertainmentDataTime, () => {
  FetchData('Entertainment', 'Entertainment_Data');
  // 50 0 7 * * *
  //exp5 == Entertainment
  const currnews = new exp5({
    value : Entertainment_Data ,       
   });
  currnews.save();
  console.log('Entertainment-job ran @',new Date().toString());
  console.log(Entertainment_Data);
  console.log("------------------Entertainment_Data-over-------------------");
  //cancel the job
  schedule.cancelJob('entertainment-job');
})
//-----Del----Entertainment-News-----------------------------
schedule.scheduleJob('del-entertainment-job', Del_EntertainmentDataTime, () => {
  DeleteCall(exp5);  
  console.log('del-entertainment-job ran @',new Date().toString());
  console.log("------------------Del_Entertainment_Data-over-------------------");
    //cancel the job
  schedule.cancelJob('del-entertainment-job');
})






//Experiment-Job
schedule.scheduleJob('experiment-job', ExperimentDataTime, () => {
  //* At a particular Date and Time , srch cron examples 
  //const someDate = new Date('2022-03-19T09:49:00.000+5:30')
  //https://crontab.guru/
  // */60 23 * * *   <= every day at 23:00:00pm
  // */60 7 * * *    <= every day at 7:00:00am
  // */60 23 * * */7 <= evey Seven day at 23:00:00pm
  
  FetchData('crypto','Experiment_DATA');
  //(Object.keys(DATA).length === 0
  //exp6 == experiment
  const currnews = new exp6({
    value : Experiment_DATA ,       
   });
  currnews.save();
  console.log('job ran @',new Date().toString());
  console.log(Experiment_DATA);
  console.log("------------------Experiment_DATA-over-------------------");
  //cancel the job
  schedule.cancelJob('experiment-job');
})
//-----Del----Experiment-News-----------------------------
schedule.scheduleJob('del-experiment-job', Del_ExperimentDataTime, () => {
  DeleteCall(exp6);  
  console.log('del-experiment-job ran @',new Date().toString());
  console.log("------------------Del_Experiment_Data-over-------------------");
    //cancel the job
  schedule.cancelJob('del-experiment-job');
})




// router.post("/Expri", async (req, res) => {
//   //res.json(DATA);
//   console.log(DATA);
//   findData = "Sports";
//   const currnews = new exp6({
//      value : DATA        
//     });
//   try {
//     const newnews = await currnews.save();
//     console.log(newnews);
//     res.json(newnews);
//   } catch (err) {
//     res.send("Error " + err);
//   }
// });
//----------------------------------------------------------------------
//Delete Schedule

// var delexpriData = '*/5 * * * * *';

// schedule.scheduleJob('delexpri-job', delexpriData, () => {
//   var news = JSON;
//   async function exo() {
//     news = await exp6.find();
//     var nn = news[0]._id;
//     const result = await exp6.findByIdAndDelete(nn);
//     console.log('Deleted day ID : ',nn);
//   }
//   exo();
//   console.log('delexpri-job ran @',new Date().toString());
//   console.log("------------------delexpri-over-------------------");
//   //cancel the job
//   schedule.cancelJob('delexpri-job');
// })

















//--------------------------------------------------------------------

//Experiment
//fetch Experiment all news from database
router.get("/Experiment", async (req, res) => {
  try {
    const news = await exp6.find();
    res.json(news);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.delete("/Experiment/delday", async (req,res) => {
  try {
    const news = await exp6.find();
    var nn = news[0]._id;
    const result = await exp6.findByIdAndDelete(nn);
    res.json(result);
    //console.log(nn);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Sports
//fetch Sports all news from database
router.get("/Sports", async (req, res) => {
  try {
    const news = await exp.find();
    res.json(news);
  } catch (err) {
    res.send("Error " + err);
  }
});


//India
//fetch India all news from database
router.get("/India", async (req, res) => {
  try {
    const news = await exp2.find();
    res.json(news);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Business
//fetch Business all news from database
router.get("/Business", async (req, res) => {
  try {
    const news = await exp3.find();
    res.json(news);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Covid
//fetch Covid all news from database
router.get("/Covid", async (req, res) => {
  try {
    const news = await exp4.find();
    res.json(news);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Entertainment
const { wait } = require("@testing-library/user-event/dist/utils");
const News = require("../models/News");
//fetch India all news from database
router.get("/Entertainment", async (req, res) => {
  try {
    const news = await exp5.find();
    res.json(news);
  } catch (err) {
    res.send("Error " + err);
  }
});



//Global
//fetch all news from database
router.get("/", async (req, res) => {
  try {
    const news = await NewsModel.find();
    res.json(news);
  } catch (err) {
    res.send("Error " + err);
  }
});

//insert record to database
// router.post("/", async (req, res) => {
//   const currnews = new NewsModel({
//     news_title: req.body.news_title,
//     news_desc: req.body.news_desc,
//     news_image: req.body.news_image,
//     news_article_url: req.body.news_article_url,
//   });

//   try {
//     const newnews = await currnews.save();
//     console.log(newnews);
//     res.json(newnews);
//   } catch (err) {
//     res.send("Error " + err);
//   }
// });


// router.get("/fetch_api", async (req, res) => {
//   console.log("fetch api endpoint called");
//   var axios = require("axios").default;
//   var options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=entertainment&count=30',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'x-bingapis-sdk': 'true',
//       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//       'x-rapidapi-key': '88875c1bf2mshba102aa1467eefep1d4505jsnce86da92f996'
//     }
//   };
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//     res.json(response.data.value);
//     const jsonString = JSON.stringify(response.data.value);
//     fs.writeFile('./Entertainment.json', jsonString, err => {
//       if (err) {
//           console.log('Error writing file', err)
//       } else {
//           console.log('Successfully wrote file')
//       }
//       });
//   }).catch(function (error) {
//     console.error(error);
//   });
// });

module.exports = router;

const data = [
    {
      "title": "Social",
      "timeframes": {
       
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];
 const work = {
    name: "Work",
    daily: {
    current: 5,
    previous: 7
    },
    weekly: {
    current: 32,
    previous: 36
    },
    monthly: {
      current: 103,
      previous: 128
    }
};
const play = {
name: "Play",
  daily: {
    current: 1,
    previous: 2
  },
  weekly: {
    current: 10,
    previous: 8
  },
  monthly: {
    current: 23,
    previous: 29
  }};

  const study = {
    name: "Study",
    daily: {
      current: 0,
      previous: 1
    },
    weekly: {
      current: 4,
      previous: 7
    },
    monthly: {
      current: 13,
      previous: 19
    }
  };
  const  exercise = {
    name: "excersite",
    daily: {
      current: 1,
      previous: 1
    },
    weekly: {
      current: 4,
      previous: 5
    },
    monthly: {
      current: 11,
      previous: 18
    }
  };
  const social = {
      name: "Social",
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }

  };
  const selfCare ={
      name: "Self Care",
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }

  }
  console.log(exercise);

  function daily() {
      //work
      const workPrevius = work.daily.previous;
      document.getElementById("title-work").innerText = work.name;
      document.getElementById("work-current").innerText = work.daily.current + 'hrs';
      document.getElementById("work-frecuency").innerText =`Yesterdar ${workPrevius} hrs`;
    //   document.getElementById("work-previus").innerText = work.daily.previous;
      
      //Play
      const playPrevius = play.daily.previous;
      document.getElementById("title-play").innerText = play.name;
      document.getElementById("play-current").innerText = play.daily.current + 'hrs';
    //   document.getElementById("play-previus").innerText = play.daily.previous;
      document.getElementById("play-frecuency").innerText =`Yesterdar ${playPrevius} hrs`;

      //Study
      const studyPrevius = study.daily.previous;
      document.getElementById("study-frecuency").innerText =`Yesterdar ${studyPrevius} hrs`;
      document.getElementById("title-study").innerText = study.name;
      document.getElementById("study-current").innerText = study.daily.current + 'hrs';

      //Exercise
      const exercisePrevius = exercise.daily.previous;
      document.getElementById("exercise-frecuency").innerText =`Yesterdar ${exercisePrevius} hrs`;
      document.getElementById("title-exercise").innerText = exercise.name;
      document.getElementById("exercise-current").innerText = exercise.daily.current + 'hrs';

    //Social
    const socialPrevius = social.daily.previous;
    document.getElementById("social-frecuency").innerText =`Yesterdar ${socialPrevius} hrs`;
    document.getElementById("title-social").innerText = social.name;
    document.getElementById("social-current").innerText = social.daily.current + 'hrs';

    //SelfCare
    const selfCarePrevius = selfCare.daily.previous;
    document.getElementById("selfCare-frecuency").innerText =`Yesterdar ${selfCarePrevius} hrs`;
    document.getElementById("title-selfCare").innerText = selfCare.name;
    document.getElementById("selfCare-current").innerText = selfCare.daily.current + 'hrs';
    }

  function weekly() {
      //work
      const workPrevius = work.weekly.previous;
      document.getElementById("work-frecuency").innerText =`Last week ${workPrevius} hrs`;
      document.getElementById("title-work").innerText = work.name;
      document.getElementById("work-current").innerText = work.weekly.current + 'hrs';

      //play
      const playPrevius = play.weekly.previous;
      document.getElementById("play-frecuency").innerText =`Last week ${playPrevius} hrs`;
      document.getElementById("title-play").innerText = play.name;
      document.getElementById("play-current").innerText = work.weekly.current + 'hrs';
      
      //study
      const studyPrevius = study.weekly.previous;
      document.getElementById("study-frecuency").innerText =`Last week ${studyPrevius} hrs`;
      document.getElementById("title-study").innerText = study.name;
      document.getElementById("study-current").innerText = study.weekly.current + 'hrs';

      //exercise
      const exercisePrevius = exercise.weekly.previous;
      document.getElementById("exercise-frecuency").innerText =`Last week ${exercisePrevius} hrs`;
      document.getElementById("title-exercise").innerText = exercise.name;
      document.getElementById("exercise-current").innerText = exercise.weekly.current + 'hrs';
      
      //social
      const socialPrevius = social.weekly.previous;
      document.getElementById("social-frecuency").innerText =`Last week ${socialPrevius} hrs`;
      document.getElementById("title-social").innerText = social.name;
      document.getElementById("social-current").innerText = social.weekly.current + 'hrs';
      
      //selfCare
      const selfCarePrevius = selfCare.weekly.previous;
      document.getElementById("selfCare-frecuency").innerText =`Last week ${selfCarePrevius} hrs`;
      document.getElementById("title-selfCare").innerText = selfCare.name;
      document.getElementById("selfCare-current").innerText = selfCare.weekly.current + 'hrs';
  }

  function monthly() {
      //work
      const workPrevius = work.monthly.previous;
      document.getElementById("work-frecuency").innerText =`Last Month ${workPrevius} hrs`;
      document.getElementById("title-work").innerText = work.name;
      document.getElementById("work-current").innerText = work.monthly.current + 'hrs';

      //play
      const playPrevius = play.monthly.previous;
      document.getElementById("play-frecuency").innerText =`Last Month ${playPrevius} hrs`;
      document.getElementById("title-play").innerText = play.name;
      document.getElementById("play-current").innerText = play.monthly.current + 'hrs';

      //study
      const studyPrevius = study.monthly.previous;
      document.getElementById("study-frecuency").innerText =`Last Month ${studyPrevius} hrs`;
      document.getElementById("title-study").innerText = study.name;
      document.getElementById("study-current").innerText = study.monthly.current + 'hrs';

      //exercise
      const exercisePrevius = exercise.monthly.previous;
      document.getElementById("exercise-frecuency").innerText =`Last Month ${exercisePrevius} hrs`;
      document.getElementById("title-exercise").innerText = exercise.name;
      document.getElementById("exercise-current").innerText = exercise.monthly.current + 'hrs';

      //social
      const socialPrevius = social.monthly.previous;
      document.getElementById("social-frecuency").innerText =`Last Month ${socialPrevius} hrs`;
      document.getElementById("title-social").innerText = social.name;
      document.getElementById("social-current").innerText = social.monthly.current + 'hrs';

    
      //selfCare
      const selfCarePrevius = selfCare.monthly.previous;
      document.getElementById("selfCare-frecuency").innerText =`Last Month ${selfCarePrevius} hrs`;
      document.getElementById("title-selfCare").innerText = selfCare.name;
      document.getElementById("selfCare-current").innerText = selfCare.monthly.current + 'hrs';

  }
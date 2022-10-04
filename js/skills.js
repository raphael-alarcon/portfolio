var langColor = {
    "html": "#e85324",
    "css": "#2652e8",
    "javascript": "#e9d73c",
    "php": "#36447f",
    "java": "#74a2f9",
    "c-sharp": "#94448f",
    "sql": "#2E2E2E",
    "python": "#4c84bb"
  };
  
  var langPercentage = {
    "html": 0.9,
    "css": 0.75,
    "javascript": 0.25,
    "php": 0.3,
    "java": 0.8,
    "c-sharp": 0.6,
    "sql": 0.6,
    "python": 0.5
  };
  
  $.each( langColor, function( language, color) {
      var progressBar = $('#'+language+' .progress-bar__progress');
      progressBar.css("stroke", color);
      console.log(language);
  });
  
  $.each( langPercentage, function( language, percentageComplete) {
      var progressBar = $('#'+language+' .progress-bar__progress');
      var strokeDashOffsetValue = 100 - (percentageComplete * 100);
      progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
  });
  
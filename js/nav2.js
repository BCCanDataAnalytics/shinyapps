$(document).ready(function() {
  $(".navbar .container-fluid .navbar-nav .dropdown .dropdown-menu").each(function(index) {
    const num = index + 1;
    $( this ).addClass("dropdown-menu-" + num);
  });

  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/BCSummary" target="_blank">BC Summary</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/CovidReport" target="_blank">COVID-19 Impact Statement</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/UserGuide" target="_blank">General User Guide</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCounts" target="_blank">BC: New Cancer Diagnoses</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCrudeRates" target="_blank">BC: Crude Incidence Rates</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceAgeAdjRates/" target="_blank">BC: Age-standardized Cancer Incidence Rates</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/RegionalIncidenceCounts/" target="_blank">BC/Regional: New Cancer Diagnoses</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/StandardizedIncidenceRatio/" target="_blank">BC/Regional: Age-standardized Cancer Incidence Ratio</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityCounts" target="_blank">BC: Cancer Deaths</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityCrudeRates" target="_blank">BC: Crude Death Rates</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityAgeStdRates" target="_blank">BC: Age-standardized Cancer Mortality Rates</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityRegionalCounts" target="_blank">BC/Regional: Cancer Deaths</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/StandardizedMortalityRatio/" target="_blank">BC/Regional: Age-standardized Cancer Mortality Ratio</a></li>');
  $(".dropdown-menu-4").append('<li><a href="https://bccandataanalytics.shinyapps.io/PrevalenceCounts" target="_blank">BC: Number of Prevalent Cases</a></li>');
  $(".dropdown-menu-4").append('<li><a href="https://bccandataanalytics.shinyapps.io/RegionalPrevalenceCounts/" target="_blank">Regional: Prevalence</a></li>');
  $(".dropdown-menu-5").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceProjections/" target="_blank">BC/Regional: Estimated New Cancer Diagnoses</a></li>');
  $(".dropdown-menu-6").append('<li><a href="https://bccandataanalytics.shinyapps.io/LifetimeRisk/" target="_blank">BC: Lifetime Risk of being Diagnosed</a></li>');
    $(".dropdown-menu-6").append('<li><a href="https://bccandataanalytics.shinyapps.io/LifetimeRiskOfDying/" target="_blank">BC: Lifetime Risk of Dying</a></li>');
  $(".dropdown-menu-7").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidCreateYourOwnTable/" target="_blank">BC: New Cancer Diagnoses</a></li>');
  $(".dropdown-menu-7").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortCreateYourOwnTable/" target="_blank">BC: Cancer Deaths</a></li>');
  $(".dropdown-menu-6").append('<li><a href="https://bccandataanalytics.shinyapps.io/SurvivalRate/" target="_blank">BC: Survival Rate</a></li>');
  $(".dropdown-menu-4").append('<li><a href="https://bccandataanalytics.shinyapps.io/PrevalenceCountsOverTime/" target="_blank">BC/Regional: Prevalence Over Time</a></li>');
 
  /*$(".dropdown-menu-5").append('<li><a href="https://bccandataanalytics.shinyapps.io/CreateTableMortalityCounts" target="_blank">Cancer Deaths</a></li>');*/
});

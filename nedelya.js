function getWeekNumber() {
  const today = new Date();
  const yearstart = new Date(Date.UTC(today.getFullYear(), 0, 1));
  const dayCount = Math.ceil((today - yearstart) / 86400000);
  return Math.ceil((dayCount + 1) / 7);
}

function autoRedirectWeek() {
  const currentWeekNum = getWeekNumber();
  const currentPath = window.location.pathname;
  const isFistWeekIn = (currentWeekNum % 2 === 0);
  
  if (isFistWeekIn && currentPath.includes("rozklad.html")){
    window.location.href = "rozklad_econd_page.html";
  }
  
  else if (!isFistWeekIn  && currentPath.includes("rozklad_econd_page.html")){
    window.location.href = "rozklad.html";
  }
}

autoRedirectWeek();

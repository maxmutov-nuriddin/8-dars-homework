let phoneBoxSpan = document.querySelector(".phone-box-span");
let calendarS = document.querySelector('.calendars')
let calendar = document.querySelector('.calendar')
let spans = document.querySelector('.phone-box-span')


let camera = document.querySelector(".camera");
const videosContainer = document.getElementById('videos-container');

let timeSpan = document.querySelector('.time__times')
let batterySpan = document.querySelector('.data-battery')

// time  

let date = new Date();
let options = { hour: 'numeric', minute: 'numeric' };
let times = date.toLocaleString("it-IT", options);
timeSpan.innerHTML = times;

let clear = setInterval(() => {
  date = new Date();
  times = date.toLocaleString("it-IT", options);
  timeSpan.innerHTML = times;
}, 60000);


// battery 

function updateBatteryStatus(battery) {
  if (battery.charging) {
    let percentage = Math.round(battery.level * 100);
    batterySpan.innerHTML = `${percentage} ⚡︎`;
  } else {
    let percentage = Math.round(battery.level * 100);
    batterySpan.innerHTML = `${percentage} %`;
  }
}

navigator.getBattery().then(function (battery) {
  updateBatteryStatus(battery);

  battery.addEventListener("chargingchange", function () {
    updateBatteryStatus(battery);
  });

  battery.addEventListener("levelchange", function () {
    updateBatteryStatus(battery);
  });
});

// safary
function openGoogleSearch() {
  window.open('https://www.google.com/', '_blank', 'width=260,height=475');
}

// settings
function openSettings() {
  if (window.innerWidth < 1000) {
    window.location.href = 'intent:#Intent;action=android.settings.SETTINGS;end;';
  } else {
    window.location.href = 'ms-settings:';
  }
}

// message
function openMessages() {
  if (window.innerWidth < 1000) {
    window.location.href = 'sms:';
  } else {
    window.location.href = 'mailto:';
  }
}

// phone
function openPhone() {
  if (window.innerWidth < 1000) {
    window.location.href = 'tel:';
  } else {
    window.location.href = 'tel:';
  }
}


//clock
let clock = document.querySelector('.clock__box');
let clockTime = document.querySelector('.alarm-time');
let sbBtn = document.querySelector('.btn-alarm');
let optionS = document.querySelector('.optionS')
let stopAlarm = document.querySelector('.btn-stopalarm');
let btnSnooze = document.querySelector('.btn-snooze');
let alarm = new Audio();

alarm.src = '../audio/htc_basic.mp3';

sbBtn.addEventListener('click', () => {
  optionS.classList.add('optionS__block')

  let interval;

  stopAlarm.addEventListener('click', () => {
    clearInterval(interval);
    alarm.pause();
    optionS.classList.remove('optionS__block')
    alarm.pause();
  });

  btnSnooze.addEventListener('click', () => {
    const delayInMilliseconds = 5000;
    alarm.pause();
    setTimeout(() => {
      alarm.play();
    }, delayInMilliseconds);
  });
  const TIME = clockTime.value;
  console.log(TIME);

  interval = setInterval(() => {
    let date = new Date();
    let options = { hour: '2-digit', minute: '2-digit' };
    let time = date.toLocaleTimeString("it-IT", options);
    if (time == TIME) {
      console.log(time);
      alarm.play();
      clearInterval(interval);
    }
  }, 1000);
});

function openClockBox() {
  clock.classList.add('block__clock');
  timeSpan.style = `color: black;`
  spans.classList.add('colors-span')
}
// notes

function openNotes() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/ipad|iphone|ipod/.test(userAgent)) {
    window.location.href = 'mobilenotes:';
  } else if (/android/.test(userAgent)) {
    window.location.href = 'notes:';
  } else if (/win/.test(userAgent)) {
    try {
      const shell = new ActiveXObject('WScript.Shell');
      shell.Run('notepad.exe');
    } catch (e) {
      console.log('Не удалось открыть приложение "Заметки" на данном устройстве.');
    }
  } else if (/mac/.test(userAgent)) {
    try {
      const appPath = '/Applications/Notes.app'; 
      window.location.href = `file://${appPath}`;
    } catch (e) {
      console.log('Не удалось открыть приложение "Заметки" на данном устройстве.');
    }
  } else {
    console.log('Открытие приложения "Заметки" не поддерживается на данном устройстве.');
  }

}

// translate
let translate = document.querySelector('.translate');
let translateBtn = document.querySelector('.translate__btn');
let changeBtn = document.querySelector('.change__btn');
let textData = document.querySelector('.text__data');
let inputText = document.querySelector('.text__input');

function blockTranslate() {
  translate.classList.add('translate__block')
  timeSpan.style = `color: black;`
  spans.classList.add('colors-span')
}

let isKrillToLotin = true;

function krillToLotin(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let translatedChar;

    switch (char) {
      case 'а': translatedChar = 'a'; break;
      case 'б': translatedChar = 'b'; break;
      case 'в': translatedChar = 'v'; break;
      case 'г': translatedChar = 'g'; break;
      case 'д': translatedChar = 'd'; break;
      case 'е': translatedChar = 'e'; break;
      case 'ё': translatedChar = 'yo'; break;
      case 'ж': translatedChar = 'j'; break;
      case 'з': translatedChar = 'z'; break;
      case 'и': translatedChar = 'i'; break;
      case 'й': translatedChar = 'y'; break;
      case 'к': translatedChar = 'k'; break;
      case 'л': translatedChar = 'l'; break;
      case 'м': translatedChar = 'm'; break;
      case 'н': translatedChar = 'n'; break;
      case 'о': translatedChar = 'o'; break;
      case 'п': translatedChar = 'p'; break;
      case 'р': translatedChar = 'r'; break;
      case 'с': translatedChar = 's'; break;
      case 'т': translatedChar = 't'; break;
      case 'у': translatedChar = 'u'; break;
      case 'ф': translatedChar = 'f'; break;
      case 'х': translatedChar = 'x'; break;
      case 'ҳ': translatedChar = 'h'; break;
      case 'ы': translatedChar = 'y'; break;
      case 'ч': translatedChar = 'ch'; break;
      case 'ш': translatedChar = 'sh'; break;
      case 'ъ': translatedChar = '\''; break;
      case 'э': translatedChar = 'e'; break;
      case 'ю': translatedChar = 'yu'; break;
      case 'я': translatedChar = 'ya'; break;
      case 'А': translatedChar = 'A'; break;
      case 'Б': translatedChar = 'B'; break;
      case 'В': translatedChar = 'V'; break;
      case 'Г': translatedChar = 'G'; break;
      case 'Д': translatedChar = 'D'; break;
      case 'Е': translatedChar = 'E'; break;
      case 'Ё': translatedChar = 'Yo'; break;
      case 'Ж': translatedChar = 'J'; break;
      case 'З': translatedChar = 'Z'; break;
      case 'И': translatedChar = 'I'; break;
      case 'Й': translatedChar = 'Y'; break;
      case 'К': translatedChar = 'K'; break;
      case 'Л': translatedChar = 'L'; break;
      case 'М': translatedChar = 'M'; break;
      case 'Н': translatedChar = 'N'; break;
      case 'О': translatedChar = 'O'; break;
      case 'П': translatedChar = 'P'; break;
      case 'Р': translatedChar = 'R'; break;
      case 'С': translatedChar = 'S'; break;
      case 'Т': translatedChar = 'T'; break;
      case 'У': translatedChar = 'U'; break;
      case 'Ф': translatedChar = 'F'; break;
      case 'Х': translatedChar = 'X'; break;
      case 'Ҳ': translatedChar = 'H'; break;
      case 'Ч': translatedChar = 'Ch'; break;
      case 'Ш': translatedChar = 'Sh'; break;
      case 'Ъ': translatedChar = '\''; break;
      case 'Э': translatedChar = 'E'; break;
      case 'Ю': translatedChar = 'Yu'; break;
      case 'Я': translatedChar = 'Ya'; break;
      default: translatedChar = char; break;
    }

    result += translatedChar;
  }

  return result;
}

function lotinToKrill(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let translatedChar;

    switch (char) {
      case 'a': translatedChar = 'а'; break;
      case 'b': translatedChar = 'б'; break;
      case 'v': translatedChar = 'в'; break;
      case 'g': translatedChar = 'г'; break;
      case 'd': translatedChar = 'д'; break;
      case 'e': translatedChar = 'е'; break;
      case 'yo': translatedChar = 'ё'; break;
      case 'j': translatedChar = 'ж'; break;
      case 'z': translatedChar = 'з'; break;
      case 'i': translatedChar = 'и'; break;
      case 'y': translatedChar = 'й'; break;
      case 'k': translatedChar = 'к'; break;
      case 'l': translatedChar = 'л'; break;
      case 'm': translatedChar = 'м'; break;
      case 'n': translatedChar = 'н'; break;
      case 'o': translatedChar = 'о'; break;
      case 'p': translatedChar = 'п'; break;
      case 'r': translatedChar = 'р'; break;
      case 's': translatedChar = 'с'; break;
      case 't': translatedChar = 'т'; break;
      case 'u': translatedChar = 'у'; break;
      case 'f': translatedChar = 'ф'; break;
      case 'x': translatedChar = 'х'; break;
      case 'h': translatedChar = 'ҳ'; break;
      case 'y': translatedChar = 'ы'; break;
      case 'ch': translatedChar = 'ч'; break;
      case 'sh': translatedChar = 'ш'; break;
      case '\'': translatedChar = 'ъ'; break;
      case 'e': translatedChar = 'э'; break;
      case 'yu': translatedChar = 'ю'; break;
      case 'ya': translatedChar = 'я'; break;
      case 'A': translatedChar = 'А'; break;
      case 'B': translatedChar = 'Б'; break;
      case 'V': translatedChar = 'В'; break;
      case 'G': translatedChar = 'Г'; break;
      case 'D': translatedChar = 'Д'; break;
      case 'E': translatedChar = 'Е'; break;
      case 'Yo': translatedChar = 'Ё'; break;
      case 'J': translatedChar = 'Ж'; break;
      case 'Z': translatedChar = 'З'; break;
      case 'I': translatedChar = 'И'; break;
      case 'Y': translatedChar = 'Й'; break;
      case 'K': translatedChar = 'К'; break;
      case 'L': translatedChar = 'Л'; break;
      case 'M': translatedChar = 'М'; break;
      case 'N': translatedChar = 'Н'; break;
      case 'O': translatedChar = 'О'; break;
      case 'P': translatedChar = 'П'; break;
      case 'R': translatedChar = 'Р'; break;
      case 'S': translatedChar = 'С'; break;
      case 'T': translatedChar = 'Т'; break;
      case 'U': translatedChar = 'У'; break;
      case 'F': translatedChar = 'Ф'; break;
      case 'X': translatedChar = 'Х'; break;
      case 'H': translatedChar = 'Ҳ'; break;
      case 'Ch': translatedChar = 'Ч'; break;
      case 'Sh': translatedChar = 'Ш'; break;
      case '\'': translatedChar = 'Ъ'; break;
      case 'E': translatedChar = 'Э'; break;
      case 'Ya': translatedChar = 'Я'; break;
      case 'Yu': translatedChar = 'Ю'; break;
      default: translatedChar = char; break;
    }

    result += translatedChar;
  }

  return result;
}

translateBtn.addEventListener('click', () => {
  const translatedText = krillToLotin(inputText.value);
  textData.innerHTML = translatedText;
})

changeBtn.addEventListener('click', () => {
  const translatedText = textData.innerHTML;
  let reversedText;

  if (isKrillToLotin) {
    reversedText = lotinToKrill(translatedText);
    isKrillToLotin = false;
  } else {
    reversedText = krillToLotin(translatedText);
    isKrillToLotin = true;
  }

  textData.innerHTML = reversedText;
});




// calendar

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

let currentDate = new Date();

let monthNames = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

let weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

for (let month = 0; month < 12; month++) {
  let monthName = monthNames[month];
  let monthElement = document.createElement("div");
  monthElement.classList.add("month");
  monthElement.innerHTML = monthName;

  let tableElement = document.createElement("table");
  let theadElement = document.createElement("thead");
  let tbodyElement = document.createElement("tbody");

  let weekdaysRow = document.createElement("tr");

  for (let i = 0; i < 7; i++) {
    let weekdayCell = document.createElement("td");
    weekdayCell.textContent = weekdays[i];
    weekdaysRow.appendChild(weekdayCell);
  }

  theadElement.appendChild(weekdaysRow);
  tableElement.appendChild(theadElement);

  let firstDay = new Date(currentDate.getFullYear(), month, 1);

  let currentDayOfWeek = firstDay.getDay();
  let offset = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

  let currentRow = document.createElement("tr");

  for (let i = 0; i < offset; i++) {
    let emptyCell = document.createElement("td");
    currentRow.appendChild(emptyCell);
  }

  let totalDays = daysInMonth(month, currentDate.getFullYear());
  for (let day = 1; day <= totalDays; day++) {
    let cell = document.createElement("td");
    cell.textContent = day;

    if (
      day === currentDate.getDate() &&
      month === currentDate.getMonth()
    ) {
      cell.classList.add("today");
    }

    currentRow.appendChild(cell);

    if (currentRow.children.length === 7) {
      tbodyElement.appendChild(currentRow);
      currentRow = document.createElement("tr");
    }
  }

  if (currentRow.children.length > 0) {
    tbodyElement.appendChild(currentRow);
  }

  tableElement.appendChild(tbodyElement);
  monthElement.appendChild(tableElement);
  document.querySelector(".calendar").appendChild(monthElement);
}

calendarS.addEventListener('click', () => {
  timeSpan.style = `color: black;`
  videosContainer.style = `z-index: -11`
  calendar.classList.add('block')
  spans.classList.add('colors-span')
});

// // camera

camera.addEventListener('click', function () {
  async function startCamera() {
    try {
      videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement = document.createElement('video');
      videoElement.srcObject = videoStream;
      videoElement.autoplay = true;
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
      videosContainer.appendChild(videoElement);
      videosContainer.style = `z-index: 1`
    } catch (error) {
      console.error('Ошибка при включении камеры:', error);
    }
  }

  startCamera();
});


// close 

let startY = null;
let videoElement = null;
let videoStream = null;

phoneBoxSpan.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  if (!startY) {
    return;
  }

  const currentY = event.changedTouches[0].clientY;
  const yDiff = startY - currentY;

  if (yDiff > 0) {
    timeSpan.style = `color: #fff;`
    calendar.classList.remove('block')
    spans.classList.remove('colors-span')
    clock.classList.remove('block__clock');
    clock.classList.remove('block__clock');
    translate.classList.remove('translate__block')
    videosContainer.style = `z-index: -11`

  }

  if (yDiff > 0 && videoElement) {
    videoElement.pause();
    videoStream.getTracks().forEach((track) => {
      track.stop();
    });
    videosContainer.removeChild(videoElement);
    videoElement = null;
    videoStream = null;
  }

  startY = null;
}



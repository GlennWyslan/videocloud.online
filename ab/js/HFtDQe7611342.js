
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
    var scrollElement = document.getElementById("#ancora");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
    (function() {
      try {
        const accordionTitles = document.querySelectorAll(".a-ac-t");
        accordionTitles.forEach((title, index) => {
          title.addEventListener("click", () => {
            title.classList.toggle("a-ac-t-active");
            const accordionContent = title.nextElementSibling;
            const toggleSymbol = title.querySelector(".a-ac-tg");
            title.childNodes[1].childNodes[0].classList.toggle('atomicat-hidden');
            title.childNodes[1].childNodes[1].classList.toggle('atomicat-hidden');
            accordionContent.classList.toggle("a-c-inactive");
            accordionContent.nextElementSibling.classList.toggle("atomicat-hidden");
          });
        });
      } catch (error) {
        return error;
      }
    })();
    (function() {

    try {
        const conditionalDisplayList = [{"key":"ee1e1d4","conditionalDisplay":{"active":true,"logics":[{"type":"browser"}],"visibility":"visible"},"type":"button"}];
        conditionalDisplayList.forEach((item) => {
            const { type, conditionalDisplay, key } = item;
            const { visibility = "visible", logics, applicable = "trueAll" } = conditionalDisplay;
            const elementClass = type === "container" ? ".a-cont-" + key : ".a-e-cont-" + key;
            const targetElement = document.querySelector(elementClass);
            const showItem = () => {
              targetElement.classList.remove("atomicat-hidden");
            }

            const visibilityFxn = (logic) => {
                if(visibility === "visible") {
                  return !logic;
                } else {
                  return logic; 
                }
              }
            const resultArr = [];
            
            if(visibility !== "hideWithoutCondition" &&  logics?.length ) {
              for (let i = 0; i < logics?.length; i++) {
                  const logic = logics[i];
                  const { type } = logic;
                  if(type === "dateAndTime") {
                     const { date, date2, dateCondition = "between" } = logic;
                      const currentDate = new Date().getTime();
                      const fromDate = new Date(date).getTime();
                      const toDate = new Date(date2).getTime();
                      const logicObj = {
                        between: currentDate >= fromDate && currentDate <= toDate,
                        notBetween: currentDate < fromDate || currentDate > toDate,
                      }

                      resultArr.push(logicObj[dateCondition]);
                  } else if(type === "query") {
                     const { query, queryCondition = "include" } = logic;
                    const windowQuery = window.location.search;

                    const urlParams = new URLSearchParams(window.location.search);
                    const param = query.split("=")

                    const includeQuery = param.length > 1 ? urlParams?.get(param[0])?.includes(param[1]) : urlParams?.get(param[0]) != null;
                    const queryObj = {
                      include: includeQuery,
                      exclude: !includeQuery,
                    }

                    resultArr.push(queryObj[queryCondition]);
                  } else if(type === "browser") {
                    const { browsers, browserCondition = "include" } = logic; 
                    const iphoneKeyWords = ["iPhone", "iPad", "iPod", "Macintosh"];
                    const { userAgent } = navigator;
                    const isIphone = iphoneKeyWords.some((item) => userAgent.includes(item));
                    const chromeBrowsers = ["Edg", "OPR"];
                    const nonIphoneAgent = (chromeBrowsers.some(item => userAgent.includes(item)) ? userAgent.replace("Chrome", "") : userAgent)?.replace("Safari", "");
                    const iphoneAgent = userAgent.replace("Safari", "");
                    const isSafariOnIOS = /Safari/.test(userAgent) && !/CriOS|FxiOS|EdgiOS|OPT/.test(userAgent);
                    const updateUserAgent = isIphone ? iphoneAgent : nonIphoneAgent;
                    const isBrowser = isIphone && isSafariOnIOS ? true : browsers.find((browser) => updateUserAgent.includes(isIphone ? browser?.ios : browser?.value)) ? true : false;
                    const browserObj = {
                      include: isBrowser,
                      exclude: !isBrowser
                    }

                    resultArr.push(browserObj[browserCondition]);
                  }
              }


              const allTrue = resultArr.every((item) => item === true);
              const oneTrue = resultArr.some((item) => item === true);

              const applicableObj = {
                trueAll: allTrue,
                trueAny: oneTrue  
              }
              const isApplicable = applicableObj[applicable];

              const visibilityObj = {
                visible: isApplicable,
                hidden: !isApplicable
              }

              const isVisibility = visibilityObj[visibility];

              if(isVisibility) {
                showItem();
              }

            }
            
          })
    } catch (error) {
        return error;
    }
    })();(function() {
          try {
              const clickeventList = [{"compKey":"ee1e1d4","misc":{"type":"button"}},{"compKey":"43a249e","misc":{"type":"text"}},{"compKey":"6f99817","misc":{"type":"button"}},{"compKey":"110a9f4","misc":{"type":"text"}},{"compKey":"c4e3cf2","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();(function() {
          try {
              const animationList = [{"key":"ee1e1d4","type":"button"},{"key":"6f99817","type":"button"}];
    
              animationList.forEach((animationItem, index) => {
                const { key, type } = animationItem;
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('atomicat-entrance-animation-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('atomicat-entrance-animation-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              return error;
          }
      })();
          (function() {
            try {
              var vturbvideoId = "null";
              var SECONDS_TO_DISPLAY = 18;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed18';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                startWatchVideoProgress();
              }
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => (instance?.options?.id || instance?.analytics?.player?.options?.id) === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              function startWatchVideoProgress() {
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                console.log(smartplayer.instances);
                var videoInstance = getVideoInstance();
                videoInstance.on('timeupdate', () => {
                  if (elsDisplayed || videoInstance.smartAutoPlay) return;
                  console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                  if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                  showHiddenElements();
                });
              };
            } catch (error) {
              console.log(error);
            }
            
          })();
        
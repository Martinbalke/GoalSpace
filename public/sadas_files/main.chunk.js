(this["webpackJsonpgoalsapp"] = this["webpackJsonpgoalsapp"] || []).push([["main"],{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _GoalContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalContainer */ "./src/components/GoalContainer.js");
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero */ "./src/components/Hero.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/App.js";






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GoalContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Chart.js":
/*!*********************************!*\
  !*** ./src/components/Chart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createChart */ "./src/components/_createChart.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Chart.js";




const Chart = ({
  progressData,
  goals
}) => {
  const chartRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [dataToDisplay, setDataToDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [dataType, setDataType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('dailyProgress');

  const combineProgressIntoDataSet = () => {
    const combinedProgressData = {};
    progressData.forEach(progress => {
      const {
        goal
      } = progress.associatedGoal;
      Object.keys(progress[dataType]).forEach(key => {
        let tempObj = {
          [goal]: progress[dataType][key]
        };
        combinedProgressData[key] = { ...combinedProgressData[key],
          ...tempObj
        };
      });
    });
    return combinedProgressData;
  };

  const combineDataSetsIntoChartData = () => {
    const dataArray = [];
    const data = combineProgressIntoDataSet(dataType);
    Object.keys(data).forEach(key => {
      dataArray.push({
        date: key,
        ...data[key]
      });
    });
    return dataArray;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setDataToDisplay(combineDataSetsIntoChartData(dataType));
  }, [progressData, dataType]); //CREAT A AND DISPLAY CHART

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    //CREATE A CHART AND SET IT'S DATA
    const chartClass = new _createChart__WEBPACK_IMPORTED_MODULE_1__["default"](dataToDisplay);
    chartClass.chartSetup(); //CREATE AN ENTRY IN THE CHART FOR EACH GOAL

    goals.forEach(goalObject => chartClass.createSeries(goalObject.goal, goalObject.goal)); //SET THE CURRENT REFERNCE FOR CLEANUP TO THE CREATED CHART

    chartRef.current = chartClass.chart;
    return () => chartRef.current.dispose();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart__buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-main",
    onClick: () => setDataType('dailyProgress'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Daily"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-main",
    onClick: () => setDataType('monthlyProgress'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "Monthly")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "chart",
    className: "chart__display",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
};

const mSTP = state => ({
  progressData: state.progress,
  goals: state.goals
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mSTP)(Chart));

/***/ }),

/***/ "./src/components/ChartsContainer.js":
/*!*******************************************!*\
  !*** ./src/components/ChartsContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart */ "./src/components/Chart.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/ChartsContainer.js";





const ChartsContainer = ({
  progressData,
  dispatch
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "chart-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, progressData && progressData.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 46
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 57
    }
  }));
};

const mSTP = state => ({
  progressData: state.progress
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP)(ChartsContainer));

/***/ }),

/***/ "./src/components/EditGoals.js":
/*!*************************************!*\
  !*** ./src/components/EditGoals.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/EditGoals.js";



function EditGoals({
  goals,
  setEditing
}) {
  if (!goals || !goals.length) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 39
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "edit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, goals.map((goal, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "edit__goal",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "edit__tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, goal.goal), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-main edit__btn",
    onClick: () => {
      setEditing(index);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Edit"))));
}

const mSTP = state => ({
  goals: state.goals
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP)(EditGoals));

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Footer.js";


function Footer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "footer__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "footer__logo-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Goalspace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer__copy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, " \xA9 2020 \xA0 \xA0 \xA0Martin Balke ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 81
    }
  }, "&"), " Joshua Ho"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__socials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer__linked",
    href: "https://www.linkedin.com/in/martinbalke/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer__git",
    href: "https://github.com/Martinbalke",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "\xA0")));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Goal.js":
/*!********************************!*\
  !*** ./src/components/Goal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_goalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/goalReducer */ "./src/store/goalReducer.js");
/* harmony import */ var _store_progressReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/progressReducer */ "./src/store/progressReducer.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations */ "./src/components/animations.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Goal.js";







function Goal({
  goal,
  children,
  index,
  dispatch,
  animationHeight
}) {
  const {
    scrollY
  } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useViewportScroll"])();
  const [visibleWhenScrollDown, setVisibleWhenScrollDown] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  scrollY.onChange(y => {
    if (y > animationHeight) setVisibleWhenScrollDown(true);
  });
  if (!goal.habits) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 28
    }
  });
  return visibleWhenScrollDown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "goal",
    variants: index % 2 === 0 ? _animations__WEBPACK_IMPORTED_MODULE_5__["goalSlideInAnimationLeft"] : _animations__WEBPACK_IMPORTED_MODULE_5__["goalSlideInAnimationRight"],
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "goal__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, goal.goal), goal.habits.map((habit, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "goal__habit",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "goal__habit-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, habit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "goal__habit-button btn btn-round",
    onClick: () => dispatch(Object(_store_progressReducer__WEBPACK_IMPORTED_MODULE_3__["updateProgressPoints"])(goal._id, 5)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "+"))), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn goal__complete ",
    onClick: () => {
      dispatch(Object(_store_goalReducer__WEBPACK_IMPORTED_MODULE_2__["completeGoal"])(goal._id, index));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Complete")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "goal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  });
}

const mSTP = state => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP)(Goal));

/***/ }),

/***/ "./src/components/GoalContainer.js":
/*!*****************************************!*\
  !*** ./src/components/GoalContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Goal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Goal */ "./src/components/Goal.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.js");
/* harmony import */ var _GoalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoalForm */ "./src/components/GoalForm.js");
/* harmony import */ var _EditGoals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditGoals */ "./src/components/EditGoals.js");
/* harmony import */ var _SetGoals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SetGoals */ "./src/components/SetGoals.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chart */ "./src/components/Chart.js");
/* harmony import */ var _Milestone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Milestone */ "./src/components/Milestone.js");
/* harmony import */ var _ChartsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChartsContainer */ "./src/components/ChartsContainer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_goalReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/goalReducer */ "./src/store/goalReducer.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/GoalContainer.js";













function GoalContainer({
  goals,
  dispatch
}) {
  //State variable to keep track of which goal is currently being edited
  const [editing, setEditing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_store_goalReducer__WEBPACK_IMPORTED_MODULE_10__["loadGoals"])());
  }, [dispatch]); //Generate a Goal component for each goal in the global state

  function generateGoalsWithDynamicAnimations() {
    let heights = [800, 1100, 1400];
    if (!goals) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 24
      }
    });
    return goals.map((goal, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Goal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      index: index,
      key: index,
      goal: goal,
      animationHeight: heights[index],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Milestone__WEBPACK_IMPORTED_MODULE_7__["default"], {
      goal: goal,
      index: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "contentContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SetGoals__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setEditing: setEditing,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditGoals__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setEditing: setEditing,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_11__["AnimatePresence"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, editing >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "goalForm__background",
    close: () => setEditing(-1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 27
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GoalForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    index: editing,
    close: () => setEditing(-1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "goalContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_11__["AnimatePresence"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, generateGoalsWithDynamicAnimations())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartsContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })));
}

const mapStateToProps = state => ({
  goals: state.goals,
  progressData: state.progress
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(GoalContainer));

/***/ }),

/***/ "./src/components/GoalForm.js":
/*!************************************!*\
  !*** ./src/components/GoalForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_goalReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/goalReducer */ "./src/store/goalReducer.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations */ "./src/components/animations.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/GoalForm.js";







function GoalForm({
  close,
  dispatch,
  index,
  goals
}) {
  const blankGoal = {
    goal: '',
    habits: ['', '', '']
  };
  const [goal, setGoal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(goals[index] || blankGoal);

  const inputTextChange = (text, index) => {
    if (index < 0) return setGoal({ ...goal,
      goal: text
    });
    let newHabits = [...goal.habits];
    newHabits[index] = text;
    setGoal({ ...goal,
      habits: newHabits
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "goalForm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "goalForm__content",
    variants: _animations__WEBPACK_IMPORTED_MODULE_5__["popupFormAnimation"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "goalForm__form-element",
    autoComplete: "off",
    onSubmit: e => {
      e.preventDefault();
      goal._id ? dispatch(Object(_store_goalReducer__WEBPACK_IMPORTED_MODULE_3__["updateGoal"])(goal, index)) : dispatch(Object(_store_goalReducer__WEBPACK_IMPORTED_MODULE_3__["newGoal"])(goal, index));
      setTimeout(close, 50);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-round goalForm__close",
    onClick: close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "goalForm__tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Set a new goal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "goalForm__inputs-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "goalForm__input",
    id: "goal",
    callback: text => inputTextChange(text, -1),
    defaultValue: goal.goal,
    labelText: "Goal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "goalForm__input",
    id: "habit1",
    callback: text => {
      inputTextChange(text, 0);
    },
    defaultValue: goal.habits[0],
    labelText: "Habit 1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "goalForm__input",
    id: "habit2",
    callback: text => {
      inputTextChange(text, 1);
    },
    defaultValue: goal.habits[1],
    labelText: "Habit 2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "goalForm__input",
    id: "habit3",
    callback: text => {
      inputTextChange(text, 2);
    },
    defaultValue: goal.habits[2],
    labelText: "Habit 3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-round goalForm__submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "+"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "goalForm__sidebar",
    variants: _animations__WEBPACK_IMPORTED_MODULE_5__["popupFormAnimation"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    className: "goalForm__sidebar-svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillOpacity: "1",
    d: "M0,96L40,112C80,128,160,160,240,176C320,192,400,192,480,192C560,192,640,192,720,197.3C800,203,880,213,960,224C1040,235,1120,245,1200,218.7C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "goalForm__sidebar-tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Creating a meaningful goal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "goalForm__sidebar-paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "goalForm__sidebar-numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 52
    }
  }, "1"), "   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "goalForm__sidebar-paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "goalForm__sidebar-numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 52
    }
  }, "2"), "   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "goalForm__sidebar-paragraph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "goalForm__sidebar-numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 52
    }
  }, "3"), "   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.")));
}

const mSTP = state => ({
  goals: state.goals
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mSTP)(GoalForm));

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Hero.js";


function Hero(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "hero__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero__bubbles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 18
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 32
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 39
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 46
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hero__header-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Goalspace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hero__header-text-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "From daily ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 58
    }
  }, "habits"), " to finished ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 86
    }
  }, "goals"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Input.js";


function Input({
  defaultValue,
  callback,
  className,
  id,
  labelText
}) {
  const [text] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue || '');

  const inputTextChange = e => {
    e.preventDefault();
    callback(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    required: true,
    id: id,
    defaultValue: text,
    onChange: e => inputTextChange(e),
    maxLength: "40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, labelText));
}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/Loading.js":
/*!***********************************!*\
  !*** ./src/components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Loading.js";

function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/Milestone.js":
/*!*************************************!*\
  !*** ./src/components/Milestone.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _store_goalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/goalReducer */ "./src/store/goalReducer.js");
/* harmony import */ var _store_progressReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/progressReducer */ "./src/store/progressReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Milestone.js";






const Milestone = ({
  dispatch,
  goal,
  index
}) => {
  const [milestone, setMilestone] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(goal.milestone || '');

  const updateMilestone = async () => {
    let newGoal = { ...goal,
      milestone: milestone
    };

    if (goal.milestone) {
      newGoal.milestone = '';
      await setMilestone('');
      dispatch(Object(_store_progressReducer__WEBPACK_IMPORTED_MODULE_3__["updateProgressPoints"])(goal._id, 20));
    }

    dispatch(Object(_store_goalReducer__WEBPACK_IMPORTED_MODULE_2__["updateGoal"])(newGoal, index));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "milestone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "milestone__form",
    onSubmit: async e => {
      e.preventDefault();
      updateMilestone();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    maxLength: "45",
    onChange: async e => {
      await setMilestone(e.target.value);
    },
    value: milestone,
    className: "milestone__textarea",
    placeholder: "Create a milestone for your goal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "milestone__btn btn btn-blob",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, goal.milestone ? 'Finish' : 'Create')));
};

const mSTP = state => ({
  goals: state.goals
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mSTP)(Milestone));

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/components/animations.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Modal.js";




function Modal({
  close,
  children,
  className
}) {
  //Credit to Ben Bud github.com/benox3 for this code functionality
  const popupRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  useClosePopup(popupRef);

  function useClosePopup(ref) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          close();
        }
      } // Bind the event listener


      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    variants: _animations__WEBPACK_IMPORTED_MODULE_2__["popupContainerAnimation"],
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    className: `${className} modal__background`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__reference",
    ref: popupRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/Nav.js";


function Nav() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "navigation__checkbox",
    id: "nav-check",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nav-check",
    className: "navigation__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navigation__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation__background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navigation__nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navigation__list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navigation__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#chart",
    className: "navigation__link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 48
    }
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navigation__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#chart",
    className: "navigation__link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 48
    }
  }, "Goals")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navigation__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#chart",
    className: "navigation__link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 48
    }
  }, "Contact")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/SetGoals.js":
/*!************************************!*\
  !*** ./src/components/SetGoals.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/components/SetGoals.js";



function SetGoals({
  goals,
  setEditing,
  children
}) {
  const [typeWriterText, setTypeWriteText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(' ');
  const [length, setLength] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [typingAnimation, setTypingAnimation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('show');
  const [timer, setTimer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const verbs = ['impressive', 'impactful', 'motivating'];
  const [index] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Math.floor(Math.random() * verbs.length));

  function typingEffect() {
    const verb = verbs[index];
    length < verb.length ? setLength(length + 1) : setTypingAnimation('none');
    setTypeWriteText(verb.substring(0, length));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    clearTimeout(timer);
    setTimer(setTimeout(typingEffect, 300));
  }, [typeWriterText]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "setgoals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "setgoals__header-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "setgoals__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, `Create a new ${typeWriterText} goal`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "setgoals__cursor",
    style: {
      display: `${typingAnimation}`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), goals.length < 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-round setgoals__btn",
    onClick: () => setEditing(goals.length),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 31
    }
  }, "+")), children);
}

const mSTP = state => ({
  goals: state.goals
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP)(SetGoals));

/***/ }),

/***/ "./src/components/_createChart.js":
/*!****************************************!*\
  !*** ./src/components/_createChart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");



_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__["default"]);

class ChartClass {
  constructor(data) {
    this.chartSetup = () => {
      this.chart.colors.step = 2;
      this.chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["Legend"]();
      this.chart.legend.position = 'top';
      this.chart.legend.paddingBottom = 20;
      this.chart.legend.labels.template.maxWidth = 400;
      this.xAxis.dataFields.category = 'date';
      this.xAxis.renderer.cellStartLocation = 0.1;
      this.xAxis.renderer.cellEndLocation = 0.9;
      this.xAxis.renderer.grid.template.location = 0;
      let yAxis = this.chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"]());
      yAxis.min = 0;
    };

    this.createSeries = (value, name) => {
      let series = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ColumnSeries"]());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = 'date';
      series.name = name;
      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 0;
      series.events.on("hidden", this.arrangeColumns);
      series.events.on("shown", this.arrangeColumns);
      let bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["LabelBullet"]());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = '{valueY}';
      bullet.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]('#ffffff');
      return series;
    };

    this.arrangeColumns = () => {
      let series = this.chart.series.getIndex(0);
      let w = 1 - this.xAxis.renderer.cellStartLocation - (1 - this.xAxis.renderer.cellEndLocation);

      if (series.dataItems.length > 1) {
        let x0 = this.xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = this.xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = (x1 - x0) / this.chart.series.length * w;

        if (_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["isNumber"](delta)) {
          let middle = this.chart.series.length / 2;
          let newIndex = 0;
          this.chart.series.each(series => {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = this.chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;
          this.chart.series.each(series => {
            let trueIndex = this.chart.series.indexOf(series);
            let newIndex = series.dummyData;
            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;
            series.animate({
              property: "dx",
              to: dx
            }, series.interpolationDuration, series.interpolationEasing);
            series.bulletsContainer.animate({
              property: "dx",
              to: dx
            }, series.interpolationDuration, series.interpolationEasing);
          });
        }
      }
    };

    this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"]('chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYChart"]);
    this.xAxis = this.chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxis"]());
    this.chart.data = data;
  }

}

function chartTheme(target) {
  if (target instanceof _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["InterfaceColorSet"]) {
    target.setFor('grid', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#FFF"));
    target.setFor('text', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#3282E7").lighten(-.4));
    target.setFor('secondaryButton', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#3282E7"));
    target.setFor('secondaryButtonHover', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#3282E7").lighten(-.2));
    target.setFor('secondaryButtonActive', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#3282E7").lighten(-.2));
    target.setFor('secondaryButtonDown', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#3282E7").lighten(-.2));
    target.setFor('secondaryButtonStroke', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#FEA138"));
    target.setFor('secondaryButtonText', _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#FEA138"));
  }

  if (target instanceof _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["ColorSet"]) {
    target.list = [_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#3282E7")];
  }
}

_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](chartTheme);
/* harmony default export */ __webpack_exports__["default"] = (ChartClass);

/***/ }),

/***/ "./src/components/animations.js":
/*!**************************************!*\
  !*** ./src/components/animations.js ***!
  \**************************************/
/*! exports provided: popupFormAnimation, popupContainerAnimation, goalSlideInAnimationRight, goalSlideInAnimationLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupFormAnimation", function() { return popupFormAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupContainerAnimation", function() { return popupContainerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goalSlideInAnimationRight", function() { return goalSlideInAnimationRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goalSlideInAnimationLeft", function() { return goalSlideInAnimationLeft; });
const popupFormAnimation = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: .5
    }
  }
};
const popupContainerAnimation = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .4,
      when: 'beforeChildren'
    }
  },
  exit: {
    x: '-100vw',
    opacity: 0
  }
};
const goalSlideInAnimationRight = {
  hidden: {
    opacity: 0,
    scale: 1,
    x: '150vw'
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: .4,
      delay: .5
    }
  },
  exit: {
    x: '-100vw',
    opacity: 0
  }
};
const goalSlideInAnimationLeft = {
  hidden: {
    opacity: 0,
    x: '-100vw',
    scaleX: -1,
    scaleY: 1
  },
  visible: {
    opacity: 1,
    scaleX: -1,
    scaleY: 1,
    x: 0,
    transition: {
      duration: .4,
      delay: .5
    }
  },
  exit: {
    x: '100vw',
    opacity: 0
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
var _jsxFileName = "/Users/martinbalke/coding/goalsapp/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: Object(_store__WEBPACK_IMPORTED_MODULE_4__["default"])(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}))), document.getElementById('root'));

/***/ }),

/***/ "./src/store/goalReducer.js":
/*!**********************************!*\
  !*** ./src/store/goalReducer.js ***!
  \**********************************/
/*! exports provided: superAgentAPICallRecieve, superAgentAPICallSend, loadGoals, newGoal, completeGoal, updateGoal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superAgentAPICallRecieve", function() { return superAgentAPICallRecieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superAgentAPICallSend", function() { return superAgentAPICallSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGoals", function() { return loadGoals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGoal", function() { return newGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeGoal", function() { return completeGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGoal", function() { return updateGoal; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _progressReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressReducer */ "./src/store/progressReducer.js");


const superAgentAPICallRecieve = async (method, uri) => {
  try {
    return await superagent__WEBPACK_IMPORTED_MODULE_0___default.a[method](uri).retry();
  } catch (error) {
    console.error(error);
  }
};
const superAgentAPICallSend = async (method, uri, data) => {
  let jsonData = JSON.stringify(data);

  try {
    return await superagent__WEBPACK_IMPORTED_MODULE_0___default.a[method](uri).set('Content-Type', 'application/json').send(jsonData).retry();
  } catch (error) {
    console.error(error);
  }
};
const loadGoals = () => {
  return async dispatch => {
    let res = await superAgentAPICallRecieve('get', 'http://localhost:3045/goals');
    dispatch({
      type: 'LOAD_GOALS',
      goals: [...res.body]
    });
    dispatch(Object(_progressReducer__WEBPACK_IMPORTED_MODULE_1__["loadProgressData"])());
  };
};
const newGoal = (goal, index) => {
  return async dispatch => {
    let res = await superAgentAPICallSend('post', 'http://localhost:3045/goals', goal);
    setTimeout(() => dispatch(Object(_progressReducer__WEBPACK_IMPORTED_MODULE_1__["createProgressData"])(res.body._id)), 2000);
    dispatch({
      type: 'NEW_GOAL',
      goal: res.body,
      index
    });
  };
};
const completeGoal = (id, index) => {
  return async dispatch => {
    await superAgentAPICallRecieve('delete', `http://localhost:3045/goals/${id}`);
    dispatch({
      type: 'COMPLETE_GOAL',
      index
    });
  };
};
const updateGoal = (goal, index) => {
  return async dispatch => {
    await superAgentAPICallSend('put', `http://localhost:3045/goals/${goal._id}`, goal);
    dispatch({
      type: 'UPDATE_GOAL',
      goal,
      index
    });
  };
};

let goalReducer = (state = [], {
  goals,
  goal,
  type,
  index
}) => {
  let newState = [...state];

  switch (type) {
    case 'LOAD_GOALS':
      return [...goals];

    case 'NEW_GOAL':
      return [...newState, goal];

    case 'UPDATE_GOAL':
      return newState.map(state => state._id === goal._id ? state = goal : state);

    case 'COMPLETE_GOAL':
      return newState.filter((g, i) => index !== i);

    default:
      return newState;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (goalReducer);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _goalReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goalReducer */ "./src/store/goalReducer.js");
/* harmony import */ var _progressReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressReducer */ "./src/store/progressReducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  goals: _goalReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  progress: _progressReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
function configureStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]));
}

/***/ }),

/***/ "./src/store/progressReducer.js":
/*!**************************************!*\
  !*** ./src/store/progressReducer.js ***!
  \**************************************/
/*! exports provided: loadProgressData, createProgressData, updateProgressPoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProgressData", function() { return loadProgressData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgressData", function() { return createProgressData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProgressPoints", function() { return updateProgressPoints; });
/* harmony import */ var _goalReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goalReducer */ "./src/store/goalReducer.js");


const getAndFormatDate = format => {
  //Creat a new date for today and then turn it into an array
  const date = new Date().toDateString().split(' '); // Date[1] represents the month [2] represents the day and [3] the year

  if (format === 'day') return `${date[1]} ${date[2]}`;
  if (format === 'month') return `${date[1]} ${date[3]}`;
};

const day = getAndFormatDate('day');
const month = getAndFormatDate('month');
const loadProgressData = () => {
  return async dispatch => {
    let res = await Object(_goalReducer__WEBPACK_IMPORTED_MODULE_0__["superAgentAPICallRecieve"])('get', `http://localhost:3045/progress`);
    dispatch({
      type: 'LOAD_PROGRESS',
      progress: res.body
    });
  };
};
const createProgressData = goalId => {
  const createFirstProgressData = {
    dailyProgress: {
      [day]: 0
    },
    monthlyProgress: {
      [month]: 0
    },
    associatedGoal: goalId
  };
  return async dispatch => {
    let res = await Object(_goalReducer__WEBPACK_IMPORTED_MODULE_0__["superAgentAPICallSend"])('post', 'http://localhost:3045/progress', createFirstProgressData);
    dispatch({
      type: 'CREATE_PROGESS',
      progess: res.body
    });
  };
};
const updateProgressPoints = (goalId, amount) => {
  return async dispatch => {
    //Get the progress for the goal by goaldID
    const res = await Object(_goalReducer__WEBPACK_IMPORTED_MODULE_0__["superAgentAPICallRecieve"])('get', `http://localhost:3045/progress/${goalId}`); //Modify the progress data

    let progress = res.body;
    progress.monthlyProgress[month] ? progress.monthlyProgress[month] += amount : progress.monthlyProgress[month] = amount;
    progress.dailyProgress[day] ? progress.dailyProgress[day] += amount : progress.dailyProgress[day] = amount; //Update the progress in the database

    await Object(_goalReducer__WEBPACK_IMPORTED_MODULE_0__["superAgentAPICallSend"])('put', `http://localhost:3045/progress/${progress._id}`, progress);
    dispatch({
      type: 'UPDATE_POINTS',
      progress
    });
  };
};

const progressReducer = (state = [], {
  type,
  progress
}) => {
  const newState = [...state];

  switch (type) {
    case 'LOAD_PROGRESS':
      return [...progress];

    case 'CREATE_PROGRESS':
      return [...newState, progress];

    case 'UPDATE_POINTS':
      return newState.map(current => current._id === progress._id ? current = progress : current);

    default:
      return newState;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (progressReducer);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/martinbalke/coding/goalsapp/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/martinbalke/coding/goalsapp/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/martinbalke/coding/goalsapp/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",5]]]);
//# sourceMappingURL=main.chunk.js.map
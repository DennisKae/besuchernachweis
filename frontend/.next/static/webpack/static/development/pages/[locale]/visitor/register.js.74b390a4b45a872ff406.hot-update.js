webpackHotUpdate("static/development/pages/[locale]/visitor/register.js",{

/***/ "./context/RestContext.tsx":
false,

/***/ "./hooks/useRestClient.tsx":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/index.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/Alert/Alert.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/Alert/index.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js":
false,

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/createSvgIcon.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
false,

/***/ "./pages/[locale]/visitor/register.tsx":
/*!*********************************************!*\
  !*** ./pages/[locale]/visitor/register.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_RegisterVisit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/RegisterVisit */ "./components/RegisterVisit/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_RegisterVisit__WEBPACK_IMPORTED_MODULE_0__["default"]);
/*const Visitors: React.FunctionComponent = () => {
  const { client, setIsLoading, setHasError } = useRestClient();
  const [createStatus, setCreateStatus] = React.useState<any>('');
  const [gebaeude, setGebaeude] = React.useState(null);
  React.useEffect(() => {
    async function getGebaude() {
      if (client) {
        const res = await client.getGebauede();
        if (res) setGebaeude(res);
      }
    }
    getGebaude();
  }, []);

  return (
    <>
      {createStatus === 'success' && (
        <Alert severity="success">Besuch erfolgreich angelegt.</Alert>
      )}
      <Register
        buildings={gebaeude}
        createNewVisitor={async props => {
          if (client) {
            setIsLoading(true);
            try {
              const res = await client.postBesucher({
                person: {
                  name: props.name,
                  vorname: props.firstName,
                  email: props.email,
                  telefon: props.phone,
                },
                gesundheitsstatus: 'gesund',
              });
              if (res && res.id) {
                await client.postBesuch({
                  besucher: [res.id],
                  raeume: props.rooms,
                });
              }
              setIsLoading(false);
              setCreateStatus('success');
            } catch (error) {
              setCreateStatus('error');
              setHasError(true);
            }
          }
        }}
      />
    </>
  );
};

export default Visitors;*/

/***/ }),

/***/ "./rest-client/index.tsx":
false

})
//# sourceMappingURL=register.js.74b390a4b45a872ff406.hot-update.js.map
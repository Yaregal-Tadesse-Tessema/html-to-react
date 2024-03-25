import react, { Fragment } from "react";

function Security() {
  return (
    <Fragment>
      {/* <script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) { if ( document.documentElement.hasAttribute("data-bs-theme-mode")) { themeMode = document.documentElement.getAttribute("data-bs-theme-mode"); } else { if ( localStorage.getItem("data-bs-theme") !== null ) { themeMode = localStorage.getItem("data-bs-theme"); } else { themeMode = defaultThemeMode; } } if (themeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-bs-theme", themeMode); }</script> */}
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <div
              id="kt_header"
              className="header"
              data-kt-sticky="true"
              data-kt-sticky-name="header"
              data-kt-sticky-offset="{default: '200px', lg: '300px'}"
            >
              <div className="container-xxl d-flex flex-grow-1 flex-stack">
                <div className="d-flex align-items-center me-5">
                  <div
                    className="d-lg-none btn btn-icon btn-active-color-primary w-30px h-30px ms-n2 me-3"
                    id="kt_header_menu_toggle"
                  >
                    <i className="ki-duotone ki-abstract-14 fs-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  <a href="index.html">
                    <img
                      alt="Logo"
                      src="assets/media/logos/demo11.svg"
                      className="theme-light-show h-20px h-lg-30px"
                    />
                    <img
                      alt="Logo"
                      src="assets/media/logos/demo11-dark.svg"
                      className="theme-dark-show h-20px h-lg-30px"
                    />
                  </a>
                </div>
                <div className="d-flex align-items-center flex-shrink-0">
                  <div
                    id="kt_header_search"
                    className="header-search d-flex align-items-center w-lg-250px"
                    data-kt-search-keypress="true"
                    data-kt-search-min-length="2"
                    data-kt-search-enter="enter"
                    data-kt-search-layout="menu"
                    data-kt-search-responsive="lg"
                    data-kt-menu-trigger="auto"
                    data-kt-menu-permanent="true"
                    data-kt-menu-placement="bottom-end"
                  >
                    <div
                      data-kt-search-element="toggle"
                      className="search-toggle-mobile d-flex d-lg-none align-items-center"
                    >
                      <div className="d-flex btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px">
                        <i className="ki-duotone ki-magnifier fs-1 text-gray-700 fs-2">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>
                    <form
                      data-kt-search-element="form"
                      className="d-none d-lg-block w-100 position-relative mb-2 mb-lg-0"
                      autocomplete="off"
                    >
                      <input type="hidden" />
                      <i className="ki-duotone ki-magnifier fs-2 text-gray-700 position-absolute top-50 translate-middle-y ms-4">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                      <input
                        type="text"
                        className="form-control bg-transparent ps-13 fs-7 h-40px"
                        name="search"
                        value=""
                        placeholder="Quick Search"
                        data-kt-search-element="input"
                      />
                      <span
                        className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                        data-kt-search-element="spinner"
                      >
                        <span className="spinner-border h-15px w-15px align-middle text-gray-500"></span>
                      </span>
                      <span
                        className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                        data-kt-search-element="clear"
                      >
                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                    </form>
                    <div
                      data-kt-search-element="content"
                      className="menu menu-sub menu-sub-dropdown py-7 px-7 overflow-hidden w-300px w-md-350px"
                    >
                      <div data-kt-search-element="wrapper">
                        <div
                          data-kt-search-element="results"
                          className="d-none"
                        >
                          <div className="scroll-y mh-200px mh-lg-350px">
                            <h3
                              className="fs-5 text-muted m-0 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Users
                            </h3>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-6.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Karina Clark
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Marketing Manager
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Olivia Bold
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Software Engineer
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-9.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Ana Clark
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  UI/UX Designer
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-14.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Nick Pitola
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Art Director
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-11.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Edward Kulnic
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  System Administrator
                                </span>
                              </div>
                            </a>
                            <h3
                              className="fs-5 text-muted m-0 pt-5 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Customers
                            </h3>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/volicity-9.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Company Rbranding
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  UI Design
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/tvit.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Company Re-branding
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Web Development
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/misc/infography.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Business Analytics App
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Administration
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/leaf.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  EcoLeaf App Launch
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Marketing
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/tower.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Tower Group Website
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Google Adwords
                                </span>
                              </div>
                            </a>
                            <h3
                              className="fs-5 text-muted m-0 pt-5 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Projects
                            </h3>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-notepad fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                    <span className="path5"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Si-Fi Project by AU Themes
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #45670
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-frame fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Shopix Mobile App Planning
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #45690
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Finance Monitoring SAAS Discussion
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #21090
                                </span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Dashboard Analitics Launch
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #34560
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="" data-kt-search-element="main">
                          <div className="d-flex flex-stack fw-semibold mb-4">
                            <span className="text-muted fs-6 me-2">
                              Recently Searched:
                            </span>
                            <div
                              className="d-flex"
                              data-kt-search-element="toolbar"
                            >
                              <div
                                data-kt-search-element="preferences-show"
                                className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle="
                                title="Show search preferences"
                              >
                                <i className="ki-duotone ki-setting-2 fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              <div
                                data-kt-search-element="advanced-options-form-show"
                                className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1"
                                data-bs-toggle="tooltip"
                                title="Show more search options"
                              >
                                <i className="ki-duotone ki-down fs-2"></i>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-y mh-200px mh-lg-325px">
                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-laptop fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <a
                                  href="#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                >
                                  BoomApp by Keenthemes
                                </a>
                                <span className="fs-7 text-muted fw-semibold">
                                  #45789
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <a
                                  href="#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                >
                                  "Kept API Project Meeting
                                </a>
                                <span className="fs-7 text-muted fw-semibold">
                                  #84050
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-chart fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <a
                                  href="#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                >
                                  "KPI Monitoring App Launch
                                </a>
                                <span className="fs-7 text-muted fw-semibold">
                                  #84250
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <a
                                  href="#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                >
                                  Project Reference FAQ
                                </a>
                                <span className="fs-7 text-muted fw-semibold">
                                  #67945
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-sms fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <a
                                  href="#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                >
                                  "FitPro App Development
                                </a>
                                <span className="fs-7 text-muted fw-semibold">
                                  #84250
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-bank fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <a
                                  href="#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                >
                                  Shopix Mobile App
                                </a>
                                <span className="fs-7 text-muted fw-semibold">
                                  #45690
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              <div className="d-flex flex-column">
                                <a
                                  href="#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                >
                                  "Landing UI Design" Launch
                                </a>
                                <span className="fs-7 text-muted fw-semibold">
                                  #24005
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-kt-search-element="empty"
                          className="text-center d-none"
                        >
                          <div className="pt-10 pb-10">
                            <i className="ki-duotone ki-search-list fs-4x opacity-50">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                          </div>
                          <div className="pb-15 fw-semibold">
                            <h3 className="text-gray-600 fs-5 mb-2">
                              No result found
                            </h3>
                            <div className="text-muted fs-7">
                              Please try again with a different query
                            </div>
                          </div>
                        </div>
                      </div>
                      <form
                        data-kt-search-element="advanced-options-form"
                        className="pt-1 d-none"
                      >
                        <h3 className="fw-semibold text-gray-900 mb-7">
                          Advanced Search
                        </h3>
                        <div className="mb-5">
                          <input
                            type="text"
                            className="form-control form-control-sm form-control-solid"
                            placeholder="Contains the word"
                            name="query"
                          />
                        </div>
                        <div className="mb-5">
                          <div className="nav-group nav-group-fluid">
                            <label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="type"
                                value="has"
                                checked="checked"
                              />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                All
                              </span>
                            </label>
                            <label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="type"
                                value="users"
                              />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                Users
                              </span>
                            </label>
                            <label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="type"
                                value="orders"
                              />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                Orders
                              </span>
                            </label>
                            <label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="type"
                                value="projects"
                              />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                Projects
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="mb-5">
                          <input
                            type="text"
                            name="assignedto"
                            className="form-control form-control-sm form-control-solid"
                            placeholder="Assigned to"
                            value=""
                          />
                        </div>
                        <div className="mb-5">
                          <input
                            type="text"
                            name="collaborators"
                            className="form-control form-control-sm form-control-solid"
                            placeholder="Collaborators"
                            value=""
                          />
                        </div>
                        <div className="mb-5">
                          <div className="nav-group nav-group-fluid">
                            <label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="attachment"
                                value="has"
                                checked="checked"
                              />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                Has attachment
                              </span>
                            </label>
                            <label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="attachment"
                                value="any"
                              />
                              <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                Any
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="mb-5">
                          <select
                            name="timezone"
                            aria-label="Select a Timezone"
                            data-control="select2"
                            data-dropdown-parent="#kt_header_search"
                            data-placeholder="date_period"
                            className="form-select form-select-sm form-select-solid"
                          >
                            <option value="next">Within the next</option>
                            <option value="last">Within the last</option>
                            <option value="between">Between</option>
                            <option value="on">On</option>
                          </select>
                        </div>
                        <div className="row mb-8">
                          <div className="col-6">
                            <input
                              type="number"
                              name="date_number"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Lenght"
                              value=""
                            />
                          </div>
                          <div className="col-6">
                            <select
                              name="date_typer"
                              aria-label="Select a Timezone"
                              data-control="select2"
                              data-dropdown-parent="#kt_header_search"
                              data-placeholder="Period"
                              className="form-select form-select-sm form-select-solid"
                            >
                              <option value="days">Days</option>
                              <option value="weeks">Weeks</option>
                              <option value="months">Months</option>
                              <option value="years">Years</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                            data-kt-search-element="advanced-options-form-cancel"
                          >
                            Cancel
                          </button>
                          <a
                            href="utilities/search/horizontal.html"
                            className="btn btn-sm fw-bold btn-primary"
                            data-kt-search-element="advanced-options-form-search"
                          >
                            Search
                          </a>
                        </div>
                      </form>
                      <form
                        data-kt-search-element="preferences"
                        className="pt-1 d-none"
                      >
                        <h3 className="fw-semibold text-gray-900 mb-7">
                          Search Preferences
                        </h3>
                        <div className="pb-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                              Projects
                            </span>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                              checked="checked"
                            />
                          </label>
                        </div>
                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                              Targets
                            </span>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                              checked="checked"
                            />
                          </label>
                        </div>
                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                              Affiliate Programs
                            </span>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                            />
                          </label>
                        </div>
                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                              Referrals
                            </span>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                              checked="checked"
                            />
                          </label>
                        </div>
                        <div className="py-4 border-bottom">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                              Users
                            </span>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                            />
                          </label>
                        </div>
                        <div className="d-flex justify-content-end pt-7">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                            data-kt-search-element="preferences-dismiss"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm fw-bold btn-primary"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-3 ms-lg-4">
                    <div
                      className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px"
                      id="kt_activities_toggle"
                    >
                      <i className="ki-duotone ki-chart-simple fs-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-3 ms-lg-4">
                    <a
                      href="#"
                      className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                    >
                      <i className="ki-duotone ki-night-day theme-light-show fs-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                        <span className="path6"></span>
                        <span className="path7"></span>
                        <span className="path8"></span>
                        <span className="path9"></span>
                        <span className="path10"></span>
                      </i>
                      <i className="ki-duotone ki-moon theme-dark-show fs-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </a>
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                      data-kt-menu="true"
                      data-kt-element="theme-mode-menu"
                    >
                      <div className="menu-item px-3 my-0">
                        <a
                          href="#"
                          className="menu-link px-3 py-2"
                          data-kt-element="mode"
                          data-kt-value="light"
                        >
                          <span className="menu-icon" data-kt-element="icon">
                            <i className="ki-duotone ki-night-day fs-2">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                              <span className="path7"></span>
                              <span className="path8"></span>
                              <span className="path9"></span>
                              <span className="path10"></span>
                            </i>
                          </span>
                          <span className="menu-title">Light</span>
                        </a>
                      </div>
                      <div className="menu-item px-3 my-0">
                        <a
                          href="#"
                          className="menu-link px-3 py-2"
                          data-kt-element="mode"
                          data-kt-value="dark"
                        >
                          <span className="menu-icon" data-kt-element="icon">
                            <i className="ki-duotone ki-moon fs-2">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </span>
                          <span className="menu-title">Dark</span>
                        </a>
                      </div>
                      <div className="menu-item px-3 my-0">
                        <a
                          href="#"
                          className="menu-link px-3 py-2"
                          data-kt-element="mode"
                          data-kt-value="system"
                        >
                          <span className="menu-icon" data-kt-element="icon">
                            <i className="ki-duotone ki-screen fs-2">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </i>
                          </span>
                          <span className="menu-title">System</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center ms-3 ms-lg-4"
                    id="kt_header_user_menu_toggle"
                  >
                    <div
                      className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px"
                      data-kt-menu-trigger="click"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                    >
                      <i className="ki-duotone ki-user fs-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                      data-kt-menu="true"
                    >
                      <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                          <div className="symbol symbol-50px me-5">
                            <img
                              alt="Logo"
                              src="assets/media/avatars/300-1.jpg"
                            />
                          </div>
                          <div className="d-flex flex-column">
                            <div className="fw-bold d-flex align-items-center fs-5">
                              Max Smith
                              <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                                Pro
                              </span>
                            </div>
                            <a
                              href="#"
                              className="fw-semibold text-muted text-hover-primary fs-7"
                            >
                              max@kt.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="separator my-2"></div>
                      <div className="menu-item px-5">
                        <a
                          href="account/overview.html"
                          className="menu-link px-5"
                        >
                          My Profile
                        </a>
                      </div>
                      <div className="menu-item px-5">
                        <a
                          href="apps/projects/list.html"
                          className="menu-link px-5"
                        >
                          <span className="menu-text">My Projects</span>
                          <span className="menu-badge">
                            <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                              3
                            </span>
                          </span>
                        </a>
                      </div>
                      <div
                        className="menu-item px-5"
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="left-start"
                        data-kt-menu-offset="-15px, 0"
                      >
                        <a href="#" className="menu-link px-5">
                          <span className="menu-title">My Subscription</span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          <div className="menu-item px-3">
                            <a
                              href="account/referrals.html"
                              className="menu-link px-5"
                            >
                              Referrals
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="account/billing.html"
                              className="menu-link px-5"
                            >
                              Billing
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="account/statements.html"
                              className="menu-link px-5"
                            >
                              Payments
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="account/statements.html"
                              className="menu-link d-flex flex-stack px-5"
                            >
                              Statements
                              <span
                                className="ms-2 lh-0"
                                data-bs-toggle="tooltip"
                                title="View your statements"
                              >
                                <i className="ki-duotone ki-information-5 fs-5">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                            </a>
                          </div>
                          <div className="separator my-2"></div>
                          <div className="menu-item px-3">
                            <div className="menu-content px-3">
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                <input
                                  className="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  value="1"
                                  checked="checked"
                                  name="notifications"
                                />
                                <span className="form-check-label text-muted fs-7">
                                  Notifications
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item px-5">
                        <a
                          href="account/statements.html"
                          className="menu-link px-5"
                        >
                          My Statements
                        </a>
                      </div>
                      <div className="separator my-2"></div>
                      <div
                        className="menu-item px-5"
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="left-start"
                        data-kt-menu-offset="-15px, 0"
                      >
                        <a href="#" className="menu-link px-5">
                          <span className="menu-title position-relative">
                            Language
                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                              English
                              <img
                                className="w-15px h-15px rounded-1 ms-2"
                                src="assets/media/flags/united-states.svg"
                                alt=""
                              />
                            </span>
                          </span>
                        </a>
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5 active"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/united-states.svg"
                                  alt=""
                                />
                              </span>
                              English
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/spain.svg"
                                  alt=""
                                />
                              </span>
                              Spanish
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/germany.svg"
                                  alt=""
                                />
                              </span>
                              German
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/japan.svg"
                                  alt=""
                                />
                              </span>
                              Japanese
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/france.svg"
                                  alt=""
                                />
                              </span>
                              French
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item px-5 my-1">
                        <a
                          href="account/settings.html"
                          className="menu-link px-5"
                        >
                          Account Settings
                        </a>
                      </div>
                      <div className="menu-item px-5">
                        <a
                          href="authentication/layouts/corporate/sign-in.html"
                          className="menu-link px-5"
                        >
                          Sign Out
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-3 ms-lg-4">
                    <div
                      className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px fw-bold position-relative"
                      id="kt_drawer_chat_toggle"
                    >
                      3
                      <span className="d-none bullet bullet-dot bg-danger h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                    </div>
                  </div>
                </div>
                <div className="separator"></div>
                <div
                  className="header-menu-container container-xxl d-flex flex-stack h-lg-75px w-100"
                  id="kt_header_nav"
                >
                  <div
                    className="header-menu flex-column flex-lg-row"
                    data-kt-drawer="true"
                    data-kt-drawer-name="header-menu"
                    data-kt-drawer-activate="{default: true, lg: false}"
                    data-kt-drawer-overlay="true"
                    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                    data-kt-drawer-direction="start"
                    data-kt-drawer-toggle="#kt_header_menu_toggle"
                    data-kt-swapper="true"
                    data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
                  >
                    <div
                      className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-state-primary menu-title-gray-800 menu-arrow-gray-500 align-items-stretch flex-grow-1 my-5 my-lg-0 px-2 px-lg-0 fw-semibold fs-6"
                      id="#kt_header_menu"
                      data-kt-menu="true"
                    >
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                      >
                        <span className="menu-link py-3">
                          <span className="menu-title">Dashboards</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                          <div
                            className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible"
                            data-kt-menu-dismiss="true"
                          >
                            <div className="row">
                              <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                                <div className="row">
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="index.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-element-11 text-primary fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            Default
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Reports & statistics
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="dashboards/ecommerce.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-basket text-danger fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            eCommerce
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Sales reports
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="dashboards/projects.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-abstract-44 text-info fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            Projects
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Tasts, graphs & charts
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="dashboards/online-courses.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-color-swatch text-success fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                            <span className="path5"></span>
                                            <span className="path6"></span>
                                            <span className="path7"></span>
                                            <span className="path8"></span>
                                            <span className="path9"></span>
                                            <span className="path10"></span>
                                            <span className="path11"></span>
                                            <span className="path12"></span>
                                            <span className="path13"></span>
                                            <span className="path14"></span>
                                            <span className="path15"></span>
                                            <span className="path16"></span>
                                            <span className="path17"></span>
                                            <span className="path18"></span>
                                            <span className="path19"></span>
                                            <span className="path20"></span>
                                            <span className="path21"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            Online Courses
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Student progress
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="dashboards/marketing.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-chart-simple text-gray-900 fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            Marketing
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Campaings & conversions
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="dashboards/bidding.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-switch text-warning fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            Bidding
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Campaings & conversions
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="dashboards/pos.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-abstract-42 text-danger fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            POS System
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Campaings & conversions
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mb-3">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="dashboards/call-center.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                          <i className="ki-duotone ki-call text-primary fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                            <span className="path5"></span>
                                            <span className="path6"></span>
                                            <span className="path7"></span>
                                            <span className="path8"></span>
                                          </i>
                                        </span>
                                        <span className="d-flex flex-column">
                                          <span className="fs-6 fw-bold text-gray-800">
                                            Call Center
                                          </span>
                                          <span className="fs-7 fw-semibold text-muted">
                                            Campaings & conversions
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="separator separator-dashed mx-5 my-5"></div>
                                <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                                  <div className="d-flex flex-column me-5">
                                    <div className="fs-6 fw-bold text-gray-800">
                                      Landing Page Template
                                    </div>
                                    <div className="fs-7 fw-semibold text-muted">
                                      Onpe page landing template with pricing &
                                      others
                                    </div>
                                  </div>
                                  <a
                                    href="landing.html"
                                    className="btn btn-sm btn-primary fw-bold"
                                  >
                                    Explore
                                  </a>
                                </div>
                              </div>
                              <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                                <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                                  More Dashboards
                                </h4>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/logistics.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Logistics
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/website-analytics.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Website Analytics
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/finance-performance.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Finance Performance
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/store-analytics.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Store Analytics
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/social.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Social</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/delivery.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Delivery</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/crypto.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Crypto</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/school.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">School</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="dashboards/podcast.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Podcast</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item here show"
                      >
                        <span className="menu-link py-3">
                          <span className="menu-title">Pages</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                          <div className="menu-active-bg px-4 px-lg-0">
                            <div className="d-flex w-100 overflow-auto">
                              <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                                <li className="nav-item mx-lg-1">
                                  <a
                                    className="nav-link py-3 py-lg-6 text-active-primary"
                                    href="#"
                                    data-bs-toggle="tab"
                                    data-bs-target="#kt_app_header_menu_pages_pages"
                                  >
                                    General
                                  </a>
                                </li>
                                <li className="nav-item mx-lg-1">
                                  <a
                                    className="nav-link py-3 py-lg-6 active text-active-primary"
                                    href="#"
                                    data-bs-toggle="tab"
                                    data-bs-target="#kt_app_header_menu_pages_account"
                                  >
                                    Account
                                  </a>
                                </li>
                                <li className="nav-item mx-lg-1">
                                  <a
                                    className="nav-link py-3 py-lg-6 text-active-primary"
                                    href="#"
                                    data-bs-toggle="tab"
                                    data-bs-target="#kt_app_header_menu_pages_authentication"
                                  >
                                    Authentication
                                  </a>
                                </li>
                                <li className="nav-item mx-lg-1">
                                  <a
                                    className="nav-link py-3 py-lg-6 text-active-primary"
                                    href="#"
                                    data-bs-toggle="tab"
                                    data-bs-target="#kt_app_header_menu_pages_utilities"
                                  >
                                    Utilities
                                  </a>
                                </li>
                                <li className="nav-item mx-lg-1">
                                  <a
                                    className="nav-link py-3 py-lg-6 text-active-primary"
                                    href="#"
                                    data-bs-toggle="tab"
                                    data-bs-target="#kt_app_header_menu_pages_widgets"
                                  >
                                    Widgets
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-content py-4 py-lg-8 px-lg-7">
                              <div
                                className="tab-pane w-lg-1000px"
                                id="kt_app_header_menu_pages_pages"
                              >
                                <div className="row">
                                  <div className="col-lg-8">
                                    <div className="row">
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                          User Profile
                                        </h4>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Overview
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="pages/user-profile/projects.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Projects
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="pages/user-profile/campaigns.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Campaigns
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="pages/user-profile/documents.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Documents
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="pages/user-profile/followers.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Followers
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="pages/user-profile/activity.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Activity
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        <div className="mb-6">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Corporate
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/about.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                About
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/team.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Our Team
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/contact.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Contact Us
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/licenses.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Licenses
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/sitemap.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Sitemap
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="mb-0">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Careers
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/careers/list.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Careers List
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/careers/apply.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Careers Apply
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        <div className="mb-6">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            FAQ
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/faq/classNameic.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                FAQ Classic
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/faq/extended.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                FAQ Extended
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="mb-6">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Blog
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/blog/home.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Blog Home
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/blog/post.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Blog Post
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="mb-0">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Pricing
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/pricing.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Column Pricing
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/pricing/table.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Table Pricing
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        <div className="mb-0">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Social
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/social/feeds.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Feeds
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/social/activity.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Activty
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/social/followers.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Followers
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="pages/social/settings.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Settings
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <img
                                      src="assets/media/stock/600x600/img-82.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane active w-lg-600px"
                                id="kt_app_header_menu_pages_account"
                              >
                                <div className="row">
                                  <div className="col-lg-5 mb-6 mb-lg-0">
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/overview.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Overview
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/settings.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Settings
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/security.html"
                                            className="menu-link active"
                                          >
                                            <span className="menu-title">
                                              Security
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/activity.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Activity
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/billing.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Billing
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/statements.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Statements
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/referrals.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Referrals
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/api-keys.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              API Keys
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item p-0 m-0">
                                          <a
                                            href="account/logs.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Logs
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-7">
                                    <img
                                      src="assets/media/stock/900x600/46.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane w-lg-1000px"
                                id="kt_app_header_menu_pages_authentication"
                              >
                                <div className="row">
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    <div className="mb-6">
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Corporate Layout
                                      </h4>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/corporate/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-In
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/corporate/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-Up
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/corporate/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/corporate/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/corporate/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="mb-0">
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Overlay Layout
                                      </h4>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/overlay/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-In
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/overlay/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-Up
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/overlay/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/overlay/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/overlay/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    <div className="mb-6">
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Creative Layout
                                      </h4>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/creative/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-in
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/creative/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-up
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/creative/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/creative/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/creative/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="mb-6">
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Fancy Layout
                                      </h4>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/fancy/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-In
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/fancy/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-Up
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/fancy/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/fancy/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/layouts/fancy/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    <div className="mb-0">
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        General
                                      </h4>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/extended/multi-steps-sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Multi-Steps Sign-Up
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/general/welcome.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Welcome Message
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/general/verify-email.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Verify Email
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/general/coming-soon.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Coming Soon
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/general/password-confirmation.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Password Confirmation
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/general/account-deactivated.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Account Deactivation
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/general/error-404.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Error 404
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/general/error-500.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Error 500
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    <div className="mb-0">
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Email Templates
                                      </h4>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/email/welcome-message.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Welcome Message
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/email/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/email/subscription-confirmed.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Subscription Confirmed
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/email/card-declined.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Credit Card Declined
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/email/promo-1.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Promo 1
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/email/promo-2.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Promo 2
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item p-0 m-0">
                                        <a
                                          href="authentication/email/promo-3.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Promo 3
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane w-lg-1000px"
                                id="kt_app_header_menu_pages_utilities"
                              >
                                <div className="row">
                                  <div className="col-lg-7">
                                    <div className="row">
                                      <div className="col-lg-4 mb-6 mb-lg-0">
                                        <div className="mb-0">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            General Modals
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/general/invite-friends.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Invite Friends
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/general/view-users.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                View Users
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/general/select-users.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Select Users
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/general/upgrade-plan.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Upgrade Plan
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/general/share-earn.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Share & Earn
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/forms/new-target.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                New Target
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/forms/new-card.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                New Card
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/forms/new-address.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                New Address
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/forms/create-api-key.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create API Key
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/forms/bidding.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Bidding
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 mb-6 mb-lg-0">
                                        <div className="mb-6">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Advanced Modals
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/create-app.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create App
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/create-campaign.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Campaign
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/create-account.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Business Acc
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/create-project.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Project
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/top-up-wallet.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Top Up Wallet
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/offer-a-deal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Offer a Deal
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/two-factor-authentication.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Two Factor Auth
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="mb-0">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Search
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/search/horizontal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Horizontal
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/search/vertical.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Vertical
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/search/users.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Users
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/search/select-location.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Select Location
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 mb-6 mb-lg-0">
                                        <div className="mb-0">
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Wizards
                                          </h4>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/horizontal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Horizontal
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/vertical.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Vertical
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/two-factor-authentication.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Two Factor Auth
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/create-app.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create App
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/create-campaign.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Campaign
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/create-account.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Account
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/create-project.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Project
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/modals/wizards/top-up-wallet.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Top Up Wallet
                                              </span>
                                            </a>
                                          </div>
                                          <div className="menu-item p-0 m-0">
                                            <a
                                              href="utilities/wizards/offer-a-deal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Offer a Deal
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-5 pe-lg-5">
                                    <img
                                      src="assets/media/stock/600x600/img-84.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane w-lg-500px"
                                id="kt_app_header_menu_pages_widgets"
                              >
                                <div className="row">
                                  <div className="col-lg-4 mb-6 mb-lg-0">
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="widgets/lists.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Lists
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="widgets/statistics.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Statistics
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="widgets/charts.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Charts
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="widgets/mixed.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Mixed
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="widgets/tables.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Tables
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item p-0 m-0">
                                      <a
                                        href="widgets/feeds.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Feeds
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <img
                                      src="assets/media/stock/900x600/44.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                      >
                        <span className="menu-link py-3">
                          <span className="menu-title">Apps</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-rocket fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Projects</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/list.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    My Projects
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/project.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    View Project
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/targets.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Targets</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/budget.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Budget</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/users.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Users</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/files.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Files</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/activity.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Activity</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-handcart fs-2"></i>
                              </span>
                              <span className="menu-title">eCommerce</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Catalog</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/catalog/products.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Products
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/catalog/categories.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Categories
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/catalog/add-product.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Add Product
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/catalog/edit-product.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Edit Product
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/catalog/add-category.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Add Category
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/catalog/edit-category.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Edit Category
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion menu-sub-indention"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Sales</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/sales/listing.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Orders Listing
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/sales/details.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Order Details
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/sales/add-order.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Add Order
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/sales/edit-order.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Edit Order
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion menu-sub-indention"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Customers</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/customers/listing.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Customers Listing
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/customers/details.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Customers Details
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion menu-sub-indention"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Reports</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/reports/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Products Viewed
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/reports/sales.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">Sales</span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/reports/returns.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Returns
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/reports/customer-orders.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Customer Orders
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/reports/shipping.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Shipping
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/ecommerce/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-chart fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Support Center</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/overview.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Overview</span>
                                </a>
                              </div>
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Tickets</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/support-center/tickets/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Ticket List
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/support-center/tickets/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Ticket View
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Tutorials</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/support-center/tutorials/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Tutorials List
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/support-center/tutorials/post.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Tutorials Post
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/faq.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">FAQ</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/licenses.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Licenses</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Contact Us</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-shield-tick fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">
                                User Management
                              </span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Users</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/user-management/users/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Users List
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/user-management/users/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        View User
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Roles</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/user-management/roles/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Roles List
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/user-management/roles/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        View Roles
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/user-management/permissions.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Permissions
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-phone fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Contacts</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/contacts/getting-started.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Getting Started
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/contacts/add-contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Add Contact
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/contacts/edit-contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Edit Contact
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/contacts/view-contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    View Contact
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-basket fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </i>
                              </span>
                              <span className="menu-title">Subscriptions</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/subscriptions/getting-started.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Getting Started
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/subscriptions/list.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Subscription List
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/subscriptions/add.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Add Subscription
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/subscriptions/view.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    View Subscription
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-briefcase fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Customers</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/customers/getting-started.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Getting Started
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/customers/list.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Customer Listing
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/customers/view.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Customer Details
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-credit-cart fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">
                                Invoice Management
                              </span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Profile</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/invoices/view/invoice-1.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Invoice 1
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/invoices/view/invoice-2.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Invoice 2
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a
                                      className="menu-link py-3"
                                      href="apps/invoices/view/invoice-3.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">
                                        Invoice 3
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/invoices/create.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Create Invoice
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-file-added fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">File Manager</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/file-manager/folders.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Folders</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/file-manager/files.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Files</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/file-manager/blank.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Blank Directory
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/file-manager/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-sms fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Inbox</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/inbox/listing.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Messages</span>
                                  <span className="menu-badge">
                                    <span className="badge badge-light-success">
                                      3
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/inbox/compose.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Compose</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/inbox/reply.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    View & Reply
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-message-text-2 fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                              <span className="menu-title">Chat</span>
                              <span className="menu-arrow"></span>
                            </span>
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/chat/private.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Private Chat
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/chat/group.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Group Chat</span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a
                                  className="menu-link py-3"
                                  href="apps/chat/drawer.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">
                                    Drawer Chat
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="apps/calendar.html"
                            >
                              <span className="menu-icon">
                                <i className="ki-duotone ki-calendar-8 fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </i>
                              </span>
                              <span className="menu-title">Calendar</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                      >
                        <span className="menu-link py-3">
                          <span className="menu-title">Help</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                              target="_blank"
                              title="Check out over 200 in-house components, plugins and ready for use solutions"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-dismiss="click"
                              data-bs-placement="right"
                            >
                              <span className="menu-icon">
                                <i className="ki-duotone ki-rocket fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Components</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="https://preview.keenthemes.com/html/metronic/docs"
                              target="_blank"
                              title="Check out the complete documentation"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-dismiss="click"
                              data-bs-placement="right"
                            >
                              <span className="menu-icon">
                                <i className="ki-duotone ki-abstract-26 fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Documentation</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="https://preview.keenthemes.com/metronic8/demo11/layout-builder.html"
                              title="Build your layout and export HTML for server side integration"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-dismiss="click"
                              data-bs-placement="right"
                            >
                              <span className="menu-icon">
                                <i className="ki-duotone ki-switch fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </span>
                              <span className="menu-title">Layout Builder</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                              target="_blank"
                            >
                              <span className="menu-icon">
                                <i className="ki-duotone ki-code fs-2">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </i>
                              </span>
                              <span className="menu-title">
                                Changelog v8.2.3
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 p-4 p-lg-0 me-lg-2">
                      <a
                        href="https://preview.keenthemes.com/html/metronic/docs"
                        className="btn btn-sm btn-light-primary fw-bold w-100 w-lg-auto"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-dismiss-="click"
                        title="200+ in-house components and 3rd-party plugins"
                      >
                        Docs & Components
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
                <div
                  id="kt_toolbar_container"
                  className="container-xxl d-flex flex-stack flex-wrap"
                >
                  <div className="page-title d-flex flex-column me-3">
                    <h1 className="d-flex text-gray-900 fw-bold my-1 fs-3">
                      Security
                    </h1>
                    <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7 my-1">
                      <li className="breadcrumb-item text-gray-600">
                        <a
                          href="index.html"
                          className="text-gray-600 text-hover-primary"
                        >
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item text-gray-600">Account</li>
                      <li className="breadcrumb-item text-gray-500">
                        Security
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center py-2 py-md-1">
                    <div className="me-3">
                      <a
                        href="#"
                        className="btn btn-light-primary fw-bold"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-duotone ki-filter fs-5 text-gray-500 me-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Filter
                      </a>
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        id="kt_menu_65a10ae727686"
                      >
                        <div className="px-7 py-5">
                          <div className="fs-5 text-gray-900 fw-bold">
                            Filter Options
                          </div>
                        </div>
                        <div className="separator border-gray-200"></div>
                        <div className="px-7 py-5">
                          <div className="mb-10">
                            <label className="form-label fw-semibold">
                              Status:
                            </label>
                            <div>
                              <select
                                className="form-select form-select-solid"
                                multiple="multiple"
                                data-kt-select2="true"
                                data-close-on-select="false"
                                data-placeholder="Select option"
                                data-dropdown-parent="#kt_menu_65a10ae727686"
                                data-allow-clear="true"
                              >
                                <option></option>
                                <option value="1">Approved</option>
                                <option value="2">Pending</option>
                                <option value="2">In Process</option>
                                <option value="2">Rejected</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-10">
                            <label className="form-label fw-semibold">
                              Member Type:
                            </label>
                            <div className="d-flex">
                              <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="1"
                                />
                                <span className="form-check-label">Author</span>
                              </label>
                              <label className="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="2"
                                  checked="checked"
                                />
                                <span className="form-check-label">
                                  Customer
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mb-10">
                            <label className="form-label fw-semibold">
                              Notifications:
                            </label>
                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                name="notifications"
                                checked="checked"
                              />
                              <label className="form-check-label">
                                Enabled
                              </label>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-menu-dismiss="true"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_app"
                      id="kt_toolbar_primary_button"
                    >
                      Create
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="kt_content_container"
                className="d-flex flex-column-fluid align-items-start container-xxl"
              >
                <div className="content flex-row-fluid" id="kt_content">
                  <div className="card mb-5 mb-xl-10">
                    <div className="card-body pt-9 pb-0">
                      <div className="d-flex flex-wrap flex-sm-nowrap">
                        <div className="me-7 mb-4">
                          <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            <img
                              src="assets/media/avatars/300-1.jpg"
                              alt="image"
                            />
                            <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            <div className="d-flex flex-column">
                              <div className="d-flex align-items-center mb-2">
                                <a
                                  href="#"
                                  className="text-gray-900 text-hover-primary fs-2 fw-bold me-1"
                                >
                                  Max Smith
                                </a>
                                <a href="#">
                                  <i className="ki-duotone ki-verify fs-1 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </a>
                              </div>
                              <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                <a
                                  href="#"
                                  className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                                >
                                  <i className="ki-duotone ki-profile-circle fs-4 me-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                  Developer
                                </a>
                                <a
                                  href="#"
                                  className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                                >
                                  <i className="ki-duotone ki-geolocation fs-4 me-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                  SF, Bay Area
                                </a>
                                <a
                                  href="#"
                                  className="d-flex align-items-center text-gray-500 text-hover-primary mb-2"
                                >
                                  <i className="ki-duotone ki-sms fs-4">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                  max@kt.com
                                </a>
                              </div>
                            </div>
                            <div className="d-flex my-4">
                              <a
                                href="#"
                                className="btn btn-sm btn-light me-2"
                                id="kt_user_follow_button"
                              >
                                <i className="ki-duotone ki-check fs-3 d-none"></i>
                                <span className="indicator-label">Follow</span>
                                <span className="indicator-progress">
                                  Please wait...
                                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm btn-primary me-3"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_offer_a_deal"
                              >
                                Hire Me
                              </a>
                              <div className="me-0">
                                <button
                                  className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                  data-kt-menu-trigger="click"
                                  data-kt-menu-placement="bottom-end"
                                >
                                  <i className="ki-solid ki-dots-horizontal fs-2x"></i>
                                </button>
                                <div
                                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                  data-kt-menu="true"
                                >
                                  <div className="menu-item px-3">
                                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                      Payments
                                    </div>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">
                                      Create Invoice
                                    </a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a
                                      href="#"
                                      className="menu-link flex-stack px-3"
                                    >
                                      Create Payment
                                      <span
                                        className="ms-2"
                                        data-bs-toggle="tooltip"
                                        title="Specify a target name for future usage and reference"
                                      >
                                        <i className="ki-duotone ki-information fs-6">
                                          <span className="path1"></span>
                                          <span className="path2"></span>
                                          <span className="path3"></span>
                                        </i>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">
                                      Generate Bill
                                    </a>
                                  </div>
                                  <div
                                    className="menu-item px-3"
                                    data-kt-menu-trigger="hover"
                                    data-kt-menu-placement="right-end"
                                  >
                                    <a href="#" className="menu-link px-3">
                                      <span className="menu-title">
                                        Subscription
                                      </span>
                                      <span className="menu-arrow"></span>
                                    </a>
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Plans
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Billing
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Statements
                                        </a>
                                      </div>
                                      <div className="separator my-2"></div>
                                      <div className="menu-item px-3">
                                        <div className="menu-content px-3">
                                          <label className="form-check form-switch form-check-custom form-check-solid">
                                            <input
                                              className="form-check-input w-30px h-20px"
                                              type="checkbox"
                                              value="1"
                                              checked="checked"
                                              name="notifications"
                                            />
                                            <span className="form-check-label text-muted fs-6">
                                              Recuring
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="menu-item px-3 my-1">
                                    <a href="#" className="menu-link px-3">
                                      Settings
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-wrap flex-stack">
                            <div className="d-flex flex-column flex-grow-1 pe-8">
                              <div className="d-flex flex-wrap">
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  <div className="d-flex align-items-center">
                                    <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                    <div
                                      className="fs-2 fw-bold"
                                      data-kt-countup="true"
                                      data-kt-countup-value="4500"
                                      data-kt-countup-prefix="$"
                                    >
                                      0
                                    </div>
                                  </div>
                                  <div className="fw-semibold fs-6 text-gray-500">
                                    Earnings
                                  </div>
                                </div>
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  <div className="d-flex align-items-center">
                                    <i className="ki-duotone ki-arrow-down fs-3 text-danger me-2">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                    <div
                                      className="fs-2 fw-bold"
                                      data-kt-countup="true"
                                      data-kt-countup-value="80"
                                    >
                                      0
                                    </div>
                                  </div>
                                  <div className="fw-semibold fs-6 text-gray-500">
                                    Projects
                                  </div>
                                </div>
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  <div className="d-flex align-items-center">
                                    <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                    <div
                                      className="fs-2 fw-bold"
                                      data-kt-countup="true"
                                      data-kt-countup-value="60"
                                      data-kt-countup-prefix="%"
                                    >
                                      0
                                    </div>
                                  </div>
                                  <div className="fw-semibold fs-6 text-gray-500">
                                    Success Rate
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                              <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                <span className="fw-semibold fs-6 text-gray-500">
                                  Profile Compleation
                                </span>
                                <span className="fw-bold fs-6">50%</span>
                              </div>
                              <div className="h-5px mx-3 w-100 bg-light mb-3">
                                <div
                                  className="bg-success rounded h-5px"
                                  role="progressbar"
                                  // style="width: 50%;"
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/overview.html"
                          >
                            Overview
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/settings.html"
                          >
                            Settings
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5 active"
                            href="account/security.html"
                          >
                            Security
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/activity.html"
                          >
                            Activity
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/billing.html"
                          >
                            Billing
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/statements.html"
                          >
                            Statements
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/referrals.html"
                          >
                            Referrals
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/api-keys.html"
                          >
                            API Keys
                          </a>
                        </li>
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/logs.html"
                          >
                            Logs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row g-xxl-9">
                    <div className="col-xxl-8">
                      <div className="card card-xxl-stretch mb-5 mb-xl-10">
                        <div className="card-header card-header-stretch">
                          <div className="card-title">
                            <h3 className="m-0 text-gray-900">
                              Security Summary
                            </h3>
                          </div>
                          <div className="card-toolbar">
                            <ul
                              className="nav nav-tabs nav-line-tabs nav-stretch border-transparent fs-5 fw-bold"
                              id="kt_security_summary_tabs"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link text-active-primary active"
                                  data-kt-countup-tabs="true"
                                  data-bs-toggle="tab"
                                  href="#kt_security_summary_tab_pane_hours"
                                >
                                  12 Hours
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link text-active-primary"
                                  data-kt-countup-tabs="true"
                                  data-bs-toggle="tab"
                                  id="kt_security_summary_tab_day"
                                  href="#kt_security_summary_tab_pane_day"
                                >
                                  Day
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link text-active-primary"
                                  data-kt-countup-tabs="true"
                                  data-bs-toggle="tab"
                                  id="kt_security_summary_tab_week"
                                  href="#kt_security_summary_tab_pane_week"
                                >
                                  Week
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body pt-7 pb-0 px-0">
                          <div className="tab-content">
                            <div
                              className="tab-pane fade active show"
                              id="kt_security_summary_tab_pane_hours"
                              role="tabpanel"
                            >
                              <div className="row p-0 mb-5 px-9">
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-4 fw-semibold text-success d-block">
                                      User Sign-in
                                    </span>
                                    <span
                                      className="fs-2hx fw-bold text-gray-900"
                                      data-kt-countup="true"
                                      data-kt-countup-value="36899"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-4 fw-semibold text-primary d-block">
                                      Admin Sign-in
                                    </span>
                                    <span
                                      className="fs-2hx fw-bold text-gray-900"
                                      data-kt-countup="true"
                                      data-kt-countup-value="72"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-4 fw-semibold text-danger d-block">
                                      Failed Attempts
                                    </span>
                                    <span
                                      className="fs-2hx fw-bold text-gray-900"
                                      data-kt-countup="true"
                                      data-kt-countup-value="291"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-2">
                                <div className="d-flex align-items-center pb-6 px-9">
                                  <h3 className="m-0 text-gray-900 flex-grow-1">
                                    Activity Chart
                                  </h3>
                                  <ul className="nav nav-pills nav-line-pills border rounded p-1">
                                    <li className="nav-item me-2">
                                      <a
                                        className="nav-link btn btn-active-light btn-active-color-gray-700 btn-color-gray-500 py-2 px-5 fs-6 fw-semibold active"
                                        data-bs-toggle="tab"
                                        id="kt_security_summary_tab_hours_agents"
                                        href="#kt_security_summary_tab_pane_hours_agents"
                                      >
                                        Agents
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link btn btn-active-light btn-active-color-gray-700 btn-color-gray-500 py-2 px-5 fs-6 fw-semibold"
                                        data-bs-toggle="tab"
                                        id="kt_security_summary_tab_hours_clients"
                                        href="#kt_security_summary_tab_pane_hours_clients"
                                      >
                                        Clients
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-content px-3">
                                  <div
                                    className="tab-pane fade active show"
                                    id="kt_security_summary_tab_pane_hours_agents"
                                    role="tabpanel"
                                  >
                                    <div
                                      id="kt_security_summary_chart_hours_agents"
                                      style="height: 300px"
                                    ></div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="kt_security_summary_tab_pane_hours_clients"
                                    role="tabpanel"
                                  >
                                    <div
                                      id="kt_security_summary_chart_hours_clients"
                                      style="height: 300px"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_security_summary_tab_pane_day"
                              role="tabpanel"
                            >
                              <div className="row p-0 mb-5 px-9">
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-4 fw-semibold text-success d-block">
                                      User Sign-in
                                    </span>
                                    <span
                                      className="fs-2hx fw-bold text-gray-800"
                                      data-kt-countup="true"
                                      data-kt-countup-value="30467"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-4 fw-semibold text-primary d-block">
                                      Admin Sign-in
                                    </span>
                                    <span
                                      className="fs-2hx fw-bold text-gray-800"
                                      data-kt-countup="true"
                                      data-kt-countup-value="120"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-4 fw-semibold text-danger d-block">
                                      Failed Attempts
                                    </span>
                                    <span
                                      className="fs-2hx fw-bold text-gray-800"
                                      data-kt-countup="true"
                                      data-kt-countup-value="23"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-2">
                                <div className="d-flex align-items-center pb-9 px-9">
                                  <h3 className="m-0 text-gray-800 flex-grow-1">
                                    Activity Chart
                                  </h3>
                                  <ul className="nav nav-pills nav-line-pills border rounded p-1">
                                    <li className="nav-item me-2">
                                      <a
                                        className="nav-link btn btn-active-light btn-active-color-gray-700 btn-color-gray-500 py-2 px-5 fs-6 fw-semibold active"
                                        data-bs-toggle="tab"
                                        id="kt_security_summary_tab_day_agents"
                                        href="#kt_security_summary_tab_pane_day_agents"
                                      >
                                        Agents
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link btn btn-active-light btn-active-color-gray-700 btn-color-gray-500 py-2 px-5 fs-6 fw-semibold"
                                        data-bs-toggle="tab"
                                        id="kt_security_summary_tab_day_clients"
                                        href="#kt_security_summary_tab_pane_day_clients"
                                      >
                                        Clients
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-content">
                                  <div
                                    className="tab-pane fade active show"
                                    id="kt_security_summary_tab_pane_day_agents"
                                    role="tabpanel"
                                  >
                                    <div
                                      id="kt_security_summary_chart_day_agents"
                                      style="height: 300px"
                                    ></div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="kt_security_summary_tab_pane_day_clients"
                                    role="tabpanel"
                                  >
                                    <div
                                      id="kt_security_summary_chart_day_clients"
                                      style="height: 300px"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_security_summary_tab_pane_week"
                              role="tabpanel"
                            >
                              <div className="row p-0 mb-5 px-9">
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-lg-4 fs-6 fw-semibold text-success d-block">
                                      User Sign-in
                                    </span>
                                    <span
                                      className="fs-lg-2hx fs-2 fw-bold text-gray-800"
                                      data-kt-countup="true"
                                      data-kt-countup-value="340"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-lg-4 fs-6 fw-semibold text-primary d-block">
                                      Admin Sign-in
                                    </span>
                                    <span
                                      className="fs-lg-2hx fs-2 fw-bold text-gray-800"
                                      data-kt-countup="true"
                                      data-kt-countup-value="90"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                    <span className="fs-lg-4 fs-6 fw-semibold text-danger d-block">
                                      Failed Attempts
                                    </span>
                                    <span
                                      className="fs-lg-2hx fs-2 fw-bold text-gray-800"
                                      data-kt-countup="true"
                                      data-kt-countup-value="230"
                                    >
                                      0
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-2">
                                <div className="d-flex align-items-center pb-9 px-9">
                                  <h3 className="m-0 text-gray-800 flex-grow-1">
                                    Activity Chart
                                  </h3>
                                  <ul className="nav nav-pills nav-line-pills border rounded p-1">
                                    <li className="nav-item me-2">
                                      <a
                                        className="nav-link btn btn-active-light py-2 px-5 fs-6 btn-active-color-gray-700 btn-color-gray-500 fw-semibold active"
                                        data-bs-toggle="tab"
                                        id="kt_security_summary_tab_week_agents"
                                        href="#kt_security_summary_tab_pane_week_agents"
                                      >
                                        Agents
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link btn btn-active-light py-2 px-5 btn-active-color-gray-700 btn-color-gray-500 fs-6 fw-semibold"
                                        data-bs-toggle="tab"
                                        id="kt_security_summary_tab_week_clients"
                                        href="#kt_security_summary_tab_pane_week_clients"
                                      >
                                        Clients
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-content">
                                  <div
                                    className="tab-pane fade active show"
                                    id="kt_security_summary_tab_pane_week_agents"
                                    role="tabpanel"
                                  >
                                    <div
                                      id="kt_security_summary_chart_week_agents"
                                      style="height: 300px"
                                    ></div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="kt_security_summary_tab_pane_week_clients"
                                    role="tabpanel"
                                  >
                                    <div
                                      id="kt_security_summary_chart_week_clients"
                                      style="height: 300px"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4">
                      <div className="card card-xxl-stretch-50 mb-5 mb-xl-10">
                        <div className="card-body pt-5">
                          <div
                            id="kt_security_recent_alerts"
                            className="carousel carousel-custom carousel-stretch slide"
                            data-bs-ride="carousel"
                            data-bs-interval="8000"
                          >
                            <div className="d-flex flex-stack align-items-center flex-wrap">
                              <h4 className="text-gray-500 fw-semibold mb-0 pe-2">
                                Recent Alerts
                              </h4>
                              <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                <li
                                  data-bs-target="#kt_security_recent_alerts"
                                  data-bs-slide-to="0"
                                  className="ms-1 active"
                                ></li>
                                <li
                                  data-bs-target="#kt_security_recent_alerts"
                                  data-bs-slide-to="1"
                                  className="ms-1"
                                ></li>
                                <li
                                  data-bs-target="#kt_security_recent_alerts"
                                  data-bs-slide-to="2"
                                  className="ms-1"
                                ></li>
                              </ol>
                            </div>
                            <div className="carousel-inner pt-6">
                              <div className="carousel-item active">
                                <div className="carousel-wrapper">
                                  <div className="d-flex flex-column flex-grow-1">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary"
                                    >
                                      Latest Announcements
                                    </a>
                                    <p className="text-gray-600 fs-6 fw-semibold pt-3 mb-0">
                                      In the last year, you’ve probably had to
                                      adapt to new ways of living and working.
                                    </p>
                                  </div>
                                  <div className="d-flex flex-stack pt-8">
                                    <span className="badge badge-light-primary fs-7 fw-bold me-2">
                                      Jun 10, 2021
                                    </span>
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-light"
                                    >
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="carousel-wrapper">
                                  <div className="d-flex flex-column flex-grow-1">
                                    <a
                                      href="#"
                                      className="fw-bold text-gray-900 text-hover-primary"
                                    >
                                      Login Attempt Failed
                                    </a>
                                    <p className="text-gray-600 fs-6 fw-semibold pt-3 mb-0">
                                      As we approach one year of working
                                      remotely, we wanted to take a look back
                                      and share some ways teams around the world
                                      have collaborated effectively.
                                    </p>
                                  </div>
                                  <div className="d-flex flex-stack pt-8">
                                    <span className="badge badge-light-primary fs-7 fw-bold me-2">
                                      Oct 05, 2021
                                    </span>
                                    <a
                                      href="#"
                                      className="btn btn-light btn-sm btn-color-muted fs-7 fw-bold px-5"
                                    >
                                      Join
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="carousel-wrapper">
                                  <div className="d-flex flex-column flex-grow-1">
                                    <a
                                      href="#"
                                      className="fw-bold text-gray-900 text-hover-primary"
                                    >
                                      Top Picks For You
                                    </a>
                                    <p className="text-gray-600 fs-6 fw-semibold pt-3 mb-0">
                                      Today we are excited to share an amazing
                                      certification opportunity which is
                                      designed to teach you everything
                                    </p>
                                  </div>
                                  <div className="d-flex flex-stack pt-8">
                                    <span className="badge badge-light-primary fs-7 fw-bold me-2">
                                      Sep 11, 2021
                                    </span>
                                    <a
                                      href="#"
                                      className="btn btn-light btn-sm btn-color-muted fs-7 fw-bold px-5"
                                    >
                                      Collaborate
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-xxl-stretch-50 mb-5 mb-xl-10">
                        <div className="card-body pt-5">
                          <div
                            id="kt_security_guidelines"
                            className="carousel carousel-custom carousel-stretch slide"
                            data-bs-ride="carousel"
                            data-bs-interval="8000"
                          >
                            <div className="d-flex flex-stack align-items-center flex-wrap">
                              <h4 className="text-gray-500 fw-semibold mb-0 pe-2">
                                Security Guidelines
                              </h4>
                              <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                <li
                                  data-bs-target="#kt_security_guidelines"
                                  data-bs-slide-to="0"
                                  className="ms-1 active"
                                ></li>
                                <li
                                  data-bs-target="#kt_security_guidelines"
                                  data-bs-slide-to="1"
                                  className="ms-1"
                                ></li>
                                <li
                                  data-bs-target="#kt_security_guidelines"
                                  data-bs-slide-to="2"
                                  className="ms-1"
                                ></li>
                              </ol>
                            </div>
                            <div className="carousel-inner pt-6">
                              <div className="carousel-item active">
                                <div className="carousel-wrapper">
                                  <div className="d-flex flex-column flex-grow-1">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary"
                                    >
                                      Get Start Your Security
                                    </a>
                                    <p className="text-gray-600 fs-6 fw-semibold pt-3 mb-0">
                                      In the last year, you’ve probably had to
                                      adapt to new ways of living and working.
                                    </p>
                                  </div>
                                  <div className="d-flex flex-stack pt-8">
                                    <span className="text-muted fw-semibold fs-6 pe-2">
                                      34, Soho Avenue, Tokio
                                    </span>
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-light"
                                    >
                                      Register
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="carousel-wrapper">
                                  <div className="d-flex flex-column flex-grow-1">
                                    <a
                                      href="#"
                                      className="fw-bold text-gray-900 text-hover-primary"
                                    >
                                      Security Policy Update
                                    </a>
                                    <p className="text-gray-600 fs-6 fw-semibold pt-3 mb-0">
                                      As we approach one year of working
                                      remotely, we wanted to take a look back
                                      and share some ways teams around the world
                                      have collaborated effectively.
                                    </p>
                                  </div>
                                  <div className="d-flex flex-stack pt-8">
                                    <span className="badge badge-light-primary fs-7 fw-bold me-2">
                                      Oct 05, 2021
                                    </span>
                                    <a
                                      href="#"
                                      className="btn btn-light btn-sm btn-color-muted fs-7 fw-bold px-5"
                                    >
                                      Explore
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="carousel-wrapper">
                                  <div className="d-flex flex-column flex-grow-1">
                                    <a
                                      href="#"
                                      className="fw-bold text-gray-900 text-hover-primary"
                                    >
                                      Terms Of Use Document
                                    </a>
                                    <p className="text-gray-600 fs-6 fw-semibold pt-3 mb-0">
                                      Today we are excited to share an amazing
                                      certification opportunity which is
                                      designed to teach you everything
                                    </p>
                                  </div>
                                  <div className="d-flex flex-stack pt-8">
                                    <span className="badge badge-light-primary fs-7 fw-bold me-2">
                                      Nov 10, 2021
                                    </span>
                                    <a
                                      href="#"
                                      className="btn btn-light btn-sm btn-color-muted fs-7 fw-bold px-5"
                                    >
                                      Discover
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-5 mb-xl-10">
                    <div className="card-header">
                      <div className="card-title">
                        <h3>Login Sessions</h3>
                      </div>
                      <div className="card-toolbar">
                        <div className="my-1 me-4">
                          <select
                            className="form-select form-select-sm form-select-solid w-125px"
                            data-control="select2"
                            data-placeholder="Select Hours"
                            data-hide-search="true"
                          >
                            <option value="1" selected="selected">
                              1 Hours
                            </option>
                            <option value="2">6 Hours</option>
                            <option value="3">12 Hours</option>
                            <option value="4">24 Hours</option>
                          </select>
                        </div>
                        <a href="#" className="btn btn-sm btn-primary my-1">
                          View All
                        </a>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
                          <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                            <tr>
                              <th className="min-w-250px">Location</th>
                              <th className="min-w-100px">Status</th>
                              <th className="min-w-150px">Device</th>
                              <th className="min-w-150px">IP Address</th>
                              <th className="min-w-150px">Time</th>
                            </tr>
                          </thead>
                          <tbody className="fw-6 fw-semibold text-gray-600">
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  className="text-hover-primary text-gray-600"
                                >
                                  USA(5)
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success fs-7 fw-bold">
                                  OK
                                </span>
                              </td>
                              <td>Chrome - Windows</td>
                              <td>236.125.56.78</td>
                              <td>2 mins ago</td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  className="text-hover-primary text-gray-600"
                                >
                                  United Kingdom(10)
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success fs-7 fw-bold">
                                  OK
                                </span>
                              </td>
                              <td>Safari - Mac OS</td>
                              <td>236.125.56.78</td>
                              <td>10 mins ago</td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  className="text-hover-primary text-gray-600"
                                >
                                  Norway(-)
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-danger fs-7 fw-bold">
                                  ERR
                                </span>
                              </td>
                              <td>Firefox - Windows</td>
                              <td>236.125.56.10</td>
                              <td>20 mins ago</td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  className="text-hover-primary text-gray-600"
                                >
                                  Japan(112)
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success fs-7 fw-bold">
                                  OK
                                </span>
                              </td>
                              <td>iOS - iPhone Pro</td>
                              <td>236.125.56.54</td>
                              <td>30 mins ago</td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  className="text-hover-primary text-gray-600"
                                >
                                  Italy(5)
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-warning fs-7 fw-bold">
                                  WRN
                                </span>
                              </td>
                              <td>Samsung Noted 5- Android</td>
                              <td>236.100.56.50</td>
                              <td>40 mins ago</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">
                        <h3>License Usage</h3>
                      </div>
                      <div className="card-toolbar">
                        <div className="my-1 me-4">
                          <select
                            className="form-select form-select-sm form-select-solid w-125px"
                            data-control="select2"
                            data-placeholder="Select Hours"
                            data-hide-search="true"
                          >
                            <option value="1">1 Hours</option>
                            <option value="2">6 Hours</option>
                            <option value="3" selected="selected">
                              12 Hours
                            </option>
                            <option value="4">24 Hours</option>
                          </select>
                        </div>
                        <a href="#" className="btn btn-sm btn-primary my-1">
                          Download Report
                        </a>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table
                          className="table align-middle table-row-bordered table-row-solid gy-4"
                          id="kt_security_license_usage_table"
                        >
                          <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                            <tr>
                              <th className="w-150px ps-9">Status</th>
                              <th className="px-0 min-w-250px">Operator</th>
                              <th className="min-w-150px">IP Address</th>
                              <th className="min-w-150px">Created</th>
                              <th className="pe-0 min-w-150px">API Keys</th>
                              <th className="min-w-50px"></th>
                            </tr>
                          </thead>
                          <tbody className="fw-6 fw-semibold text-gray-600">
                            <tr>
                              <td className="ps-9">
                                <span className="badge badge-light-success fs-7 fw-bold">
                                  License
                                </span>
                              </td>
                              <td className="ps-0">
                                <a
                                  href=""
                                  className="text-hover-primary text-gray-600"
                                >
                                  DSI: Workstation 2
                                </a>
                              </td>
                              <td>236.125.56.78</td>
                              <td>2 mins ago</td>
                              <td data-bs-target="license">
                                fftt456765gjkkjhi8306767
                              </td>
                              <td className="ps-5">
                                <button
                                  type="button"
                                  data-action="copy"
                                  className="btn btn-active-color-primary btn-icon btn-color-gray-500 btn-sm btn-outline-light d-"
                                >
                                  <i className="ki-duotone ki-copy fs-2"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-9">
                                <span className="badge badge-light-danger fs-7 fw-bold">
                                  Unknown
                                </span>
                              </td>
                              <td className="ps-0">
                                <a
                                  href=""
                                  className="text-hover-primary text-gray-600"
                                >
                                  ReXe: Workstation 29
                                </a>
                              </td>
                              <td>236.125.56.78</td>
                              <td>3 mins ago</td>
                              <td data-bs-target="license">none</td>
                              <td className="ps-5"></td>
                            </tr>
                            <tr>
                              <td className="ps-9">
                                <span className="badge badge-light-success fs-7 fw-bold">
                                  License
                                </span>
                              </td>
                              <td className="ps-0">
                                <a
                                  href=""
                                  className="text-hover-primary text-gray-600"
                                >
                                  RamenLC: Workstation 2
                                </a>
                              </td>
                              <td>654.125.56.34</td>
                              <td>5 mins ago</td>
                              <td data-bs-target="license">
                                ertt456765gjkkjhi83034344
                              </td>
                              <td className="ps-5">
                                <button
                                  type="button"
                                  data-action="copy"
                                  className="btn btn-active-color-primary btn-icon btn-color-gray-500 btn-sm btn-outline-light d-"
                                >
                                  <i className="ki-duotone ki-copy fs-2"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-9">
                                <span className="badge badge-light-success fs-7 fw-bold">
                                  License
                                </span>
                              </td>
                              <td className="ps-0">
                                <a
                                  href=""
                                  className="text-hover-primary text-gray-600"
                                >
                                  Nest Five: Workstation 86
                                </a>
                              </td>
                              <td>423.125.56.54</td>
                              <td>1 mins ago</td>
                              <td data-bs-target="license">
                                dctt456765gjkkjhi83093985
                              </td>
                              <td className="ps-5">
                                <button
                                  type="button"
                                  data-action="copy"
                                  className="btn btn-active-color-primary btn-icon btn-color-gray-500 btn-sm btn-outline-light d-"
                                >
                                  <i className="ki-duotone ki-copy fs-2"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-9">
                                <span className="badge badge-light-danger fs-7 fw-bold">
                                  Unknown
                                </span>
                              </td>
                              <td className="ps-0">
                                <a
                                  href=""
                                  className="text-hover-primary text-gray-600"
                                >
                                  DSI: Workstation 2
                                </a>
                              </td>
                              <td>236.125.56.78</td>
                              <td>7 mins ago</td>
                              <td data-bs-target="license">none</td>
                              <td className="ps-5"></td>
                            </tr>
                            <tr>
                              <td className="ps-9">
                                <span className="badge badge-light-success fs-7 fw-bold">
                                  License
                                </span>
                              </td>
                              <td className="ps-0">
                                <a
                                  href=""
                                  className="text-hover-primary text-gray-600"
                                >
                                  ReXe: Workstation 7
                                </a>
                              </td>
                              <td>745.234.56.21</td>
                              <td>3 mins ago</td>
                              <td data-bs-target="license">
                                uytt456765gjkkjhi4312673
                              </td>
                              <td className="ps-5">
                                <button
                                  type="button"
                                  data-action="copy"
                                  className="btn btn-active-color-primary btn-icon btn-color-gray-500 btn-sm btn-outline-light d-"
                                >
                                  <i className="ki-duotone ki-copy fs-2"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-9">
                                <span className="badge badge-light-warning fs-7 fw-bold">
                                  To be Paid
                                </span>
                              </td>
                              <td className="ps-0">
                                <a
                                  href=""
                                  className="text-hover-primary text-gray-600"
                                >
                                  Swedline: Workstation 54
                                </a>
                              </td>
                              <td>441.967.56.54</td>
                              <td>8 mins ago</td>
                              <td data-bs-target="license">
                                ygd456765gjkkjhi83095427
                              </td>
                              <td className="ps-5">
                                <button
                                  type="button"
                                  data-action="copy"
                                  className="btn btn-active-color-primary btn-icon btn-color-gray-500 btn-sm btn-outline-light d-"
                                >
                                  <i className="ki-duotone ki-copy fs-2"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
                  <div className="text-gray-900 order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">
                      2024&copy;
                    </span>
                    <a
                      href="https://keenthemes.com"
                      target="_blank"
                      className="text-gray-800 text-hover-primary"
                    >
                      Keenthemes
                    </a>
                  </div>
                  <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                      <a
                        href="https://keenthemes.com"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://devs.keenthemes.com"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Support
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://1.envato.market/EA4JP"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Purchase
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="kt_activities"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="activities"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_activities_toggle"
          data-kt-drawer-close="#kt_activities_close"
        >
          <div className="card shadow-none border-0 rounded-0">
            <div className="card-header" id="kt_activities_header">
              <h3 className="card-title fw-bold text-gray-900">
                Activity Logs
              </h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-active-light-primary me-n5"
                  id="kt_activities_close"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </button>
              </div>
            </div>
            <div
              className="card-body position-relative"
              id="kt_activities_body"
            >
              <div
                id="kt_activities_scroll"
                className="position-relative scroll-y me-n5 pe-5"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_activities_body"
                data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
                data-kt-scroll-offset="5px"
              >
                <div className="timeline timeline-border-dashed">
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      <i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </i>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          There are 2 new tasks for you in “AirPlus Mobile App”
                          project:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Added at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Nina Nilson"
                          >
                            <img
                              src="assets/media/avatars/300-14.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                          <a
                            href="apps/projects/project.html"
                            className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Meeting with customer
                          </a>
                          <div className="min-w-175px pe-2">
                            <span className="badge badge-light text-muted">
                              Application Design
                            </span>
                          </div>
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-2.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-14.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                                A
                              </div>
                            </div>
                          </div>
                          <div className="min-w-125px pe-2">
                            <span className="badge badge-light-primary">
                              In Progress
                            </span>
                          </div>
                          <a
                            href="apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                        </div>
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                          <a
                            href="apps/projects/project.html"
                            className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Project Delivery Preparation
                          </a>
                          <div className="min-w-175px">
                            <span className="badge badge-light text-muted">
                              CRM System Development
                            </span>
                          </div>
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-20.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                                B
                              </div>
                            </div>
                          </div>
                          <div className="min-w-125px">
                            <span className="badge badge-light-success">
                              Completed
                            </span>
                          </div>
                          <a
                            href="apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon me-4">
                      <i className="ki-duotone ki-flag fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="timeline-content mb-10 mt-n2">
                      <div className="overflow-auto pe-3">
                        <div className="fs-5 fw-semibold mb-2">
                          Invitation for crafting engaging designs that speak
                          human workshop
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Sent at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Alan Nilson"
                          >
                            <img
                              src="assets/media/avatars/300-1.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                      </i>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="mb-5 pe-3">
                        <a
                          href="#"
                          className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                        >
                          3 New Incoming Project Files:
                        </a>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Sent at 10:30 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Jan Hummer"
                          >
                            <img
                              src="assets/media/avatars/300-23.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            <img
                              alt=""
                              className="w-30px me-3"
                              src="assets/media/svg/files/pdf.svg"
                            />
                            <div className="ms-1 fw-semibold">
                              <a
                                href="apps/projects/project.html"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Finance KPI App Guidelines
                              </a>
                              <div className="text-gray-500">1.9mb</div>
                            </div>
                          </div>
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            <img
                              alt="apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/media/svg/files/doc.svg"
                            />
                            <div className="ms-1 fw-semibold">
                              <a
                                href="#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Client UAT Testing Results
                              </a>
                              <div className="text-gray-500">18kb</div>
                            </div>
                          </div>
                          <div className="d-flex flex-aligns-center">
                            <img
                              alt="apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/media/svg/files/css.svg"
                            />
                            <div className="ms-1 fw-semibold">
                              <a
                                href="#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Finance Reports
                              </a>
                              <div className="text-gray-500">20mb</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          Task
                          <a href="#" className="text-primary fw-bold me-1">
                            #45890
                          </a>
                          merged with
                          <a href="#" className="text-primary fw-bold me-1">
                            #45890
                          </a>
                          in “Ads Pro Admin Dashboard project:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Initiated at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Nina Nilson"
                          >
                            <img
                              src="assets/media/avatars/300-14.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          3 new application design concepts added:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Created at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Marcus Dotson"
                          >
                            <img
                              src="assets/media/avatars/300-2.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                          <div className="overlay me-10">
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-29.jpg"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                          <div className="overlay me-10">
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-31.jpg"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                          <div className="overlay">
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-40.jpg"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      <i className="ki-duotone ki-sms fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          New case
                          <a href="#" className="text-primary fw-bold me-1">
                            #67890
                          </a>
                          is assigned to you in Multi-platform Database Design
                          project
                        </div>
                        <div className="overflow-auto pb-5">
                          <div className="d-flex align-items-center mt-1 fs-6">
                            <div className="text-muted me-2 fs-7">
                              Added at 4:23 PM by
                            </div>
                            <a href="#" className="text-primary fw-bold me-1">
                              Alice Tan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          You have received a new order:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Placed at 5:05 AM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Robert Rich"
                          >
                            <img
                              src="assets/media/avatars/300-4.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                          <i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                          <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                            <div className="mb-3 mb-md-0 fw-semibold">
                              <h4 className="text-gray-900 fw-bold">
                                Database Backup Process Completed!
                              </h4>
                              <div className="fs-6 text-gray-700 pe-7">
                                Login into Admin Dashboard to make sure the data
                                integrity is OK
                              </div>
                            </div>
                            <a
                              href="#"
                              className="btn btn-primary px-6 align-self-center text-nowrap"
                            >
                              Proceed
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      <i className="ki-duotone ki-basket fs-2 text-gray-500">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </i>
                    </div>
                    <div className="timeline-content mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          New order
                          <a href="#" className="text-primary fw-bold me-1">
                            #67890
                          </a>
                          is placed for Workshow Planning & Budget Estimation
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Placed at 4:23 PM by
                          </div>
                          <a href="#" className="text-primary fw-bold me-1">
                            Jimmy Bold
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-footer py-5 text-center"
              id="kt_activities_footer"
            >
              <a
                href="pages/user-profile/activity.html"
                className="btn btn-bg-body text-primary"
              >
                View All Activities
                <i className="ki-duotone ki-arrow-right fs-3 text-primary">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div
          id="kt_drawer_chat"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="chat"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_chat_toggle"
          data-kt-drawer-close="#kt_drawer_chat_close"
        >
          <div
            className="card w-100 border-0 rounded-0"
            id="kt_drawer_chat_messenger"
          >
            <div
              className="card-header pe-5"
              id="kt_drawer_chat_messenger_header"
            >
              <div className="card-title">
                <div className="d-flex justify-content-center flex-column me-3">
                  <a
                    href="#"
                    className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  >
                    Brian Cox
                  </a>
                  <div className="mb-0 lh-1">
                    <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                    <span className="fs-7 fw-semibold text-muted">Active</span>
                  </div>
                </div>
              </div>
              <div className="card-toolbar">
                <div className="me-0">
                  <button
                    className="btn btn-sm btn-icon btn-active-color-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-dots-square fs-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Contacts
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_users_search"
                      >
                        Add Contact
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link flex-stack px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_invite_friends"
                      >
                        Invite Contacts
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a contact email to send an invitation"
                        >
                          <i className="ki-duotone ki-information fs-7">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Groups</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Create Group
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Invite Members
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Settings
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        title="Coming soon"
                      >
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  id="kt_drawer_chat_close"
                >
                  <i className="ki-duotone ki-cross-square fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
            </div>
            <div className="card-body" id="kt_drawer_chat_messenger_body">
              <div
                className="scroll-y me-n5 pe-5"
                data-kt-element="messages"
                data-kt-scroll="true"
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
                data-kt-scroll-offset="0px"
              >
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">2 mins</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      How likely are you to recommend our company to your
                      friends and family ?
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-10">
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">5 mins</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Hey there, we’re just writing to let you know that you’ve
                      been subscribed to a repository on GitHub.
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">1 Hour</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Ok, Understood!
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-10">
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">2 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      You’ll receive notifications for all issues, pull
                      requests!
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">3 Hours</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      You can unwatch this repository immediately by clicking
                      here:
                      <a href="https://keenthemes.com">Keenthemes.com</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-10">
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">4 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Most purchased Business courses during this sale!
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">5 Hours</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Company BBQ to celebrate the last quater achievements and
                      goals. Food and drinks provided
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-end mb-10 d-none"
                  data-kt-element="template-out"
                >
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">Just now</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    ></div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-start mb-10 d-none"
                  data-kt-element="template-in"
                >
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">Just now</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Right before vacation season we have the next Big Deal for
                      you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-footer pt-4"
              id="kt_drawer_chat_messenger_footer"
            >
              <textarea
                className="form-control form-control-flush mb-3"
                rows="1"
                data-kt-element="input"
                placeholder="Type a message"
              ></textarea>
              <div className="d-flex flex-stack">
                <div className="d-flex align-items-center me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="ki-duotone ki-paper-clip fs-3"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="ki-duotone ki-cloud-add fs-3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </button>
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-kt-element="send"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="kt_shopping_cart"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="cart"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
          data-kt-drawer-close="#kt_drawer_shopping_cart_close"
        >
          <div className="card card-flush w-100 rounded-0">
            <div className="card-header">
              <h3 className="card-title text-gray-900 fw-bold">
                Shopping Cart
              </h3>
              <div className="card-toolbar">
                <div
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  id="kt_drawer_shopping_cart_close"
                >
                  <i className="ki-duotone ki-cross fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
            </div>
            <div className="card-body hover-scroll-overlay-y h-400px pt-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Iblender
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      The best kitchen gadget in 2022
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-duotone ki-minus fs-4"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-duotone ki-plus fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-1.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6"></div>
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      SmartCleaner
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Smart tool for cooking
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-duotone ki-minus fs-4"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-duotone ki-plus fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-3.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6"></div>
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      CameraMaxr
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Professional camera for edge
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-duotone ki-minus fs-4"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-duotone ki-plus fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-8.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6"></div>
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-duotone ki-minus fs-4"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-duotone ki-plus fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-26.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6"></div>
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      MotionWire
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Perfect animation tool
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-duotone ki-minus fs-4"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-duotone ki-plus fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-21.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6"></div>
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Samsung
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Profile info,Timeline etc
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-duotone ki-minus fs-4"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-duotone ki-plus fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-34.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6"></div>
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-duotone ki-minus fs-4"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-duotone ki-plus fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-27.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Total</span>
                <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
              </div>
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Sub total</span>
                <span className="text-primary fw-bolder fs-5">$ 246.35</span>
              </div>
              <div className="d-flex justify-content-end mt-9">
                <a
                  href="#"
                  className="btn btn-primary d-flex justify-content-end"
                >
                  Pleace Order
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          <i className="ki-duotone ki-arrow-up">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        </div>
        <div
          className="modal fade"
          id="kt_modal_create_app"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered mw-900px">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Create App</h2>
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
              <div className="modal-body py-lg-10 px-lg-10">
                <div
                  className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                  id="kt_modal_create_app_stepper"
                >
                  <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                    <div className="stepper-nav ps-lg-10">
                      <div
                        className="stepper-item current"
                        data-kt-stepper-element="nav"
                      >
                        <div className="stepper-wrapper">
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2"></i>
                            <span className="stepper-number">1</span>
                          </div>
                          <div className="stepper-label">
                            <h3 className="stepper-title">Details</h3>
                            <div className="stepper-desc">Name your App</div>
                          </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                      </div>
                      <div
                        className="stepper-item"
                        data-kt-stepper-element="nav"
                      >
                        <div className="stepper-wrapper">
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2"></i>
                            <span className="stepper-number">2</span>
                          </div>
                          <div className="stepper-label">
                            <h3 className="stepper-title">Frameworks</h3>
                            <div className="stepper-desc">
                              Define your app framework
                            </div>
                          </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                      </div>
                      <div
                        className="stepper-item"
                        data-kt-stepper-element="nav"
                      >
                        <div className="stepper-wrapper">
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2"></i>
                            <span className="stepper-number">3</span>
                          </div>
                          <div className="stepper-label">
                            <h3 className="stepper-title">Database</h3>
                            <div className="stepper-desc">
                              Select the app database type
                            </div>
                          </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                      </div>
                      <div
                        className="stepper-item"
                        data-kt-stepper-element="nav"
                      >
                        <div className="stepper-wrapper">
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2"></i>
                            <span className="stepper-number">4</span>
                          </div>
                          <div className="stepper-label">
                            <h3 className="stepper-title">Billing</h3>
                            <div className="stepper-desc">
                              Provide payment details
                            </div>
                          </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                      </div>
                      <div
                        className="stepper-item mark-completed"
                        data-kt-stepper-element="nav"
                      >
                        <div className="stepper-wrapper">
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2"></i>
                            <span className="stepper-number">5</span>
                          </div>
                          <div className="stepper-label">
                            <h3 className="stepper-title">Completed</h3>
                            <div className="stepper-desc">
                              Review and Submit
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-row-fluid py-lg-5 px-lg-15">
                    <form
                      className="form"
                      novalidate="novalidate"
                      id="kt_modal_create_app_form"
                    >
                      <div
                        className="current"
                        data-kt-stepper-element="content"
                      >
                        <div className="w-100">
                          <div className="fv-row mb-10">
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                              <span className="required">App Name</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Specify your unique app name"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-solid"
                              name="name"
                              placeholder=""
                              value=""
                            />
                          </div>
                          <div className="fv-row">
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">Category</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Select your app category"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                            </label>
                            <div className="fv-row">
                              <label className="d-flex flex-stack mb-5 cursor-pointer">
                                <span className="d-flex align-items-center me-2">
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-primary">
                                      <i className="ki-duotone ki-compass fs-1 text-primary">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                      </i>
                                    </span>
                                  </span>
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Quick Online Courses
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure is just
                                      one SEO
                                    </span>
                                  </span>
                                </span>
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    value="1"
                                  />
                                </span>
                              </label>
                              <label className="d-flex flex-stack mb-5 cursor-pointer">
                                <span className="d-flex align-items-center me-2">
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-danger">
                                      <i className="ki-duotone ki-element-11 fs-1 text-danger">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                      </i>
                                    </span>
                                  </span>
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Face to Face Discussions
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure is just
                                      one aspect
                                    </span>
                                  </span>
                                </span>
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    value="2"
                                  />
                                </span>
                              </label>
                              <label className="d-flex flex-stack cursor-pointer">
                                <span className="d-flex align-items-center me-2">
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-success">
                                      <i className="ki-duotone ki-timer fs-1 text-success">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                      </i>
                                    </span>
                                  </span>
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Full Intro Training
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure
                                      copywriting
                                    </span>
                                  </span>
                                </span>
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    value="3"
                                  />
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          <div className="fv-row">
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">Select Framework</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Specify your apps framework"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                            </label>
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-warning">
                                    <i className="ki-duotone ki-html fs-2x text-warning">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">HTML5</span>
                                  <span className="fs-7 text-muted">
                                    Base Web Projec
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  checked="checked"
                                  name="framework"
                                  value="1"
                                />
                              </span>
                            </label>
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="ki-duotone ki-react fs-2x text-success">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">ReactJS</span>
                                  <span className="fs-7 text-muted">
                                    Robust and flexible app framework
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  value="2"
                                />
                              </span>
                            </label>
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <i className="ki-duotone ki-angular fs-2x text-danger">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                    </i>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Angular</span>
                                  <span className="fs-7 text-muted">
                                    Powerful data mangement
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  value="3"
                                />
                              </span>
                            </label>
                            <label className="d-flex flex-stack cursor-pointer">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-primary">
                                    <i className="ki-duotone ki-vue fs-2x text-primary">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Vue</span>
                                  <span className="fs-7 text-muted">
                                    Lightweight and responsive framework
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  value="4"
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          <div className="fv-row mb-10">
                            <label className="required fs-5 fw-semibold mb-2">
                              Database Name
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-solid"
                              name="dbname"
                              placeholder=""
                              value="master_db"
                            />
                          </div>
                          <div className="fv-row">
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">
                                Select Database Engine
                              </span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Select your app database engine"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                            </label>
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="ki-duotone ki-note text-success fs-2x">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">MySQL</span>
                                  <span className="fs-7 text-muted">
                                    Basic MySQL database
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  checked="checked"
                                  value="1"
                                />
                              </span>
                            </label>
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <i className="ki-duotone ki-google text-danger fs-2x">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Firebase</span>
                                  <span className="fs-7 text-muted">
                                    Google based app data management
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  value="2"
                                />
                              </span>
                            </label>
                            <label className="d-flex flex-stack cursor-pointer">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-warning">
                                    <i className="ki-duotone ki-microsoft text-warning fs-2x">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">DynamoDB</span>
                                  <span className="fs-7 text-muted">
                                    Microsoft Fast NoSQL Database
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  value="3"
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          <div className="d-flex flex-column mb-7 fv-row">
                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                              <span className="required">Name On Card</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Specify a card holder's name"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder=""
                              name="card_name"
                              value="Max Doe"
                            />
                          </div>
                          <div className="d-flex flex-column mb-7 fv-row">
                            <label className="required fs-6 fw-semibold form-label mb-2">
                              Card Number
                            </label>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="Enter card number"
                                name="card_number"
                                value="4111 1111 1111 1111"
                              />
                              <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                <img
                                  src="assets/media/svg/card-logos/visa.svg"
                                  alt=""
                                  className="h-25px"
                                />
                                <img
                                  src="assets/media/svg/card-logos/mastercard.svg"
                                  alt=""
                                  className="h-25px"
                                />
                                <img
                                  src="assets/media/svg/card-logos/american-express.svg"
                                  alt=""
                                  className="h-25px"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-10">
                            <div className="col-md-8 fv-row">
                              <label className="required fs-6 fw-semibold form-label mb-2">
                                Expiration Date
                              </label>
                              <div className="row fv-row">
                                <div className="col-6">
                                  <select
                                    name="card_expiry_month"
                                    className="form-select form-select-solid"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Month"
                                  >
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                  </select>
                                </div>
                                <div className="col-6">
                                  <select
                                    name="card_expiry_year"
                                    className="form-select form-select-solid"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Year"
                                  >
                                    <option></option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 fv-row">
                              <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                <span className="required">CVV</span>
                                <span
                                  className="ms-1"
                                  data-bs-toggle="tooltip"
                                  title="Enter a card CVV code"
                                >
                                  <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span>
                              </label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control form-control-solid"
                                  minlength="3"
                                  maxlength="4"
                                  placeholder="CVV"
                                  name="card_cvv"
                                />
                                <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                  <i className="ki-duotone ki-credit-cart fs-2hx">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-stack">
                            <div className="me-5">
                              <label className="fs-6 fw-semibold form-label">
                                Save Card for further billing?
                              </label>
                              <div className="fs-7 fw-semibold text-muted">
                                If you need more info, please check budget
                                planning
                              </div>
                            </div>
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="1"
                                checked="checked"
                              />
                              <span className="form-check-label fw-semibold text-muted">
                                Save Card
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div data-kt-stepper-element="content">
                        <div className="w-100 text-center">
                          <h1 className="fw-bold text-gray-900 mb-3">
                            Release!
                          </h1>
                          <div className="text-muted fw-semibold fs-3">
                            Submit your app to kickstart your project.
                          </div>
                          <div className="text-center px-4 py-15">
                            <img
                              src="assets/media/illustrations/sketchy-1/9.png"
                              alt=""
                              className="mw-100 mh-300px"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-stack pt-10">
                        <div className="me-2">
                          <button
                            type="button"
                            className="btn btn-lg btn-light-primary me-3"
                            data-kt-stepper-action="previous"
                          >
                            <i className="ki-duotone ki-arrow-left fs-3 me-1">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Back
                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-stepper-action="submit"
                          >
                            <span className="indicator-label">
                              Submit
                              <i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-stepper-action="next"
                          >
                            Continue
                            <i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="kt_modal_offer_a_deal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered mw-1000px">
            <div className="modal-content">
              <div className="modal-header py-7 d-flex justify-content-between">
                <h2>Offer a Deal</h2>
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
              <div className="modal-body scroll-y m-5">
                <div
                  className="stepper stepper-links d-flex flex-column"
                  id="kt_modal_offer_a_deal_stepper"
                >
                  <div className="stepper-nav justify-content-center py-2">
                    <div
                      className="stepper-item me-5 me-md-15 current"
                      data-kt-stepper-element="nav"
                    >
                      <h3 className="stepper-title">Deal Type</h3>
                    </div>
                    <div
                      className="stepper-item me-5 me-md-15"
                      data-kt-stepper-element="nav"
                    >
                      <h3 className="stepper-title">Deal Details</h3>
                    </div>
                    <div
                      className="stepper-item me-5 me-md-15"
                      data-kt-stepper-element="nav"
                    >
                      <h3 className="stepper-title">Finance Settings</h3>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <h3 className="stepper-title">Completed</h3>
                    </div>
                  </div>
                  <form
                    className="mx-auto mw-500px w-100 pt-15 pb-10"
                    novalidate="novalidate"
                    id="kt_modal_offer_a_deal_form"
                  >
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="mb-13">
                          <h2 className="mb-3">Deal Type</h2>
                          <div className="text-muted fw-semibold fs-5">
                            If you need more info, please check out
                            <a href="#" className="link-primary fw-bold">
                              FAQ Page
                            </a>
                            .
                          </div>
                        </div>
                        <div className="fv-row mb-15" data-kt-buttons="true">
                          <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                            <input
                              className="btn-check"
                              type="radio"
                              checked="checked"
                              name="offer_type"
                              value="1"
                            />
                            <span className="d-flex">
                              <i className="ki-duotone ki-profile-circle fs-3hx">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                              <span className="ms-4">
                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                  Personal Deal
                                </span>
                                <span className="fw-semibold fs-4 text-muted">
                                  If you need more info, please check it out
                                </span>
                              </span>
                            </span>
                          </label>
                          <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                            <input
                              className="btn-check"
                              type="radio"
                              name="offer_type"
                              value="2"
                            />
                            <span className="d-flex">
                              <i className="ki-duotone ki-element-11 fs-3hx">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                              </i>
                              <span className="ms-4">
                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                  Corporate Deal
                                </span>
                                <span className="fw-semibold fs-4 text-muted">
                                  Create corporate account to manage users
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-element="type-next"
                          >
                            <span className="indicator-label">
                              Offer Details
                            </span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="mb-13">
                          <h2 className="mb-3">Deal Details</h2>
                          <div className="text-muted fw-semibold fs-5">
                            If you need more info, please check out
                            <a href="#" className="link-primary fw-bold">
                              FAQ Page
                            </a>
                            .
                          </div>
                        </div>
                        <div className="fv-row mb-8">
                          <label className="required fs-6 fw-semibold mb-2">
                            Customer
                          </label>
                          <select
                            className="form-select form-select-solid"
                            data-control="select2"
                            data-placeholder="Select an option"
                            name="details_customer"
                          >
                            <option></option>
                            <option value="1" selected="selected">
                              Keenthemes
                            </option>
                            <option value="2">CRM App</option>
                          </select>
                        </div>
                        <div className="fv-row mb-8">
                          <label className="required fs-6 fw-semibold mb-2">
                            Deal Title
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="Enter Deal Title"
                            name="details_title"
                            value="Marketing Campaign"
                          />
                        </div>
                        <div className="fv-row mb-8">
                          <label className="fs-6 fw-semibold mb-2">
                            Deal Description
                          </label>
                          <textarea
                            className="form-control form-control-solid"
                            rows="3"
                            placeholder="Enter Deal Description"
                            name="details_description"
                          >
                            Experience share market at your fingertips with TICK
                            PRO stock investment mobile trading app
                          </textarea>
                        </div>
                        <div className="fv-row mb-8">
                          <label className="required fs-6 fw-semibold mb-2">
                            Activation Date
                          </label>
                          <div className="position-relative d-flex align-items-center">
                            <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </i>
                            <input
                              className="form-control form-control-solid ps-12"
                              placeholder="Pick date range"
                              name="details_activation_date"
                            />
                          </div>
                        </div>
                        <div className="fv-row mb-15">
                          <div className="d-flex flex-stack">
                            <div className="me-5">
                              <label className="required fs-6 fw-semibold">
                                Notifications
                              </label>
                              <div className="fs-7 fw-semibold text-muted">
                                Allow Notifications by Phone or Email
                              </div>
                            </div>
                            <div className="d-flex">
                              <label className="form-check form-check-custom form-check-solid me-10">
                                <input
                                  className="form-check-input h-20px w-20px"
                                  type="checkbox"
                                  value="email"
                                  name="details_notifications[]"
                                />
                                <span className="form-check-label fw-semibold">
                                  Email
                                </span>
                              </label>
                              <label className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input h-20px w-20px"
                                  type="checkbox"
                                  value="phone"
                                  checked="checked"
                                  name="details_notifications[]"
                                />
                                <span className="form-check-label fw-semibold">
                                  Phone
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-stack">
                          <button
                            type="button"
                            className="btn btn-lg btn-light me-3"
                            data-kt-element="details-previous"
                          >
                            Deal Type
                          </button>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-element="details-next"
                          >
                            <span className="indicator-label">Financing</span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="mb-13">
                          <h2 className="mb-3">Finance</h2>
                          <div className="text-muted fw-semibold fs-5">
                            If you need more info, please check out
                            <a href="#" className="link-primary fw-bold">
                              FAQ Page
                            </a>
                            .
                          </div>
                        </div>
                        <div className="fv-row mb-8">
                          <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                            <span className="required">Setup Budget</span>
                            <span
                              className="lh-1 ms-1"
                              data-bs-toggle="popover"
                              data-bs-trigger="hover"
                              data-bs-html="true"
                              data-bs-content='&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className="ki-duotone ki-bank fs-3 me-3"&gt;&lt;span className="path1"&gt;&lt;/span&gt;&lt;span className="path2"&gt;&lt;/span&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;'
                            >
                              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </span>
                          </label>
                          <div
                            className="position-relative w-lg-250px"
                            id="kt_modal_finance_setup"
                            data-kt-dialer="true"
                            data-kt-dialer-min="50"
                            data-kt-dialer-max="50000"
                            data-kt-dialer-step="100"
                            data-kt-dialer-prefix="$"
                            data-kt-dialer-decimals="2"
                          >
                            <button
                              type="button"
                              className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                              data-kt-dialer-control="decrease"
                            >
                              <i className="ki-duotone ki-minus-circle fs-1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </button>
                            <input
                              type="text"
                              className="form-control form-control-solid border-0 ps-12"
                              data-kt-dialer-control="input"
                              placeholder="Amount"
                              name="finance_setup"
                              readonly="readonly"
                              value="$50"
                            />
                            <button
                              type="button"
                              className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                              data-kt-dialer-control="increase"
                            >
                              <i className="ki-duotone ki-plus-circle fs-1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </button>
                          </div>
                        </div>
                        <div className="fv-row mb-8">
                          <label className="fs-6 fw-semibold mb-2">
                            Budget Usage
                          </label>
                          <div
                            className="row g-9"
                            data-kt-buttons="true"
                            data-kt-buttons-target="[data-kt-button='true']"
                          >
                            <div className="col-md-6 col-lg-12 col-xxl-6">
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="finance_usage"
                                    value="1"
                                    checked="checked"
                                  />
                                </span>
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                    Precise Usage
                                  </span>
                                  <span className="fw-semibold fs-7 text-gray-600">
                                    Withdraw money to your bank account per
                                    transaction under $50,000 budget
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className="col-md-6 col-lg-12 col-xxl-6">
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="finance_usage"
                                    value="2"
                                  />
                                </span>
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                    Extreme Usage
                                  </span>
                                  <span className="fw-semibold fs-7 text-gray-600">
                                    Withdraw money to your bank account per
                                    transaction under $50,000 budget
                                  </span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="fv-row mb-15">
                          <div className="d-flex flex-stack">
                            <div className="me-5">
                              <label className="fs-6 fw-semibold">
                                Allow Changes in Budget
                              </label>
                              <div className="fs-7 fw-semibold text-muted">
                                If you need more info, please check budget
                                planning
                              </div>
                            </div>
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="1"
                                name="finance_allow"
                                checked="checked"
                              />
                              <span className="form-check-label fw-semibold text-muted">
                                Allowed
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-stack">
                          <button
                            type="button"
                            className="btn btn-lg btn-light me-3"
                            data-kt-element="finance-previous"
                          >
                            Project Settings
                          </button>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-element="finance-next"
                          >
                            <span className="indicator-label">Build Team</span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="mb-13">
                          <h2 className="mb-3">Deal Created!</h2>
                          <div className="text-muted fw-semibold fs-5">
                            If you need more info, please check out
                            <a href="#" className="link-primary fw-bold">
                              FAQ Page
                            </a>
                            .
                          </div>
                        </div>
                        <div className="d-flex flex-center pb-20">
                          <button
                            type="button"
                            className="btn btn-lg btn-light me-3"
                            data-kt-element="complete-start"
                          >
                            Create New Deal
                          </button>
                          <a
                            href="#"
                            className="btn btn-lg btn-primary"
                            data-bs-toggle="tooltip"
                            title="Coming Soon"
                          >
                            View Deal
                          </a>
                        </div>
                        <div className="text-center px-4">
                          <img
                            src="assets/media/illustrations/sketchy-1/20.png"
                            alt=""
                            className="mw-100 mh-300px"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="kt_modal_users_search"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered mw-650px">
            <div className="modal-content">
              <div className="modal-header pb-0 border-0 justify-content-end">
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                <div className="text-center mb-13">
                  <h1 className="mb-3">Search Users</h1>
                  <div className="text-muted fw-semibold fs-5">
                    Invite Collaborators To Your Project
                  </div>
                </div>
                <div
                  id="kt_modal_users_search_handler"
                  data-kt-search-keypress="true"
                  data-kt-search-min-length="2"
                  data-kt-search-enter="enter"
                  data-kt-search-layout="inline"
                >
                  <form
                    data-kt-search-element="form"
                    className="w-100 position-relative mb-5"
                    autocomplete="off"
                  >
                    <input type="hidden" />
                    <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid px-15"
                      name="search"
                      value=""
                      placeholder="Search by username, full name or email..."
                      data-kt-search-element="input"
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                      data-kt-search-element="spinner"
                    >
                      <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                    </span>
                    <span
                      className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                      data-kt-search-element="clear"
                    >
                      <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </span>
                  </form>
                  <div className="py-5">
                    <div data-kt-search-element="suggestions">
                      <h3 className="fw-semibold mb-5">Recently searched:</h3>
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-6.jpg"
                            />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Emma Smith
                            </span>
                            <span className="badge badge-light">
                              Art Director
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              M
                            </span>
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Melody Macy
                            </span>
                            <span className="badge badge-light">
                              Marketing Analytic
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-1.jpg"
                            />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Max Smith
                            </span>
                            <span className="badge badge-light">
                              Software Enginer
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-5.jpg"
                            />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Sean Bean
                            </span>
                            <span className="badge badge-light">
                              Web Developer
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-25.jpg"
                            />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Brian Cox
                            </span>
                            <span className="badge badge-light">
                              UI/UX Designer
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div data-kt-search-element="results" className="d-none">
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="0"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='0']"
                                value="0"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-6.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Smith
                              </a>
                              <div className="fw-semibold text-muted">
                                smith@kpmg.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2" selected="selected">
                                Owner
                              </option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="1"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='1']"
                                value="1"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                M
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Melody Macy
                              </a>
                              <div className="fw-semibold text-muted">
                                melody@altbox.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1" selected="selected">
                                Guest
                              </option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="2"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='2']"
                                value="2"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-1.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Max Smith
                              </a>
                              <div className="fw-semibold text-muted">
                                max@kt.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="3"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='3']"
                                value="3"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-5.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Sean Bean
                              </a>
                              <div className="fw-semibold text-muted">
                                sean@dellito.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2" selected="selected">
                                Owner
                              </option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="4"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='4']"
                                value="4"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-25.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Brian Cox
                              </a>
                              <div className="fw-semibold text-muted">
                                brian@exchange.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="5"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='5']"
                                value="5"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                C
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Mikaela Collins
                              </a>
                              <div className="fw-semibold text-muted">
                                mik@pex.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2" selected="selected">
                                Owner
                              </option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="6"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='6']"
                                value="6"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-9.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Francis Mitcham
                              </a>
                              <div className="fw-semibold text-muted">
                                f.mit@kpmg.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="7"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='7']"
                                value="7"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                O
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Olivia Wild
                              </a>
                              <div className="fw-semibold text-muted">
                                olivia@corpmail.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2" selected="selected">
                                Owner
                              </option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="8"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='8']"
                                value="8"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                N
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Neil Owen
                              </a>
                              <div className="fw-semibold text-muted">
                                owen.neil@gmail.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1" selected="selected">
                                Guest
                              </option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="9"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='9']"
                                value="9"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-23.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Dan Wilson
                              </a>
                              <div className="fw-semibold text-muted">
                                dam@consilting.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="10"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='10']"
                                value="10"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                E
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Bold
                              </a>
                              <div className="fw-semibold text-muted">
                                emma@intenso.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2" selected="selected">
                                Owner
                              </option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="11"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='11']"
                                value="11"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-12.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ana Crown
                              </a>
                              <div className="fw-semibold text-muted">
                                ana.cf@limtel.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1" selected="selected">
                                Guest
                              </option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="12"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='12']"
                                value="12"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-info text-info fw-semibold">
                                A
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Robert Doe
                              </a>
                              <div className="fw-semibold text-muted">
                                robert@benko.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="13"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='13']"
                                value="13"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-13.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                John Miller
                              </a>
                              <div className="fw-semibold text-muted">
                                miller@mapple.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="14"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='14']"
                                value="14"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-success text-success fw-semibold">
                                L
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Lucy Kunic
                              </a>
                              <div className="fw-semibold text-muted">
                                lucy.m@fentech.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2" selected="selected">
                                Owner
                              </option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="15"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='15']"
                                value="15"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-21.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ethan Wilder
                              </a>
                              <div className="fw-semibold text-muted">
                                ethan@loop.com.au
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1" selected="selected">
                                Guest
                              </option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id="16"
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='16']"
                                value="16"
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-21.jpg"
                              />
                            </div>
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ethan Wilder
                              </a>
                              <div className="fw-semibold text-muted">
                                ethan@loop.com.au
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-center mt-15">
                        <button
                          type="reset"
                          id="kt_modal_users_search_reset"
                          data-bs-dismiss="modal"
                          className="btn btn-active-light me-3"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="kt_modal_users_search_submit"
                          className="btn btn-primary"
                        >
                          Add Selected Users
                        </button>
                      </div>
                    </div>
                    <div
                      data-kt-search-element="empty"
                      className="text-center d-none"
                    >
                      <div className="fw-semibold py-10">
                        <div className="text-gray-600 fs-3 mb-2">
                          No users found
                        </div>
                        <div className="text-muted fs-6">
                          Try to search by username, full name or email...
                        </div>
                      </div>
                      <div className="text-center px-5">
                        <img
                          src="assets/media/illustrations/sketchy-1/1.png"
                          alt=""
                          className="w-100 h-200px h-sm-325px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="kt_modal_invite_friends"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog mw-650px">
            <div className="modal-content">
              <div className="modal-header pb-0 border-0 justify-content-end">
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
              </div>
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                <div className="text-center mb-13">
                  <h1 className="mb-3">Invite a Friend</h1>
                  <div className="text-muted fw-semibold fs-5">
                    If you need more info, please check out
                    <a href="#" className="link-primary fw-bold">
                      FAQ Page
                    </a>
                    .
                  </div>
                </div>
                <div className="btn btn-light-primary fw-bold w-100 mb-8">
                  <img
                    alt="Logo"
                    src="assets/media/svg/brand-logos/google-icon.svg"
                    className="h-20px me-3"
                  />
                  Invite Gmail Contacts
                </div>
                <div className="separator d-flex flex-center mb-8">
                  <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
                    or
                  </span>
                </div>
                <textarea
                  className="form-control form-control-solid mb-8"
                  rows="3"
                  placeholder="Type or paste emails here"
                ></textarea>
                <div className="mb-10">
                  <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                  <div className="mh-300px scroll-y me-n7 pe-7">
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Smith
                          </a>
                          <div className="fw-semibold text-muted">
                            smith@kpmg.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2" selected="selected">
                            Owner
                          </option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            M
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Melody Macy
                          </a>
                          <div className="fw-semibold text-muted">
                            melody@altbox.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1" selected="selected">
                            Guest
                          </option>
                          <option value="2">Owner</option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Max Smith
                          </a>
                          <div className="fw-semibold text-muted">
                            max@kt.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2">Owner</option>
                          <option value="3" selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Sean Bean
                          </a>
                          <div className="fw-semibold text-muted">
                            sean@dellito.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2" selected="selected">
                            Owner
                          </option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="assets/media/avatars/300-25.jpg"
                          />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Brian Cox
                          </a>
                          <div className="fw-semibold text-muted">
                            brian@exchange.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2">Owner</option>
                          <option value="3" selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-warning text-warning fw-semibold">
                            C
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Mikaela Collins
                          </a>
                          <div className="fw-semibold text-muted">
                            mik@pex.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2" selected="selected">
                            Owner
                          </option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Francis Mitcham
                          </a>
                          <div className="fw-semibold text-muted">
                            f.mit@kpmg.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2">Owner</option>
                          <option value="3" selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            O
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Olivia Wild
                          </a>
                          <div className="fw-semibold text-muted">
                            olivia@corpmail.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2" selected="selected">
                            Owner
                          </option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-primary text-primary fw-semibold">
                            N
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Neil Owen
                          </a>
                          <div className="fw-semibold text-muted">
                            owen.neil@gmail.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1" selected="selected">
                            Guest
                          </option>
                          <option value="2">Owner</option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="assets/media/avatars/300-23.jpg"
                          />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Dan Wilson
                          </a>
                          <div className="fw-semibold text-muted">
                            dam@consilting.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2">Owner</option>
                          <option value="3" selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            E
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Bold
                          </a>
                          <div className="fw-semibold text-muted">
                            emma@intenso.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2" selected="selected">
                            Owner
                          </option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="assets/media/avatars/300-12.jpg"
                          />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ana Crown
                          </a>
                          <div className="fw-semibold text-muted">
                            ana.cf@limtel.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1" selected="selected">
                            Guest
                          </option>
                          <option value="2">Owner</option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-info text-info fw-semibold">
                            A
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Robert Doe
                          </a>
                          <div className="fw-semibold text-muted">
                            robert@benko.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2">Owner</option>
                          <option value="3" selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="assets/media/avatars/300-13.jpg"
                          />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            John Miller
                          </a>
                          <div className="fw-semibold text-muted">
                            miller@mapple.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2">Owner</option>
                          <option value="3" selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-success text-success fw-semibold">
                            L
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Lucy Kunic
                          </a>
                          <div className="fw-semibold text-muted">
                            lucy.m@fentech.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2" selected="selected">
                            Owner
                          </option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="assets/media/avatars/300-21.jpg"
                          />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ethan Wilder
                          </a>
                          <div className="fw-semibold text-muted">
                            ethan@loop.com.au
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1" selected="selected">
                            Guest
                          </option>
                          <option value="2">Owner</option>
                          <option value="3">Can Edit</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            M
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Melody Macy
                          </a>
                          <div className="fw-semibold text-muted">
                            melody@altbox.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value="1">Guest</option>
                          <option value="2">Owner</option>
                          <option value="3" selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-stack">
                  <div className="me-5 fw-semibold">
                    <label className="fs-6">Adding Users by Team Members</label>
                    <div className="fs-7 text-muted">
                      If you need more info, please check budget planning
                    </div>
                  </div>
                  <label className="form-check form-switch form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      checked="checked"
                    />
                    <span className="form-check-label fw-semibold text-muted">
                      Allowed
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Security;

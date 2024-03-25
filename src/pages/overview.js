import react, { Fragment } from "react";

function Overview() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Page--> */}
        <div className="page d-flex flex-row flex-column-fluid">
          {/* <!--begin::Wrapper--> */}
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            {/* <!--begin::Header--> */}
            <div
              id="kt_header"
              className="header"
              data-kt-sticky="true"
              data-kt-sticky-name="header"
              data-kt-sticky-offset="{default: '200px', lg: '300px'}"
            >
              {/* <!--begin::Container--> */}
              <div className="container-xxl d-flex flex-grow-1 flex-stack">
                {/* <!--begin::Header Logo--> */}
                <div className="d-flex align-items-center me-5">
                  {/* <!--begin::Heaeder menu toggle--> */}
                  <div
                    className="d-lg-none btn btn-icon btn-active-color-primary w-30px h-30px ms-n2 me-3"
                    id="kt_header_menu_toggle"
                  >
                    <i className="ki-duotone ki-abstract-14 fs-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/* <!--end::Heaeder menu toggle--> */}
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
                {/* <!--end::Header Logo--> */}
                {/* <!--begin::Topbar--> */}
                <div className="d-flex align-items-center flex-shrink-0">
                  {/* <!--begin::Search--> */}
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
                    {/* <!--begin::Tablet and mobile search toggle--> */}
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
                    {/* <!--end::Tablet and mobile search toggle--> */}
                    {/* <!--begin::Form(use d-none d-lg-block classNamees for responsive search)--> */}
                    <form
                      data-kt-search-element="form"
                      className="d-none d-lg-block w-100 position-relative mb-2 mb-lg-0"
                      autocomplete="off"
                    >
                      {/* <!--begin::Hidden input(Added to disable form autocomplete)--> */}
                      <input type="hidden" />
                      {/* <!--end::Hidden input--> */}
                      {/* <!--begin::Icon--> */}
                      <i className="ki-duotone ki-magnifier fs-2 text-gray-700 position-absolute top-50 translate-middle-y ms-4">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                      {/* <!--end::Icon--> */}
                      {/* <!--begin::Input--> */}
                      <input
                        type="text"
                        className="form-control bg-transparent ps-13 fs-7 h-40px"
                        name="search"
                        value=""
                        placeholder="Quick Search"
                        data-kt-search-element="input"
                      />
                      {/* <!--end::Input--> */}
                      {/* <!--begin::Spinner--> */}
                      <span
                        className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                        data-kt-search-element="spinner"
                      >
                        <span className="spinner-border h-15px w-15px align-middle text-gray-500"></span>
                      </span>
                      {/* <!--end::Spinner--> */}
                      {/* <!--begin::Reset--> */}
                      <span
                        className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                        data-kt-search-element="clear"
                      >
                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      {/* <!--end::Reset--> */}
                    </form>
                    {/* <!--end::Form--> */}
                    {/* <!--begin::Menu--> */}
                    <div
                      data-kt-search-element="content"
                      className="menu menu-sub menu-sub-dropdown py-7 px-7 overflow-hidden w-300px w-md-350px"
                    >
                      {/* <!--begin::Wrapper--> */}
                      <div data-kt-search-element="wrapper">
                        {/* <!--begin::Recently viewed--> */}
                        <div
                          data-kt-search-element="results"
                          className="d-none"
                        >
                          {/* <!--begin::Items--> */}
                          <div className="scroll-y mh-200px mh-lg-350px">
                            {/* <!--begin::Category title--> */}
                            <h3
                              className="fs-5 text-muted m-0 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Users
                            </h3>
                            {/* <!--end::Category title--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-6.jpg"
                                  alt=""
                                />
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Karina Clark
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Marketing Manager
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-2.jpg"
                                  alt=""
                                />
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Olivia Bold
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Software Engineer
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-9.jpg"
                                  alt=""
                                />
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Ana Clark
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  UI/UX Designer
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-14.jpg"
                                  alt=""
                                />
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Nick Pitola
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Art Director
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <img
                                  src="assets/media/avatars/300-11.jpg"
                                  alt=""
                                />
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Edward Kulnic
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  System Administrator
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Category title--> */}
                            <h3
                              className="fs-5 text-muted m-0 pt-5 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Customers
                            </h3>
                            {/* <!--end::Category title--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/volicity-9.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Company Rbranding
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  UI Design
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/tvit.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Company Re-branding
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Web Development
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/misc/infography.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Business Analytics App
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Administration
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/leaf.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  EcoLeaf App Launch
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Marketing
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <img
                                    className="w-20px h-20px"
                                    src="assets/media/svg/brand-logos/tower.svg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column justify-content-start fw-semibold">
                                <span className="fs-6 fw-semibold">
                                  Tower Group Website
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Google Adwords
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Category title--> */}
                            <h3
                              className="fs-5 text-muted m-0 pt-5 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Projects
                            </h3>
                            {/* <!--end::Category title--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
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
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Si-Fi Project by AU Themes
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #45670
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
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
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Shopix Mobile App Planning
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #45690
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Finance Monitoring SAAS Discussion
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #21090
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <a
                              href="#"
                              className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
                              <div className="d-flex flex-column">
                                <span className="fs-6 fw-semibold">
                                  Dashboard Analitics Launch
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  #34560
                                </span>
                              </div>
                              {/* <!--end::Title--> */}
                            </a>
                            {/* <!--end::Item--> */}
                          </div>
                          {/* <!--end::Items--> */}
                        </div>
                        {/* <!--end::Recently viewed--> */}
                        {/* <!--begin::Recently viewed--> */}
                        <div className="" data-kt-search-element="main">
                          {/* <!--begin::Heading--> */}
                          <div className="d-flex flex-stack fw-semibold mb-4">
                            {/* <!--begin::Label--> */}
                            <span className="text-muted fs-6 me-2">
                              Recently Searched:
                            </span>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Toolbar--> */}
                            <div
                              className="d-flex"
                              data-kt-search-element="toolbar"
                            >
                              {/* <!--begin::Preferences toggle--> */}
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
                              {/* <!--end::Preferences toggle--> */}
                              {/* <!--begin::Advanced search toggle--> */}
                              <div
                                data-kt-search-element="advanced-options-form-show"
                                className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1"
                                data-bs-toggle="tooltip"
                                title="Show more search options"
                              >
                                <i className="ki-duotone ki-down fs-2"></i>
                              </div>
                              {/* <!--end::Advanced search toggle--> */}
                            </div>
                            {/* <!--end::Toolbar--> */}
                          </div>
                          {/* <!--end::Heading--> */}
                          {/* <!--begin::Items--> */}
                          <div className="scroll-y mh-200px mh-lg-325px">
                            {/* <!--begin::Item--> */}
                            <div className="d-flex align-items-center mb-5">
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-laptop fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
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
                              {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex align-items-center mb-5">
                              {/* <!--begin::Symbol--> */}
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
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
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
                              {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex align-items-center mb-5">
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-chart fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
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
                              {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex align-items-center mb-5">
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
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
                              {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex align-items-center mb-5">
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-sms fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
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
                              {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex align-items-center mb-5">
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-bank fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
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
                              {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex align-items-center mb-5">
                              {/* <!--begin::Symbol--> */}
                              <div className="symbol symbol-40px me-4">
                                <span className="symbol-label bg-light">
                                  <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </div>
                              {/* <!--end::Symbol--> */}
                              {/* <!--begin::Title--> */}
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
                              {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Item--> */}
                          </div>
                          {/* <!--end::Items--> */}
                        </div>
                        {/* <!--end::Recently viewed--> */}
                        {/* <!--begin::Empty--> */}
                        <div
                          data-kt-search-element="empty"
                          className="text-center d-none"
                        >
                          {/* <!--begin::Icon--> */}
                          <div className="pt-10 pb-10">
                            <i className="ki-duotone ki-search-list fs-4x opacity-50">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                          </div>
                          {/* <!--end::Icon--> */}
                          {/* <!--begin::Message--> */}
                          <div className="pb-15 fw-semibold">
                            <h3 className="text-gray-600 fs-5 mb-2">
                              No result found
                            </h3>
                            <div className="text-muted fs-7">
                              Please try again with a different query
                            </div>
                          </div>
                          {/* <!--end::Message--> */}
                        </div>
                        {/* <!--end::Empty--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Preferences--> */}
                      <form
                        data-kt-search-element="advanced-options-form"
                        className="pt-1 d-none"
                      >
                        {/* <!--begin::Heading--> */}
                        <h3 className="fw-semibold text-gray-900 mb-7">
                          Advanced Search
                        </h3>
                        {/* <!--end::Heading--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-5">
                          <input
                            type="text"
                            className="form-control form-control-sm form-control-solid"
                            placeholder="Contains the word"
                            name="query"
                          />
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-5">
                          {/* <!--begin::Radio group--> */}
                          <div className="nav-group nav-group-fluid">
                            {/* <!--begin::Option--> */}
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
                            {/* <!--end::Option--> */}
                            {/* <!--begin::Option--> */}
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
                            {/* <!--end::Option--> */}
                            {/* <!--begin::Option--> */}
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
                            {/* <!--end::Option--> */}
                            {/* <!--begin::Option--> */}
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
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end::Radio group--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-5">
                          <input
                            type="text"
                            name="assignedto"
                            className="form-control form-control-sm form-control-solid"
                            placeholder="Assigned to"
                            value=""
                          />
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-5">
                          <input
                            type="text"
                            name="collaborators"
                            className="form-control form-control-sm form-control-solid"
                            placeholder="Collaborators"
                            value=""
                          />
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-5">
                          {/* <!--begin::Radio group--> */}
                          <div className="nav-group nav-group-fluid">
                            {/* <!--begin::Option--> */}
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
                            {/* <!--end::Option--> */}
                            {/* <!--begin::Option--> */}
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
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end::Radio group--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
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
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="row mb-8">
                          {/* <!--begin::Col--> */}
                          <div className="col-6">
                            <input
                              type="number"
                              name="date_number"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Lenght"
                              value=""
                            />
                          </div>
                          {/* <!--end::Col--> */}
                          {/* <!--begin::Col--> */}
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
                          {/* <!--end::Col--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Actions--> */}
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
                        {/* <!--end::Actions--> */}
                      </form>
                      {/* <!--end::Preferences--> */}
                      {/* <!--begin::Preferences--> */}
                      <form
                        data-kt-search-element="preferences"
                        className="pt-1 d-none"
                      >
                        {/* <!--begin::Heading--> */}
                        <h3 className="fw-semibold text-gray-900 mb-7">
                          Search Preferences
                        </h3>
                        {/* <!--end::Heading--> */}
                        {/* <!--begin::Input group--> */}
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
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
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
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
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
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
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
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
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
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Actions--> */}
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
                        {/* <!--end::Actions--> */}
                      </form>
                      {/* <!--end::Preferences--> */}
                    </div>
                    {/* <!--end::Menu--> */}
                  </div>
                  {/* <!--end::Search--> */}
                  {/* <!--begin::Activities--> */}
                  <div className="d-flex align-items-center ms-3 ms-lg-4">
                    {/* <!--begin::Drawer toggle--> */}
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
                    {/* <!--end::Drawer toggle--> */}
                  </div>
                  {/* <!--end::Activities--> */}
                  {/* <!--begin::Theme mode--> */}
                  <div className="d-flex align-items-center ms-3 ms-lg-4">
                    {/* <!--begin::Menu toggle--> */}
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
                    {/* <!--begin::Menu toggle--> */}
                    {/* <!--begin::Menu--> */}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                      data-kt-menu="true"
                      data-kt-element="theme-mode-menu"
                    >
                      {/* <!--begin::Menu item--> */}
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
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
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
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
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
                      {/* <!--end::Menu item--> */}
                    </div>
                    {/* <!--end::Menu--> */}
                  </div>
                  {/* <!--end::Theme mode--> */}
                  {/* <!--begin::User--> */}
                  <div
                    className="d-flex align-items-center ms-3 ms-lg-4"
                    id="kt_header_user_menu_toggle"
                  >
                    {/* <!--begin::Menu- wrapper--> */}
                    {/* <!--begin::User icon(remove this button to use user avatar as menu toggle)--> */}
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
                    {/* <!--end::User icon--> */}
                    {/* <!--begin::User account menu--> */}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                      data-kt-menu="true"
                    >
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-50px me-5">
                            <img
                              alt="Logo"
                              src="assets/media/avatars/300-1.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Username--> */}
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
                          {/* <!--end::Username--> */}
                        </div>
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu separator--> */}
                      <div className="separator my-2"></div>
                      {/* <!--end::Menu separator--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-5">
                        <a
                          href="account/overview.html"
                          className="menu-link px-5"
                        >
                          My Profile
                        </a>
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
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
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
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
                        {/* <!--begin::Menu sub--> */}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item px-3">
                            <a
                              href="account/referrals.html"
                              className="menu-link px-5"
                            >
                              Referrals
                            </a>
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item px-3">
                            <a
                              href="account/billing.html"
                              className="menu-link px-5"
                            >
                              Billing
                            </a>
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item px-3">
                            <a
                              href="account/statements.html"
                              className="menu-link px-5"
                            >
                              Payments
                            </a>
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
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
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu separator--> */}
                          <div className="separator my-2"></div>
                          {/* <!--end::Menu separator--> */}
                          {/* <!--begin::Menu item--> */}
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
                          {/* <!--end::Menu item--> */}
                        </div>
                        {/* <!--end::Menu sub--> */}
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-5">
                        <a
                          href="account/statements.html"
                          className="menu-link px-5"
                        >
                          My Statements
                        </a>
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu separator--> */}
                      <div className="separator my-2"></div>
                      {/* <!--end::Menu separator--> */}
                      {/* <!--begin::Menu item--> */}
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
                        {/* <!--begin::Menu sub--> */}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/* <!--begin::Menu item--> */}
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
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
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
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
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
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
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
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
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
                          {/* <!--end::Menu item--> */}
                        </div>
                        {/* <!--end::Menu sub--> */}
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-5 my-1">
                        <a
                          href="account/settings.html"
                          className="menu-link px-5"
                        >
                          Account Settings
                        </a>
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-5">
                        <a
                          href="authentication/layouts/corporate/sign-in.html"
                          className="menu-link px-5"
                        >
                          Sign Out
                        </a>
                      </div>
                      {/* <!--end::Menu item--> */}
                    </div>
                    {/* <!--end::User account menu--> */}
                    {/* <!--end::Menu wrapper--> */}
                  </div>
                  {/* <!--end::User --> */}
                  {/* <!--begin::Chat--> */}
                  <div className="d-flex align-items-center ms-3 ms-lg-4">
                    {/* <!--begin::Drawer wrapper--> */}
                    <div
                      className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px fw-bold position-relative"
                      id="kt_drawer_chat_toggle"
                    >
                      3{/* <!--begin::Bullet--> */}
                      <span className="d-none bullet bullet-dot bg-danger h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                      {/* <!--end::Bullet--></div> */}
                      {/* <!--end::Drawer wrapper--> */}
                    </div>
                    {/* <!--end::Chat--> */}
                    {/* <!--begin::Sidebar Toggler--> */}
                    {/* <!--end::Sidebar Toggler--> */}
                  </div>
                  {/* <!--end::Topbar--> */}
                </div>
                {/* <!--end::Container--> */}
                {/* <!--begin::Separator--> */}
                <div className="separator"></div>
                {/* <!--end::Separator--> */}
                {/* <!--begin::Container--> */}
                <div
                  className="header-menu-container container-xxl d-flex flex-stack h-lg-75px w-100"
                  id="kt_header_nav"
                >
                  {/* <!--begin::Menu wrapper--> */}
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
                    {/* <!--begin::Menu--> */}
                    <div
                      className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-state-primary menu-title-gray-800 menu-arrow-gray-500 align-items-stretch flex-grow-1 my-5 my-lg-0 px-2 px-lg-0 fw-semibold fs-6"
                      id="#kt_header_menu"
                      data-kt-menu="true"
                    >
                      {/* <!--begin:Menu item--> */}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                      >
                        {/* <!--begin:Menu link--> */}
                        <span className="menu-link py-3">
                          <span className="menu-title">Dashboards</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        {/* <!--end:Menu link--> */}
                        {/* <!--begin:Menu sub--> */}
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                          {/* <!--begin:Dashboards menu--> */}
                          <div
                            className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible"
                            data-kt-menu-dismiss="true"
                          >
                            {/* <!--begin:Row--> */}
                            <div className="row">
                              {/* <!--begin:Col--> */}
                              <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                                {/* <!--begin:Row--> */}
                                <div className="row">
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-6 mb-3">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
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
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                </div>
                                {/* <!--end:Row--> */}
                                <div className="separator separator-dashed mx-5 my-5"></div>
                                {/* <!--begin:Landing--> */}
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
                                {/* <!--end:Landing--> */}
                              </div>
                              {/* <!--end:Col--> */}
                              {/* <!--begin:Col--> */}
                              <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                                {/* <!--begin:Heading--> */}
                                <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                                  More Dashboards
                                </h4>
                                {/* <!--end:Heading--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/logistics.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Logistics
                                    </span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/website-analytics.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Website Analytics
                                    </span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/finance-performance.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Finance Performance
                                    </span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/store-analytics.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">
                                      Store Analytics
                                    </span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/social.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Social</span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/delivery.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Delivery</span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/crypto.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Crypto</span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/school.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">School</span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item p-0 m-0">
                                  {/* <!--begin:Menu link--> */}
                                  <a
                                    href="dashboards/podcast.html"
                                    className="menu-link py-2"
                                  >
                                    <span className="menu-title">Podcast</span>
                                  </a>
                                  {/* <!--end:Menu link--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                              </div>
                              {/* <!--end:Col--> */}
                            </div>
                            {/* <!--end:Row--> */}
                          </div>
                          {/* <!--end:Dashboards menu--> */}
                        </div>
                        {/* <!--end:Menu sub--> */}
                      </div>
                      {/* <!--end:Menu item--> */}
                      {/* <!--begin:Menu item--> */}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item here show"
                      >
                        {/* <!--begin:Menu link--> */}
                        <span className="menu-link py-3">
                          <span className="menu-title">Pages</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        {/* <!--end:Menu link--> */}
                        {/* <!--begin:Menu sub--> */}
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                          {/* <!--begin:Pages menu--> */}
                          <div className="menu-active-bg px-4 px-lg-0">
                            {/* <!--begin:Tabs nav--> */}
                            <div className="d-flex w-100 overflow-auto">
                              <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                                {/* <!--begin:Nav item--> */}
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
                                {/* <!--end:Nav item--> */}
                                {/* <!--begin:Nav item--> */}
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
                                {/* <!--end:Nav item--> */}
                                {/* <!--begin:Nav item--> */}
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
                                {/* <!--end:Nav item--> */}
                                {/* <!--begin:Nav item--> */}
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
                                {/* <!--end:Nav item--> */}
                                {/* <!--begin:Nav item--> */}
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
                                {/* <!--end:Nav item--> */}
                              </ul>
                            </div>
                            {/* <!--end:Tabs nav--> */}
                            {/* <!--begin:Tab content--> */}
                            <div className="tab-content py-4 py-lg-8 px-lg-7">
                              {/* <!--begin:Tab pane--> */}
                              <div
                                className="tab-pane w-lg-1000px"
                                id="kt_app_header_menu_pages_pages"
                              >
                                {/* <!--begin:Row--> */}
                                <div className="row">
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-8">
                                    {/* <!--begin:Row--> */}
                                    <div className="row">
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        {/* <!--begin:Menu heading--> */}
                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                          User Profile
                                        </h4>
                                        {/* <!--end:Menu heading--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Overview
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="pages/user-profile/projects.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Projects
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="pages/user-profile/campaigns.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Campaigns
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="pages/user-profile/documents.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Documents
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="pages/user-profile/followers.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Followers
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="pages/user-profile/activity.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Activity
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-6">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Corporate
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/about.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                About
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/team.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Our Team
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/contact.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Contact Us
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/licenses.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Licenses
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/sitemap.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Sitemap
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-0">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Careers
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/careers/list.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Careers List
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/careers/apply.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Careers Apply
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-6">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            FAQ
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/faq/classNameic.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                FAQ classNameic
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/faq/extended.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                FAQ Extended
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-6">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Blog
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/blog/home.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Blog Home
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/blog/post.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Blog Post
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-0">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Pricing
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/pricing.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Column Pricing
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/pricing/table.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Table Pricing
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-3 mb-6 mb-lg-0">
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-0">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Social
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/social/feeds.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Feeds
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/social/activity.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Activty
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/social/followers.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Followers
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="pages/social/settings.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Settings
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                    </div>
                                    {/* <!--end:Row--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-4">
                                    <img
                                      src="assets/media/stock/600x600/img-82.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                  {/* <!--end:Col--> */}
                                </div>
                                {/* <!--end:Row--> */}
                              </div>
                              {/* <!--end:Tab pane--> */}
                              {/* <!--begin:Tab pane--> */}
                              <div
                                className="tab-pane active w-lg-600px"
                                id="kt_app_header_menu_pages_account"
                              >
                                {/* <!--begin:Row--> */}
                                <div className="row">
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-5 mb-6 mb-lg-0">
                                    {/* <!--begin:Row--> */}
                                    <div className="row">
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-6">
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/overview.html"
                                            className="menu-link active"
                                          >
                                            <span className="menu-title">
                                              Overview
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/settings.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Settings
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/security.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Security
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/activity.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Activity
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/billing.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Billing
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-6">
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/statements.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Statements
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/referrals.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Referrals
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/api-keys.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              API Keys
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item p-0 m-0">
                                          {/* <!--begin:Menu link--> */}
                                          <a
                                            href="account/logs.html"
                                            className="menu-link"
                                          >
                                            <span className="menu-title">
                                              Logs
                                            </span>
                                          </a>
                                          {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                    </div>
                                    {/* <!--end:Row--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-7">
                                    <img
                                      src="assets/media/stock/900x600/46.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                  {/* <!--end:Col--> */}
                                </div>
                                {/* <!--end:Row--> */}
                              </div>
                              {/* <!--end:Tab pane--> */}
                              {/* <!--begin:Tab pane--> */}
                              <div
                                className="tab-pane w-lg-1000px"
                                id="kt_app_header_menu_pages_authentication"
                              >
                                {/* <!--begin:Row--> */}
                                <div className="row">
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    {/* <!--begin:Menu section--> */}
                                    <div className="mb-6">
                                      {/* <!--begin:Menu heading--> */}
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Corporate Layout
                                      </h4>
                                      {/* <!--end:Menu heading--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/corporate/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-In
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/corporate/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-Up
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/corporate/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/corporate/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/corporate/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                    </div>
                                    {/* <!--end:Menu section--> */}
                                    {/* <!--begin:Menu section--> */}
                                    <div className="mb-0">
                                      {/* <!--begin:Menu heading--> */}
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Overlay Layout
                                      </h4>
                                      {/* <!--end:Menu heading--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/overlay/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-In
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/overlay/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-Up
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/overlay/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/overlay/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/overlay/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                    </div>
                                    {/* <!--end:Menu section--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    {/* <!--begin:Menu section--> */}
                                    <div className="mb-6">
                                      {/* <!--begin:Menu heading--> */}
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Creative Layout
                                      </h4>
                                      {/* <!--end:Menu heading--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/creative/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-in
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/creative/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-up
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/creative/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/creative/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/creative/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                    </div>
                                    {/* <!--end:Menu section--> */}
                                    {/* <!--begin:Menu section--> */}
                                    <div className="mb-6">
                                      {/* <!--begin:Menu heading--> */}
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Fancy Layout
                                      </h4>
                                      {/* <!--end:Menu heading--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/fancy/sign-in.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-In
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/fancy/sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Sign-Up
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/fancy/two-factor.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Two-Factor
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/fancy/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/layouts/fancy/new-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            New Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                    </div>
                                    {/* <!--end:Menu section--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    {/* <!--begin:Menu section--> */}
                                    <div className="mb-0">
                                      {/* <!--begin:Menu heading--> */}
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        General
                                      </h4>
                                      {/* <!--end:Menu heading--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/extended/multi-steps-sign-up.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Multi-Steps Sign-Up
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/general/welcome.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Welcome Message
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/general/verify-email.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Verify Email
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/general/coming-soon.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Coming Soon
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/general/password-confirmation.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Password Confirmation
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/general/account-deactivated.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Account Deactivation
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/general/error-404.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Error 404
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/general/error-500.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Error 500
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                    </div>
                                    {/* <!--end:Menu section--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-3 mb-6 mb-lg-0">
                                    {/* <!--begin:Menu section--> */}
                                    <div className="mb-0">
                                      {/* <!--begin:Menu heading--> */}
                                      <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                        Email Templates
                                      </h4>
                                      {/* <!--end:Menu heading--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/email/welcome-message.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Welcome Message
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/email/reset-password.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Reset Password
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/email/subscription-confirmed.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Subscription Confirmed
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/email/card-declined.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Credit Card Declined
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/email/promo-1.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Promo 1
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/email/promo-2.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Promo 2
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                      {/* <!--begin:Menu item--> */}
                                      <div className="menu-item p-0 m-0">
                                        {/* <!--begin:Menu link--> */}
                                        <a
                                          href="authentication/email/promo-3.html"
                                          className="menu-link"
                                        >
                                          <span className="menu-title">
                                            Promo 3
                                          </span>
                                        </a>
                                        {/* <!--end:Menu link--> */}
                                      </div>
                                      {/* <!--end:Menu item--> */}
                                    </div>
                                    {/* <!--end:Menu section--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                </div>
                                {/* <!--end:Row--> */}
                              </div>
                              {/* <!--end:Tab pane--> */}
                              {/* <!--begin:Tab pane--> */}
                              <div
                                className="tab-pane w-lg-1000px"
                                id="kt_app_header_menu_pages_utilities"
                              >
                                {/* <!--begin:Row--> */}
                                <div className="row">
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-7">
                                    {/* <!--begin:Row--> */}
                                    <div className="row">
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-4 mb-6 mb-lg-0">
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-0">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            General Modals
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/general/invite-friends.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Invite Friends
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/general/view-users.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                View Users
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/general/select-users.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Select Users
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/general/upgrade-plan.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Upgrade Plan
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/general/share-earn.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Share & Earn
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/forms/new-target.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                New Target
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/forms/new-card.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                New Card
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/forms/new-address.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                New Address
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/forms/create-api-key.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create API Key
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/forms/bidding.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Bidding
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-4 mb-6 mb-lg-0">
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-6">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Advanced Modals
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/create-app.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create App
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/create-campaign.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Campaign
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/create-account.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Business Acc
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/create-project.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Project
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/top-up-wallet.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Top Up Wallet
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/offer-a-deal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Offer a Deal
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/two-factor-authentication.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Two Factor Auth
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-0">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Search
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/search/horizontal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Horizontal
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/search/vertical.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Vertical
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/search/users.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Users
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/search/select-location.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Select Location
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                      {/* <!--begin:Col--> */}
                                      <div className="col-lg-4 mb-6 mb-lg-0">
                                        {/* <!--begin:Menu section--> */}
                                        <div className="mb-0">
                                          {/* <!--begin:Menu heading--> */}
                                          <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                            Wizards
                                          </h4>
                                          {/* <!--end:Menu heading--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/horizontal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Horizontal
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/vertical.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Vertical
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/two-factor-authentication.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Two Factor Auth
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/create-app.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create App
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/create-campaign.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Campaign
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/create-account.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Account
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/create-project.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Create Project
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/modals/wizards/top-up-wallet.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Top Up Wallet
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                          {/* <!--begin:Menu item--> */}
                                          <div className="menu-item p-0 m-0">
                                            {/* <!--begin:Menu link--> */}
                                            <a
                                              href="utilities/wizards/offer-a-deal.html"
                                              className="menu-link"
                                            >
                                              <span className="menu-title">
                                                Offer a Deal
                                              </span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                          </div>
                                          {/* <!--end:Menu item--> */}
                                        </div>
                                        {/* <!--end:Menu section--> */}
                                      </div>
                                      {/* <!--end:Col--> */}
                                    </div>
                                    {/* <!--end:Row--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-5 pe-lg-5">
                                    <img
                                      src="assets/media/stock/600x600/img-84.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                  {/* <!--end:Col--> */}
                                </div>
                                {/* <!--end:Row--> */}
                              </div>
                              {/* <!--end:Tab pane--> */}
                              {/* <!--begin:Tab pane--> */}
                              <div
                                className="tab-pane w-lg-500px"
                                id="kt_app_header_menu_pages_widgets"
                              >
                                {/* <!--begin:Row--> */}
                                <div className="row">
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-4 mb-6 mb-lg-0">
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
                                      <a
                                        href="widgets/lists.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Lists
                                        </span>
                                      </a>
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
                                      <a
                                        href="widgets/statistics.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Statistics
                                        </span>
                                      </a>
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
                                      <a
                                        href="widgets/charts.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Charts
                                        </span>
                                      </a>
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
                                      <a
                                        href="widgets/mixed.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Mixed
                                        </span>
                                      </a>
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
                                      <a
                                        href="widgets/tables.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Tables
                                        </span>
                                      </a>
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                    {/* <!--begin:Menu item--> */}
                                    <div className="menu-item p-0 m-0">
                                      {/* <!--begin:Menu link--> */}
                                      <a
                                        href="widgets/feeds.html"
                                        className="menu-link"
                                      >
                                        <span className="menu-title">
                                          Feeds
                                        </span>
                                      </a>
                                      {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                  </div>
                                  {/* <!--end:Col--> */}
                                  {/* <!--begin:Col--> */}
                                  <div className="col-lg-8">
                                    <img
                                      src="assets/media/stock/900x600/44.jpg"
                                      className="rounded mw-100"
                                      alt=""
                                    />
                                  </div>
                                  {/* <!--end:Col--> */}
                                </div>
                                {/* <!--end:Row--> */}
                              </div>
                              {/* <!--end:Tab pane--> */}
                            </div>
                            {/* <!--end:Tab content--> */}
                          </div>
                          {/* <!--end:Pages menu--> */}
                        </div>
                        {/* <!--end:Menu sub--> */}
                      </div>
                      {/* <!--end:Menu item--> */}
                      {/* <!--begin:Menu item--> */}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                      >
                        {/* <!--begin:Menu link--> */}
                        <span className="menu-link py-3">
                          <span className="menu-title">Apps</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        {/* <!--end:Menu link--> */}
                        {/* <!--begin:Menu sub--> */}
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/targets.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Targets</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/budget.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Budget</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/users.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Users</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/files.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Files</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/activity.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Activity</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/projects/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
                            <span className="menu-link py-3">
                              <span className="menu-icon">
                                <i className="ki-duotone ki-handcart fs-2"></i>
                              </span>
                              <span className="menu-title">eCommerce</span>
                              <span className="menu-arrow"></span>
                            </span>
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Catalog</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion menu-sub-indention"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Sales</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-accordion">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion menu-sub-indention"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Customers</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-accordion">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion menu-sub-indention"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Reports</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-accordion">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
                                    <a
                                      className="menu-link py-3"
                                      href="apps/ecommerce/reports/sales.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                      </span>
                                      <span className="menu-title">Sales</span>
                                    </a>
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/ecommerce/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/overview.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Overview</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Tickets</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Tutorials</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/faq.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">FAQ</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/licenses.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Licenses</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/support-center/contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Contact Us</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Users</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Roles</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div
                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                data-kt-menu-placement="right-start"
                                className="menu-item menu-lg-down-accordion"
                              >
                                {/* <!--begin:Menu link--> */}
                                <span className="menu-link py-3">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Profile</span>
                                  <span className="menu-arrow"></span>
                                </span>
                                {/* <!--end:Menu link--> */}
                                {/* <!--begin:Menu sub--> */}
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                  {/* <!--begin:Menu item--> */}
                                  <div className="menu-item">
                                    {/* <!--begin:Menu link--> */}
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
                                    {/* <!--end:Menu link--> */}
                                  </div>
                                  {/* <!--end:Menu item--> */}
                                </div>
                                {/* <!--end:Menu sub--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/file-manager/folders.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Folders</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/file-manager/files.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Files</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/file-manager/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/inbox/compose.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Compose</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div
                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            className="menu-item menu-lg-down-accordion"
                          >
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                            {/* <!--begin:Menu sub--> */}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
                                <a
                                  className="menu-link py-3"
                                  href="apps/chat/group.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                  </span>
                                  <span className="menu-title">Group Chat</span>
                                </a>
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                              {/* <!--begin:Menu item--> */}
                              <div className="menu-item">
                                {/* <!--begin:Menu link--> */}
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
                                {/* <!--end:Menu link--> */}
                              </div>
                              {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end:Menu sub--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                        </div>
                        {/* <!--end:Menu sub--> */}
                      </div>
                      {/* <!--end:Menu item--> */}
                      {/* <!--begin:Menu item--> */}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="bottom-start"
                        className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                      >
                        {/* <!--begin:Menu link--> */}
                        <span className="menu-link py-3">
                          <span className="menu-title">Help</span>
                          <span className="menu-arrow d-lg-none"></span>
                        </span>
                        {/* <!--end:Menu link--> */}
                        {/* <!--begin:Menu sub--> */}
                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                          {/* <!--begin:Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                          {/* <!--begin:Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin:Menu link--> */}
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
                            {/* <!--end:Menu link--> */}
                          </div>
                          {/* <!--end:Menu item--> */}
                        </div>
                        {/* <!--end:Menu sub--> */}
                      </div>
                      {/* <!--end:Menu item--> */}
                    </div>
                    {/* <!--end::Menu--> */}
                    {/* <!--begin::Actions--> */}
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
                    {/* <!--end::Actions--> */}
                  </div>
                  {/* <!--end::Menu wrapper--> */}
                </div>
                {/* <!--end::Container--> */}
              </div>
              {/* <!--end::Header--> */}
              {/* <!--begin::Toolbar--> */}
              <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
                {/* <!--begin::Container--> */}
                <div
                  id="kt_toolbar_container"
                  className="container-xxl d-flex flex-stack flex-wrap"
                >
                  {/* <!--begin::Page title--> */}
                  <div className="page-title d-flex flex-column me-3">
                    {/* <!--begin::Title--> */}
                    <h1 className="d-flex text-gray-900 fw-bold my-1 fs-3">
                      Account Overview
                    </h1>
                    {/* <!--end::Title--> */}
                    {/* <!--begin::Breadcrumb--> */}
                    <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7 my-1">
                      {/* <!--begin::Item--> */}
                      <li className="breadcrumb-item text-gray-600">
                        <a
                          href="index.html"
                          className="text-gray-600 text-hover-primary"
                        >
                          Home
                        </a>
                      </li>
                      {/* <!--end::Item--> */}
                      {/* <!--begin::Item--> */}
                      <li className="breadcrumb-item text-gray-600">Account</li>
                      {/* <!--end::Item--> */}
                      {/* <!--begin::Item--> */}
                      <li className="breadcrumb-item text-gray-500">
                        Overview
                      </li>
                      {/* <!--end::Item--> */}
                    </ul>
                    {/* <!--end::Breadcrumb--> */}
                  </div>
                  {/* <!--end::Page title--> */}
                  {/* <!--begin::Actions--> */}
                  <div className="d-flex align-items-center py-2 py-md-1">
                    {/* <!--begin::Wrapper--> */}
                    <div className="me-3">
                      {/* <!--begin::Menu--> */}
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
                      {/* <!--begin::Menu 1--> */}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        id="kt_menu_65a10adf04657"
                      >
                        {/* <!--begin::Header--> */}
                        <div className="px-7 py-5">
                          <div className="fs-5 text-gray-900 fw-bold">
                            Filter Options
                          </div>
                        </div>
                        {/* <!--end::Header--> */}
                        {/* <!--begin::Menu separator--> */}
                        <div className="separator border-gray-200"></div>
                        {/* <!--end::Menu separator--> */}
                        {/* <!--begin::Form--> */}
                        <div className="px-7 py-5">
                          {/* <!--begin::Input group--> */}
                          <div className="mb-10">
                            {/* <!--begin::Label--> */}
                            <label className="form-label fw-semibold">
                              Status:
                            </label>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input--> */}
                            <div>
                              <select
                                className="form-select form-select-solid"
                                multiple="multiple"
                                data-kt-select2="true"
                                data-close-on-select="false"
                                data-placeholder="Select option"
                                data-dropdown-parent="#kt_menu_65a10adf04657"
                                data-allow-clear="true"
                              >
                                <option></option>
                                <option value="1">Approved</option>
                                <option value="2">Pending</option>
                                <option value="2">In Process</option>
                                <option value="2">Rejected</option>
                              </select>
                            </div>
                            {/* <!--end::Input--> */}
                          </div>
                          {/* <!--end::Input group--> */}
                          {/* <!--begin::Input group--> */}
                          <div className="mb-10">
                            {/* <!--begin::Label--> */}
                            <label className="form-label fw-semibold">
                              Member Type:
                            </label>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Options--> */}
                            <div className="d-flex">
                              {/* <!--begin::Options--> */}
                              <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="1"
                                />
                                <span className="form-check-label">Author</span>
                              </label>
                              {/* <!--end::Options--> */}
                              {/* <!--begin::Options--> */}
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
                              {/* <!--end::Options--> */}
                            </div>
                            {/* <!--end::Options--> */}
                          </div>
                          {/* <!--end::Input group--> */}
                          {/* <!--begin::Input group--> */}
                          <div className="mb-10">
                            {/* <!--begin::Label--> */}
                            <label className="form-label fw-semibold">
                              Notifications:
                            </label>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Switch--> */}
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
                            {/* <!--end::Switch--> */}
                          </div>
                          {/* <!--end::Input group--> */}
                          {/* <!--begin::Actions--> */}
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
                          {/* <!--end::Actions--> */}
                        </div>
                        {/* <!--end::Form--> */}
                      </div>
                      {/* <!--end::Menu 1--> */}
                      {/* <!--end::Menu--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                    {/* <!--begin::Button--> */}
                    <a
                      href="#"
                      className="btn btn-primary fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_app"
                      id="kt_toolbar_primary_button"
                    >
                      Create
                    </a>
                    {/* <!--end::Button--> */}
                  </div>
                  {/* <!--end::Actions--> */}
                </div>
                {/* <!--end::Container--> */}
              </div>
              {/* <!--end::Toolbar--> */}
              {/* <!--begin::Container--> */}
              <div
                id="kt_content_container"
                className="d-flex flex-column-fluid align-items-start container-xxl"
              >
                {/* <!--begin::Post--> */}
                <div className="content flex-row-fluid" id="kt_content">
                  {/* <!--begin::Navbar--> */}
                  <div className="card mb-5 mb-xl-10">
                    <div className="card-body pt-9 pb-0">
                      {/* <!--begin::Details--> */}
                      <div className="d-flex flex-wrap flex-sm-nowrap">
                        {/* <!--begin: Pic--> */}
                        <div className="me-7 mb-4">
                          <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            <img
                              src="assets/media/avatars/300-1.jpg"
                              alt="image"
                            />
                            <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                          </div>
                        </div>
                        {/* <!--end::Pic--> */}
                        {/* <!--begin::Info--> */}
                        <div className="flex-grow-1">
                          {/* <!--begin::Title--> */}
                          <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            {/* <!--begin::User--> */}
                            <div className="d-flex flex-column">
                              {/* <!--begin::Name--> */}
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
                              {/* <!--end::Name--> */}
                              {/* <!--begin::Info--> */}
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
                              {/* <!--end::Info--> */}
                            </div>
                            {/* <!--end::User--> */}
                            {/* <!--begin::Actions--> */}
                            <div className="d-flex my-4">
                              <a
                                href="#"
                                className="btn btn-sm btn-light me-2"
                                id="kt_user_follow_button"
                              >
                                <i className="ki-duotone ki-check fs-3 d-none"></i>
                                {/* <!--begin::Indicator label--> */}
                                <span className="indicator-label">Follow</span>
                                {/* <!--end::Indicator label--> */}
                                {/* <!--begin::Indicator progress--> */}
                                <span className="indicator-progress">
                                  Please wait...
                                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                                {/* <!--end::Indicator progress--> */}
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm btn-primary me-3"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_offer_a_deal"
                              >
                                Hire Me
                              </a>
                              {/* <!--begin::Menu--> */}
                              <div className="me-0">
                                <button
                                  className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                  data-kt-menu-trigger="click"
                                  data-kt-menu-placement="bottom-end"
                                >
                                  <i className="ki-solid ki-dots-horizontal fs-2x"></i>
                                </button>
                                {/* <!--begin::Menu 3--> */}
                                <div
                                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                  data-kt-menu="true"
                                >
                                  {/* <!--begin::Heading--> */}
                                  <div className="menu-item px-3">
                                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                      Payments
                                    </div>
                                  </div>
                                  {/* <!--end::Heading--> */}
                                  {/* <!--begin::Menu item--> */}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">
                                      Create Invoice
                                    </a>
                                  </div>
                                  {/* <!--end::Menu item--> */}
                                  {/* <!--begin::Menu item--> */}
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
                                  {/* <!--end::Menu item--> */}
                                  {/* <!--begin::Menu item--> */}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">
                                      Generate Bill
                                    </a>
                                  </div>
                                  {/* <!--end::Menu item--> */}
                                  {/* <!--begin::Menu item--> */}
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
                                    {/* <!--begin::Menu sub--> */}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                      {/* <!--begin::Menu item--> */}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Plans
                                        </a>
                                      </div>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu item--> */}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Billing
                                        </a>
                                      </div>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu item--> */}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Statements
                                        </a>
                                      </div>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu separator--> */}
                                      <div className="separator my-2"></div>
                                      {/* <!--end::Menu separator--> */}
                                      {/* <!--begin::Menu item--> */}
                                      <div className="menu-item px-3">
                                        <div className="menu-content px-3">
                                          {/* <!--begin::Switch--> */}
                                          <label className="form-check form-switch form-check-custom form-check-solid">
                                            {/* <!--begin::Input--> */}
                                            <input
                                              className="form-check-input w-30px h-20px"
                                              type="checkbox"
                                              value="1"
                                              checked="checked"
                                              name="notifications"
                                            />
                                            {/* <!--end::Input--> */}
                                            {/* <!--end::Label--> */}
                                            <span className="form-check-label text-muted fs-6">
                                              Recuring
                                            </span>
                                            {/* <!--end::Label--> */}
                                          </label>
                                          {/* <!--end::Switch--> */}
                                        </div>
                                      </div>
                                      {/* <!--end::Menu item--> */}
                                    </div>
                                    {/* <!--end::Menu sub--> */}
                                  </div>
                                  {/* <!--end::Menu item--> */}
                                  {/* <!--begin::Menu item--> */}
                                  <div className="menu-item px-3 my-1">
                                    <a href="#" className="menu-link px-3">
                                      Settings
                                    </a>
                                  </div>
                                  {/* <!--end::Menu item--> */}
                                </div>
                                {/* <!--end::Menu 3--> */}
                              </div>
                              {/* <!--end::Menu--> */}
                            </div>
                            {/* <!--end::Actions--> */}
                          </div>
                          {/* <!--end::Title--> */}
                          {/* <!--begin::Stats--> */}
                          <div className="d-flex flex-wrap flex-stack">
                            {/* <!--begin::Wrapper--> */}
                            <div className="d-flex flex-column flex-grow-1 pe-8">
                              {/* <!--begin::Stats--> */}
                              <div className="d-flex flex-wrap">
                                {/* <!--begin::Stat--> */}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  {/* <!--begin::Number--> */}
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
                                  {/* <!--end::Number--> */}
                                  {/* <!--begin::Label--> */}
                                  <div className="fw-semibold fs-6 text-gray-500">
                                    Earnings
                                  </div>
                                  {/* <!--end::Label--> */}
                                </div>
                                {/* <!--end::Stat--> */}
                                {/* <!--begin::Stat--> */}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  {/* <!--begin::Number--> */}
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
                                  {/* <!--end::Number--> */}
                                  {/* <!--begin::Label--> */}
                                  <div className="fw-semibold fs-6 text-gray-500">
                                    Projects
                                  </div>
                                  {/* <!--end::Label--> */}
                                </div>
                                {/* <!--end::Stat--> */}
                                {/* <!--begin::Stat--> */}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  {/* <!--begin::Number--> */}
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
                                  {/* <!--end::Number--> */}
                                  {/* <!--begin::Label--> */}
                                  <div className="fw-semibold fs-6 text-gray-500">
                                    Success Rate
                                  </div>
                                  {/* <!--end::Label--> */}
                                </div>
                                {/* <!--end::Stat--> */}
                              </div>
                              {/* <!--end::Stats--> */}
                            </div>
                            {/* <!--end::Wrapper--> */}
                            {/* <!--begin::Progress--> */}
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
                            {/* <!--end::Progress--> */}
                          </div>
                          {/* <!--end::Stats--> */}
                        </div>
                        {/* <!--end::Info--> */}
                      </div>
                      {/* <!--end::Details--> */}
                      {/* <!--begin::Navs--> */}
                      <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5 active"
                            href="account/overview.html"
                          >
                            Overview
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/settings.html"
                          >
                            Settings
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/security.html"
                          >
                            Security
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/activity.html"
                          >
                            Activity
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/billing.html"
                          >
                            Billing
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/statements.html"
                          >
                            Statements
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/referrals.html"
                          >
                            Referrals
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/api-keys.html"
                          >
                            API Keys
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                        {/* <!--begin::Nav item--> */}
                        <li className="nav-item mt-2">
                          <a
                            className="nav-link text-active-primary ms-0 me-10 py-5"
                            href="account/logs.html"
                          >
                            Logs
                          </a>
                        </li>
                        {/* <!--end::Nav item--> */}
                      </ul>
                      {/* <!--begin::Navs--> */}
                    </div>
                  </div>
                  {/* <!--end::Navbar--> */}
                  {/* <!--begin::details View--> */}
                  <div
                    className="card mb-5 mb-xl-10"
                    id="kt_profile_details_view"
                  >
                    {/* <!--begin::Card header--> */}
                    <div className="card-header cursor-pointer">
                      {/* <!--begin::Card title--> */}
                      <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Profile Details</h3>
                      </div>
                      {/* <!--end::Card title--> */}
                      {/* <!--begin::Action--> */}
                      <a
                        href="account/settings.html"
                        className="btn btn-sm btn-primary align-self-center"
                      >
                        Edit Profile
                      </a>
                      {/* <!--end::Action--> */}
                    </div>
                    {/* <!--begin::Card header--> */}
                    {/* <!--begin::Card body--> */}
                    <div className="card-body p-9">
                      {/* <!--begin::Row--> */}
                      <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-4 fw-semibold text-muted">
                          Full Name
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">
                            Max Smith
                          </span>
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Row--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-4 fw-semibold text-muted">
                          Company
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-8 fv-row">
                          <span className="fw-semibold text-gray-800 fs-6">
                            Keenthemes
                          </span>
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-4 fw-semibold text-muted">
                          Contact Phone
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Phone number must be active"
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                          </span>
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-8 d-flex align-items-center">
                          <span className="fw-bold fs-6 text-gray-800 me-2">
                            044 3276 454 935
                          </span>
                          <span className="badge badge-success">Verified</span>
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-4 fw-semibold text-muted">
                          Company Site
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-8">
                          <a
                            href="#"
                            className="fw-semibold fs-6 text-gray-800 text-hover-primary"
                          >
                            keenthemes.com
                          </a>
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-4 fw-semibold text-muted">
                          Country
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Country of origination"
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                          </span>
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">
                            Germany
                          </span>
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="row mb-7">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-4 fw-semibold text-muted">
                          Communication
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">
                            Email, Phone
                          </span>
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="row mb-10">
                        {/* <!--begin::Label--> */}
                        <label className="col-lg-4 fw-semibold text-muted">
                          Allow Changes
                        </label>
                        {/* <!--begin::Label--> */}
                        {/* <!--begin::Label--> */}
                        <div className="col-lg-8">
                          <span className="fw-semibold fs-6 text-gray-800">
                            Yes
                          </span>
                        </div>
                        {/* <!--begin::Label--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Notice--> */}
                      <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                        {/* <!--begin::Icon--> */}
                        <i className="ki-duotone ki-information fs-2tx text-warning me-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-stack flex-grow-1">
                          {/* <!--begin::Content--> */}
                          <div className="fw-semibold">
                            <h4 className="text-gray-900 fw-bold">
                              We need your attention!
                            </h4>
                            <div className="fs-6 text-gray-700">
                              Your payment was declined. To start using tools,
                              please
                              <a
                                className="fw-bold"
                                href="account/billing.html"
                              >
                                Add Payment Method
                              </a>
                              .
                            </div>
                          </div>
                          {/* <!--end::Content--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                      </div>
                      {/* <!--end::Notice--> */}
                    </div>
                    {/* <!--end::Card body--> */}
                  </div>
                  {/* <!--end::details View--> */}
                  {/* <!--begin::Row--> */}
                  <div className="row gy-5 g-xl-10">
                    {/* <!--begin::Col--> */}
                    <div className="col-xl-8 mb-xl-10">
                      {/* <!--begin::Chart widget 5--> */}
                      <div className="card card-flush h-lg-100">
                        {/* <!--begin::Header--> */}
                        <div className="card-header flex-nowrap pt-5">
                          {/* <!--begin::Title--> */}
                          <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold text-gray-900">
                              Top Selling Categories
                            </span>
                            <span className="text-gray-500 pt-2 fw-semibold fs-6">
                              8k social visitors
                            </span>
                          </h3>
                          {/* <!--end::Title--> */}
                          {/* <!--begin::Toolbar--> */}
                          <div className="card-toolbar">
                            {/* <!--begin::Menu--> */}
                            <button
                              className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-end"
                              data-kt-menu-overflow="true"
                            >
                              <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                              </i>
                            </button>
                            {/* <!--begin::Menu 2--> */}
                            <div
                              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                              data-kt-menu="true"
                            >
                              {/* <!--begin::Menu item--> */}
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                  Quick Actions
                                </div>
                              </div>
                              {/* <!--end::Menu item--> */}
                              {/* <!--begin::Menu separator--> */}
                              <div className="separator mb-3 opacity-75"></div>
                              {/* <!--end::Menu separator--> */}
                              {/* <!--begin::Menu item--> */}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  New Ticket
                                </a>
                              </div>
                              {/* <!--end::Menu item--> */}
                              {/* <!--begin::Menu item--> */}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  New Customer
                                </a>
                              </div>
                              {/* <!--end::Menu item--> */}
                              {/* <!--begin::Menu item--> */}
                              <div
                                className="menu-item px-3"
                                data-kt-menu-trigger="hover"
                                data-kt-menu-placement="right-start"
                              >
                                {/* <!--begin::Menu item--> */}
                                <a href="#" className="menu-link px-3">
                                  <span className="menu-title">New Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                {/* <!--end::Menu item--> */}
                                {/* <!--begin::Menu sub--> */}
                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                  {/* <!--begin::Menu item--> */}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">
                                      Admin Group
                                    </a>
                                  </div>
                                  {/* <!--end::Menu item--> */}
                                  {/* <!--begin::Menu item--> */}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">
                                      Staff Group
                                    </a>
                                  </div>
                                  {/* <!--end::Menu item--> */}
                                  {/* <!--begin::Menu item--> */}
                                  <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">
                                      Member Group
                                    </a>
                                  </div>
                                  {/* <!--end::Menu item--> */}
                                </div>
                                {/* <!--end::Menu sub--> */}
                              </div>
                              {/* <!--end::Menu item--> */}
                              {/* <!--begin::Menu item--> */}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  New Contact
                                </a>
                              </div>
                              {/* <!--end::Menu item--> */}
                              {/* <!--begin::Menu separator--> */}
                              <div className="separator mt-3 opacity-75"></div>
                              {/* <!--end::Menu separator--> */}
                              {/* <!--begin::Menu item--> */}
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a
                                    className="btn btn-primary btn-sm px-4"
                                    href="#"
                                  >
                                    Generate Reports
                                  </a>
                                </div>
                              </div>
                              {/* <!--end::Menu item--> */}
                            </div>
                            {/* <!--end::Menu 2--> */}
                            {/* <!--end::Menu--> */}
                          </div>
                          {/* <!--end::Toolbar--> */}
                        </div>
                        {/* <!--end::Header--> */}
                        {/* <!--begin::Body--> */}
                        <div className="card-body pt-5 ps-6">
                          <div
                            id="kt_charts_widget_5"
                            className="min-h-auto"
                          ></div>
                        </div>
                        {/* <!--end::Body--> */}
                      </div>
                      {/* <!--end::Chart widget 5--> */}
                    </div>
                    {/* <!--end::Col--> */}
                    {/* <!--begin::Col--> */}
                    <div className="col-xl-4 mb-5 mb-xl-10">
                      {/* <!--begin::Engage widget 1--> */}
                      <div className="card h-md-100" dir="ltr">
                        {/* <!--begin::Body--> */}
                        <div className="card-body d-flex flex-column flex-center">
                          {/* <!--begin::Heading--> */}
                          <div className="mb-2">
                            {/* <!--begin::Title--> */}
                            <h1 className="fw-semibold text-gray-800 text-center lh-lg">
                              Have you tried
                              <br />
                              new
                              <span className="fw-bolder">
                                Mobile Application ?
                              </span>
                            </h1>
                            {/* <!--end::Title--> */}
                            {/* <!--begin::Illustration--> */}
                            <div className="py-10 text-center">
                              <img
                                src="assets/media/svg/illustrations/easy/1.svg"
                                className="theme-light-show w-200px"
                                alt=""
                              />
                              <img
                                src="assets/media/svg/illustrations/easy/1-dark.svg"
                                className="theme-dark-show w-200px"
                                alt=""
                              />
                            </div>
                            {/* <!--end::Illustration--> */}
                          </div>
                          {/* <!--end::Heading--> */}
                          {/* <!--begin::Links--> */}
                          <div className="text-center mb-1">
                            {/* <!--begin::Link--> */}
                            <a
                              className="btn btn-sm btn-primary me-2"
                              data-bs-target="#kt_modal_create_app"
                              data-bs-toggle="modal"
                            >
                              Try now
                            </a>
                            {/* <!--end::Link--> */}
                            {/* <!--begin::Link--> */}
                            <a
                              className="btn btn-sm btn-light"
                              href="apps/invoices/view/invoice-1.html"
                            >
                              Learn more
                            </a>
                            {/* <!--end::Link--> */}
                          </div>
                          {/* <!--end::Links--> */}
                        </div>
                        {/* <!--end::Body--> */}
                      </div>
                      {/* <!--end::Engage widget 1--> */}
                    </div>
                    {/* <!--end::Col--> */}
                  </div>
                  {/* <!--end::Row--> */}
                  {/* <!--begin::Row--> */}
                  <div className="row gy-5 g-xl-10">
                    {/* <!--begin::Col--> */}
                    <div className="col-xl-4">
                      {/* <!--begin::List widget 5--> */}
                      <div className="card card-flush h-xl-100">
                        {/* <!--begin::Header--> */}
                        <div className="card-header pt-7">
                          {/* <!--begin::Title--> */}
                          <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold text-gray-900">
                              Product Delivery
                            </span>
                            <span className="text-gray-500 mt-1 fw-semibold fs-6">
                              1M Products Shipped so far
                            </span>
                          </h3>
                          {/* <!--end::Title--> */}
                          {/* <!--begin::Toolbar--> */}
                          <div className="card-toolbar">
                            <a
                              href="apps/ecommerce/sales/details.html"
                              className="btn btn-sm btn-light"
                            >
                              Order Details
                            </a>
                          </div>
                          {/* <!--end::Toolbar--> */}
                        </div>
                        {/* <!--end::Header--> */}
                        {/* <!--begin::Body--> */}
                        <div className="card-body">
                          {/* <!--begin::Scroll--> */}
                          <div
                            className="hover-scroll-overlay-y pe-6 me-n6"
                            // style="height: 415px"
                          >
                            {/* <!--begin::Item--> */}
                            <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                              {/* <!--begin::Info--> */}
                              <div className="d-flex flex-stack mb-3">
                                {/* <!--begin::Wrapper--> */}
                                <div className="me-3">
                                  {/* <!--begin::Icon--> */}
                                  <img
                                    src="assets/media/stock/ecommerce/210.png"
                                    className="w-50px ms-n1 me-1"
                                    alt=""
                                  />
                                  {/* <!--end::Icon--> */}
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Elephant 1802
                                  </a>
                                  {/* <!--end::Title--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Action--> */}
                                <div className="m-0">
                                  {/* <!--begin::Menu--> */}
                                  <button
                                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-overflow="true"
                                  >
                                    <i className="ki-duotone ki-dots-square fs-1">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </button>
                                  {/* <!--begin::Menu 2--> */}
                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                    data-kt-menu="true"
                                  >
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                        Quick Actions
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mb-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div
                                      className="menu-item px-3"
                                      data-kt-menu-trigger="hover"
                                      data-kt-menu-placement="right-start"
                                    >
                                      {/* <!--begin::Menu item--> */}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">
                                          New Group
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </a>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu sub--> */}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Admin Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Staff Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Member Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                      </div>
                                      {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mt-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a
                                          className="btn btn-primary btn-sm px-4"
                                          href="#"
                                        >
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                  </div>
                                  {/* <!--end::Menu 2--> */}
                                  {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Action--> */}
                              </div>
                              {/* <!--end::Info--> */}
                              {/* <!--begin::Customer--> */}
                              <div className="d-flex flex-stack">
                                {/* <!--begin::Name--> */}
                                <span className="text-gray-500 fw-bold">
                                  To:
                                  <a
                                    href="apps/ecommerce/sales/details.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Jason Bourne
                                  </a>
                                </span>
                                {/* <!--end::Name--> */}
                                {/* <!--begin::Label--> */}
                                <span className="badge badge-light-success">
                                  Delivered
                                </span>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Customer--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                              {/* <!--begin::Info--> */}
                              <div className="d-flex flex-stack mb-3">
                                {/* <!--begin::Wrapper--> */}
                                <div className="me-3">
                                  {/* <!--begin::Icon--> */}
                                  <img
                                    src="assets/media/stock/ecommerce/209.png"
                                    className="w-50px ms-n1 me-1"
                                    alt=""
                                  />
                                  {/* <!--end::Icon--> */}
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    RiseUP
                                  </a>
                                  {/* <!--end::Title--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Action--> */}
                                <div className="m-0">
                                  {/* <!--begin::Menu--> */}
                                  <button
                                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-overflow="true"
                                  >
                                    <i className="ki-duotone ki-dots-square fs-1">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </button>
                                  {/* <!--begin::Menu 2--> */}
                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                    data-kt-menu="true"
                                  >
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                        Quick Actions
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mb-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div
                                      className="menu-item px-3"
                                      data-kt-menu-trigger="hover"
                                      data-kt-menu-placement="right-start"
                                    >
                                      {/* <!--begin::Menu item--> */}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">
                                          New Group
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </a>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu sub--> */}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Admin Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Staff Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Member Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                      </div>
                                      {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mt-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a
                                          className="btn btn-primary btn-sm px-4"
                                          href="#"
                                        >
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                  </div>
                                  {/* <!--end::Menu 2--> */}
                                  {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Action--> */}
                              </div>
                              {/* <!--end::Info--> */}
                              {/* <!--begin::Customer--> */}
                              <div className="d-flex flex-stack">
                                {/* <!--begin::Name--> */}
                                <span className="text-gray-500 fw-bold">
                                  To:
                                  <a
                                    href="apps/ecommerce/sales/details.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Marie Durant
                                  </a>
                                </span>
                                {/* <!--end::Name--> */}
                                {/* <!--begin::Label--> */}
                                <span className="badge badge-light-primary">
                                  Shipping
                                </span>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Customer--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                              {/* <!--begin::Info--> */}
                              <div className="d-flex flex-stack mb-3">
                                {/* <!--begin::Wrapper--> */}
                                <div className="me-3">
                                  {/* <!--begin::Icon--> */}
                                  <img
                                    src="assets/media/stock/ecommerce/214.png"
                                    className="w-50px ms-n1 me-1"
                                    alt=""
                                  />
                                  {/* <!--end::Icon--> */}
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Yellow Stone
                                  </a>
                                  {/* <!--end::Title--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Action--> */}
                                <div className="m-0">
                                  {/* <!--begin::Menu--> */}
                                  <button
                                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-overflow="true"
                                  >
                                    <i className="ki-duotone ki-dots-square fs-1">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </button>
                                  {/* <!--begin::Menu 2--> */}
                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                    data-kt-menu="true"
                                  >
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                        Quick Actions
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mb-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div
                                      className="menu-item px-3"
                                      data-kt-menu-trigger="hover"
                                      data-kt-menu-placement="right-start"
                                    >
                                      {/* <!--begin::Menu item--> */}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">
                                          New Group
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </a>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu sub--> */}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Admin Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Staff Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Member Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                      </div>
                                      {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mt-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a
                                          className="btn btn-primary btn-sm px-4"
                                          href="#"
                                        >
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                  </div>
                                  {/* <!--end::Menu 2--> */}
                                  {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Action--> */}
                              </div>
                              {/* <!--end::Info--> */}
                              {/* <!--begin::Customer--> */}
                              <div className="d-flex flex-stack">
                                {/* <!--begin::Name--> */}
                                <span className="text-gray-500 fw-bold">
                                  To:
                                  <a
                                    href="apps/ecommerce/sales/details.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Dan Wilson
                                  </a>
                                </span>
                                {/* <!--end::Name--> */}
                                {/* <!--begin::Label--> */}
                                <span className="badge badge-light-danger">
                                  Confirmed
                                </span>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Customer--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                              {/* <!--begin::Info--> */}
                              <div className="d-flex flex-stack mb-3">
                                {/* <!--begin::Wrapper--> */}
                                <div className="me-3">
                                  {/* <!--begin::Icon--> */}
                                  <img
                                    src="assets/media/stock/ecommerce/211.png"
                                    className="w-50px ms-n1 me-1"
                                    alt=""
                                  />
                                  {/* <!--end::Icon--> */}
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Elephant 1802
                                  </a>
                                  {/* <!--end::Title--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Action--> */}
                                <div className="m-0">
                                  {/* <!--begin::Menu--> */}
                                  <button
                                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-overflow="true"
                                  >
                                    <i className="ki-duotone ki-dots-square fs-1">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </button>
                                  {/* <!--begin::Menu 2--> */}
                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                    data-kt-menu="true"
                                  >
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                        Quick Actions
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mb-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div
                                      className="menu-item px-3"
                                      data-kt-menu-trigger="hover"
                                      data-kt-menu-placement="right-start"
                                    >
                                      {/* <!--begin::Menu item--> */}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">
                                          New Group
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </a>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu sub--> */}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Admin Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Staff Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Member Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                      </div>
                                      {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mt-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a
                                          className="btn btn-primary btn-sm px-4"
                                          href="#"
                                        >
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                  </div>
                                  {/* <!--end::Menu 2--> */}
                                  {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Action--> */}
                              </div>
                              {/* <!--end::Info--> */}
                              {/* <!--begin::Customer--> */}
                              <div className="d-flex flex-stack">
                                {/* <!--begin::Name--> */}
                                <span className="text-gray-500 fw-bold">
                                  To:
                                  <a
                                    href="apps/ecommerce/sales/details.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Lebron Wayde
                                  </a>
                                </span>
                                {/* <!--end::Name--> */}
                                {/* <!--begin::Label--> */}
                                <span className="badge badge-light-success">
                                  Delivered
                                </span>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Customer--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                              {/* <!--begin::Info--> */}
                              <div className="d-flex flex-stack mb-3">
                                {/* <!--begin::Wrapper--> */}
                                <div className="me-3">
                                  {/* <!--begin::Icon--> */}
                                  <img
                                    src="assets/media/stock/ecommerce/215.png"
                                    className="w-50px ms-n1 me-1"
                                    alt=""
                                  />
                                  {/* <!--end::Icon--> */}
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    RiseUP
                                  </a>
                                  {/* <!--end::Title--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Action--> */}
                                <div className="m-0">
                                  {/* <!--begin::Menu--> */}
                                  <button
                                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-overflow="true"
                                  >
                                    <i className="ki-duotone ki-dots-square fs-1">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </button>
                                  {/* <!--begin::Menu 2--> */}
                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                    data-kt-menu="true"
                                  >
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                        Quick Actions
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mb-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div
                                      className="menu-item px-3"
                                      data-kt-menu-trigger="hover"
                                      data-kt-menu-placement="right-start"
                                    >
                                      {/* <!--begin::Menu item--> */}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">
                                          New Group
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </a>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu sub--> */}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Admin Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Staff Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Member Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                      </div>
                                      {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mt-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a
                                          className="btn btn-primary btn-sm px-4"
                                          href="#"
                                        >
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                  </div>
                                  {/* <!--end::Menu 2--> */}
                                  {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Action--> */}
                              </div>
                              {/* <!--end::Info--> */}
                              {/* <!--begin::Customer--> */}
                              <div className="d-flex flex-stack">
                                {/* <!--begin::Name--> */}
                                <span className="text-gray-500 fw-bold">
                                  To:
                                  <a
                                    href="apps/ecommerce/sales/details.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Ana Simmons
                                  </a>
                                </span>
                                {/* <!--end::Name--> */}
                                {/* <!--begin::Label--> */}
                                <span className="badge badge-light-primary">
                                  Shipping
                                </span>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Customer--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="border border-dashed border-gray-300 rounded px-7 py-3">
                              {/* <!--begin::Info--> */}
                              <div className="d-flex flex-stack mb-3">
                                {/* <!--begin::Wrapper--> */}
                                <div className="me-3">
                                  {/* <!--begin::Icon--> */}
                                  <img
                                    src="assets/media/stock/ecommerce/192.png"
                                    className="w-50px ms-n1 me-1"
                                    alt=""
                                  />
                                  {/* <!--end::Icon--> */}
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Yellow Stone
                                  </a>
                                  {/* <!--end::Title--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Action--> */}
                                <div className="m-0">
                                  {/* <!--begin::Menu--> */}
                                  <button
                                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-overflow="true"
                                  >
                                    <i className="ki-duotone ki-dots-square fs-1">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </button>
                                  {/* <!--begin::Menu 2--> */}
                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                    data-kt-menu="true"
                                  >
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                        Quick Actions
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mb-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Ticket
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Customer
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div
                                      className="menu-item px-3"
                                      data-kt-menu-trigger="hover"
                                      data-kt-menu-placement="right-start"
                                    >
                                      {/* <!--begin::Menu item--> */}
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">
                                          New Group
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </a>
                                      {/* <!--end::Menu item--> */}
                                      {/* <!--begin::Menu sub--> */}
                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Admin Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Staff Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Member Group
                                          </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                      </div>
                                      {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        New Contact
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator mt-3 opacity-75"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3 py-3">
                                        <a
                                          className="btn btn-primary btn-sm px-4"
                                          href="#"
                                        >
                                          Generate Reports
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                  </div>
                                  {/* <!--end::Menu 2--> */}
                                  {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Action--> */}
                              </div>
                              {/* <!--end::Info--> */}
                              {/* <!--begin::Customer--> */}
                              <div className="d-flex flex-stack">
                                {/* <!--begin::Name--> */}
                                <span className="text-gray-500 fw-bold">
                                  To:
                                  <a
                                    href="apps/ecommerce/sales/details.html"
                                    className="text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Kevin Leonard
                                  </a>
                                </span>
                                {/* <!--end::Name--> */}
                                {/* <!--begin::Label--> */}
                                <span className="badge badge-light-danger">
                                  Confirmed
                                </span>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Customer--> */}
                            </div>
                            {/* <!--end::Item--> */}
                          </div>
                          {/* <!--end::Scroll--> */}
                        </div>
                        {/* <!--end::Body--> */}
                      </div>
                      {/* <!--end::List widget 5--> */}
                    </div>
                    {/* <!--end::Col--> */}
                    {/* <!--begin::Col--> */}
                    <div className="col-xl-8">
                      {/* <!--begin::Table Widget 5--> */}
                      <div className="card card-flush h-xl-100">
                        {/* <!--begin::Card header--> */}
                        <div className="card-header pt-7">
                          {/* <!--begin::Title--> */}
                          <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold text-gray-900">
                              Stock Report
                            </span>
                            <span className="text-gray-500 mt-1 fw-semibold fs-6">
                              Total 2,356 Items in the Stock
                            </span>
                          </h3>
                          {/* <!--end::Title--> */}
                          {/* <!--begin::Actions--> */}
                          <div className="card-toolbar">
                            {/* <!--begin::Filters--> */}
                            <div className="d-flex flex-stack flex-wrap gap-4">
                              {/* <!--begin::Destination--> */}
                              <div className="d-flex align-items-center fw-bold">
                                {/* <!--begin::Label--> */}
                                <div className="text-muted fs-7 me-2">
                                  Cateogry
                                </div>
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Select--> */}
                                <select
                                  className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-dropdown-css-className="w-150px"
                                  data-placeholder="Select an option"
                                >
                                  <option></option>
                                  <option value="Show All" selected="selected">
                                    Show All
                                  </option>
                                  <option value="a">Category A</option>
                                  <option value="b">Category B</option>
                                </select>
                                {/* <!--end::Select--> */}
                              </div>
                              {/* <!--end::Destination--> */}
                              {/* <!--begin::Status--> */}
                              <div className="d-flex align-items-center fw-bold">
                                {/* <!--begin::Label--> */}
                                <div className="text-muted fs-7 me-2">
                                  Status
                                </div>
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Select--> */}
                                <select
                                  className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-dropdown-css-className="w-150px"
                                  data-placeholder="Select an option"
                                  data-kt-table-widget-5="filter_status"
                                >
                                  <option></option>
                                  <option value="Show All" selected="selected">
                                    Show All
                                  </option>
                                  <option value="In Stock">In Stock</option>
                                  <option value="Out of Stock">
                                    Out of Stock
                                  </option>
                                  <option value="Low Stock">Low Stock</option>
                                </select>
                                {/* <!--end::Select--> */}
                              </div>
                              {/* <!--end::Status--> */}
                              {/* <!--begin::Search--> */}
                              <a
                                href="apps/ecommerce/catalog/products.html"
                                className="btn btn-light btn-sm"
                              >
                                View Stock
                              </a>
                              {/* <!--end::Search--> */}
                            </div>
                            {/* <!--begin::Filters--> */}
                          </div>
                          {/* <!--end::Actions--> */}
                        </div>
                        {/* <!--end::Card header--> */}
                        {/* <!--begin::Card body--> */}
                        <div className="card-body">
                          {/* <!--begin::Table--> */}
                          <table
                            className="table align-middle table-row-dashed fs-6 gy-3"
                            id="kt_table_widget_5_table"
                          >
                            {/* <!--begin::Table head--> */}
                            <thead>
                              {/* <!--begin::Table row--> */}
                              <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                                <th className="min-w-150px">Item</th>
                                <th className="text-end pe-3 min-w-100px">
                                  Product ID
                                </th>
                                <th className="text-end pe-3 min-w-150px">
                                  Date Added
                                </th>
                                <th className="text-end pe-3 min-w-100px">
                                  Price
                                </th>
                                <th className="text-end pe-3 min-w-100px">
                                  Status
                                </th>
                                <th className="text-end pe-0 min-w-75px">
                                  Qty
                                </th>
                              </tr>
                              {/* <!--end::Table row--> */}
                            </thead>
                            {/* <!--end::Table head--> */}
                            {/* <!--begin::Table body--> */}
                            <tbody className="fw-bold text-gray-600">
                              <tr>
                                {/* <!--begin::Item--> */}
                                <td>
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-900 text-hover-primary"
                                  >
                                    Macbook Air M1
                                  </a>
                                </td>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Product ID--> */}
                                <td className="text-end">#XGY-356</td>
                                {/* <!--end::Product ID--> */}
                                {/* <!--begin::Date added--> */}
                                <td className="text-end">02 Apr, 2024</td>
                                {/* <!--end::Date added--> */}
                                {/* <!--begin::Price--> */}
                                <td className="text-end">$1,230</td>
                                {/* <!--end::Price--> */}
                                {/* <!--begin::Status--> */}
                                <td className="text-end">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                    In Stock
                                  </span>
                                </td>
                                {/* <!--end::Status--> */}
                                {/* <!--begin::Qty--> */}
                                <td className="text-end" data-order="58">
                                  <span className="text-gray-900 fw-bold">
                                    58 PCS
                                  </span>
                                </td>
                                {/* <!--end::Qty--> */}
                              </tr>
                              <tr>
                                {/* <!--begin::Item--> */}
                                <td>
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-900 text-hover-primary"
                                  >
                                    Surface Laptop 4
                                  </a>
                                </td>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Product ID--> */}
                                <td className="text-end">#YHD-047</td>
                                {/* <!--end::Product ID--> */}
                                {/* <!--begin::Date added--> */}
                                <td className="text-end">01 Apr, 2024</td>
                                {/* <!--end::Date added--> */}
                                {/* <!--begin::Price--> */}
                                <td className="text-end">$1,060</td>
                                {/* <!--end::Price--> */}
                                {/* <!--begin::Status--> */}
                                <td className="text-end">
                                  <span className="badge py-3 px-4 fs-7 badge-light-danger">
                                    Out of Stock
                                  </span>
                                </td>
                                {/* <!--end::Status--> */}
                                {/* <!--begin::Qty--> */}
                                <td className="text-end" data-order="0">
                                  <span className="text-gray-900 fw-bold">
                                    0 PCS
                                  </span>
                                </td>
                                {/* <!--end::Qty--> */}
                              </tr>
                              <tr>
                                {/* <!--begin::Item--> */}
                                <td>
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-900 text-hover-primary"
                                  >
                                    Logitech MX 250
                                  </a>
                                </td>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Product ID--> */}
                                <td className="text-end">#SRR-678</td>
                                {/* <!--end::Product ID--> */}
                                {/* <!--begin::Date added--> */}
                                <td className="text-end">24 Mar, 2024</td>
                                {/* <!--end::Date added--> */}
                                {/* <!--begin::Price--> */}
                                <td className="text-end">$64</td>
                                {/* <!--end::Price--> */}
                                {/* <!--begin::Status--> */}
                                <td className="text-end">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                    In Stock
                                  </span>
                                </td>
                                {/* <!--end::Status--> */}
                                {/* <!--begin::Qty--> */}
                                <td className="text-end" data-order="290">
                                  <span className="text-gray-900 fw-bold">
                                    290 PCS
                                  </span>
                                </td>
                                {/* <!--end::Qty--> */}
                              </tr>
                              <tr>
                                {/* <!--begin::Item--> */}
                                <td>
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-900 text-hover-primary"
                                  >
                                    AudioEngine HD3
                                  </a>
                                </td>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Product ID--> */}
                                <td className="text-end">#PXF-578</td>
                                {/* <!--end::Product ID--> */}
                                {/* <!--begin::Date added--> */}
                                <td className="text-end">24 Mar, 2024</td>
                                {/* <!--end::Date added--> */}
                                {/* <!--begin::Price--> */}
                                <td className="text-end">$1,060</td>
                                {/* <!--end::Price--> */}
                                {/* <!--begin::Status--> */}
                                <td className="text-end">
                                  <span className="badge py-3 px-4 fs-7 badge-light-danger">
                                    Out of Stock
                                  </span>
                                </td>
                                {/* <!--end::Status--> */}
                                {/* <!--begin::Qty--> */}
                                <td className="text-end" data-order="46">
                                  <span className="text-gray-900 fw-bold">
                                    46 PCS
                                  </span>
                                </td>
                                {/* <!--end::Qty--> */}
                              </tr>
                              <tr>
                                {/* <!--begin::Item--> */}
                                <td>
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-900 text-hover-primary"
                                  >
                                    HP Hyper LTR
                                  </a>
                                </td>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Product ID--> */}
                                <td className="text-end">#PXF-778</td>
                                {/* <!--end::Product ID--> */}
                                {/* <!--begin::Date added--> */}
                                <td className="text-end">16 Jan, 2024</td>
                                {/* <!--end::Date added--> */}
                                {/* <!--begin::Price--> */}
                                <td className="text-end">$4500</td>
                                {/* <!--end::Price--> */}
                                {/* <!--begin::Status--> */}
                                <td className="text-end">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                    In Stock
                                  </span>
                                </td>
                                {/* <!--end::Status--> */}
                                {/* <!--begin::Qty--> */}
                                <td className="text-end" data-order="78">
                                  <span className="text-gray-900 fw-bold">
                                    78 PCS
                                  </span>
                                </td>
                                {/* <!--end::Qty--> */}
                              </tr>
                              <tr>
                                {/* <!--begin::Item--> */}
                                <td>
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-900 text-hover-primary"
                                  >
                                    Dell 32 UltraSharp
                                  </a>
                                </td>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Product ID--> */}
                                <td className="text-end">#XGY-356</td>
                                {/* <!--end::Product ID--> */}
                                {/* <!--begin::Date added--> */}
                                <td className="text-end">22 Dec, 2024</td>
                                {/* <!--end::Date added--> */}
                                {/* <!--begin::Price--> */}
                                <td className="text-end">$1,060</td>
                                {/* <!--end::Price--> */}
                                {/* <!--begin::Status--> */}
                                <td className="text-end">
                                  <span className="badge py-3 px-4 fs-7 badge-light-warning">
                                    Low Stock
                                  </span>
                                </td>
                                {/* <!--end::Status--> */}
                                {/* <!--begin::Qty--> */}
                                <td className="text-end" data-order="8">
                                  <span className="text-gray-900 fw-bold">
                                    8 PCS
                                  </span>
                                </td>
                                {/* <!--end::Qty--> */}
                              </tr>
                              <tr>
                                {/* <!--begin::Item--> */}
                                <td>
                                  <a
                                    href="apps/ecommerce/catalog/edit-product.html"
                                    className="text-gray-900 text-hover-primary"
                                  >
                                    Google Pixel 6 Pro
                                  </a>
                                </td>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Product ID--> */}
                                <td className="text-end">#XVR-425</td>
                                {/* <!--end::Product ID--> */}
                                {/* <!--begin::Date added--> */}
                                <td className="text-end">27 Dec, 2024</td>
                                {/* <!--end::Date added--> */}
                                {/* <!--begin::Price--> */}
                                <td className="text-end">$1,060</td>
                                {/* <!--end::Price--> */}
                                {/* <!--begin::Status--> */}
                                <td className="text-end">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                    In Stock
                                  </span>
                                </td>
                                {/* <!--end::Status--> */}
                                {/* <!--begin::Qty--> */}
                                <td className="text-end" data-order="124">
                                  <span className="text-gray-900 fw-bold">
                                    124 PCS
                                  </span>
                                </td>
                                {/* <!--end::Qty--> */}
                              </tr>
                            </tbody>
                            {/* <!--end::Table body--> */}
                          </table>
                          {/* <!--end::Table--> */}
                        </div>
                        {/* <!--end::Card body--> */}
                      </div>
                      {/* <!--end::Table Widget 5--> */}
                    </div>
                    {/* <!--end::Col--> */}
                  </div>
                  {/* <!--end::Row--> */}
                </div>
                {/* <!--end::Post--> */}
              </div>
              {/* <!--end::Container--> */}
              {/* <!--begin::Footer--> */}
              <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                {/* <!--begin::Container--> */}
                <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
                  {/* <!--begin::Copyright--> */}
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
                  {/* <!--end::Copyright--> */}
                  {/* <!--begin::Menu--> */}
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
                  {/* <!--end::Menu--> */}
                </div>
                {/* <!--end::Container--> */}
              </div>
              {/* <!--end::Footer--> */}
            </div>
            {/* <!--end::Wrapper--> */}
          </div>
          {/* <!--end::Page--> */}
        </div>
      </div>
      {/* <!--end::Root--> */}
      {/* <!--begin::Drawers--> */}
      {/* <!--begin::Activities drawer--> */}
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
          {/* <!--begin::Header--> */}
          <div className="card-header" id="kt_activities_header">
            <h3 className="card-title fw-bold text-gray-900">Activity Logs</h3>
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
          {/* <!--end::Header--> */}
          {/* <!--begin::Body--> */}
          <div className="card-body position-relative" id="kt_activities_body">
            {/* <!--begin::Content--> */}
            <div
              id="kt_activities_scroll"
              className="position-relative scroll-y me-n5 pe-5"
              data-kt-scroll="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-wrappers="#kt_activities_body"
              data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
              data-kt-scroll-offset="5px"
            >
              {/* <!--begin::Timeline items--> */}
              <div className="timeline timeline-border-dashed">
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon">
                    <i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mb-10 mt-n1">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="pe-3 mb-5">
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fw-semibold mb-2">
                        There are 2 new tasks for you in “AirPlus Mobile App”
                        project:
                      </div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/* <!--begin::Info--> */}
                        <div className="text-muted me-2 fs-7">
                          Added at 4:23 PM by
                        </div>
                        {/* <!--end::Info--> */}
                        {/* <!--begin::User--> */}
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
                        {/* <!--end::User--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                    {/* <!--begin::Timeline details--> */}
                    <div className="overflow-auto pb-5">
                      {/* <!--begin::Record--> */}
                      <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                        {/* <!--begin::Title--> */}
                        <a
                          href="apps/projects/project.html"
                          className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                        >
                          Meeting with customer
                        </a>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Label--> */}
                        <div className="min-w-175px pe-2">
                          <span className="badge badge-light text-muted">
                            Application Design
                          </span>
                        </div>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Users--> */}
                        <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                          {/* <!--begin::User--> */}
                          <div className="symbol symbol-circle symbol-25px">
                            <img
                              src="assets/media/avatars/300-2.jpg"
                              alt="img"
                            />
                          </div>
                          {/* <!--end::User--> */}
                          {/* <!--begin::User--> */}
                          <div className="symbol symbol-circle symbol-25px">
                            <img
                              src="assets/media/avatars/300-14.jpg"
                              alt="img"
                            />
                          </div>
                          {/* <!--end::User--> */}
                          {/* <!--begin::User--> */}
                          <div className="symbol symbol-circle symbol-25px">
                            <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                              A
                            </div>
                          </div>
                          {/* <!--end::User--> */}
                        </div>
                        {/* <!--end::Users--> */}
                        {/* <!--begin::Progress--> */}
                        <div className="min-w-125px pe-2">
                          <span className="badge badge-light-primary">
                            In Progress
                          </span>
                        </div>
                        {/* <!--end::Progress--> */}
                        {/* <!--begin::Action--> */}
                        <a
                          href="apps/projects/project.html"
                          className="btn btn-sm btn-light btn-active-light-primary"
                        >
                          View
                        </a>
                        {/* <!--end::Action--> */}
                      </div>
                      {/* <!--end::Record--> */}
                      {/* <!--begin::Record--> */}
                      <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                        {/* <!--begin::Title--> */}
                        <a
                          href="apps/projects/project.html"
                          className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                        >
                          Project Delivery Preparation
                        </a>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Label--> */}
                        <div className="min-w-175px">
                          <span className="badge badge-light text-muted">
                            CRM System Development
                          </span>
                        </div>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Users--> */}
                        <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                          {/* <!--begin::User--> */}
                          <div className="symbol symbol-circle symbol-25px">
                            <img
                              src="assets/media/avatars/300-20.jpg"
                              alt="img"
                            />
                          </div>
                          {/* <!--end::User--> */}
                          {/* <!--begin::User--> */}
                          <div className="symbol symbol-circle symbol-25px">
                            <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                              B
                            </div>
                          </div>
                          {/* <!--end::User--> */}
                        </div>
                        {/* <!--end::Users--> */}
                        {/* <!--begin::Progress--> */}
                        <div className="min-w-125px">
                          <span className="badge badge-light-success">
                            Completed
                          </span>
                        </div>
                        {/* <!--end::Progress--> */}
                        {/* <!--begin::Action--> */}
                        <a
                          href="apps/projects/project.html"
                          className="btn btn-sm btn-light btn-active-light-primary"
                        >
                          View
                        </a>
                        {/* <!--end::Action--> */}
                      </div>
                      {/* <!--end::Record--> */}
                    </div>
                    {/* <!--end::Timeline details--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon me-4">
                    <i className="ki-duotone ki-flag fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mb-10 mt-n2">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="overflow-auto pe-3">
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fw-semibold mb-2">
                        Invitation for crafting engaging designs that speak
                        human workshop
                      </div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/* <!--begin::Info--> */}
                        <div className="text-muted me-2 fs-7">
                          Sent at 4:23 PM by
                        </div>
                        {/* <!--end::Info--> */}
                        {/* <!--begin::User--> */}
                        <div
                          className="symbol symbol-circle symbol-25px"
                          data-bs-toggle="tooltip"
                          data-bs-boundary="window"
                          data-bs-placement="top"
                          title="Alan Nilson"
                        >
                          <img src="assets/media/avatars/300-1.jpg" alt="img" />
                        </div>
                        {/* <!--end::User--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon">
                    <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                      <span className="path5"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mb-10 mt-n1">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="mb-5 pe-3">
                      {/* <!--begin::Title--> */}
                      <a
                        href="#"
                        className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                      >
                        3 New Incoming Project Files:
                      </a>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/* <!--begin::Info--> */}
                        <div className="text-muted me-2 fs-7">
                          Sent at 10:30 PM by
                        </div>
                        {/* <!--end::Info--> */}
                        {/* <!--begin::User--> */}
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
                        {/* <!--end::User--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                    {/* <!--begin::Timeline details--> */}
                    <div className="overflow-auto pb-5">
                      <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                        {/* <!--begin::Item--> */}
                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                          {/* <!--begin::Icon--> */}
                          <img
                            alt=""
                            className="w-30px me-3"
                            src="assets/media/svg/files/pdf.svg"
                          />
                          {/* <!--end::Icon--> */}
                          {/* <!--begin::Info--> */}
                          <div className="ms-1 fw-semibold">
                            {/* <!--begin::Desc--> */}
                            <a
                              href="apps/projects/project.html"
                              className="fs-6 text-hover-primary fw-bold"
                            >
                              Finance KPI App Guidelines
                            </a>
                            {/* <!--end::Desc--> */}
                            {/* <!--begin::Number--> */}
                            <div className="text-gray-500">1.9mb</div>
                            {/* <!--end::Number--> */}
                          </div>
                          {/* <!--begin::Info--> */}
                        </div>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                          {/* <!--begin::Icon--> */}
                          <img
                            alt="apps/projects/project.html"
                            className="w-30px me-3"
                            src="assets/media/svg/files/doc.svg"
                          />
                          {/* <!--end::Icon--> */}
                          {/* <!--begin::Info--> */}
                          <div className="ms-1 fw-semibold">
                            {/* <!--begin::Desc--> */}
                            <a
                              href="#"
                              className="fs-6 text-hover-primary fw-bold"
                            >
                              Client UAT Testing Results
                            </a>
                            {/* <!--end::Desc--> */}
                            {/* <!--begin::Number--> */}
                            <div className="text-gray-500">18kb</div>
                            {/* <!--end::Number--> */}
                          </div>
                          {/* <!--end::Info--> */}
                        </div>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <div className="d-flex flex-aligns-center">
                          {/* <!--begin::Icon--> */}
                          <img
                            alt="apps/projects/project.html"
                            className="w-30px me-3"
                            src="assets/media/svg/files/css.svg"
                          />
                          {/* <!--end::Icon--> */}
                          {/* <!--begin::Info--> */}
                          <div className="ms-1 fw-semibold">
                            {/* <!--begin::Desc--> */}
                            <a
                              href="#"
                              className="fs-6 text-hover-primary fw-bold"
                            >
                              Finance Reports
                            </a>
                            {/* <!--end::Desc--> */}
                            {/* <!--begin::Number--> */}
                            <div className="text-gray-500">20mb</div>
                            {/* <!--end::Number--> */}
                          </div>
                          {/* <!--end::Icon--> */}
                        </div>
                        {/* <!--end::Item--> */}
                      </div>
                    </div>
                    {/* <!--end::Timeline details--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon">
                    <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mb-10 mt-n1">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="pe-3 mb-5">
                      {/* <!--begin::Title--> */}
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
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/* <!--begin::Info--> */}
                        <div className="text-muted me-2 fs-7">
                          Initiated at 4:23 PM by
                        </div>
                        {/* <!--end::Info--> */}
                        {/* <!--begin::User--> */}
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
                        {/* <!--end::User--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon">
                    <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mb-10 mt-n1">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="pe-3 mb-5">
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fw-semibold mb-2">
                        3 new application design concepts added:
                      </div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/* <!--begin::Info--> */}
                        <div className="text-muted me-2 fs-7">
                          Created at 4:23 PM by
                        </div>
                        {/* <!--end::Info--> */}
                        {/* <!--begin::User--> */}
                        <div
                          className="symbol symbol-circle symbol-25px"
                          data-bs-toggle="tooltip"
                          data-bs-boundary="window"
                          data-bs-placement="top"
                          title="Marcus Dotson"
                        >
                          <img src="assets/media/avatars/300-2.jpg" alt="img" />
                        </div>
                        {/* <!--end::User--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                    {/* <!--begin::Timeline details--> */}
                    <div className="overflow-auto pb-5">
                      <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                        {/* <!--begin::Item--> */}
                        <div className="overlay me-10">
                          {/* <!--begin::Image--> */}
                          <div className="overlay-wrapper">
                            <img
                              alt="img"
                              className="rounded w-150px"
                              src="assets/media/stock/600x400/img-29.jpg"
                            />
                          </div>
                          {/* <!--end::Image--> */}
                          {/* <!--begin::Link--> */}
                          <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                            <a
                              href="#"
                              className="btn btn-sm btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                          </div>
                          {/* <!--end::Link--> */}
                        </div>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <div className="overlay me-10">
                          {/* <!--begin::Image--> */}
                          <div className="overlay-wrapper">
                            <img
                              alt="img"
                              className="rounded w-150px"
                              src="assets/media/stock/600x400/img-31.jpg"
                            />
                          </div>
                          {/* <!--end::Image--> */}
                          {/* <!--begin::Link--> */}
                          <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                            <a
                              href="#"
                              className="btn btn-sm btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                          </div>
                          {/* <!--end::Link--> */}
                        </div>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <div className="overlay">
                          {/* <!--begin::Image--> */}
                          <div className="overlay-wrapper">
                            <img
                              alt="img"
                              className="rounded w-150px"
                              src="assets/media/stock/600x400/img-40.jpg"
                            />
                          </div>
                          {/* <!--end::Image--> */}
                          {/* <!--begin::Link--> */}
                          <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                            <a
                              href="#"
                              className="btn btn-sm btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                          </div>
                          {/* <!--end::Link--> */}
                        </div>
                        {/* <!--end::Item--> */}
                      </div>
                    </div>
                    {/* <!--end::Timeline details--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon">
                    <i className="ki-duotone ki-sms fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mb-10 mt-n1">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="pe-3 mb-5">
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fw-semibold mb-2">
                        New case
                        <a href="#" className="text-primary fw-bold me-1">
                          #67890
                        </a>
                        is assigned to you in Multi-platform Database Design
                        project
                      </div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="overflow-auto pb-5">
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/* <!--begin::Info--> */}
                          <div className="text-muted me-2 fs-7">
                            Added at 4:23 PM by
                          </div>
                          {/* <!--end::Info--> */}
                          {/* <!--begin::User--> */}
                          <a href="#" className="text-primary fw-bold me-1">
                            Alice Tan
                          </a>
                          {/* <!--end::User--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon">
                    <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mb-10 mt-n1">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="pe-3 mb-5">
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fw-semibold mb-2">
                        You have received a new order:
                      </div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/* <!--begin::Info--> */}
                        <div className="text-muted me-2 fs-7">
                          Placed at 5:05 AM by
                        </div>
                        {/* <!--end::Info--> */}
                        {/* <!--begin::User--> */}
                        <div
                          className="symbol symbol-circle symbol-25px"
                          data-bs-toggle="tooltip"
                          data-bs-boundary="window"
                          data-bs-placement="top"
                          title="Robert Rich"
                        >
                          <img src="assets/media/avatars/300-4.jpg" alt="img" />
                        </div>
                        {/* <!--end::User--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                    {/* <!--begin::Timeline details--> */}
                    <div className="overflow-auto pb-5">
                      {/* <!--begin::Notice--> */}
                      <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                        {/* <!--begin::Icon--> */}
                        <i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                          {/* <!--begin::Content--> */}
                          <div className="mb-3 mb-md-0 fw-semibold">
                            <h4 className="text-gray-900 fw-bold">
                              Database Backup Process Completed!
                            </h4>
                            <div className="fs-6 text-gray-700 pe-7">
                              Login into Admin Dashboard to make sure the data
                              integrity is OK
                            </div>
                          </div>
                          {/* <!--end::Content--> */}
                          {/* <!--begin::Action--> */}
                          <a
                            href="#"
                            className="btn btn-primary px-6 align-self-center text-nowrap"
                          >
                            Proceed
                          </a>
                          {/* <!--end::Action--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                      </div>
                      {/* <!--end::Notice--> */}
                    </div>
                    {/* <!--end::Timeline details--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
                {/* <!--begin::Timeline item--> */}
                <div className="timeline-item">
                  {/* <!--begin::Timeline line--> */}
                  <div className="timeline-line"></div>
                  {/* <!--end::Timeline line--> */}
                  {/* <!--begin::Timeline icon--> */}
                  <div className="timeline-icon">
                    <i className="ki-duotone ki-basket fs-2 text-gray-500">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </i>
                  </div>
                  {/* <!--end::Timeline icon--> */}
                  {/* <!--begin::Timeline content--> */}
                  <div className="timeline-content mt-n1">
                    {/* <!--begin::Timeline heading--> */}
                    <div className="pe-3 mb-5">
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fw-semibold mb-2">
                        New order
                        <a href="#" className="text-primary fw-bold me-1">
                          #67890
                        </a>
                        is placed for Workshow Planning & Budget Estimation
                      </div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Description--> */}
                      <div className="d-flex align-items-center mt-1 fs-6">
                        {/* <!--begin::Info--> */}
                        <div className="text-muted me-2 fs-7">
                          Placed at 4:23 PM by
                        </div>
                        {/* <!--end::Info--> */}
                        {/* <!--begin::User--> */}
                        <a href="#" className="text-primary fw-bold me-1">
                          Jimmy Bold
                        </a>
                        {/* <!--end::User--> */}
                      </div>
                      {/* <!--end::Description--> */}
                    </div>
                    {/* <!--end::Timeline heading--> */}
                  </div>
                  {/* <!--end::Timeline content--> */}
                </div>
                {/* <!--end::Timeline item--> */}
              </div>
              {/* <!--end::Timeline items--> */}
            </div>
            {/* <!--end::Content--> */}
          </div>
          {/* <!--end::Body--> */}
          {/* <!--begin::Footer--> */}
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
          {/* <!--end::Footer--> */}
        </div>
      </div>
      {/* <!--end::Activities drawer--> */}
      {/* <!--begin::Chat drawer--> */}
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
        {/* <!--begin::Messenger--> */}
        <div
          className="card w-100 border-0 rounded-0"
          id="kt_drawer_chat_messenger"
        >
          {/* <!--begin::Card header--> */}
          <div
            className="card-header pe-5"
            id="kt_drawer_chat_messenger_header"
          >
            {/* <!--begin::Title--> */}
            <div className="card-title">
              {/* <!--begin::User--> */}
              <div className="d-flex justify-content-center flex-column me-3">
                <a
                  href="#"
                  className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                >
                  Brian Cox
                </a>
                {/* <!--begin::Info--> */}
                <div className="mb-0 lh-1">
                  <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                  <span className="fs-7 fw-semibold text-muted">Active</span>
                </div>
                {/* <!--end::Info--> */}
              </div>
              {/* <!--end::User--> */}
            </div>
            {/* <!--end::Title--> */}
            {/* <!--begin::Card toolbar--> */}
            <div className="card-toolbar">
              {/* <!--begin::Menu--> */}
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
                {/* <!--begin::Menu 3--> */}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                  data-kt-menu="true"
                >
                  {/* <!--begin::Heading--> */}
                  <div className="menu-item px-3">
                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                      Contacts
                    </div>
                  </div>
                  {/* <!--end::Heading--> */}
                  {/* <!--begin::Menu item--> */}
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
                  {/* <!--end::Menu item--> */}
                  {/* <!--begin::Menu item--> */}
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
                  {/* <!--end::Menu item--> */}
                  {/* <!--begin::Menu item--> */}
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">Groups</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {/* <!--begin::Menu sub--> */}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/* <!--begin::Menu item--> */}
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
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
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
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
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
                      {/* <!--end::Menu item--> */}
                    </div>
                    {/* <!--end::Menu sub--> */}
                  </div>
                  {/* <!--end::Menu item--> */}
                  {/* <!--begin::Menu item--> */}
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
                  {/* <!--end::Menu item--> */}
                </div>
                {/* <!--end::Menu 3--> */}
              </div>
              {/* <!--end::Menu--> */}
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                id="kt_drawer_chat_close"
              >
                <i className="ki-duotone ki-cross-square fs-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--end::Card toolbar--> */}
          </div>
          {/* <!--end::Card header--> */}
          {/* <!--begin::Card body--> */}
          <div className="card-body" id="kt_drawer_chat_messenger_body">
            {/* <!--begin::Messages--> */}
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
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">2 mins</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    How likely are you to recommend our company to your friends
                    and family ?
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(out)--> */}
              <div className="d-flex justify-content-end mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">5 mins</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  >
                    Hey there, we’re just writing to let you know that you’ve
                    been subscribed to a repository on GitHub.
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(out)--> */}
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">1 Hour</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    Ok, Understood!
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(out)--> */}
              <div className="d-flex justify-content-end mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">2 Hours</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  >
                    You’ll receive notifications for all issues, pull requests!
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(out)--> */}
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">3 Hours</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    You can unwatch this repository immediately by clicking
                    here:
                    <a href="https://keenthemes.com">Keenthemes.com</a>
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(out)--> */}
              <div className="d-flex justify-content-end mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">4 Hours</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  >
                    Most purchased Business courses during this sale!
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(out)--> */}
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">5 Hours</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    Company BBQ to celebrate the last quater achievements and
                    goals. Food and drinks provided
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(template for out)--> */}
              <div
                className="d-flex justify-content-end mb-10 d-none"
                data-kt-element="template-out"
              >
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">Just now</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  ></div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(template for out)--> */}
              {/* <!--begin::Message(template for in)--> */}
              <div
                className="d-flex justify-content-start mb-10 d-none"
                data-kt-element="template-in"
              >
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">Just now</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    Right before vacation season we have the next Big Deal for
                    you.
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(template for in)--> */}
            </div>
            {/* <!--end::Messages--> */}
          </div>
          {/* <!--end::Card body--> */}
          {/* <!--begin::Card footer--> */}
          <div
            className="card-footer pt-4"
            id="kt_drawer_chat_messenger_footer"
          >
            {/* <!--begin::Input--> */}
            <textarea
              className="form-control form-control-flush mb-3"
              rows="1"
              data-kt-element="input"
              placeholder="Type a message"
            ></textarea>
            {/* <!--end::Input--> */}
            {/* <!--begin:Toolbar--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Actions--> */}
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
              {/* <!--end::Actions--> */}
              {/* <!--begin::Send--> */}
              <button
                className="btn btn-primary"
                type="button"
                data-kt-element="send"
              >
                Send
              </button>
              {/* <!--end::Send--> */}
            </div>
            {/* <!--end::Toolbar--> */}
          </div>
          {/* <!--end::Card footer--> */}
        </div>
        {/* <!--end::Messenger--> */}
      </div>
      {/* <!--end::Chat drawer--> */}
      {/* <!--begin::Chat drawer--> */}
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
        {/* <!--begin::Messenger--> */}
        <div className="card card-flush w-100 rounded-0">
          {/* <!--begin::Card header--> */}
          <div className="card-header">
            {/* <!--begin::Title--> */}
            <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
            {/* <!--end::Title--> */}
            {/* <!--begin::Card toolbar--> */}
            <div className="card-toolbar">
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-light-primary"
                id="kt_drawer_shopping_cart_close"
              >
                <i className="ki-duotone ki-cross fs-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--end::Card toolbar--> */}
          </div>
          {/* <!--end::Card header--> */}
          {/* <!--begin::Card body--> */}
          <div className="card-body hover-scroll-overlay-y h-400px pt-5">
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-1.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-3.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-8.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-26.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-21.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-34.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
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
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-27.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
          </div>
          {/* <!--end::Card body--> */}
          {/* <!--begin::Card footer--> */}
          <div className="card-footer">
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              <span className="fw-bold text-gray-600">Total</span>
              <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              <span className="fw-bold text-gray-600">Sub total</span>
              <span className="text-primary fw-bolder fs-5">$ 246.35</span>
            </div>
            {/* <!--end::Item--> */}
            {/* <!--end::Action--> */}
            <div className="d-flex justify-content-end mt-9">
              <a
                href="#"
                className="btn btn-primary d-flex justify-content-end"
              >
                Pleace Order
              </a>
            </div>
            {/* <!--end::Action--> */}
          </div>
          {/* <!--end::Card footer--> */}
        </div>
        {/* <!--end::Messenger--> */}
      </div>
      {/* <!--end::Chat drawer--> */}
      {/* <!--end::Drawers--> */}
      {/* <!--end::Main--> */}
      {/* <!--begin::Scrolltop--> */}
      <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
        <i className="ki-duotone ki-arrow-up">
          <span className="path1"></span>
          <span className="path2"></span>
        </i>
      </div>
      {/* <!--end::Scrolltop--> */}
      {/* <!--begin::Modals--> */}
      {/* <!--begin::Modal - Create App--> */}
      <div
        className="modal fade"
        id="kt_modal_create_app"
        tabindex="-1"
        aria-hidden="true"
      >
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog modal-dialog-centered mw-900px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header">
              {/* <!--begin::Modal title--> */}
              <h2>Create App</h2>
              {/* <!--end::Modal title--> */}
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--end::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body py-lg-10 px-lg-10">
              {/* <!--begin::Stepper--> */}
              <div
                className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                id="kt_modal_create_app_stepper"
              >
                {/* <!--begin::Aside--> */}
                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                  {/* <!--begin::Nav--> */}
                  <div className="stepper-nav ps-lg-10">
                    {/* <!--begin::Step 1--> */}
                    <div
                      className="stepper-item current"
                      data-kt-stepper-element="nav"
                    >
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">1</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Details</h3>
                          <div className="stepper-desc">Name your App</div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 1--> */}
                    {/* <!--begin::Step 2--> */}
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">2</span>
                        </div>
                        {/* <!--begin::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Frameworks</h3>
                          <div className="stepper-desc">
                            Define your app framework
                          </div>
                        </div>
                        {/* <!--begin::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 2--> */}
                    {/* <!--begin::Step 3--> */}
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">3</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Database</h3>
                          <div className="stepper-desc">
                            Select the app database type
                          </div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 3--> */}
                    {/* <!--begin::Step 4--> */}
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">4</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Billing</h3>
                          <div className="stepper-desc">
                            Provide payment details
                          </div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 4--> */}
                    {/* <!--begin::Step 5--> */}
                    <div
                      className="stepper-item mark-completed"
                      data-kt-stepper-element="nav"
                    >
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">5</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Completed</h3>
                          <div className="stepper-desc">Review and Submit</div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Step 5--> */}
                  </div>
                  {/* <!--end::Nav--> */}
                </div>
                {/* <!--begin::Aside--> */}
                {/* <!--begin::Content--> */}
                <div className="flex-row-fluid py-lg-5 px-lg-15">
                  {/* <!--begin::Form--> */}
                  <form
                    className="form"
                    novalidate="novalidate"
                    id="kt_modal_create_app_form"
                  >
                    {/* <!--begin::Step 1--> */}
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row mb-10">
                          {/* <!--begin::Label--> */}
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
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-solid"
                            name="name"
                            placeholder=""
                            value=""
                          />
                          {/* <!--end::Input--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row">
                          {/* <!--begin::Label--> */}
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
                          {/* <!--end::Label--> */}
                          {/* <!--begin:Options--> */}
                          <div className="fv-row">
                            {/* <!--begin:Option--> */}
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              {/* <!--begin:Label--> */}
                              <span className="d-flex align-items-center me-2">
                                {/* <!--begin:Icon--> */}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-primary">
                                    <i className="ki-duotone ki-compass fs-1 text-primary">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                  </span>
                                </span>
                                {/* <!--end:Icon--> */}
                                {/* <!--begin:Info--> */}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">
                                    Quick Online Courses
                                  </span>
                                  <span className="fs-7 text-muted">
                                    Creating a clear text structure is just one
                                    SEO
                                  </span>
                                </span>
                                {/* <!--end:Info--> */}
                              </span>
                              {/* <!--end:Label--> */}
                              {/* <!--begin:Input--> */}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="1"
                                />
                              </span>
                              {/* <!--end:Input--> */}
                            </label>
                            {/* <!--end::Option--> */}
                            {/* <!--begin:Option--> */}
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              {/* <!--begin:Label--> */}
                              <span className="d-flex align-items-center me-2">
                                {/* <!--begin:Icon--> */}
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
                                {/* <!--end:Icon--> */}
                                {/* <!--begin:Info--> */}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">
                                    Face to Face Discussions
                                  </span>
                                  <span className="fs-7 text-muted">
                                    Creating a clear text structure is just one
                                    aspect
                                  </span>
                                </span>
                                {/* <!--end:Info--> */}
                              </span>
                              {/* <!--end:Label--> */}
                              {/* <!--begin:Input--> */}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="2"
                                />
                              </span>
                              {/* <!--end:Input--> */}
                            </label>
                            {/* <!--end::Option--> */}
                            {/* <!--begin:Option--> */}
                            <label className="d-flex flex-stack cursor-pointer">
                              {/* <!--begin:Label--> */}
                              <span className="d-flex align-items-center me-2">
                                {/* <!--begin:Icon--> */}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="ki-duotone ki-timer fs-1 text-success">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                    </i>
                                  </span>
                                </span>
                                {/* <!--end:Icon--> */}
                                {/* <!--begin:Info--> */}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">
                                    Full Intro Training
                                  </span>
                                  <span className="fs-7 text-muted">
                                    Creating a clear text structure copywriting
                                  </span>
                                </span>
                                {/* <!--end:Info--> */}
                              </span>
                              {/* <!--end:Label--> */}
                              {/* <!--begin:Input--> */}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="3"
                                />
                              </span>
                              {/* <!--end:Input--> */}
                            </label>
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end:Options--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 1--> */}
                    {/* <!--begin::Step 2--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row">
                          {/* <!--begin::Label--> */}
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
                          {/* <!--end::Label--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-warning">
                                  <i className="ki-duotone ki-html fs-2x text-warning">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">HTML5</span>
                                <span className="fs-7 text-muted">
                                  Base Web Projec
                                </span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                checked="checked"
                                name="framework"
                                value="1"
                              />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-success">
                                  <i className="ki-duotone ki-react fs-2x text-success">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">ReactJS</span>
                                <span className="fs-7 text-muted">
                                  Robust and flexible app framework
                                </span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                value="2"
                              />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-danger">
                                  <i className="ki-duotone ki-angular fs-2x text-danger">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">Angular</span>
                                <span className="fs-7 text-muted">
                                  Powerful data mangement
                                </span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                value="3"
                              />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-primary">
                                  <i className="ki-duotone ki-vue fs-2x text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">Vue</span>
                                <span className="fs-7 text-muted">
                                  Lightweight and responsive framework
                                </span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                value="4"
                              />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 2--> */}
                    {/* <!--begin::Step 3--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="required fs-5 fw-semibold mb-2">
                            Database Name
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-solid"
                            name="dbname"
                            placeholder=""
                            value="master_db"
                          />
                          {/* <!--end::Input--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row">
                          {/* <!--begin::Label--> */}
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
                          {/* <!--end::Label--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin::Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin::Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-success">
                                  <i className="ki-duotone ki-note text-success fs-2x">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end::Icon--> */}
                              {/* <!--begin::Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">MySQL</span>
                                <span className="fs-7 text-muted">
                                  Basic MySQL database
                                </span>
                              </span>
                              {/* <!--end::Info--> */}
                            </span>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dbengine"
                                checked="checked"
                                value="1"
                              />
                            </span>
                            {/* <!--end::Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin::Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin::Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-danger">
                                  <i className="ki-duotone ki-google text-danger fs-2x">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end::Icon--> */}
                              {/* <!--begin::Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">Firebase</span>
                                <span className="fs-7 text-muted">
                                  Google based app data management
                                </span>
                              </span>
                              {/* <!--end::Info--> */}
                            </span>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dbengine"
                                value="2"
                              />
                            </span>
                            {/* <!--end::Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer">
                            {/* <!--begin::Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin::Icon--> */}
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
                              {/* <!--end::Icon--> */}
                              {/* <!--begin::Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">DynamoDB</span>
                                <span className="fs-7 text-muted">
                                  Microsoft Fast NoSQL Database
                                </span>
                              </span>
                              {/* <!--end::Info--> */}
                            </span>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dbengine"
                                value="3"
                              />
                            </span>
                            {/* <!--end::Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 3--> */}
                    {/* <!--begin::Step 4--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="d-flex flex-column mb-7 fv-row">
                          {/* <!--begin::Label--> */}
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
                          {/* <!--end::Label--> */}
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder=""
                            name="card_name"
                            value="Max Doe"
                          />
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="d-flex flex-column mb-7 fv-row">
                          {/* <!--begin::Label--> */}
                          <label className="required fs-6 fw-semibold form-label mb-2">
                            Card Number
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input wrapper--> */}
                          <div className="position-relative">
                            {/* <!--begin::Input--> */}
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder="Enter card number"
                              name="card_number"
                              value="4111 1111 1111 1111"
                            />
                            {/* <!--end::Input--> */}
                            {/* <!--begin::Card logos--> */}
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
                            {/* <!--end::Card logos--> */}
                          </div>
                          {/* <!--end::Input wrapper--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="row mb-10">
                          {/* <!--begin::Col--> */}
                          <div className="col-md-8 fv-row">
                            {/* <!--begin::Label--> */}
                            <label className="required fs-6 fw-semibold form-label mb-2">
                              Expiration Date
                            </label>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Row--> */}
                            <div className="row fv-row">
                              {/* <!--begin::Col--> */}
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
                              {/* <!--end::Col--> */}
                              {/* <!--begin::Col--> */}
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
                              {/* <!--end::Col--> */}
                            </div>
                            {/* <!--end::Row--> */}
                          </div>
                          {/* <!--end::Col--> */}
                          {/* <!--begin::Col--> */}
                          <div className="col-md-4 fv-row">
                            {/* <!--begin::Label--> */}
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
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input wrapper--> */}
                            <div className="position-relative">
                              {/* <!--begin::Input--> */}
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                minlength="3"
                                maxlength="4"
                                placeholder="CVV"
                                name="card_cvv"
                              />
                              {/* <!--end::Input--> */}
                              {/* <!--begin::CVV icon--> */}
                              <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                <i className="ki-duotone ki-credit-cart fs-2hx">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::CVV icon--> */}
                            </div>
                            {/* <!--end::Input wrapper--> */}
                          </div>
                          {/* <!--end::Col--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="d-flex flex-stack">
                          {/* <!--begin::Label--> */}
                          <div className="me-5">
                            <label className="fs-6 fw-semibold form-label">
                              Save Card for further billing?
                            </label>
                            <div className="fs-7 fw-semibold text-muted">
                              If you need more info, please check budget
                              planning
                            </div>
                          </div>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Switch--> */}
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
                          {/* <!--end::Switch--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 4--> */}
                    {/* <!--begin::Step 5--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100 text-center">
                        {/* <!--begin::Heading--> */}
                        <h1 className="fw-bold text-gray-900 mb-3">Release!</h1>
                        {/* <!--end::Heading--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-3">
                          Submit your app to kickstart your project.
                        </div>
                        {/* <!--end::Description--> */}
                        {/* <!--begin::Illustration--> */}
                        <div className="text-center px-4 py-15">
                          <img
                            src="assets/media/illustrations/sketchy-1/9.png"
                            alt=""
                            className="mw-100 mh-300px"
                          />
                        </div>
                        {/* <!--end::Illustration--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 5--> */}
                    {/* <!--begin::Actions--> */}
                    <div className="d-flex flex-stack pt-10">
                      {/* <!--begin::Wrapper--> */}
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
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Wrapper--> */}
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
                      {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Actions--> */}
                  </form>
                  {/* <!--end::Form--> */}
                </div>
                {/* <!--end::Content--> */}
              </div>
              {/* <!--end::Stepper--> */}
            </div>
            {/* <!--end::Modal body--> */}
          </div>
          {/* <!--end::Modal content--> */}
        </div>
        {/* <!--end::Modal dialog--> */}
      </div>
      {/* <!--end::Modal - Create App--> */}
      {/* <!--begin::Modal - Offer A Deal--> */}
      <div
        className="modal fade"
        id="kt_modal_offer_a_deal"
        tabindex="-1"
        aria-hidden="true"
      >
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog modal-dialog-centered mw-1000px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header py-7 d-flex justify-content-between">
              {/* <!--begin::Modal title--> */}
              <h2>Offer a Deal</h2>
              {/* <!--end::Modal title--> */}
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--begin::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body scroll-y m-5">
              {/* <!--begin::Stepper--> */}
              <div
                className="stepper stepper-links d-flex flex-column"
                id="kt_modal_offer_a_deal_stepper"
              >
                {/* <!--begin::Nav--> */}
                <div className="stepper-nav justify-content-center py-2">
                  {/* <!--begin::Step 1--> */}
                  <div
                    className="stepper-item me-5 me-md-15 current"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Deal Type</h3>
                  </div>
                  {/* <!--end::Step 1--> */}
                  {/* <!--begin::Step 2--> */}
                  <div
                    className="stepper-item me-5 me-md-15"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Deal Details</h3>
                  </div>
                  {/* <!--end::Step 2--> */}
                  {/* <!--begin::Step 3--> */}
                  <div
                    className="stepper-item me-5 me-md-15"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Finance Settings</h3>
                  </div>
                  {/* <!--end::Step 3--> */}
                  {/* <!--begin::Step 4--> */}
                  <div className="stepper-item" data-kt-stepper-element="nav">
                    <h3 className="stepper-title">Completed</h3>
                  </div>
                  {/* <!--end::Step 4--> */}
                </div>
                {/* <!--end::Nav--> */}
                {/* <!--begin::Form--> */}
                <form
                  className="mx-auto mw-500px w-100 pt-15 pb-10"
                  novalidate="novalidate"
                  id="kt_modal_offer_a_deal_form"
                >
                  {/* <!--begin::Type--> */}
                  <div className="current" data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Deal Type</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">
                          If you need more info, please check out
                          <a href="#" className="link-primary fw-bold">
                            FAQ Page
                          </a>
                          .
                        </div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-15" data-kt-buttons="true">
                        {/* <!--begin::Option--> */}
                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                          {/* <!--begin::Input--> */}
                          <input
                            className="btn-check"
                            type="radio"
                            checked="checked"
                            name="offer_type"
                            value="1"
                          />
                          {/* <!--end::Input--> */}
                          {/* <!--begin::Label--> */}
                          <span className="d-flex">
                            {/* <!--begin::Icon--> */}
                            <i className="ki-duotone ki-profile-circle fs-3hx">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                            {/* <!--end::Icon--> */}
                            {/* <!--begin::Info--> */}
                            <span className="ms-4">
                              <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                Personal Deal
                              </span>
                              <span className="fw-semibold fs-4 text-muted">
                                If you need more info, please check it out
                              </span>
                            </span>
                            {/* <!--end::Info--> */}
                          </span>
                          {/* <!--end::Label--> */}
                        </label>
                        {/* <!--end::Option--> */}
                        {/* <!--begin::Option--> */}
                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                          {/* <!--begin::Input--> */}
                          <input
                            className="btn-check"
                            type="radio"
                            name="offer_type"
                            value="2"
                          />
                          {/* <!--end::Input--> */}
                          {/* <!--begin::Label--> */}
                          <span className="d-flex">
                            {/* <!--begin::Icon--> */}
                            <i className="ki-duotone ki-element-11 fs-3hx">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </i>
                            {/* <!--end::Icon--> */}
                            {/* <!--begin::Info--> */}
                            <span className="ms-4">
                              <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                Corporate Deal
                              </span>
                              <span className="fw-semibold fs-4 text-muted">
                                Create corporate account to manage users
                              </span>
                            </span>
                            {/* <!--end::Info--> */}
                          </span>
                          {/* <!--end::Label--> */}
                        </label>
                        {/* <!--end::Option--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Actions--> */}
                      <div className="d-flex justify-content-end">
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          data-kt-element="type-next"
                        >
                          <span className="indicator-label">Offer Details</span>
                          <span className="indicator-progress">
                            Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                          </span>
                        </button>
                      </div>
                      {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                  {/* <!--end::Type--> */}
                  {/* <!--begin::Details--> */}
                  <div data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Deal Details</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">
                          If you need more info, please check out
                          <a href="#" className="link-primary fw-bold">
                            FAQ Page
                          </a>
                          .
                        </div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="required fs-6 fw-semibold mb-2">
                          Customer
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Input--> */}
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
                        {/* <!--end::Input--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="required fs-6 fw-semibold mb-2">
                          Deal Title
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Input--> */}
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder="Enter Deal Title"
                          name="details_title"
                          value="Marketing Campaign"
                        />
                        {/* <!--end::Input--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="fs-6 fw-semibold mb-2">
                          Deal Description
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Label--> */}
                        <textarea
                          className="form-control form-control-solid"
                          rows="3"
                          placeholder="Enter Deal Description"
                          name="details_description"
                        >
                          Experience share market at your fingertips with TICK
                          PRO stock investment mobile trading app
                        </textarea>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        <label className="required fs-6 fw-semibold mb-2">
                          Activation Date
                        </label>
                        <div className="position-relative d-flex align-items-center">
                          {/* <!--begin::Icon--> */}
                          <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                          </i>
                          {/* <!--end::Icon--> */}
                          {/* <!--begin::Datepicker--> */}
                          <input
                            className="form-control form-control-solid ps-12"
                            placeholder="Pick date range"
                            name="details_activation_date"
                          />
                          {/* <!--end::Datepicker--> */}
                        </div>
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-15">
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-stack">
                          {/* <!--begin::Label--> */}
                          <div className="me-5">
                            <label className="required fs-6 fw-semibold">
                              Notifications
                            </label>
                            <div className="fs-7 fw-semibold text-muted">
                              Allow Notifications by Phone or Email
                            </div>
                          </div>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Checkboxes--> */}
                          <div className="d-flex">
                            {/* <!--begin::Checkbox--> */}
                            <label className="form-check form-check-custom form-check-solid me-10">
                              {/* <!--begin::Input--> */}
                              <input
                                className="form-check-input h-20px w-20px"
                                type="checkbox"
                                value="email"
                                name="details_notifications[]"
                              />
                              {/* <!--end::Input--> */}
                              {/* <!--begin::Label--> */}
                              <span className="form-check-label fw-semibold">
                                Email
                              </span>
                              {/* <!--end::Label--> */}
                            </label>
                            {/* <!--end::Checkbox--> */}
                            {/* <!--begin::Checkbox--> */}
                            <label className="form-check form-check-custom form-check-solid">
                              {/* <!--begin::Input--> */}
                              <input
                                className="form-check-input h-20px w-20px"
                                type="checkbox"
                                value="phone"
                                checked="checked"
                                name="details_notifications[]"
                              />
                              {/* <!--end::Input--> */}
                              {/* <!--begin::Label--> */}
                              <span className="form-check-label fw-semibold">
                                Phone
                              </span>
                              {/* <!--end::Label--> */}
                            </label>
                            {/* <!--end::Checkbox--> */}
                          </div>
                          {/* <!--end::Checkboxes--> */}
                        </div>
                        {/* <!--begin::Wrapper--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Actions--> */}
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
                      {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                  {/* <!--end::Details--> */}
                  {/* <!--begin::Budget--> */}
                  <div data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Finance</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">
                          If you need more info, please check out
                          <a href="#" className="link-primary fw-bold">
                            FAQ Page
                          </a>
                          .
                        </div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
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
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Dialer--> */}
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
                          {/* <!--begin::Decrease control--> */}
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
                          {/* <!--end::Decrease control--> */}
                          {/* <!--begin::Input control--> */}
                          <input
                            type="text"
                            className="form-control form-control-solid border-0 ps-12"
                            data-kt-dialer-control="input"
                            placeholder="Amount"
                            name="finance_setup"
                            readonly="readonly"
                            value="$50"
                          />
                          {/* <!--end::Input control--> */}
                          {/* <!--begin::Increase control--> */}
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
                          {/* <!--end::Increase control--> */}
                        </div>
                        {/* <!--end::Dialer--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="fs-6 fw-semibold mb-2">
                          Budget Usage
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Row--> */}
                        <div
                          className="row g-9"
                          data-kt-buttons="true"
                          data-kt-buttons-target="[data-kt-button='true']"
                        >
                          {/* <!--begin::Col--> */}
                          <div className="col-md-6 col-lg-12 col-xxl-6">
                            {/* <!--begin::Option--> */}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/* <!--begin::Radio--> */}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="finance_usage"
                                  value="1"
                                  checked="checked"
                                />
                              </span>
                              {/* <!--end::Radio--> */}
                              {/* <!--begin::Info--> */}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                  Precise Usage
                                </span>
                                <span className="fw-semibold fs-7 text-gray-600">
                                  Withdraw money to your bank account per
                                  transaction under $50,000 budget
                                </span>
                              </span>
                              {/* <!--end::Info--> */}
                            </label>
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end::Col--> */}
                          {/* <!--begin::Col--> */}
                          <div className="col-md-6 col-lg-12 col-xxl-6">
                            {/* <!--begin::Option--> */}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/* <!--begin::Radio--> */}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="finance_usage"
                                  value="2"
                                />
                              </span>
                              {/* <!--end::Radio--> */}
                              {/* <!--begin::Info--> */}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                  Extreme Usage
                                </span>
                                <span className="fw-semibold fs-7 text-gray-600">
                                  Withdraw money to your bank account per
                                  transaction under $50,000 budget
                                </span>
                              </span>
                              {/* <!--end::Info--> */}
                            </label>
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end::Col--> */}
                        </div>
                        {/* <!--end::Row--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-15">
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-stack">
                          {/* <!--begin::Label--> */}
                          <div className="me-5">
                            <label className="fs-6 fw-semibold">
                              Allow Changes in Budget
                            </label>
                            <div className="fs-7 fw-semibold text-muted">
                              If you need more info, please check budget
                              planning
                            </div>
                          </div>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Switch--> */}
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
                          {/* <!--end::Switch--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Actions--> */}
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
                      {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                  {/* <!--end::Budget--> */}
                  {/* <!--begin::Complete--> */}
                  <div data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Deal Created!</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">
                          If you need more info, please check out
                          <a href="#" className="link-primary fw-bold">
                            FAQ Page
                          </a>
                          .
                        </div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Actions--> */}
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
                      {/* <!--end::Actions--> */}
                      {/* <!--begin::Illustration--> */}
                      <div className="text-center px-4">
                        <img
                          src="assets/media/illustrations/sketchy-1/20.png"
                          alt=""
                          className="mw-100 mh-300px"
                        />
                      </div>
                      {/* <!--end::Illustration--> */}
                    </div>
                  </div>
                  {/* <!--end::Complete--> */}
                </form>
                {/* <!--end::Form--> */}
              </div>
              {/* <!--end::Stepper--> */}
            </div>
            {/* <!--begin::Modal body--> */}
          </div>
        </div>
      </div>
      {/* <!--end::Modal - Offer A Deal--> */}
      {/* <!--begin::Modal - Users Search--> */}
      <div
        className="modal fade"
        id="kt_modal_users_search"
        tabindex="-1"
        aria-hidden="true"
      >
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog modal-dialog-centered mw-650px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header pb-0 border-0 justify-content-end">
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--begin::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              {/* <!--begin::Content--> */}
              <div className="text-center mb-13">
                <h1 className="mb-3">Search Users</h1>
                <div className="text-muted fw-semibold fs-5">
                  Invite Collaborators To Your Project
                </div>
              </div>
              {/* <!--end::Content--> */}
              {/* <!--begin::Search--> */}
              <div
                id="kt_modal_users_search_handler"
                data-kt-search-keypress="true"
                data-kt-search-min-length="2"
                data-kt-search-enter="enter"
                data-kt-search-layout="inline"
              >
                {/* <!--begin::Form--> */}
                <form
                  data-kt-search-element="form"
                  className="w-100 position-relative mb-5"
                  autocomplete="off"
                >
                  {/* <!--begin::Hidden input(Added to disable form autocomplete)--> */}
                  <input type="hidden" />
                  {/* <!--end::Hidden input--> */}
                  {/* <!--begin::Icon--> */}
                  <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  {/* <!--end::Icon--> */}
                  {/* <!--begin::Input--> */}
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid px-15"
                    name="search"
                    value=""
                    placeholder="Search by username, full name or email..."
                    data-kt-search-element="input"
                  />
                  {/* <!--end::Input--> */}
                  {/* <!--begin::Spinner--> */}
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                    data-kt-search-element="spinner"
                  >
                    <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                  </span>
                  {/* <!--end::Spinner--> */}
                  {/* <!--begin::Reset--> */}
                  <span
                    className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                    data-kt-search-element="clear"
                  >
                    <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </span>
                  {/* <!--end::Reset--> */}
                </form>
                {/* <!--end::Form--> */}
                {/* <!--begin::Wrapper--> */}
                <div className="py-5">
                  {/* <!--begin::Suggestions--> */}
                  <div data-kt-search-element="suggestions">
                    {/* <!--begin::Heading--> */}
                    <h3 className="fw-semibold mb-5">Recently searched:</h3>
                    {/* <!--end::Heading--> */}
                    {/* <!--begin::Users--> */}
                    <div className="mh-375px scroll-y me-n7 pe-7">
                      {/* <!--begin::User--> */}
                      <a
                        href="#"
                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                      >
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">
                            Emma Smith
                          </span>
                          <span className="badge badge-light">
                            Art Director
                          </span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a
                        href="#"
                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                      >
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            M
                          </span>
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">
                            Melody Macy
                          </span>
                          <span className="badge badge-light">
                            Marketing Analytic
                          </span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a
                        href="#"
                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                      >
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">
                            Max Smith
                          </span>
                          <span className="badge badge-light">
                            Software Enginer
                          </span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a
                        href="#"
                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                      >
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">
                            Sean Bean
                          </span>
                          <span className="badge badge-light">
                            Web Developer
                          </span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a
                        href="#"
                        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                      >
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img
                            alt="Pic"
                            src="assets/media/avatars/300-25.jpg"
                          />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">
                            Brian Cox
                          </span>
                          <span className="badge badge-light">
                            UI/UX Designer
                          </span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                    </div>
                    {/* <!--end::Users--> */}
                  </div>
                  {/* <!--end::Suggestions--> */}
                  {/* <!--begin::Results(add d-none to below element to hide the users list by default)--> */}
                  <div data-kt-search-element="results" className="d-none">
                    {/* <!--begin::Users--> */}
                    <div className="mh-375px scroll-y me-n7 pe-7">
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="0"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-6.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="1"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              M
                            </span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="2"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-1.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="3"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-5.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="4"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-25.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="5"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-warning text-warning fw-semibold">
                              C
                            </span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="6"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-9.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="7"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              O
                            </span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="8"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-primary text-primary fw-semibold">
                              N
                            </span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="9"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-23.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="10"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              E
                            </span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="11"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-12.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="12"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-info text-info fw-semibold">
                              A
                            </span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="13"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-13.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="14"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-success text-success fw-semibold">
                              L
                            </span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="15"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-21.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div
                        className="rounded d-flex flex-stack bg-active-lighten p-4"
                        data-user-id="16"
                      >
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
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
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img
                              alt="Pic"
                              src="assets/media/avatars/300-5.jpg"
                            />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
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
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
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
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                    </div>
                    {/* <!--end::Users--> */}
                    {/* <!--begin::Actions--> */}
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
                    {/* <!--end::Actions--> */}
                  </div>
                  {/* <!--end::Results--> */}
                  {/* <!--begin::Empty--> */}
                  <div
                    data-kt-search-element="empty"
                    className="text-center d-none"
                  >
                    {/* <!--begin::Message--> */}
                    <div className="fw-semibold py-10">
                      <div className="text-gray-600 fs-3 mb-2">
                        No users found
                      </div>
                      <div className="text-muted fs-6">
                        Try to search by username, full name or email...
                      </div>
                    </div>
                    {/* <!--end::Message--> */}
                    {/* <!--begin::Illustration--> */}
                    <div className="text-center px-5">
                      <img
                        src="assets/media/illustrations/sketchy-1/1.png"
                        alt=""
                        className="w-100 h-200px h-sm-325px"
                      />
                    </div>
                    {/* <!--end::Illustration--> */}
                  </div>
                  {/* <!--end::Empty--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Search--> */}
            </div>
            {/* <!--end::Modal body--> */}
          </div>
          {/* <!--end::Modal content--> */}
        </div>
        {/* <!--end::Modal dialog--> */}
      </div>
      {/* <!--end::Modal - Users Search--> */}
      {/* <!--begin::Modal - Invite Friends--> */}
      <div
        className="modal fade"
        id="kt_modal_invite_friends"
        tabindex="-1"
        aria-hidden="true"
      >
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog mw-650px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header pb-0 border-0 justify-content-end">
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--begin::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              {/* <!--begin::Heading--> */}
              <div className="text-center mb-13">
                {/* <!--begin::Title--> */}
                <h1 className="mb-3">Invite a Friend</h1>
                {/* <!--end::Title--> */}
                {/* <!--begin::Description--> */}
                <div className="text-muted fw-semibold fs-5">
                  If you need more info, please check out
                  <a href="#" className="link-primary fw-bold">
                    FAQ Page
                  </a>
                  .
                </div>
                {/* <!--end::Description--> */}
              </div>
              {/* <!--end::Heading--> */}
              {/* <!--begin::Google Contacts Invite--> */}
              <div className="btn btn-light-primary fw-bold w-100 mb-8">
                <img
                  alt="Logo"
                  src="assets/media/svg/brand-logos/google-icon.svg"
                  className="h-20px me-3"
                />
                Invite Gmail Contacts
              </div>
              {/* <!--end::Google Contacts Invite--> */}
              {/* <!--begin::Separator--> */}
              <div className="separator d-flex flex-center mb-8">
                <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
                  or
                </span>
              </div>
              {/* <!--end::Separator--> */}
              {/* <!--begin::Textarea--> */}
              <textarea
                className="form-control form-control-solid mb-8"
                rows="3"
                placeholder="Type or paste emails here"
              ></textarea>
              {/* <!--end::Textarea--> */}
              {/* <!--begin::Users--> */}
              <div className="mb-10">
                {/* <!--begin::Heading--> */}
                <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                {/* <!--end::Heading--> */}
                {/* <!--begin::List--> */}
                <div className="mh-300px scroll-y me-n7 pe-7">
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                          M
                        </span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Max Smith
                        </a>
                        <div className="fw-semibold text-muted">max@kt.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-warning text-warning fw-semibold">
                          C
                        </span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                          O
                        </span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-primary text-primary fw-semibold">
                          N
                        </span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                          E
                        </span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-semibold">
                          A
                        </span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-success text-success fw-semibold">
                          L
                        </span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
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
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
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
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                </div>
                {/* <!--end::List--> */}
              </div>
              {/* <!--end::Users--> */}
              {/* <!--begin::Notice--> */}
              <div className="d-flex flex-stack">
                {/* <!--begin::Label--> */}
                <div className="me-5 fw-semibold">
                  <label className="fs-6">Adding Users by Team Members</label>
                  <div className="fs-7 text-muted">
                    If you need more info, please check budget planning
                  </div>
                </div>
                {/* <!--end::Label--> */}
                {/* <!--begin::Switch--> */}
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
                {/* <!--end::Switch--> */}
              </div>
              {/* <!--end::Notice--> */}
            </div>
            {/* <!--end::Modal body--> */}
          </div>
          {/* <!--end::Modal content--> */}
        </div>
        {/* <!--end::Modal dialog--> */}
      </div>
    </>
  );
}
export default Overview;

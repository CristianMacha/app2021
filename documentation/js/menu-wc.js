'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app2021 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d16cc772df13a03e7ebfa2daa18af7ad"' : 'data-target="#xs-components-links-module-AppModule-d16cc772df13a03e7ebfa2daa18af7ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d16cc772df13a03e7ebfa2daa18af7ad"' :
                                            'id="xs-components-links-module-AppModule-d16cc772df13a03e7ebfa2daa18af7ad"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-75e23c24e316e61bf0c4b6365e531824"' : 'data-target="#xs-components-links-module-AuthModule-75e23c24e316e61bf0c4b6365e531824"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-75e23c24e316e61bf0c4b6365e531824"' :
                                            'id="xs-components-links-module-AuthModule-75e23c24e316e61bf0c4b6365e531824"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BackofficeModule.html" data-type="entity-link">BackofficeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BackofficeModule-1f9fdceb7f6407f8fd558c19f403f404"' : 'data-target="#xs-components-links-module-BackofficeModule-1f9fdceb7f6407f8fd558c19f403f404"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BackofficeModule-1f9fdceb7f6407f8fd558c19f403f404"' :
                                            'id="xs-components-links-module-BackofficeModule-1f9fdceb7f6407f8fd558c19f403f404"' }>
                                            <li class="link">
                                                <a href="components/BackofficeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BackofficeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HoraryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HoraryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BackofficeRoutingModule.html" data-type="entity-link">BackofficeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FrontofficeModule.html" data-type="entity-link">FrontofficeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FrontofficeModule-af68dbba196c3bfdf5e04e1f471818cd"' : 'data-target="#xs-components-links-module-FrontofficeModule-af68dbba196c3bfdf5e04e1f471818cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FrontofficeModule-af68dbba196c3bfdf5e04e1f471818cd"' :
                                            'id="xs-components-links-module-FrontofficeModule-af68dbba196c3bfdf5e04e1f471818cd"' }>
                                            <li class="link">
                                                <a href="components/FrontFooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FrontFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrontHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FrontHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrontofficeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FrontofficeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FrontofficeRoutingModule.html" data-type="entity-link">FrontofficeRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AcademicPlan.html" data-type="entity-link">AcademicPlan</a>
                            </li>
                            <li class="link">
                                <a href="classes/Enrollment.html" data-type="entity-link">Enrollment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Materia.html" data-type="entity-link">Materia</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AcademicPlanService.html" data-type="entity-link">AcademicPlanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardGuard.html" data-type="entity-link">AuthGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAacademicPlan.html" data-type="entity-link">IAacademicPlan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthLogin.html" data-type="entity-link">IAuthLogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthRegister.html" data-type="entity-link">IAuthRegister</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMateria.html" data-type="entity-link">IMateria</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
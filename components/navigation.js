class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="header">
    <div class="navbar navbar-default" role="navigation">
        <div class="container">
            <div class="navbar-header">
                 <a class="navbar-brand" href="index.html"><img id="logo-header" src="assets/img/logo.png" alt="Logo"></a>
            </div>

            <div>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown"><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false">Research<i class="icon-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="atrial_fibrillation_challenges.html">Atrial fibrillation ablation challenges</a></li>
                            <li><a href="fiber_effect.html">Fiber effects on arrhythmia patterns</a></li>
                            <li><a href="patient_specific_heart_modeling.html">Patient-specific heart modeling for arrhythmia ablation</a></li>
                            <li><a href="clinical_data_processing_and_arrhythmia_detection.html">Clinical data processing and arrhythmia source detection</a></li>
                            <li><a href="heart_modeling_for_pacemakers.html">Heart modeling for pacemakers closed-loop evaluation</a></li>
                            <li><a href="pacemaker_software_verification.html">Pacemaker software verification</a></li>
                            <li><a href="model_based_design_for_pacemaker_software.html">Model-based design for pacemaker software</a></li>
                            <li><a href="computer_aided_clinical_trials.html">Computer-aided clinical trials</a></li>
                            <li><a href="physiological_control_systems.html">Physiological control systems</a></li>
                            <li><a href="open_icd.html">An Open Platform for Safer ICDs</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="publications.html">Publications</a></li>
                    <li class="dropdown"><a href="people.html">People</a></li>
                    <li class="dropdown"><a href="awards.html">Awards</a></li>
                    <li class="dropdown"><a href="downloads.html">Downloads</a></li>
                    </li><li class="dropdown"><a href="faq.html">FAQ</a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    `;
  }
}

customElements.define('navigation-component', Navigation);

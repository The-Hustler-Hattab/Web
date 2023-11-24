class ProjectHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="./index.html">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link ${isActive('/project_c2.html')}" href="./project_c2.html">Command & Control</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${isActive('/project_budget.html')}" href="./project_budget.html">Budget Tracking</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${isActive('/project_phishing.html')}" href="./project_phishing.html">Phshing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${isActive('/project_SMTP.html')}" href="./project_SMTP.html">SMTP Form</a>
                            </li>
       
                        </ul>
                    </div>
                </div>
            </nav>
            <hr>
            <hr>
            <hr>
        `;
    }
}

customElements.define("project-header", ProjectHeader);

function isActive(href) {
    // Get the current page's URL
    const currentURL = window.location.href;
    
    // Compare the current URL with the href
    if (currentURL.includes(href)) {
        return 'active';
    } else {
        return '';
    }
}

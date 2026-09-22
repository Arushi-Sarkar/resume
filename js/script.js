// Arushi Sarkar — Portfolio interactions
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile navigation ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navMenu.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav-link')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  /* ---------- Hero role text rotator ---------- */
  const roleEl = document.querySelector('.role-cycle');
  if (roleEl) {
    const roles = [
      'AI Engineer in training',
      'Data Engineer Intern @ OCBC',
      'Machine Learning Builder',
      'Full-Stack Developer'
    ];
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = false;
    roleEl.textContent = roles[0];

    function tickRole() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        if (charIndex > current.length) {
          deleting = true;
          setTimeout(tickRole, 1800);
          return;
        }
      } else {
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
        }
      }
      roleEl.textContent = roles[roleIndex].slice(0, charIndex);
      setTimeout(tickRole, deleting ? 35 : 65);
    }
    setTimeout(tickRole, 1800);
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.revealDelay || (i % 4) * 80;
          setTimeout(() => entry.target.classList.add('in-view'), delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Scroll indicator ---------- */
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function () {
      const next = document.querySelector('.hero').nextElementSibling;
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- Project filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filterValue = this.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.classList.remove('hidden');
        } else {
          const categories = card.getAttribute('data-category');
          if (categories && categories.includes(filterValue)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });
    });
  });

  /* ---------- Project modal ---------- */
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const projectDetailsButtons = document.querySelectorAll('.project-details-btn');

  const projectData = {
    skinscan: {
      title: 'SkinScan AI Platform',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">AWS Rekognition</span>
            <span class="tech-tag">Lambda</span>
            <span class="tech-tag">API Gateway</span>
            <span class="tech-tag">CloudFront</span>
            <span class="tech-tag">SNS</span>
            <span class="tech-tag">Polly</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A personalised skincare platform built for teenagers, providing free AI-driven skin analysis to remove the financial and confidence barriers that keep young people from getting skincare advice.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>AI Skin Analysis:</strong> AWS Rekognition powers skin-type prediction and acne analysis</li>
          <li><strong>Multi-language Support:</strong> Personalised advice accessible to a wider demographic</li>
          <li><strong>Audio Accessibility:</strong> AWS Polly narrates results for low-literacy and visually impaired users</li>
          <li><strong>Secure by Design:</strong> AWS IAM enforces least-privilege, role-specific permissions</li>
        </ul>
        <h3>Architecture</h3>
        <ul>
          <li>Lambda functions handle backend logic behind API Gateway</li>
          <li>CloudFront delivers the frontend at scale with low latency</li>
          <li>SNS pushes notifications back to users after analysis completes</li>
        </ul>
        <div>
          <a href="https://1drv.ms/w/c/6e2168cc5cba539f/EULRUCpMwr1AsER-wFPOZRYBY0c7EnaLO5KOFWXVdK_W7g?e=1eK693" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Read Full Report</a>
        </div>
      `
    },
    sustainscore: {
      title: 'SustainScore Mobile App',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">Flutter</span>
            <span class="tech-tag">Dart</span>
            <span class="tech-tag">Biometric Auth</span>
            <span class="tech-tag">Firebase</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A Flutter mobile app that helps users track and reduce their daily water, electricity, and plastic consumption, built in support of Singapore's Green Plan 2030.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Consumption Tracking:</strong> Monitors daily usage across water, electricity, and plastic</li>
          <li><strong>Gamification:</strong> Badge system rewards progress and unlocks green-cause donations</li>
          <li><strong>Responsive Dashboard:</strong> Usage history and analytics at a glance</li>
          <li><strong>Biometric Authentication:</strong> Secure, frictionless sign-in and profile management</li>
        </ul>
        <h3>Impact</h3>
        <ul>
          <li>Donation feature ties personal progress to real environmental causes</li>
          <li>Designed for future IoT integration for automatic consumption logging</li>
        </ul>
        <div>
          <a href="https://youtu.be/ldIyxv5RQfs" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-play"></i> Watch Demo</a>
          <a href="https://1drv.ms/w/c/6e2168cc5cba539f/ERwyTdqeneNNkNyrNUjpyasBZ1Fj_vtr7OslhSju1SHdew?e=WShXXI" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fas fa-file-alt"></i> Proposal</a>
          <a href="https://1drv.ms/p/c/6e2168cc5cba539f/ETFNYjechlVOlHT1G3KSOssBKVpjONIqifYje9rLO2p_4Q?e=912J2d" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fas fa-file-alt"></i> Report</a>
        </div>
      `
    },
    flightprice: {
      title: 'Flight Price Prediction',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Scikit-learn</span>
            <span class="tech-tag">Gradient Boosting</span>
            <span class="tech-tag">Pandas</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A machine learning model trained on 10,000+ records from Kaggle's Flight Price Dataset, predicting fares in real time through a deployed web app.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Feature Engineering:</strong> Airline, source, destination, duration, and time-based features</li>
          <li><strong>Model Comparison:</strong> Multiple regressors tested before settling on Gradient Boosting</li>
          <li><strong>Real-time Predictions:</strong> Deployed as an interactive Streamlit app</li>
        </ul>
        <h3>Results</h3>
        <ul>
          <li>Gradient Boosting achieved R&sup2; = 0.81</li>
          <li>Average prediction error of ₹1,362</li>
          <li>Validated through cross-validation for robustness</li>
        </ul>
        <div>
          <a href="https://fihba97vh88acpvvaqgmsx.streamlit.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-play"></i> Live Demo</a>
          <a href="https://1drv.ms/p/c/6e2168cc5cba539f/ERSVKMESKBFBgxqY30smxJkBp2zmudt8qLp_lys6suEodg?e=sXXLov" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fas fa-file-alt"></i> Report</a>
        </div>
      `
    },
    rpa: {
      title: 'Invoice Processing Automation',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">UiPath</span>
            <span class="tech-tag">Orchestrator</span>
            <span class="tech-tag">RPA</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>An automated invoice-processing solution built for Finance, Accounting, and Procurement teams, cutting manual data entry and turnaround time.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Multi-app Integration:</strong> Outlook, Excel, Word, Google Suite, and PDF tools working together</li>
          <li><strong>Orchestrator Triggers:</strong> Scheduled runs remove the need for manual kickoff</li>
          <li><strong>Automated Reminders:</strong> Google Calendar integration for payment due dates</li>
        </ul>
        <h3>Impact</h3>
        <ul>
          <li>Reduced manual workload and processing errors</li>
          <li>Demonstrated RPA value for small-to-medium finance teams</li>
        </ul>
        <div>
          <a href="https://youtu.be/W3onMh5fLLU" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-play"></i> Watch Demo</a>
          <a href="https://1drv.ms/p/c/6e2168cc5cba539f/ERfI7NI-Ht1BmcSssgvMxPkBLBJblufs6_3iZnX_ZaagQQ?e=SGvav5" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fas fa-file-alt"></i> Report</a>
        </div>
      `
    },
    security: {
      title: 'Windows Security Hardening',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">Windows 11</span>
            <span class="tech-tag">VirtualBox</span>
            <span class="tech-tag">IIS</span>
            <span class="tech-tag">SSL/TLS</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A hands-on hardening project applying CIS Benchmark standards to a Windows 11 environment, with secure IIS and network service configuration for remote-work scenarios.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>CIS Benchmarking:</strong> Systematic vulnerability remediation against industry standards</li>
          <li><strong>SSL/TLS Configuration:</strong> Secured IIS FTP and web services with certificates</li>
          <li><strong>Firewall Rules:</strong> Advanced Windows Firewall configuration</li>
          <li><strong>Documentation:</strong> Before/after evidence with technical justification for every change</li>
        </ul>
        <div>
          <a href="https://1drv.ms/w/c/6e2168cc5cba539f/EZIA4S1f2zJHrN2Lj8adhWQBJmfK4av6WNUrm5uiuJNwvQ?e=H5PyhV" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-file-alt"></i> Read Full Report</a>
        </div>
      `
    },
    dataanalytics: {
      title: 'Data Analytics & ML Workflow',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">KNIME</span>
            <span class="tech-tag">Power BI</span>
            <span class="tech-tag">K-means</span>
            <span class="tech-tag">Linear Regression</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>An end-to-end analytics workflow on an 89,000-row global social values and sustainability dataset, from cleaning through to interactive dashboards.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Data Profiling & Cleaning:</strong> Resolved missing values, negative values, and categorical inconsistencies</li>
          <li><strong>K-means Clustering:</strong> Segmented respondents by self-perceived health status</li>
          <li><strong>Predictive Modelling:</strong> Linear regression for monthly salary analysis</li>
          <li><strong>Interactive Dashboards:</strong> Power BI visualisations for cluster exploration</li>
        </ul>
        <div>
          <a href="https://1drv.ms/w/c/6e2168cc5cba539f/EVkXPGQLbfNAjXOFKel3zG4BxVXKQCkToPph9nEbzFT82w?e=v8QPzF" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-file-alt"></i> Read Full Report</a>
        </div>
      `
    },
    vending: {
      title: 'Vending Machine Management System',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">HTML/CSS</span>
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">Express.js</span>
            <span class="tech-tag">MySQL</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A full-stack web application for managing vending machines across campus, built with a RESTful Express.js API and MySQL backend.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Full CRUD:</strong> Add, update, and remove vending machines and items</li>
          <li><strong>RESTful API:</strong> Clean separation between frontend and backend logic</li>
          <li><strong>Error Handling:</strong> Defensive API design with proper validation</li>
        </ul>
        <div>
          <a href="https://1drv.ms/w/c/6e2168cc5cba539f/EYwPXexUFsdAv3laHL4mSb8BYbg0VFDIVTORHIOwO2l91g?e=eXwwIB" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-file-alt"></i> Read Full Report</a>
          <a href="https://github.com/Arushi-Sarkar" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fab fa-github"></i> View on GitHub</a>
        </div>
      `
    },
    uxui: {
      title: 'Music Player UX/UI Prototyping',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">Figma</span>
            <span class="tech-tag">Axure</span>
            <span class="tech-tag">WCAG</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A mobile music player designed around accessibility, usability, and sustainability, from user research through to a high-fidelity interactive prototype.</p>
        <h3>Process</h3>
        <ul>
          <li><strong>User Research:</strong> Analysed existing music app interfaces and behaviours</li>
          <li><strong>Wireframing:</strong> Low-fidelity wireframes iterated into high-fidelity prototypes</li>
          <li><strong>Usability Testing:</strong> Feedback loops informed the final design</li>
          <li><strong>WCAG Compliance:</strong> Accessibility considered at every step</li>
        </ul>
        <div>
          <a href="https://bfs4ol.axshare.com/?g=4" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> View Interactive Prototype</a>
        </div>
      `
    },
    cloud: {
      title: 'Cloud Migration & Networking Case Study',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">Packet Tracer</span>
            <span class="tech-tag">IaaS / PaaS / SaaS</span>
            <span class="tech-tag">Network Design</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A cloud migration plan for a mid-sized company's non-critical apps and data, backed by a full network topology design.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Network Topology:</strong> Cisco Packet Tracer diagrams for devices and connections</li>
          <li><strong>Service Model Selection:</strong> IaaS, PaaS, and SaaS recommendations matched to requirements</li>
          <li><strong>Risk Assessment:</strong> Security, cost, and performance trade-offs with mitigation strategies</li>
        </ul>
        <div>
          <a href="https://1drv.ms/w/c/6e2168cc5cba539f/EXspOl_Zae1NqDp13M7yBcgBcXQrK2tggwnSjKD7QjmdNw?e=CXZdbR" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-file-alt"></i> Read Full Report</a>
        </div>
      `
    },
    medchatbot: {
      title: 'Medical Diagnosis & Appointment Chatbot',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">TF-IDF</span>
            <span class="tech-tag">Logistic Regression</span>
            <span class="tech-tag">ChromaDB</span>
            <span class="tech-tag">Llama 3</span>
            <span class="tech-tag">Dialogflow CX</span>
            <span class="tech-tag">BigQuery</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>A symptom-based disease classifier paired with a retrieval-augmented chatbot for treatment guidance and appointment booking.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Disease Classification:</strong> TF-IDF + Logistic Regression reaching 98% accuracy across 25 disease classes</li>
          <li><strong>RAG Pipeline:</strong> ChromaDB vector store with Llama 3 for grounded treatment recommendations</li>
          <li><strong>Conversational Booking:</strong> Dialogflow CX chatbot with BigQuery integration for appointment management</li>
        </ul>
        <h3>Why It Matters</h3>
        <ul>
          <li>Combines classical ML with modern RAG techniques in one working pipeline</li>
          <li>Demonstrates end-to-end system design: classification &rarr; retrieval &rarr; conversational UI</li>
        </ul>
        <div>
          <a href="https://github.com/Arushi-Sarkar" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fab fa-github"></i> View on GitHub</a>
        </div>
      `
    },
    ibmwatson: {
      title: 'IBM Watson for Oncology: AI Ethics Case Study',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">AI Ethics</span>
            <span class="tech-tag">Healthcare AI</span>
            <span class="tech-tag">Case Study</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>An analysis of IBM Watson for Oncology's real-world deployment failures across 230+ hospitals globally, examining what went wrong and why.</p>
        <h3>Key Findings</h3>
        <ul>
          <li><strong>Unsafe Recommendations:</strong> Cases of unsafe and incorrect treatment suggestions</li>
          <li><strong>Deceptive Marketing:</strong> Capabilities oversold relative to actual clinical validation</li>
          <li><strong>Algorithmic Bias:</strong> Training data skewed toward specific patient populations</li>
        </ul>
        <h3>Root Causes & Recommendations</h3>
        <ul>
          <li>Identified four root causes spanning data, process, and governance failures</li>
          <li>Proposed mandatory clinical validation standards before deployment</li>
          <li>Recommended independent AI ethics oversight boards for healthcare AI</li>
        </ul>
      `
    },
    flowers: {
      title: 'Flower Classification with Deep Learning',
      content: `
        <div class="modal-project-header">
          <div class="project-tech-stack">
            <span class="tech-tag">CNN</span>
            <span class="tech-tag">Transfer Learning</span>
            <span class="tech-tag">ResNet50</span>
            <span class="tech-tag">EfficientNetB0</span>
          </div>
        </div>
        <h3>Overview</h3>
        <p>An image classification project progressing from a custom CNN baseline to transfer learning and ensembling, benchmarking accuracy against parameter efficiency.</p>
        <h3>Results</h3>
        <ul>
          <li><strong>Custom CNN Baseline:</strong> 73.54% accuracy</li>
          <li><strong>Transfer Learning:</strong> ResNet50 and EfficientNetB0 reached 92.48% accuracy (+27.4% over baseline)</li>
          <li><strong>Weighted Ensemble:</strong> 92.72% accuracy, with EfficientNetB0 matching performance at 5&times; fewer parameters</li>
        </ul>
        <h3>Why It Matters</h3>
        <ul>
          <li>Shows a clear, measured progression from baseline to state-of-the-art transfer learning</li>
          <li>Highlights the efficiency/accuracy trade-off between architectures</li>
        </ul>
        <div>
          <a href="https://github.com/Arushi-Sarkar" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fab fa-github"></i> View on GitHub</a>
        </div>
      `
    }
  };

  projectDetailsButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const projectKey = this.getAttribute('data-project');
      const project = projectData[projectKey];
      if (project && modal) {
        modalTitle.textContent = project.title;
        modalBody.innerHTML = project.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  window.closeModal = function () {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
  });

  /* ---------- Scroll to top ---------- */
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', function () {
    scrollToTopBtn.classList.toggle('visible', window.pageYOffset > 400);
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Navbar shadow on scroll ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.style.boxShadow = window.pageYOffset > 20 ? '0 8px 30px rgba(0,0,0,0.35)' : 'none';
    });
  }
});

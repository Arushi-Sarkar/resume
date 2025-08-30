// Portfolio JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        navMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    


    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('.stats-section') || document.querySelector('.featured-projects');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Project Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
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

    // Project Modal Functionality
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const projectDetailsButtons = document.querySelectorAll('.project-details-btn');
    
    // Project data
const projectData = {
    
    security: {
        title: "Windows Security Hardening & Network Services Configuration",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">Windows 11</span>
                    <span class="tech-tag">VirtualBox</span>
                    <span class="tech-tag">IIS</span>
                    <span class="tech-tag">SSL/TLS</span>
                    <span class="tech-tag">CIS Benchmarking</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Strengthened Windows security for remote work environments by implementing CIS Benchmarking, remediating security vulnerabilities, and configuring secure network services.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>CIS Benchmarking:</strong> Implementation of security best practices and vulnerability remediation</li>
                <li><strong>SSL/TLS Configuration:</strong> Secure IIS FTP and web services with encryption</li>
                <li><strong>Firewall Rules:</strong> Advanced Windows firewall configuration</li>
                <li><strong>VirtualBox Networking:</strong> NAT configurations and port forwarding setup</li>
                <li><strong>Documentation:</strong> Before-and-after screenshots with technical justifications</li>
            </ul>
            
            <h3>Security Implementations</h3>
            <ul>
                <li>Windows security hardening using CIS Benchmarking standards</li>
                <li>IIS FTP server setup with SSL/TLS encryption</li>
                <li>IIS web service configuration with SSL self-signed certificates</li>
                <li>VirtualBox networking research and configuration</li>
                <li>Security posture improvements with comprehensive documentation</li>
            </ul>
            
            <h3>Certification & Results</h3>
            <ul>
                <li>Obtained Windows 11 Security Certification via LinkedIn Learning</li>
                <li>Demonstrated measurable security posture improvements</li>
                <li>Configured secure remote connections for remote work environments</li>
            </ul>
        `
    },
    dataanalytics: {
        title: "Data Analytics & Machine Learning Workflow",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">KNIME</span>
                    <span class="tech-tag">Power BI</span>
                    <span class="tech-tag">K-means</span>
                    <span class="tech-tag">Linear Regression</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Developed data-driven insights using KNIME and Power BI, working with an 89,000-row dataset on global social values and sustainability.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Large Dataset Processing:</strong> 89,000-row dataset analysis and processing</li>
                <li><strong>Data Profiling & Cleaning:</strong> Addressed missing values, negative values, and categorical inconsistencies</li>
                <li><strong>K-means Clustering:</strong> Segmented respondents based on self-perceived health status</li>
                <li><strong>Predictive Modeling:</strong> Built linear regression model for monthly salary analysis</li>
                <li><strong>Interactive Dashboards:</strong> Created Power BI visualizations for cluster exploration</li>
            </ul>
            
            <h3>Analytics Implementation</h3>
            <ul>
                <li>KNIME workflows for comprehensive data processing</li>
                <li>Data profiling and quality assessment procedures</li>
                <li>K-means clustering algorithm for respondent segmentation</li>
                <li>Linear regression model tuning for improved prediction accuracy</li>
                <li>Interactive Power BI dashboard development</li>
            </ul>
            
            <h3>Insights & Results</h3>
            <ul>
                <li>Successfully processed and cleaned 89,000+ records</li>
                <li>Created meaningful respondent clusters based on health status</li>
                <li>Developed predictive model for salary factor analysis</li>
                <li>Delivered interactive dashboards for key trend visualization</li>
            </ul>
        `
    },
    uxui: {
        title: "Music Player UX/UI Design",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">Figma</span>
                    <span class="tech-tag">Prototyping</span>
                    <span class="tech-tag">UX Research</span>
                    <span class="tech-tag">Accessibility</span>
                    <span class="tech-tag">WCAG</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Designed and prototyped a mobile music player application with a focus on accessibility, usability, and sustainability.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>User Research:</strong> Analyzed music app interfaces and user behaviors for intuitive UI design</li>
                <li><strong>WCAG Compliance:</strong> Implemented accessibility considerations ensuring full compliance</li>
                <li><strong>Interactive Prototypes:</strong> Developed low-fidelity wireframes transitioning to high-fidelity prototypes</li>
                <li><strong>Usability Testing:</strong> Conducted comprehensive testing and implemented feedback</li>
                <li><strong>Sustainable Design:</strong> Focused on sustainability in UX/UI considerations</li>
            </ul>
            
            <h3>Design Process</h3>
            <ul>
                <li>Comprehensive user research and behavior analysis</li>
                <li>Low-fidelity wireframe development and iteration</li>
                <li>High-fidelity interactive prototype creation</li>
                <li>Usability testing with feedback implementation</li>
                <li>WCAG accessibility standards integration</li>
            </ul>
            
            <h3>Accessibility Features</h3>
            <ul>
                <li>Full WCAG compliance implementation</li>
                <li>Sustainable design principles integration</li>
                <li>User-centered design approach</li>
                <li>Comprehensive usability testing procedures</li>
            </ul>
            
            <div style="margin-top: 2rem;">
                <a href="https://bfs4ol.axshare.com/?g=4" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Interactive Prototype
                </a>
            </div>
        `
    },
    vending: {
        title: "Vending Machine Management System",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">HTML/CSS</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">Express.js</span>
                    <span class="tech-tag">MySQL</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Developed a full-stack web application to manage vending machines on campus with intuitive user interface and robust backend functionality.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Full-stack Development:</strong> Complete frontend and backend solution</li>
                <li><strong>RESTful API:</strong> Built using Express.js and MySQL for data management</li>
                <li><strong>CRUD Operations:</strong> Complete functionality for vending machines and items</li>
                <li><strong>Error Handling:</strong> Comprehensive API security and error management</li>
                <li><strong>Intuitive UI:</strong> User-friendly interface design</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <ul>
                <li>Frontend development using HTML, CSS, and JavaScript</li>
                <li>RESTful API backend with Express.js framework</li>
                <li>MySQL database integration for data management</li>
                <li>CRUD functionality for vending machines and items</li>
                <li>API security implementation and error handling</li>
            </ul>
            
            <h3>Functionality</h3>
            <ul>
                <li>Adding, updating, and deleting vending machine items</li>
                <li>Comprehensive vending machine data management</li>
                <li>Secure API endpoints with proper error handling</li>
                <li>Campus-wide vending machine coordination</li>
            </ul>
        `
    },
    database: {
        title: "Database-Driven Web Application Proposal",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">Database Design</span>
                    <span class="tech-tag">ERD</span>
                    <span class="tech-tag">Normalization</span>
                    <span class="tech-tag">Frontend Design</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Designed a database and proposed a front-end solution for a real-world problem within Temasek Polytechnic, School of IIT.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>User Research:</strong> Conducted research to identify suitable problems and necessary features</li>
                <li><strong>Database Design:</strong> Created ERD and normalized database schema</li>
                <li><strong>Data Integrity:</strong> Ensured efficiency and prevention of anomalies</li>
                <li><strong>Frontend Proposal:</strong> Designed frontend aligned with database structure</li>
                <li><strong>Usability Focus:</strong> Emphasized usability and data integrity</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <ul>
                <li>Comprehensive user research and problem identification</li>
                <li>Entity Relationship Diagram (ERD) development</li>
                <li>Database schema normalization for efficiency</li>
                <li>Frontend design proposal with database alignment</li>
                <li>Data integrity and anomaly prevention measures</li>
            </ul>
            
            <h3>Design Approach</h3>
            <ul>
                <li>Real-world problem solving within academic context</li>
                <li>User-centered research methodology</li>
                <li>Systematic database design approach</li>
                <li>Frontend-backend integration planning</li>
            </ul>
        `
    },
    cloud: {
        title: "Cloud Migration & Networking Case Study",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">Packet Tracer</span>
                    <span class="tech-tag">IaaS/PaaS/SaaS</span>
                    <span class="tech-tag">Network Design</span>
                    <span class="tech-tag">Cloud Strategy</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Planned and documented the migration of non-critical applications and data to the cloud for a mid-sized company.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Network Topology:</strong> Created detailed network diagrams using Packet Tracer</li>
                <li><strong>Cloud Service Model:</strong> Proposed suitable IaaS, PaaS, or SaaS solutions</li>
                <li><strong>Cost Analysis:</strong> Based recommendations on flexibility, scalability, and cost-effectiveness</li>
                <li><strong>Risk Assessment:</strong> Identified security, cost, and performance challenges</li>
                <li><strong>Mitigation Strategies:</strong> Recommended comprehensive mitigation approaches</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <ul>
                <li>Packet Tracer network topology design</li>
                <li>Detailed networking device and connection documentation</li>
                <li>Cloud service model evaluation and selection</li>
                <li>Challenge identification across security, cost, and performance</li>
                <li>Strategic mitigation recommendation development</li>
            </ul>
            
            <h3>Migration Strategy</h3>
            <ul>
                <li>Non-critical application and data migration focus</li>
                <li>Mid-sized company infrastructure considerations</li>
                <li>Scalability and flexibility optimization</li>
                <li>Comprehensive risk management approach</li>
            </ul>
        `
    },
    datacenter: {
        title: "Data Centre Sustainability Considerations",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">Sustainability</span>
                    <span class="tech-tag">Energy Efficiency</span>
                    <span class="tech-tag">Renewable Energy</span>
                    <span class="tech-tag">Research</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Group project researching and proposing sustainable practices for network and cloud infrastructure in data centers, with focus on individual contribution to sustainability solutions.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Energy Efficiency:</strong> Suggested energy-efficient hardware solutions</li>
                <li><strong>Cooling Optimization:</strong> Proposed optimized cooling system strategies</li>
                <li><strong>Renewable Integration:</strong> Explored solar power integration feasibility</li>
                <li><strong>Carbon Footprint:</strong> Focused on reducing environmental impact</li>
                <li><strong>Sustainable Practices:</strong> Comprehensive sustainability recommendations</li>
            </ul>
            
            <h3>Sustainability Solutions</h3>
            <ul>
                <li>Energy-efficient hardware recommendation and analysis</li>
                <li>Cooling system optimization strategies</li>
                <li>Renewable energy source integration research</li>
                <li>Solar power feasibility analysis for data centers</li>
                <li>Carbon footprint reduction methodology</li>
            </ul>
            
            <h3>Research Focus</h3>
            <ul>
                <li>Network and cloud infrastructure sustainability</li>
                <li>Data center environmental impact assessment</li>
                <li>Renewable energy integration possibilities</li>
                <li>Individual contribution to group research project</li>
            </ul>
        `
    },
    skinscan: {
        title: "SkinScan AI Platform",
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
            <h3>Project Overview</h3>
            <p>Designed and implemented SkinScan, a personalized skincare platform providing AI-driven skin analysis specifically for teenagers, addressing financial and mental health barriers.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>AI Skin Analysis:</strong> AWS Rekognition for skin type prediction and acne analysis</li>
                <li><strong>Multi-language Support:</strong> Personalized advice accessible to wide demographic</li>
                <li><strong>Audio Accessibility:</strong> AWS Polly integration for audio features</li>
                <li><strong>Secure Infrastructure:</strong> AWS IAM with minimal access and role-specific permissions</li>
                <li><strong>Free Service:</strong> Instant skin analysis addressing teenager accessibility needs</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <ul>
                <li>AWS Rekognition for skin condition analysis and prediction</li>
                <li>Lambda functions for seamless backend operations</li>
                <li>API Gateway and CloudFront for scalable delivery</li>
                <li>SNS integration for notification services</li>
                <li>AWS IAM security with role-specific permission management</li>
            </ul>
            
            <h3>Impact & Results</h3>
            <ul>
                <li>Successfully implemented secure, scalable AWS infrastructure</li>
                <li>Provided free, instant analysis for acne and skin conditions</li>
                <li>Addressed both financial and mental health barriers for teenagers</li>
                <li>Ensured data privacy and high availability</li>
                <li>Enabled personalized skincare recommendations</li>
            </ul>
        `
    },
    sustainscore: {
        title: "SustainScore Mobile App",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">Flutter</span>
                    <span class="tech-tag">Dart</span>
                    <span class="tech-tag">Biometric Auth</span>
                    <span class="tech-tag">IoT Integration</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Developed SustainScore, a mobile app built with Flutter, designed to help users track and reduce their daily consumption of water, electricity, and plastic, aligning with Singapore's Green Plan 2030.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Consumption Tracking:</strong> Monitor daily usage of water, electricity, and plastic</li>
                <li><strong>Badge System:</strong> Reward progress and encourage green cause donations</li>
                <li><strong>Responsive Dashboard:</strong> Display daily usage, history, and analytics</li>
                <li><strong>Social Sharing:</strong> Features to boost user engagement</li>
                <li><strong>Biometric Authentication:</strong> Secure, personalized user experience</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <ul>
                <li>Flutter framework for cross-platform mobile development</li>
                <li>Intuitive dashboard with usage analytics and history</li>
                <li>Biometric authentication and customizable profile management</li>
                <li>Real-time feedback system based on user data</li>
                <li>Social sharing integration for user engagement</li>
            </ul>
            
            <h3>Future Features & Impact</h3>
            <ul>
                <li>Proposed IoT device integration for automatic consumption tracking</li>
                <li>Personalized recommendations and community challenges</li>
                <li>Multi-language support for expanded reach</li>
                <li>Gamification elements with donation feature for environmental causes</li>
                <li>Alignment with Singapore's Green Plan 2030 objectives</li>
            </ul>
        `
    },
    flightprice: {
        title: "Flight Price Prediction",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Machine Learning</span>
                    <span class="tech-tag">Gradient Boosting</span>
                    <span class="tech-tag">Kaggle Dataset</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Designed and developed a flight price prediction model using Python and machine learning techniques with Kaggle's Flight Price Dataset, achieving 81% accuracy.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Large Dataset Analysis:</strong> Analyzed over 10,000 flight records</li>
                <li><strong>Feature Engineering:</strong> Identified key features like airline, source, destination, and duration</li>
                <li><strong>Web Integration:</strong> Created website with trained model for real-time predictions</li>
                <li><strong>High Accuracy:</strong> Gradient Boosting model achieving R² = 0.81</li>
                <li><strong>Comprehensive Analysis:</strong> Extensive EDA, cleaning, and feature engineering</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <ul>
                <li>Exploratory data analysis and data cleaning procedures</li>
                <li>Feature engineering including outlier detection and time-based categorizations</li>
                <li>Multiple machine learning model testing and comparison</li>
                <li>Gradient Boosting model with extensive hyperparameter tuning</li>
                <li>Cross-validation for model robustness verification</li>
            </ul>
            
            <h3>Results & Performance</h3>
            <ul>
                <li>Best performance achieved with Gradient Boosting (R² = 0.81)</li>
                <li>Average prediction error of ₹1,362</li>
                <li>Real-time flight price predictions through web interface</li>
                <li>Comprehensive model validation through cross-validation</li>
                <li>User-input based prediction system implementation</li>
            </ul>
        `
    },
    rpa: {
        title: "Invoice Processing Automation",
        content: `
            <div class="modal-project-header">
                <div class="project-tech-stack">
                    <span class="tech-tag">UiPath</span>
                    <span class="tech-tag">Orchestrator</span>
                    <span class="tech-tag">RPA</span>
                    <span class="tech-tag">Process Automation</span>
                </div>
            </div>
            <h3>Project Overview</h3>
            <p>Developed an automated solution for invoice processing using UiPath, targeting inefficiencies in Finance, Accounting, and Procurement departments.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Multi-Application Integration:</strong> Integrated Outlook, Excel, Word, GSuite, and PDF tools</li>
                <li><strong>End-to-End Automation:</strong> Streamlined invoice data extraction, validation, and tracking</li>
                <li><strong>Orchestrator Trigger:</strong> Automated workflows reducing manual workload</li>
                <li><strong>Communication Automation:</strong> Email notifications and Google Calendar payment reminders</li>
                <li><strong>Cost Reduction:</strong> Significant processing time and cost savings</li>
            </ul>
            
            <h3>Process Automation</h3>
            <ul>
                <li>Automated invoice data extraction from multiple sources</li>
                <li>Invoice validation and tracking procedures</li>
                <li>Integrated communication workflow automation</li>
                <li>Google Calendar integration for payment reminders</li>
                <li>Error minimization through automated processing</li>
            </ul>
            
            <h3>Impact & Results</h3>
            <ul>
                <li>Demonstrated RPA effectiveness for small-to-medium enterprises</li>
                <li>Achieved significant cost reduction and processing time improvement</li>
                <li>Improved payment workflow through automated reminders</li>
                <li>Reduced manual workload and minimized processing errors</li>
            </ul>
        `
    }
};

    // Add click event listeners to project detail buttons
    projectDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            const project = projectData[projectKey];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalBody.innerHTML = project.content;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal function
    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });



    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-md);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    
    // Page loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Add loading styles
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        body:not(.loaded) .hero-content,
        body:not(.loaded) .page-header {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        body.loaded .hero-content,
        body.loaded .page-header {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(loadingStyles);
});
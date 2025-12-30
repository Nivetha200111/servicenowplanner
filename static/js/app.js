// ==================== DATA ====================

// CSA Syllabus
const csaSyllabus = {
    id: 'csa',
    name: 'CSA - Certified System Administrator',
    sections: [
        {
            id: 'csa-platform-overview',
            name: 'Platform Overview and Navigation',
            topics: [
                { id: 'csa-1-1', name: 'ServiceNow Platform Architecture', difficulty: 'easy' },
                { id: 'csa-1-2', name: 'Instance Overview and Navigation', difficulty: 'easy' },
                { id: 'csa-1-3', name: 'Application Navigator and Menus', difficulty: 'easy' },
                { id: 'csa-1-4', name: 'Lists and Forms', difficulty: 'easy' },
                { id: 'csa-1-5', name: 'User Administration and Roles', difficulty: 'medium' },
                { id: 'csa-1-6', name: 'Personalizing the Interface', difficulty: 'easy' }
            ]
        },
        {
            id: 'csa-data-management',
            name: 'Data Management',
            topics: [
                { id: 'csa-2-1', name: 'Tables and Table Schema', difficulty: 'medium' },
                { id: 'csa-2-2', name: 'Fields and Field Types', difficulty: 'medium' },
                { id: 'csa-2-3', name: 'Data Dictionary', difficulty: 'medium' },
                { id: 'csa-2-4', name: 'Import Sets and Transform Maps', difficulty: 'hard' },
                { id: 'csa-2-5', name: 'CMDB and CI Classes', difficulty: 'hard' },
                { id: 'csa-2-6', name: 'Data Policies', difficulty: 'medium' }
            ]
        },
        {
            id: 'csa-ui-configuration',
            name: 'User Interface Configuration',
            topics: [
                { id: 'csa-3-1', name: 'Form Designer and Form Layout', difficulty: 'medium' },
                { id: 'csa-3-2', name: 'List Configuration and Filters', difficulty: 'easy' },
                { id: 'csa-3-3', name: 'UI Policies', difficulty: 'medium' },
                { id: 'csa-3-4', name: 'UI Actions', difficulty: 'medium' },
                { id: 'csa-3-5', name: 'Client Scripts Overview', difficulty: 'medium' },
                { id: 'csa-3-6', name: 'Service Portal Basics', difficulty: 'medium' }
            ]
        },
        {
            id: 'csa-workflow',
            name: 'Workflow and Automation',
            topics: [
                { id: 'csa-4-1', name: 'Business Rules', difficulty: 'hard' },
                { id: 'csa-4-2', name: 'Flow Designer Introduction', difficulty: 'medium' },
                { id: 'csa-4-3', name: 'Notifications and Email', difficulty: 'medium' },
                { id: 'csa-4-4', name: 'SLAs and Service Level Management', difficulty: 'hard' },
                { id: 'csa-4-5', name: 'Scheduled Jobs', difficulty: 'medium' },
                { id: 'csa-4-6', name: 'Events and Script Includes', difficulty: 'hard' }
            ]
        },
        {
            id: 'csa-self-service',
            name: 'Self-Service and Service Catalog',
            topics: [
                { id: 'csa-5-1', name: 'Service Catalog Overview', difficulty: 'easy' },
                { id: 'csa-5-2', name: 'Catalog Items and Variables', difficulty: 'medium' },
                { id: 'csa-5-3', name: 'Record Producers', difficulty: 'medium' },
                { id: 'csa-5-4', name: 'Order Guides', difficulty: 'medium' },
                { id: 'csa-5-5', name: 'Catalog Client Scripts', difficulty: 'hard' },
                { id: 'csa-5-6', name: 'Knowledge Management', difficulty: 'medium' }
            ]
        },
        {
            id: 'csa-reporting',
            name: 'Reporting and Analytics',
            topics: [
                { id: 'csa-6-1', name: 'Creating Reports', difficulty: 'easy' },
                { id: 'csa-6-2', name: 'Report Types and Visualizations', difficulty: 'medium' },
                { id: 'csa-6-3', name: 'Dashboards and Homepages', difficulty: 'medium' },
                { id: 'csa-6-4', name: 'Performance Analytics Basics', difficulty: 'hard' },
                { id: 'csa-6-5', name: 'Scheduled Reports', difficulty: 'easy' }
            ]
        }
    ]
};

// CAD Syllabus
const cadSyllabus = {
    id: 'cad',
    name: 'CAD - Certified Application Developer',
    sections: [
        {
            id: 'cad-scripting',
            name: 'Server-Side Scripting',
            topics: [
                { id: 'cad-1-1', name: 'GlideRecord and GlideQuery', difficulty: 'hard' },
                { id: 'cad-1-2', name: 'Business Rules Deep Dive', difficulty: 'hard' },
                { id: 'cad-1-3', name: 'Script Includes', difficulty: 'hard' },
                { id: 'cad-1-4', name: 'Scheduled Scripts', difficulty: 'medium' },
                { id: 'cad-1-5', name: 'Fix Scripts', difficulty: 'medium' },
                { id: 'cad-1-6', name: 'Background Scripts', difficulty: 'medium' }
            ]
        },
        {
            id: 'cad-client-scripting',
            name: 'Client-Side Scripting',
            topics: [
                { id: 'cad-2-1', name: 'Client Script Types (onLoad, onChange, onSubmit)', difficulty: 'hard' },
                { id: 'cad-2-2', name: 'GlideForm (g_form) API', difficulty: 'hard' },
                { id: 'cad-2-3', name: 'GlideUser (g_user) API', difficulty: 'medium' },
                { id: 'cad-2-4', name: 'GlideAjax', difficulty: 'hard' },
                { id: 'cad-2-5', name: 'UI Scripts', difficulty: 'medium' },
                { id: 'cad-2-6', name: 'Catalog Client Scripts', difficulty: 'hard' }
            ]
        },
        {
            id: 'cad-integration',
            name: 'Integration and APIs',
            topics: [
                { id: 'cad-3-1', name: 'REST API Explorer', difficulty: 'medium' },
                { id: 'cad-3-2', name: 'Scripted REST APIs', difficulty: 'hard' },
                { id: 'cad-3-3', name: 'Outbound REST Messages', difficulty: 'hard' },
                { id: 'cad-3-4', name: 'SOAP Web Services', difficulty: 'hard' },
                { id: 'cad-3-5', name: 'IntegrationHub Basics', difficulty: 'medium' },
                { id: 'cad-3-6', name: 'MID Server', difficulty: 'medium' }
            ]
        },
        {
            id: 'cad-app-dev',
            name: 'Application Development',
            topics: [
                { id: 'cad-4-1', name: 'Application Scope', difficulty: 'medium' },
                { id: 'cad-4-2', name: 'Studio IDE', difficulty: 'easy' },
                { id: 'cad-4-3', name: 'Custom Tables and Relationships', difficulty: 'medium' },
                { id: 'cad-4-4', name: 'Application Menus and Modules', difficulty: 'easy' },
                { id: 'cad-4-5', name: 'Access Control Lists (ACLs)', difficulty: 'hard' },
                { id: 'cad-4-6', name: 'Update Sets', difficulty: 'medium' }
            ]
        },
        {
            id: 'cad-flow-designer',
            name: 'Flow Designer and Automation',
            topics: [
                { id: 'cad-5-1', name: 'Flow Designer Core Components', difficulty: 'medium' },
                { id: 'cad-5-2', name: 'Subflows and Actions', difficulty: 'hard' },
                { id: 'cad-5-3', name: 'Custom Actions with Scripts', difficulty: 'hard' },
                { id: 'cad-5-4', name: 'Decision Tables', difficulty: 'medium' },
                { id: 'cad-5-5', name: 'Parallel and Loop Actions', difficulty: 'medium' }
            ]
        },
        {
            id: 'cad-service-portal',
            name: 'Service Portal Development',
            topics: [
                { id: 'cad-6-1', name: 'Portal Structure and Themes', difficulty: 'medium' },
                { id: 'cad-6-2', name: 'Widgets and Widget Development', difficulty: 'hard' },
                { id: 'cad-6-3', name: 'AngularJS in Service Portal', difficulty: 'hard' },
                { id: 'cad-6-4', name: 'Server Script and Client Script', difficulty: 'hard' },
                { id: 'cad-6-5', name: 'Portal Debugging', difficulty: 'medium' }
            ]
        }
    ]
};

// CIS-ITSM Syllabus
const cisItsmSyllabus = {
    id: 'cis-itsm',
    name: 'CIS - IT Service Management',
    sections: [
        {
            id: 'cis-incident',
            name: 'Incident Management',
            topics: [
                { id: 'cis-1-1', name: 'Incident Lifecycle and States', difficulty: 'medium' },
                { id: 'cis-1-2', name: 'Incident Categorization and Priority', difficulty: 'medium' },
                { id: 'cis-1-3', name: 'Assignment Rules and Groups', difficulty: 'medium' },
                { id: 'cis-1-4', name: 'Major Incident Management', difficulty: 'hard' },
                { id: 'cis-1-5', name: 'Incident SLAs', difficulty: 'hard' },
                { id: 'cis-1-6', name: 'Incident Notifications', difficulty: 'easy' }
            ]
        },
        {
            id: 'cis-problem',
            name: 'Problem Management',
            topics: [
                { id: 'cis-2-1', name: 'Problem vs Incident', difficulty: 'easy' },
                { id: 'cis-2-2', name: 'Problem Investigation', difficulty: 'medium' },
                { id: 'cis-2-3', name: 'Root Cause Analysis', difficulty: 'hard' },
                { id: 'cis-2-4', name: 'Known Errors and Workarounds', difficulty: 'medium' },
                { id: 'cis-2-5', name: 'Problem-Incident Relationships', difficulty: 'medium' }
            ]
        },
        {
            id: 'cis-change',
            name: 'Change Management',
            topics: [
                { id: 'cis-3-1', name: 'Change Types (Standard, Normal, Emergency)', difficulty: 'medium' },
                { id: 'cis-3-2', name: 'Change Lifecycle and States', difficulty: 'medium' },
                { id: 'cis-3-3', name: 'Change Approval Policies', difficulty: 'hard' },
                { id: 'cis-3-4', name: 'CAB and Change Advisory Board', difficulty: 'medium' },
                { id: 'cis-3-5', name: 'Change Risk Assessment', difficulty: 'hard' },
                { id: 'cis-3-6', name: 'Change Conflict Detection', difficulty: 'hard' },
                { id: 'cis-3-7', name: 'Change Schedules and Blackouts', difficulty: 'medium' }
            ]
        },
        {
            id: 'cis-request',
            name: 'Request Management',
            topics: [
                { id: 'cis-4-1', name: 'Request vs Incident', difficulty: 'easy' },
                { id: 'cis-4-2', name: 'Service Catalog for ITSM', difficulty: 'medium' },
                { id: 'cis-4-3', name: 'Request Workflows', difficulty: 'hard' },
                { id: 'cis-4-4', name: 'Request Approvals', difficulty: 'medium' },
                { id: 'cis-4-5', name: 'Fulfillment and Task Management', difficulty: 'medium' }
            ]
        },
        {
            id: 'cis-config',
            name: 'Configuration Management',
            topics: [
                { id: 'cis-5-1', name: 'CMDB Overview', difficulty: 'medium' },
                { id: 'cis-5-2', name: 'CI Classes and Relationships', difficulty: 'hard' },
                { id: 'cis-5-3', name: 'Discovery and Service Mapping', difficulty: 'hard' },
                { id: 'cis-5-4', name: 'CI Lifecycle', difficulty: 'medium' },
                { id: 'cis-5-5', name: 'Impact Analysis', difficulty: 'hard' }
            ]
        },
        {
            id: 'cis-sla',
            name: 'SLA Management',
            topics: [
                { id: 'cis-6-1', name: 'SLA Definitions', difficulty: 'medium' },
                { id: 'cis-6-2', name: 'SLA Workflows and Conditions', difficulty: 'hard' },
                { id: 'cis-6-3', name: 'SLA Timers and Schedules', difficulty: 'hard' },
                { id: 'cis-6-4', name: 'OLA and Underpinning Contracts', difficulty: 'medium' },
                { id: 'cis-6-5', name: 'SLA Reporting', difficulty: 'medium' }
            ]
        }
    ]
};

// Quiz Questions Database
const quizQuestions = {
    'csa': [
        {
            question: "What is the purpose of the Application Navigator in ServiceNow?",
            options: [
                "To browse and access applications and modules",
                "To write server-side scripts",
                "To manage database tables",
                "To configure email notifications"
            ],
            correct: 0,
            explanation: "The Application Navigator (left sidebar) is used to browse and access all applications and modules in your ServiceNow instance."
        },
        {
            question: "Which of the following is true about Business Rules?",
            options: [
                "They only run on the client side",
                "They execute when a record is displayed, inserted, updated, or deleted",
                "They can only be triggered manually",
                "They are written in AngularJS"
            ],
            correct: 1,
            explanation: "Business Rules are server-side scripts that execute when records are displayed, inserted, updated, deleted, or when a table is queried."
        },
        {
            question: "What is a UI Policy used for?",
            options: [
                "Sending email notifications",
                "Dynamically changing form field properties without scripting",
                "Creating reports",
                "Managing user passwords"
            ],
            correct: 1,
            explanation: "UI Policies are used to dynamically change information on a form and control field behavior (mandatory, read-only, visible) without writing scripts."
        },
        {
            question: "Which table stores all users in ServiceNow?",
            options: [
                "sys_user_list",
                "user_table",
                "sys_user",
                "core_user"
            ],
            correct: 2,
            explanation: "The sys_user table stores all user records in ServiceNow, including their name, email, roles, and other profile information."
        },
        {
            question: "What is an Import Set used for?",
            options: [
                "Exporting data from ServiceNow",
                "Staging area for importing data from external sources",
                "Creating backups of the instance",
                "Managing user sessions"
            ],
            correct: 1,
            explanation: "Import Sets act as a staging area for records imported from external data sources. Data is then transformed into target tables using Transform Maps."
        },
        {
            question: "What is the difference between a Catalog Item and a Record Producer?",
            options: [
                "They are exactly the same thing",
                "Catalog Items create tasks, Record Producers create records in specific tables",
                "Record Producers are deprecated",
                "Catalog Items are only for hardware requests"
            ],
            correct: 1,
            explanation: "Catalog Items typically create request items and tasks. Record Producers directly create records in specified tables (like incidents) through the Service Catalog interface."
        },
        {
            question: "Which scripting API is used to query records on the server side?",
            options: [
                "g_form",
                "GlideRecord",
                "g_user",
                "GlideAjax"
            ],
            correct: 1,
            explanation: "GlideRecord is the server-side JavaScript API used to query, insert, update, and delete records from the database."
        },
        {
            question: "What is a Data Policy?",
            options: [
                "A rule that applies to data regardless of the access method",
                "A policy for data backup",
                "A script that runs on the client",
                "A report configuration"
            ],
            correct: 0,
            explanation: "Data Policies enforce data requirements regardless of how the data is accessed - whether through forms, web services, import sets, or scripts."
        },
        {
            question: "What is the purpose of Update Sets?",
            options: [
                "To update user passwords",
                "To track and move customizations between instances",
                "To update the ServiceNow version",
                "To refresh data in tables"
            ],
            correct: 1,
            explanation: "Update Sets group customizations made in a development instance so they can be moved to other instances (like test or production) as a unit."
        },
        {
            question: "Which module would you use to create a dashboard?",
            options: [
                "Reports > Create New",
                "Self-Service > Dashboards",
                "System Definition > Dashboards",
                "Performance Analytics > Dashboards"
            ],
            correct: 1,
            explanation: "Dashboards can be created through Self-Service > Dashboards, where you can add multiple reports and widgets to a single view."
        }
    ],
    'cad': [
        {
            question: "What is the correct syntax to query all active incidents using GlideRecord?",
            options: [
                "var gr = new GlideRecord('incident'); gr.query();",
                "var gr = new GlideRecord('incident'); gr.addQuery('active', true); gr.query();",
                "var gr = GlideRecord.get('incident');",
                "var gr = new GlideRecord('incident').where('active=true');"
            ],
            correct: 1,
            explanation: "The correct way is to create a GlideRecord, add query conditions using addQuery(), then execute with query()."
        },
        {
            question: "Which client-side API method makes a form field mandatory?",
            options: [
                "g_form.setRequired('field_name')",
                "g_form.setMandatory('field_name', true)",
                "g_form.makeRequired('field_name')",
                "g_form.fieldRequired('field_name')"
            ],
            correct: 1,
            explanation: "g_form.setMandatory('field_name', true) is used to make a field mandatory on the client side."
        },
        {
            question: "What is the purpose of GlideAjax?",
            options: [
                "To make synchronous server calls",
                "To make asynchronous calls from client scripts to server-side Script Includes",
                "To update the DOM directly",
                "To create AJAX-based forms"
            ],
            correct: 1,
            explanation: "GlideAjax enables client-side scripts to call server-side Script Includes asynchronously without a full page reload."
        },
        {
            question: "Which business rule type runs before the database operation?",
            options: [
                "After",
                "Async",
                "Before",
                "Display"
            ],
            correct: 2,
            explanation: "Before business rules run before the database operation, allowing you to modify values before they're saved."
        },
        {
            question: "What is the correct way to get the current user's sys_id in a server script?",
            options: [
                "g_user.getID()",
                "gs.getUserID()",
                "current.user.sys_id",
                "GlideUser.getID()"
            ],
            correct: 1,
            explanation: "gs.getUserID() is the server-side method to get the current user's sys_id."
        },
        {
            question: "Which script type is used to extend the ServiceNow API?",
            options: [
                "Business Rule",
                "Script Include",
                "Client Script",
                "UI Script"
            ],
            correct: 1,
            explanation: "Script Includes are used to store reusable JavaScript functions and classes that extend the ServiceNow API."
        },
        {
            question: "What is an ACL in ServiceNow?",
            options: [
                "Application Configuration Layer",
                "Access Control List - defines who can access what data",
                "Automated Code Library",
                "Advanced Client Logic"
            ],
            correct: 1,
            explanation: "ACL (Access Control List) rules define which users can access specific data, including read, write, create, and delete permissions."
        },
        {
            question: "How do you get a value from a reference field in GlideRecord?",
            options: [
                "gr.reference_field.value",
                "gr.reference_field",
                "gr.getValue('reference_field')",
                "gr.getReference('reference_field')"
            ],
            correct: 2,
            explanation: "gr.getValue('field_name') returns the sys_id of a reference field. To get the referenced record, use gr.reference_field.getRefRecord()."
        },
        {
            question: "What is the purpose of the 'current' object in a business rule?",
            options: [
                "References the current user",
                "References the record being processed",
                "References the current date/time",
                "References the current application"
            ],
            correct: 1,
            explanation: "In business rules, 'current' is a GlideRecord object representing the record that triggered the business rule."
        },
        {
            question: "Which widget server script variable holds incoming data in Service Portal?",
            options: [
                "$scope",
                "data",
                "input",
                "options"
            ],
            correct: 2,
            explanation: "In Service Portal widgets, 'input' contains data sent from the client script to the server script."
        }
    ],
    'cis-itsm': [
        {
            question: "What is the primary difference between an Incident and a Problem?",
            options: [
                "Incidents are for hardware, Problems are for software",
                "Incidents restore service, Problems find root cause",
                "Problems are more urgent than Incidents",
                "There is no difference"
            ],
            correct: 1,
            explanation: "Incidents focus on restoring normal service quickly. Problems focus on identifying and resolving the root cause of incidents."
        },
        {
            question: "What are the three types of Changes in ServiceNow?",
            options: [
                "Small, Medium, Large",
                "Standard, Normal, Emergency",
                "Low, Medium, High",
                "Planned, Unplanned, Scheduled"
            ],
            correct: 1,
            explanation: "ServiceNow has three change types: Standard (pre-approved, low risk), Normal (requires approval), and Emergency (expedited approval for urgent fixes)."
        },
        {
            question: "What does CAB stand for?",
            options: [
                "Change Authorization Board",
                "Change Advisory Board",
                "Configuration Assessment Board",
                "Critical Action Board"
            ],
            correct: 1,
            explanation: "CAB (Change Advisory Board) is a group that reviews and approves or rejects change requests, typically for Normal changes."
        },
        {
            question: "What is a Known Error?",
            options: [
                "An error that has been logged",
                "A problem with a documented root cause and workaround",
                "A critical incident",
                "A failed change request"
            ],
            correct: 1,
            explanation: "A Known Error is a problem that has a documented root cause and typically has a workaround, even if a permanent fix isn't yet available."
        },
        {
            question: "What is the purpose of SLA (Service Level Agreement)?",
            options: [
                "To define user permissions",
                "To set response and resolution time commitments",
                "To configure email notifications",
                "To create service catalog items"
            ],
            correct: 1,
            explanation: "SLAs define the expected response and resolution times for tasks, ensuring service level commitments are tracked and met."
        },
        {
            question: "What is a CI in the context of CMDB?",
            options: [
                "Customer Information",
                "Configuration Item",
                "Change Implementation",
                "Critical Incident"
            ],
            correct: 1,
            explanation: "CI (Configuration Item) is any component that needs to be managed to deliver an IT service - hardware, software, documentation, etc."
        },
        {
            question: "When should a Major Incident be declared?",
            options: [
                "When any P1 incident is created",
                "When an incident significantly impacts business operations",
                "When the incident is about security",
                "When multiple users report the same issue"
            ],
            correct: 1,
            explanation: "Major Incidents are declared when there's significant impact to business operations, requiring special handling and communication procedures."
        },
        {
            question: "What is the relationship between Request, Requested Item, and Task?",
            options: [
                "They are all the same table",
                "Request contains Requested Items, which may generate Tasks",
                "Task contains Requests and Requested Items",
                "They are unrelated"
            ],
            correct: 1,
            explanation: "A Request (sc_request) is the parent record containing one or more Requested Items (sc_req_item), which can generate fulfillment Tasks (sc_task)."
        },
        {
            question: "What is Change Collision Detection used for?",
            options: [
                "To detect duplicate changes",
                "To identify changes that may conflict with each other in timing or CI",
                "To find syntax errors in change scripts",
                "To detect unauthorized changes"
            ],
            correct: 1,
            explanation: "Change Collision Detection identifies potential conflicts between changes - such as changes to the same CI or overlapping maintenance windows."
        },
        {
            question: "What is an OLA (Operational Level Agreement)?",
            options: [
                "An agreement between IT and external vendors",
                "An internal agreement between IT teams",
                "A customer-facing service level agreement",
                "A software licensing agreement"
            ],
            correct: 1,
            explanation: "OLA (Operational Level Agreement) is an internal agreement between IT departments/teams that supports the delivery of external SLAs."
        }
    ]
};

// ==================== STATE ====================
let state = {
    currentPage: 'dashboard',
    progress: {},
    notes: [],
    quizHistory: [],
    streak: 0,
    lastVisit: null
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('snowprep-state');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }

    // Initialize progress for all topics if not exists
    const allSyllabi = [csaSyllabus, cadSyllabus, cisItsmSyllabus];
    allSyllabi.forEach(syllabus => {
        syllabus.sections.forEach(section => {
            section.topics.forEach(topic => {
                if (!state.progress[topic.id]) {
                    state.progress[topic.id] = false;
                }
            });
        });
    });

    // Update streak
    updateStreak();
    saveState();
}

function saveState() {
    localStorage.setItem('snowprep-state', JSON.stringify(state));
}

function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (state.lastVisit === yesterday.toDateString()) {
            state.streak++;
        } else if (state.lastVisit !== today) {
            state.streak = 1;
        }
        state.lastVisit = today;
    }
}

// ==================== NAVIGATION ====================
function navigateTo(page) {
    state.currentPage = page;

    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });

    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    const pageEl = document.getElementById(`page-${page}`);
    if (pageEl) {
        pageEl.classList.add('active');
    }

    // Update header title
    const titles = {
        'dashboard': 'Dashboard',
        'study': 'Study',
        'quizzes': 'Practice Quizzes',
        'csa': 'CSA Certification',
        'cad': 'CAD Certification',
        'cis-itsm': 'CIS-ITSM Certification',
        'notes': 'My Notes',
        'resources': 'Resources',
        'planner': 'Study Planner'
    };
    document.getElementById('page-title').textContent = titles[page] || 'Dashboard';

    // Initialize planner if navigating to it
    if (page === 'planner') {
        initPlanner();
    }

    saveState();
}

// ==================== RENDERING ====================
function renderAll() {
    renderDashboard();
    renderAllTopics();
    renderCertTopics('csa', csaSyllabus, 'csa-topics-list');
    renderCertTopics('cad', cadSyllabus, 'cad-topics-list');
    renderCertTopics('cis-itsm', cisItsmSyllabus, 'cis-itsm-topics-list');
    renderNotes();
    renderQuizCategories();
    updateAllProgress();
}

function renderDashboard() {
    // Update stats
    const allTopics = getAllTopics();
    const completedTopics = allTopics.filter(t => state.progress[t.id]);

    document.getElementById('total-topics').textContent = allTopics.length;
    document.getElementById('completed-topics').textContent = completedTopics.length;
    document.getElementById('quizzes-taken').textContent = state.quizHistory.length;
    document.getElementById('notes-count').textContent = state.notes.length;
    document.getElementById('streak-count').textContent = state.streak;
}

function getAllTopics() {
    const topics = [];
    [csaSyllabus, cadSyllabus, cisItsmSyllabus].forEach(syllabus => {
        syllabus.sections.forEach(section => {
            section.topics.forEach(topic => {
                topics.push({ ...topic, cert: syllabus.id, section: section.name });
            });
        });
    });
    return topics;
}

function renderAllTopics() {
    const container = document.getElementById('all-topics-list');
    const allSyllabi = [csaSyllabus, cadSyllabus, cisItsmSyllabus];

    let html = '';
    allSyllabi.forEach(syllabus => {
        syllabus.sections.forEach(section => {
            const completedCount = section.topics.filter(t => state.progress[t.id]).length;
            const totalCount = section.topics.length;
            const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

            html += renderSection(section, syllabus.id, completedCount, totalCount, progressPercent);
        });
    });

    container.innerHTML = html;
    attachTopicListeners();
}

function renderCertTopics(certId, syllabus, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    syllabus.sections.forEach(section => {
        const completedCount = section.topics.filter(t => state.progress[t.id]).length;
        const totalCount = section.topics.length;
        const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        html += renderSection(section, certId, completedCount, totalCount, progressPercent);
    });

    container.innerHTML = html;
    attachTopicListeners();
}

function renderSection(section, certId, completedCount, totalCount, progressPercent) {
    return `
        <div class="topic-section" data-section="${section.id}">
            <div class="topic-section-header">
                <div class="topic-section-title">
                    <h3>${section.name}</h3>
                    <span class="topic-section-badge">${certId.toUpperCase()}</span>
                </div>
                <div class="topic-section-progress">
                    <span>${completedCount}/${totalCount}</span>
                    <div class="mini-progress">
                        <div class="mini-progress-bar" style="width: ${progressPercent}%"></div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="chevron">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                    </svg>
                </div>
            </div>
            <div class="topic-list" id="topics-${section.id}">
                ${section.topics.map(topic => renderTopicItem(topic, certId)).join('')}
            </div>
        </div>
    `;
}

function renderTopicItem(topic, certId) {
    const isCompleted = state.progress[topic.id];
    const difficultyColors = {
        'easy': 'var(--accent-green)',
        'medium': 'var(--accent-yellow)',
        'hard': 'var(--accent-red)'
    };

    return `
        <div class="topic-item ${isCompleted ? 'completed' : ''}" data-topic="${topic.id}">
            <div class="topic-checkbox ${isCompleted ? 'checked' : ''}" onclick="toggleTopic('${topic.id}')">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <div class="topic-content">
                <div class="topic-name">${topic.name}</div>
                <div class="topic-meta">
                    <span style="color: ${difficultyColors[topic.difficulty]}">${topic.difficulty}</span>
                </div>
            </div>
            <div class="topic-actions">
                <button class="topic-action-btn quiz-btn" onclick="startTopicQuiz('${certId}', '${topic.id}')">Quiz</button>
                <button class="topic-action-btn" onclick="addNoteForTopic('${topic.name}')">Note</button>
            </div>
        </div>
    `;
}

function renderNotes() {
    const container = document.getElementById('notes-list');

    if (state.notes.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                <p>No notes yet. Start taking notes while you study!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = state.notes.map(note => `
        <div class="note-card">
            <div class="note-card-header">
                <h3>${escapeHtml(note.title)}</h3>
                <div class="note-card-actions">
                    <button onclick="editNote('${note.id}')" title="Edit">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                    </button>
                    <button onclick="deleteNote('${note.id}')" title="Delete">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                </div>
            </div>
            <div class="note-content">${escapeHtml(note.content)}</div>
            <div class="note-meta">
                <span>${note.category.toUpperCase()}</span>
                <span>${new Date(note.date).toLocaleDateString()}</span>
            </div>
        </div>
    `).join('');
}

function renderQuizCategories() {
    const container = document.getElementById('quiz-categories');
    const categories = [
        { id: 'csa', name: 'CSA Quiz', desc: 'Test your System Administrator knowledge', icon: 'csa', questions: quizQuestions.csa.length },
        { id: 'cad', name: 'CAD Quiz', desc: 'Test your Application Developer skills', icon: 'cad', questions: quizQuestions.cad.length },
        { id: 'cis-itsm', name: 'CIS-ITSM Quiz', desc: 'Test your ITSM implementation knowledge', icon: 'cis', questions: quizQuestions['cis-itsm'].length }
    ];

    container.innerHTML = categories.map(cat => `
        <div class="cert-progress-card" onclick="startQuiz('${cat.id}')">
            <div class="cert-progress-header">
                <div class="cert-icon ${cat.icon}">${cat.id.split('-')[0].toUpperCase()}</div>
                <div class="cert-info">
                    <h3>${cat.name}</h3>
                    <p>${cat.desc}</p>
                </div>
            </div>
            <div class="progress-stats" style="margin-top: 15px;">
                <span>${cat.questions} questions available</span>
                <span class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;">Start Quiz</span>
            </div>
        </div>
    `).join('');
}

function updateAllProgress() {
    // Update sidebar badges
    ['csa', 'cad', 'cis-itsm'].forEach(certId => {
        const syllabus = certId === 'csa' ? csaSyllabus : certId === 'cad' ? cadSyllabus : cisItsmSyllabus;
        const topics = [];
        syllabus.sections.forEach(s => topics.push(...s.topics));
        const completed = topics.filter(t => state.progress[t.id]).length;
        const percent = topics.length > 0 ? Math.round((completed / topics.length) * 100) : 0;

        const badge = document.getElementById(`${certId}-progress`);
        if (badge) badge.textContent = `${percent}%`;

        const progressBar = document.getElementById(`${certId}-progress-bar`);
        if (progressBar) progressBar.style.width = `${percent}%`;

        const completedCount = document.getElementById(`${certId}-completed-count`);
        if (completedCount) completedCount.textContent = `${completed} / ${topics.length} topics`;

        const percentEl = document.getElementById(`${certId}-percent`);
        if (percentEl) percentEl.textContent = `${percent}%`;
    });

    // Update overall study progress badge
    const allTopics = getAllTopics();
    const allCompleted = allTopics.filter(t => state.progress[t.id]).length;
    const overallPercent = allTopics.length > 0 ? Math.round((allCompleted / allTopics.length) * 100) : 0;
    document.getElementById('study-progress-badge').textContent = `${overallPercent}%`;
}

// ==================== INTERACTIONS ====================
function toggleSection(sectionId) {
    console.log('Toggle section:', sectionId);
    const topicList = document.getElementById(`topics-${sectionId}`);
    console.log('Topic list element:', topicList);
    if (topicList) {
        topicList.classList.toggle('collapsed');
        console.log('Toggled collapsed class');
    }
}

function toggleTopic(topicId) {
    state.progress[topicId] = !state.progress[topicId];
    saveState();
    renderAll();
}

function attachTopicListeners() {
    // Section header toggle
    document.querySelectorAll('.topic-section-header').forEach(header => {
        header.addEventListener('click', function() {
            const section = this.closest('.topic-section');
            const sectionId = section.dataset.section;
            const topicList = document.getElementById(`topics-${sectionId}`);
            console.log('Clicked section:', sectionId, topicList);
            if (topicList) {
                topicList.classList.toggle('collapsed');
            }
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const cert = this.dataset.cert;
            const filter = this.dataset.filter;

            // Update active state
            this.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter topics
            filterTopics(cert, filter);
        });
    });
}

function filterTopics(cert, filter) {
    const container = cert ? document.getElementById(`${cert}-topics-list`) : document.getElementById('all-topics-list');
    if (!container) return;

    container.querySelectorAll('.topic-item').forEach(item => {
        const topicId = item.dataset.topic;
        const isCompleted = state.progress[topicId];

        if (filter === 'all') {
            item.style.display = 'flex';
        } else if (filter === 'completed' && isCompleted) {
            item.style.display = 'flex';
        } else if (filter === 'pending' && !isCompleted) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// ==================== QUIZ SYSTEM ====================
let currentQuiz = {
    certId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: [],
    showingExplanation: false
};

function startQuiz(certId) {
    const questions = [...quizQuestions[certId]];
    // Shuffle questions
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    currentQuiz = {
        certId,
        questions: questions.slice(0, 10), // Take 10 questions
        currentIndex: 0,
        score: 0,
        answers: [],
        showingExplanation: false
    };

    document.getElementById('quiz-modal-title').textContent = `${certId.toUpperCase()} Quiz`;
    document.getElementById('quiz-modal').classList.add('active');
    renderQuizQuestion();
}

function startTopicQuiz(certId, topicId) {
    startQuiz(certId);
}

function renderQuizQuestion() {
    const quiz = currentQuiz;
    const q = quiz.questions[quiz.currentIndex];
    const content = document.getElementById('quiz-content');

    content.innerHTML = `
        <div class="quiz-progress">
            <span class="quiz-question-count">Question ${quiz.currentIndex + 1} of ${quiz.questions.length}</span>
            <div class="quiz-score">
                <span class="correct">✓ ${quiz.score}</span>
                <span class="incorrect">✗ ${quiz.answers.filter(a => !a).length}</span>
            </div>
        </div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                <div class="quiz-option" data-index="${i}" onclick="selectAnswer(${i})">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                    <span>${opt}</span>
                </div>
            `).join('')}
        </div>
        <div id="quiz-explanation" style="display: none;"></div>
        <div class="quiz-actions">
            <button class="btn btn-secondary" onclick="closeQuizModal()">Exit Quiz</button>
            <button class="btn btn-primary" id="quiz-next-btn" style="display: none;" onclick="nextQuestion()">
                ${quiz.currentIndex < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
        </div>
    `;
}

function selectAnswer(index) {
    if (currentQuiz.showingExplanation) return;

    currentQuiz.showingExplanation = true;
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    const isCorrect = index === q.correct;

    if (isCorrect) currentQuiz.score++;
    currentQuiz.answers.push(isCorrect);

    // Update UI
    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === q.correct) {
            opt.classList.add('correct');
        } else if (i === index && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Show explanation
    const explanationEl = document.getElementById('quiz-explanation');
    explanationEl.innerHTML = `
        <div class="quiz-explanation">
            <h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
            <p>${q.explanation}</p>
        </div>
    `;
    explanationEl.style.display = 'block';

    // Show next button
    document.getElementById('quiz-next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuiz.currentIndex++;
    currentQuiz.showingExplanation = false;

    if (currentQuiz.currentIndex >= currentQuiz.questions.length) {
        showQuizResults();
    } else {
        renderQuizQuestion();
    }
}

function showQuizResults() {
    const quiz = currentQuiz;
    const percent = Math.round((quiz.score / quiz.questions.length) * 100);
    const passed = percent >= 70;

    // Save to history
    state.quizHistory.push({
        certId: quiz.certId,
        score: quiz.score,
        total: quiz.questions.length,
        percent,
        date: new Date().toISOString()
    });
    saveState();

    const content = document.getElementById('quiz-content');
    content.innerHTML = `
        <div class="quiz-results">
            <div class="quiz-results-icon ${passed ? 'pass' : 'fail'}">
                ${passed ? '🎉' : '📚'}
            </div>
            <h3>${passed ? 'Great Job!' : 'Keep Studying!'}</h3>
            <p style="color: var(--text-secondary);">
                ${passed ? 'You passed the quiz!' : 'You need 70% to pass. Review the topics and try again.'}
            </p>
            <div class="quiz-results-score ${passed ? 'pass' : 'fail'}">
                ${percent}%
            </div>
            <p style="color: var(--text-muted);">
                ${quiz.score} out of ${quiz.questions.length} correct
            </p>
            <div class="quiz-actions" style="justify-content: center; margin-top: 30px;">
                <button class="btn btn-secondary" onclick="closeQuizModal()">Close</button>
                <button class="btn btn-primary" onclick="startQuiz('${quiz.certId}')">Try Again</button>
            </div>
        </div>
    `;

    renderDashboard();
}

function closeQuizModal() {
    document.getElementById('quiz-modal').classList.remove('active');
}

// ==================== NOTES SYSTEM ====================
function openNoteModal(noteId = null) {
    const form = document.getElementById('note-form');
    form.reset();
    document.getElementById('note-id').value = '';
    document.getElementById('note-modal-title').textContent = 'Add Note';

    if (noteId) {
        const note = state.notes.find(n => n.id === noteId);
        if (note) {
            document.getElementById('note-id').value = note.id;
            document.getElementById('note-title').value = note.title;
            document.getElementById('note-category').value = note.category;
            document.getElementById('note-content').value = note.content;
            document.getElementById('note-modal-title').textContent = 'Edit Note';
        }
    }

    document.getElementById('note-modal').classList.add('active');
}

function closeNoteModal() {
    document.getElementById('note-modal').classList.remove('active');
}

function saveNote(event) {
    event.preventDefault();

    const id = document.getElementById('note-id').value || Date.now().toString();
    const note = {
        id,
        title: document.getElementById('note-title').value,
        category: document.getElementById('note-category').value,
        content: document.getElementById('note-content').value,
        date: new Date().toISOString()
    };

    const existingIndex = state.notes.findIndex(n => n.id === id);
    if (existingIndex >= 0) {
        state.notes[existingIndex] = note;
    } else {
        state.notes.unshift(note);
    }

    saveState();
    renderNotes();
    renderDashboard();
    closeNoteModal();
}

function editNote(noteId) {
    openNoteModal(noteId);
}

function deleteNote(noteId) {
    if (confirm('Are you sure you want to delete this note?')) {
        state.notes = state.notes.filter(n => n.id !== noteId);
        saveState();
        renderNotes();
        renderDashboard();
    }
}

function addNoteForTopic(topicName) {
    document.getElementById('note-title').value = topicName;
    openNoteModal();
}

// ==================== UTILITIES ====================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// ==================== PLANNER FEATURES ====================

// Pomodoro Timer
let timerState = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    isBreak: false,
    interval: null,
    sessionsToday: 0,
    focusMinutesToday: 0,
    lastSessionDate: null
};

function loadTimerState() {
    const saved = localStorage.getItem('snowprep-timer');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Reset if it's a new day
        const today = new Date().toDateString();
        if (parsed.lastSessionDate !== today) {
            parsed.sessionsToday = 0;
            parsed.focusMinutesToday = 0;
        }
        timerState = { ...timerState, ...parsed };
    }
    updateTimerDisplay();
    updateSessionStats();
}

function saveTimerState() {
    timerState.lastSessionDate = new Date().toDateString();
    localStorage.setItem('snowprep-timer', JSON.stringify(timerState));
}

function updateTimerDisplay() {
    const display = document.getElementById('timer-display');
    const mode = document.getElementById('timer-mode');
    const btn = document.getElementById('timer-start');

    if (display) {
        display.textContent = `${String(timerState.minutes).padStart(2, '0')}:${String(timerState.seconds).padStart(2, '0')}`;
    }
    if (mode) {
        mode.textContent = timerState.isBreak ? 'Break Time' : 'Focus Time';
    }
    if (btn) {
        btn.textContent = timerState.isRunning ? 'Pause' : 'Start';
        btn.classList.toggle('danger', timerState.isRunning);
        btn.classList.toggle('primary', !timerState.isRunning);
    }
}

function updateSessionStats() {
    const sessions = document.getElementById('sessions-today');
    const focusTime = document.getElementById('focus-time-today');

    if (sessions) sessions.textContent = timerState.sessionsToday;
    if (focusTime) focusTime.textContent = `${timerState.focusMinutesToday}m`;
}

function toggleTimer() {
    if (timerState.isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    timerState.isRunning = true;
    updateTimerDisplay();

    timerState.interval = setInterval(() => {
        if (timerState.seconds === 0) {
            if (timerState.minutes === 0) {
                // Timer complete
                completeTimer();
                return;
            }
            timerState.minutes--;
            timerState.seconds = 59;
        } else {
            timerState.seconds--;
        }

        if (!timerState.isBreak) {
            // Track focus time every minute
            if (timerState.seconds === 0) {
                timerState.focusMinutesToday++;
                updateSessionStats();
                saveTimerState();
            }
        }

        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    timerState.isRunning = false;
    clearInterval(timerState.interval);
    updateTimerDisplay();
    saveTimerState();
}

function resetTimer() {
    pauseTimer();
    timerState.minutes = timerState.isBreak ? 5 : 25;
    timerState.seconds = 0;
    updateTimerDisplay();
}

function skipTimer() {
    pauseTimer();
    timerState.isBreak = !timerState.isBreak;
    timerState.minutes = timerState.isBreak ? 5 : 25;
    timerState.seconds = 0;
    updateTimerDisplay();
}

function completeTimer() {
    pauseTimer();

    if (!timerState.isBreak) {
        // Completed a focus session
        timerState.sessionsToday++;
        updateSessionStats();
        saveTimerState();

        // Show notification
        if (Notification.permission === 'granted') {
            new Notification('Focus Session Complete!', {
                body: 'Great work! Time for a 5-minute break.',
                icon: '🎉'
            });
        }
    } else {
        // Completed a break
        if (Notification.permission === 'granted') {
            new Notification('Break Over!', {
                body: 'Ready for another focus session?',
                icon: '💪'
            });
        }
    }

    // Switch mode
    timerState.isBreak = !timerState.isBreak;
    timerState.minutes = timerState.isBreak ? 5 : 25;
    timerState.seconds = 0;
    updateTimerDisplay();

    // Play sound
    playNotificationSound();
}

function playNotificationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.3;

    oscillator.start();
    setTimeout(() => oscillator.stop(), 200);
}

// Daily Goals
let dailyGoals = [];

function loadDailyGoals() {
    const saved = localStorage.getItem('snowprep-goals');
    if (saved) {
        const parsed = JSON.parse(saved);
        const today = new Date().toDateString();
        if (parsed.date === today) {
            dailyGoals = parsed.goals;
        } else {
            dailyGoals = [];
        }
    }
    renderDailyGoals();
    updateGoalsDate();
}

function saveDailyGoals() {
    localStorage.setItem('snowprep-goals', JSON.stringify({
        date: new Date().toDateString(),
        goals: dailyGoals
    }));
}

function updateGoalsDate() {
    const dateEl = document.getElementById('goals-date');
    if (dateEl) {
        dateEl.textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        });
    }
}

function renderDailyGoals() {
    const container = document.getElementById('goals-list');
    if (!container) return;

    if (dailyGoals.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">No goals yet. Add your first goal!</p>';
        return;
    }

    container.innerHTML = dailyGoals.map((goal, index) => `
        <div class="goal-item ${goal.completed ? 'completed' : ''}">
            <div class="goal-checkbox ${goal.completed ? 'checked' : ''}" onclick="toggleGoal(${index})">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <span class="goal-text">${escapeHtml(goal.text)}</span>
            <button class="goal-remove" onclick="removeGoal(${index})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
        </div>
    `).join('');
}

function addGoal(event) {
    event.preventDefault();
    const input = document.getElementById('new-goal-input');
    const text = input.value.trim();

    if (text) {
        dailyGoals.push({ text, completed: false });
        saveDailyGoals();
        renderDailyGoals();
        input.value = '';
    }
}

function toggleGoal(index) {
    dailyGoals[index].completed = !dailyGoals[index].completed;
    saveDailyGoals();
    renderDailyGoals();
}

function removeGoal(index) {
    dailyGoals.splice(index, 1);
    saveDailyGoals();
    renderDailyGoals();
}

// Study Reminders
let reminders = {
    morning: false,
    afternoon: false,
    evening: false
};

function loadReminders() {
    const saved = localStorage.getItem('snowprep-reminders');
    if (saved) {
        reminders = JSON.parse(saved);
    }
    updateReminderToggles();
    startReminderChecker();
}

function saveReminders() {
    localStorage.setItem('snowprep-reminders', JSON.stringify(reminders));
}

function updateReminderToggles() {
    Object.keys(reminders).forEach(key => {
        const toggle = document.querySelector(`[data-reminder="${key}"]`);
        if (toggle) {
            toggle.classList.toggle('active', reminders[key]);
        }
    });
}

function toggleReminder(key) {
    reminders[key] = !reminders[key];
    saveReminders();
    updateReminderToggles();
}

function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Notifications Enabled!', {
                    body: 'You will now receive study reminders.'
                });
            }
        });
    } else {
        alert('Notifications are not supported in this browser.');
    }
}

function startReminderChecker() {
    // Check every minute for reminders
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        if (minutes === 0 && Notification.permission === 'granted') {
            if (hours === 9 && reminders.morning) {
                new Notification('Morning Study Time!', {
                    body: 'Start your day with some ServiceNow learning.',
                    icon: '📚'
                });
            }
            if (hours === 14 && reminders.afternoon) {
                new Notification('Afternoon Review!', {
                    body: 'Time for your afternoon study session.',
                    icon: '📖'
                });
            }
            if (hours === 19 && reminders.evening) {
                new Notification('Evening Practice!', {
                    body: 'End your day with some practice questions.',
                    icon: '🎯'
                });
            }
        }
    }, 60000);
}

// Weekly Planner
let weeklyPlan = {};

function loadWeeklyPlan() {
    const saved = localStorage.getItem('snowprep-weekly');
    if (saved) {
        weeklyPlan = JSON.parse(saved);
    }
    renderWeeklyPlan();
}

function saveWeeklyPlan() {
    localStorage.setItem('snowprep-weekly', JSON.stringify(weeklyPlan));
}

function renderWeeklyPlan() {
    const container = document.getElementById('week-grid');
    if (!container) return;

    const today = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get start of week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    let html = '';
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        const isToday = date.toDateString() === today.toDateString();
        const dayTopics = weeklyPlan[dateStr] || [];

        html += `
            <div class="day-column ${isToday ? 'today' : ''}">
                <div class="day-header">
                    <div class="day-name">${dayNames[date.getDay()]}</div>
                    <div class="day-date">${date.getDate()}</div>
                </div>
                <div class="day-topics" data-date="${dateStr}">
                    ${dayTopics.map((topic, idx) => `
                        <div class="day-topic ${topic.completed ? 'completed' : ''}"
                             onclick="toggleWeeklyTopic('${dateStr}', ${idx})">
                            ${escapeHtml(topic.name)}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function toggleWeeklyTopic(dateStr, index) {
    if (weeklyPlan[dateStr] && weeklyPlan[dateStr][index]) {
        weeklyPlan[dateStr][index].completed = !weeklyPlan[dateStr][index].completed;
        saveWeeklyPlan();
        renderWeeklyPlan();
    }
}

function openScheduleTopicModal() {
    // Simple prompt for now
    const topicName = prompt('Enter topic name to schedule:');
    if (!topicName) return;

    const dateStr = prompt('Enter date (YYYY-MM-DD) or leave empty for today:');
    const targetDate = dateStr || new Date().toISOString().split('T')[0];

    if (!weeklyPlan[targetDate]) {
        weeklyPlan[targetDate] = [];
    }
    weeklyPlan[targetDate].push({ name: topicName, completed: false });
    saveWeeklyPlan();
    renderWeeklyPlan();

    // Sync to Google Calendar if enabled
    if (n8nSettings.autoSyncCalendar && n8nSettings.calendarWebhook) {
        syncToGoogleCalendar(topicName, targetDate);
        console.log('Topic synced to Google Calendar');
    }
}

// Initialize planner when page loads
function initPlanner() {
    loadTimerState();
    loadDailyGoals();
    loadReminders();
    loadWeeklyPlan();
    loadN8nSettings();

    // Start WhatsApp reminder scheduler if enabled
    if (n8nSettings.whatsappDailyReminder && n8nSettings.whatsappWebhook) {
        scheduleWhatsAppReminder();
    }
}

// ==================== SUPABASE & AUTH ====================

let supabaseClient = null;
let currentUser = null;
let isOnline = false;

function loadSupabaseConfig() {
    const url = localStorage.getItem('snowprep-supabase-url');
    const key = localStorage.getItem('snowprep-supabase-key');

    const urlInput = document.getElementById('supabase-url');
    const keyInput = document.getElementById('supabase-key');

    if (urlInput && url) urlInput.value = url;
    if (keyInput && key) keyInput.value = key;

    if (url && key) {
        initSupabase(url, key);
    } else {
        // No config saved - show auth overlay for new users
        const skipped = localStorage.getItem('snowprep-auth-skipped');
        if (!skipped) {
            showAuthOverlay();
        }
    }
}

function saveSupabaseConfig() {
    const url = document.getElementById('supabase-url')?.value?.trim();
    const key = document.getElementById('supabase-key')?.value?.trim();

    if (url) localStorage.setItem('snowprep-supabase-url', url);
    if (key) localStorage.setItem('snowprep-supabase-key', key);

    if (url && key) {
        initSupabase(url, key);
    }
}

function initSupabase(url, key) {
    try {
        supabaseClient = window.supabase.createClient(url, key);
        console.log('Supabase initialized');
        checkSession();
    } catch (error) {
        console.error('Supabase init error:', error);
        showAuthError('Invalid Supabase configuration');
    }
}

async function checkSession() {
    if (!supabaseClient) return;

    try {
        const { data: { session }, error } = await supabaseClient.auth.getSession();

        if (session?.user) {
            currentUser = session.user;
            onAuthSuccess();
        } else {
            // Show auth overlay if no session
            const skipped = localStorage.getItem('snowprep-auth-skipped');
            if (!skipped) {
                showAuthOverlay();
            }
        }
    } catch (error) {
        console.error('Session check error:', error);
    }
}

function showAuthOverlay() {
    document.getElementById('auth-overlay')?.classList.add('active');
}

function hideAuthOverlay() {
    document.getElementById('auth-overlay')?.classList.remove('active');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

    document.querySelector(`.auth-tab:${tab === 'login' ? 'first-child' : 'last-child'}`)?.classList.add('active');
    document.getElementById(`${tab}-form`)?.classList.add('active');
    hideAuthError();
}

function showAuthError(message) {
    const errorEl = document.getElementById('auth-error');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }
}

function hideAuthError() {
    document.getElementById('auth-error')?.classList.remove('visible');
}

async function handleLogin(event) {
    event.preventDefault();

    if (!supabaseClient) {
        showAuthError('Please configure Supabase first');
        return;
    }

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const btn = document.getElementById('login-btn');

    btn.disabled = true;
    btn.textContent = 'Logging in...';
    hideAuthError();

    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        currentUser = data.user;
        onAuthSuccess();
    } catch (error) {
        showAuthError(error.message);
    }

    btn.disabled = false;
    btn.textContent = 'Login';
}

async function handleSignup(event) {
    event.preventDefault();

    if (!supabaseClient) {
        showAuthError('Please configure Supabase first');
        return;
    }

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const btn = document.getElementById('signup-btn');

    if (password !== confirm) {
        showAuthError('Passwords do not match');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Creating account...';
    hideAuthError();

    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email,
            password
        });

        if (error) throw error;

        if (data.user) {
            currentUser = data.user;
            onAuthSuccess();
        } else {
            showAuthError('Check your email to confirm your account');
        }
    } catch (error) {
        showAuthError(error.message);
    }

    btn.disabled = false;
    btn.textContent = 'Create Account';
}

async function handleLogout() {
    if (!supabaseClient) return;

    try {
        await supabaseClient.auth.signOut();
        currentUser = null;
        isOnline = false;
        updateAuthUI();
        updateSyncStatus('offline', 'Local Only');
    } catch (error) {
        console.error('Logout error:', error);
    }

    toggleUserMenu();
}

function skipAuth() {
    localStorage.setItem('snowprep-auth-skipped', 'true');
    hideAuthOverlay();
}

function onAuthSuccess() {
    hideAuthOverlay();
    isOnline = true;
    updateAuthUI();
    updateSyncStatus('synced', 'Synced');

    // Load data from cloud
    loadFromCloud();
}

function updateAuthUI() {
    const avatar = document.getElementById('user-avatar');
    const email = document.getElementById('user-email');
    const menuText = document.getElementById('auth-menu-text');
    const logoutBtn = document.getElementById('logout-btn');

    if (currentUser) {
        const initial = currentUser.email?.charAt(0).toUpperCase() || 'U';
        if (avatar) avatar.textContent = initial;
        if (email) email.textContent = currentUser.email;
        if (menuText) menuText.textContent = 'Account Settings';
        if (logoutBtn) logoutBtn.style.display = 'flex';
    } else {
        if (avatar) avatar.textContent = 'U';
        if (email) email.textContent = 'Not signed in';
        if (menuText) menuText.textContent = 'Sign In';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function toggleUserMenu() {
    document.getElementById('user-dropdown')?.classList.toggle('visible');
}

function updateSyncStatus(status, text) {
    const statusEl = document.getElementById('sync-status');
    const textEl = document.getElementById('sync-text');

    if (statusEl) {
        statusEl.className = 'sync-status ' + status;
    }
    if (textEl) {
        textEl.textContent = text;
    }
}

// Close user menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('user-dropdown');
    const avatar = document.getElementById('user-avatar');
    if (menu && !menu.contains(e.target) && e.target !== avatar) {
        menu.classList.remove('visible');
    }
});

// ==================== DATABASE SYNC ====================

async function syncNow() {
    if (!supabaseClient || !currentUser) {
        showAuthOverlay();
        return;
    }

    toggleUserMenu();
    updateSyncStatus('syncing', 'Syncing...');

    try {
        await saveToCloud();
        updateSyncStatus('synced', 'Synced');
    } catch (error) {
        console.error('Sync error:', error);
        updateSyncStatus('offline', 'Sync failed');
    }
}

async function saveToCloud() {
    if (!supabaseClient || !currentUser) return;

    const userData = {
        user_id: currentUser.id,
        progress: state.progress,
        notes: state.notes,
        quiz_history: state.quizHistory,
        streak: state.streak,
        last_visit: state.lastVisit,
        daily_goals: dailyGoals,
        weekly_plan: weeklyPlan,
        reminders: reminders,
        timer_state: {
            sessionsToday: timerState.sessionsToday,
            focusMinutesToday: timerState.focusMinutesToday,
            lastSessionDate: timerState.lastSessionDate
        },
        updated_at: new Date().toISOString()
    };

    const { error } = await supabaseClient
        .from('user_data')
        .upsert(userData, { onConflict: 'user_id' });

    if (error) throw error;

    console.log('Data saved to cloud');
}

async function loadFromCloud() {
    if (!supabaseClient || !currentUser) return;

    try {
        const { data, error } = await supabaseClient
            .from('user_data')
            .select('*')
            .eq('user_id', currentUser.id)
            .single();

        if (error && error.code !== 'PGRST116') throw error;

        if (data) {
            // Merge cloud data with local state
            if (data.progress) state.progress = data.progress;
            if (data.notes) state.notes = data.notes;
            if (data.quiz_history) state.quizHistory = data.quiz_history;
            if (data.streak) state.streak = data.streak;
            if (data.last_visit) state.lastVisit = data.last_visit;
            if (data.daily_goals) dailyGoals = data.daily_goals;
            if (data.weekly_plan) weeklyPlan = data.weekly_plan;
            if (data.reminders) reminders = data.reminders;
            if (data.timer_state) {
                timerState.sessionsToday = data.timer_state.sessionsToday || 0;
                timerState.focusMinutesToday = data.timer_state.focusMinutesToday || 0;
                timerState.lastSessionDate = data.timer_state.lastSessionDate;
            }

            // Save to localStorage as backup
            saveState();
            saveDailyGoals();
            saveWeeklyPlan();
            saveReminders();
            saveTimerState();

            // Re-render everything
            renderAll();
            renderDailyGoals();
            renderWeeklyPlan();
            updateReminderToggles();
            updateTimerDisplay();
            updateSessionStats();

            console.log('Data loaded from cloud');
        }
    } catch (error) {
        console.error('Load from cloud error:', error);
    }
}

// Auto-sync on state changes (debounced)
let syncTimeout = null;
function scheduleSync() {
    if (!isOnline) return;

    if (syncTimeout) clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => {
        saveToCloud().catch(console.error);
    }, 5000); // Sync 5 seconds after last change
}

// Override save functions to trigger sync
const originalSaveState = saveState;
saveState = function() {
    originalSaveState();
    scheduleSync();
};

// ==================== SMART PLANNER ====================

// Spaced repetition weights for difficulty
const DIFFICULTY_WEIGHTS = { easy: 1, medium: 2, hard: 3 };
const TOPICS_PER_DAY = { weekday: 3, weekend: 2 };

function getIncompleteTopics() {
    const topics = [];
    const allSyllabi = [csaSyllabus, cadSyllabus, cisItsmSyllabus];

    allSyllabi.forEach(syllabus => {
        syllabus.sections.forEach(section => {
            section.topics.forEach(topic => {
                if (!state.progress[topic.id]) {
                    topics.push({
                        id: topic.id,
                        name: topic.name,
                        difficulty: topic.difficulty,
                        cert: syllabus.id.toUpperCase(),
                        section: section.name
                    });
                }
            });
        });
    });

    return topics;
}

function getProgressSummary() {
    const allTopics = getAllTopics();
    const completed = allTopics.filter(t => state.progress[t.id]).length;
    const total = allTopics.length;
    const percent = Math.round((completed / total) * 100);

    const byCert = {};
    [csaSyllabus, cadSyllabus, cisItsmSyllabus].forEach(syllabus => {
        const certTopics = [];
        syllabus.sections.forEach(s => certTopics.push(...s.topics));
        const certCompleted = certTopics.filter(t => state.progress[t.id]).length;
        byCert[syllabus.id.toUpperCase()] = {
            completed: certCompleted,
            total: certTopics.length,
            percent: Math.round((certCompleted / certTopics.length) * 100)
        };
    });

    return { completed, total, percent, byCert };
}

function showPlannerOutput(title, html) {
    const output = document.getElementById('ai-output');
    const titleEl = document.getElementById('ai-output-title');
    const content = document.getElementById('ai-output-content');

    output.classList.add('visible');
    titleEl.textContent = title;
    content.innerHTML = html;
}

// Smart algorithm: Prioritize topics based on certification progress and difficulty
function getSmartTopicRecommendations(count = 4) {
    const incomplete = getIncompleteTopics();
    const summary = getProgressSummary();

    if (incomplete.length === 0) return [];

    // Find the certification with lowest progress - prioritize it
    const certPriority = Object.entries(summary.byCert)
        .sort((a, b) => a[1].percent - b[1].percent)
        .map(([cert]) => cert);

    // Score each topic
    const scoredTopics = incomplete.map(topic => {
        let score = 0;

        // Higher score for lower-progress certifications
        const certIndex = certPriority.indexOf(topic.cert);
        score += (3 - certIndex) * 10;

        // Difficulty progression: easy first if < 30%, medium if 30-60%, hard if > 60%
        const certProgress = summary.byCert[topic.cert]?.percent || 0;
        if (certProgress < 30 && topic.difficulty === 'easy') score += 15;
        else if (certProgress >= 30 && certProgress < 60 && topic.difficulty === 'medium') score += 15;
        else if (certProgress >= 60 && topic.difficulty === 'hard') score += 15;

        // Small random factor to vary recommendations
        score += Math.random() * 5;

        return { ...topic, score };
    });

    // Sort by score and return top N
    return scoredTopics.sort((a, b) => b.score - a.score).slice(0, count);
}

function generateDailyPlan() {
    const btn = document.getElementById('ai-daily-btn');
    btn.disabled = true;

    const summary = getProgressSummary();
    const recommended = getSmartTopicRecommendations(4);

    if (recommended.length === 0) {
        showPlannerOutput("Congratulations!", `<p>You've completed all topics! Time to take practice quizzes.</p>`);
        btn.disabled = false;
        return;
    }

    // Generate explanation based on progress
    const lowestCert = Object.entries(summary.byCert)
        .sort((a, b) => a[1].percent - b[1].percent)[0];

    let explanation = `<div style="margin-bottom: 20px; padding: 15px; background: var(--bg-tertiary); border-radius: 10px;">
        <p><strong>Today's Focus:</strong> ${lowestCert[0]} (${lowestCert[1].percent}% complete)</p>
        <p style="color: var(--text-muted); margin-top: 8px;">These topics are selected based on your progress and optimal difficulty progression.</p>
    </div>`;

    let suggestionsHtml = explanation;
    suggestionsHtml += `<h4 style="margin: 15px 0 10px;">Recommended Topics:</h4>`;

    recommended.forEach((topic, i) => {
        const reason = topic.difficulty === 'easy' ? 'Build foundation' :
                       topic.difficulty === 'medium' ? 'Core concept' : 'Advanced mastery';
        suggestionsHtml += `
            <div class="ai-suggestion">
                <span class="ai-suggestion-text">
                    <strong>${i + 1}. ${topic.name}</strong>
                    <small style="color: var(--text-muted); display: block;">${topic.cert} · ${topic.difficulty} · ${reason}</small>
                </span>
                <button class="ai-suggestion-add" onclick="addSmartGoal('${topic.name.replace(/'/g, "\\'")}')">+ Add</button>
            </div>
        `;
    });

    showPlannerOutput("Today's Study Plan", suggestionsHtml);
    btn.disabled = false;
}

function generateWeeklyPlan() {
    const btn = document.getElementById('ai-weekly-btn');
    btn.disabled = true;

    const incomplete = getIncompleteTopics();
    const summary = getProgressSummary();

    if (incomplete.length === 0) {
        showPlannerOutput("All Done!", `<p>You've completed all topics! Focus on quizzes and review.</p>`);
        btn.disabled = false;
        return;
    }

    // Sort topics by certification priority and difficulty
    const certPriority = Object.entries(summary.byCert)
        .sort((a, b) => a[1].percent - b[1].percent)
        .map(([cert]) => cert);

    const sortedTopics = [...incomplete].sort((a, b) => {
        const aPriority = certPriority.indexOf(a.cert);
        const bPriority = certPriority.indexOf(b.cert);
        if (aPriority !== bPriority) return aPriority - bPriority;
        return DIFFICULTY_WEIGHTS[a.difficulty] - DIFFICULTY_WEIGHTS[b.difficulty];
    });

    // Generate weekly plan
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    let html = `<div style="margin-bottom: 20px; padding: 15px; background: var(--bg-tertiary); border-radius: 10px;">
        <p><strong>Weekly Plan Generated</strong></p>
        <p style="color: var(--text-muted);">Prioritizing ${certPriority[0]} certification · ${incomplete.length} topics remaining</p>
    </div>`;

    let topicIndex = 0;
    for (let i = 0; i < 7 && topicIndex < sortedTopics.length; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dayName = dayNames[date.getDay()];
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const topicsForDay = isWeekend ? 2 : 3;

        const dayTopics = sortedTopics.slice(topicIndex, topicIndex + topicsForDay);
        topicIndex += topicsForDay;

        html += `<div style="margin-bottom: 15px;">
            <strong>${dayName}</strong> ${isWeekend ? '(Light day)' : ''}
            <ul style="margin: 8px 0 0 20px; color: var(--text-secondary);">
                ${dayTopics.map(t => `<li>${t.name} <small>(${t.cert})</small></li>`).join('')}
            </ul>
        </div>`;
    }

    html += `<div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--border-color);">
        <button class="ai-btn secondary" onclick="autoPopulateWeek()">
            <span>📥</span> Auto-fill Weekly Planner
        </button>
    </div>`;

    showPlannerOutput('Your Weekly Study Plan', html);
    btn.disabled = false;
}

function getStudyAdvice() {
    const btn = document.getElementById('ai-advice-btn');
    btn.disabled = true;

    const summary = getProgressSummary();
    const incomplete = getIncompleteTopics();

    // Generate smart advice based on progress
    const tips = [];
    const lowestCert = Object.entries(summary.byCert)
        .sort((a, b) => a[1].percent - b[1].percent)[0];
    const highestCert = Object.entries(summary.byCert)
        .sort((a, b) => b[1].percent - a[1].percent)[0];

    // Tip 1: Which cert to prioritize
    if (lowestCert[1].percent < 50) {
        tips.push(`<strong>Focus on ${lowestCert[0]}</strong> - It's your lowest at ${lowestCert[1].percent}%. Complete fundamentals before moving to harder certs.`);
    } else {
        tips.push(`<strong>Great progress on ${highestCert[0]}!</strong> You're at ${highestCert[1].percent}%. Consider finishing it before context-switching.`);
    }

    // Tip 2: Difficulty advice
    const easyRemaining = incomplete.filter(t => t.difficulty === 'easy').length;
    const hardRemaining = incomplete.filter(t => t.difficulty === 'hard').length;
    if (easyRemaining > 10) {
        tips.push(`<strong>Build your foundation</strong> - You have ${easyRemaining} easy topics left. Master these for quick wins and confidence.`);
    } else if (hardRemaining > 5) {
        tips.push(`<strong>Ready for advanced topics</strong> - Most basics done! Tackle the ${hardRemaining} hard topics with focused 30-min sessions.`);
    }

    // Tip 3: Study technique
    tips.push(`<strong>Use the Pomodoro timer</strong> - 25-minute focused sessions with 5-minute breaks. Aim for 4 sessions daily.`);

    // Tip 4: Resources
    tips.push(`<strong>Practice on a PDI</strong> - Get your free Personal Developer Instance from developer.servicenow.com to apply what you learn.`);

    // Tip 5: Progress-based encouragement
    if (summary.percent < 25) {
        tips.push(`<strong>You're just getting started!</strong> Consistency beats intensity. Even 30 mins/day compounds over time.`);
    } else if (summary.percent >= 75) {
        tips.push(`<strong>Almost there!</strong> At ${summary.percent}%, focus on weak areas and take practice exams.`);
    }

    const html = `<div style="line-height: 1.8;">
        ${tips.map((tip, i) => `<p style="margin-bottom: 15px;">${i + 1}. ${tip}</p>`).join('')}
    </div>`;

    showPlannerOutput('Study Advice', html);
    btn.disabled = false;
}

function addSmartGoal(goalText) {
    dailyGoals.push({ text: goalText, completed: false });
    saveDailyGoals();
    renderDailyGoals();

    // Show feedback
    const btn = event.target;
    btn.textContent = 'Added!';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = '+ Add';
        btn.disabled = false;
    }, 2000);
}

function autoPopulateWeek() {
    const incomplete = getIncompleteTopics();
    const today = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Distribute topics across the week
    let topicIndex = 0;
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - today.getDay() + i);
        const dateStr = date.toISOString().split('T')[0];

        // Add 2-3 topics per day, fewer on weekends
        const topicsPerDay = (i === 0 || i === 6) ? 1 : 2;

        if (!weeklyPlan[dateStr]) {
            weeklyPlan[dateStr] = [];
        }

        for (let j = 0; j < topicsPerDay && topicIndex < incomplete.length; j++) {
            const topic = incomplete[topicIndex];
            // Don't add if already exists
            if (!weeklyPlan[dateStr].some(t => t.name === topic.name)) {
                weeklyPlan[dateStr].push({ name: topic.name, completed: false });
            }
            topicIndex++;
        }
    }

    saveWeeklyPlan();
    renderWeeklyPlan();
    alert('Weekly planner populated with smart suggestions!');
}

// ==================== N8N INTEGRATIONS ====================

let n8nSettings = {
    calendarWebhook: '',
    whatsappWebhook: '',
    whatsappPhone: '',
    autoSyncCalendar: false,
    whatsappDailyReminder: false,
    whatsappReminderTime: '09:00'
};

function loadN8nSettings() {
    const saved = localStorage.getItem('snowprep-n8n');
    if (saved) {
        n8nSettings = { ...n8nSettings, ...JSON.parse(saved) };
    }

    // Populate form fields
    const calendarInput = document.getElementById('n8n-calendar-webhook');
    const whatsappInput = document.getElementById('n8n-whatsapp-webhook');
    const phoneInput = document.getElementById('whatsapp-phone');
    const autoSyncCheckbox = document.getElementById('auto-sync-calendar');
    const dailyReminderCheckbox = document.getElementById('whatsapp-daily-reminder');
    const reminderTimeSelect = document.getElementById('whatsapp-reminder-time');
    const timeContainer = document.getElementById('whatsapp-time-container');

    if (calendarInput) calendarInput.value = n8nSettings.calendarWebhook || '';
    if (whatsappInput) whatsappInput.value = n8nSettings.whatsappWebhook || '';
    if (phoneInput) phoneInput.value = n8nSettings.whatsappPhone || '';
    if (autoSyncCheckbox) autoSyncCheckbox.checked = n8nSettings.autoSyncCalendar;
    if (dailyReminderCheckbox) dailyReminderCheckbox.checked = n8nSettings.whatsappDailyReminder;
    if (reminderTimeSelect) reminderTimeSelect.value = n8nSettings.whatsappReminderTime || '09:00';
    if (timeContainer) timeContainer.style.display = n8nSettings.whatsappDailyReminder ? 'flex' : 'none';
}

function saveN8nSettings() {
    const calendarInput = document.getElementById('n8n-calendar-webhook');
    const whatsappInput = document.getElementById('n8n-whatsapp-webhook');
    const phoneInput = document.getElementById('whatsapp-phone');
    const autoSyncCheckbox = document.getElementById('auto-sync-calendar');
    const dailyReminderCheckbox = document.getElementById('whatsapp-daily-reminder');
    const reminderTimeSelect = document.getElementById('whatsapp-reminder-time');
    const timeContainer = document.getElementById('whatsapp-time-container');

    n8nSettings = {
        calendarWebhook: calendarInput?.value?.trim() || '',
        whatsappWebhook: whatsappInput?.value?.trim() || '',
        whatsappPhone: phoneInput?.value?.trim() || '',
        autoSyncCalendar: autoSyncCheckbox?.checked || false,
        whatsappDailyReminder: dailyReminderCheckbox?.checked || false,
        whatsappReminderTime: reminderTimeSelect?.value || '09:00'
    };

    localStorage.setItem('snowprep-n8n', JSON.stringify(n8nSettings));

    // Show/hide time selector
    if (timeContainer) {
        timeContainer.style.display = n8nSettings.whatsappDailyReminder ? 'flex' : 'none';
    }

    // Schedule WhatsApp reminder if enabled
    if (n8nSettings.whatsappDailyReminder && n8nSettings.whatsappWebhook) {
        scheduleWhatsAppReminder();
    }

    console.log('n8n settings saved:', n8nSettings);
}

async function testCalendarWebhook() {
    const webhook = document.getElementById('n8n-calendar-webhook')?.value?.trim();

    if (!webhook) {
        alert('Please enter a webhook URL first');
        return;
    }

    try {
        const response = await fetch(webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                test: true,
                event: 'Test Event from SNowPrep',
                date: new Date().toISOString().split('T')[0],
                startTime: '10:00',
                endTime: '11:00',
                description: 'This is a test event to verify the Google Calendar integration.'
            })
        });

        if (response.ok) {
            alert('Calendar webhook test successful! Check your n8n workflow execution.');
        } else {
            alert('Webhook returned an error. Check your n8n workflow.');
        }
    } catch (error) {
        console.error('Calendar webhook test error:', error);
        alert('Failed to reach webhook. Make sure the URL is correct and n8n is running.');
    }
}

async function testWhatsAppWebhook() {
    const webhook = document.getElementById('n8n-whatsapp-webhook')?.value?.trim();
    const phone = document.getElementById('whatsapp-phone')?.value?.trim();

    if (!webhook) {
        alert('Please enter a webhook URL first');
        return;
    }

    if (!phone) {
        alert('Please enter your WhatsApp phone number');
        return;
    }

    try {
        const response = await fetch(webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                test: true,
                phone: phone,
                message: 'Hello from SNowPrep! Your WhatsApp integration is working correctly.'
            })
        });

        if (response.ok) {
            alert('WhatsApp webhook test successful! Check your phone for a message.');
        } else {
            alert('Webhook returned an error. Check your n8n workflow.');
        }
    } catch (error) {
        console.error('WhatsApp webhook test error:', error);
        alert('Failed to reach webhook. Make sure the URL is correct and n8n is running.');
    }
}

// Sync a topic to Google Calendar via n8n
async function syncToGoogleCalendar(topicName, date, duration = 60) {
    if (!n8nSettings.calendarWebhook || !n8nSettings.autoSyncCalendar) {
        return false;
    }

    try {
        const startTime = '09:00'; // Default study time
        const endHour = Math.floor(duration / 60) + 9;
        const endMinute = duration % 60;
        const endTime = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;

        await fetch(n8nSettings.calendarWebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event: `Study: ${topicName}`,
                date: date,
                startTime: startTime,
                endTime: endTime,
                description: `ServiceNow study session - ${topicName}\n\nScheduled via SNowPrep`
            })
        });

        console.log('Synced to Google Calendar:', topicName);
        return true;
    } catch (error) {
        console.error('Google Calendar sync error:', error);
        return false;
    }
}

// Send WhatsApp reminder via n8n
async function sendWhatsAppReminder(message) {
    if (!n8nSettings.whatsappWebhook || !n8nSettings.whatsappPhone) {
        return false;
    }

    try {
        await fetch(n8nSettings.whatsappWebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phone: n8nSettings.whatsappPhone,
                message: message
            })
        });

        console.log('WhatsApp reminder sent');
        return true;
    } catch (error) {
        console.error('WhatsApp reminder error:', error);
        return false;
    }
}

// Schedule daily WhatsApp reminder
let whatsappReminderInterval = null;

function scheduleWhatsAppReminder() {
    // Clear existing interval
    if (whatsappReminderInterval) {
        clearInterval(whatsappReminderInterval);
    }

    // Check every minute if it's reminder time
    whatsappReminderInterval = setInterval(() => {
        if (!n8nSettings.whatsappDailyReminder) return;

        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        if (currentTime === n8nSettings.whatsappReminderTime) {
            // Check if we already sent today
            const lastSent = localStorage.getItem('snowprep-whatsapp-last-sent');
            const today = now.toDateString();

            if (lastSent !== today) {
                // Generate personalized message
                const summary = getProgressSummary();
                const recommended = getSmartTopicRecommendations(3);

                let message = `*SNowPrep Daily Reminder*\n\n`;
                message += `Your progress: ${summary.percent}% complete\n\n`;

                if (recommended.length > 0) {
                    message += `Today's recommended topics:\n`;
                    recommended.forEach((t, i) => {
                        message += `${i + 1}. ${t.name} (${t.cert})\n`;
                    });
                }

                message += `\nKeep up the great work!`;

                sendWhatsAppReminder(message);
                localStorage.setItem('snowprep-whatsapp-last-sent', today);
            }
        }
    }, 60000); // Check every minute
}

// Override the weekly plan topic add to sync with Google Calendar
const originalAddWeeklyTopic = weeklyPlan;

function addWeeklyTopicWithSync(dateStr, topicName) {
    if (!weeklyPlan[dateStr]) {
        weeklyPlan[dateStr] = [];
    }

    weeklyPlan[dateStr].push({ name: topicName, completed: false });
    saveWeeklyPlan();
    renderWeeklyPlan();

    // Sync to Google Calendar if enabled
    if (n8nSettings.autoSyncCalendar && n8nSettings.calendarWebhook) {
        syncToGoogleCalendar(topicName, dateStr);
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('SNowPrep: Initializing...');
    try {
        loadState();
        console.log('SNowPrep: State loaded');
        renderAll();
        console.log('SNowPrep: Rendered all');

        // Navigation clicks
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                navigateTo(this.dataset.page);
            });
        });

        // Cert progress card clicks
        document.querySelectorAll('.cert-progress-card[data-nav]').forEach(card => {
            card.addEventListener('click', function() {
                navigateTo(this.dataset.nav);
            });
        });

        // Close modals on overlay click
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
            }
        });

        // Navigate to saved page
        if (state.currentPage) {
            navigateTo(state.currentPage);
        }

        // Initialize planner features
        initPlanner();

        // Initialize Supabase auth
        loadSupabaseConfig();

        // Auth event listeners
        document.getElementById('skip-auth-btn')?.addEventListener('click', skipAuth);
        document.getElementById('login-tab-btn')?.addEventListener('click', () => switchAuthTab('login'));
        document.getElementById('signup-tab-btn')?.addEventListener('click', () => switchAuthTab('signup'));
        document.getElementById('login-form')?.addEventListener('submit', handleLogin);
        document.getElementById('signup-form')?.addEventListener('submit', handleSignup);
        document.getElementById('supabase-url')?.addEventListener('change', saveSupabaseConfig);
        document.getElementById('supabase-key')?.addEventListener('change', saveSupabaseConfig);

        console.log('SNowPrep: Ready!');
    } catch (error) {
        console.error('SNowPrep Error:', error);
        alert('Error initializing app: ' + error.message);
    }
});

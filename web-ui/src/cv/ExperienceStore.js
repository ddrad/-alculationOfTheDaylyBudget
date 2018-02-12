const fetchExperienceData = () => {

    return [{
        product: `DonRiver Fusion Orchestration`,
        company: `Donriver Inc.`,
        description: [
            { title: `DonRiver Fusion Orchestration`, content: ` is a product that focuses on workflow and business process management – it is based on Camunda.  Fusion Orchestration supports modelling and execution of BPMN 2.0, CMMN 1.1 and DMN 1.1` },
            { title: `Major Fusion Orchestration Features:`, content: ` Task Management, User assignment and resourcing, Workflow Management, Business decision process modelling, Integration with external systems for Task execution (e.g. activation) and inventory updates` }
        ],
        stack: [`Java 7/8`, `Spring Framework – MVC, JDBC, Rest API`, `Camunda`, `JMS`, `JSF`, `Oracle 11g`, `Apache Tomcat`],
        images: ['http://www.ossline.com/media/DonRiver-82h.png', 'https://www.telstraglobal.com/templates/tg2016/images/logo-colorful.svg'],
         url:['http://www.donriver.com/', 'https://www.telstra.com.au/'],
        resposibility: [`Implementation flows using Camunda BPM`,
            `Developed procedures using PL/SQL`,
            `Implementation DAO level using Spring JDBC Template`,
            `Implementation some delegate classes  which is called from Camunda BPM`]
    },
    {
        product: `The Legal Support`,
        company: `Sberbank Technologies`,
        description: [
            { title: `The Legal Support`, content: ` is web portal. The primary goal is interaction between legal department and other departments inside the bank and external services. That web portal implemented with using Pega 6 BPM. Legal department has the following major features: task management, workflow management, it has an integration with IBM FileNet system and integration with internal system for store scanned documents. Also it has integration with Federation Information Address System.` }
        ],
        stack: [`Pega 6 PBM`, `Java 6`, `Oracle 11g`, `Jenkins`, `JSP`, `HTML`, `CSS`, `Java Script`],
        images: ['http://sber-tech.com/images/SberTech_new_green.png'],
        url:['http://sber-tech.com'],
        resposibility: [`Developed flow by specification using BPMN 2.0`,
            `Developed elements of user interface using internal tools from Pega BPM`,
            `Developed the back-end components using internal tools from Pega BPM`,
            `Integration with Federation Information Address System (FIAS) using ElasticSearch application`,
            `Developed a separated application for parse data of FIAS and export them into the ElasticSearch application`]
    },
    {
        product: `Dream Payments`,
        company: `Donriver Inc.`,
        description: [
            { title: `Dream Payments`, content: ` enables merchants to sell everywhere using mobile devices. This platform allows merchants to accept credit and debit cards, access rich analytics and reports, and provide digital receipts to customers. Dream’s solutions are secure, EMV compliant, and accept Contactless and Chip payment cards.` }
        ],
        stack: [`Java 7`, `Spring Framework`, `Eclipse Link`, `AspectJ`, `Quartz Scheduler`, `SOAP Web services`, `Maven`, `IBM DB2`, `IBM WebSphere`, `IBM WebSphere Integration Developer V7.0`, `Jenkins`],
        images: ['http://www.ossline.com/media/DonRiver-82h.png', 'http://dreampayments.com/DreamPaymentsWebsite-theme/images/dreampayments-logo-icon-1.png'],
        url:['http://www.donriver.com/', 'http://www.dreampayments.com'],
        resposibility: [`Developed different API by specification`,
            `Designed API using sequence diagram`,
            `Developed jobs using Quartz Scheduler`,
            `Developed connectors such as ftp and ssh`,
            `Developed a notification modules`,
            `Developed unit tests using Junit and Mockito`,
            `Separated a core platform to independent modules`
        ]
    }]
}

export default fetchExperienceData;


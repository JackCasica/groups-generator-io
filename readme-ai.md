git reset --mixed HEAD~1<p align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">

</p>
<p align="center">
    <h1 align="center">.</h1>
</p>
<p align="center">
    <em>Engage, Organize, Collaborate Seamlessly</em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. -->
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=default&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=default&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Jabber-CC0000.svg?style=default&logo=Jabber&logoColor=white" alt="Jabber">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=default&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/datefns-770C56.svg?style=default&logo=date-fns&logoColor=white" alt="datefns">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=default&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=default&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=default&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

## Overview

The Student Groups Generator is a comprehensive platform designed to streamline classroom management and enhance educational collaboration. By enabling educators to efficiently organize student groups, manage class rosters, and leverage real-time updates, the project simplifies the administrative aspects of teaching. Incorporating a user-friendly interface with drag-and-drop functionality and seamless data management through Convex, it offers a dynamic and interactive experience. The integration of authentication and accessibility features ensures a secure and inclusive environment, making the Student Groups Generator an essential tool for modern educational settings, promoting engagement and facilitating a collaborative learning atmosphere.

---

## Features

|     | Feature           | Description                                                                                                                                                                             |
| --- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | Utilizes a modern stack with Next.js, React for the frontend, and Convex for backend operations, supporting real-time collaboration and updates.                                        |
| 🔩  | **Code Quality**  | Adheres to strong type-checking with TypeScript and employs modular component design for reusability and maintainability.                                                               |
| 📄  | **Documentation** | Extensive documentation within code for key configurations and components, enhancing developer understanding and onboarding.                                                            |
| 🔌  | **Integrations**  | Integrates with Clerk for authentication, Convex for backend services, and various Radix UI components for UI consistency.                                                              |
| 🧩  | **Modularity**    | High, with a clear separation of concerns across components, utilities, and backend services, facilitating code reuse.                                                                  |
| 🧪  | **Testing**       | While not explicitly mentioned, the use of TypeScript implies a focus on type safety as a form of static testing. Further details on unit or integration testing frameworks are needed. |
| ⚡️ | **Performance**   | Leverages Next.js for optimized performance and Convex for efficient backend operations, though specific metrics aren't provided.                                                       |
| 🛡️  | **Security**      | Uses Clerk for secure authentication and integrates secure practices for data handling, particularly in user and class management.                                                      |
| 📦  | **Dependencies**  | Includes essential libraries like `react`, `next`, `typescript`, and utility libraries (`clsx`, `date-fns`) for enhanced development.                                                   |
| 🚀  | **Scalability**   | Designed with scalability in mind, using Convex and Next.js to efficiently handle increased load and real-time collaboration.                                                           |

````

---

##  Repository Structure

```sh
└── ./
    ├── .github
    │   └── workflows
    ├── README.md
    ├── app
    │   ├── ConvexClientProvider.tsx
    │   ├── ErrorBoundary.tsx
    │   ├── classes
    │   ├── dashboard
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── layouts
    │   └── page.tsx
    ├── assets
    │   └── fonts
    ├── components
    │   ├── AddStudentForm.tsx
    │   ├── ClassCard.tsx
    │   ├── ClassDropdown.tsx
    │   ├── ClassesView.tsx
    │   ├── DevToggle.tsx
    │   ├── DndContextProvider.tsx
    │   ├── Header.tsx
    │   ├── NumberOfGroupsSlider.tsx
    │   ├── SaveGroupsForm.tsx
    │   ├── ShuffleButton.tsx
    │   ├── SignInAndSignUpButtons.tsx
    │   ├── Student.tsx
    │   ├── StudentContextMenu.tsx
    │   ├── StudentGroup.tsx
    │   ├── StudentGroups.tsx
    │   ├── UploadRosterForm.tsx
    │   ├── helpers
    │   ├── layout
    │   ├── typography
    │   └── ui
    ├── components.json
    ├── convex
    │   ├── README.md
    │   ├── _generated
    │   ├── auth.config.js
    │   ├── classes.ts
    │   ├── http.ts
    │   ├── myFunctions.ts
    │   ├── savedGroups.ts
    │   ├── schema.ts
    │   ├── students.ts
    │   ├── tsconfig.json
    │   └── users.ts
    ├── hooks
    │   └── useStudentGroupsStore.ts
    ├── lib
    │   ├── util.ts
    │   └── utils.tsx
    ├── middleware.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── tailwind.config.js
    └── tsconfig.json
````

---

## Modules

<details closed><summary>.</summary>

| File                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tsconfig.json](tsconfig.json)           | Configures TypeScript for the project, setting strict type-checking rules and compatibility with JSX and ESNext features. It enhances developer experience with path aliases for efficient module resolution and integrates with Next.js framework for optimized build processes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [next.config.js](next.config.js)         | Configures the Next.js framework settings, enabling customization and optimization of the build and runtime behavior of the application, supporting the repos overarching architecture for seamless development and deployment of its web-based features.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [middleware.ts](middleware.ts)           | Incorporates authentication middleware from Clerk for Next.js projects, designating public routes and setting up route matching for secured paths. It plays a pivotal role in managing access across the application, ensuring certain pages are public while others require authentication, seamlessly integrating with the apps security architecture.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [tailwind.config.js](tailwind.config.js) | Defines the Tailwind CSS configuration for the entire project, customizing the design system with themes like colors, fonts, and animations. It centralizes UI consistency, ensuring responsive and visually cohesive components across pages, components, and app-specific UIs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [postcss.config.js](postcss.config.js)   | Configures PostCSS plugins to integrate Tailwind CSS and Autoprefixer into the projects build process, optimizing and enhancing the styling workflow within the repositorys architecture, focused on facilitating responsive design and cross-browser compatibility.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [package.json](package.json)             | Defines and manages the projects dependencies, scripts for development, building, and starting the application, and integrates crucial libraries and frameworks such as React, Next.js, Convex, and Tailwind CSS to set a solid foundation for the applications frontend and backend development workflows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [components.json](components.json)       | Defines UI configuration and component conventions for the project, specifying styling with Tailwind CSS, React component preferences, and path aliases for efficient development. It ensures a consistent development environment and optimized component usage across the application, enhancing maintainability and scalability of the codebase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [package-lock.json](package-lock.json)   | The main purpose of this code file within its parent repository is to contribute to the front-end aspects of the application, handling UI components or logic that facilitates user interaction with class-related functionalities. It may be responsible for rendering UI elements such as class cards, dropdowns for class selection, and forms for adding new students, embedding these components into a larger application infrastructure designed to manage and display educational content or course management tasks.### Critical Features:1. **Class Management ComponentsIncludes UI components like `ClassCard.tsx`, `ClassDropdown.tsx`, and `ClassesView.tsx`, which suggest functionality for displaying individual classes, allowing users to navigate through different classes, and presenting an aggregated view of classes, respectively. 2. **Student InteractionThe `AddStudentForm.tsx` component hints at features enabling users to add students to classes, implying the application supports dynamic user interactions and data entry related to class enrollment or management.3. **Development UtilitiesThe presence of a `DevToggle.tsx` component suggests the codebase includes tools or components aimed at enhancing development workflows or toggling development-only features, which can be crucial for testing and debugging.4. **User Experience EnhancementsThe `DndContextProvider.tsx` likely refers to a drag-and-drop context provider, indicating the application utilizes intuitive, interactive methods for users to manipulate UI elements or data                                                                                                   |
| [pnpm-lock.yaml](pnpm-lock.yaml)         | The ConvexClientProvider.tsx file is likely central to the integration and management of the Convex client within the application. Its primary purpose is to provide an efficient and streamlined way for the rest of the application components to interact with Convex, a backend framework known for simplifying the development of real-time collaborative applications. This file most likely acts as a context provider in the React application, wrapping the apps component tree to enable any component in the tree to access the Convex client functionality. This is critical for maintaining a cohesive state management strategy across the app, particularly in applications that require real-time data synchronization or collaboration features.By abstracting Convex client interactions to a single file, the repository architecture ensures modularity and encapsulation, making the codebase more maintainable and scalable. The presence of this file suggests that the application likely relies on Convex for crucial backend operations, such as database interactions, real-time updates, or collaborative features, and emphasizes the importance of Convex in the overall application architecture.Moreover, given the nature of ConvexClientProvider.tsx, it may incorporate critical features such as error handling, connection management, and context provisioning to React components, which are vital for creating a seamless user experience in a real-time, collaborative application environment.This file is a key piece of infrastructure within the app directory, indicating a strategic choice to leverage Convex for backend services and to promote a |

</details>

<details closed><summary>convex</summary>

| File                                    | Summary                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tsconfig.json](convex/tsconfig.json)   | Configures the TypeScript environment for Convex functions within the application, ensuring type safety and adhering to Convexs requirements. It specifies a modern ECMAScript target and includes settings for module resolution and syntax allowances, crucial for the seamless operation of backend functionalities.                                                         |
| [myFunctions.ts](convex/myFunctions.ts) | Defines and implements Convex functions for querying, mutating, and action-based interactions within the applications backend, facilitating data retrieval, updates, and third-party API communications, crucial for real-time database operations and external data integration in the projects architecture.                                                                  |
| [users.ts](convex/users.ts)             | Defines and manages user-related operations within the system, such as creating new user profiles and retrieving user details by their identification. Introduces secure and efficient mechanisms to interact with the database, ensuring user data integrity and streamlined access within the applications architecture.                                                      |
| [auth.config.js](convex/auth.config.js) | Defines the authentication configuration for the app, specifying providers for JWT validation. It leverages environment variables for domain configuration, ensuring secure and flexible authentication management aligned with Convexs documentation guidance. This setup is crucial for the repositorys security architecture, particularly in user authentication workflows. |
| [classes.ts](convex/classes.ts)         | Manages classroom and student data interactions, including creating classes, adding students, and retrieving classes specific to a user. It leverages mutations for data modification and queries for data retrieval, ensuring dynamic, user-specific educational management within the applications architecture.                                                              |
| [schema.ts](convex/schema.ts)           | Defines and structures the applications database schema, outlining the organization of documents, users, classes, students, and saved groups with specific attributes and relationships, facilitating schema validation and database integrity in the overarching architecture.                                                                                                 |
| [http.ts](convex/http.ts)               | Integrates with Clerk via webhooks to seamlessly create new user documents upon the registration of new users, ensuring user data is immediately available within the applications architecture for further actions, enhancing the apps responsiveness to user changes.                                                                                                         |
| [students.ts](convex/students.ts)       | Defines and manages student-related operations within the applications backend, including retrieving student details by class or ID and handling student deletions, ensuring data consistency and secure access to student information as part of the applications centralized data management and authentication system.                                                       |
| [savedGroups.ts](convex/savedGroups.ts) | Enables the creation and storage of student groups within a class by inserting group details and associated class IDs into the `savedGroups` database. This functionality is crucial for organizing class dynamics and facilitating streamlined group management within the applications broader educational framework.                                                         |

</details>

<details closed><summary>convex._generated</summary>

| File                                               | Summary                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [api.js](convex/_generated/api.js)                 | Generates a utility for seamless integration with Convex functions throughout the application, streamlining the process of referencing and invoking backend logic from the apps API, ensuring a modular and maintainable architecture within the broader system for dynamic data manipulation and management.                                   |
| [dataModel.d.ts](convex/_generated/dataModel.d.ts) | Generates type definitions for the data model, ensuring type safety and streamlined database interaction in the application. It automates the creation of types for tables, documents, and IDs, facilitating efficient and error-free development workflows within the repositorys Convex-based architecture.                                   |
| [api.d.ts](convex/_generated/api.d.ts)             | Generates and exports tailored API utilities to seamlessly interact with the repositorys backend functions, including modules for classes, http requests, custom functions, saved groups, students, and users. Simplifies accessing server-side logic and ensures type safety across different parts of the application architecture.           |
| [server.js](convex/_generated/server.js)           | Generates server-side utilities essential for querying and mutating the Convex database from both client and server environments. It facilitates the creation of public APIs and actions with support for direct database access, ensuring secure and structured data interaction within the applications architecture.                         |
| [server.d.ts](convex/_generated/server.d.ts)       | Generates server-side utilities for Convex query and mutation functions, enabling both public and internal access to the database. It facilitates the creation of HTTP actions, offering a foundational framework for database interaction and the execution of JavaScript code, including actions with side-effects outside the clients reach. |

</details>

<details closed><summary>components</summary>

| File                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [NumberOfGroupsSlider.tsx](components/NumberOfGroupsSlider.tsx)     | Enables dynamic adjustment of the number of groups in a classroom setting through a user-friendly interface, incorporating a slider and plus-minus buttons to facilitate fine-tuned selection within defined limits, enhancing the flexibility and usability of the class organization features within the applications ecosystem.                                                               |
| [StudentContextMenu.tsx](components/StudentContextMenu.tsx)         | Integrates a context menu specifically for student entities, enabling users to perform actions like deletion directly from the UI. Utilizes mutation hooks for data manipulation, enhancing interactivity within the applications interface while contributing to a seamless user experience in educational management tasks.                                                                    |
| [StudentGroup.tsx](components/StudentGroup.tsx)                     | StudentGroup.tsx provides an interactive UI component for displaying student groups, facilitating drag-and-drop functionality within the educational platform. It leverages third-party libraries for UI elements and drag-and-drop features, supporting group management actions like adding or removing students, thus enhancing the apps user engagement and content management capabilities. |
| [UploadRosterForm.tsx](components/UploadRosterForm.tsx)             | Enables teachers to create a new class by uploading a student roster, utilizing form validation and data processing to ensure accurate input before submission. Integrates with the Convex framework and Clerk authentication, facilitating a seamless addition of classes to the platforms database.                                                                                            |
| [DevToggle.tsx](components/DevToggle.tsx)                           | Enhances user experience by introducing a development theme toggle. Utilizing local storage, the DevToggle component allows users to switch between themes, ensuring preferences persist across sessions. Integration with the UI library ensures a seamless user interface component for theme management.                                                                                      |
| [ShuffleButton.tsx](components/ShuffleButton.tsx)                   | Introduces a ShuffleButton component, offering a succinct UI element to trigger reshuffling functionalities within the application. Leveraging a minimalistic design, it integrates smoothly with the app’s architecture to enhance user interaction by providing a clear, accessible way to randomly rearrange displayed elements or groups.                                                    |
| [ClassesView.tsx](components/ClassesView.tsx)                       | ClassesView.tsx serves as a dynamic visual component to display a list of all classes, leveraging Convex for backend data fetching. It utilizes Reacts functional component pattern and the Convex React hook for querying class data, providing an interactive view within the applications class management feature.                                                                           |
| [AddStudentForm.tsx](components/AddStudentForm.tsx)                 | Enables users to add students to classes by submitting their names, which are processed to replace last names with initials for privacy. Utilizes `convex/react` for mutations and `zod` for schema validation to ensure data integrity before updating the class roster in the repositorys data model.                                                                                          |
| [SignInAndSignUpButtons.tsx](components/SignInAndSignUpButtons.tsx) | SignInAndSignUpButtons.tsx facilitates user authentication by rendering buttons for sign-in, sign-up, and user account management within the applications UI. It distinguishes between authenticated and unauthenticated states to display appropriate options, integrating with external authentication services for seamless user experience.                                                  |
| [SaveGroupsForm.tsx](components/SaveGroupsForm.tsx)                 | Integrates user input with backend operations to persistently save student groups within a specified class. Utilizes React hooks for form management and mutation, adhering to schema validation for data integrity. Supports dynamic classroom environments by offering a streamlined interface for storing grouped student data.                                                               |
| [ClassCard.tsx](components/ClassCard.tsx)                           | ClassCard.tsx defines a visually appealing class information card component, enabling navigation to class details, featuring interactive elements like star rating and customizable dropdown menus for user actions. It incorporates accessibility and customization principles, seamlessly integrating with the apps UI design patterns.                                                        |
| [ClassDropdown.tsx](components/ClassDropdown.tsx)                   | ClassDropdown.tsx facilitates class selection within the application, leveraging a pop-up menu driven by user interaction. It dynamically lists classes fetched from the backend, offering a search feature and allowing navigation to class-specific views upon selection, enhancing the user experience in class management tasks.                                                             |
| [Student.tsx](components/Student.tsx)                               | Implements a draggable UI component for displaying students within a dynamic classroom management system. Utilizes React and a third-party drag-and-drop library to enrich the user interface, allowing for intuitive interaction with student elements, further enhanced with contextual actions via an integrated context menu.                                                                |
| [Header.tsx](components/Header.tsx)                                 | Offers navigational functionality and user authentication options within the applications interface. It connects users to major sections such as class management, about, and contact pages, and integrates sign-in and sign-up mechanisms, aligning with the repositorys focus on enhancing user experience and facilitating class organization tasks.                                          |
| [StudentGroups.tsx](components/StudentGroups.tsx)                   | Provides an interactive interface for organizing students into groups with drag-and-drop functionality, leveraging the StudentGroup component for visualization and the ShuffleButton for randomizing group arrangements. Integrates with the application's data models for dynamic class and student group management.                                                                          |
| [DndContextProvider.tsx](components/DndContextProvider.tsx)         | Provides a drag-and-drop context for the app, enabling interactive UI elements where users can move items dynamically. Its integral to the repositorys UI layer, facilitating more engaging and user-friendly interactions within components that require item reordering or grouping functionalities, such as managing student lists or class arrangements.                                     |

</details>

<details closed><summary>components.helpers</summary>

| File                                                        | Summary                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [FakeWordList.tsx](components/helpers/FakeWordList.tsx)     | Generates a list of fake words using the Jabber library, tailored for testing or placeholder purposes. Options include specifying the number of words, their length range, and whether they should be capitalized, enhancing the versatility of UI components within the repositorys architecture.                       |
| [AfterSSR.tsx](components/helpers/AfterSSR.tsx)             | Enhances client-side rendering by deferring content visibility until after the initial server-side rendering has completed, ensuring a smoother transition for dynamic content. It plays a pivotal role in optimizing the user experience within the applications component-based architecture.                          |
| [FakeParagraphs.tsx](components/helpers/FakeParagraphs.tsx) | Generates placeholder text for UI components within the repository, utilizing the Jabber library to create realistic-looking paragraphs. This tool aids in visual layout testing and design mockups by populating components with dummy text, ensuring readability and aesthetic appeal in the absence of final content. |

</details>

<details closed><summary>components.typography</summary>

| File                                       | Summary                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [code.tsx](components/typography/code.tsx) | Exports a styled `Code` component, utilizing utility functions for enhanced semantic elements. Integral to presenting code snippets across the application, it adheres to the design system within `typography`, ensuring consistency and readability for developers and users interacting with code elements in the user interface. |
| [link.tsx](components/typography/link.tsx) | Enhances navigation within the application by providing a styled link component, integrating seamlessly with Next.js routing. It merges custom styles with Next.js Link functionality, supporting dynamic navigation and enhancing user interaction through visually appealing, easily customizable hyperlink elements.              |

</details>

<details closed><summary>components.layout</summary>

| File                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [responsive-sidebar-button.tsx](components/layout/responsive-sidebar-button.tsx) | Enhances user navigation by providing a responsive sidebar button, toggling visibility on click. It integrates with UI components and utilizes state management for dynamic display, embodying the architectural principle of modularity within the repository. This component supports an adaptable interface, ensuring accessibility across various device sizes. |
| [sticky-header.tsx](components/layout/sticky-header.tsx)                         | Integrates a customized sticky header into the user interface, leveraging utility functions for styling consistency. Ensures the header remains accessible across different pages and layouts, enhancing navigation and visual coherence within the applications architecture. Essential for a unified user experience and interface design.                        |
| [sticky-sidebar.tsx](components/layout/sticky-sidebar.tsx)                       | Introduces a StickySidebar component within the layout subsystem, enhancing the user interface by providing a scrollable, fixed-position sidebar. Integrates with the librarys utility functions and specialized UI components, contributing to a cohesive and navigable user experience across the applications dashboard and settings pages.                      |
| [paragraph.tsx](components/layout/paragraph.tsx)                                 | Defines a Paragraph component that enhances text presentation by adjusting line-height and top margin for non-first child paragraphs, contributing to the repositorys cohesive visual design and user interface consistency across different parts of the application.                                                                                              |
| [sticky-footer.tsx](components/layout/sticky-footer.tsx)                         | Exports a StickyFooter component that ensures a footer element remains fixed at the bottom of the viewport across the application. Enhanced with styling for visibility and z-index management, it integrates seamlessly into the web apps layout, contributing to consistent user interface design and user experience.                                            |
| [footer.tsx](components/layout/footer.tsx)                                       | Exports a Footer component that adds a styled footer with a top border to the applications layout, utilizing utility functions from the projects `lib` directory for streamlined development and consistency across the app's user interface.                                                                                                                       |

</details>

<details closed><summary>components.ui</summary>

| File                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [badge.tsx](components/ui/badge.tsx)                     | Badge.tsx introduces a customizable UI component for displaying badges within the application, offering multiple style variants including default, secondary, and destructive, designed for easy integration and consistent UI across the platform. It leverages React and class-variance-authority for dynamic styling.                                                   |
| [calendar.tsx](components/ui/calendar.tsx)               | Integrates a customizable calendar component into the user interface, leveraging `react-day-picker` for date selection. Enhanced with navigation icons and styled using Tailwind CSS, it supports day range selections and theme customizations, seamlessly fitting into the applications scheduling or event planning features.                                           |
| [toast.tsx](components/ui/toast.tsx)                     | Provides a customizable toast notification system within the application, leveraging Radix UI components for rich, interactive feedback. Includes multiple styled variants and actions, facilitating user engagement across different application states and actions, enriching the user interface with contextually relevant information.                                 |
| [alert.tsx](components/ui/alert.tsx)                     | Enhances user interface responsiveness and clarity by providing customizable alert components, including main alerts, titles, and descriptions with support for variant styling. It leverages advanced CSS handling for a visually coherent and accessible notification system within the applications UI layer.                                                           |
| [sheet.tsx](components/ui/sheet.tsx)                     | Defines and exports UI components for modal dialogues, leveraging `@radix-ui/react-dialog` for accessible overlays. Customizes appearance through responsive design, animation for state transitions, and includes specialized components such as SheetHeader and SheetFooter for structured content organization within modals.                                           |
| [switch.tsx](components/ui/switch.tsx)                   | Implements a customized toggle switch component leveraging Radix UI primitives, providing enhanced UI flexibility and a consistent design language across the application. It integrates seamlessly with the apps theme, offering accessible, visually appealing on/off states through its design and animated thumb transitions.                                          |
| [input.tsx](components/ui/input.tsx)                     | Input.tsx provides a reusable input component, enhancing UI consistency across the application. It integrates custom styling and inherits properties from HTMLInputElement, allowing for versatile use within forms and data entry elements, thus supporting the repositorys focus on user experience and interface design.                                                |
| [tabs.tsx](components/ui/tabs.tsx)                       | Enhances user interface interaction by providing a customizable tabs component, utilizing the Radix UI tabs primitive for structured navigation within the application. It includes styled tab lists, triggers, and content areas, improving accessibility and user experience in line with the repositorys front-end architecture.                                        |
| [radio-group.tsx](components/ui/radio-group.tsx)         | Implements a customizable RadioGroup component using the Radix UI library, enhancing user interface design with a grid layout and visually appealing radio buttons, complete with focus and disabled states for accessibility and user experience.                                                                                                                         |
| [scroll-area.tsx](components/ui/scroll-area.tsx)         | Provides an enhanced scrolling experience within the applications UI by leveraging the @radix-ui/react-scroll-area primitives, offering customizable scrollbars and a smooth, aesthetically pleasing overflow handling that integrates seamlessly with the wider design system established in the repositorys architecture.                                                |
| [textarea.tsx](components/ui/textarea.tsx)               | Textarea component enriches the UI library by providing a customizable text input area, designed for seamless integration and user experience enhancement within the applications interface. It leverages Reacts forwardRef for flexibility and includes styling options to maintain consistency with the app's design principles.                                         |
| [progress.tsx](components/ui/progress.tsx)               | Streamlines user feedback on operations progress within the application by implementing a visually intuitive progress bar. Integrates with the Radix UI library for a seamless, customizable user experience, ensuring alignment with the apps design system defined in the `globals.css` and supporting React's component composition model.                              |
| [separator.tsx](components/ui/separator.tsx)             | Introduces a customizable UI component, Separator, leveraging Radix UI primitives for visually dividing elements within the application. It supports both horizontal and vertical orientations, enhancing the apps layout capabilities and contributing to its visual structure, aligning with the broader design system encapsulated in the UI components module.         |
| [navigation-menu.tsx](components/ui/navigation-menu.tsx) | Implements a customizable navigation menu using Radix UI primitives, enhancing user interface with features like dropdown triggers, animated transitions, and a responsive layout. It centralizes navigation controls and aesthetics, contributing to the repositorys goal of providing a seamless and intuitive user experience across the application.                   |
| [select.tsx](components/ui/select.tsx)                   | Provides a customizable Select component using Radix UI primitives, enhancing user interactivity with options such as labels, items, separators, and triggers. It boasts a refined design with animations, making dropdown selections user-friendly and visually appealing, fitting seamlessly into the applications UI architecture.                                      |
| [collapsible.tsx](components/ui/collapsible.tsx)         | Integrates Radix UIs collapsible components within the UI layer, enhancing user interface interactivity by providing expandable and collapsible sections. Essential for organizing content in a compact format, it serves the broader goal of improving user experience and interface design across the application.                                                       |
| [toggle.tsx](components/ui/toggle.tsx)                   | Implements a customizable Toggle component leveraging the Radix UI library and the class-variance-authority for styling. Offers variant and size customization options to seamlessly integrate into the applications UI, enhancing user interactivity and visual feedback across various sections of the platform.                                                         |
| [accordion.tsx](components/ui/accordion.tsx)             | Introduces a customizable Accordion component leveraging the Radix UI library, enriched with animation and style enhancements for interactive display. It encapsulates the functionality for expandable content areas, aiding in organizing and presenting hierarchical information efficiently within the applications user interface.                                    |
| [form.tsx](components/ui/form.tsx)                       | Provides a comprehensive set of components for form handling within the UI layer, leveraging React Hook Form for state management and Radix UI for accessibility. It encapsulates functionality for form fields, labels, controls, descriptions, and error messages, facilitating a more structured and maintainable form implementation across the application.           |
| [use-toast.ts](components/ui/use-toast.ts)               | Provides a customizable notification system within the UI, enabling the display, updating, and dismissal of toast messages. It manages a queue with limits on the number of concurrent toasts and employs a reducer for state management, offering both programmatic and component-based interfaces for notification interactions.                                         |
| [resizable.tsx](components/ui/resizable.tsx)             | Integrates flexible UI layout components by providing resizable panel groups and handles, enhancing the applications interactivity and user customization options through adaptable interface elements, supported by utility functions for streamlined implementation and visual consistency.                                                                              |
| [command.tsx](components/ui/command.tsx)                 | Enhances user interaction within the repositorys UI by providing a customizable command palette. Featuring dialog components, search input functionality, and navigable lists, it streamlines actions and information retrieval via keyboard shortcuts, contributing to a more efficient and accessible user experience.                                                   |
| [menubar.tsx](components/ui/menubar.tsx)                 | Provides a comprehensive set of reusable Menubar components for creating intuitive and accessible UI navigation elements using Radix UI primitives. It includes menu triggers, content containers, items, labels, and separators, supporting keyboard navigation shortcuts and various interactive states.                                                                 |
| [table.tsx](components/ui/table.tsx)                     | Provides a comprehensive set of customizable table components, including Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, and TableCaption. These components enable the creation of responsive, accessible tables with features like sorting and selection, enhancing the user interface of the application.                                    |
| [context-menu.tsx](components/ui/context-menu.tsx)       | Provides a comprehensive and customizable context menu implementation for user interfaces, leveraging @radix-ui/react-context-menu. It features standard menu items, checkboxes, radiobuttons, labels, separators, and navigation shortcuts. This component enhances user interactions within the application by offering a polished and dynamic selection experience.     |
| [toaster.tsx](components/ui/toaster.tsx)                 | Enables dynamic, user-friendly notifications within the application interface. Through integration with a custom toast system, it provides visual feedback for actions via customizable messages, enriching the user experience with immediate, clear communication about application events, errors, or processes in progress.                                            |
| [avatar.tsx](components/ui/avatar.tsx)                   | Integrates a customizable avatar component leveraging the Radix UI library, providing a flexible solution for displaying user avatars within the applications UI. The module offers essential features such as image display, fallback content, and styling options, enhancing user interface consistency and personalization across the platform.                         |
| [card.tsx](components/ui/card.tsx)                       | Defines a reusable Card component and its subcomponents (Header, Title, Description, Content, and Footer) for crafting structured UI elements, adopting a modular and customizable approach aligned with the repositorys design system, enhancing the visual consistency across the applications various interfaces.                                                       |
| [popover.tsx](components/ui/popover.tsx)                 | Integrates a custom-styled, feature-rich UI component for creating interactive popovers, leveraging the Radix UI library. Enhances user interfaces by providing versatile popover placements and animations, essential for building intuitive and responsive layouts within the applications UI component library.                                                         |
| [dropdown-menu.tsx](components/ui/dropdown-menu.tsx)     | Implements a customizable dropdown menu using Radix UI primitives, offering components like triggers, items, groups, and separators. It supports nested submenus, radio and checkbox items for selections, and is styled with utility functions for consistent visuals across the platform, enhancing the user interface component library.                                |
| [checkbox.tsx](components/ui/checkbox.tsx)               | Enhances user interaction by providing a customizable Checkbox component within the UI layer, leveraging the Radix UI library for accessibility and design consistency. This component integrates seamlessly with the apps styling conventions, offering a visually appealing and functional checkbox option for forms and settings.                                       |
| [dialog.tsx](components/ui/dialog.tsx)                   | Provides a modular and customizable dialog system using React and @radix-ui/react-dialog primitives, enabling elegant overlay, content, and interaction management within the applications UI components, complete with animations, accessibility icons, and theming support for a cohesive user experience.                                                               |
| [label.tsx](components/ui/label.tsx)                     | Enhances user interface accessibility by providing customizable labels for form elements, utilizing Radix UIs primitives combined with class-variant authority for theme-consistent, scalable styling. Ensures disabled states are visually distinct, fostering an intuitive and inclusive user experience across the applications various interactions.                   |
| [tooltip.tsx](components/ui/tooltip.tsx)                 | Implements a customizable tooltip component that enhances user interface interactions. Leveraging @radix-ui/react-tooltip for foundation, it offers flexible positioning and styling options, encapsulated within the applications UI toolkit to improve data presentation and user guidance across various components within the repositorys architecture.                |
| [skeleton.tsx](components/ui/skeleton.tsx)               | Skeleton provides a placeholder UI component that uses animation to indicate loading states within the application. It enhances user experience by offering visual feedback during data fetching or content rendering, seamlessly integrating with the broader UI framework defined in the repositorys architecture.                                                       |
| [alert-dialog.tsx](components/ui/alert-dialog.tsx)       | Implements a customizable alert dialog component, leveraging @radix-ui/react-alert-dialog for modality. It offers a flexible architecture with components like Overlay, Content, Header, Footer, Title, Description, Action, and Cancel, enhanced with animation and styling capabilities, to facilitate user interactions within the applications UI framework.           |
| [button.tsx](components/ui/button.tsx)                   | Introduces a versatile Button component, supporting multiple styles and sizes through a customizable interface. It leverages the class-variance-authority for smooth style variations and Radix UI for accessibility, fitting seamlessly within the repositorys UI framework to enhance user interaction across the application.                                           |
| [hover-card.tsx](components/ui/hover-card.tsx)           | Integrates a customizable UI component for displaying hover cards, facilitating user interaction through dynamic content previews within the apps interface. It leverages the Radix UI library to ensure a smooth, accessible experience and supports the overall user-friendly design ethos of the repository.                                                            |
| [slider.tsx](components/ui/slider.tsx)                   | Introduces a customizable Slider component leveraging the Radix UI library, designed to enhance user interface interactivity within the application. It focuses on providing a visually appealing and accessible slider for adjusting values, seamlessly integrating with the repositorys emphasis on user experience and design versatility.                              |
| [aspect-ratio.tsx](components/ui/aspect-ratio.tsx)       | Enables the maintenance of aspect ratios across various UI components by utilizing the AspectRatioPrimitive from @radix-ui/react-aspect-ratio, essential for creating visually consistent and responsive designs within the applications user interface, seamlessly integrating with the broader repositorys architecture focused on user experience and interface design. |

</details>

<details closed><summary>.github.workflows</summary>

| File                                                       | Summary                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ai-pr-reviewer.yml](.github/workflows/ai-pr-reviewer.yml) | Automates the process of code review in the project by leveraging AI, integrating directly into the GitHub workflows. It ensures consistent, efficient, and thorough examination of changes, enhancing the projects quality and maintainability within its collaborative and open-source development ecosystem. |

</details>

<details closed><summary>hooks</summary>

| File                                                       | Summary                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [useStudentGroupsStore.ts](hooks/useStudentGroupsStore.ts) | Empowers dynamic management of student groups within the application, allowing for the addition and removal of groups through a user-friendly interface. This hook integrates seamlessly with the apps state management system, enhancing the educational tools collaborative and organizational capabilities. |

</details>

<details closed><summary>lib</summary>

| File                       | Summary                                                                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [utils.tsx](lib/utils.tsx) | Provides utility functions to enhance UI development with class name merging, forward reference handling, styled component creation, and algorithms for shuffling arrays and generating student groups, supporting the repositorys focus on interactive and dynamic user interfaces within an educational toolset. |
| [util.ts](lib/util.ts)     | Generates random hex colors and derives contrast colors to enhance UI aesthetics, while also processing student names for privacy by replacing last names with initials, enriching the user experience and data handling capabilities within the applications functionalities.                                     |

</details>

<details closed><summary>app</summary>

| File                                                     | Summary                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/page.tsx)                                 | Home serves as the landing page for the Student Groups Generator application, dynamically displaying different content based on user authentication status. It welcomes signed-in users with a personalized greeting, offers a database interaction example through a number addition feature, and guides unauthenticated users to sign-in options.                   |
| [layout.tsx](app/layout.tsx)                             | RootLayout acts as the foundational framework for the applications UI, integrating font management, drag-and-drop functionality, and developer tools. It encapsulates the global CSS, provides font customization with diverse weight options, and orchestrates core components such as the Header and DevToggle, ensuring a cohesive user experience across the app. |
| [globals.css](app/globals.css)                           | Defines the global styles and color theme for the application, integrating Tailwind CSS for consistent UI design. It includes definitions for light and dark modes, ensuring accessibility and user preference across the apps layout and components.                                                                                                                 |
| [ConvexClientProvider.tsx](app/ConvexClientProvider.tsx) | Integrates Convex client and Clerk authentication within the application framework, ensuring secure and efficient data management. Encapsulates child components in an error-handling layer to maintain application stability. A pivotal element in connecting the apps front-end to its back-end services, facilitating user authentication and data interaction.    |
| [ErrorBoundary.tsx](app/ErrorBoundary.tsx)               | Captures and displays user-friendly error messages specifically for Clerk integration issues, guiding through the addition of necessary environment variables. It enhances the development experience by preventing propagation of select errors to the Next.js error boundary, maintaining a clear, instructive interface for developers during setup.               |

</details>

<details closed><summary>app.dashboard</summary>

| File                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [page.tsx](app/dashboard/page.tsx)     | Page.tsx serves as a dynamic dashboard component within the application, fetching and displaying a list of classes. Utilizing the Convex framework for data fetching, it provides seamless navigation to individual class details through clickable links, enhancing the user experience by organizing and accessing class information efficiently.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [layout.tsx](app/dashboard/layout.tsx) | The essence of this codebase is to provide an intuitive, user-friendly platform for educators to efficiently manage their classrooms. It allows for the creation of student groups, class management, and roster uploading among other functionalities. The incorporation of an ErrorBoundary component ensures graceful handling of runtime errors, enhancing the robustness of the application. The ConvexClientProvider hints at the use of Convex as a backend, suggesting a real-time, collaborative experience.### Critical Features:-**Component-Based Design:** The `components` directory is rich with reusable UI elements such as `AddStudentForm`, `ClassCard`, and `StudentGroup`, indicating a strong emphasis on a DRY (Don't Repeat Yourself) principle and a seamless user experience.-**Classroom Management:** Files like `ClassesView.tsx` and `StudentGroups.tsx` reflect the application's core functionality, enabling educators to visualize and manage their classrooms effectively.-**Real-Time Collaboration:** The presence of `ConvexClientProvider.tsx` implies the use of Convex for handling data, suggesting features like real-time updates to the class and group information without the need for manual refreshes.-**Accessibility and Usability Enhancements:** The inclusion of components like `DndContextProvider` (likely relating to drag-and-drop functionality) and ` |

</details>

<details closed><summary>app.layouts</summary>

| File                                 | Summary                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/layouts/page.tsx)     | Showcases various web page layouts through interactive examples and links, providing a visual guide for sticky headers, footers, and sidebars in different configurations. Encourages customizability and experimentation by allowing easy removal of the layout directory for streamlined project structure.                                                                   |
| [layout.tsx](app/layouts/layout.tsx) | Defines a basic layout structure showcasing temporary utility, suggesting deletion post-demonstration. It encapsulates child components without applying any specific styling or layout modifications, emphasizing its placeholder status within the broader architectural design intended for customization or removal according to the projects evolving layout requirements. |

</details>

<details closed><summary>app.layouts.sticky-header-sidebar-footer-inside</summary>

| File                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [page.tsx](app/layouts/sticky-header-sidebar-footer-inside/page.tsx) | Introduces a layout component that orchestrates the visual structure of a page, featuring a sticky header, sidebar, and a footer within the main content area. This layout ensures important navigation elements and content are readily accessible, enhancing the user interface and experience within the parent repositorys web application architecture. |

</details>

<details closed><summary>app.layouts.sticky-header-sidebar-footer-below-fold</summary>

| File                                                                     | Summary                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/layouts/sticky-header-sidebar-footer-below-fold/page.tsx) | Defines a layout component with sticky header and sidebar, alongside a footer that appears below the fold. It utilizes helper components for displaying placeholder content, ensuring an organized structure for pages that demand fixed navigation elements while showcasing dynamic content sections within a fluid, responsive grid layout. |

</details>

<details closed><summary>app.layouts.sticky-sides-flex-content-simple</summary>

| File                                                              | Summary                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/layouts/sticky-sides-flex-content-simple/page.tsx) | Introduces a straightforward layout with sticky header and sidebar, tailored for scenarios requiring a static design. It leverages components like `FakeWordList` and `FakeParagraphs` to populate UI elements, ensuring a cohesive structure for displaying content without necessitating dynamic layout switches. |

</details>

<details closed><summary>app.layouts.sticky-sides-flex-content</summary>

| File                                                       | Summary                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/layouts/sticky-sides-flex-content/page.tsx) | Provides a dynamic layout with sticky header, sidebar, and footer, enabling seamless switching between complex and simple page structures. It utilizes placeholder components to simulate content, facilitating the design of responsive, grid-based layouts with adjustable sections for diverse web application interfaces within the repositorys architecture. |

</details>

<details closed><summary>app.layouts.sticky-header-footer-below-fold</summary>

| File                                                             | Summary                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [page.tsx](app/layouts/sticky-header-footer-below-fold/page.tsx) | Introduces a layout with a sticky header and a footer strategically positioned below the fold, ensuring an uncluttered view of the main content while enhancing user navigation and experience within the applications architecture. |

</details>

<details closed><summary>app.layouts.sticky-header-sticky-footer</summary>

| File                                                         | Summary                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/layouts/sticky-header-sticky-footer/page.tsx) | Defines a page layout with a sticky header and footer, ensuring the main contents visibility adapts to their combined height. Incorporates both custom and helper components to populate the layout with dynamic text, optimizing user interface consistency and functionality across the applications various pages. |

</details>

<details closed><summary>app.layouts.sticky-header-sidebar-footer-below-fold-responsive</summary>

| File                                                                                | Summary                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/layouts/sticky-header-sidebar-footer-below-fold-responsive/page.tsx) | Implements a responsive layout with sticky header and sidebar components, alongside a footer that appears below the fold. It uses breakpoints for adaptability across different screen sizes, integrating utility components like `FakeParagraphs` and `FakeWordList` to simulate content within the layout structure. |

</details>

<details closed><summary>app.layouts.sticky-header-sidebar-sticky-footer</summary>

| File                                                                 | Summary                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/layouts/sticky-header-sidebar-sticky-footer/page.tsx) | Implements a layout with a sticky header, sidebar, and footer, incorporating fake content generators for demonstration. It structures the page into a grid, adjusting the main and sidebar heights dynamically to ensure a seamless user experience without unnecessary scrollbars. |

</details>

<details closed><summary>app.classes</summary>

| File                                 | Summary                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/classes/page.tsx)     | Page.tsx dynamically renders class cards using data fetched with a custom query and offers functionality to upload class rosters through an embedded form, integrating seamlessly with the applications data management and user interface components to enhance the educational platforms class management capabilities.  |
| [layout.tsx](app/classes/layout.tsx) | Offers a dedicated layout component for the classes section, establishing a consistent visual structure across the classes-related interfaces by providing a flexible container for nesting various UI elements, thus enhancing the apps overall user experience and design coherence within the repositorys architecture. |

</details>

<details closed><summary>app.classes.[classId]</summary>

| File                                           | Summary                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](app/classes/[classId]/page.tsx)     | Enables dynamic student group formation within a class, leveraging real-time data queries to fetch class and student details. Offers functionality to adjust group numbers, shuffle group compositions, and integrates seamlessly with the larger applications UI components and Convex backend services for data management and operations. |
| [layout.tsx](app/classes/[classId]/layout.tsx) | Facilitates dynamic classroom management within the app by enabling users to view and organize students into groups, adjust group sizes, and add new students. It incorporates interactive components for seamless navigation and data display, ensuring an engaging and efficient user experience in managing class rosters.                |

</details>

---

## Getting Started

**System Requirements:**

- **TypeScript**: `version x.y.z`

### Installation

<h4>From <code>source</code></h4>

> 1. Clone the . repository:
>
> ```console
> $ git clone ../.
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd .
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```

### Usage

<h4>From <code>source</code></h4>

> Run . using the command below:
>
> ```console
> $ npm run build && node dist/main.js
> ```

### Tests

> Run the test suite using the command below:
>
> ```console
> $ npm test
> ```

---

## Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://local//issues)**: Submit bugs found or log feature requests for the `.` project.
- **[Submit Pull Requests](https://local//blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://local//discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your local account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone ../.
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to local**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://local{//}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=">
   </a>
</p>
</details>

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---

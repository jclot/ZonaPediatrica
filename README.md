<div align="left" style="position: relative;">
<h1>ZONAPEDIATRICA</h1>
<p align="left">
	<em>Comprehensive Next.js Web Application for Pediatric Clinic Management and Patient Portal</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/jclot/ZonaPediatrica?style=flat-square&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/jclot/ZonaPediatrica?style=flat-square&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/jclot/ZonaPediatrica?style=flat-square&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/jclot/ZonaPediatrica?style=flat-square&color=0080ff" alt="repo-language-count">
</p>
</div>
<br clear="right">

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**ZonaPediatrica** is a modern, responsive web application built with the Next.js framework (React) and TypeScript. It is designed to serve as the primary digital portal for a pediatric clinic. The platform provides parents and guardians with a seamless interface to explore medical services, review pediatrician profiles, read educational resources, and schedule appointments online through an integrated calendar and API system.

---

## Features

- **Interactive Appointment Booking:** Integrated calendar interface (`pages/calendar.js`) communicating with backend API routes (`api/citas.js`) to manage patient availability.
- **Medical Staff Directory:** Detailed profiles for pediatricians and clinical staff (`doctor-details.js`).
- **Educational Blog:** CMS-ready blog infrastructure for publishing pediatric health articles and news (`blog-list.js`, `blog-single.js`).
- **Responsive UI/UX:** Built with React components, leveraging custom CSS and Bootstrap for a mobile-first experience.
- **Service & Pricing Catalog:** Clear displays of medical programs, classes, and consultation pricing (`pricing.js`, `classes.js`).
- **API Architecture:** Next.js serverless API routes handling data fetching and appointment logic (`pages/api/`).

---

## Project Structure

### Project Index
<details open>
	<summary><b><code>ZONAPEDIATRICA/</code></b></summary>
	<details> <summary><b>Root Files</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/package.json'>package.json</a></b></td>
				<td>Defines project dependencies, scripts, and npm metadata.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/next.config.js'>next.config.js</a></b></td>
				<td>Configuration file for the Next.js framework.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Compiler options and configurations for TypeScript.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/next-env.d.ts'>next-env.d.ts</a></b></td>
				<td>TypeScript declarations for Next.js environment variables.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <summary><b>src</b></summary>
		<blockquote>
			<details>
				<summary><b>layouts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/src/layouts/Layout.tsx'>Layout.tsx</a></b></td>
						<td>Primary wrapper component defining the global page structure.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/src/layouts/Footer.js'>Footer.js</a></b></td>
						<td>Global footer component containing clinic contact and links.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/src/layouts/header/Header.js'>Header.js</a></b></td>
						<td>Global navigation bar and routing component.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/src/components/ScheduleAppointment.js'>ScheduleAppointment.js</a></b></td>
						<td>UI component for the patient appointment booking form.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/src/components/TestimonialSlider.js'>TestimonialSlider.js</a></b></td>
						<td>Carousel component displaying patient feedback.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/src/components/FaqAccordion.js'>FaqAccordion.js</a></b></td>
						<td>Expandable UI component for Frequently Asked Questions.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <summary><b>pages</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/pages/index.js'>index.js</a></b></td>
				<td>Landing page for the ZonaPediatrica application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/pages/about.tsx'>about.tsx</a></b></td>
				<td>Informational page detailing the clinic's mission and history.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/pages/calendar.js'>calendar.js</a></b></td>
				<td>Frontend view for the appointment scheduling calendar.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/pages/doctor-details.js'>doctor-details.js</a></b></td>
				<td>Dynamic view for displaying individual pediatrician profiles.</td>
			</tr>
			</table>
			<details>
				<summary><b>api</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/pages/api/citas.js'>citas.js</a></b></td>
						<td>API endpoint handling appointment creation and retrieval.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/jclot/ZonaPediatrica/blob/master/pages/api/availabilityData.json'>availabilityData.json</a></b></td>
						<td>Static JSON serving as a mock database for calendar availability.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with ZonaPediatrica, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript / TypeScript
- **Runtime Environment:** Node.js (v16.x or later recommended)
- **Package Manager:** npm

### Installation

Install ZonaPediatrica using the following methods:

**Build from source:**

1. Clone the ZonaPediatrica repository:
```sh
git clone [https://github.com/jclot/ZonaPediatrica](https://github.com/jclot/ZonaPediatrica)
```

2. Navigate to the project directory:
```sh
cd ZonaPediatrica
```

3. Install the project dependencies:
```sh
npm install
```

### Usage

Run the Next.js development server using the following command:

```sh
npm run dev
```
The application will be available at `http://localhost:3000`.

To build the application for production:
```sh
npm run build
npm start
```

### Testing

Run the test suite (if configured) using the following command:

```sh
npm test
```

---

## Project Roadmap

- [x] **Phase 1**: Initial project setup and UI component design.
- [x] **Phase 2**: Implementation of static pages (About, FAQ, Services).
- [ ] **Phase 3**: Integration of the dynamic appointment booking system (`api/citas.js`).
- [ ] **Phase 4**: Database migration (replacing `availabilityData.json` with PostgreSQL/MongoDB).
- [ ] **Phase 5**: Patient authentication and patient portal dashboard.

---

## Contributing

- **Discussions**: Share your insights, provide feedback, or ask questions on the issue tracker.
- **Report Issues**: Submit bugs found or log feature requests for the `ZonaPediatrica` project.
- **Submit Pull Requests**: Review open PRs, and submit your own PRs following the guidelines below.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone [https://github.com/jclot/ZonaPediatrica](https://github.com/jclot/ZonaPediatrica)
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b feature/new-appointment-ui
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'feat: implemented new appointment UI component'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin feature/new-appointment-ui
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch.
</details>

---

## License

This project is protected under the MIT License. For more details, refer to the `LICENSE` file within the repository.

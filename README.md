# 🧪 RedditAutomation – End-to-End Testing Framework using Playwright

Welcome to **RedditAutomation**, a modern QA automation framework built using [Playwright](https://playwright.dev/) with JavaScript. This project automates key flows on Reddit, using Page Object Model, structured test suites, and scalable architecture — perfect for testing, learning, and interviews.

---

## 📌 Tech Stack

| Tool/Library   | Purpose                          |
|----------------|----------------------------------|
| Playwright     | Web automation and browser testing |
| JavaScript     | Core language for scripting       |
| Node.js        | Runtime environment               |
| Jest/Playwright Test Runner | Test execution engine |
| GitHub Actions | CI/CD pipeline                    |

---

## 🔧 Features

✅ Page Object Model (POM)  
✅ Modular folder structure  
✅ Configurable environments  
✅ API testing support (in progress)  
✅ Playwright Test Runner with retry logic  
✅ Screenshots, trace, and HTML report  
✅ CI/CD via GitHub Actions  
✅ Scalable and interview-ready

---

## 🚀 Getting Started

### 📁 Clone the Repo
```bash
git clone https://github.com/manithkumar43/RedditAutomation.git
cd RedditAutomation

📦 Install Dependencies

npm install
npx playwright install


---

🧪 Run Tests

✅ Run All Tests

npx playwright test

🌐 Open HTML Report

npx playwright show-report

🎯 Run a Specific Test

npx playwright test tests/login.spec.js


---

🛠 Folder Structure

📦RedditAutomation
 ┣ 📁pages              → Page classes (POM)
 ┣ 📁tests              → Spec/test files
 ┣ 📁utils              → Helpers (data, common actions)
 ┣ 📁config             → Environment configs (if any)
 ┣ 📄playwright.config.js → Test runner config
 ┗ 📄README.md


---

🤖 GitHub Actions – CI/CD

This project uses GitHub Actions to:

Run tests on every push or PR

Install dependencies and browsers

Upload test report (HTML)


Check the Actions tab for build history and artifacts.




---

👨‍💻 Maintainer

Made with ❤️ by Manith Kumar
QA Automation Engineer | Playwright Enthusiast | JavaScript Learner


---

📃 License

MIT License – use this as a learning base or improve it further!

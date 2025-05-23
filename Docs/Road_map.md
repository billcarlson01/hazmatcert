# HazmatCert Roadmap & Architecture Overview

## 🧭 Project Goals

* Deliver FMCSA-compliant Hazmat Theory training
* Support self-paced learning for truckers and fleets
* Track completions, issue certificates, and maintain QA records
* Integrate with FMCSA and offer DMV test prep as a value-add

---

## ✅ Core Features

* Module-based training with video/text/quiz per unit
* Local quiz storage (MVP), PostgreSQL later
* Certificate issuance after 80%+ final exam
* Admin dashboard for QA & cert management
* Fleet manager tools

---

## 🧱 Backend Architecture

* **Express.js** API

  * `/api/modules` — lesson content
  * `/api/quizzes` — per-module quizzes
  * `/api/results` — stores answers, scores, timestamps
* **PostgreSQL** via `pg`
* Auth via Auth0 or Cognito
* Payments via Stripe

---

## 🧰 Deployment Plan

* React frontend (Vite) → S3 + CloudFront
* Express backend → Elastic Beanstalk (or ECS)
* PostgreSQL → RDS
* Media assets → S3

---

## 📅 Gantt Schedule (Q2–Q3 2025)

* **Auth + Registration** – May 21–28
* **Stripe Payments** – May 28–June 2
* **Content DB + S3 Uploads** – June 2–12
* **Quiz Engine + Cert Flow** – June 12–19
* **FMCSA Integration** – June 19–26
* **Admin Dashboard** – June 26–July 2
* **AWS Hosting** – July 2–9
* **DMV Prep Add-on** – July 9–14
* **Email Reminders + Analytics** – July 14–21
* **Fleet Tools Finalization** – July 21–25

---

## 📊 QA & Growth Ideas

* Track question difficulty over time
* Tag weak/ambiguous items for revision
* Send reminders to incomplete users
* Add multilingual support (future)

---

## 📝 Notes

* All `.md` files stored in `/docs/` folder
* Use `README.md` in each project root
* GitHub repo syncs frontend + backend + docs

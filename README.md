# Wise Platform – Enhanced Onboarding & Transparency Layer
This repository contains the proposed solution for improving transparency, speed, and usability in the Wise Platform onboarding process. The goal is to provide potential partners with earlier access to sandbox tools, clearer onboarding status visibility, and a more streamlined experience from initial registration to full API integration.
## Problem Statement
Feedback from potential and current Wise Platform partners indicates several onboarding pain points:
- Lack of transparency:
The current onboarding steps and review stages are not clearly visible.
Clients do not know where they stand or what is pending.
- Late sandbox access:
Sandbox access is provided only after manual review and when considered a “partner”—there is no preview environment.
This slows down early experimentation and technical exploration.
- Slow onboarding process:
Multiple steps happen manually or without client visibility.
Review cycles are opaque and can delay integration.
## Objective
To introduce a self-service onboarding dashboard that enhances transparency, accelerates technical evaluation, and improves partner satisfaction.
### This project proposes:
#### Early sandbox access:
* Right after registration, clients receive limited sandbox API tokens to explore the platform.
#### Visible pipeline / onboarding status:
##### A clear, step-by-step progress bar showing:
  * where the partner is in the review process,
  * what documents are pending,
  * what steps come next.
#### Access to key platform information
* computing credits used
* visible APIs available for subscription
* visible quotas and rate limits
* upcoming or required onboarding steps
* optional notifications (email / dashboard alerts)
#### Streamlined registration
* A new registration form inspired by Wise Platform’s existing partnership form (https://wise.com/platform/contact), extended to also create an account for dashboard login.
### Proposed Solution Overview
* This repository contains the architecture, design, and implementation details of a new Onboarding & Transparency Layer that sits beside the existing Wise Platform infrastructure.
* High-Level Features
* Self-service onboarding dashboard
* Partner sandbox environment unlocked at registration
* Automated account creation via enhanced form
* Progress-tracking UI (“pipeline / status bar”)
* API visibility panel
* Usage metrics (computing credits / limits)
* Document submission & certificate upload after partnership agreement


### End-to-End Workflow

 This workflow uses the existing Wise documentation and platform logic while improving transparency and access.
1. Partner completes registration form
- Based on the existing Wise partnership form (https://wise.com/platform/contact)
- Extended to capture login credentials
- Creates an organizational account in the system
2. Account automatically created
- The company receives dashboard login credentials
- They gain immediate access to the Onboarding Dashboard
3. Immediate sandbox preview access

The dashboard provides:
* limited API trial tokens
* documentation
* basic testing environment
* No manual review required for initial sandbox preview
5. Onboarding Dashboard becomes the single source of truth
  
A pipeline-style interface shows:
* Registration
* Business Verification / KYC
* Partnership Review
* Agreement Negotiation
* Technical Setup
* Certificate Upload
* API Credentials Issued
* Go-Live
* Clients see what is pending and estimated timelines.
6. Partnership terms discussion & signing
- Partners negotiate and sign terms
- Status updates are reflected in the dashboard

7. Extended sandbox + API credential issuance

 Once approved, clients can:
- add certificates
- configure webhooks
- request additional APIs
- access full sandbox
8. Final testing & go-live
* Client completes integration
* Wise reviews configuration (as per KYC/partner account guidelines: https://docs.wise.com/guides/product/kyc/partner-accounts)
* Production credentials issued

# What's next?
## Implement backend

The current solution is a static frontend implementation, meant to be used as an idea.

Immediate to-do:
- Tie register form to an actual Wise database
- Create backend logic for notifications

## API Credit Service implementation
siia joonis lisada ka pärast

### Why Credits?
Under our changes, in order to provide sandboxing capabilities from the start to shorten the time from onboarding to production, each new registration would immediately (or shortly after registration) gain access to the Sandbox API.
However, giving each new registration infinite access to Sandbox API calls will eventually slow down servers and give an outlet to bad actors to abuse.

This is why a credit system should be implemented to limit API calls. It limits the amount of API calls users can make, while preserving the chance for new registrations to immediately experiment and learn about Wise API.

Implementing a credit system for API calls, where each call is given a credit cost, that is deducted from the sandbox user's credit total.

### API Credit Service Workflow

Upon registration, each new registered account (company) is given a set amount of credits to use on Sandbox API calls.

After adding and validating the account's Certificates, each Sandbox API call goes through an APICreditService route, which keeps track of the account's Credit total and approves / denies requests, while subtracting Credits on successful API calls.

If the account is successfully validated and has enough credits to complete the action, the request is forwarded into the Sandbox API gateway. This way traffic to the actual Sandbox API is lessened, as invalid requests never reach the actual gateway.


### How can Credits be used outside of sandbox?

Implementing a Credit Service for the Sandbox API would also allow this system to be implemented into the production API in the future, letting smaller companies that would otherwise be too small to properly use the Wise Platform API use the API in a more limited way.

## Satisfaction & Value
In order to evaluate user satisfaction and journey monitoring should be implemented for the application.

### Onboarding time
- Monitor time from first user registration and form submission to first API call in production

### Journey
- Monitor user clicks to find common points of failure in user experience
- Essential for finding bugs that prevent users from completing workflow and / or underutilised feature

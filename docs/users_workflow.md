# Client Workflow for Implementing Wise Transactional Services

## 1. Account Creation & Access Provisioning

### 1.1. Registration

- Client fills out the enterprise registration form (business details, contact info, intended use case).
- System validates the form for completeness and format (email verification, company number validation, etc.).
- Upon success, an enterprise account is created.

### 1.2. Dashboard Access

Client receives instant access to the Partnership / Developer Dashboard.

**Dashboard shows:**
- Onboarding progress tracker
- Required documents checklist (KYC, KYB, compliance docs)
- API documentation
- Sandbox quick-start guide
- Contact channels (support, legal, technical)

### 1.3. Application Submission

- When the form is completed, the client's onboarding application is automatically submitted for initial compliance review.
- Client receives a confirmation email and can monitor progress in the dashboard.

## 2. Sandbox Access (Limited Mode)

Client is granted limited-credit sandbox API access immediately after registration.

**Provides:**
- Test API keys with rate limits
- Ability to try essential endpoints
- Access to mock data and simulated transaction flows

**Purpose:** Allow early technical exploration while legal/KYC review is ongoing.

## 3. Compliance & KYC / KYB Review

### 3.1. Document Collection

If documents are missing or incorrect, client receives a notification (email + dashboard alert).

**Client can upload:**
- Business registration documents
- Ownership/UBO info
- AML/KYC compliance policies
- Technical and data security documentation

**Automated checks (optional):** file format validation, expiration date detection, OCR extraction.

### 3.2. Follow-up Requests

- Compliance officers may request clarifications or additional documentation.
- Dashboard displays all outstanding requirements and deadlines.

## 4. Legal Review & Contracting

### 4.1. Initial Contract Delivery

After KYC/KYB passes initial compliance review, the legal team sends:
- Draft service agreement
- Pricing schedules
- Data protection agreements (DPA)
- Service level agreements (SLA)

### 4.2. Negotiations

- Legal/partner team and client iterate on terms.
- All document versions accessible in dashboard for transparency.

### 4.3. Signing

Final contract is e-signed by both parties.

**Once signed:**
- Compliance is marked as complete.
- Technical onboarding moves to next stage.

## 5. Full Sandbox Access (Unlimited Mode)

**Client receives:**
- Production-equivalent sandbox API keys
- Client ID + Client Secret
- Expanded API limits and endpoints (including money movement simulations)
- Access to webhook testing environment

### 5.1. Technical Implementation Support (Optional but recommended)

Integration engineers may provide:
- API flow design guidance
- Webhook validation support
- Error-handling best practices
- Sample code and SDKs

## 6. Production Readiness Assessment

Before granting live access, confirm:
- Compliance approval
- Legal approval & signed contracts
- Webhook endpoints verified with TLS/HTTPS
- Transaction monitoring obligations agreed upon

## 7. Go-Live & Production Access

### 7.1. API Promotion

- Provide production API credentials.
- Migrate from sandbox to live environment.
- Enable full functionality (FX, payouts, accounts, etc.).
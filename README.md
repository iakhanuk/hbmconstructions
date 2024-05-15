# Hydrogen Building & Maintenance Ltd.

Hydrogen Building & Maintenance Ltd. is a construction company based in the Essex, UK. This project is a website for the company.

Visit the website at [www.hbmconstructions.co.uk](https://www.hbmconstructions.co.uk).

## Getting Started

### Pre-requisites

- Node.js v18.0 or higher
- npm v10.0 or higher
- A DatoCMS account, with required models.
- A Resend account

### Instructions

1. First, Setup environment variables by creating a `.env.local` file in the root directory of the project. Add the following environment variables to the file:

    ```bash
    NEXT_PUBLIC_SITE_URL=

    NEXT_DATOCMS_API_TOKEN=

    RESEND_API_KEY=

    EMAIL_TO=
    EMAIL_FROM=
    EMAIL_FROM_NAME=
    ```

2. Install dependencies:

    ```bash
    yarn
    # or
    npm install
    ```

3. Run the development server:

    ```bash
    yarn dev
    # or
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Thai Province API

This repository provides an API for managing and retrieving information about provinces, districts, and sub-districts in Thailand. It is built using Next.js and TypeScript.

## Features

- **Provinces**: Retrieve a list of provinces or details about a specific province.
- **Districts**: Retrieve a list of districts, districts by province ID, or details about a specific district.
- **Sub-Districts**: Retrieve a list of sub-districts, sub-districts by district ID, or details about a specific sub-district.
- **Authentication**: Validate API requests using `x-api-key` headers.

## Project Structure

```
.
├── app/
│   ├── api/
│   │   ├── district/
│   │   │   └── route.ts
│   │   ├── province/
│   │   │   └── route.ts
│   │   ├── subDistrict/
│   │   │   └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── controllers/
│   ├── authController.ts
│   ├── districtController.ts
│   ├── provinceController.ts
│   └── subDistrictController.ts
├── data/
│   ├── district.json
│   ├── province.json
│   └── subDistrict.json
├── public/
├── services/
│   ├── authService.ts
│   ├── districtService.ts
│   ├── provinceService.ts
│   └── subDistrictService.ts
├── utils/
│   ├── interface.ts
│   └── validation.ts
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Endpoints

### Province Endpoints

- **GET /api/province**: Retrieve a list of provinces.
- **POST /api/province**: Retrieve details about a specific province by ID.

### District Endpoints

- **GET /api/district**: Retrieve a list of districts.
- **POST /api/district**: Retrieve districts by province ID or details about a specific district by ID.

### Sub-District Endpoints

- **GET /api/subDistrict**: Retrieve a list of sub-districts.
- **POST /api/subDistrict**: Retrieve sub-districts by district ID or details about a specific sub-district by ID.

## Setup

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/thai_province_api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd thai_province_api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Testing

To run tests (if applicable):

```bash
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For any inquiries, please contact [kj.kaseamsankeawjeen@gmail.com].

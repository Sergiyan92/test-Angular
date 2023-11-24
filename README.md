### Currency Converter App

This Angular application provides a simple currency converter tool, allowing users to convert amounts between Ukrainian Hryvnia (UAH), US Dollar (USD), and Euro (EUR). The app fetches real-time exchange rates from an external API to perform accurate currency conversions.

#### Features:

- **User-Friendly Interface:**

  - Input field for entering the amount to convert.
  - Dropdowns for selecting the source and target currencies.

- **Dynamic Currency Conversion:**

  - Fetches live exchange rates to ensure accurate conversions.
  - Converts the entered amount between selected currencies.

- **Stylish Design:**
  - Utilizes Tailwind CSS for a clean and modern user interface.
  - Responsive design for optimal viewing on various devices.

#### How to Use:

1. Enter the amount you want to convert.
2. Select the source currency from the dropdown.
3. Choose the target currency from the second dropdown.
4. Click the "Convert" button to see the converted amount.

#### Technologies Used:

- **Angular:** Front-end framework for building robust and dynamic web applications.
- **Tailwind CSS:** Utility-first CSS framework for styling the user interface.
- **API Integration:** Connects to an external API to fetch real-time exchange rates.

#### Installation:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in your browser.

#### Acknowledgments:

The app uses exchange rate data from https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json for accurate and up-to-date currency conversion.

#### Contributors:

- Serhii Kondratchuk

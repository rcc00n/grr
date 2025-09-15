GreenRent – Static Car Rental Website

GreenRent is a static website for a fictional car‑rental business in Crimea. It offers an attractive landing page that highlights available vehicles, showcases the company’s advantages, explains rental rules, and allows customers to make booking enquiries. The project is built with HTML, CSS and JavaScript and is designed to be deployed as a purely static site (for example via GitHub Pages).

Features
Dynamic landing page

The home page features a hero section with a background image and call‑to‑action button inviting visitors to rent a car. Navigation links scroll smoothly to sections like “Cars”, “Advantages”, “About Us”, “Contacts” and “Rules”. JavaScript listens for scroll events to change the header’s background when the page is scrolled more than 50 pixels, adds reveal animations via an IntersectionObserver, and implements smooth scrolling when anchor links are clicked
GitHub
. CSS custom properties define the site’s colour palette (deep green primary colour and golden accent), fonts and dark theme
GitHub
.

Fleet overview and individual car pages

The Cars page lists the fleet with cards for each vehicle (Hyundai Solaris, Kia Rio, Volkswagen Polo, Skoda Rapid, Toyota Camry, Nissan X‑Trail, etc.). Each card includes a photo, key characteristics and a daily rental price
GitHub
. Clicking “More details” opens a dedicated page for the chosen car. For example, the Volkswagen Polo page displays engine type, horsepower, transmission, drive type, fuel consumption, security deposit and daily rate
GitHub
. A booking form allows customers to select rental dates/times, pick‑up/return locations, extras (child seat, second driver, booster), and enter personal details. The form is static and does not send data to a server; it can be adapted for integration with a back‑end or email service.

Advantages and About Us sections

The Advantages section outlines reasons to choose GreenRent, such as a curated fleet of fresh vehicles, favourable rental terms, optional delivery to any part of Crimea and full insurance coverage. The About Us page states that GreenRent has been operating in the car rental market for over 10 years and focuses on quality service to make customers’ stay in Crimea as comfortable as possible
GitHub
.

Rental rules

The Rules page describes important rental conditions, including:

Driver requirements: Age 23–70 years and at least 3 years’ driving experience; additional drivers must meet the same requirements. Younger drivers may be accepted with a higher deposit
GitHub
.

Required documents: National passport and driver’s licence
GitHub
.

Booking and payment: Reservations can be made via the website, phone, email or messaging apps; payment is required before the rental, and extensions must be pre‑paid
GitHub
.

Cost coverage and extras: The rental price includes taxes, insurance and seasonal tyres; optional extras (GPS navigator, child seat, regional delivery, airport fee) and extra drivers beyond the second incur additional charges
GitHub
.

Pick‑up and return: Cars are provided clean with fuel, and must be returned in the same condition; cleaning and refuelling fees apply otherwise
GitHub
.

Territory of use: Permitted travel areas include Crimea, Sevastopol and certain neighbouring regions; leaving these areas requires approval
GitHub
.

Cancellation policy: Prepayment equals one day; cancellations more than seven days before rental are fully refundable; within seven days, the prepayment is non‑refundable
GitHub
.

Other conditions: Minimum rental is two days; using the car as a taxi is prohibited
GitHub
.

Contact page and forms

The Contacts page provides a form for visitors to send enquiries (name, phone number and message) and lists contact information (phone, email, address)
GitHub
. Similar forms appear on the home page and on individual car pages. As with the booking form, these forms are static placeholders and do not perform actual submission; you can integrate them with a backend (for example, using form‑handlers or email services) to handle enquiries.

Project structure
grre/
├── index.html          # Home page with hero, fleet preview, advantages, about and contact sections
├── cars.html           # Fleet overview page
├── cars/               # Directory for individual car pages (one HTML file per car)
├── about.html          # About Us page
├── rules.html          # Rental rules page
├── contacts.html       # Contact page with enquiry form
├── js/
│   └── script.js       # JavaScript for header behaviour, smooth scrolling and reveal animations:contentReference[oaicite:14]{index=14}
├── css/
│   ├── styles.css      # Main stylesheet with variables, layout, hero design and card styles:contentReference[oaicite:15]{index=15}:contentReference[oaicite:16]{index=16}:contentReference[oaicite:17]{index=17}
│   └── rules.css       # Specific styles for the rental rules page:contentReference[oaicite:18]{index=18}
├── images/             # Assets such as car photos and icons (not tracked by GitHub API)
└── README.md           # (You are here)


Each HTML page is self‑contained and links to shared styles and scripts. Car pages in the cars/ directory follow the same template structure, making it straightforward to add new vehicles by copying an existing file and updating the content.

Getting started

Since this project is a static website, no build tools are required. You can clone the repository and open index.html in your browser to explore the site locally. To make changes:

Install a local web server (optional) – Tools like http‑server
 or Python’s http.server help avoid cross‑origin restrictions when working with JavaScript.

Modify content:

Update text directly in the HTML files.

Replace images in the images/ folder to update car photos, hero backgrounds or icons.

Copy an existing cars/<car>.html file to create a new car page; adjust the specifications and images accordingly.

Customize styles: Edit the CSS variables at the top of css/styles.css to change the colour palette, fonts and spacing
GitHub
. Additional layout rules for the rules page reside in css/rules.css
GitHub
.

JavaScript interactions: The script is minimal; to add more dynamic behaviour (for example, form submission or modal windows), extend js/script.js or include additional scripts. 
GitHub
 provides a clear example of event listeners and the IntersectionObserver API.

Deployment

Because the site is purely static, deployment is simple. You can host it on any static hosting service (GitHub Pages, Netlify, Vercel, etc.):

# Example: deploy to GitHub Pages
git clone https://github.com/rcc00n/grr.git
cd grr
# Commit any changes you made, then push to a branch named 'gh-pages' or enable GitHub Pages for the repository.


If using GitHub Pages, configure the repository settings to serve from the main branch or a docs/ folder, depending on your preference.

Customizing and extending

Integrate a backend: The booking and contact forms currently do nothing. To capture user input, connect the forms to a server (e.g., using PHP, Node.js, or a serverless function) or use third‑party services like Formspree.

Add more cars: Duplicate one of the car detail pages in cars/, rename it (e.g., cars/ford-focus.html), and update the image, specifications, and price. Ensure you update the card in cars.html and the preview on the home page.

Translate content: All content is in Russian; you can translate the site by editing the HTML and CSS files. Consider using a separate language folder or implementing a simple language switcher.

Improve responsiveness: The current CSS provides a desktop‑centric layout. Use media queries to refine the layout for tablets and mobile devices.

Enhance accessibility: Add alt attributes to all images and ensure forms and navigation are accessible via keyboard.

License

This project does not specify a licence file. If you plan to reuse or modify the code, please ensure you have the necessary rights or consider adding an appropriate open‑source licence.

GreenRent demonstrates how a compelling static site can showcase a business’s offerings with clean design and simple interactivity. Use it as a template for your own rental service or as a starting point for more advanced web projects.

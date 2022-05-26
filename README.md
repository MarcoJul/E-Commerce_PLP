# E-Commerce (PLP + PDP)

![GitHub top language](https://img.shields.io/github/languages/top/MarcoJul/E-Commerce_PLP?color=yellow)
![GitHub language count](https://img.shields.io/github/languages/count/MarcoJul/E-Commerce_PLP)

This is an SPA designed to show an product list, testing the basic functionality of an e-commerce website.

## How it's made

Before start writing any line of code, the most difficult decision is the "HOW?". Requirements are to build an e-commerce website, so just React wouldn't be so suitable (Routing is fine, but no SEO support ahead).

What would be the answer?

<br>

<p align='center'>
<img src="./resources/bad_idea.jpeg" width=30% height=30% alt='idea'>
</p>

> "I've got an idea!" "A bad one?" "Awful"

<br>

So the answer that comes up in my mind is to use [**Next.js**](https://nextjs.org/), a framework that I briefly encountered in a test project not so long time ago.

I'm not very familiar with all the features of this framework, but every challenge is a chance to try something new, even if you are involved with some opportunities.

That's the spirit..

<br>

<p align='center'>
<img src="./resources/airplane.jpeg" width=50% height=30% alt='airplane'>
</p>

> "Is there anyone on board who knows how to land a plane?" "until I try, I'll never know"

<br>

Ok, first decision has been made. Now let's populate the rest of the tool box:

- **React**, obviously. Apart of the routing scaffolding (more intuitive than the React Router) React has been used for create components that keep simpler and organized the code. The UI elements have been taken out of the pure-functional components, to keep these lighter and more readable.

- **Css modules**, for the styling purposes (not with BEM methodology, since the modules are all divided by components);

- _getStaticProps_, _getStaticPaths_ and _getServerSideProps_: these have been applied since I'm interested to try out their potential: not only the prerendering of the fetched data for all the pages (that causes in speed improvement for loading pages) but also because Next keeps these parts of code out of the client side, so all the endpoints are hidden and considered server-side informations;
  <br>
  <br>

## What you can do in this SPA

<hr>

<br>

In this test site, you will encounter three different pages: a collections page, a product list page, and a product page.

The **_Collections Page_** (redirected from the `'/'` url, landing in `'/collections/'`) display just the list of the collections, and each of them brings to its specific product list.

The **_Product List Page_** (url: `'collections/[collectionName]'`) has these features:

- Show the products list;
- Display filters in the collection hero section;
- Allow sorting based on the time the product is created;

The **_Product Page_** (url: `'collections/[collectionName]/[collectionId]'`) has (for this repository purpose) just the task of showing the product informations, as well as the price, the vendor, the tags, etc.

### Things to be improved

Having unlimited time, it would be nice if this section wouldn't be here, but still..

<br>

<p align='center'>
<img src="./resources/handbrake.jpeg" width=30% height=30% alt='handbrake'>
</p>

> "Earth's emergency handbrake"

<br>

Let's at least use it as a To-do-list for the future commits.

<br>

1. **Image optimization**:

Next.js has a built-in feature that allows to optimize the images included in the project. At the moment the markup of the images is the standard `<img />` tag.

2. **Improved pagination elements:**

These test endpoints had only 20 product more or less, so I could not test the functionality with a lot of pages and forward-backward buttons. The next improve would be a side buttons to go forward and go backwards.

3. **Different PDP rendering if product is out of stock**

In the Json file reached from the endpoints it's included the property _status_ and _inventory_, that could be used to render conditionally the content of the PDP with an 'Out of stock' message or a 'low availability' message;

4. **Fix the issue while building and deploying the product pages**

In the building test, in order to do the deployment of the SPA, some of the data are not fetched, and as a results in the build some PDP are missing informations.

This problem is under investigation: it could be that it's not suitable to fetch all the pages in the building action (it's useless for a large website to have all the pages pre-rendered at once) or maybe the endpoints support only a restricted number of calls per minute.

As soon as I get the solution, I will be here to fix this problem.

_Edit: despite the 'soft' failure in the next build, while uploading and deploying on Vercel everything is ok._

5. **Use the breadcrumb to link to product page with the selected filter activated**

In the PDP, my goal is to activate the link in the breadcrumb to go back to the product list page, with the selected filter already active.

<br>
<br>

> Thanks to [Randall Munroe](https://xkcd.com/) for the images

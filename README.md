# Affinidi-Shopping-Cart

added product category
invoice
added products
footer
user profile
check if logged in to show profile icon

## Table of Contents

1. [Introduction](#1-introduction)
2. [Setup for Developers](#2-setup-for-developers)
   - 2.1[Account in Affinidi Vault](#21-account-in-affinidi-vault)
   - 2.2 [Clone the repo](#22-clone-and-install)
   - 2.3 [Initialize](#23-initialize)
3. [New features](#3-new-feature)
   - 3.1 [User Dashboard](#31-user-dashboard)
   - 3.2 [Product Category](#32-product-category)
   - 3.3 [Invoice generator](#33-invoice-generator)
   - 3.4 [Footer](#33-footer)
     <!-- 5. [Log Out Users](#5-log-out-users) -->
        <!-- - 5.1 [How to Log Out a User](#51-how-to-log-out-a-user) -->
        <!-- - 5.2 [Logout Modes](#52-logout-modes) -->
     <!-- 6. [Get User Information](#6-get-user-information) -->
        <!-- - 6.1 [Getting User Information](#61-getting-user-information) -->
     <!-- 7. [Enable User Wallet Interactions](#7-enable-user-wallet-interactions) -->
        <!-- - 7.1 [Validating a Message Signature](#73-validating-a-message-signature) -->
     <!-- 8. [Send Your First Transaction](#8-send-your-first-transaction) -->
        <!-- - 8.1 [Scenario](#81-scenario) -->
        <!-- - 8.2 [Create a New Contract Instance](#82-create-a-new-contract-instance) -->
        <!-- - 8.3 [Call the Contract Method](#83-call-the-contract-method) -->
        <!-- - 8.4 [Working with Typescript](#84-working-with-typescript) -->

## 1. Introduction

Affinidi plays a transformative role in the development of the decentralized identity ecosystem by reshaping digital identioty management within today's digital landscape. Being at the forefront of this change, Affinidi is driven by a vision to redefine how digital identities are managed and shared online through innovative solutions.
By empowering individuals to take control of their digital identities and enabling businesses to leverage consumer data for personalized experiences while prioritizing privacy, Affinidi addresses the challenges posed by fragmented digital identities controlled by third-party or centralized providers. Through its tools, Affinidi enhances trust in digital interactions and adheres to global data protection standards, contributing to a more secure and user-centric digital identity landscape. Highlighted products such as Affinidi Login and Affinidi Vault exemplify the company's innovative approach to digital identity management, marking its crucial role in shaping the future of online identity authentication and privacy preservation.

Affinidi Shopping Cart is a web application that utilizes the Affinidi Login service. It is a simple web application that allows users to login using their Affinidi Vault's credentials, add products to cart and checkout.

## 2. Setup for Developers

For developers who wish to test the application locally, here are the prerequisites and steps to get started.

### 2.1 Account in Affinidi Vault

To be able to use the login product, you will need to have an account in Affinidi Vault.

#### Install and create

Refer to [this link](https://chromewebstore.google.com/detail/affinidi-vault/fejpjjkbaklcdcibmkbmpanjbiihclon?pli=1) to install Affinidi Vault on your local machine. It comes as a browser extension. You will then follow prompts that will allow you create and an account.

#### Browser Support

Firefox is not supported and so it is adviced to use Chrome browser to install Affinidi Vault.

### 2.2 Clone and install

Navigate to your directory of choice and clone the repository using the following command. Ensure to have **git** installed in your system.

```bash
git clone https://github.com/codegrann/Affinidi-Shopping-Cart.git
```

Then run the following commands to install the dependencies.

```bash
npm install
```

Once again navigate to the **_server-app_** directory and run the same command above.

### 2.3 Initialize

Inside the **_server-app_** directory, run

```bash
npm start
```

to start the server.

Also within the root folder, run the same command above to start the application on your localhost.

## 3. New Features

Some of the features I added to the eccomerce application are discused below.

### 3.1 User Dashboard

There is an improvement to the site by introducing a user dashboard where each user can view their persoal info, offered by their vault credentials.
Before a user logs in, the dashboard will not be visible and the link to the dashboard will also not be displyed. One will only be prompted to login.
![Before logging in](/public/previews/prelogin.png)
After being logged in, an user icon appears in the header which redirects to the dashboard.
![After logging in](/public/previews/postlogin.png)
When one navigates to the dashboard, they will be greeted with the interface below, where a user can only view their personal info but not able edit.
![Dashboard](/public/previews/profile.png)

### 3.2 Product Category

I was able to implement a product category feature in the application which could help a user filter out products according to their preferences. The filter lies at the top of the page for ease of accessibility.
![category](/public/previews/category.png)
I added more products to be able to demonstrate the feature, with each product having its category type. To be on point, my application has only to categories of products, **_"furniture"_** and **_"dressing"_**. Products will be displayed depending on the filter triggered.

#### All products

![All products](/public/previews/all.png)

#### Dressing category

![Dressings](/public/previews/dress.png)

#### Furniture category

![Furniture](/public/previews/furniture.png)  
One can move back and forth between the categories by clicking on the filter button.

### 3.3 Invoice generator

It is a good practice to have the user get a copy of all the items they have ordered on the go. I implemented a invoice generator which generates and downloads a pdf file of the items the user has ordered, the price and quantity of each item together with the total price purchase. This is triggered in the cart page before one checks out.

![Invoice](/public/previews/invoice.png)
Clicking the **_Generate Invoice_** button triggers a function that checks for the cart content and generate a pdf containing items details.
![Invoice download](/public/previews/invoicedownload.png)
The pdf is locally stored in the user's device and can be opened in any pdf reader.
![Invoice preview](/public/previews/invoicepreview.png)
One can thereafter go to checkout and make the purchase.

### 3.4 Footer

One of good practices in web development is giving users easy access to quick links even after scrolling to the bottom of the page.
I included dummy links to social media accounts and a list of services offered.
![Footer](/public/previews/footer.png)

### Summary

Apart from the vault, Affinidi also has a product, the [Affinidi Portal](https://go.stackup.dev/affinidi-portal). Affinidi Portal is an interactive interface enabling developers to manage resources like Projects and Login Configurations to integrate Affinidi Login into their application. Developers can view the billing and analytics, including tracking the usage of the services. Visit the [Affinidi docs](https://docs.affinidi.com/dev-tools/affinidi-portal/) to learn how to get started with a project in the portal.

Hope you have learnt from the reading and enjoyed the cool features I added to the application. Thank you.

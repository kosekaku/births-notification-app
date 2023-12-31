# DHIS2 Births Notification App

A React based DHIS2 births notification application that fetches data from DHIS2 instance's tracker program and generate a births certificate .

## App Demo new Repo [link](https://github.com/kosekaku/South-Sudan-Births-Notification-Certificate)

This app built using Typescript and DHIS2 app runtime has been move to a new Javascript focused app using DHIS2 app platform with vanila Javascript due to DHIS2 authenication issues with app runtime when using the organization unit components, and data queries components like useDataQuery, useDataMutation, etc

## Features

1. Fetches new births from DHIS2 tracker program

2. Transform the data and render list of available births based on facility(organization unit) and period selections

3. Generate certificate and make it availble for dowload and printing

4. Confirm certificate is generated by the system

## Tools

> React 18

> Typescript 4

> DHIS2 UI Library

> DHIS2 App runtime

## Available Scripts

### `yarn start`

Runs the app

### `yarn test`

Launches the test runner

### `yarn build`

Builds the app for production to the `build` folder

## Contributions guide

Fork this repository and then make a pull request to this repo.

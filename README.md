# Universal Sharing Ministry Exercise

This repo has the sample code for connecting to Salesforce using OAuth Web Server flow from an LWC OSS App.  It borrows heavily from the lwc-oss-oauth application created by adityanaag3 - Aditya Naag, for scaffolding and logging into Salesforce.

## About the app

This app is incomplete at this point.  It contains js source necessary to login to Salesforce and an SLDS form for entering data into fields which will ultimately be used to create an Opportunity, Account, and Contact record to register a new member for USM.

I was beginning to build out the Apex class needed to insert the data into Salesforce.  The class in the Salesforce Org provided is:  RegisterNewMember.

I created several List Views in the Org under the Opportunity object.  I added an external Id to the Opportunity, as well.

The login portion of the code is working, and I created a Connected App in the Org called CCM Exercise to provide REST access.  The MemberForm.html markup file uses SLDS to display the beginnings of the form for new member registration.

In the integrationService.js file, I was beginning to build out the call to the Org to post the data into the Opportunity, Account, and Contact objects.

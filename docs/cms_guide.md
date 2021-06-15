# DSNP.org Website Content Management Guide

All content for the DSNP.org website is managed through the [Ghost CMS](https://ghost-cms.dsnp.org/ghost/).

## Pages

Most pages on the DSNP.org website are assembled from Posts, to make it possible to apply custom styling. So, you can generally ignore the Pages section in the sidebar of the Ghost CMS, because those pages are only headers with blank bodies to be filled in by Gatsby.

The exceptions are the Pages named "Testnet", "SDK", and "Example Client", since they are only plain text and don't need any special styling, you can edit the text for those pages directly through the Pages editor.

## Posts

Most content on the site is stored as Posts, and uses special tags to indicate how that content should be displayed on the DSNP.org website.

A Post is simply a block of content with a header, a body, and an optional image. Every Post has a publication date, an author, and some tags, but that extra information might not be used on the website.

### Blog

Any Post that is marked with the tag `#BlogPost` will be displayed in the Blog section of the website. Blog posts show the author and publish date on the website, so check to make sure this information is set correctly.

If you want to see a list of only Blog posts in the Ghost CMS, change the filter at the top of the main Posts page from "All tags" to "#BlogPost".

### FAQ

Any Post that is marked with the tag `#FAQ` will be displayed on the FAQ page of the website. The header of each FAQ post is a single question, and the body of the Post is the answer.

FAQ posts are displayed on the website in the order of their publication date, so if you need to change the order, just change the publication dates. (The dates aren't displayed on the website, so it doesn't matter what the dates are, all that matters is that FAQs with more recent dates will be displayed on the top of the FAQ page.)

If you want to see a list of only FAQ posts in the Ghost CMS, change the filter at the top of the main Posts page from "All tags" to "#FAQ".


### Home

The Home page of the website contains several different styles of content. All content on the Home page is tagged with `#HomePage`. Additional tags are added to mark sections for special styling.

 * The main intro paragraph is a Post named "What We Do", and is tagged with `#HomePageWhatWeDo`.
 * The cards under the "Get Started" heading are each separate Posts, tagged with `#HomePageEcosystemCard`. The link for each card is stored in the "Excerpt" field of the Post.

### About

The About section of the website contains several different styles of content. All content in the About section is tagged with `#AboutPage`. Additional tags are added to mark sections for special styling.

 * Content for the "Ecosystem" page in the About section is tagged with `#AboutPageEcosystem`.
 * Content for the "Guiding Principles" page in the About section is tagged with `#AboutPagePrinciples` and `#AboutPageGovernance`.
 * Content for the "Who We Are" page in the About section is tagged with `#AboutPageMission` and `#AboutPageWhoWeAre`. Individual bios for the board, advisory council, and staff have the additional tags `#WhoWeAreExecutiveBoard`, `#WhoWeAreAdvisoryCouncil`, and `#WhoWeAreStaff`.

Images for the individual bios are each 250 width x 300 height, and should be uploaded as the "post image" for the bio. (The full image won't display in the Ghost CMS editor interface, but it will display correctly on the website.)


## View site

Since we're only using Ghost as a CMS, the "View site" link in the sidebar does not show a real preview. You can preview your content changes on the [Netlify preview site](https://friendly-goldberg-7cc494.netlify.app/).

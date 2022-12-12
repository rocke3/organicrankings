<script setup>
definePageMeta({ layout: "user-layout" });
useHead({ title: "SEO - Organic Rankings" });
</script>
 
<template>
  <div>
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="mb-0">Step #3: Using Rich Results</h5>
        <p class="mb-0">How to code and use Rich Snippets to improve your user's experience</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/richsnippets.jpg"
              alt="Implementing rich snippets" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Rich Results</h6>
            <p>Rich Results display elements of your website which can include items such as carousels, images, and
              non-textual elements. Your <NuxtLink to="/user/seoimprove/userexperience">user
                experience</NuxtLink> will improve because when you implement rich snippets they tend to have a much
              higher
              click-through rate. Below I will break down and explain the different Rich Results that you should focus
              on for <NuxtLink to="/user/seoimprove/websitecontent">improving your rankings</NuxtLink>.</p>
            <p>While there are many types of formats for a Programmable Search Engine to recognize you will need to know
              which ones area used when you generate a rich snippet. It has its own algorithm and policies and decides
              on which ones will be displayed to its users. So if you use the incorrect element for your structured data
              that is added to your pages then you risk that the data is not used or shows up in the search results. It
              uses only JSON-LD, Microdata, and RDFa when generating rich snippets and it has its own algorithm and
              policies for determining what information gets shown to users.</p>
            <ul>
              <li>JSON-LD: a structured data that is invisible that uses JSON format.</li>
              <li>Microdata: a mark up for content that is invisible using the new HTML5 standard.</li>
              <li>RDFa (Resource Description Framework in Attributes): to mark up a page with visible content with any
                data in any format.</li>
            </ul>
          </div>
        </div>
        <div class="mt-3 px-xl-5">
          <h6>Setting Up Reviews</h6>
          <p>When it comes to reviews, I rarely see many companies set this up correctly. When you collect reviews you
            should not combine them all into one file and then display them on each page. By doing this you not only
            change the relevancy of the page but you create <NuxtLink to="/user/seoimprove/improvingcontent">duplicate
              content on each web page</NuxtLink>. So,
            for example, if you have a list of reviews from customers from previous hotel reservations that they made
            with you then you will want to separate them according to each city they booked it in. You would not want
            “Walt Disney World Dolphin Resort” reviews showing up on a page about hotels in Anchorage, Alaska, right?
            How about “Hilton Cabana Miami Beach” reviews showing up on a page in Denver, Colorado? So, my point is that
            you want to make these pages more relevant when using your customer reviews, not less relevant. While
            obtaining organic ranking takes time and work, correcting these common issues can improve your rankings
            quickly. The best way to correct this issue is to apply the reviews for each city to the corresponding city
            page only and not share it with any other city page. So if a customer made a review about a hotel in Orlando
            then you would want this review showing up only on the Orlando page, not the Denver page. This way you are
            not creating duplicate content on your website and can enjoy your page being constantly updated with fresh
            content each time a new review comes in. It is a win-win when it comes to content marketing.
          </p>

          <h6>Review Snippet</h6>
          <p>Another way you can improve your rankings and traffic is by setting up reviews with Review Snippet. This is
            a great way of having your listing stand out on the SERPs, which can result in a higher number of clicks. It
            offers a snippet for your reviews that has a short excerpt along with a rating of the reviews. It will take
            an average score of the reviews for customers to view so they can better understand the quality of the
            product or service.
          </p>
          <div class="text-center">
            <img class="img-fluid border rounded shadow" src="https://www.organicrankings.com/assets/reviews.jpg"
              alt="Schema for Reviews" />
          </div>


          <UserSignupAction>Get the code for Review Snippet for your website</UserSignupAction>

          <p>There are paid subscription services that will offer you the ability to create reviews for your website.
            What many website owners and coders do not realize is that some of those companies may post your reviews
            that are intended for your website on their websites as well. The result can be filtering out the identical
            content which is ultimately a loss in rankings, this is just as bad as getting penalized. Make sure to ask
            your review company how they will prevent this from occurring before you start working with them.</p>

          <h6>Breadcrumb Markup</h6>
          <p>Breadcrumb Markup helps users understand the site structure and specifies the page’s position for the
            website's hierarchy. This kind of structured data is among the most important rich snippets you will use. It
            tells how you organize the structure of your website and will help you rank as long as your website has been
            properly structured. To use it you must first figure out how you want to structure your website. If you use
            a page called “Orlando Hotels” then the structure is easier to create. For example, you may want to set up a
            main page called “U.S. hotels” with links for all 50 states. This is the top page of the breadcrumb
            structure. Then the next page may be listing out all of the cities in the State of Florida that you do
            business in such as Orlando, Miami, Tampa, etc. This is the second page of the breadcrumbs. Then lastly you
            will want to show a page for “Orlando hotels” itself. So the structure would look like this:</p>

          <p class="text-danger">United States > Florida > Orlando</p>
          <p>So how do you create the code for the breadcrumb snippet? It is quite simple once you have the code and the
            understanding of how it works. Below is an example of how you would use it on the “Orlando Hotel” page.
            Please note, in order for the structure data test to work you would need to add the code to each of the
            “United States > Florida > Orlando” pages and remove the breadcrumbs as needed.</p>
          <p>This would be the breadcrumbs for the United States page: <span class="text-danger">United States</span>
          </p>
          <p>This would be the breadcrumbs for the Florida page: <span class="text-danger">United States >
              Florida</span></p>
          <p>This would be the breadcrumbs for the Orlando page: <span class="text-danger">United States > Florida >
              Orlando</span></p>
          <div class=" text-center">
            <img class=" img-fluid border rounded shadow"
              src="https://www.organicrankings.com/assets/breadcrumbssearch.jpg" alt="Schema for Breadcrumbs" />
          </div>


          <UserSignupAction>Get the code for Breadcrumb Markup for your website</UserSignupAction>

          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow" src="https://www.organicrankings.com/assets/breadcrumb.jpg"
              alt="Schema for Breadcrumbs" />
          </div>

          <h6>FAQ Schema</h6>
          <p>The FAQ Schema is a markup that allows you to post a list of commonly asked questions and answers regarding
            the page that you are working on. Then changes this to a rich snippet and displays it on their SERPs as an
            accordion style list. This allows your users to quickly find answers to their questions regarding your
            website. Using an FAQ Schema also helps make your website stand out among your competitors.</p>
          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow" src="https://www.organicrankings.com/assets/schema.jpg"
              alt="Schema for FAQ's" />
          </div>
          <p>FAQ Schema set up: Replace your <span class="htmlCode">HTML</span> tag with this in the header of your
            website. You must a unique line to the header in order for the FAQ Schema to work. Then inside your content
            add something similar to the following with the content modified to the FAQ’s for your customers:</p>


          <UserSignupAction>Get the code for FAQ Schema for your website</UserSignupAction>

          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow" src="https://www.organicrankings.com/assets/faqschema.jpg"
              alt="Schema for FAQs" />
          </div>

          <h6>Homepage Markup</h6>
          <p>The Homepage Markup offers a strong signal to the algorithm so there is no guessing which information is
            important to you. The information will show up on the Knowledge Graph, a display given to you when customers
            search for your company. When you complete the code you will only add it to the homepage as it is not needed
            on any other subsequent pages.</p>
          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow"
              src="https://www.organicrankings.com/assets/homepagemarkup.jpg" alt="Schema for Homepage" />
          </div>
          <p>Here is an example of a Homepage Markup you can use. Just make sure you modify the content of it to your
            website information including what type of business you are, which can be reviewed here <a
              href="https://schema.org/Organization" target="_blank">Schema.org Type - Organization</a>:</p>


          <UserSignupAction>Get the code for Homepage Markup for your website</UserSignupAction>

        </div>
        <div class="my-4">
          <div class="border rounded shadow p-3 text-primary text-bold text-center"
            style="max-width: 700px;margin: auto;">
            <h6 class="text-bold">
              The above information is a brief explanation of this technique. To learn more about
              how we can help your company improve its rankings in the SERPs, contact our team below.
            </h6>
            <div class="mt-3">
              <a class="btn btn-primary me-3" href="">Get Help</a>
              <a class="btn btn-primary d-inline-block" href="">hire an expert</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    
<style scoped>
.htmlCode {
  color: #e06150;
}

.htmlCode:before {
  content: "<";
}

.htmlCode:after {
  content: ">";
}
</style>



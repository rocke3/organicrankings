<script setup>
import stepTimeline from "./stepTimeline";
definePageMeta({ layout: "user-layout" });
useHead({ title: "SEO - Organic Rankings" });
</script>
 
<template>
  <div>
    <div class="card">
      <div class="my-4">
        <div class="border rounded shadow p-3 text-primary text-bold text-center"
          style="max-width: 700px;margin: auto;">
          <h5 class="text-bold">
            Our Lighthouse Guarantee
          </h5>
          <h6>We guarantee that we will improve your website's Lighthouse audit and get your overall Performance, SEO,
            Accessibility and Best Practices between the 90-100 range.
          </h6>
          <div class="mt-3">
            <a class="btn btn-primary me-3" href="">Get Help</a>
            <a class="btn btn-primary d-inline-block" href="">hire an expert</a>
          </div>
        </div>
      </div>
      <div class="card-header pb-0">
        <h5 class="mb-0">Step #8: Using Lighthouse</h5>
        <p class="mb-0">How to code and update your website audits for Lighthouse to improve your user experience.</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/lighthousecoding.jpg"
              alt="Lighthouse SEO Updates" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Coding for Lighthouse</h6>
            <p>After you have split your CSS code for Critical CSS, you will want to run your website through a tool
              called Lighthouse to improve the overall <a href="https://www.organicrankings.com/websitespeed.php">speed
                of your website</a> and correct any coding errors. Lighthouse is a very sophisticated software that will
              analyze each single page on your website for improvements you can make to your website’s code in the
              optimization categories of Performance, Best Practices, Accessibility and SEO for mobile and desktop
              devices. Fixing issues found by your Lighthouse audit may take some time to update and can be complicated
              at times, but it will be worth the effort to improve your website’s organic rankings and boost the quality
              score of your website in paid advertising networks such as Google and Microsoft Bing.</p>
            <p>
              <i class="material-icons color-primary align-text-bottom me-1">login</i> View one of our clients who had
              website loading and ranking issues: <a href="https://www.organicrankings.com/client-lighthouse.php">Before
                and After Lighouse Fixes
              </a>
            </p>
          </div>
        </div>
        <div class="mt-3 px-xl-5">

          <p>Below is a screenshot of the top half of the Lighthouse audit for the website OrganicRankings.com showing
            100% across all sections. If you <a href="https://www.organicrankings.com/codingerrors.php">correct all of
              the coding errors</a> in Lighthouse and reach 100% on all of the optimization categories you will see a
            visual animated fireworks display on the Lighthouse testing tool indicating that you have fully completed
            the corrections:</p>

          <UserSignupAction>Subscribe to use our Lighthouse extension software</UserSignupAction>

          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow"
              src="https://www.organicrankings.com/assets/lighthouseaudit100percent.jpg"
              alt="Lighthouse Fireworks at 100%" />
          </div>


          <h6>The 4 Categories of Lighthouse</h6>
          <p>Lighthouse gives a score for each category ranked from 0-100. If you reach 100% on all the categories you
            will see an animated fireworks display on your browser congratulating you. Below are the 4 categories
            Lighthouse is testing for:</p>

          <h6>Performance</h6>
          <p>This tool is designed to improve your website's overall performance or how fast your browser can render a
            webpage. Performance is one of the 6 metrics with 40 audits that your website has to pass. Lighthouse tracks
            and analyzes the First Contentful Paint, Speed Index, Largest Contentful Paint, Time to Interactive, Total
            Blocking Time and Cumulative Layout Shift (CLS) which you will need to update on your website.</p>

          <h6>Best Practices</h6>
          <p>The tool for Best Practices displays a list of 14 audits that you need to fix errors and pass in the
            development of your code.</p>

          <h6>Accessibility</h6>
          <p>The tool for Accessibility is designed to show you how to improve your web page’s overall quality which you
            will have to pass 54 audits to complete.</p>

          <h6>SEO</h6>
          <p>The SEO category of Lighthouse shows users the usability of the web pages for improving your rankings that
            has 15 audits that you will need to pass to complete.</p>
          <p><i class="material-icons color-primary align-text-bottom me-1">login</i> To better understand what code you
            will need to update on your website you can view Lighthouse audit updates.</p>

          <h6>How to use Lighthouse in Chrome DevTools</h6>
          <p>Install the Lighthouse tool on your Chrome browser with the following links below. You will want to load
            the web page you need to update and then run the software to generate a report of the page. This will help
            you quickly identify and correct issues that are hindering your website's performance, accessibility, user
            experience, and SEO.</p>
          <h6>Using the Lighthouse Online Testing Tool</h6>
          <p>Another way to test your web pages on Lighthouse is to use the online testing tool. It will give you quick
            results on the pages it analyzes. Use the following links below to find the online tool. Once you are there
            you enter the URL of the web page you want to fix and click on RUN AUDIT. Once completed you will be able to
            view which areas of the page that you need to fix.</p>

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



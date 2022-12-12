<script setup>
import stepTimeline from "./stepTimeline";
definePageMeta({ layout: "user-layout" });
useHead({ title: "SEO - Organic Rankings" });
</script>
 
<template>
  <div>
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="mb-0">Step #9: Coding Errors</h5>
        <p class="mb-0">Test your website for issues with the code and the functionality of the web pages so they can
          properly rank in the SERPs</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/codingerrors.jpg"
              alt="Update Coding Errors" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Locating Coding Errors</h6>
            <p>If you have a website with coding errors it can affect how you rank in search engines. Having clean code
              helps website owners improve their ROI and improve low-quality pages, speed up slow pages, improve the
              user experience due to poorly visible pages and functions, helps users not land on 404 error pages,
              prevents pages that are uncrawlable, and prevents sites that are hackable.</p>
            <p><i class="material-icons color-primary align-text-bottom me-1">login</i> To better understand what areas
              you need to improve including code errors you can view our <NuxtLink
                to="https://www.organicrankings.com/websiteaudits.php">SEO Website Auditing</NuxtLink>.</p>
          </div>
        </div>
        <div class="mt-3 px-xl-5">
          <h6>Inspect Element for Chrome or Safari</h6>
          <p>To quickly improve your <NuxtLink to="/user/seoimprove/lighthouse">Lighthouse errors</NuxtLink> I
            always suggest using Inspect Element. Inspect Element is a feature that comes already installed on most
            modern browsers such as Chrome or Safari where you can view and edit the HTML, CSS and Javascript and see
            your changes in a test environment. It allows you to make changes to the page and then view what it will
            look like before you add the changes to the file directly. I prefer using Chrome’s inspect over Safari’s
            inspect personally as it is more user friendly. To find it, simply go to the web page you want to inspect in
            the Chrome browser and then right click on the web page and then select “Inspect” from the list. You can
            also use the Ctrl+Shift+C shortcut for Windows and Command+Shift+C for Mac to display inspect as well. From
            here you will be able to view code that you can edit on your webpage and make any changes you want to see in
            action before making them live.</p>

          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow" src="https://www.organicrankings.com/assets/inspectorcode.jpg"
              alt="Inspector for browsers" />
          </div>

          <h6>Using Performance in Inspector</h6>
          <p>When using inspector's Chrome DevTools Performance panel you will be able to analyze runtime performance
            for your web pages. Developers can use the RAIL model for improving performance goals or the life cycle of a
            web app such as the response, animation, idle, and load. You should be striving for a goal for a response to
            input in under 100 ms but with a goal of 50 ms chunks during idle time. Your goals should be as
            follows:Animation: produce a frame in 10 ms, Idle: maximize idle time and Load: deliver content and become
            interactive in under 5 seconds. Your primary tools to accomplish this should be with Chrome DevTools and
            Lighthouse.</p>

          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow"
              src="https://www.organicrankings.com/assets/performanceinspect.jpg" alt="Inspector Performance" />
          </div>


          <h6>Using Performance Insights</h6>
          <p>When using Performance Insights you can record each page to discover new improvements and issues such as
            page load, streamlining data on a page and an analysis of fixes needed on a page.</p>

          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow"
              src="https://www.organicrankings.com/assets/performaceinsights.jpg" alt="Performance Insights" />
          </div>


          <h6>Website Analyzers</h6>
          <p>Screaming Frogs is a software that spiders, or crawls, your entire website and analyzes and gathers
            information about each individual page. It includes features that display issues with broken links,
            duplicate content, improvements to title and meta data, finds redirects, etc. Depending on how large your
            website is it can take from a few minutes to an hour to run but it is worth the wait. It will give you some
            of the best information on improvements to your SEO that you will find.</p>
          <p>How to use it: You will have to pay for a subscription for the software before you can download it to your
            computer. Once you download it, open it and add the root URL (homepage URL) of your website to the URL field
            to run an audit on your website. Once completed it will give you over 20 tabs that will provide a
            comprehensive breakdown full of improvements you can make to your website, export of data, items for you to
            consider changing, and more.</p>

          <h6>Website Visibility</h6>
          <p>Improve your understanding of your marketing needs with all-in-one tool suites that helps you improve your
            website visibility, your primary website topic from an SEO standpoint, <NuxtLink
              to="/user/seoimprove/paidads">PPC ad campaigns</NuxtLink>, competitive
            research, and more. It is also an excellent resource for discovering poor quality links pointing toward your
            website that you can utilize to add to the disavow tool.</p>

          <h6>Insights on Website</h6>
          <p>Get insights on your website to improve your business and explore your website by scanning for SEO issues
            and performs audits on how to <NuxtLink to="/user/seoimprove/seopractices">improve your site rankings
            </NuxtLink>.</p>

          <h6>SEO Crawler</h6>
          <p>Analyze your website and improve your pages. As an SEO crawler and log analyzer you will find the
            improvements it has to offer helpful to understanding your marketing needs.</p>

          <h6>Disavow Tools</h6>
          <p>Disavow links are a method used to remove harmful links that are pointing towards your website which could
            damage your rankings with low-quality links. Search engines offer you a way to remove these backlinks coming
            to your website by using your account to identify links pointing toward your website so you can decide which
            links you would like to remove. When adding links to your disavow list, I recommend using SEMrush which has
            its own tool that locates links from around the web that point back to your website. It classifies links as
            either harmful or safe by a ranking scale which ultimately lets you decide which links you want to keep or
            remove. Once you compile a list of harmful links that you do not want pointing toward your website then you
            can manually upload a file or automate into the disavow tools to request them not allow the links to be
            counted against you.</p>
          <p>You should note that sometimes different search engines and software will show very different harmful links
            to disavow so you must manually create a list for each one if you want to catch every possible bad link
            pointing toward your website. If this seems like too much work you can just connect your SEMrush account to
            the Google Console (a feature already built into your SEMrush account) and it will do this for you
            automatically. Be careful using the disavow tools as removing bad links can <NuxtLink
              to="https://www.organicrankings.com/seorankings.php">improve your rankings</NuxtLink> but removing good
            links can harm your
            rankings.</p>


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



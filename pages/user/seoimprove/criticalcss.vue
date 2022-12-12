<script setup>
definePageMeta({ layout: "user-layout" });
useHead({ title: "SEO - Organic Rankings" });
</script>
 
<template>
  <div>
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="mb-0">Step #6: Critical CSS</h5>
        <p class="mb-0">Loading elements above the fold of each web page will increase the speed significantly</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/criticalcsscoding.jpg"
              alt="Improve CSS Loading for Speed" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Coding for Critical CSS</h6>
            <p>After you have cleaned up your code with the <NuxtLink to="/user/seoimprove/htmlvalidators">HTML
                Validator</NuxtLink> you will move on to Critical CSS which refers
              to splitting off all of the CSS code for your website that is above the fold (what users can visually view
              on a webpage before they start scrolling) into two separate files.</p>
          </div>
        </div>
        <div class="mt-3 px-xl-5">
          <h6>Why is Critical CSS Important?Why is Critical CSS Important?</h6>
          <p>Applying Critical CSS to your page allows the page to load quicker and it also <NuxtLink
              to="/user/seoimprove/richresults">improves the CLS (Cumulative
              Layout Shift)</NuxtLink> of each webpage. CLS is how your web page visually shifts and moves as the page
            elements are
            being loaded. The results of improving your CLS can be tested in Lighthouse, which is a ranking signal with
            search engines. You can improve the render times of you website with <a
              href="https://web.dev/extract-critical-css/" target="_blank">implementing critical CSS technique</a>.</p>

          <h6>How do I implement Critical CSS on my Website?</h6>
          <p>The first step is to remove all of the CSS from your webpage and combine them on a notepad including, if
            possible, any Inline CSS (any CSS added directly to a div, span, or p tag through the style attribute). Here
            is an example of an inline CSS at the style attribute (style="float:left"):</p>

          <p>
            <span class="htmlCode">div class="noo-social social-icons" style="float:left"</span>
          </p>
          <p>Once you complete this, then add the combined CSS to the webpage and then run your page through a Critical
            CSS software generator that will speed up the process. Over the years I have found the following software to
            be the best Critical CSS generator:</p>

          <h6>Critical Path CSS Generator</h6>
          <p>You can reduce the amount of CSS your browser has to download and render as the web page is loading which
            will increase the speed. You can access our Critical CSS software by signing up for a subscription for our
            services.</p>

          <div class=" text-center mb-4">
            <img class=" img-fluid border rounded shadow" src="https://www.organicrankings.com/assets/criticalcss.jpg"
              alt="Critical CSS" />
          </div>
          <p>Where to find our Critical Path CSS Generator software:</p>

          <UserSubscribeAction>Subscribe to use our Critial CSS software</UserSubscribeAction>

          <p>How to use it: Copy all of your CSS copy and paste it into the “FULL CSS” field. Then copy and paste the
            URL you are trying to correct. Once completed you will have a CSS file to insert into the header of your
            webpage. The remainder of the CSS you will put into the footer of your website but you will want to test
            your web page’s javascript, php, etc. to be assured that some of it was not needed in the header when
            loading the page but this is not usually the case.</p>

          <h6>Critical CSS’s Improved Service</h6>
          <p>Reduce the CSS on your web page and <NuxtLink to="/user/seoimprove/websitespeed">improve the
              speed of your website</NuxtLink> by reducing the amount of CSS being captured above the fold.</p>
          <p>How to use it: Create an account and insert the URL you are wanting to create the Critical CSS file for.
            Once the files are created insert the files on your website.</p>
          <p>Once you complete this process, it will split your CSS code into two separate files. You will take the
            Critical CSS the generator gave you and add it near the meta tags of your headers. This will allow the CSS
            file to start loading the moment a user enters your website and quickly improve visual shifting which should
            result in a much lower CLS. The remainder of the CSS you will add closer towards the footer of the page so
            it loads last since it is irrelevant to anything above the fold. If you have scripts that need to be
            pre-loaded for the CSS to function, be sure to manually remove them from the footer and add them back to the
            Critical CSS file above the fold. You can <NuxtLink to="/user/seoimprove/lighthouse">test this
              in Lighthouse</NuxtLink> to see the improvements to your website
            speed and CLS (Cumulative Layout Shift) which you will learn about in a later chapter.</p>

          <h6>Removing Unused Javascript and CSS</h6>
          <p>This online tool will help you remove unused Javascript and CSS from your code but you should be careful
            using it as it could affect the functionality of some elements of the page. If you notice some functions
            break, add those lines back into the original code. Where to find the UnCSS Online:</p>

          <UserSubscribeAction>Subscribe to use our Remove Unused CSS software</UserSubscribeAction>


        </div>
        <UserGetHelpOrHire>
          The above information is a brief explanation of this technique. To learn more about
          how we can help your company improve its rankings in the SERPs, contact our team below.
        </UserGetHelpOrHire>
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



<script setup>
import stepTimeline from "./stepTimeline";
definePageMeta({ layout: "user-layout" });
useHead({ title: "JS Tools - Organic Rankings" });
</script>
 
<template>
  <div>
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="mb-0">Some SEO Steps That We Use</h5>
        <p class="mb-0">Steps we take to improve your rankings and improve your ad spend</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/seowebsite.jpg" alt="John Doe" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Some of the steps we use to rank websites</h6>
            <p>Over the past 2 decades we have been approached by companies who want to know how to rank high in the
              search engines and the tools used to improve and keep our rankings on the first page. All of the
              information included on this website are based on our experience and opinion so our advice should be used
              at your discretion. If you do not implement these suggestions correctly your results may differ. Examples
              used are for informational purposes only, some examples may concern copyrighted keywords, which may not be
              available for you to bid on in some <a class="text-primary"
                href="https://www.organicrankings.com/paidads.php">pay per click
                networks</a>. Please always check with the search engine in
              order to stay up to date with its policies in this regard. Also, be sure to test the links that are listed
              in this website or use alternative links where necessary as some companies may have gone out of business
              over time or the domain names may have ended up with new owners. If you have any issues or questions you
              can reach us.</p>
          </div>

          <div class="mt-4 col-lg-7 col-xxl-8">
            <h6>The Purpose of these Steps</h6>
            <p class="text-justify">The purpose of these steps are to help website owners understand how to rank their
              website organically.
              The goal is to remove as many technical terms and in depth details as possible so you only get what you
              need to grow your business. These steps are designed to teach you everything there is to know about SEO
              (that
              would take much longer to do), but rather teach users what I believe are the essentials of what you need
              to do for your website to rank higher. While it can seem very overwhelming at first, once you understand
              why you
              are making the changes the picture will become clear and you will learn the techniques used in ranking
              your
              website very quickly. I remember when I first had to learn all of the functions and elements of Facebook
              when I created my first account. It took some time to understand the terms, what each section did and how
              to use the features, but over time I managed my account quite easily. This is the same for ranking your
              website.
              It will take some time and effort getting familiar with the tools and building your knowledge of why you
              are making changes. When you finish implementing them then all you have to do is maintain the pages and
              make
              updates for new rules as they come along. For ranking organically you must have someone that can code and
              that can also implement SEO techniques and strategies. Without the ability to do both of these, it would
              be nearly impossible to rank in the SERPs (Search Engine Results Pages). Gaining organic rankings takes a
              lot
              of work but the rewards you’ll see from your hard work helps improve every ad campaign you create from
              Google
              Ads and Microsoft Advertising to Facebook. I will list out the steps you need to take to improve your
              rankings
              so you are not guessing on where to begin. Once you complete the steps you will be able to test your
              results
              and see first hand the improvements you made and let time take over as your website pages cycle through
              the
              different algorithms of Google such as Panda, Penguin, Hummingbird, Pigeon, Possum, Fred, RankBrain, and
              Google’s core updates.</p>
            <div class=" my-4">
              <div class="border rounded shadow p-3 text-primary text-bold text-center">
                <h6 class="text-bold">To learn more
                  about how we can help your company improve its rankings in the SERPs, contact our team below.</h6>
                <div class="mt-3">
                  <a class="btn btn-primary me-3" href="">Get Help</a>
                  <a class="btn btn-primary d-inline-block" href="">hire an expert</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 col-lg-5 col-xxl-4">
            <div class="ps-4">
              <div class="timeline timeline-one-side">
                <div class="timeline-block mb-3" v-for="item in stepTimeline">
                  <span class="timeline-step">
                    <i class="material-icons color-primary">{{ item.icon }}</i>
                  </span>
                  <div class="timeline-content">
                    <h6 class="mb-0">
                      <span v-if="item.preText">{{ item.preText }}: </span>
                      <NuxtLink :to="item.url" class="text-primary">
                        {{ item.text }}
                      </NuxtLink>
                    </h6>
                    <div class="ps-2 mt-2" v-if="item.child">
                      <div v-for="child in item.child">
                        <i class="material-icons color-primary" style="vertical-align: text-bottom;">arrow_forward</i>
                        <NuxtLink :to="child.url" class="text-primary ms-2 text-bold">
                          {{ child.text }}
                        </NuxtLink>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    
<style scoped>
#outputJs {
  white-space: break-spaces;
}
</style>
    
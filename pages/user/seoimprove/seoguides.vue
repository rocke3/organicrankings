<script setup>
definePageMeta({ layout: "user-layout" });
useHead({ title: "SEO - Organic Rankings" });
onMounted(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
</script>
 
<template>
  <div>
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="mb-0">Guides to SEO Marketings</h5>
        <p class="mb-0">How you can begin to improve your SEO position and rankings</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/internetmarketing.jpg"
              alt="SEO Guides" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Who is this guide for?</h6>
            <p>This guide is meant for anyone who uses search to manage, legalize, or promote content on the Internet.
              This guide may be useful if you own a business or website, are an SEO professional, or are just interested
              in how search engines work. We will provide information that anyone who is interested in learning more
              about SEO can benefit from. In this manual, you will learn how to make your content easier to understand
              for search engines. SEO (or Search Engine Optimization) often involves making small changes to your
              website. It might not seem like these changes have much effect alone, but they can have a significant
              impact on user experience and organic search results. Despite being familiar with some of the topics we
              will cover, you might not be taking full advantage of them. When creating a website, creating the best
              user experience possible should be your top priority. A search engine can help users to find your sites,
              and SEO can help search engines better understand your content. While your online content may be smaller
              or larger compared to the average website, the information in this manual can apply to sites of any size.
            </p>
          </div>
        </div>
        <div class="px-xl-5">
          <h6>Getting started with getting your site in the search engine's index?</h6>
          <p>
            To test whether your site is in the search engines, you can do this basic test: type site: [your site’s URL]
            into the SERPs. If your site shows up as one of the first results, then your site is on the search engines.
          </p>
          <p class="mb-1">
            There may be a number of reasons why your site isn’t on search egnines:
          </p>
          <ul>
            <li>Your site has launched recently and it hasn’t gotten the chance to crawl it yet</li>
            <li>When attempting to crawl your site, received an error</li>
            <li>The site’s design makes it challenging for the search engines to crawl it</li>
          </ul>

          <h6>How do I get my site on the search engines?</h6>
          <p>The search engines usesweb crawlers to constantly look for new sites to add. Most of the sites listed were
            added in automatically, not manually. If yours was not added automatically, no need to worry! It provides
            webmaster guidelines to build a website that can allow them to crawl your site. While it is not guaranteed
            that the search engines can crawl your site, following these steps can make it easier for your site to
            appear in their search results.</p>
          <p>In order to help you submit your site to the search engines, you can use the Search Console. With Search
            Console, you can turn on notifications that alert you of issues with your website that it finds.</p>

          <h6>Help the search engines find your content</h6>
          <p>In order for search engines to add your site to their index, and needs to know where it is. You can use a
            sitemap, which is a file that alerts search engines any time you update your website.</p>

          <h6>Tell search engines which pages you don't want crawled</h6>
          <p>For data not requiring special protection you can stop robots.txt from crawling your website. The file
            robots.txt, located in the root directory, can filter which pages of your site the search engines can
            access. However, it is possible that parts of your sites that are blocked can still be accessed and crawled.
            For more sensitive pages, a more secure method would be advised.</p>
          <p>You should avoid allowing the search engines to crawl your internal search result pages. This can cause
            users to end up on a different search engine page than they clicked on.</p>

          <h6>For sensitive information, use more secure methods</h6>
          <p>For more sensitive pages, the robots.txt file may not be the best way to block search engines. While the
            file can tell crawlers that a page should not be accessed, it cannot stop browsers from receiving those
            pages. This could be because if there are links to the URLs you block in different places, search engines
            can still reference them. Another reason could be that if search engines don’t follow the Robots Exclusion
            Standard, it could deny the robots.txt. A final reason that the robots.txt file might not work could be that
            someone could guess the URL to your sensitive pages by studying your robots.txt file.</p>
          <p>To prevent this, you can use the noindex tag. This is used when you don’t want the page to appear in the
            search engines. However, it can be accessed if someone has the URL. The best way to secure your pages would
            be to require authorization, like asking for a password.</p>

          <h6>Help the search engines (and users) see and understand your content</h6>
          <p>Normally, search engines can only see the page how the users see it when they crawl your pages. If you want
            the SERPs to crawl your page more effectively, you can allow them to access your JavaScript, image files,
            and CSS. However, if your robots.txt file does not allow the search engines to crawl these parts of your
            site, then you can’t render your consent as well as you could, which could affect your rankings.</p>
          <p>You can use the URL Inspection tool if you want to see how the SERPs will see your site and can help you to
            find and fix any issues.</p>

          <h6>Create unique, accurate page titles</h6>
          <p>If you want to see what the topic of a specific page is, you can use the <span
              class="htmlCode">title</span> element. You can create a title for each page if you put <span
              class="htmlCode">title</span> inside of the <span class="htmlCode">head</span> element of your HTML
            document.</p>

          <h6>Control your title links and snippets in search results</h6>
          <p>The <span class="htmlCode">title</span> element could appear as the title of your link if your document is
            in a search results page. It can include bits of information such as the name of your website/business, your
            businesses main focuses, and the physical location.</p>

          <h6>Accurately describe the page's content</h6>
          <p>You should try to choose a title that can communicate what your business or website is about to the user.
          </p>
          <p><span class="text-danger">Avoid:</span> You should avoid using text that doesn’t relate to your content,
            or any default text such as
            “Untitled Page”.</p>

          <h6>Create unique <span class="htmlCode">title</span> elements for each page</h6>
          <p>A good idea to help the search engines to know how to distinguish each page would be to add unique text to
            the <span class="htmlCode">title</span> element. You should also add different text on different versions of
            your site, such as a mobile version.</p>
          <p><span class="text-danger">Avoid:</span> You should not use the same title for a large portion of your
            pages.</p>

          <h6>Use brief, but descriptive <span class="htmlCode">title</span> elements</h6>
          <p>You should also avoid making the titles too long, since search engines may show you only a small portion of
            the text.</p>
          <p><span class="text-danger">Avoid:</span> You should avoid using long text in the <span
              class="htmlCode">title</span> elements</p>

          <h6>Use the meta description tag</h6>
          <p>The meta description tag is a tag that you give to a page that describes what the page’s purpose is. This
            tag can be longer than a title, and can even be a short paragraph. Similar to the title, it is placed in the
            <span class="htmlCode">head</span> element. What are the merits of meta description tags? Tags are important
            because they might be used in the search results for your pages. This is not always the case, however, as
            the search engines could choose to use part of your page’s text instead. But using the meta description tags
            are always important since SERPs might not be able to use good text on your page as snippets.
          </p>

          <h6>Accurately summarize the page content</h6>
          <p>When writing your meta descriptions, you should write in an informative and interesting way. Even though
            there is no limit to the amount of characters you can write in the tag, it is better to write a short
            paragraph than a few words.</p>
          <p><span class="text-danger">Avoid:</span> When writing a meta description tag, you should try to use specific
            descriptions instead of generic
            sentences. You should also avoid only using keywords.</p>

          <h6>Use unique descriptions for each page:</h6>
          <p>The meta description tags are important to both search engines and users. However, if your websites have a
            large number of pages, typing a unique meta description may not be worth the time and effort. When this
            happens, generating these descriptions automatically might be a better option.</p>

          <h6>Use heading tags to emphasize important text</h6>
          <p>In order to organize your content in an easy to understand way, you should add meaningful headings.</p>

          <h6>Imagine you're writing an outline</h6>
          <p>You should decide where to write heading tags and where to write main and sub points.</p>
          <p><span class="text-danger">Avoid:</span> You should always add useful text in the headers and avoid using
            heading tags when other tags (such
            as <span class="htmlCode">strong</span> and <span class="htmlCode">em</span>) may be better fit.</p>

          <h6>Use headings sparingly across the page</h6>
          <p>You should use headings sparingly, since too many can make your content more cluttered for users.</p>

          <h6>Add structured data markup</h6>
          <p>To help search engines better understand your site's content, structured data can be added to your pages to
            describe your content. In search results, search engines can display your content in eye-catching and
            helpful ways based on this understanding. Your business can then attract the right kind of customers as a
            result.</p>
          <p>Having an online store that marks up individual product pages makes it easier for us to realize that the
            page features a bike, its price, and customer reviews. This information may be displayed in the snippet for
            relevant search results. This type of results is known as rich results.</p>
          <p>We may serve relevant results in other formats as well as using structured data markup for rich results. If
            you have a brick-and-mortar store, marking up your opening hours allows your potential customers to find you
            when they need you, despite your store being open/closed when they search. To describe your content, you
            should use structured data with any of the supported notations markup. You can use tools like Data
            Highlighter and Markup Helper to add the markup to your HTML code.</p>

          <h6>Check your markup using the Rich Results Test</h6>
          <p>Use the Rich Results test after you’ve marked up your content to ensure that there are no mistakes. Copy
            the HTML that includes the markup or enter the URL where the content is located.</p>

          <h6>Use Data Highlighter and Markup Helper</h6>
          <p>Data Highlighter, an integrated search console tool that supports a subset of content types, is a tool that
            lets you experiment with structured markup without having to change the html or the code of the web page.
            Try the Markup Helper if you want the markup code ready to copy and paste.</p>
          <p><span class="text-danger">Avoid:</span> If you are unsure how to implement markup, change the source code
            of your site.</p>

          <h6>Keep track of how your marked up pages are doing</h6>
          <p>Rich results reports in Search Console give you a breakdown of the number of pages on your site with a
            particular type of markup, how often they appear in search results, and how often they are clicked.</p>

          <h6>Manage your appearance in search results</h6>
          <p>Structured data is one of the most important components of a page in the search engines, because it can be
            used to achieve a variety of special results, as well as star reviews, enhanced results, and others. See the
            list of possible results in the gallery below.</p>

          <h6>Organize your site hierarchy</h6>
          <p>Understand how search engines use URLs<br>
            To crawl and index content, and to refer users to it, search engines need a unique URL for each piece of
            content. To be indexed properly in search, different content types and variations must have separate URLs.
          </p>
          <p>If possible, search engine suggests using https:// for all your websites. It’s most commonly the same
            domain name as your email address. Search engines can distinguish between www.example-website.com and just
            example-website.com. You should add both the http:// and https:// versions of your website when adding it to
            Search Console.</p>
          <p>The hostname and protocol are case-insensitive, so upper or lowercase won’t affect the URL. The path,
            filename, and query string determine what content from your server is accessed.</p>
          <p>Due to the fact that fragments, such as #info, are used only to identify which part of the page the browser
            scrolls to. As there is usually no difference in content regardless of the fragment, search engines tend to
            ignore fragments.</p>
          <p>There is no need to use a trailing slash after the hostname because both redirects to the same page. A
            trailing slash in a path or filename is seen as a different URL.</p>

          <h6>Navigation is important for search engines</h6>
          <p>Visitors can quickly find the content they want through the navigation of a website, while search engines
            can learn what the website owner thinks is important by the navigation of a website. In addition to
            providing search results by page, it likes to understand the bigger picture that a page contributes to.</p>

          <h6>Plan your navigation based on your homepage</h6>
          <p>For many visitors, the home or root page of a website is the starting place for navigation and usually the
            most frequently visited page. Make sure you consider how visitors will access pages containing more specific
            information, unless your site has only a few pages.</p>

          <h6>Using breadcrumb lists</h6>
          <p>Breadcrumbs allow visitors to navigate back to a previous section or the root page quickly through a row of
            internal links on a page. When showing breadcrumbs, it is recommended to use breadcrumb structured data
            markup when displaying the most general page.</p>

          <h6>Create a simple navigational page for users</h6>
          <p>You can display the structure of your website on your navigational page, which usually contains a
            hierarchical listing of your site’s pages. It's main purpose is to attract human visitors to your site, but
            search engines will also crawl this page.</p>

          <h6>Create a naturally flowing hierarchy</h6>
          <p>Use navigation pages effectively and work them into your internal link structure when it makes sense for
            users to go from general to more specific content. To enable users to discover similar content, link to
            related pages on your site, where appropriate. Make sure all of the pages on your site can be reached
            through links.</p>

          <h6>Use text for navigation</h6>
          <p>It is easier for search engines to crawl and understand your site if most of the navigation between pages
            is controlled by text links. Rather than waiting for the user to interact with the page, use a JavaScript
            element with URLs as href attribute values, and generate all menu items on page-load, instead of waiting for
            a user interaction.</p>

          <h6>Create a navigational page for users, a sitemap for search engines</h6>
          <p>Provide users with a simple menu system for your entire site so that they can navigate quickly. An XML
            sitemap file, which lists all relevant URLs along with their last modified dates, will help search engines
            discover new and updated pages on your site.</p>

          <h6>Show useful 404 pages</h6>
          <p>A 404 page kindly guides visitors back to a working page on your site if they arrive at an incorrect URL or
            follow a broken link on your site. Users can utilize search engines Console to discover the "not found"
            issues found on your website. Include a link to your root page and links to your most popular or related
            content.</p>
          <p><span class="text-danger">Avoid:</span> You should avoid allowing search engines to index your 404 pages.
          </p>

          <h6>Simple URLs convey content information</h6>
          <p>By categorizing and naming your website’s documents in a descriptive manner, you will not only keep your
            website more organized and make linking to it easier. URLs with few recognizable words that are extremely
            long and cryptic may intimidate visitors.</p>

          <h6>URLs are displayed in search results</h6>
          <p>As a final note, the URL to a document will usually appear near the document title in a search engine
            result. Even complex URL structures are crawled by the search engines, but it’s good practice to keep URLs
            as simple as possible.</p>

          <h6>Use words in URLs</h6>
          <p>Visitors navigate your site more efficiently if your URLs contain words that relate to the content and
            structure of your site.</p>

          <h6>Create a simple directory structure</h6>
          <p>You can use your directory structure to indicate the type of content found at that URL. If you know what
            type of content is found at that URL, you can use your directory structure to indicate it.</p>

          <h6>Provide one version of a URL to reach a document</h6>
          <p>Focus on using and referring to one URL in your structure and internal linking to prevent users from
            linking to different versions of a URL. You can fix this by setting up 301 redirects from non-preferred URLs
            to the dominant URL if people are accessing the same content from multiple URLs. The rel=”canonical” link
            elements can also be if you can’t redirect.</p>

          <h6>Optimize your content</h6>
          <p>Make your site interesting and useful
            You should focus more on creating engaging and useful content on your website than on any other factor. Good
            content will likely be shared by users who see it, and other users will likely appreciate it as well. You
            may do this through blog posts, social media services, email, forums, or some other method.</p>
          <p>Quality content helps your site’s reputation both with users and the search engines, and organic or
            word-of-mouth publicity helps.</p>

          <h6>Know what your readers want (and give it to them)</h6>
          <p>Take a moment to consider the words that a user might type into a search engine to find your content. It is
            possible that people who are knowledgeable about the topic use different search terms in their searches than
            those who are not. While writing your content, you should anticipate and account for these differences in
            search behavior. There is an easy-to-use Keyword Planner feature offered by ads that helps you discover new
            keyword variations and see how many searches each keyword receives. Performance Reports provided by Search
            Console shows you your site’s top search queries and those which have referred the most traffic to it.</p>
          <p>You might want to consider creating a new, valuable service not offered by any other site. Your unique user
            base could also be leveraged to write an original piece of research, break an exciting story, or write an
            original piece of news. It may be difficult for other sites to provide these services due to a lack of
            resources or expertise.</p>

          <h6>Write easy-to-read text</h6>
          <p>Content that is easy to understand and well written is more likely to be viewed by users.</p>

          <h6>Organize your topics clearly</h6>
          <p>Organizing your content so that visitors can differentiate between content topics is always beneficial.
            Users can find the content they want faster when your content is divided up into logical chunks or
            divisions.</p>

          <h6>Create fresh, unique content</h6>
          <p>The addition of new content will not only keep your existing visitors returning, but will also bring in new
            ones.</p>

          <h6>Optimize content for your users, not search engines</h6>
          <p>A well-designed and easily accessible site that caters to the need of visitors usually yields positive
            results.</p>

          <h6>Act in a way that cultivates user trust</h6>
          <p>Let users feel comfortable visiting your site if they feel that it's trustworthy. Develop a reputation as
            an expert and trustworthy site in a particular field of expertise. Your website should include information
            about who publishes it, who provides the content, and what the site aims to achieve. You should provide
            clear and satisfactory customer service information if you operate a shopping or other financial transaction
            website. It is important to make it clear who is responsible for the content if you own a news site.</p>
          <p>In addition, using the right technology is crucial. Users can’t trust a site that doesn’t have a secure
            connection in a shopping checkout page for instance.</p>

          <h6>Make expertise and authoritativeness clear</h6>
          <p>The quality of a site is increased when it is authoritative and expert. You should have people who are
            experts in the top creating or editing content for your website. Users can gain a deeper understanding of
            the expertise of articles by providing expert or experienced sources. When such consensus exists, it is good
            practice to present it in pages on scientific topics.</p>

          <h6>Provide an appropriate amount of content for your subject</h6>
          <p>Time, effort, expertise, and talent/skill are all essential to the creation of high-quality content. The
            content should be accurate, concise, and clearly written.</p>

          <h6>Avoid distracting advertisements</h6>
          <p>Despite the fact that we expect to see advertisements on the site, don’t let them distract users or prevent
            them from engaging with the content.</p>
          <p><span class="text-danger">Avoid:</span> You should avoid adding advertisements that distract from your
            page.</p>

          <h6>Use links wisely</h6>
          <p>Users and search engines can use link text (the text in a link that you can see) to learn more about the
            page you are linking to, as well as the text contained within the link itself. A link can be either external
            or internal. Internal links are those that point to pages on your website, while external links will lead to
            content on another website. It is always better to make your anchor text as good as you can so that users
            can learn what your page is about and helps users to find your site easier.</p>

          <h6>Choose descriptive text</h6>
          <p>When creating anchor text, it should provide the user with a basic understanding of the purpose behind your
            site.</p>

          <h6>Write concise text:</h6>
          <p>You should avoid writing long text and instead opt for using short text that can describe your site well.
          </p>

          <h6>Think about anchor text for internal links too</h6>
          <p>Linking to outside websites is usually thought of as pointing to other sites, but anchor text can improve
            your site's ability to be navigated better by search engines and users.</p>

          <h6>Be careful who you link to</h6>
          <p>Whenever your site links to another site, you can share some of the reputation your site has built up. In
            comment sections or message boards, users can add links to their own websites. There are times when you do
            not want to credit a site with your reputation because you mention it in a negative light.</p>
          <p>A widget link is another example of how the nofollow attribute can be useful. When you use a widget from a
            third party to enhance your site and engage users, make sure the widget doesn’t contain any links you didn’t
            intend to place on your site. Make sure you are not placing any links on your site that you did not intend
            to have alongside the widget if you are using a third party’s widget to enhance the experience. As a website
            owner, you may not have control over anchor text in widgets that add links to your site. There is always a
            way to disable such links with nofollow if you can’t remove them from the widget. You should include the
            nofollow on links in the default code snippet if you are creating a widget for functionality or content you
            provide.</p>
          <p>You can also nofollow every link on a page by adding a meta tag inside its head tag (<span
              class="htmlCode">meta name="robots" content="nofollow"</span>).</p>


          <h6>Combat comment spam with nofollow</h6>
          <p>When linking to another page, set the rel attribute to nofollow or urgc to not follow the link’s
            reputation. This could be useful if you have a blog with public comments enabled, as links within those
            comments may pass your reputation to pages on your site that you aren’t comfortable recommending. It is
            common for comment spam to appear in blog comment areas on pages. When you nofollow these links, you won’t
            give your site’s reputation to spammers.</p>
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
    
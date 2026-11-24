import { blogPosts } from "./blog-posts.js";
   const contain = document.getElementById("posts-container");
   
    blogPosts.forEach(post => {
      if (post.tag === "#sports") {
        const blogPost = document.createElement("div");
    
        const blogPostHTML = 
         `<article class="post">
           <h2 class="post-title">${post.title}</h2>
           <p class="post-body">${post.body}</p>
           <p class="post-date">${post.date}</p>
           <p>⊹ ࣪ ˖</p>
        </article>
       `;
       
       blogPost.innerHTML = blogPostHTML;
       contain.appendChild(blogPost);
      } 
    });
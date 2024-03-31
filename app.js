const blogs = [
    {
        title: "The Evolution of Programming Languages: From Assembly to Python",
        content: "Explore the history and development of programming languages, highlighting key milestones and influential languages.",
        image: "https://imgs.search.brave.com/bNG6EratUjWiiR6eJNfettrwVEYd2PPv8wE2WKT8BOw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b193ZWJwLHFfbG9z/c3kscmV0X2ltZyx3/XzUxMixoXzUxMi9o/dHRwczovL3d3dy5i/b2Nhc2F5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NC9Qcm9ncmFtbWlu/Zy0xMDI0eDEwMjQu/cG5n"
    },
    {
        title: "10 Tips for Writing Clean and Maintainable Code",
        content: "Provide practical advice and best practices for writing code that is easy to read, understand, and maintain.",
        image: "https://imgs.search.brave.com/vWiuxw1LPwgY6H5Kq_KloS1SSlemUY39k0LlsLAFkKo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q0/RDEyQVFGbkRrcmpk/M1cySlEvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNzIw/XzEyODAvMC8xNjk0/NDE4MTQ5Mzg4P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD10eGx3/cndxazI1clFWSnln/YWxhQUJKZHd0a0Nu/TndoczBxVEhWdTE0/eFdZ"
    },
    {
        title: "Introduction to Machine Learning: A Beginner's Guide",
        content: "Explain the basics of machine learning, including key concepts, algorithms, and applications, in an accessible way for beginners.",
        image: "https://imgs.search.brave.com/XfUCeCW2w7Jt5TNxTrxTa2e3NUzRgL6LQr39d7fu8CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aGFja3IuaW8vdXBs/b2Fkcy9wb3N0cy9h/dHRhY2htZW50cy8x/Njc5MzkzMDk0MUc3/RmxYeFc2Qy5qcGc"
    },
    {
        title: "The Importance of Documentation in Software Development",
        content: "Discuss the benefits of thorough documentation in software projects and provide tips for writing effective documentation.",
        image: "https://imgs.search.brave.com/WVKHH0V-PoU_4fvn7O5viDkKqlqy-S2Enqqt2jVs0ZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9zdXBlcnB1cGVy/dGVzdC9iZmRlZTE5/Yy1hZDE1LTRlYTUt/YjEyZS01YTJlNmZm/YmY5MDlfVGhlK0lt/cG9ydGFuY2Urb2Yr/RG9jdW1lbnRhdGlv/bitpbitTb2Z0d2Fy/ZStEZXZlbG9wbWVu/dC53ZWJwP3E9ODAm/YXV0bz1mb3JtYXQm/dz05ODMmaD01MzQ"
    },
    {
        title: "Building Your First Web Application with Django",
        content: "A step-by-step tutorial on creating a web application using the Django framework, suitable for beginners.",
        image: "https://imgs.search.brave.com/gZSPHKpSrfrpTkAUsGXiZo-i3WLr8IKrDmL4Ia2KHOw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbG9jZWFu/LmNvbS9fbmV4dC9z/dGF0aWMvbWVkaWEv/aW50cm8tdG8tY2xv/dWQuZDQ5YmM1Zjcu/anBlZw"
    },
    {
        title: "The Rise of DevOps: Bridging the Gap Between Development and Operations",
        content: "Explore the concept of DevOps, its principles, and how it has revolutionized software development practices.",
        image: "https://imgs.search.brave.com/CyCzP_RnWPnFI2pP2ZZ_W434GFnCbNkxJrMlSUh4lHE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q0/RDEyQVFHejVBZzBx/NXI1WncvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNjAw/XzIwMDAvMC8xNjk1/NTI1OTk4NzQzP2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1hdDh3/bThmYjJ6OE5waWJC/VkJsdjdNUTBmZ0c1/LWxIRmJJa1ZMTVZB/LUNn.jpeg"
    }
];

const createBlogCard = (blog) => {
    const blogList = document.getElementById('blog-list');
    const blogCard = document.createElement('article');
    blogCard.classList.add('blog-card');
    blogCard.innerHTML = `
        <h2 class="text-xl font-bold">${blog.title}</h2>
        <img src="${blog.image}" alt="${blog.title}" class="mt-2 mb-2 w-full h-auto">
        <p>${blog.content}</p>
    `;
    blogList.appendChild(blogCard);
};

document.getElementById('blog-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    const image = document.getElementById('blog-image').files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
        const blog = { title, content, image: e.target.result };
        blogs.push(blog);
        createBlogCard(blog);
        document.getElementById('blog-form').reset();
    };
    reader.readAsDataURL(image);
});

// Initialize blog cards with example blogs
blogs.forEach(blog => createBlogCard(blog));

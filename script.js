// // // // console.log(document);

// // // // const student={name:'Hasnain',age:'23',height:'5.9'};
// // // // console.log(student);
// // // // console.log(student.name);
// // // // console.log(student.age);

// // // // const blogtitles=document.getElementsByTagName('h2');
// // // // // console.log(blogtitles);
// // // // for(const h2 of blogtitles){
// // // //   console.log(h2.innerText);
// // // // }

// // // // const blogDetails=document.getElementsByTagName('p');
// // // // for(const p of blogDetails){
// // // //   console.log(p.innerText);
// // // // }

// // // // const secondTitle=document.getElementById('second');
// // // // secondTitle.style.textAlign="center";
// // // // secondTitle.innerText='Text Changed';


// // // const blogs=document.querySelectorAll('#second');
// // // // console.log(blogs);
// // // // for(const blog of blogs){
// // // //   console.log(blog);
// // // // }

// const secondTitle=document.getElementById('second');
// // console.log(secondTitle.getAttribute('id'));
// // secondTitle.setAttribute('title','This IS NEW SETAttribute');
// // secondTitle.setAttribute('style','text-Align:center');
// console.log(secondTitle.parentNode);
// console.log(secondTitle.childNodes);

// const li = document.createElement('li');
// li.innerText="My Blog -5";
// const ul=document.getElementById('listParent');
// ul.appendChild(li);

const article=document.createElement('article');
article.classList.add('blog');
const h2=document.createElement('h2');
h2.innerText='My Blog-4';
const p=document.createElement('p');
p.innerText='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente dolorum dolor harum tempora incidunt illum explicabo fugit consectetur et?'
article.appendChild(h2);
article.appendChild(p);
const blogSection=document.getElementById('blogs');
blogSection.appendChild(article);

const blogs =document.getElementsByClassName('blog');
for(const blog of blogs){
  // console.log(blog);
  blog.style.border="5px solid orange";
  blog.style.margin="50px 0px";
  blog.style.paddingLeft="50px";
  blog.style.borderRadius="20px";
}
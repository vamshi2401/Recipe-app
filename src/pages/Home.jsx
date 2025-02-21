import React from "react";


const Home = () => {
  return (
    <div class="container mt-3">
      <img src="/ban.jpg" class="img-fluid w-100 pt-1" alt="..." />
      <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div class="col">
          <div class="card">
            <img src="/image.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Veg Recipes</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/ban.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pizza</h5>
              <p class="card-text">Margherita with chesse pulling a delicious savory with a burst of spice.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/ban.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Burger</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde provident eos rerum quam, ab ipsa dolorem sit aperiam doloribus minima vero. Eius, consectetur nemo. Nobis adipisci hic deserunt totam nihil.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/ban.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pasta</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam laboriosam, fugiat hic qui debitis quidem esse accusantium sunt, alias enim pariatur tempore deleniti veniam voluptatem incidunt quos illum molestiae.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;